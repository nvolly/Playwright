const { test, expect } = require('@playwright/test');

test.describe('Performance Tests', () => {
    test('page load performance', async ({ page }) => {
        // Start performance measurements
        const performanceTimings = [];
        
        page.on('domcontentloaded', () => {
            page.evaluate(() => {
                const timing = performance.getEntriesByType('navigation')[0];
                return {
                    dcl: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
                    load: timing.loadEventEnd - timing.loadEventStart,
                    fcp: performance.getEntriesByType('paint')
                        .find(entry => entry.name === 'first-contentful-paint')?.startTime
                };
            }).then(metrics => performanceTimings.push(metrics));
        });

        await page.goto('/login');

        // Assert performance metrics
        const timing = performanceTimings[0];
        expect(timing.dcl).toBeLessThan(1000); // DOMContentLoaded should be under 1s
        expect(timing.load).toBeLessThan(2000); // Load should be under 2s
        expect(timing.fcp).toBeLessThan(1500); // First Contentful Paint should be under 1.5s
    });

    test('network performance', async ({ page }) => {
        // Enable request interception
        await page.route('**/*', route => {
            const startTime = Date.now();
            route.continue().then(() => {
                const endTime = Date.now();
                const duration = endTime - startTime;
                expect(duration).toBeLessThan(2000); // Each request should complete within 2s
            });
        });

        await page.goto('/login');
    });
});
