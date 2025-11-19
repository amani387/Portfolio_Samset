# Samset Engineering Portfolio

A modern, premium portfolio website for Samset Engineering PLC, built with Next.js 15, TypeScript, Tailwind CSS, and MongoDB.

## 🚀 Features

- **Premium UI/UX**: A completely redesigned interface with a Royal Blue & Gold theme, featuring smooth scrolling and responsive layouts.
- **Dynamic Content**:
  - **Hero Carousel**: Auto-playing slider showcasing key company values and projects.
  - **Featured Projects**: Real-time project fetching from MongoDB.
  - **Services Section**: Detailed overview of engineering services.
- **Admin Dashboard**: Secure area for managing projects (Create, Read, Update, Delete).
- **Contact Form**: Integrated form for client inquiries.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Dockerized**: Easy deployment with Docker and Docker Compose.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (with Mongoose)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Containerization**: [Docker](https://www.docker.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ installed
- Docker Desktop installed (for database)
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amani387/Portfolio_Samset.git
   cd Portfolio_Samset
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/samset-engineering
   # Add other environment variables as needed (e.g., AWS keys for image upload)
   ```

4. **Start the Database**
   Run the MongoDB container using Docker Compose:
   ```bash
   docker-compose up -d mongo
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🐳 Docker Instructions

To run the entire application (App + DB) in containers:

```bash
docker-compose up --build
```
This will start the Next.js app on port 3000 and MongoDB on port 27017.

## 📁 Project Structure

```
src/
├── app/                # Next.js App Router pages
│   ├── admin/          # Admin dashboard routes
│   ├── projects/       # Public project archive
│   ├── page.tsx        # Main Landing Page
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── ui/             # Shadcn/UI primitive components
│   ├── Carousel.tsx    # Hero slider component
│   ├── Navbar.tsx      # Responsive navigation
│   └── Footer.tsx      # Site footer
├── lib/                # Utility functions & DB connection
├── models/             # Mongoose data models
└── styles/             # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
