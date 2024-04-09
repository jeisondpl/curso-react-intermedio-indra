import { CrCard } from '../components'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container-secciones background-container'>
          <section className='secciones'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                textAlign: 'left',
                justifyContent: 'left',
              }}
            >
              <span className='title-portada'>REACT.JS</span>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '20px',
                }}
              >
                <span className='title-portada-sub'>Formación en Programador React JS Nivel Intermedio</span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                padding: '50px',
              }}
            >
              <CrCard
                title={'Tema 1 - Introduccion React Inermedio'}
                description='Introducción a React intermedio contenido del curso y metodologia de estudio'
                handleClick={() => history.push('/clase-1')}
              />
              <CrCard
                title={'Tema 2 - Repaso React Basico'}
                description='Introducción a HTML, CSS, JAVASCRIPTS, REACT-v18 fundamentos básicos para iniciar a crear proyectos desde cero'
                handleClick={() => history.push('/clase-2')}
              />
            </div>
            <div className='delivery'>
              <p>Delivery Network</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
