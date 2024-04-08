import { Cronograma, Gracias, HtmlCurso, Htmlx, InfoProfe, MetodologiaParte1, MetodologiaParte2, Objetivo, Portada, Tema2 } from '../sections'
import '../styles/styles.css'

const index = () => {
  InfoProfe
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container-secciones background-container'>
          <Portada />
        </div>
        <div className='container-secciones background-container'>
          <InfoProfe />
        </div>
        <div className='container-secciones'>
          <Objetivo />
        </div>
        <div className='container-secciones'>
          <MetodologiaParte1 />
        </div>
        <div className='container-secciones'>
          <MetodologiaParte2 />
        </div>
        <div className='container-secciones'>
          <Gracias />
        </div>
      </div>
      <div className='delivery'>
        <div className='circle'>
          <p>Indra - Jeison diaz</p>
        </div>
        <p>Delivery Network</p>
      </div>
    </div>
  )
}

export default index
