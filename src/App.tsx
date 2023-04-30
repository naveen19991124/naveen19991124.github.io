import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Pages/HomePage";
import BlogPage from "./Components/Pages/BlogPage";
import ContactPage from "./Components/Pages/ContactPage";
import "./CSS/App.css";
import Footer from "./Components/Footer";
import BlogContentPage from "./Components/Pages/BlogContentPage";
const App = (): JSX.Element => {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("nav");
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage = (window.scrollY / totalHeight) * 100;
      if (scrollPercentage > 10) {
        navbar?.classList.add("dark-nav");
      } else {
        navbar?.classList.remove("dark-nav");
      }

      return () => {
        window.removeEventListener("scroll", () => {});
      };
    });
  });
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/blog" Component={BlogPage} />
          <Route path="/blog/:slug/:id" Component={BlogContentPage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
