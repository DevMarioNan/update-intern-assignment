import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

const CardGrid = () => {
    const cards = useSelector((state) => state.cards);
    const navigate = useNavigate();

    return (
        <Grid container spacing={2}>
            {cards.map((card) => (
                <Grid item key={card.title} xs={12} sm={6} md={4} lg={3}>
                    <Card to={'/card/' + card._id} 
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s',
                        '&:hover': {
                        transform: 'scale(1.05)',
                        },
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/card/' + card._id)}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                            {card.title}
                            </Typography>
                            <Typography color="text.secondary">{card.description}</Typography>
                            <Typography color="text.secondary">XP: {card.xp}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
// 
export default CardGrid