import { useEffect } from "react";
import './App.css'

{/*
  This files are used only for home page
  Plugins/Components CSS  
*/ }
import './assets/include/rs-plugin/css/settings.css'
import './assets/include/rs-plugin/css/layers.css'
import './assets/include/rs-plugin/css/navigation.css'
import './assets/include/rs-plugin/css/addons/revolution.addon.liquideffect.css'
import './assets/page/Home.css'

import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import CategoryList from "./components/CategoryList";
import LatestRecipes from "./components/LatestRecipes";
import RecipeOfWeek from "./components/RecipeOfWeek";
import BlogUpdates from "./components/BlogUpdates";
import SubscribeForm from "./components/SubscribeForm";
import Footer from "./components/Footer";




function App() {


  useEffect(() => {
    const scripts = [
      "./assets/include/rs-plugin/js/jquery.themepunch.tools.min.js",
      "./assets/include/rs-plugin/js/jquery.themepunch.revolution.min.js",
      "./assets/include/rs-plugin/js/pixi.min.js",
      "./assets/include/rs-plugin/js/addons/revolution.addon.liquideffect.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.actions.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.carousel.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.kenburn.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.layeranimation.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.migration.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.navigation.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.parallax.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.slideanims.min.js",
      "./assets/include/rs-plugin/js/extensions/revolution.extension.video.min.js",
      "./assets/page/home.js"
    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // Keep order
      document.body.appendChild(script);
    });

    // Init slider after scripts load
    setTimeout(() => {
      if (window.jQuery && window.jQuery("#rev_slider").revolution) {
        window.jQuery("#rev_slider").revolution({
          // original slider settings
        });
      }
    }, 1000);

    // Optional cleanup: remove scripts when leaving page
    return () => {
      scripts.forEach(src => {
        const scriptTag = document.querySelector(`script[src="${src}"]`);
        if (scriptTag) {
          document.body.removeChild(scriptTag);
        }
      });
    };
  }, []);


  return (
    <>
      <div id="wrapper" className="stretched">
        <Header />
        <Slider />
        <main id="content">
          <CategoryList />
          <LatestRecipes />
          <RecipeOfWeek />
          <BlogUpdates />
          <SubscribeForm />
        </main>
        <Footer />


      </div>
    </>
  )
}

export default App
