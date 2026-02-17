# CS220-PortfolioFinal

## Description

The CS220-PortfolioFinal project is a web application built using JavaScript and configured with modern development tools. It is designed to showcase a portfolio with features optimized for web performance and user experience. The application utilizes Next.js for server-side rendering and streamlined development.

## Features

- **Next.js Framework**: Server-side rendering with automatic code splitting.
- **ESLint Configuration**: Ensures code quality and adherence to best practices.
- **Docker Support**: Development environment configured with Docker for consistent setups.
- **Playwright Integration**: For end-to-end testing using Chromium.
- **Prettier and EditorConfig**: Code formatting tools for maintaining a clean code style.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Live Share Support**: Collaborate in real-time using Visual Studio Code Live Share.

## Technologies Used

- **JavaScript**: The primary programming language for the application.
- **Next.js**: Framework for building server-rendered React applications.
- **Docker**: Containerization platform for creating and managing development environments.
- **Playwright**: Automation library for testing web applications.
- **ESLint**: Linter for identifying and fixing problems in JavaScript code.
- **Prettier**: Code formatter to ensure consistent style.
- **Tailwind CSS**: CSS framework for styling.
- **Node.js**: JavaScript runtime for building server-side applications.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **Docker** (for containerized development)
- **npm** (comes with Node.js)
- **Visual Studio Code** (recommended for development with extensions)

## How to Run Locally

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/CS220-PortfolioFinal.git
   cd CS220-PortfolioFinal
   ```

2. **Install Dependencies**:
   If you are not using Docker, run:
   ```bash
   npm install
   ```

3. **Set Up Docker Environment** (if using Docker):
   - Ensure Docker is running.
   - Navigate to the project folder and run:
   ```bash
   docker-compose up -d
   ```

4. **Environment Variables**:
   If your application requires environment variables, create a `.env` file in the root directory and add the necessary variables. For example:
   ```
   DATABASE_URL=mongodb://localhost:27017/mydatabase
   API_KEY=your_api_key_here
   ```

5. **Run the Application**:
   - If using npm:
   ```bash
   npm run dev
   ```
   - If using Docker, the application should be accessible at `http://localhost:3000`.

6. **Running Tests**:
   If you have tests set up (like Jest), you can run them using:
   ```bash
   npm test
   ```

## Project Structure

The repository has the following structure:

```
├── .devcontainer/          # Configuration for development container
│   ├── Dockerfile          # Dockerfile for Node.js environment
│   ├── devcontainer.json   # Devcontainer configuration
│   └── docker-compose.yml   # Docker Compose configuration
├── .idea/                  # IDE configuration files
├── .vscode/                # Visual Studio Code configurations
├── public/                 # Public assets folder (images, icons, etc.)
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.json          # ESLint configuration
└── ...                     # Other project files
```

## Configuration

### Important Configuration Files

- **.devcontainer/Dockerfile**: Custom Dockerfile for setting up the development environment.
- **.devcontainer/devcontainer.json**: Configuration for the development container.
- **.eslintrc.json**: ESLint configuration for code linting.
- **next.config.js**: Configuration file for Next.js.
- **postcss.config.js**: Configuration for PostCSS, which processes your CSS.

### Extensions

For the best development experience, consider installing the recommended Visual Studio Code extensions listed in `.vscode/extensions.json`.

---

This README provides a comprehensive overview of the CS220-PortfolioFinal project. For further questions or contributions, please refer to the project's contribution guidelines.