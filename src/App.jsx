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

// import page and components
import Login from "./pages/login.jsx";
import Register from "./pages/Register.jsx";
import Layout from "./components/Layout.jsx";

// import other pages
import Landing from "./components/Landing.jsx";
import CategoryDoctor from "./components/CategoryDoctor.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import Consult from "./pages/Consult.jsx";
import BookingStatus from "./components/BookingStatus.jsx";
import AdminPage from "./pages/AdminPage.jsx";

import BookingProvider from "./context/bookingContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Semua halaman dibungkus dengan Layout */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        {/* Halaman utama */}
        <Route index element={<Landing />} />
        <Route path="/paymentdoctor" element={<PaymentPage />} />
        <Route path="/paymentdoctor/bookingstatus" element={<BookingStatus />} />

        {/* Halaman konsultasi */}
        <Route path="/consult" element={<Consult />}>
          <Route path="category" element={<CategoryDoctor />} />
          <Route path="paymentdoctor/bookingstatus" element={<BookingStatus />} />
        </Route>

        {/* Halaman admin */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Pindahkan login & regis ke dalam layout agar Footer muncul */}
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Register />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BookingProvider>
    <RouterProvider router={router} />
  </BookingProvider>
);