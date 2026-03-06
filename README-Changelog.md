

# README Changelog
Log of major changes to integrate into previous projects building with this template

## v1.0.0

- Initial release

## v1.1.0
- Added README-Changelog.md
- Added boilerplate/
    - In Progress
- Added tests/ for testing with Vitest


### Testing (Vitest)
- /tests directory in root
    - /tests/components/
    - /tests/utils/
    - /tests/setupTests.js
        - Config file essentially
    /src
    /components
        Button.jsx
    /utils
        math.js
    /tests
    /components
        Button.test.jsx
    /utils
        math.test.js
    setupTests.js

- Install necessary dependencies
    ```
    npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @testing-library/dom
    ```
- Add "test": "vitest" to package.json
    "scripts": {
        "test": "vitest"
    }



