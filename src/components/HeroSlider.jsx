import React from "react";

const HeroSlider = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/h2.jpg" className="d-block w-100 h-50" alt="Recycling Process" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-bold text-white">Efficient Waste Management for a Cleaner Milton</h2>
            <p className="text-white">Join us in reducing, reusing, and recycling for a greener future.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/h1.jpg" className="d-block w-100" alt="Waste Collection" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-bold text-white">Reliable Waste Collection Services</h2>
            <p className="text-white">Providing sustainable solutions to manage household and commercial waste.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/h3.jpg" className="d-block w-100" alt="Eco-Friendly Initiatives" />
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-bold text-white">Building a Sustainable Community</h2>
            <p className="text-white">Our commitment to eco-friendly waste disposal and management.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default HeroSlider;
