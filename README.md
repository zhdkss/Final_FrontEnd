# YepAndSell Project Documentation

---

## Project Description

**YepGames** is a full-featured web application implementing the concept of a video game marketplace. The application provides users with a wide range of features, including:

* **User registration and authentication**
* **Browsing an extensive game catalog**
* **Convenient cart and order checkout system**
* **Management of a unique virtual currency, YepCoin**
* **Powerful admin panel** for effective content management

The application is built using the **React** library with a modular architecture, ensuring high scalability and ease of maintenance. Modern approaches to state management and routing are employed, guaranteeing stable and fast application performance.

---

## Project Structure

The project is organized modularly, simplifying navigation and the development of new features. Below is the structure of the main directories and files:

src/
├── App.jsx                  # Main application component, entry point for all logic
├── index.js                 # Main file for rendering the React application
├── Layout.jsx               # General page template with navigation and footer

├── router/                  # Application routing
│   ├── index.js             # Route configuration using React Router DOM
│   ├── ProtectedRoute.jsx   # Route protection component for authenticated users
│   └── AdminProtectedRoute.jsx  # Route protection component for administrators

├── components/              # Reusable UI components (buttons, cards, modals, etc.)

├── pages/                   # Page components (Catalog, Cart, Profile, AdminPanel, etc.)

├── contexts/                # Global state contexts (AuthContext, CartContext, ThemeContext, etc.)

├── features/                # Redux Toolkit slices for state management (gamesSlice, userSlice, etc.)

├── store/                   # Redux store configuration
│   ├── index.js             # Global Redux store setup
│   └── hooks.js             # Custom hooks for useSelector and useDispatch

├── locales/                 # Localization files for multi-language support
│   ├── en.json              # English translations
│   └── ru.json              # Russian translations

├── styles/                  # CSS modules for component styling (style encapsulation)

└── assets/                  # Static assets: images, icons, fonts
    ├── images/
    ├── icons/
    └── fonts/

---

## Technologies Used

YepGames employs a set of modern and proven technologies that ensure high performance, reliability, and developer convenience:

| Technology           | Purpose                                                      |
| :------------------- | :-----------------------------------------------------------|
| **React**            | Main library for building user interfaces.                  |
| **React Router DOM** | Library for declarative routing in React applications.      |
| **Redux Toolkit**    | Recommended approach for global state management, simplifying Redux usage. |
| **Firebase**         | Cloud platform for user authentication and database services. |
| **Context API**      | Built-in React mechanism for managing states like cart, theme, language. |
| **i18next**          | Powerful library for internationalization and interface localization. |
| **CSS Modules**      | Styling approach that prevents class conflicts and provides encapsulation. |

---

## Main Modules Description

### Authentication

The authentication module is integrated with **Firebase**, providing a secure and reliable registration and login system.

* User state is tracked via **AuthContext**, offering global access to authentication information.
* **Protected routes** are implemented using `ProtectedRoute.jsx` for regular users and `AdminProtectedRoute.jsx` for admins, ensuring access only after successful authentication and appropriate permissions.

### Cart

The cart module is managed through **CartContext**, providing an intuitive interface for managing purchases.

* Supports **adding**, **removing**, and **clearing** items in the cart.
* Cart state is **synchronized with browser local storage**, preserving data even after closing the tab.

### Game Catalog

The game catalog is the core of the application, providing users access to a large collection of games.

* Storage and loading of the game list are implemented using a **Redux Toolkit Slice** (`gamesSlice.js`), allowing centralized data management and easy scalability.
* The catalog is presented through various components: `GameList` for displaying the game list, `GameCard` for detailed game representation, and `CarouselGameCard` for interactive game showcase.

### YepCoin

**YepCoin** is the internal virtual currency giving users flexibility in purchases.

* Users can **top up their YepCoin balance** and **view transaction history**.
* Specialized modals manage YepCoin: `PurchaseYepCoinsModal.jsx` for topping up and `YepCoinHistoryModal.jsx` for viewing transaction history.

### Admin Panel

The admin panel is a powerful tool for content management, accessible **only to administrators**.

* Main components include: `AdminDashboard` for overview, `AddGameModal` for adding new games, `EditGameModal` for editing existing games, and `ConfirmDeleteModal` for deletion confirmation.
* The admin panel functionality allows **adding, editing, and deleting games**, providing full control over the catalog.

### Localization

The application supports **multiple languages**, offering interfaces in Russian and English.

* Localization is implemented using the **i18next** library.
* All translations are stored in separate JSON files: `locales/en.json` for English and `locales/ru.json` for Russian.

---

## Example Component

```jsx
<GameCard
  title="Cyberpunk 2077"
  price={5999}
  image="/assets/images/cyberpunk.jpg"
/>
