---
title: "How a church team stopped hand-formatting lyrics"
description: "Volunteers at Solace of Christ Church paste in a chord chart and get Sunday-ready lyrics back in seconds."
date: 2026-07-26
tags: ["n8n", "LLM APIs"]
impact: "Saves 10+ min per song, hours per month"
video: "https://youtu.be/ZZXVprN5Im0"
github: "https://github.com/zhrssh/n8n-propresenter-lyrics-formatter"
coverImage: "../../assets/projects/propresenter-lyrics-formatter-2/cover.png"
---

## What changed

Every week, volunteers at Solace of Christ Church (SCC) turn chord-chart PDFs into lyrics for ProPresenter, the software that puts words on the screen during Sunday service. They used to do it by hand, song by song.

Now they paste in the chord chart or upload the PDF. Every song comes back cleaned up, split into verses and choruses, and named, ready to download one at a time or as a zip.

That's **10+ minutes saved per song**, which adds up to hours every month for a team of volunteers giving up their own time.

![Before and after: a chord-chart PDF with chord symbols above every line, and the same song as clean, ProPresenter-ready lyrics split into verses and chorus.](../../assets/projects/propresenter-lyrics-formatter-2/output.png)

*Left: the chord chart volunteers start with. Right: the lyrics they get back, ready for ProPresenter.*

## The problem

By hand, every song meant opening the PDF, copying the lyrics out, stripping the chord symbols, splitting verses and choruses, and reformatting it all for ProPresenter. Then doing it again for the next song, every week.

My first version of this tool helped, but watching volunteers use it showed me where it fell short. They had to tell it how each file was laid out, a wrong guess gave garbled output with no explanation, and several songs meant repeating the whole cycle.

## What I built

A page made just for SCC, behind an access code. It already knows their chord-chart format, so nobody has to think about how a file is structured. Paste or upload, then download. That's the whole job now.

## What I learned

Watching real volunteers use the first version mattered more than anything I'd planned. Their stumbles reshaped the whole system, and made it simpler to maintain.

<details>
<summary>How it works, for the technically curious</summary>

Text extraction from the PDF happens in the browser, so the backend always receives plain text and never has to guess how the source file was structured. The first version tried to handle every PDF layout inside the workflow itself, which is what led to the confusing layout question in the first place.

The text goes to an n8n workflow that runs a multi-step LLM chain: grouping the raw text into songs, cleaning up chord and formatting artifacts, and converting each song into ProPresenter-ready format.

![The n8n formatting workflow](../../assets/projects/propresenter-lyrics-formatter-2/workflow-1.png)

*The n8n workflow behind the page. Each step is numbered below.*

1. A webhook receives the extracted text, along with the signature header.
2. An `If` node validates the access code; failed requests get a `401` and stop there.
3. An LLM call (Extract Lyrics) groups the raw text into individual songs.
4. `Split Out` breaks the result into one item per song.
5. An LLM call (Artifacts Cleaner) strips chord symbols, stray whitespace and other artifacts.
6. An LLM call (ProPresenter Formatter) converts the lyrics into ProPresenter-ready structure.
7. `Edit Fields` gives each song a file name.
8. `Aggregate` collects the songs into a single response.
9. `Respond to Webhook` returns the set to the page for individual or zipped download.

</details>
