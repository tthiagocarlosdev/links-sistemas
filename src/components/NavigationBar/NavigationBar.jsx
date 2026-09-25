import React, { useEffect, useState } from "react";
/* Biblioteca react-scroll -> facilita o scroll suave e gerencia a classe "ativa" no link correto baseando-se na posição atual da tela */
import { Link } from 'react-scroll';

import './NavigationBar.css'

const NavigationBar = () => {
    const generalSection = 'generalSection';
    const queriesSection = 'queriesSection';
    const otherSection = 'otherSection';
    const dtiSection = 'dtiSection';
    const downloadsSection = 'downloadsSection';

    // Função para formatar a primeira letra em maiúsculo
    const firstLetterCapitalized = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    // Função para formatar a data e hora
    const dataHora = () => {
        const formatter = new Intl.DateTimeFormat("pt-br", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        });

        const dataDoComputador = new Date();
        return firstLetterCapitalized(formatter.format(dataDoComputador));
    }

    // State para armazenar a data e hora formatada
    const [dataHoraAtual, setDataHoraAtual] = useState('');

    useEffect(() => {
        // Atualiza a data e hora atual assim que o componente é montado
        setDataHoraAtual(dataHora());

        // Atualiza a data e hora a cada segundo
        const intervalId = setInterval(() => {
            setDataHoraAtual(dataHora());
        }, 1000); // 1000 milissegundos = 1 segundo

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return ( 
        <section className="sectionNavigatorBar displayFlexCenterCenter">
            <div className="containerNavigatorBar pageWidth displayFlexCenterCenter">
                <div className="dateAndTimeBox displayFlexCenterCenter">
                    <p className="paragraphDateAndTime">{dataHoraAtual}</p>
                </div>
                <nav className="navigationBox displayFlexCenterCenter">
                    <Link className='navigationButtons' to={generalSection} spy={true} smooth={true} offset={0} duration={500} activeClass="active">Geral</Link>
                    <Link className='navigationButtons' to={queriesSection} spy={true} smooth={true} offset={0} duration={500} activeClass="active">Consultas</Link>
                    <Link className='navigationButtons' to={otherSection} spy={true} smooth={true} offset={0} duration={500} activeClass="active">Outros</Link>
                    <Link className='navigationButtons' to={dtiSection} spy={true} smooth={true} offset={0} duration={500} activeClass="active">DTI</Link>
                    <Link className='navigationButtons' to={downloadsSection} spy={true} smooth={true} offset={0} duration={500} activeClass="active">Downloads</Link>
                </nav>
            </div>
        </section>
     );
}
 
export default NavigationBar;
