# 🛒 React Product Checkout App

A simple, responsive e-commerce checkout flow built using **React** and **Material UI**, with support for:
- Product listing
- User detail collection
- Form validation
- Payment confirmation
- Dark/light theme switching
- Dynamic routing with React Router

---

## 🚀 Features

- 🛍️ Product cards with image, description & price
- 💳 Payment flow with user details and card info
- 🌗 Toggle between Light and Dark themes
- ✅ Form validation before proceeding to card details
- 🔁 Retry flow on failed payments
- 🧾 Payment summary on success page
- ⚙️ Responsive design using MUI

---

## 📂 Folder Structure

```bash
src/
│
├── components/           # Reusable UI components
│   ├── Header.jsx
│   └── ProductCard.jsx
│   └── CardDetails.jsx
│   └── UserForm.jsx
│
├── pages/                # Route-specific pages
│   ├── ProductPage.jsx
│   ├── PaymentPage.jsx
│   ├── SuccessPage.jsx
│   └── FailurePage.jsx
│
├── App.jsx               # Main app with routing
└── main.jsx              # Entry point
└── ThemeContext.jsx      # Theme switching
