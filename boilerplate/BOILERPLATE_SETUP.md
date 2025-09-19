# BOILERPLATE SETUP
This is a guide for quick setup of the boilerplate to suit the needs of the project.
Use script `setup_boilerplate.js` to automate the setup process.
IN DEVELOPMENT

## Assumptions:
- This is specifically for Vite React projects.
- Tailwind CSS v4 is used, meaning no tailwind.config.js file is needed.
- Shadcn UI and Radix UI are used for base components.

## Delete previous .git folder
```bash
rm -rf .git
```

## Select desired dependency templates
- Different templates for certain requirements and scales
- Examples:
    - Small quick apps with minimal features
    - Medium apps with moderate features
    - Large apps with complex features, APIs, etc.
    - Specialized apps (Web3, AI, etc.)


## Install dependencies
```bash
npm install
```

## Rename the boilerplate stuff
- Rename the boilerplate stuff
    - vite-react-template
    - Vite_React_Template

## Update Tailwind styling
- Update @/styles/index.css with desired color theme and styling

## Update README.md
- Update the README.md template with project/application details



# Delete this /boilerplate folder after setup is complete