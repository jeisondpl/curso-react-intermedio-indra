import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import portada from '../assets/portada-jeison.png'
import '../styles/styles.css'

import logoReact from '../assets/logos/logo-react.png'
import git from '../assets/logos/git.png'
import logoHtml from '../assets/logos/logo-html.png'
import logoCss from '../assets/logos/logo-css.png'
const InfoProfe = () => {
  return (
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
        <span
          className='title-portada'
          style={{
            fontSize: '2rem',
          }}
        >
          Mi Profe de React.js
        </span>
        <span className='title-portada-sub'>Mi mentor para nivel intermedio en ReactJS</span>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={portada}
          alt='portada'
          style={{
            width: '50%',
            height: '700px',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            width: '50%',
            height: '50%',
            objectFit: 'contain',
          }}
        >
          <h1 className='title-tema'>Perfil</h1>
          <h2 className='subtitle'>Ingeniero de Sistemas Especializado en Desarrollo Frontend</h2>
          <p className='description'>
            Graduado de la Universidad del Magdalena, con amplia experiencia senior en el desarrollo de interfaces de usuario web de alta calidad y rendimiento.
          </p>
          <div className='contenedorTabla'>
            <table>
              <thead>
                <tr>
                  <th>Lenguajes</th>
                  <th>Descripción</th>
                  <th>Herramientas/Tecnologías</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React Native</td>
                  <td>Framework para construir aplicaciones móviles multiplataforma utilizando JavaScript y React.</td>
                  <td>Expo, React Navigation, Redux, TypeScript</td>
                </tr>
                <tr>
                  <td>Android</td>
                  <td>Sistema operativo móvil desarrollado por Google, utilizado principalmente en dispositivos móviles.</td>
                  <td>Android Studio, Kotlin, Java, Android SDK</td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td>Lenguaje de programación de alto nivel, conocido por su sintaxis clara y legible.</td>
                  <td>Django, Flask, Pandas, NumPy</td>
                </tr>
                <tr>
                  <td>Swift (iOS)</td>
                  <td>Lenguaje de programación desarrollado por Apple para crear aplicaciones iOS y macOS.</td>
                  <td>Xcode, SwiftUI, UIKit</td>
                </tr>
                <tr>
                  <td>Django</td>
                  <td>Framework de desarrollo web en Python, que sigue el principio DRY (Don't Repeat Yourself).</td>
                  <td>Django REST Framework, Django ORM, Django Templates</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>Lenguaje de programación de alto nivel utilizado principalmente en el desarrollo web.</td>
                  <td>Node.js, React.js, Angular, Vue.js</td>
                </tr>
                <tr>
                  <td>C#</td>
                  <td>Lenguaje de programación orientado a objetos desarrollado por Microsoft.</td>
                  <td>Visual Studio, .NET Framework, Xamarin</td>
                </tr>
                <tr>
                  <td>C++</td>
                  <td>Lenguaje de programación de propósito general, ampliamente utilizado en sistemas y aplicaciones de alto rendimiento.</td>
                  <td>Visual Studio, Qt, Boost</td>
                </tr>
                <tr>
                  <td>MERN Stack</td>
                  <td>Conjunto de tecnologías que incluye MongoDB, Express.js, React y Node.js para desarrollar aplicaciones web modernas y escalables.</td>
                  <td>MongoDB, Express.js, React.js, Node.js</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoProfe
