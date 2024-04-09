import '../styles/article.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'



interface Props {
  msj: string
}
const Objetivo = ({ msj }: Props) => {
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
          {msj}
        
        </h2>
      </div>
    </section>
  )
}

export default Objetivo
