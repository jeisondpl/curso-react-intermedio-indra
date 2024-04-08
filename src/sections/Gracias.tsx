import '../styles/article.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const Objetivo = () => {
  return (
    <section className='secciones'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '20%',
          justifyContent: 'center',
        }}
      >
        <h1 className='title-tema'>Gracias por su atención </h1>
        <h2
          className='subtitle'
          style={{
            textAlignLast: 'center',
          }}
        >
          Gracias por su atención y apoyo continuo en nuestro camino de aprendizaje en el desarrollo front-end. Recordemos que cada desafío es una oportunidad para crecer. Sigamos
          aprendiendo, creciendo y creando juntos.
        </h2>
      </div>
    </section>
  )
}

export default Objetivo
