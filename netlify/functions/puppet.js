import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

const url = 'https://lite.cnn.com/'

chromium.setHeadlessMode = true
chromium.setGraphicsMode = false

export async function handler(event, context) {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath('/var/task/node_modules/@sparticuz/chromium/bin')),
    })

    const page = await browser.newPage()

    await page.goto(url)

    await page.waitForSelector('.title')

    const results = await page.$$eval('ul li', (articles) => {
      return articles.map((link) => {
        return {
          title: link.querySelector('a').innerText,
          url: link.querySelector('a').href,
        }
      })
    })

    await browser.close()

    return {
      statusCode: 200,
      body: JSON.stringify(results),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    }
  }
}
