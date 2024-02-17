import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from "./Form"

const LoginPage = () => {
    const theme = useTheme()
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

    return (
        <Box sx={{
            width:"50%",
            border: "2px solid #407293",
            borderRadius: "1.5rem",
            margin:"7rem auto",
            
        }}>
            <Box
                width="100%"
                backgroundColor={theme.palette.background.alt}
                padding="1rem 6%"
                textAlign="center"
                
            >
                <Typography
                    fontWeight="bold"
                    fontSize="32px"
                    color="#407293"
                >
                    Update
                </Typography>
            </Box>

            <Box
                width={isNonMobileScreens ? "50%" : "100%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
            >
                <Typography
                    fontWeight="500"
                    variant='h5'
                    sx={{
                        mb: "1.5rem"
                    }}
                >
                    Welcome to likwid, Reward your customers & fans across all touch points.
                </Typography>
                <Form />
            </Box>
        </Box>
    )
}

export default LoginPage