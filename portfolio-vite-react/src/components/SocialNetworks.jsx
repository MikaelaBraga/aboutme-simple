import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'


const SocialNetworksContainer = () => {
  return (
    <section id="social-networks">
        <a href="https://github.com/MikaelaBraga" className="social-btn" id="linkedin">
          {<FaLinkedinIn />}
        </a>
        <a href="https://www.linkedin.com/in/mikaela-braga/" className="social-btn" id="github">
          {<FaGithub />}
        </a>
    </section>
  )
}

export default SocialNetworksContainer