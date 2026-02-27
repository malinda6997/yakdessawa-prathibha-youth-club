import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // මෙතන index.css හෝ App.css ඔයා පාවිච්චි කරන ෆයිල් එකේ නම දෙන්න
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
