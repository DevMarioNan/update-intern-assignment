import { AppBar, Container, Toolbar, Typography } from '@mui/material'

const Footer = () => {
    return (
        <AppBar position="static" 
            sx={{
                position: "fixed",
                bottom: 0,
                top: "auto",
                backgroundColor: "#1f3747",
                
            }}>
            <Container >
                <Toolbar>
                <Typography variant="body1" color="inherit">
                Copyright © 2023 Likwid. All rights reserved.
                </Typography>
                </Toolbar>
            </Container>
            </AppBar>
    )
}

export default Footer