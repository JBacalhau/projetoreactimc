import { StyledLgpd } from "./styles";
import React from 'react';

export function Lgpd(props) {

    return (

        <StyledLgpd>
           

                <p>Nós utilizamos cookies e outras tecnologias semelhantes para coletar dados durante a navegação para melhorar
                    a sua experiência em nossos serviços. Saiba mais em nossa <a href="#">Política de privacidade e Cookies.</a>
                </p>

                <button onClick={props.hide}>Estou ciente</button>
            

        </StyledLgpd>

    )
}