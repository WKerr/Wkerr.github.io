---
title: "DocPad Nested Layouts Example"
layout: "post"
isPost: true
date: 2016-02-03
info:
    name: "DocPad Nested Layouts Example"
    description: "How to have one layout include another layout"
    strDate: "February 3rd, 2016"
---

## Introduction
So you have started a new docpad project and want to know how to nest layouts. First thing you should probably get your head around is the different renderings that are being applied to your files.

## How things are Rendering
There are two main methods for files to be processed: `YAML`, and file conversions. In your project there are 3 main folders: `(static/files)`, `(render/document)`, and `layouts`. `Static/files` are ignored by all rendering so we can skip those. `layouts` and `render/documents` is where we will focus our attention.

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
Lets look at the following:
   Folder Structure:
```
    layouts/
        default.html.eco
        index-somthing.html.eco
    render/
        index.html
    static/
```
   index.html
```
    ---
    title: "Best thing ever!"
    layout: "index-somthing"
    ---
    <p>This will be the best website ever.</p>
```
   index-somthing.html.eco
```
    ---
    layout: "default"
    ---
	<h2>Header</h2>
    <%- @content %>
```
   default.html.eco
```html
    <html>
    <body>
        <div class="content">
            <%- @content %>
        </div>
    </body>
    </html>
```
   rendered index.html
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

## Summary
  The index.html first gets rendered and sent to the index-somthing.html.eco file and passed in through the content param. It then gets sent to the default.html.eco and passed to the content param in that file. See that wasn't so bad.



  