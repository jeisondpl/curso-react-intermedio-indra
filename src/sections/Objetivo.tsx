import '../styles/article.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

const Objetivo = () => {
  return (
    <section className='secciones'>
      <h1 className='title-tema'>Contenido del curso</h1>
      <h2 className='subtitle'>Bienvenidos al Programa de Contenido: Aprendiendo React - Nivel Intermedio</h2>
      <p className='description'>
        Tras haber dominado los fundamentos de React, como componentes, estados y props, estás listo para sumergirte en el mundo de React a un nivel más profundo.
      </p>
      <table>
        <tr>
          <th>Tema</th>
          <th>Descripción</th>
          <th>Herramientas/Tecnologías</th>
          <th>Url</th>
        </tr>
        <tr>
          <td>Git</td>
          <td>repositorio local, repositorio remoto</td>
          <td>Github, GitLab</td>
          <td>
            <a href='https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/' target='_blank'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Bibliotecas de Componentes UI</td>
          <td>React UI</td>
          <td>React Bootstrap, Material UI, Next UI, Chakra UI</td>
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
          <td>Rutas</td>
          <td>React Router Dom, rutas privadas, AuthContext</td>
          <td>React.js</td>
          <td>
            <a href='https://reactrouter.com/en/main'>
              <RemoveRedEyeIcon color='primary' target='_blank' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Estado global intermedio</td>
          <td>context, reducer</td>
          <td>redux, zustand</td>
          <td>
            <a href='https://es.react.dev/learn/scaling-up-with-reducer-and-context'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://react-redux.js.org/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://zustand-demo.pmnd.rs/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Hooks</td>
          <td>Hooks react, Custom Hooks</td>
          <td>React.js</td>
          <td>
            <a href='https://www.w3schools.com/react/react_customhooks.asp'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Formularios</td>
          <td>formularios controlados, Validaciones</td>
          <td>Formik, react hook form</td>
          <td>
            <a href='https://formik.org/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://react-hook-form.com/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Get Apis</td>
          <td>React.js</td>
          <td>TanStack Query v3, Apollo Client, Redux Toolkit, SWR: React Hooks for Data Fetching</td>
          <td>
            <a href='https://tanstack.com/query/v3/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://apollographql.com/docs/react/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://redux-toolkit.js.org/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
            <a href='https://swr.vercel.app/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Patrones de componentes</td>
          <td>component pattern, extensible styles</td>
          <td>React.js</td>
          <td>
            <a href='https://cloudappi.net/patrones-de-diseno-composicion-en-react/'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
        <tr>
          <td>Proyecto</td>
          <td>tienda on line</td>
          <td>React.js</td>
          <td>
            <a href='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/291084693/original/07e2530d62ea0c7db06fff1cc7dad951c9ab2e5b/do-a-node-js-react-js-development-or-mern-stack-development.png'>
              <RemoveRedEyeIcon color='primary' />
            </a>
          </td>
        </tr>
      </table>
    </section>
  )
}

export default Objetivo
