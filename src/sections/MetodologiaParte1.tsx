import '../styles/metodologia.css' // Asume que el archivo de estilos se llama Metodologia.css
import Filter1Icon from '@mui/icons-material/Filter1'
import Filter2Icon from '@mui/icons-material/Filter2'
import Filter3Icon from '@mui/icons-material/Filter3'

const MetodologiaParte1 = () => {
  return (
    <section className='secciones'>
      <h1 className='title-tema'>Metodología</h1>
      <div className='metodologia'>
        <div className='metodologia-container'>
          <div className='card'>
            <div className='icon-container actividades'>
              <Filter1Icon fontSize='large' color='info' />
            </div>
            <h2>Actividades</h2>
            <p>Las actividades se realizarán en forma individual y/o grupal según la práctica o unidad temática.</p>
          </div>
          <div className='card'>
            <div className='icon-container autoaprendizaje'>
              {' '}
              <Filter2Icon fontSize='large' color='info' />
            </div>
            <h2>Autoaprendizaje</h2>
            <p>Durante el proceso, para fomentar un proceso de enseñanza y aprendizaje constructivo, se realizará una asignación de cursos a través de Udemy, Open University.</p>
          </div>
          <div className='card'>
            <div className='icon-container practicas'>
              <Filter3Icon fontSize='large' color='info' />
            </div>
            <h2>Prácticas</h2>
            <p>Luego se realizará una instancia de aula práctica para la realización de ejercicios de aplicación de los conocimientos para ser elaborados por los participantes.</p>
          </div>
        </div>
      </div>
      <blockquote className='blockquote-container'>
        <p>
          En nuestras clases de React JS, les animo a explorar el autoaprendizaje. Además de seguir tutoriales, prueben proyectos personales, exploren la documentación, participen
          en comunidades en línea, y no teman a romper cosas. El autoaprendizaje es un viaje continuo que ampliará sus habilidades y conocimientos. ¡Vamos juntos en este
          emocionante camino!
        </p>
      </blockquote>
    </section>
  )
}

export default MetodologiaParte1
