import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Capture console messages
    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log(`PAGE ERROR: ${msg.text()}`);
        } else if (msg.type() === 'warning') {
            console.log(`PAGE WARNING: ${msg.text()}`);
        } else {
            console.log(`PAGE LOG: ${msg.text()}`);
        }
    });

    // Capture uncaught exceptions
    page.on('pageerror', error => {
        console.log(`UNCAUGHT EXCEPTION: ${error.message}`);
    });

    console.log('Navigating to http://localhost:3000...');
    try {
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 15000 });
        console.log('Page loaded completely.');

        // Wait an extra 3 seconds to see if a crash happens after load
        await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (err) {
        console.error('Failed to load page:', err);
    } finally {
        await browser.close();
    }
})();
