# Next.js 13.4 Multi Domain Demo

This repository demonstrates a multi domain setup in Next.js 13.4. Using a middleware and a specific folder structure inside the `app` directory enables us to create custom pages for additional domains and subdomains, while also dynamically changing the page styling depending on the domain.

The setup demonstrated in this repository could be useful when you want to offer clients with custom pages depending on their domain, using only a single Next.js app and codebase.

## Prerequisites

- Define the primary domain (which should display the pages in `(main)`) with an `APP_HOSTNAME` environment variable within your `.env.local` file or production environment. The hostname should not include any protocols. (Example: `multidomain.valtteri.dev`)
- Ensure that all domains are pointed to your deployment

## Customizing the demonstration

Currently, all custom domains and their theme settings are defined in `src/domains.ts`. This is only for the demonstration. In a real app, you could define (and adjust) these values in a database, and then query them with the `domain` parameter inside `src/app/[domain]/(domains)/*`.

## About the demo

The demo has been accomplished by creating the following route structure:

```
src
| - app
    | - (main) // Route Group for main domain contents
        | - layout.tsx
        | - page.tsx
        | - // ...
    | - [domain] // Dynamic Route for your additional domain contents *
        | - (domains) // Route Group for additional domain contents **
            | - layout.tsx
            | - page.tsx
            | - // ...
```

- \* Middleware points here when the domain and the `APP_HOSTNAME` variable do not match.
- \*\* This is optional. The Route Group is used to create a new Root Layout that we can customize themes with. You could simply have one Root Layout in the `src` folder, if you do not require customization to `<html />` or `<body />`.

## Live demo

You can test the live demo at:

- Main Domain: [multidomain.valtteri.dev](multidomain.valtteri.dev)
- Additional Domain 1: [multidomain1.valtteri.dev](multidomain1.valtteri.dev)
- Additional Domain 2: [multidomain2.valtteri.dev](multidomain2.valtteri.dev)

# Using the demo

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
