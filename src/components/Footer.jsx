import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { IoLogoYoutube } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { SiGmail } from "react-icons/si"
import { IoLogoGithub } from "react-icons/io"
import { BsLinkedin } from "react-icons/bs"

import '../App.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  const [ userName, setUserName ] = useState()
  const [ youtubeLink, setYoutubeLink ] = useState()
  const [ intagramLink, setIntagramLink ] = useState()
  const [ github, setGithub ] = useState()
  const [ linkedin, setLinkedin ]  = useState("https://www.linkedin.com/in/thiago-carlos-80a480244")

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://api.github.com/users/tthiagocarlosdev')
      
      setUserName(data.login)
      setYoutubeLink(data.blog)
      setGithub(data.html_url)
      setIntagramLink(data.company)
      // console.log(data)
    }
    
    fetchData()

  }, [])

  return ( 
      <div className="boxFooter">
        <div className="boxTitleFooter">
          <p className="footerTitle"> Desenvolvido por <span>tthiagocarlosdev</span> </p>
        </div>
        <div className="boxLinksFooter">
          <ul className="linksSocialMedia">
              <li><a className="buttonsSocialMedia" href={youtubeLink} target="_blank" > <IoLogoYoutube/> </a> </li>
              <li><a className="buttonsSocialMedia" href={intagramLink} target="_blank" > <IoLogoInstagram /> </a></li>
              <li><a className="buttonsSocialMedia" href="mailto:tthiagocarlos.dev@gmail.com" target="_blank" > <SiGmail/> </a></li>
              <li><a className="buttonsSocialMedia" href={github} target="_blank" > <IoLogoGithub/> </a></li>
              <li><a className="buttonsSocialMedia" href={linkedin} target="_blank" > <BsLinkedin/> </a></li>
            </ul>
        </div>
      </div>
    
   );
}
 
export default Footer;
