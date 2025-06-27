import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWrench, FaTape, FaPumpSoap, FaPencilRuler, FaTools } from 'react-icons/fa'; // Example icons
import '../styles/products.css';
import PipeWrench from '../assets/PipeWrench.jpg';
import Plunger from '../assets/Plunger.jpg';
import PVC from '../assets/PVC.jpg';
import plumbing1 from '../assets/plumber1.webp';
import plumbing2 from '../assets/plumber2.webp';
import WaterPump from '../assets/WaterPump.jpg';
import Drain from '../assets/Drain.jpg';
import Pipe from '../assets/Pipe.jpg';
import Compression from '../assets/Compression.jpg';
import PipeInsulation from '../assets/PipeInsulation.jpg';
import SumpPump from '../assets/SumpPump.jpg';
import PipeThreader from '../assets/PipeThreader.jpg';
import PressureGauge from '../assets/PressureGauge.jpg';

const ProductEquipments = [
  { id: 1, name: 'Pipe Wrench', price: 25000, image: PipeWrench, brand: 'Ridgid' },
  { id: 2, name: 'Plunger', price: 1500, image: Plunger, brand: 'Stanley' },
  { id: 3, name: 'PVC Pipe Cutter', price: 3000, image: PVC, brand: 'Irwin' },
  { id: 4, name: 'Teflon Tape', price: 5000, image: plumbing1, brand: 'Oatey' },
  { id: 5, name: 'Adjustable Wrench', price: 20500, image: plumbing2, brand: 'Ridgid' },
  { id: 6, name: 'Drain Snake', price: 35500, image: Drain, brand: 'Stanley' },
  { id: 7, name: 'Pipe Fittings Kit', price: 40200, image: WaterPump, brand: 'SharkBite' },
  { id: 8, name: 'Water Pump', price: 15000, image: Pipe, brand: 'Grundfos' },
  { id: 9, name: 'Soldering Torch', price: 600, image: Plunger, brand: 'Irwin' },
  { id: 10, name: 'Leak Detector', price: 4500, image: plumbing1, brand: 'Fluke' },
  { id: 11, name: 'Compression Fittings', price: 1000, image: Compression, brand: 'Uponor' },
  { id: 12, name: 'Pipe Insulation Tape', price: 1200, image: PipeInsulation, brand: 'Oatey' },
  { id: 13, name: 'Pressure Gauge', price: 3000, image: PressureGauge, brand: 'Fluke' },
  { id: 14, name: 'Pipe Threader', price: 5000, image: PipeThreader, brand: 'Ridgid' },
  { id: 15, name: 'Sump Pump', price: 20000, image: SumpPump, brand: 'Zoeller' },
];

const ITEMS_PER_PAGE = 8;

function Products() {
  const [selectedBrands, setSelectedBrands] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on selected brands
  const filteredProducts = ProductEquipments.filter((equipment) => {
    if (Object.keys(selectedBrands).length === 0) return true; // Show all if no brands selected
    for (const category in selectedBrands) {
      if (selectedBrands[category].length > 0 && selectedBrands[category].includes(equipment.brand)) {
        return true;
      }
    }
    return false;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  const handleCheckboxChange = (category, brand) => {
    setSelectedBrands((prev) => {
      const newSelections = { ...prev };
      if (newSelections[category]) {
        if (newSelections[category].includes(brand)) {
          newSelections[category] = newSelections[category].filter((b) => b !== brand);
        } else {
          newSelections[category] = [...newSelections[category], brand];
        }
      } else {
        newSelections[category] = [brand];
      }
      // Reset to page 1 when filters change
      setCurrentPage(1);
      return newSelections;
    });
  };

  const categories = {
    'Tools': ['Ridgid', 'Stanley', 'Irwin'],
    'Accessories': ['Oatey', 'Uponor', 'SharkBite'],
    'Equipment': ['Grundfos', 'Fluke', 'Zoeller'],
    'Pipes and Fittings': ['SharkBite', 'Uponor'],
    'Measurement and Detection': ['Fluke'],
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="categories-products">
          <h4>Categories</h4>
          {Object.keys(categories).map((category) => (
            <div key={category}>
              <h5>{category}</h5>
              <ul>
                {categories[category].map((brand) => (
                  <li key={brand}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedBrands[category]?.includes(brand) || false}
                        onChange={() => handleCheckboxChange(category, brand)}
                      />
                      {brand === 'Ridgid' && <FaWrench className="brand-icon" />}
                      {brand === 'Stanley' && <FaTools className="brand-icon" />}
                      {brand === 'Irwin' && <FaPencilRuler className="brand-icon" />}
                      {brand === 'Oatey' && <FaTape className="brand-icon" />}
                      {brand === 'Uponor' && <FaTape className="brand-icon" />}
                      {brand === 'SharkBite' && <FaTools className="brand-icon" />}
                      {brand === 'Grundfos' && <FaPumpSoap className="brand-icon" />}
                      {brand === 'Fluke' && <FaPencilRuler className="brand-icon" />}
                      {brand === 'Zoeller' && <FaPumpSoap className="brand-icon" />}
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container-products">
          <div className="products-header">
            <h6 className="page-title-products">
              showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length}
            </h6>
          </div>
          <div className="masonry-grid-products">
            {currentItems.map((equipment) => (
              <div key={equipment.id} className="product-card-products">
                <div className="image-container-products">
                  <img src={equipment.image} alt={equipment.name} className="product-image-products" />
                </div>
                <div className="product-info-products">
                  <span className="price-tag-products">FRW {equipment.price.toLocaleString()}</span>
                  <h3 className="product-name-products">{equipment.name}</h3>
                  <div className="rating">★★★★☆</div>
                  <button className="add-to-cart">Pick</button>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                to={`/products?page=${page}`}
                className={`page-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;