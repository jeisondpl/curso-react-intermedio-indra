import { LearningComponent } from '../components'

const Tema2 = () => {
  return (
    <section className='secciones'>
      <h1 className='title-tema'>TanStack Query</h1>

      <article className='exam-container'>
        <div className='title'>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <path d='M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8'></path>
            <path d='M14 19l2 2l4 -4'></path>
            <path d='M9 8h4'></path>
            <path d='M9 12h2'></path>
          </svg>
          <span>Examen interactivo</span>
        </div>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada
          feugiat. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur non
        </p>
      </article>
      <blockquote className='blockquote-container'>
        <p>
          ¿Qué es programar? Es el acto de construir un programa o conjunto de instrucciones para decirle a una computadora qué y cómo queremos que haga algo. No es diferente a
          cuando "programamos" la lavadora, sólo que en vez de pulsar un botón, vamos a usar texto. A este texto se le conoce como "código".
        </p>
      </blockquote>
      <LearningComponent />
    </section>
  )
}

export default Tema2
