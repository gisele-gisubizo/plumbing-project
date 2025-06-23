import React from 'react';
import '../styles/home.css';
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

const Home = () => {
  const plumbingEquipments = [
    { id: 1, name: 'Pipe Wrench', price: 25, image: PipeWrench },
    { id: 2, name: 'Plunger', price: 15, image: Plunger },
    { id: 3, name: 'PVC Pipe Cutter', price: 30, image: PVC },
    { id: 4, name: 'Teflon Tape', price: 5, image: plumbing1 },
    { id: 5, name: 'Adjustable Wrench', price: 20, image: plumbing2 },
    { id: 6, name: 'Drain Snake', price: 35, image: Drain },
    { id: 7, name: 'Pipe Fittings Kit', price: 40, image: WaterPump },
    { id: 8, name: 'Water Pump', price: 150, image: Pipe },
    { id: 9, name: 'Soldering Torch', price: 60, image: Plunger },
    { id: 10, name: 'Leak Detector', price: 45, image: plumbing1 },
    { id: 11, name: 'Compression Fittings', price: 10, image: Compression },
    { id: 12, name: 'Pipe Insulation Tape', price: 12, image: PipeInsulation },
    { id: 13, name: 'Pressure Gauge', price: 30, image: PressureGauge },
    { id: 14, name: 'Pipe Threader', price: 50, image: PipeThreader },
    { id: 15, name: 'Sump Pump', price: 200, image: SumpPump },
  ];

  return (
    <div className="container-HOME">
      <h1 className="page-title-HOME">Discover Our Plumbing Tools</h1>
      <div className="masonry-grid">
        {plumbingEquipments.map((equipment) => (
          <div key={equipment.id} className="masonry-item">
            <div className="product-card">
              <div className="image-container">
                <img src={equipment.image} alt={equipment.name} className="product-image" />
                <div className="overlay">
                  <span className="overlay-text">View Details</span>
                </div>
              </div>
              <div className="product-info">
                <span className="price-tag">From ${equipment.price}</span>
                <h3 className="product-name">{equipment.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;