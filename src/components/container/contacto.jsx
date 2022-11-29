import React from "react";
import { Contacto } from "../../models/contacto.class";
import InfoComponent from "../pure/info";

const ContactoComponent = () => {
  const contactoObj = new Contacto("Kevin", "Paredes", "kman@gmail.com", true);
  return (
    <div>
      <div>
        <h1>Contacto</h1>
      </div>
      <InfoComponent contacto={contactoObj}></InfoComponent>
    </div>
  );
};

ContactoComponent.propTypes = {};

export default ContactoComponent;
