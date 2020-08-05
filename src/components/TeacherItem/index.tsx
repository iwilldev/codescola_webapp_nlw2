import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/64846348?s=460&u=3da1cbc02ae51cd1d8df94ec6caa28ecb40505ee&v=4" alt="William Gonçalves"/>
                <div>
                    <strong>
                        William Gonçalves
                    </strong>
                    <span>
                        Design
                    </span>
                </div>
            </header>
            <p>
                Designer e Desenvolvedor Front-End.
                <br /><br />
                Mago do CSS, ninja dos layouts e designer do primeiro protótipo da bola quadrada do Quico. Reza a lenda que já fez um elefante caber dentro de uma caixa de sapato, usando apenas uma media query e três propriedades.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>
                        R$ 50,00
                    </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone do WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;