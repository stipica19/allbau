import React from 'react';
import VerkaufenItem from './VerkaufenItem';
import Input from '../InputField/Input';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Verkaufen = () => {
  const verfkaufenOption = [
    { label: '-', value: '' },
    { label: 'Zaune', value: 'Zaune' },
    { label: 'Fliesen', value: 'Fliesen' },
    { label: 'Naturstein', value: 'Naturstein' },
    { label: 'Carport', value: 'Carport' },
    { label: 'Pergole', value: 'Pergole' },
    { label: 'Baumaterial', value: 'Baumaterial' },
    { label: 'Beton', value: 'Beton' },
    { label: 'Holz', value: 'Holz' },
  ];

  return (
    <section class="stats">
      <div class="container">
        <h1 class="stats-heading text-center my-1">Verkafuen</h1>
        <h3 class="stats-heading text-center my-1">
          Dobrodošli na najbolju platformu za izradu aluminijskih
          ograda svih vrsta sa modernom arhitekturom.
        </h3>

        <div class="box-container">
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Zaune"
              image="https://www.njuskalo.hr/image-w920x690/gradevinski-materijal/profili-izradu-aluminijskih-ograda-slika-111655187.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Fliesen"
              image="https://www.stonenaturelle.at/library/media/bilder/produkte%20innen/fliesen%20in%20betonoptik/concrete%20stone/betonoptik%20fliesen%20concrete%20stone%20bad.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Naturstein"
              image="https://www.haeusler.co.at/wp-content/uploads/2020/06/Sechs-Granit-Terrasse-2020-01_2-scaled.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Carport"
              image="https://www.guardi.at/fileadmin/_processed_/2/d/csm_GUARDI_Carport_Pantheon_anthrazit_web_2_8a2db2dab3.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Pergole"
              image="https://roleta.rs/wp-content/uploads/2021/04/2.png"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Baumaterial"
              image="https://as2.ftcdn.net/v2/jpg/00/37/14/23/1000_F_37142341_QvTVYTsu2cMFZbc73JUStZ1Z7NbgsD59.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Beton"
              image="https://media.bahag.cloud/m/259905/12.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Holz"
              image="https://www.parkett-pflegemittel.de/media/image/a9/96/27/Holzwachstum.jpg"
            />
          </div>
          <div data-aos="fade-out" data-aos-duration="2000">
            <VerkaufenItem
              name="Zaune"
              image="https://www.njuskalo.hr/image-w920x690/gradevinski-materijal/profili-izradu-aluminijskih-ograda-slika-111655187.jpg"
            />
          </div>
        </div>
        <div className="form-verfkaufen">
          <div className="container grid">
            <div className="form-container">
              <Input
                icon="account_circle"
                label="Ihr Vor- und Nachname"
              />
              <Input icon="alternate_email" label="Deine E-Mail" />
              <Input />
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verkaufen;
