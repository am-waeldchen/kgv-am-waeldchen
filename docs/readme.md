# Am Wäldchen Webseite

The website is made with [Jekyll](https://jekyllrb.com/), a static site generator.

Markdown files found under `docs/` are automatically published on the website using Github Pages.


## Prerequisites

Before running the website, make sure you have
[installed and set up jekyll with all it's requirements](https://jekyllrb.com/docs/).


## Local development

Start the local development server with `jekyll serve`.

Pass the `--livereload` option to serve to automatically refresh the
with each change you make to the source files:

```sh
jekyll serve --livereload
```

Open your web browser and visit <http://localhost:4000> to view the website.


## Build the website

Building the website is made by running:

```sh
jekyll build
```

The result will be available in the `_site` directory.

