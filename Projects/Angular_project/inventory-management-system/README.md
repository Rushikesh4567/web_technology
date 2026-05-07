# Inventory Management System

A modern Angular application for managing inventory items, built with Standalone Components and Server-Side Rendering (SSR) support.

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed.
- Angular CLI installed (`npm install -g @angular/cli`).

### Installation
1. Navigate to the project directory:
   ```bash
   cd inventory-management-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
To start the development server, run:
```bash
npm start
```
Open your browser at `http://localhost:4200`.

---

## 🏗️ Architecture & Concepts

This project follows modern Angular best practices:

- **Standalone Components**: Each component manages its own dependencies, eliminating the need for `NgModules`.
- **Dependency Injection (DI)**: Utilizes Angular's DI system to share data via the `InventoryService`.
- **Services**: Centralized logic for managing inventory data (CRUD operations).
- **Reactive Navigation**: Uses `@angular/router` for seamless transitions between views.
- **Live Input Preview**: Implements real-time data feedback using Two-Way Data Binding.
- **Server-Side Rendering (SSR)**: Configured for better performance and SEO using Angular Universal/SSR.

---

## ✨ Key Feature: Live Input Preview

The "Add Item" page features a **Live Preview** section that demonstrates Angular's powerful data-binding capabilities.

### How it works:
1.  **Two-Way Data Binding (`[(ngModel)]`)**: In the `AddItem` component, the input fields are bound to variables (like `itemName`) using the `[(ngModel)]` directive. This ensures that any change in the input field automatically updates the variable in the TypeScript class.
2.  **Interpolation (`{{ }}`)**: The preview section uses double curly braces to display the current value of these variables.
3.  **Real-Time Update**: As the user types, Angular's change detection mechanism catches the update and refreshes the preview section instantly, providing immediate feedback without requiring a page reload or a manual "Update" button.

---

## ⚙️ Service Logic: `InventoryService`

The `InventoryService` acts as the central data hub for the application.

### Key Concepts:
- **Singleton Pattern**: By using `@Injectable({ providedIn: 'root' })`, Angular ensures that only one instance of this service exists. This allows data to be shared consistently between the `AddItem` and `InventoryList` components.
- **In-Memory Storage**: Data is stored in a private array (`private items: InventoryItem[]`).
- **Data Integrity**: Uses the `InventoryItem` interface to enforce strict typing for all inventory objects.

### Core Methods:
- `getItems()`: Returns the current list of inventory items.
- `addItem(item)`: Assigns a unique ID and pushes the new item to the collection.
- `deleteItem(id)`: Filters the array to remove the item with the specified ID.
- `getTotalItems()`: A utility method to quickly get the count of items in the inventory.

---

## 📁 Project Structure

- `src/app/`: Contains the application logic.
  - `app.ts`: Root component and layout.
  - `app.routes.ts`: Routing configuration.
  - `components/`: UI building blocks (`home`, `inventory-list`, `add-item`).
  - `services/`: Data management logic (`inventory.ts`).
- `src/main.ts`: Application entry point.
- `angular.json`: Workspace configuration.

---

## 🔄 Execution Flow

1. **Initialization**: `main.ts` bootstraps the `App` component.
2. **Routing**: The `App` component's `<router-outlet>` renders components based on the URL path.
   - `/` -> `Home` Component
   - `/inventory` -> `InventoryList` Component
   - `/add-item` -> `AddItem` Component
3. **Data Management**: Components interact with `InventoryService` to perform actions.
   - **Adding**: `AddItem` component takes user input and calls `addItem()` in the service.
   - **Listing**: `InventoryList` component retrieves items using `getItems()`.
   - **Deleting**: `InventoryList` component calls `deleteItem()` via the service.
4. **State**: The data is maintained in-memory within the `InventoryService` for the duration of the session.

---

## 🛠️ Build & Test

- **Build**: `npm run build`
- **Test**: `npm test`
