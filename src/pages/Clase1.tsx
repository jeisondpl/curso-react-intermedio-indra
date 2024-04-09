import { VerticalInfo } from '../components'
import { Cronograma, Gracias, HtmlCurso, Htmlx, InfoProfe, MetodologiaParte1, MetodologiaParte2, Objetivo, Portada, Tema2 } from '../sections'
import '../styles/styles.css'

const Clase1 = () => {
  const msjFin =
    'Gracias por su atención y apoyo continuo en nuestro camino de aprendizaje en el desarrollo front-end. Recordemos que cada desafío es una oportunidad para crecer. Sigamos aprendiendo, creciendo y creando juntos.'

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container-secciones background-container'>
          <Portada title='Tema 1 - Introducción' description='Introducción, contenido del curso y metodologia de estudio' />
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
          <Gracias msj={msjFin} />
        </div>
      </div>
      <VerticalInfo title={'Clase 1'} />
    </div>
  )
}

export default Clase1
