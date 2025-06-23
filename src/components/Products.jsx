import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
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
  { id: 1, name: 'Pipe Wrench', price: 25000, image: PipeWrench },
  { id: 2, name: 'Plunger', price: 1500, image: Plunger },
  { id: 3, name: 'PVC Pipe Cutter', price: 3000, image: PVC },
  { id: 4, name: 'Teflon Tape', price: 5000, image: plumbing1 },
  { id: 5, name: 'Adjustable Wrench', price: 20500, image: plumbing2 },
  { id: 6, name: 'Drain Snake', price: 35500, image: Drain },
  { id: 7, name: 'Pipe Fittings Kit', price: 40200, image: WaterPump },
  { id: 8, name: 'Water Pump', price: 15000, image: Pipe },
  { id: 9, name: 'Soldering Torch', price: 600, image: Plunger },
  { id: 10, name: 'Leak Detector', price: 4500, image: plumbing1 },
  { id: 11, name: 'Compression Fittings', price: 1000, image: Compression },
  { id: 12, name: 'Pipe Insulation Tape', price: 1200, image: PipeInsulation },
  { id: 13, name: 'Pressure Gauge', price: 3000, image: PressureGauge },
  { id: 14, name: 'Pipe Threader', price: 5000, image: PipeThreader },
  { id: 15, name: 'Sump Pump', price: 20000, image: SumpPump },
];

const ITEMS_PER_PAGE = 8;

function Products() {
  const [selectedBrands, setSelectedBrands] = useState({});
  const [sortBy, setSortBy] = useState('date');
  const [view, setView] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = {
    'Tools': ['Ridgid', 'Stanley', 'Irwin'],
    'Accessories': ['Oatey', 'Uponor', 'SharkBite'],
    'Equipment': ['Grundfos', 'Fluke', 'Zoeller'],
    'Pipes and Fittings': ['SharkBite', 'Uponor'],
    'Measurement and Detection': ['Fluke'],
  };

  const handleCheckboxChange = (category, brand) => {
    setSelectedBrands(prev => {
      const newSelections = { ...prev };
      if (newSelections[category]) {
        if (newSelections[category].includes(brand)) {
          newSelections[category] = newSelections[category].filter(b => b !== brand);
        } else {
          newSelections[category] = [...newSelections[category], brand];
        }
      } else {
        newSelections[category] = [brand];
      }
      return newSelections;
    });
  };

  const totalPages = Math.ceil(ProductEquipments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = ProductEquipments.slice(startIndex, endIndex);

  return (
    <div className='main-container'>
      <div className="container">
        <div className="categories-products">
          <h4>Categories</h4>
          {Object.keys(categories).map(category => (
            <div key={category}>
              <h5>{category}</h5>
              <ul>
                {categories[category].map(brand => (
                  <li key={brand}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedBrands[category]?.includes(brand) || false}
                        onChange={() => handleCheckboxChange(category, brand)}
                      />
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='container-products'>
          <div className="products-header">
            <h6 className="page-title-products">showing {startIndex + 1}-{Math.min(endIndex, ProductEquipments.length)} of {ProductEquipments.length}</h6>
            
          </div>
          <div className="masonry-grid-products">
            {currentItems.map((equipment) => (
              <div key={equipment.id} className="product-card-products">
                <div className="image-container-products">
                  <img src={equipment.image} alt={equipment.name} className="product-image-products" />
                </div>
                <div className="product-info-products">
                  <span className="price-tag-products">FRW {equipment.price}</span>
                  <h3 className="product-name-products">{equipment.name}</h3>
                  <div className="rating">★★★★☆</div>
                  <button className="add-to-cart">Pick</button>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
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