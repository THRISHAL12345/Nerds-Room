# Nerds Room 🚀

**Nerds Room** is a high-energy, **Neo-Brutalist** community platform designed for builders, hackers, and creators. It's a space to showcase projects, connect with like-minded individuals, and access curated resources.

![Nerds Room Banner](/public/assets/logo-text-styled.png)

## 🎨 Design Philosophy

The design language is **"Energetic / Youthful Chaos"** mixed with **Neo-Brutalism**:
- **Bold Typography**: Heavy use of 'Poppins' and 'Courier New'.
- **High Contrast**: Dark mode default (`#000612`) with Neon Green (`#B2E800`) and Deep Blue (`#073F90`) accents.
- **Raw Aesthetics**: Thick borders, hard shadows, visible grids, and "sticker" decorations.
- **Interactive**: Glitch effects, trailing cursors, and live pulse widgets.

## ✨ Key Features

- **🏠 Home**: Dynamic landing page with a glitch title, live community stats, and energetic marquees.
- **🚢 The Ship Log**: A masonry grid showcasing member projects with a "Polaroid" aesthetic.
- **💳 Nerd Cards**: Interactive membership badge generator with holographic effects.
- **📦 The Stash**: A "vending machine" style repository of free tools and resources.
- **📅 Events**: Vertical timeline of upcoming hackathons and meetups.
- **📝 Blog**: "Folder-style" articles sharing insights and updates.
- **💬 Community**: Testimonials and "Join Us" calls to action.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules (No Tailwind, pure custom CSS)
- **Animations**: `framer-motion`
- **Icons**: `react-icons`

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

- **Node.js**: Version 18.17 or later.
- **npm**: Comes with Node.js.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nerds-room.git
    cd nerds-room
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the app running.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📂 Project Structure

```
nerds_room/
├── public/             # Static assets (images, fonts)
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── blog/       # Blog page
│   │   ├── contact/    # Contact page
│   │   ├── events/     # Events page
│   │   ├── membership/ # Nerd Cards page
│   │   ├── projects/   # Ship Log page
│   │   ├── resources/  # The Stash page
│   │   ├── globals.css # Global styles & variables
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # Reusable UI components (Navbar, Hero, etc.)
└── ...
```

## 🤝 Contributing

We welcome fellow nerds! Feel free to open issues or submit pull requests.

---

*Built with 💻 and ☕ by the Thrishal.*
