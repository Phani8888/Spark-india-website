// Updated App.js with new routes for DetergentChemical and FattyAcids
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
// import Careers from './components/Careers';
import Activities from './components/Activities';
import Industries from './components/Industries';
import AboutUs from './components/AboutUs';
// import AwardsAccolades from './components/AwardsAccolades';
// import ProductRange from './components/ProductRange';
// import DairyCultures from './components/product/DairyCultures';
// import FunctionalSystems from './components/product/FunctionalSystems';
// import DairyEnzymes from './components/product/DairyEnzymes';
// import Emulsifiers from './components/product/Emulsifiers';
// import BakeryEnzymes from './components/product/BakeryEnzymes';
// import Hydrocolloids from './components/product/Hydrocolloids';
// import SoyProteins from './components/product/SoyProteins';
// import LiquidGlucose from './components/product/LiquidGlucose';
// import Maltodextrin from './components/product/Maltodextrin';
// import MaizeStarch from './components/product/MaizeStarch';
// import ModifiedStarches from './components/product/ModifiedStarches';
// import CitricAcid from './components/product/CitricAcid';
// import CocoaPowder from './components/product/CocoaPowder';
// import Saffron from './components/product/Saffron';
// import FoodSafetyEquipment from './components/product/FoodSafetyEquipment';
// import FlavoursFoodColors from './components/product/FlavoursFoodColors';
// import PhosphoricAcid from './components/product/PhosphoricAcid';
// import BromineChemicals from './components/product/BromineChemicals';
// import AceticAcid from './components/product/AceticAcid';
// import EBlends from './components/product/EBlends';
// import DetergentChemical from './components/product/DetergentChemical';
// import FattyAcids from './components/product/FattyAcids';
// import BlogPost from './components/product/BlogPost';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="/activities" element={<Activities />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/awards-accolades" element={<AwardsAccolades />} /> */}
          {/* <Route path="/product-range" element={<ProductRange />} />
          <Route path="/product-range/dairy-cultures" element={<DairyCultures />} />
          <Route path="/product-range/functional-systems" element={<FunctionalSystems />} />
          <Route path="/product-range/dairy-enzymes" element={<DairyEnzymes />} />
          <Route path="/product-range/emulsifiers" element={<Emulsifiers />} />
          <Route path="/product-range/bakery-enzymes" element={<BakeryEnzymes />} />
          <Route path="/product-range/hydrocolloids" element={<Hydrocolloids />} />
          <Route path="/product-range/soy-proteins" element={<SoyProteins />} />
          <Route path="/product-range/liquid-glucose" element={<LiquidGlucose />} />
          <Route path="/product-range/maltodextrin" element={<Maltodextrin />} />
          <Route path="/product-range/maize-starch" element={<MaizeStarch />} />
          <Route path="/product-range/modified-starches" element={<ModifiedStarches />} />
          <Route path="/product-range/citric-acid" element={<CitricAcid />} />
          <Route path="/product-range/cocoa-powder" element={<CocoaPowder />} />
          <Route path="/product-range/saffron" element={<Saffron />} />
          <Route path="/product-range/food-safety-equipment-testing-kits" element={<FoodSafetyEquipment />} />
          <Route path="/product-range/flavours-food-colors" element={<FlavoursFoodColors />} />
          <Route path="/product-range/phosphoric-acid" element={<PhosphoricAcid />} />
          <Route path="/product-range/bromine-bromine-chemicals" element={<BromineChemicals />} />
          <Route path="/product-range/acetic-acid" element={<AceticAcid />} />
          <Route path="/product-range/e-blends" element={<EBlends />} />
          <Route path="/product-range/detergent-chemical" element={<DetergentChemical />} />
          <Route path="/product-range/fatty-acids" element={<FattyAcids />} />
          <Route path="/blog/:slug" element={<BlogPost />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;