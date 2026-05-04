import { useEffect } from "react";
import "./ProductSection.css";

const ProductSection = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.2 } // trigger when 20% visible
        );

        const elements = document.querySelectorAll(".fade-up");
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="product-section soft">
            <div className="product-inner fade-up">
                <h2>Thoughtfully Crafted Hair Oils</h2>

                <p>
                    Our products are made with carefully selected natural ingredients,
                    designed to support healthy hair, nourish the scalp,
                    and restore natural balance.
                </p>

                <div className="divider"></div>

            </div>
        </section>
    );
};

export default ProductSection;
