import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiMysql,
  DiMongodb
} from 'react-icons/di'

import '../styles/components/technologies.sass'

// const technologies = [
//   { id: "html", name: "HTML5", icon: <DiHtml5 /> },
//   { id: "css", name: "CSS3", icon: <DiCss3 /> },
//   { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
//   { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
//   { id: "react", name: "React.js", icon: <DiReact /> },
//   { id: "mysql", name: "MySQL", icon: <DiMysql /> },
//   { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
// ]


// Pendente, a resolver ainda
// DevTools do navegador com erro de SourceMap em relação a extensão AdBlock. Tentativas de solução sem sucesso :'(

const Technologies = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {/* { technologies.map((tech) => {
          <div id={tech.id} key={tech.id} className="technologie-card">
            {tech.icon}
            <div className="technologie-info">
            <h3>{tech.name}</h3>
            </div>
          </div>
        }) } */}

{/* feito "na mão" devido ao erro de source map */}
        <div className="technology-card" id="html">
          <DiHtml5 />
          <h4>HTML5</h4>
        </div>
        <div className="technology-card" id="css">
          <DiCss3 />
          <h4>CSS3</h4>
        </div>
        <div className="technology-card" id="js">
          <DiJsBadge />
          <h4>JavaScript</h4>
        </div>
        <div className="technology-card" id="node">
          <DiNodejsSmall />
          <h4>Node.js</h4>
        </div>
        <div className="technology-card" id="react">
          <DiReact />
          <h4>React.js</h4>
        </div>
        <div className="technology-card" id="mysql">
          <DiMysql />
          <h4>MySQL</h4>
        </div>
        <div className="technology-card" id="mongo">
          <DiMongodb />
          <h4>MongoDB</h4>
        </div>
      </div>
    </section>
  )
}

export default Technologies