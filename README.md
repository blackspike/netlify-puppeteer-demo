# Netlify Puppeteer Demo

We had a real hassle getting puppeteer working on Netlify, but we did! And here is a demo project for our reference.

## Demo

https://puppeteer-demo.netlify.app

## Settings

package.json:

```json
"dependencies": {
  "@sparticuz/chromium": "^113.0.1",
  "puppeteer-core": "^20.1.1"
}
```
netlify.toml:
```toml
[functions]
  node_bundler = "esbuild"
  external_node_modules = ["@sparticuz/chromium"]
```

.env
```
CHROME_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

## NOTE

We [recieved some feedback](https://github.com/blackspike/netlify-puppeteer-demo/issues/1), so you may want to try this if you're having problems!

> This line did not work for me:
```
executablePath: process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath('/var/task/node_modules/@sparticuz/chromium/bin')),
```
> Calling the function did:
```
executablePath: process.env.CHROME_EXECUTABLE_PATH || (await await chromium.executablePath()),
```

by [blackspike design](https://www.blackspike.com)
