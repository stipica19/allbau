import React from 'react';
import { categoryImage } from '../../data/data-category';
import './category.css';

const Category = () => {
  return (
    <section class="features-main my-2">
      <h2 class="md text-center my-2">UNSERE PROJECTS</h2>
      <div class="container grid grid-3">
        {categoryImage &&
          categoryImage.map((item) => (
            <div
              class="cardImg flex"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={item.backgroundImage}
                alt="allbau"
                className="image-box"
              />
              <div class="info">
                <h1>Ograda</h1>
                <p>
                  Lorem Ipsum is simply dummy text from the printing
                  and typeseting industry
                </p>
                <button>Read More</button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Category;
