# Keval-AI - Next.js Project

This is a Next.js 14 project with TypeScript and Tailwind CSS, converted from a static HTML website.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Build

```bash
npm run build
npm start
```

## Notes

- Original CSS files are maintained in `public/assets/css/`
- Assets are stored in `public/assets/`
- Some jQuery functionality has been converted to React hooks
- GSAP animations are initialized on client-side

## ChatFlow AI SDK Integration

The ChatFlow AI SDK is integrated globally across all pages for AI-powered chatbot functionality.

### Test Pages

Test pages are located in the `tests/` folder (excluded from git):

- **Next.js Test Page:** [http://localhost:3000/chatflow-test](http://localhost:3000/chatflow-test) *(Note: Moved to tests folder, may need route adjustment)*
- **HTML Test Page:** Available at `tests/chatflow-test.html`

### Verification

After running the dev server, you should see a chatbot widget in the bottom-right corner of all pages. Click it to open the chat interface and interact with the AI assistant.


