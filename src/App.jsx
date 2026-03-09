import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialoguePage from "./components/DialoguePage";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<DialoguePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
