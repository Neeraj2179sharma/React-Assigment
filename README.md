# Micro-Frontend Chat & Email Application

## Overview

This project is a Micro-Frontend-based Chat and Email application using **Module Federation**. It consists of:

- **Host Application (port: 3000)** - Serves as the shell and integrates the micro-frontends.
- **Chat Application (port: 3001)** - A separate micro-frontend exposing a chat module.
- **Email Application (port: 3002)** - A separate micro-frontend exposing an email module.

## Tools & Frameworks Used

- **React 18** - Frontend framework
- **Webpack Module Federation** - Micro-frontend architecture
- **Babel** - Transpiling modern JavaScript
- **Webpack** - Bundling and module federation
- **NPM** - Package management
- **Concurrently & Wait-On** - To start all applications together

## Setup & Installation

1. **Clone the repository**

   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the applications**

   ```sh
   npm start
   ```

   This will start:

   - **Host App** on `http://localhost:3000`
   - **Chat App** on `http://localhost:3001`
   - **Email App** on `http://localhost:3002`

4. Open `http://localhost:3000` in the browser.

## Build & Deployment

To build all applications:

```sh
npm run build
```

Each application will be built inside the `build/` directory.

## Key Architectural Decisions & Trade-offs

### **Why Module Federation?**

- Allows independent deployment of micro-frontends.
- Reduces build time by separately bundling each application.
- Enables reusability of components between apps.

### **Trade-offs Considered**

- **Performance:** Extra network requests to load federated modules.
- **State Management:** Each micro-frontend manages its own state.
- **Styling:** CSS conflicts need careful handling due to separate builds.

## Issues & Troubleshooting

### **Issue: Applications not starting on correct ports**

- Ensure no other applications are running on ports `3000`, `3001`, or `3002`.
- Use `npx kill-port 3000 3001 3002` to free up the ports.

### **Issue: RemoteEntry.js not loading**

- Verify that Chat and Email apps are running before accessing the host app.

