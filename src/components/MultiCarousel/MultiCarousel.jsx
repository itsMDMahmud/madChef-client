import React from "react";

const MultiCarousel = () => {
  return (
    <>
      <div
        id="carouselMultiItemExample"
        className="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div className="d-flex justify-content-center mb-4">
          <button
            className="carousel-control-prev position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <img
                      src="https://i.ibb.co/cr4qbKW/Cucumber-Salad.jpg"
                      className="card-img-top"
                      alt="Waterfall"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Ambrossia</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        details
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://i.ibb.co/pdtS2DL/organic-food.jpg"
                      className="card-img-top"
                      alt="Sunset Over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Organic food</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        details
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src="https://i.ibb.co/ZhLbmSG/Fudge-Cake-1536x1082.jpg"
                      className="card-img-top"
                      alt="Sunset over the Sea"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Chocolate</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">
                        details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiCarousel;
