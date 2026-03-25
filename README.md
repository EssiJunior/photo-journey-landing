# Photo Journey (landing page)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

This is my solution to transitstay, Next.js developer recruitment test.

This app is built with Next.js, TypeScript and Tailwind CSS. It's the implementation of this [Figma design](https://www.figma.com/design/DXYUXQgmIF9mvrGHQzGi30/FrontEndTest?node-id=0-1&p=f&t=dGRHAnixnF4yoWSc-0).

## ✨ Features

- 🚀 **Blazing Fast** - Built with Next.js for optimal performance
- 🎨 **Beautiful UI** - Modern design UI
- 📱 **Fully Responsive** - Works on all device sizes

## 🚀 Getting Started

### Prerequisites

- Node.js 20.0.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

   ```bash filename="Terminal"
   git clone https://github.com/EssiJunior/photo-journey-landing.git
   cd photo-journey-landing.git
   ```

2. Install dependencies:

   ```bash package="npm"
   npm install
   ```

### Development

Start the development server:

   ```bash package="npm"
   npm run dev
   ```

That's it, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 📂 Project Structure

```text
.
├── app/                # App router page and layout
├── components/         # Reusable UI components
│   ├── atoms/            # base components
│   └── molecules/        # larger components, made of atoms
├── containers/         # Page containers
├── layouts/            # Page layouts
├── props/              # Components prop types
├── public/             # Static assets
├── styles/             # app style
└── tests/              # Playright E2E Test suites
└── utils/              # Helper utilities
```

## 🧪 Testing

### 1. Visual Regression Testing

We've done visual regression testing with [backStrop.js](https://github.com/backstopjs/backstopjs).

In order to run the tests, you need to have the app running locally. After then, follow the foloowing steps.

1. Generate reference images:

   ```bash package="npm"
   npm run backstop-reference
   ```

2. Run the tests:

   ```bash package="npm"
   npm run backstop-test
   ```

### 2. End to End Testing with Playwrite

In order to run the tests, you need to have the app running locally. After then run the test suites in /tests folder. The `--ui` flag will open the test runner in an interactive UI.

   ```bash package="npm"
   npm run playwright-test
   ```

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Made with ❤️ by [Essi Junior](https://essijunior.com)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
