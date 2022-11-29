/* Componente B */
import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const InfoComponent = ({ contacto }) => {
  return (
    <div>
      <h3>Nombre: {contacto.nombre}</h3>
      <h3>Apellido: {contacto.apellido}</h3>
      <h3>Email: {contacto.email}</h3>
      <h3>
        {contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </h3>
      <h3>{contacto.conectado}</h3>
    </div>
  );
};

InfoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default InfoComponent;
