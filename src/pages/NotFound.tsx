
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center pt-20 pb-32">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif font-bold text-restaurant-gold mb-6">404</h1>
          <p className="text-xl text-white mb-8">Sidan kunde inte hittas</p>
          <button 
            onClick={() => navigate("/")} 
            className="bg-restaurant-red hover:bg-restaurant-red/90 text-white px-6 py-3 rounded-md transition-colors text-lg"
          >
            Tillbaka till hemsidan
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
