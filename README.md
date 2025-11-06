# AI Image Generator & Enhancer

A powerful web application for generating and enhancing AI images, built with modern web technologies and inspired by tools like Midjourney and DALL-E.

## Features

- **AI Image Generation**: Create stunning images using AI technology
- **Image Enhancement**: Improve and refine your generated images
- **Intuitive Interface**: Clean, modern UI with dark mode support
- **Real-time Processing**: Fast image generation and enhancement
- **Visual Gallery**: Browse and manage your generated images

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn UI components
- **Backend**: Express.js, Node.js
- **State Management**: TanStack Query (React Query)
- **Routing**: Wouter
- **AI Integration**: OpenAI

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OptionsTradingUni/ImageProducer.git
cd ImageProducer
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Add your OpenAI API key to the Replit Secrets or create a `.env` file

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5000`

## Usage

1. Navigate to the home page
2. Enter your image generation prompt
3. Customize settings and parameters
4. Generate your AI image
5. Download or enhance the results

## Project Structure

```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/      # Page components
│   │   └── lib/        # Utilities and helpers
├── server/          # Backend Express server
├── shared/          # Shared types and schemas
└── design_guidelines.md  # Design specifications
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by Midjourney and DALL-E
- Built with Replit
- UI components from Shadcn

---

**Live Demo**: [Run on Replit](https://replit.com/@OptionsTradingUni/ImageProducer)
