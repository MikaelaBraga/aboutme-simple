import AboutContainer from './AboutContainer'
import Projects from './Projects'
import Technologies from './Technologies'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <Technologies />
      <Projects />
    </main>
  )
}

export default MainContent