import '../styles/metodologia.css' // Asume que el archivo de estilos se llama Metodologia.css
import Filter4Icon from '@mui/icons-material/Filter4'
import Filter5Icon from '@mui/icons-material/Filter5'
import Filter6Icon from '@mui/icons-material/Filter6'

const MetodologiaParte2 = () => {
  return (
    <section className='secciones'>
      <h1 className='title-tema'>Metodología</h1>
      <div className='metodologia'>
        <div className='metodologia-container'>
          <div className='card'>
            <div className='icon-container actividades'>
              <Filter4Icon fontSize='large' color='info' />
            </div>
            <h2>Resolver dudas</h2>
            <p>Al finalizar cada clase se abrirá una instancia para evacuar dudas y realizar un cierre de cada tema.</p>
          </div>
          <div className='card'>
            <div className='icon-container autoaprendizaje'>
              {' '}
              <Filter5Icon fontSize='large' color='info' />
            </div>
            <h2>Grupo Teams</h2>
            <p>Las dudas posteriores de cada alumno podrán ser consultadas vía Teams (Grupo de formación).</p>
          </div>
          <div className='card'>
            <div className='icon-container practicas'>
              <Filter6Icon fontSize='large' color='info' />
            </div>
            <h2>Retroalimentación</h2>
            <p>Al finalizar el curso se hace una retroalimentación del tutor y evaluación de los participantes</p>
          </div>
        </div>
      </div>

      <article className='exam-container'>
        <div className='title'>
          <Filter6Icon fontSize='small' />
          <span
            style={{
              marginLeft: '10px',
            }}
          >
            Nota
          </span>
        </div>
        <p className='description'>
          A partir de ahora, los estudiantes desarrolladores tendrán un máximo de 20 minutos semanales para recibir apoyo técnico en React JS intermedio. Favor de utilizar este
          tiempo de manera efectiva para consultas y dusdas. Para problemas más complejos, por favor, contacten para coordinar una reunión adicional.
        </p>
      </article>
    </section>
  )
}

export default MetodologiaParte2
