import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/booking.css"; // Reuse booking.css for consistency

const DetailedEstimate = () => {
  const { state } = useLocation();
  const { services = [], description = "" } = state || {};

  // Simulated AI to suggest tools and costs
  const simulateDetailedEstimate = () => {
    const toolDatabase = {
      "Leak Detection & Repair": [
        { tool: "Leak Detector", cost: 50, keywords: ["leak", "detection"] },
        { tool: "Repair Sealant", cost: 30, keywords: ["repair", "fix"] },
        { tool: "Labor (1 hour)", cost: 70, keywords: ["labor", "work"] },
      ],
      "Pipe Installation & Replacement": [
        { tool: "PVC Pipe (10ft)", cost: 100, keywords: ["pipe", "install"] },
        { tool: "Pipe Wrench", cost: 50, keywords: ["wrench", "tool"] },
        { tool: "Labor (2 hours)", cost: 150, keywords: ["labor", "work"] },
      ],
      "Drain Cleaning": [
        { tool: "Drain Snake", cost: 40, keywords: ["drain", "clean"] },
        { tool: "Cleaning Solution", cost: 20, keywords: ["solution", "clean"] },
        { tool: "Labor (1 hour)", cost: 40, keywords: ["labor", "work"] },
      ],
      "Water Heater Services": [
        { tool: "Water Heater Kit", cost: 100, keywords: ["heater", "service"] },
        { tool: "Pressure Gauge", cost: 50, keywords: ["pressure", "gauge"] },
        { tool: "Labor (1.5 hours)", cost: 100, keywords: ["labor", "work"] },
      ],
      "Fixture Installation": [
        { tool: "Fixture Set", cost: 80, keywords: ["fixture", "install"] },
        { tool: "Compression Fittings", cost: 40, keywords: ["fitting", "install"] },
        { tool: "Labor (1 hour)", cost: 80, keywords: ["labor", "work"] },
      ],
      "Emergency Plumbing": [
        { tool: "Emergency Kit", cost: 150, keywords: ["emergency", "urgent"] },
        { tool: "Overnight Tools", cost: 100, keywords: ["overnight", "emergency"] },
        { tool: "Labor (2 hours)", cost: 150, keywords: ["labor", "work"] },
      ],
      "Sewer Line Repair": [
        { tool: "Sewer Snake", cost: 120, keywords: ["sewer", "repair"] },
        { tool: "Repair Materials", cost: 80, keywords: ["repair", "materials"] },
        { tool: "Labor (2 hours)", cost: 150, keywords: ["labor", "work"] },
      ],
      "Backflow Prevention": [
        { tool: "Backflow Valve", cost: 80, keywords: ["backflow", "valve"] },
        { tool: "Testing Kit", cost: 40, keywords: ["test", "kit"] },
        { tool: "Labor (1 hour)", cost: 60, keywords: ["labor", "work"] },
      ],
    };

    const descKeywords = description.toLowerCase().split(" ").filter(word => word.length > 2);
    const detailed = services.map(service => {
      const tools = toolDatabase[service] || [];
      const enhancedTools = tools.filter(tool =>
        tool.keywords.some(keyword => descKeywords.includes(keyword)) ||
        Math.random() > 0.7 // Randomly add tools for simulation
      ).map(tool => ({ ...tool, cost: tool.cost * (Math.random() * 0.2 + 0.9) })); // Slight cost variation
      const subtotal = enhancedTools.reduce((sum, tool) => sum + tool.cost, 0);
      return { service, tools: enhancedTools, subtotal };
    });
    return detailed;
  };

  const detailedEstimate = simulateDetailedEstimate();
  const totalCost = detailedEstimate.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="booking-page">
      <h1>Detailed Cost Breakdown</h1>
      {detailedEstimate.length > 0 ? (
        <div className="detailed-estimate">
          {detailedEstimate.map((detail, index) => (
            <div key={index} className="service-breakdown">
              <h4>{detail.service} (Subtotal: ${detail.subtotal.toFixed(2)})</h4>
              <table>
                <thead>
                  <tr>
                    <th>Tool/Item</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.tools.map((tool, i) => (
                    <tr key={i}>
                      <td>{tool.tool}</td>
                      <td>${tool.cost.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <p className="total">Total Estimated Cost: ${totalCost.toFixed(2)}</p>
        </div>
      ) : (
        <p>No services selected or description provided to generate a detailed estimate.</p>
      )}
      <Link to="/booking">
        <button className="back-button">Back to Booking</button>
      </Link>
    </div>
  );
};

export default DetailedEstimate;