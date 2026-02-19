import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Load the local index.html
        path = os.path.abspath("index.html")
        await page.goto(f"file://{path}")

        # Take a screenshot
        await page.screenshot(path="final_design.png", full_page=True)

        # Basic assertions
        title = await page.title()
        print(f"Title: {title}")

        header_text = await page.inner_text("nav")
        print(f"Header: {header_text}")

        hero_title = await page.inner_text("#hero-title")
        print(f"Hero Title: {hero_title}")

        services_count = await page.locator(".service-card").count()
        print(f"Services count: {services_count}")

        steps_count = await page.locator(".step-card").count()
        print(f"Steps count: {steps_count}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
