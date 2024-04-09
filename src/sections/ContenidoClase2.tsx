import '../styles/article.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const ContenidoClase2 = () => {
  return (
    <section className='secciones'>
      <h1 className='title-tema'>Contenido del curso</h1>
      <h2 className='subtitle'>Bienvenidos al curso: Aprendiendo React - Nivel Intermedio</h2>
      <p className='description'>Introducción a HTML, CSS, JAVASCRIPTS, REACT-v18 fundamentos básicos para iniciar a crear proyectos desde cero</p>
      <table
        style={{
          marginTop: '50px',
        }}
      >
        <tr>
          <th>Tema</th>
          <th>Descripción</th>
          <th>Url</th>
        </tr>
        <tr>
          <td>Html</td>
          <td>
            HTML, siglas de HyperText Markup Language, es el lenguaje estándar para crear páginas web. Utiliza etiquetas para definir la estructura y el contenido de una página,
            como encabezados, párrafos, imágenes y enlaces.
          </td>
          <td>
            <a href='https://developer.mozilla.org/es/docs/Web/HTML' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://html.com/' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://www.simplehtmlguide.com/' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://webplatform.github.io/docs/html/' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://html5please.com/' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Css</td>
          <td>
            CSS, acrónimo de Cascading Style Sheets (Hojas de Estilo en Cascada), es un lenguaje utilizado para dar estilo y diseño a las páginas web creadas con HTML. Permite
            controlar aspectos visuales como el color, la tipografía, el tamaño y la disposición de los elementos en la página, separando así el contenido de su presentación.
          </td>
          <td>
            <a href='https://react-bootstrap.netlify.app/'>
              <RemoveRedEyeIcon color='primary' target='_blank' />
            </a>
            <a href='https://mui.com/'>
              <RemoveRedEyeIcon color='primary' target='_blank' />
            </a>
            <a href='https://chakra-ui.com/getting-started/nextjs-app-guide' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>JavaScripts</td>
          <td>
            JavaScript es un lenguaje de programación utilizado principalmente en el desarrollo web para agregar interactividad y funcionalidad a las páginas. Es un lenguaje
            interpretado y de alto nivel, que se ejecuta en el navegador del cliente, lo que permite manipular el contenido de la página, responder a eventos del usuario, realizar
            operaciones matemáticas y trabajar con datos.{' '}
          </td>
          <td>
            <a href='https://developer.mozilla.org/es/docs/Web/JavaScript'>
              <RemoveRedEyeIcon color='primary' target='_blank' />
            </a>
            <a href='https://javascript.info/'>
              <RemoveRedEyeIcon color='primary' target='_blank' />
            </a>
            <a href='https://www.aprendejavascript.dev/'>
              <RemoveRedEyeIcon color='primary' target='_blank' />
            </a>
          </td>
        </tr>
        <tr>
          <td>React</td>
          <td>
            React es una biblioteca de JavaScript para crear interfaces de usuario interactivas en aplicaciones web. Se destaca por su enfoque en componentes reutilizables y su
            eficiente gestión del estado de la aplicación.
          </td>
          <td>
            <a href='https://es.legacy.reactjs.org/docs/getting-started.html'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://es.react.dev/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://github.com/midudev/preguntas-entrevista-react'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Hooks</td>
          <td>
            Los React Hooks son una característica introducida en React 16.8 que permite a los desarrolladores utilizar el estado y otras características de React en componentes
            funcionales. Antes de los Hooks, solo los componentes de clase podían tener estado interno y utilizar ciclos de vida, lo que a veces generaba complicaciones en la
            composición y reutilización del código.
          </td>
          <td>
            <a href='https://es.legacy.reactjs.org/docs/hooks-intro.html'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
      </table>
    </section>
  )
}

export default ContenidoClase2
