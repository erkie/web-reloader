# Web Reloader

The idea is simple: reload all CSS files on a web page if a file changes in a specified directory.

## Installation

```bash
npm install -g web-reloader
```

## Usage

```bash
web-reloader app/assets # or the directory of your choosing
```

And add the following to your HTML:

```html
<script src="http://localhost:13337/"></script>
```

Open files, change and save away!

### As a bookmarklet

Don't want weird HTML tags floating about in your code? You can use this as a bookmarklet to activate the code.

    javascript:var a = document.createElement("script"); a.src = "http://localhost:13337/"; document.body.appendChild(a); void 0;
