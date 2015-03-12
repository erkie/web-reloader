# Web Reloader

The idea is simple: reload all CSS files on a web page if a file changes in a specified directory.

## Usage

```bash
web-reloader app/assets # or the directory of your choosing
```

And add the following to your HTML:

```html
<script src="http://localhost:13337/"></script>
```

Open files, change and save away!

## Installation

```bash
npm install -g web-reloader
```