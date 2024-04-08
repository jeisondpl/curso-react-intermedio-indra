import portada from '../assets/portada-jeison.png'
import '../styles/portada.css'

import logoReact from '../assets/logos/logo-react.png'
import git from '../assets/logos/git.png'
import logoHtml from '../assets/logos/logo-html.png'
import logoCss from '../assets/logos/logo-css.png'
import { useEffect, useState } from 'react'

const Portada = () => {
  //contador de tiempo setInterval
  const [time, setTime] = useState(300)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, []) // Ejecutar solo una vez al montar el componente

  // Calcular minutos y segundos para mostrar
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  return (
    <section className='secciones-portada'>
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
        <span className='title-portada-sub'>Formación en Programador React JS Nivel Intermedio</span>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={portada} alt='portada' className='img-portada' />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={logoReact} height={60} alt='portada' />
          <img src={git} alt='portada' height={60} />
          <img src={logoHtml} height={60} alt='portada' />
          <img src={logoCss} height={67} alt='portada' />
        </div>
        <p className='title-portada-sub'>Iniciamos en...</p>
        <p className='title-portada'>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
      </div>
    </section>
  )
}

export default Portada
