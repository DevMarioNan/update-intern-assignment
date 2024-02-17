import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const NavBar = () => {
    const user = useSelector((state) => state.user);
    const xp = useSelector((state) => state.xp);    
    return (
        <AppBar position="static" sx={{
            backgroundColor: "#407293",
        }}>
            <Toolbar>
                <Typography variant="h5" component={Link} sx={{ 
                    flexGrow: 1,
                    color: "#ffffff",
                    textDecoration: "none",
                }} to="/home" 
                >
                    Update
                </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        XP: {xp}
                    </Typography> 
                    
                
                {/* Button to go to user profile - Replace '/profile' with your actual route */}
                    <Button color="inherit" component={Link} to={"/profile/"+user._id}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="account"
                    >
                        <AccountCircle />
                    </IconButton>
                        {user.username}
                    </Button>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar