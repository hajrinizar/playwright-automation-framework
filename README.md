# Playwright Test Automation Framework

End-to-end test automation framework built with [Playwright](https://playwright.dev/) and TypeScript, covering UI testing, API testing, visual regression, and cross-browser validation.

## Tech Stack

- **Playwright** - Browser automation and API testing
- **TypeScript** - Type-safe test authoring
- **GitHub Actions** - CI/CD pipeline

## Project Structure

```
├── fixtures/              # Custom test fixtures for page object injection
│   └── base.ts
├── pages/                 # Page Object Models
│   ├── AlertsPage.ts
│   ├── CheckboxPage.ts
│   ├── DragAndDropPage.ts
│   ├── DropdownPage.ts
│   ├── DynamicLoadingPage.ts
│   ├── FileUploadPage.ts
│   ├── FramesPage.ts
│   ├── HoverPage.ts
│   └── LoginPage.ts
├── tests/
│   ├── api/               # REST API tests
│   │   ├── posts.spec.ts
│   │   └── users.spec.ts
│   ├── setup/             # Authentication setup
│   │   └── auth.setup.ts
│   └── ui/                # UI tests
│       ├── alerts.spec.ts
│       ├── checkboxes.spec.ts
│       ├── drag-and-drop.spec.ts
│       ├── dropdown.spec.ts
│       ├── dynamic-loading.spec.ts
│       ├── file-upload.spec.ts
│       ├── frames.spec.ts
│       ├── hovers.spec.ts
│       ├── login.spec.ts
│       ├── login-negative.spec.ts
│       ├── multi-window.spec.ts
│       ├── navigation.spec.ts
│       ├── secure-area.spec.ts
│       └── visual-regression.spec.ts
├── .github/workflows/     # CI/CD configuration
│   └── playwright.yml
├── playwright.config.ts
└── tsconfig.json
```

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running Tests

```bash
# Run all tests across all browsers
npm test

# Run by project
npm run test:ui              # UI tests (Chromium)
npm run test:api             # API tests
npm run test:auth            # Authentication flow tests
npm run test:chromium        # UI tests (Chromium)
npm run test:firefox         # UI tests (Firefox)
npm run test:webkit          # UI tests (WebKit)

# Development
npm run test:headed          # Run with visible browser
npm run test:debug           # Step-through debugger

# Reporting
npm run report               # Open HTML test report

# Visual regression
npm run update-snapshots     # Regenerate baseline screenshots
```

## Environment Variables

| Variable        | Default                                    | Description             |
|-----------------|--------------------------------------------|-------------------------|
| `BASE_URL`      | `https://the-internet.herokuapp.com`       | UI test target          |
| `API_BASE_URL`  | `https://jsonplaceholder.typicode.com`     | API test target         |
| `CI`            | -                                          | Enables CI-specific config |

## Test Coverage

### UI Tests

- **Authentication** - Login, logout, negative scenarios (data-driven), secure area access
- **Form interactions** - Checkboxes, dropdowns, file upload
- **Dynamic content** - Async loading, element visibility transitions
- **Advanced interactions** - Drag-and-drop, hover states, multi-window handling
- **Frame navigation** - Nested frame traversal with chained frame locators
- **Navigation** - Page routing, link verification
- **Visual regression** - Screenshot comparison against baselines

### API Tests

- **CRUD operations** - GET, POST, PUT, PATCH, DELETE
- **Query parameters** - Filtering by user
- **Response validation** - Status codes, headers, body schema, nested object structure

## Architecture

- **Page Object Model** - Each page has a dedicated class encapsulating locators and actions
- **Custom fixtures** - Page objects are injected via `test.extend()`, eliminating per-test setup boilerplate
- **Auth state persistence** - Setup project demonstrates Playwright's `storageState` pattern with project dependencies
- **Cross-browser** - Tests run on Chromium, Firefox, and WebKit
- **CI/CD** - GitHub Actions runs the full suite on every push and pull request
