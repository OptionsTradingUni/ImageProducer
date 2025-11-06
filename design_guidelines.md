# Design Guidelines: AI Image Generator & Enhancer

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Midjourney, DALL-E, and Canva - combining creative showcase aesthetics with intuitive tool interfaces. Focus on visual hierarchy that lets the generated images be the hero while maintaining accessible, powerful controls.

## Core Layout Structure

### Hero Section (80vh)
Large, eye-catching showcase featuring a stunning AI-generated image as the background with a subtle gradient overlay for text readability. Center-aligned headline and subheadline with primary CTA button (with backdrop blur/frosted glass effect). Include floating example prompt tags beneath the CTA.

### Main Application Interface
Two-column layout on desktop (60/40 split):
- **Left Panel (60%)**: Image canvas/preview area with full-bleed display
- **Right Panel (40%)**: Controls sidebar with prompt input, enhancement options, and settings

Single column on mobile with controls appearing in bottom sheet/drawer.

### Image Gallery Section
Masonry grid layout showcasing recently generated images (3 columns desktop, 2 tablet, 1 mobile). Each card displays the image with hover overlay showing prompt text and action buttons.

## Typography Hierarchy

**Primary Font**: Inter or DM Sans (Google Fonts) for UI elements
**Display Font**: Space Grotesk or Plus Jakarta Sans for headlines

- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Subsections: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg
- UI Labels: text-sm font-medium
- Helper Text: text-xs

## Spacing System
**Tailwind Units**: Consistently use 2, 4, 6, 8, 12, 16, 20, 24 for spacing
- Component padding: p-4 to p-8
- Section margins: my-12 to my-24
- Grid gaps: gap-4 to gap-8
- Container max-width: max-w-7xl with px-4 md:px-8

## Component Library

### Navigation
Sticky header with backdrop blur effect (backdrop-blur-lg), logo left, navigation links center, action buttons right (Sign In, Get Started). Mobile: Hamburger menu.

### Primary CTA Buttons
Large, prominent buttons with rounded-xl corners. Include icon + text combination. Implement frosted glass effect when overlaying images (backdrop-blur-md with semi-transparent background).

### Prompt Input Area
Large textarea (min-h-32) with rounded-2xl border, prominent placeholder text. Include character counter and example prompts as clickable chips below input.

### Image Upload Zone
Drag-and-drop area with dashed border (border-dashed border-2), centered upload icon (from Heroicons), and clear instructions. Shows thumbnail preview after upload.

### Enhancement Controls
Segmented control buttons, range sliders with live value display, toggle switches for boolean options. Group related controls in cards with subtle borders.

### Image Cards
Rounded-2xl with subtle shadow, aspect ratio preserved, hover state reveals overlay with prompt text and action buttons (Download, Enhance, Delete).

### Loading States
Skeleton screens for image generation, animated gradient placeholder matching image dimensions, progress indicator with percentage.

### Footer
Multi-column layout (4 columns desktop, 2 tablet, 1 mobile) with Quick Links, Resources, Social Media, Newsletter signup. Include trust indicators ("Powered by OpenAI").

## Images Section

**Hero Background Image**: Photorealistic AI-generated landscape or abstract digital art that demonstrates the tool's capabilities. Should be vibrant and attention-grabbing. Use gradient overlay (from transparent to semi-dark) to ensure text readability.

**Example Gallery Images**: 9-12 placeholder images showing diverse AI generation styles (portraits, landscapes, abstract art, product photography) to demonstrate versatility. Each should be high-quality and visually distinct.

**Feature Section Icons/Illustrations**: Use Heroicons for UI controls (cloud-arrow-up for upload, sparkles for enhance, photo for generate).

## Key Interactions

**Image Generation Flow**: Prompt input → Generate button → Loading state with progress → Image reveal animation (fade-in with subtle scale)

**Enhancement Panel**: Collapsible sections for different enhancement types (Quality, Style, Effects), accordion-style expansion

**Gallery Navigation**: Infinite scroll for image history, filter tabs at top (All, Generated, Enhanced, Favorites)

## Accessibility
Maintain WCAG AA standards, keyboard navigation for all controls, ARIA labels on icon buttons, focus indicators with 2px offset rings, alt text for all generated images using prompt as base.

This design creates a professional, visually-rich application that puts user-generated content front and center while providing powerful, accessible tools for image creation and enhancement.