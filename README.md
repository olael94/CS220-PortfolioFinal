# CS220-PortfolioFinal

## Description
CS220-PortfolioFinal is a web application project built with JavaScript, leveraging modern tools and frameworks to create a robust development environment. The project is set up with a focus on Node.js and includes configurations for smooth development using Docker and Visual Studio Code.

## Features
- **Development Environment**: Utilizes Docker for containerized development.
- **Pre-configured VS Code Setup**: Comes with a `.devcontainer` configuration for easy setup.
- **Code Quality Tools**: Integrates ESLint for linting, Prettier for code formatting, and Playwright for end-to-end testing.
- **TailwindCSS Support**: Pre-configured for utility-first CSS styling.
- **Live Share Support**: Enables real-time collaboration with Visual Studio Live Share.

## Technologies Used
- **JavaScript**: Main programming language
- **Node.js**: Runtime environment for executing JavaScript on the server side
- **Docker**: For containerization of the development environment
- **ESLint**: Tool for identifying and fixing problems in JavaScript code
- **Prettier**: Code formatter to maintain consistent style
- **TailwindCSS**: Utility-first CSS framework
- **Playwright**: Framework for end-to-end testing
- **Next.js**: Framework for building React applications

## Prerequisites
To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 14 or higher)
- [Docker](https://www.docker.com/) (For containerized development)
- Visual Studio Code (Optional, but recommended)

## How to Run Locally

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/CS220-PortfolioFinal.git
cd CS220-PortfolioFinal
```

### Step 2: Open in Visual Studio Code
Open the project in Visual Studio Code. If you have the Remote - Containers extension installed, it will prompt you to reopen in a container.

### Step 3: Build the Docker Container
If you are not using VS Code's Remote - Containers feature, you can build and run the Docker container manually:
```bash
docker-compose up --build
```

### Step 4: Install Dependencies
Once the container is running, install the necessary dependencies by executing:
```bash
npm install
```

### Step 5: Run the Application
To start the application, use the following command:
```bash
npm run dev
```
The application should now be running at `http://localhost:3000`.

### Step 6: Running Tests
To run any tests (if applicable), you can execute:
```bash
npm test
```
Ensure that your test scripts are defined in your `package.json`.

## Project Structure
```
.
├── .devcontainer/          # Docker and VS Code configuration files
│   ├── Dockerfile          # Dockerfile for building the development container
│   ├── devcontainer.json    # Configuration for the VS Code dev container
│   └── docker-compose.yml   # Docker Compose configuration
├── .idea/                  # IDE specific configurations (IntelliJ, etc.)
├── .vscode/                # VS Code settings and extensions recommendations
├── public/                 # Public assets
├── next.config.js          # Configuration file for Next.js
└── postcss.config.js       # Configuration for PostCSS
```

## Configuration
### Important Configuration Files
- **`.devcontainer/devcontainer.json`**: Defines settings for the development container, including the workspace folder and commands to run.
- **`.eslintrc.json`**: Configures ESLint with Next.js standards.
- **`next.config.js`**: Contains configuration settings specific to Next.js.

### Environment Variables
If your application requires environment variables, consider creating a `.env` file in the root directory and define your variables there. Ensure to load them in your application as needed.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.
```

Feel free to modify the repository URL and other specific details to match your project as necessary!