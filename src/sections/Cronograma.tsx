import { CrCodes } from '../components'
import CrModal from '../components/CrModal'
import '../styles/article.css'

const Cronograma = () => {
  const codeBlock = `
    const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
      return (
        <div>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>        
      );
    }
`
  return (
    <>
      <section className='secciones'>
        <h1 className='title-tema'>Cronograma</h1>
        <h2 className='subtitle'>Construyendo tus propios Hooks</h2>
        <p className='description'>
          Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.Construir tus propios Hooks te
          permite extraer la lógica del componente en funciones reutilizables.
        </p>
        <div className='container-child'>
          <CrCodes codeBlock={codeBlock} />
          <CrCodes codeBlock={codeBlock} />
        </div>
        <blockquote className='blockquote-container'>
          <p>¿Qué es programar? Es el acto de construir un programa o conjunto de instrucciones para decirle a una computadora qué y cómo queremos que haga algo.</p>
        </blockquote>
      </section>
    </>
  )
}

export default Cronograma
