const puppeteer = require("puppeteer");
let browser, page;

async function openSite(url) {
	browser = await puppeteer.launch();
	page = await browser.newPage();
	await page.goto(url, {
		waitUntil: "load"
	});
	return await page.title();
}

async function getData() {
	return { title: await page.title(), url: await page.url() };
}

async function closeSite() {
	await page.close();
	return await browser.close();
}

module.exports = { openSite, getData, closeSite };
