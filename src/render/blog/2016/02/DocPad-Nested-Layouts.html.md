---
title: "DocPad Nested Layouts Example"
layout: "post"
isPost: true
date: 2016-02-08
info:
    name: "DocPad Nested Layouts Example"
    description: "How to have one layout include another layout"
    strDate: "February 8th, 2016"
---

## Introduction
So you have started a new docpad project and want to know how to nest layouts. First thing you should probably get your head around is the different renderings that are being applied to your files.

## How Files are Rendering
There are two main methods for files to be rendered: `YAML`, and file conversions. In your project there are 3 main folders: `(static/files)`, `(render/document)`, and `layouts`. `Static/files` are ignored by all rendering so we can skip those. `layouts` and `render/documents` is where we will focus our attention.

## File Rendering
Documents can be rendered from one language to another. For example, `src/render/index.html.md` will be rendered from Markdown to html `out/index.html`. Regardless of which document rendering is being used each file has access to the YAML markup.

## YAML
The markup that you see below that is at the begining of your `layouts` or `(render/document)` files. This markup is what YAML uses to give each file meta data. This meta data will describe how our nested files should be included. Included below is a sample of what YAML markup would look like with the meta data for each
```
    ---
    title: "Best thing ever!"
    layout: "default"
    ---

    Some content.
```

## Example
Lets look at the following example. We want to pass the contents of, `index -> index-somthing -> default`
##### Folder Structure:
```
    layouts/
        default.html.eco
        index-somthing.html.eco
    render/
        index.html
    static/
```
##### index.html
```
    ---
    title: "Best thing ever!"
    layout: "index-somthing"
    ---
    <p>This will be the best website ever.</p>
```
The `index.html` first gets rendered from eco to html then meta data in YAML specifies to the layout `index-somthing.html.eco`. You do not specify the file extensions when it is referenced in the YAML metadata layout.
##### index-somthing.html.eco
```
    ---
    layout: "default"
    ---
	<h2>Header</h2>
    <%- @content %>
```
Notice in this file, `<%- @content %>` which specifies where the content from the previous file to be included will be placed. We also include Meta Data `layout` to sent it's contents to `default.html.eco`.
##### default.html.eco
```html
    <html>
    <body>
        <div class="content">
            <%- @content %>
        </div>
    </body>
    </html>
```
This file also contains `<%- @content %>` which will grab the rendered content from the previous file and place in the document.
##### Rendered index.html
```html
	<html>
    <body>
        <div class="content">
            <h2>Header</h2>
            <p>This will be the best website ever.</p>
        </div>
    </body>
    </html>
```
Here is the final rendered file which would appear in the `out/` folder.
## Summary
  Include meta data in document start to point to another file. That file should have `<%- @content %>` to be a marker of where the content should be placed. Just repeat that partner to nest files continuously. See, that wasn't so bad!



  