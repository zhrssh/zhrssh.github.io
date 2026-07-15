const LOOM_HOSTS = new Set(["loom.com", "www.loom.com"]);
const LOOM_PATH = /^\/(share|embed)\/([A-Za-z0-9_-]+)\/?$/;

function getLoomEmbedUrl(value) {
  let url;

  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" || !LOOM_HOSTS.has(url.hostname)) {
    return null;
  }

  const match = url.pathname.match(LOOM_PATH);
  return match ? `https://www.loom.com/embed/${match[2]}` : null;
}

function isStandaloneLoomParagraph(node) {
  if (node.type !== "paragraph" || node.children?.length !== 1) {
    return null;
  }

  const child = node.children[0];
  return child.type === "link" ? getLoomEmbedUrl(child.url) : null;
}

function transformChildren(node) {
  if (!node.children) return;

  const children = [];

  for (const child of node.children) {
    const embedUrl = isStandaloneLoomParagraph(child);

    if (embedUrl) {
      children.push({
        type: "html",
        value: `<div class="loom-embed"><iframe src="${embedUrl}" title="Loom video" loading="lazy" allow="autoplay; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`,
      });
    } else {
      transformChildren(child);
      children.push(child);
    }
  }

  node.children = children;
}

export default function remarkLoom() {
  return (tree) => transformChildren(tree);
}
