import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { IoLogoYoutube } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { SiGmail } from "react-icons/si"
import { IoLogoGithub } from "react-icons/io"

import '../App.css'

const Footer = () => {
  const [ userName, setUserName ] = useState()
  const [ youtubeLink, setYoutubeLink ] = useState()
  const [ intagramLink, setIntagramLink ] = useState()
  const [ github, setGithub ] = useState()

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
    
      <div className="box-footer">
        <p className="footer-title"> Desenvolvido por tthiagocarlosdev </p>
          <ul className="links-social-media">
            <li><a href={youtubeLink} target="_blank" > <IoLogoYoutube/> </a> </li>
            <li><a href={intagramLink} target="_blank" > <IoLogoInstagram /> </a></li>
            <li><a href="mailto:tthiagocarlos.dev@gmail.com" target="_blank" > <SiGmail/> </a></li>
            <li><a href={github} target="_blank" > <IoLogoGithub/> </a></li>
          </ul>
      </div>
    
   );
}
 
export default Footer;

/* 
IoLogoYoutube
IoLogoInstagram
SiGmail
IoLogoGithub
*/