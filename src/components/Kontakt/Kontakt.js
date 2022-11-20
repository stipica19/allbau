import React from 'react';
import Input from '../InputField/Input';
import TextArea from '../InputField/TextArea';

const Kontakt = () => {
  return (
    <footer className="footer bg-dark py-2">
      <div className="container grid grid-2">
        <div className="">
          <div className="kontakt-page my-2">
            <h1>KONTAKT INFO</h1>
          </div>
          <div className="kontakt">
            <span className="material-symbols-outlined">email</span>
            <p>office@all-bau.at</p>
          </div>
          <div className="kontakt">
            <span className="material-symbols-outlined">phone </span>{' '}
            <p> +43 23241 4343 433</p>
          </div>
        </div>
        <div>
          <form>
            <Input
              icon="account_circle"
              label="Ihr Vor- und Nachname"
            />
            <Input icon="alternate_email" label="Deine E-Mail" />
            <TextArea icon="email" label="Ihre Nachricht"></TextArea>
            <div className="md-textbox">
              <label class="label-checkbox">
                Ich akzeptiere die Datenschutzerklärung und
                Nutzungsbedingungen
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="md-textbox">
              <button className="btn btn-outline show">
                ABSENDE
              </button>
            </div>{' '}
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Kontakt;
