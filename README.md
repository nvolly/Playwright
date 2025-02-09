# Playwright Test Automation Project

This project contains automated tests using Playwright Test framework.

## Prerequisites

- Node.js 14 or higher
- npm (comes with Node.js)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser visible)
```bash
npm run test:headed
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Debug tests
```bash
npm run test:debug
```

### Run a single test file or test title
```bash
npm run test:single "test name or file"
```

### View HTML report
```bash
npm run report
```

### Generate tests using Codegen
```bash
npm run codegen
```

## Project Structure

```
├── tests/                    # Test files directory
│   ├── e2e/                 # End-to-end tests
│   ├── api/                 # API tests
│   └── components/          # Component tests
├── playwright.config.js      # Playwright configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Configuration

The project uses `playwright.config.js` for configuration with the following features:

- Runs tests in parallel
- Supports multiple browsers (Chromium, Firefox, WebKit)
- Includes mobile device testing
- Captures screenshots and videos on test failure
- Generates HTML reports
- Configurable timeouts and retry attempts

## Best Practices

1. Use Page Object Model for better maintainability
2. Keep tests independent
3. Use meaningful test descriptions
4. Add proper assertions
5. Handle timeouts appropriately
6. Use test data fixtures when needed
7. Follow proper naming conventions
