import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// import page and components

import Login from "./pages/login.jsx";
import Register from "./pages/Register.jsx";
import Layout from "./components/Layout.jsx";

// impoort outlet
import Landing from "./components/Landing.jsx";
import CategoryDoctor from "./components/CategoryDoctor.jsx";

// import payment
import PaymentPage from "./pages/PaymentPage.jsx";

import Consult from "./pages/Consult.jsx";

import BookingProvider from "./context/bookingContext.jsx";
import BookingStatus from "./components/BookingStatus.jsx";

// import Admin roles
import AdminPage from "./pages/AdminPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}

      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />

        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        <Route path="/paymentdoctor/" element={<PaymentPage />} />
        <Route
          path="/paymentdoctor/bookingstatus"
          element={<BookingStatus />}
        />

        <Route path="/consult" element={<Consult />}>
          <Route path="/consult/category" element={<CategoryDoctor />} />
          <Route
            path="/consult/paymentdoctor/bookingstatus"
            element={<BookingStatus />}
          />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Register />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BookingProvider>
    {/* Semua Router yang kita buat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
    <RouterProvider router={router} />
  </BookingProvider>
  // </React.StrictMode>
);
