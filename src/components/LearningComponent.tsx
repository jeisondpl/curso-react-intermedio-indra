import '../styles/LearningComponent.css'
import Filter1Icon from '@mui/icons-material/Filter1'
import Filter2Icon from '@mui/icons-material/Filter2'

const LearningComponent = () => {
  return (
    <div className='learning-container'>
      <h1>¿Qué aprenderemos?</h1>
      <div className='item'>
        <span className='number'>1</span>
        <div className='icon html-icon'>
          {' '}
          <Filter1Icon fontSize='large' color='info' />
        </div>
        <div className='description'>
          <h2>HTML</h2>
          <p>(HyperText Markup Language): Lenguaje de marcado para crear estructura y contenido web.</p>
        </div>
      </div>
      <div className='item'>
        <span className='number'>2</span>
        <div className='icon css-icon'>
          <Filter2Icon fontSize='large' color='info' />
        </div>
        <div className='description'>
          <h2>CSS</h2>
          <p>(Cascading Style Sheets): Lenguaje de estilos para dar diseño y formato a páginas web.</p>
        </div>
      </div>
    </div>
  )
}

export default LearningComponent
