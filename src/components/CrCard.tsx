import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

interface Props {
  title: string
  description?: string
  handleClick: () => void
  color?: string
}

export default function CrCard({ title, description, handleClick, color }: Props) {
  return (
    <Card
      onClick={handleClick}
      sx={{
        height: '100%',
        width: '50%',
        backgroundColor: color,
      }}
    >
      <CardActionArea
        sx={{
          borderRadius: '10px',
          padding: '5px',
          height: '100%',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
