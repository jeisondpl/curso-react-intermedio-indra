import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

interface Props {
  title: string
}

const CrVerticalInfo = ({ title }: Props) => {
  return (
    <>
      <div className='delivery-top'>
        <NavLink
          className='logo-nav'
          to={'/'}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            marginTop: '20px',
          }}
        >
          <ArrowBackIcon color='info' />
          <p>Home</p>
        </NavLink>
      </div>
      <div className='delivery'>
        <div className='circle'>
          <p>{title}</p>
        </div>
        <div className='circle'>
          <p>Indra - Jeison diaz</p>
        </div>
        <p>Delivery Network</p>
      </div>
    </>
  )
}

export default CrVerticalInfo
