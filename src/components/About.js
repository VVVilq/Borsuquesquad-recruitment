import React from 'react';
import '../styles/Styles.scss';

const About = ({ userLogged }) => {

    return (
        <div id="about-container">
            <p>
                Zadanie wykonane z wykotzystaniem OMDb API przez Wilka Mateusza.Narzucony limit zapytań to 1000 dziennie.
            </p>
        </div>
    )
}

export default About;