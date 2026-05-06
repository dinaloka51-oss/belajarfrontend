import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Import komponen kamu
import App from "./App.tsx";
import SignIn from "./auth/signin.tsx";
import SignUp from "./auth/signup.tsx";
import AdminDashboard from "./admin/AdminDashboard.tsx";
import QuizManagement from "./admin/QuizManagement.tsx";
import ExamInterface from "./user/ExamInterface.tsx";
import ExamResults from "./user/ExamResults.tsx";
import SmartExamDashboard from "./user/SmartExamDashboard.tsx";
import StudentDashboard from "./user/StudentDashboard.tsx";


// 1. Buat konfigurasi router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Halaman utama
  },
  {
    path: "/signin",
    element: <SignIn />, // Halaman Sign In
  },
  {
    path: "/signup",
    element: <SignUp />, // Halaman Sign Up
  },
  {
    path: "/admin/adminDashboard",
    element: <AdminDashboard />
  },
  {
    path: "/admin/QuizManagement",
    element: <QuizManagement />
  },
  {
    path: "/user/ExamInterface",
    element: <ExamInterface />
  },
  {
    path: "/user/ExamResult",
    element: <ExamResults />
  },
  {
    path: "/user/SmartExamDashboard",
    element: <SmartExamDashboard />
  },
  {
    path: "/user/StudentDashboard",
    element: <StudentDashboard />
  },
]);

// 2. Gunakan RouterProvider di dalam render
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);