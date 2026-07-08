---
title: "PDF/TXT File to ProPresenter-compatible Lyrics Formatter"
description: "A smart AI-powered document processing system that converts PDF/TXT files containing lyrics into ProPresenter-compatible lyrics."
date: 2026-06-21
tags: ["automation", "n8n", "AI", "document processing"]
link: "https://youtu.be/HWpGaVl3Gwo"
github: "https://github.com/zhrssh/n8n-propresenter-lyrics-formatter"
coverImage: "../../assets/projects/propresenter-lyrics-formatter/cover.png"
---

## Summary

Preparing worship lyrics for ProPresenter is often a repetitive and error-prone process. Song lyrics are commonly distributed as PDF or text documents, requiring volunteers to manually copy, clean, and format each song before it can be imported into ProPresenter.

This project automates the entire workflow using AI and n8n. Users simply upload a PDF or TXT file, and the system extracts, cleans, reformats, and returns lyrics that are ready to paste directly into ProPresenter.

## The Problem

Many churches receive worship songs in PDF or plain text format. Before they can be presented during a service, someone must:

* Open the document
* Copy the lyrics
* Remove unnecessary formatting
* Split verses and choruses correctly
* Reformat the text according to ProPresenter's expected structure

While each song only takes a few minutes, the process quickly becomes repetitive when preparing multiple songs every week. Manual formatting also introduces inconsistencies and formatting mistakes.

## Project Objectives

The project aimed to:

* Eliminate repetitive manual formatting
* Reduce preparation time for worship teams
* Produce consistently formatted lyrics
* Support both PDF and TXT files
* Create a simple upload-and-download experience with minimal user interaction

## The Solution

The workflow accepts either a PDF or TXT file through a simple upload interface.

After receiving the file, the workflow automatically extracts the text, preprocesses it, uses AI to identify the song structure and clean the content, then uses a second AI model to generate ProPresenter-compatible formatting before returning the finished lyrics.

Instead of spending several minutes formatting each song manually, users receive a clean, ready-to-use version in seconds.

## Technical Implementation
### Workflows
![Workflow 1](../../assets/projects/propresenter-lyrics-formatter/workflow-1.png)
#### Workflow 1: Lyrics Formatting Pipeline

1. Receive a PDF or TXT upload.
2. Detect the input type (a single PDF with one song per page or one song per file).
3. Extract text from the document.
4. Use an AI model to identify verses, choruses, bridges, and repeated sections while preprocessing the extracted text by removing formatting artifacts and unnecessary whitespace.
5. Send the structured lyrics to a second AI model to generate ProPresenter-compatible formatting.
6. Return the formatted lyrics to the user.

#### Sample Output
![Output](../../assets/projects/propresenter-lyrics-formatter/output.png)

## Challenges

One of the biggest challenges was handling the wide variety of input formats. Different PDF inputs have inconsistent text layouts, including irregular spacing, and formatting artifacts.

Prompt engineering was another challenge. The AI needed to consistently identify verses, choruses, bridges, and repeated sections while avoiding unnecessary modifications to the original lyrics.

Balancing flexibility with consistent output required multiple iterations of both preprocessing and prompt design.

## Results

This automated workflow saved us **at least 10 minutes per song** from manual formatting, which adds up to **several hours of time saved each month** for our worship team. The AI consistently produced clean, ProPresenter-compatible lyrics, reducing errors and improving the overall quality of our presentations.

## Lessons Learned

This project reinforced that AI performs best when paired with deterministic automation.

Rather than relying entirely on a single language model to extract lyrics, preprocess the document, and format the output, the system uses two models to clean and extract the text and generate the final formatted output. This approach allows for more flexibility and consistency in the output.

## Future Improvements

Potential enhancements include:

* Automatic extraction of song titles and metadata, with integration into the formatted output.
* Support for songs that span multiple pages. The current system supports only two input formats: a single PDF where each page contains one song, or one song per file. Supporting multi-page songs would require more advanced preprocessing, prompt engineering, and improved song boundary detection.
* Adding a storage layer to cache previously formatted lyrics, allowing duplicate requests to be served without reprocessing the original document.
* Improve workflow logic to handle edge cases, such as empty PDFs or PDFs with no text. Also clean up the workflow to reduce complexity and improve readability.