# Netlify Puppeteer Demo

We had a real hassle getting puppeteer working on Netlify, but we did, and here is a demo project for our reference.

## Demo

https://puppeteer-demo.netlify.app

## Settings

package.json:

```
"dependencies": {
  "@sparticuz/chromium": "^113.0.1",
  "puppeteer-core": "^20.1.1"
}
```
netlify.toml:
```
[functions]
  node_bundler = "esbuild"
  external_node_modules = ["@sparticuz/chromium"]
```

env var
```
CHROME_EXECUTABLE_PATH="Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

by [blackspike design](https://www.blackspike.com)