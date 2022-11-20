import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark py-2">
      <div className="thank-you"></div>
      <div className="container grid grid-2">
        <div className="copyright">
          <img
            src="./images/logo.png"
            height="auto"
            width="auto"
            className="logo"
          />
          <div className="radnovrijeme">
            <h4> ÖFFNUNGSZEITEN:</h4>
            <p>Montag - Sonntag</p>
            <p> 8:00 bis 17:00 Uhr</p>
            <p>Feiertag geschlossen</p>
          </div>
          <p>Copyright &copy; 2022</p>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="748"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="frame-map"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
