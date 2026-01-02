# Copilot Instructions for Saunawagon

## Package Manager

Always use **yarn** as the package manager for this project.

- Install dependencies: `yarn install`
- Add a package: `yarn add <package>`
- Add a dev dependency: `yarn add -D <package>`
- Run scripts: `yarn <script-name>`

Do not use npm commands.

## Commit Message Convention

Use clear, descriptive commit messages:

```
<Description starting with capital letter>

[optional body with details]
```

### Examples

```
Add contact form validation
Fix parallax scrolling issue on mobile
Update webpack configuration
Update README with deployment instructions
```

### Rules

- Start the description with a capital letter
- Do not end the description with a period
- Use the imperative mood ("Add" not "Added")
- Keep the first line under 72 characters
- Use the body to explain what and why (not how)

## Development Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn watch` - Build in watch mode
