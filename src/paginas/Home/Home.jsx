import React from "react";
import { Nav } from "../../componentes/nav/Nav";
import { BackGroundPink, SecaoPrincipal} from "./HomeStyle"
import { Footer } from "../../componentes/Footer/Footer";
import BrasilUK from "../../assets/img/englishBR.png";


const Home = () =>{
    return(
        
        <BackGroundPink>
            <Nav/>
            <SecaoPrincipal>
                <h1>Saia na frente com seu inglês</h1>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2> 
                <div className="introducao">

                    <div className="inicioIntroducao">
                        <img src={BrasilUK} alt="Imagem ilustrativa do mapa do Brasil com o simbolo da Inglaterra" />
                        <p>Aprender inglês pode ser um desafio, especialmente se você não tem a oportunidade de praticá-lo regularmente. No entanto, as aulas particulares de inglês podem ser uma maneira eficaz de acelerar seu aprendizado e obter os benefícios que vêm com a fluência no idioma.</p><br></br>
                    </div>
                    <p className="beneficiosTitulo">Aqui estão alguns dos principais benefícios de aprender inglês através de aulas particulares:</p><br></br>
                    <div className="beneficios">
                        <p><b>Personalização:</b><br></br><br></br> As aulas particulares são personalizadas para atender às suas necessidades e objetivos de aprendizado. Será possível adaptar o conteúdo das aulas de acordo com seu nível atual de inglês e o que você deseja alcançar. Isso significa que você pode se concentrar em áreas específicas de interesse, como gramática, pronúncia, vocabulário ou habilidades de conversação.</p>
                        <p><b>Atenção individualizada:</b><br></br><br></br> As aulas particulares permitem que você receba atenção individualizada. Isso significa que você pode ter suas dúvidas respondidas imediatamente e receber feedback sobre sua pronúncia e habilidades de conversação em tempo real. Além disso, será possível adaptar o ritmo das aulas para garantir que você esteja progredindo no seu próprio ritmo.</p>
                        <p><b>Flexibilidade:</b><br></br><br></br> As aulas particulares são geralmente mais flexíveis em termos de horários e locais de aulas. Isso significa que você pode agendar suas aulas em horários que sejam convenientes para você, seja antes ou depois do trabalho, nos finais de semana ou até mesmo durante as férias.</p>
                        <p><b>Imersão total:</b><br></br><br></br> Aprender inglês através de aulas particulares pode fornecer uma experiência de imersão total no idioma. Isso significa que você pode se concentrar exclusivamente no inglês durante as aulas, o que pode ajudá-lo a melhorar sua compreensão e fluência em um ritmo mais rápido.</p>
                        <p><b>Motivação:</b><br></br><br></br> As aulas particulares podem ajudar a manter sua motivação para aprender inglês. Ao ter uma professora dedicada que acompanha seu progresso e oferece feedback constante, você pode sentir mais confiante em suas habilidades e ser encorajado a continuar aprendendo.</p>
                        <p><b>Preparação para exames:</b><br></br><br></br> Se você está se preparando para um exame de inglês, as aulas particulares podem ser especialmente úteis. Será posssível ajudá-lo a se concentrar nos aspectos específicos do exame que você precisa melhorar, fornecer dicas e truques para ajudá-lo a se sair bem e fornecer feedback sobre seu progresso.</p>
                        {/* Adicionar mais benefícios =) */}
                    </div>
                    
        
                </div> 
            </SecaoPrincipal>
            <Footer/>     
        </BackGroundPink>
        
    )
}

export default Home;