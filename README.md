# Magma-UI

## Table of Contents
- [Checking for Bun](#checking-for-bun)
- [Installing Bun](#installing-bun)
- [Running the Project](#running-the-project)
- [Troubleshooting](#troubleshooting)

## Checking for Bun
To check if you already have Bun installed on your system, open your terminal and run:

```bash
bun --version
```

If Bun is installed, this command will display the installed version. If you receive an error message stating that the command is not found, proceed to the installation section below.

## Installing Bun
If you need to install Bun, you can do so easily with the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

This command will download and install Bun. Once the installation is complete, make sure to add Bun to your `PATH` by adding the following line to your shell configuration file (`.bashrc`, `.zshrc`, or `.profile`):

```bash
export PATH="$HOME/.bun/bin:$PATH"
```

After adding this line, run `source ~/.bashrc` or `source ~/.zshrc` to apply the changes.

## Running the Project
Once Bun is installed, you can run the project by following these steps:

1. **Clone the Repository**: First, clone the repository using Git:

```bash
git clone https://github.com/magma-ui/web3-magma-ui/
```

2. **Navigate to the Project Directory**: Change into the cloned project directory:

```bash
cd web3-magma-ui
```

3. **Install Project Dependencies**: Run the following command to install the required dependencies:

```bash
bun install
```

4. **Start the Development Server**: Now you can run the development server:

```bash
bun run dev
```

The server should start, and you can access the application at `http://localhost:3000`.

## Troubleshooting
If you encounter issues while running the project, consider the following common problems:

1. **Permission Denied Errors**: If you receive a `permission denied` error, it may be due to file permission issues. To fix this, change ownership of the project directory:

```bash
sudo chown -R $(whoami) /path/to/your/cloned-repo
```

Replace `/path/to/your/cloned-repo` with the actual path.

2. **Bun Command Not Found**: If you get an error indicating that `bun` is not recognized, ensure you have added it to your `PATH` correctly and that your terminal session is refreshed.

3. **Dependencies Not Installing**: If `bun install` fails, make sure you have an internet connection. If the issue persists, delete the `bun.lockb` file and the `node_modules` directory (if it exists) and run `bun install` again.

4. **General Issues**: If you encounter any other issues, refer to the Bun documentation for more help or check the issues tab in this repository to see if your problem has been addressed.
