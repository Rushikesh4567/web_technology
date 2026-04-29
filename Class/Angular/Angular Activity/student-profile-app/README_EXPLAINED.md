# Angular Student Profile App - Documentation

This application is a demonstration of core Angular concepts, featuring a modern UI, routing, and API integration.

## 🚀 How It Works
The application is built using **Angular 18+** with **Standalone Components**. It uses a central navigation system (Angular Router) to switch between different learning modules.

### Modules & Features:
1.  **Home Page**: A welcoming landing page.
2.  **Student Card**: Demonstrates **Data Binding** and **Event Binding**.
3.  **Live Preview**: Showcases **Two-Way Data Binding** using `ngModel`.
4.  **Directives**: Illustrates **Structural Directives** (`*ngIf`, `*ngFor`) and **Attribute Directives** (`ngClass`).
5.  **API Users**: Demonstrates **Service integration** and **Asynchronous data fetching** using `HttpClient`.

---

## 💡 Key Concepts Used

### 1. Components
Every part of the UI is a component. Each component has:
-   `.ts`: Logic (TypeScript)
-   `.html`: Structure
-   `.css`: Styling

### 2. Data Binding
-   **Interpolation `{{ }}`**: Displaying class variables in the template.
-   **Property Binding `[ ]`**: Dynamically setting element properties (e.g., `[src]`, `[routerLink]`).
-   **Event Binding `( )`**: Handling user interactions (e.g., `(click)="changeImage()"`).
-   **Two-Way Binding `[(ngModel)]`**: Syncing input fields with class variables in real-time.

### 3. Directives
-   `*ngIf`: Conditionally shows/hides elements based on a boolean.
-   `*ngFor`: Loops through an array to generate multiple elements.
-   `ngClass` / `ngStyle`: Dynamically changes styles based on logic.

### 4. Routing
The `app.routes.ts` file defines paths like `/student`, `/api`, etc. The `RouterOutlet` in `app.html` acts as a placeholder where these components are rendered dynamically.

### 5. API Fetching (HttpClient)
The `ApiUsers` component uses Angular's `HttpClient` to fetch data from a JSON placeholder API. 
-   **Dependency Injection**: `HttpClient` is injected via the constructor.
-   **Observables**: The `.subscribe()` method handles the asynchronous response.

---

## 🛠️ Setup and Installation

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    npm start
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 🔧 Bug Fixes Implemented
1.  **HttpClient Provider**: Fixed the `NullInjectorError` by adding `provideHttpClient()` to `app.config.ts`.
2.  **Routing Configuration**: Properly configured routes in `app.routes.ts` to allow navigation between components.
3.  **Namespace/Import Clean-up**: Fixed missing imports in standalone components (e.g., `FormsModule`, `CommonModule`).
4.  **Layout reorganization**: Moved component tags from `app.html` to the router to prevent "all-on-one-page" clutter.
