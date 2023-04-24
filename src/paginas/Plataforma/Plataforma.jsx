import React from "react";
import { Nav } from "../../componentes/nav/Nav";
import { BackGroundPink } from "../Home/HomeStyle";
import { Footer } from "../../componentes/Footer/Footer";
import { SecaoPlataforma } from "./PlataformaStyle";
import flexge1 from  "../../assets/img/flexge1.png";
import flexge2 from  "../../assets/img/flexge2.png";
import flexge3 from "../../assets/img/flexge3.png";
import flexge4 from "../../assets/img/flexge4.png"

const Plataforma = () => {
    return(
        <BackGroundPink>
            <Nav/>
            <SecaoPlataforma>
                <h1>PORQUE SOMOS DIFERENTES</h1>
                <h2>Entenda o que faz com que nossa metodologia seja mais eficiente e ensine de verdade.</h2>
                <div className="flexge1">
                    <div>
                        <h3>Levamos os alunos à fluência</h3>
                        <p>Com uma trilha de aprendizagem completa e alinhada com os parâmetros internacionais, levamos os alunos do nível básico ao mais avançado de proficiência, com o objetivo de atingir a fluência.</p>
                    </div>
                    <div className="flexgeImg1">
                        <img src={flexge1} alt="Desmonstração do App - Figura 1" />
                        <img src={flexge2} alt="Desmonstração do App - Figura 2" />
                    </div>
                </div>

                <div className="flexge2">
                    <img src={flexge3} alt="Desmonstração da correção de pronúncia - Figura 3" />
                    <div>
                        <h3>FEEDBACK DE PRONÚNCIA</h3>
                        <p>Através de um avançado sistema o aluno grava sua fala e recebe um feedback instantâneo, palavra por palavra, e ainda pode comparar a sua pronúncia à de falantes nativos.</p>
                    </div>
                    
                </div>

                <div className="flexge3">
                    <div>
                        <h3>CRIANÇAS DE 6 A 10 ANOS</h3>
                        <p>Material didático inovador de inglês para crianças, focado no desenvolvimento das habilidades de fala e escuta.</p>
                        <h3>MATERIAL DIDÁTICO LÚDICO</h3>
                        <p>Totalmente gamificada, a Flexge Kids envolve as crianças em atividades lúdicas e interativas.</p>
                        <h3>CONTEÚDO DOS NÍVEIS PRE-A1 E A1</h3>
                        <p>Conte com uma trilha de aprendizagem baseada no Quadro Comum Europeu de Referência para Línguas que leva o aluno até o nível A1.</p>
                    </div>
                    <img src={flexge4} alt="Desmonstração de exercício KIDS - Figura 4" />
                </div>

                <div className="flexge4">
                    <h2>O MELHOR MATERIAL DIDÁTICO</h2>
                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section3_1.svg" alt="Icone de exercícios" />
                        <div>
                            <h4>+31.000 EXERCÍCIOS DISPONÍVEIS</h4>
                            <p>Conte com milhares de exercícios gamificados para auxliar seus alunos no aprendizado do inglês.</p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section3_2.svg" alt="Icone de trilha de aprendizagem completa" />
                        <div>
                            <h4>TRILHA DE APRENDIZAGEM COMPLETA</h4>
                            <p>Trabalhe com uma trilha de aprendizagem baseada no Quadro Comum Europeu de Referência Para Línguas (CEFR).</p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section3_3.svg" alt="Icone de planejamento de aulas" />
                        <div>
                            <h4>PLANEJAMENTO DAS AULAS</h4>
                            <p>Acesse relatórios em tempo real das atividades realizadas e identifique as necessidades educacionais dos seus alunos.</p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section4_4.svg" alt="Icone teste de nivelamento" />
                        <div>
                            <h4>TESTE DE NIVELAMENTO</h4>
                            <p>Contamos com um teste de nivelamento <strong>em conformidade com o CEFR</strong> garantindo que você possa estudar o conteúdo de acordo com o seu grau de proficiência.</p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section4_5.svg" alt="Icone de certificação" />
                        <div>
                            <h4>CERTIFICAÇÃO</h4>
                            <p>Certificado ao final de cada curso: você irá receber uma versão digital para comprovar o nível de proficiência na plataforma, e a partir dele se preferir poderá imprimir. </p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section4_6.svg" alt="Icone de ensino personalizado" />
                        <div>
                            <h4>ENSINO PERSONALIZADO</h4>
                            <p>O seu desempenho será analisado pela inteligência da plataforma, assim a professora poderá direcionar suas aulas de acordo com suas dificuldades.</p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section4_1.svg" alt="Icone de flexbilidade de horários" />
                        <div>
                            <h4>MAIS FLEXIBILIDADE DE HORÁRIOS</h4>
                            <p>Nosso material didático digital pode ser acessado 24 horas por dia, 7 dias por semana.</p>
                        </div>
                    </div>

                    <div className="topico">
                        <img src="https://flexge.com/assets/img/private_teachers/icon_section4_2.svg" alt="Icone do Speaking" />
                        <div>
                            <h4>FOCO NO SPEAKING</h4>
                            <p>Com nossa ferramenta inovadora de avaliação de pronúncia, você perderá o medo de falar inglês e irá aperfeiçoar o speaking em uma velocidade surpreendente.</p>
                        </div>
                    </div>

                </div>


            </SecaoPlataforma>
            <Footer/>
        </BackGroundPink>
    )
}

export default Plataforma;