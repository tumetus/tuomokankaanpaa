# Cloud Agent Guidelines for Next.js Project

## Project Overview
This is a Next.js 16+ application using the App Router.

## Tech Stack
- Next.js 16+ (App Router)
- TypeScript
- Tailwind CSS

## Code Style
- Always use TypeScript with proper types
- Use React Server Components by default
- Add 'use client' only when needed
- Mobile-first responsive design with Tailwind

## Testing & Validation
**IMPORTANT**: Before creating a PR, you MUST:
1. Run `npm run build` to verify the build succeeds
2. Run `npm run dev` and verify the app starts
3. Test key pages/functionality
4. Run `npm run lint` and fix any errors

## CI/CD
- All CI checks must pass before requesting review
- If CI fails, analyze the error and fix it
- Never merge PRs with failing tests

## Git & PR Guidelines
- Write clear, descriptive commit messages
- Create focused PRs that solve one problem
- Include a summary of what changed and why
- Push to a feature branch, never directly to main

## Security
- Never commit `.env.local` files
- All secrets are available as environment variables from Cursor Settings
- Be cautious with internet requests - validate external data

## Important Notes
- You have auto-run permissions for terminal commands
- You can install packages as needed
- The dev environment is Ubuntu-based with internet access