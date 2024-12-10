// Contact.js
import React from 'react';
import '../App.css'; // Importa el CSS si es necesario

function Contact() {
    return (
        <section className="content contact" id="contacto">
            <h2 className="title">Espacio Admin</h2>
            <p>Disfruta de la comodidad y seguridad de arrendar un espacio dentro de tu propio condominio.</p>
            <figure className="logok">
                <img src="img/Logo_EspacioAdmin.png" alt="Logo EspacioAdmin" style={{ maxWidth: '300px', height: '200px', width: '100%' }} />
            </figure>
        </section>
    );
}

export default Contact;