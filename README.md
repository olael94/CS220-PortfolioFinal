# CS220-PortfolioFinal

## Description
CS220-PortfolioFinal is a JavaScript-based web application designed for showcasing portfolios. Built with modern web technologies, it provides a structured environment for developers to present their work effectively.

## Features
- **Docker Development Environment**: Easily set up the project using Docker with preconfigured containers.
- **Next.js Framework**: Utilizes Next.js for server-side rendering and optimized performance.
- **Playwright for Testing**: Integrated Playwright for automated testing, specifically for Chromium browser.
- **ESLint Configuration**: Ensures code quality and adherence to JavaScript best practices.
- **Customizable Development Experience**: Supports various VS Code extensions to enhance developer productivity.

## Technologies Used
- **JavaScript**: Primary programming language for the application.
- **Next.js**: React framework for building server-rendered applications.
- **Docker**: Containerization technology for consistent development environments.
- **Playwright**: Browser automation library for testing web applications.
- **ESLint**: Linter for identifying and fixing problems in JavaScript code.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.

## Prerequisites
Before running the project, make sure you have the following installed:
- **Node.js** (v14 or higher)
- **Docker** (latest version)
- **Docker Compose** (latest version)
- **npm** (comes with Node.js)

## How to Run Locally

### Step-by-Step Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/CS220-PortfolioFinal.git
   cd CS220-PortfolioFinal
   ```

2. **Open the Project in a Development Container**:
   If you are using Visual Studio Code, you can open the project in a development container by using the "Remote - Containers" extension. Follow these steps:
   - Open the Command Palette (F1 or Ctrl+Shift+P).
   - Select `Remote-Containers: Reopen in Container`.

3. **Install Dependencies**:
   Once inside the container, install the project dependencies:
   ```bash
   npm install
   ```

4. **Run the Application**:
   Start the application using the following command:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

5. **Run Tests** (if applicable):
   To run tests using Playwright, execute:
   ```bash
   npm test
   ```

### Environment Variables
If your project requires environment variables, create a `.env` file in the root directory and add the necessary variables in the following format:
```
VARIABLE_NAME=value
```
Make sure to replace `VARIABLE_NAME` and `value` with your actual configuration.

## Project Structure
The project structure is organized as follows:

```
/devcontainer        # Docker configuration files for development environment
/.idea               # IntelliJ IDEA specific files
/.vscode             # Visual Studio Code specific files
/public              # Public assets and static files
next.config.js      # Configuration for Next.js
postcss.config.js   # Configuration for PostCSS
.eslintrc.json      # ESLint configuration for code quality
```

## Configuration
- **.devcontainer/**: Contains configuration files for setting up the development environment using Docker.
  - **Dockerfile**: Defines the environment including Node.js and Playwright installation.
  - **devcontainer.json**: Configuration for the development container settings.
  - **docker-compose.yml**: Docker Compose configuration for service orchestration.
  
- **.eslintrc.json**: ESLint configuration file extending Next.js core web vitals settings for JavaScript code quality.

- **.vscode/extensions.json**: Recommended VS Code extensions for enhancing the development experience.

For any additional configuration or setup, refer to the official documentation of the respective technologies used in this project.

---
This README provides a comprehensive guide to get started with the CS220-PortfolioFinal project. For further assistance or issues, please open an issue on the GitHub repository.