
import './Benefits.css'
import { ChevronRight, Leaf, Droplets, Sun, Star } from "lucide-react";

const Benefits = () => {

     const benefits = [
     { icon: <Leaf className="benefit-icon" />, title: "100% Natural", description: "Pure botanical ingredients sourced sustainably" },
    { icon: <Droplets className="benefit-icon" />, title: "Deep Hydration", description: "Penetrates hair shaft for lasting moisture" },
    { icon: <Sun className="benefit-icon" />, title: "Heat Protection", description: "Natural barrier against styling damage" },
  ];


  return (
    <div>
      <section id="benefits" className="benefits">
      <div className="section-container">
          <div className="section-header">
            <h2 className="section-title light">
              Why Choose Nature’s Nourish?
            </h2>
            <p className="section-subtitle light">
              Our hair oils are crafted with care using only the finest natural ingredients
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrapper">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description"> {benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
