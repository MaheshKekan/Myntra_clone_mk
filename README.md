# 🛍️ Myntra Clone

A responsive **Myntra-inspired e-commerce frontend** built with **React.js, Redux Toolkit, React Router, Bootstrap, and Vite**.

This project recreates the core shopping experience with product listing, product cards, bag management, pricing calculations, loading/error states, and a Myntra-style navigation/footer layout. Product information is fetched dynamically from the **DummyJSON Products API**.

> **Note:** This project is created for learning and portfolio purposes. It is not affiliated with or endorsed by Myntra.

---

## ✨ Features

- 🏠 Myntra-inspired home/product listing page
- 🛍️ Dynamic product data fetched from DummyJSON
- 🖼️ Product images, brands, titles, ratings, reviews, prices, and discounts
- ➕ Add products to Bag
- ➖ Remove products from Bag
- 🛒 Bag item count in the header
- 💰 Automatic price calculation
  - Total MRP
  - Discount on MRP
  - Convenience fee
  - Final payable amount
- 🧾 Empty Bag state
- ⏳ Loading state while products are being fetched
- ⚠️ Network-error handling
- 🧭 Client-side routing with React Router
- 🗃️ Global state management using Redux Toolkit
- 📱 Clean e-commerce-style responsive layout
- 🧩 Reusable React components
- 🎨 Bootstrap utilities/components combined with custom CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js** | Building the user interface |
| **Vite** | Development server and build tool |
| **Redux Toolkit** | Global state management |
| **React Redux** | Connecting Redux with React |
| **React Router** | Client-side routing |
| **Bootstrap** | UI utilities and responsive styling |
| **React Icons** | Icons used throughout the UI |
| **JavaScript (ES6+)** | Application logic |
| **CSS** | Custom styling |
| **DummyJSON API** | Product data source |

---

## 🧠 How the Application Works

The application follows a simple frontend e-commerce flow:

```text
DummyJSON API
      ↓
React Product Container
      ↓
Redux Store
      ↓
Product Cards
      ↓
Add / Remove from Bag
      ↓
Bag Page
      ↓
Price Calculation
```

### Product Data

When the home page loads, the application requests product data from DummyJSON. The response is stored in the Redux store and displayed through reusable product cards.

### Bag Management

When a user clicks **Add to Bag**, the product ID is stored in the Redux `bagData` state.

When **Remove** is clicked, the corresponding product ID is removed from the state.

The Bag page then filters the available products using those stored IDs and displays the selected products.

### Price Calculation

The Bag page calculates:

```text
Total MRP
    - Discount on MRP
    + Convenience Fee
    ----------------
      Total Amount
```

A ₹99 convenience fee is applied when the Bag contains at least one item.

---

## 📂 Project Structure

```text
Myntra_clone_mk/
│
├── public/
│   └── image/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Bag.jsx
│   │   ├── BagPrice.jsx
│   │   ├── BagSummary.jsx
│   │   ├── Card.jsx
│   │   ├── CartEmpty.jsx
│   │   ├── Container.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Loderimage.jsx
│   │
│   ├── store/
│   │   ├── Bag.js
│   │   ├── CardSlice.js
│   │   ├── Loder.js
│   │   ├── item.js
│   │   └── index.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MaheshKekan/Myntra_clone_mk.git
```

### 2. Navigate to the Project

```bash
cd Myntra_clone_mk
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Vite will start the application and provide a local development URL, usually:

```text
http://localhost:5173
```

### 5. Create a Production Build

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

### 7. Run ESLint

```bash
npm run lint
```

---

## 🧭 Available Routes

| Route | Description |
|---|---|
| `/` | Product listing / home page |
| `/bag` | Shopping Bag page |

---

## 🗃️ Redux Store

Redux Toolkit is used to manage application-wide state.

### `cardData`

Stores the product list received from the API.

### `bagData`

Stores the IDs of products added to the shopping bag.

Available actions include:

```text
addToBag
removeFromBag
```

### `Loder`

Controls the loading state while product data is being fetched.

---

## 🔌 API

The project uses the **DummyJSON Products API** as a mock product-data source.

Endpoint used by the application:

```text
https://dummyjson.com/products
```

The API response provides product information such as:

- Product ID
- Brand
- Product title
- Price
- Discount percentage
- Rating
- Reviews
- Product images

---

## 📸 Screenshots

### Product Listing

The home page displays products in a Myntra-inspired card layout with ratings, brand names, pricing, discounts, and Bag actions.

### Shopping Bag

The Bag page displays selected products along with:

- Total MRP
- Discount
- Convenience Fee
- Total Amount
- Place Order button

### Empty Bag

When no products are selected, an empty-cart illustration and zero-price summary are displayed.

> **Tip:** For GitHub screenshots, add the project screenshots inside a `docs/screenshots/` folder and reference them here, for example:
>
> `![Product Listing](docs/screenshots/home.png)`

---

## 🎯 Learning Objectives

This project was developed to practice and strengthen:

- React component development
- React Hooks such as `useState` and `useEffect`
- Redux Toolkit and global state management
- React Router
- API integration using `fetch`
- Asynchronous JavaScript
- Loading and error handling
- Reusable component design
- E-commerce UI development
- Price and discount calculations
- Git and GitHub workflow

---


## ⚠️ Current Limitations

- Product data comes from a public dummy API.
- There is no real user authentication.
- There is no real payment processing.
- The Place Order button is currently a UI element and does not process an actual order.
- Bag state is maintained in Redux and is not persisted after a page refresh.
- This is a frontend learning project rather than a production e-commerce platform.

---

## 👨‍💻 Author

**Mahesh Kekan**

- GitHub: [MaheshKekan](https://github.com/MaheshKekan)

---

## ⭐ Support

If you find this project useful for learning React and frontend development, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended for **educational and portfolio purposes**. Product branding and design inspiration belong to their respective owners.
