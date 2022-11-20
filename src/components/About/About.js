import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import PlaceIcon from '@mui/icons-material/Place';

const About = () => {
  return (
    <section class="stats">
      <div class="container">
        <h1 class="stats-heading text-center my-1">O NAMA</h1>
        <h3 class="stats-heading text-center my-1">
          Dobrodošli na najbolju platformu za izradu aluminijskih
          ograda svih vrsta sa modernom arhitekturom.
        </h3>

        <div class="grid grid-2 text-center my-4">
          <div data-aos="fade-right" data-aos-duration="2000">
            <h3>Tko smo?</h3>
            <GroupIcon style={{ fontSize: 42 }} />
            <p class="text-secondary">
              ontrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <h3>GDJE SE NALAZIMO</h3>
            <PlaceIcon style={{ fontSize: 42 }} />
            <p class="text-secondary">Stockhofstraße 3, 4020 Linz</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
