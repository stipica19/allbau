import React from 'react';

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1 data-aos="fade-right" data-aos-duration="2000">
            Easier Deployment
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="2000"
          >
            Deploy web apps of all kinds, from large scale enterprise
            APIs to static websites for individuals. Fill out the form
            to try a demo of our platform
          </p>
          <a href="#" className="btn btn-outline show">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
