import SocialNetworksContainer from './SocialNetworks'
import Avatar from '../img/mikinha.png'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Avatar Mikaela" />
      <p className="title">Desenvolvedora Jr.</p>
      <SocialNetworksContainer />
      <InformationContainer />
      <a
      href="https://www.canva.com/design/DAE_v3Z2awY/tf0tIcoWTRGeQp3pr4-35w/view?utm_content=DAE_v3Z2awY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
      >
        visualizar curriculo
      </a>
    </aside>
  )
}

export default Sidebar