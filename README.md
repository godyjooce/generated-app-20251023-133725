# Vinitsky Dev - Digital Product Studio

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/godyjooce/generated-app-20251023-133619)

A modern, professional single-page landing page for 'Vinitsky Dev', an IT studio specializing in web development, Telegram bots, and business solutions.

## About The Project

This project is a visually stunning, modern, and professional single-page landing page for 'Vinitsky Dev'. The studio specializes in creating custom websites, Telegram bots, and business automation solutions. The primary goal of this landing page is to establish trust, showcase technical expertise, and convert visitors from small businesses and entrepreneurs into clients.

The design is minimalist and elegant, featuring a sophisticated neutral color palette with a strong blue accent, clean typography, and subtle, smooth animations to create a premium user experience.

## Key Features

-   **Stunning Visuals**: A modern, minimalist design built with obsessive attention to visual excellence.
-   **Fully Responsive**: Flawless layout and user experience across all device sizes, from mobile to large desktops.
-   **Comprehensive Sections**: Includes all necessary business sections: Hero, Services, Tech Stack, Portfolio, Testimonials, Pricing, About, FAQ, and a functional Contact form.
-   **Interactive Polish**: Smooth animations, hover states, and micro-interactions powered by Framer Motion.
-   **Performant Backend**: Built on the Cloudflare stack, ensuring high performance and reliability.
-   **Type-Safe**: End-to-end type safety with TypeScript.

## Technology Stack

-   **Frontend**: React, Vite, TypeScript
-   **UI Framework**: Tailwind CSS with shadcn/ui components
-   **Backend**: Cloudflare Workers, Hono
-   **Animation**: Framer Motion
-   **Form Handling**: React Hook Form with Zod for validation
-   **Icons**: Lucide React
-   **SEO**: React Helmet Async

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/vinitsky_dev_landing.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd vinitsky_dev_landing
    ```
3.  Install dependencies:
    ```sh
    bun install
    ```

## Usage

To start the development server, run the following command. This will start the Vite frontend and the Hono backend concurrently.

```sh
bun dev
```

The application will be available at `http://localhost:3000`.

## Development

-   **Frontend**: All frontend code is located in the `src` directory. The main page is `src/pages/HomePage.tsx`. Reusable components are organized within `src/components`.
-   **Backend**: The Cloudflare Worker backend code is in the `worker` directory. API routes are defined in `worker/user-routes.ts` using the Hono framework.
-   **Shared Types**: To maintain type safety between the frontend and backend, shared types are defined in `shared/types.ts`.

## Deployment

This project is configured for easy deployment to Cloudflare.

1.  **Build the project**:
    ```sh
    bun run build
    ```
2.  **Deploy to Cloudflare**:
    Make sure you are logged in to your Cloudflare account via the Wrangler CLI. Then, run:
    ```sh
    bun run deploy
    ```

Alternatively, you can deploy directly from your GitHub repository using the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/godyjooce/generated-app-20251023-133619)