import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import NavBar from '../NavBar';
import { Typography, Container } from '@mui/material';
import Footer from '../Footer';
import { setCards } from '../../features/userSlice';
import axios from 'axios';
import CardGrid from './CardGrid';

const HomePage = () => {
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const cards = useSelector((state) => state.cards);
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        const getCard = async () => {
            const card = await axios.get("http://localhost:3000/",{
                    headers: {
                        "Authorization": token,
                    },
                });
                dispatch(setCards(card.data));
                
            };
        getCard();
        },[]);

    return (
        <div>
            {/* Navbar */}
            <NavBar />
            
            {/* Body */}
            <Container>
                <Typography variant="h1" component="div" sx={{ 
                    flexGrow: 1,
                    color: "#ffffff",
                    textDecoration: "none",
                }}>
                    Welcome {user.username}
                </Typography>
                {cards ? <CardGrid /> : <Typography variant="h1" component="div" sx={{
                    flexGrow: 1,
                    color: "#ffffff",
                    textDecoration: "none",
                }}>
                    Loading...
                </Typography>}
                
            </Container>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage