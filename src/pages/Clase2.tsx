import { VerticalInfo } from '../components'
import { ContenidoClase2, Cronograma, Gracias, HtmlCurso, Htmlx, InfoProfe, MetodologiaParte1, MetodologiaParte2, Objetivo, Portada, Tema2 } from '../sections'
import '../styles/styles.css'

const Clase2 = () => {
  const msjFin:string =
    'Gracias por su atención y apoyo continuo en nuestro camino de aprendizaje en el desarrollo front-end. Recordemos que cada desafío es una oportunidad para crecer. Sigamos avanzando juntos, explorando nuevas ideas y mejorando nuestras habilidades. ¡Hasta la próxima clase y sigamos aprendiendo, creciendo y creando juntos!'

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container-secciones background-container'>
          <Portada
            description='Introducción a HTML, CSS, JAVASCRIPTS, REACT-v18 fundamentos básicos para iniciar a crear proyectos desde cero'
            title='Clase 2 - Repaso React basico'
          />
        </div>
        <div className='container-secciones'>
          <ContenidoClase2 />
        </div>

        <div className='container-secciones'>
          <Gracias msj={msjFin} />
        </div>
      </div>
      <VerticalInfo title={'Clase 2'} />
    </div>
  )
}

export default Clase2
