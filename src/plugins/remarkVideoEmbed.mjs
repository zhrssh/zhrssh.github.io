const LOOM_HOSTS = new Set(["loom.com", "www.loom.com"]);
const LOOM_PATH = /^\/(share|embed)\/([A-Za-z0-9_-]+)\/?$/;

const YOUTUBE_HOSTS = new Set(["youtube.com", "www.youtube.com", "m.youtube.com"]);
const YOUTUBE_HOST_PATH = /^\/(embed|live|shorts)\/([A-Za-z0-9_-]+)\/?$/;
const YOUTU_BE_HOSTS = new Set(["youtu.be"]);
const YOUTU_BE_PATH = /^\/([A-Za-z0-9_-]+)\/?$/;
const VIDEO_ID = /^[A-Za-z0-9_-]+$/;

function resolveLoom(url) {
  if (!LOOM_HOSTS.has(url.hostname)) return null;

  const match = url.pathname.match(LOOM_PATH);
  if (!match) return null;

  return {
    embedUrl: `https://www.loom.com/embed/${match[2]}`,
    vertical: false,
    title: "Loom video",
  };
}

function resolveYoutube(url) {
  let id;
  let vertical = false;

  if (YOUTUBE_HOSTS.has(url.hostname)) {
    if (url.pathname === "/watch") {
      id = url.searchParams.get("v");
    } else {
      const match = url.pathname.match(YOUTUBE_HOST_PATH);
      if (match) {
        id = match[2];
        vertical = match[1] === "shorts";
      }
    }
  } else if (YOUTU_BE_HOSTS.has(url.hostname)) {
    const match = url.pathname.match(YOUTU_BE_PATH);
    if (match) id = match[1];
  }

  if (!id || !VIDEO_ID.test(id)) return null;

  return {
    embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    vertical,
    title: "YouTube video",
  };
}

function getVideoEmbed(value) {
  let url;

  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") return null;

  return resolveLoom(url) ?? resolveYoutube(url);
}

function isStandaloneVideoParagraph(node) {
  if (node.type !== "paragraph" || node.children?.length !== 1) {
    return null;
  }

  const child = node.children[0];
  return child.type === "link" ? getVideoEmbed(child.url) : null;
}

function transformChildren(node) {
  if (!node.children) return;

  const children = [];

  for (const child of node.children) {
    const embed = isStandaloneVideoParagraph(child);

    if (embed) {
      const className = embed.vertical ? "video-embed video-embed-vertical" : "video-embed";
      children.push({
        type: "html",
        value: `<div class="${className}"><iframe src="${embed.embedUrl}" title="${embed.title}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`,
      });
    } else {
      transformChildren(child);
      children.push(child);
    }
  }

  node.children = children;
}

export default function remarkVideoEmbed() {
  return (tree) => transformChildren(tree);
}
