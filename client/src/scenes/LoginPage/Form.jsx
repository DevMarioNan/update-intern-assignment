import { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../features/userSlice";
import axios from "axios";

const registerSchema = yup.object().shape({
    userName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const initialValuesRegister = {
    userName: "",
    email: "",
    password: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
};

const Form = () => {
    const [pageType, setPageType] = useState("login");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const register = async (values) => {

        const savedUserResponse = await axios.post("http://localhost:3000/auth/register", values);
        if (savedUserResponse) {

            setPageType("login");
        }
    };

    const login = async (values) => {

            axios.post("http://localhost:3000/auth/login", values).then((response) => {
                const loggedIn = response.data;

                if (loggedIn.user) {
                    dispatch(
                        setLogin({
                            user: loggedIn.user,
                            token: loggedIn.token,
                            xp: loggedIn.user.xp,
                        })
                    );
                    navigate("/home");
                }
            }).catch((err) => {
                if(err.response.status === 401){
                    alert("Invalid email or password");
                }
            });

    };

    const handleFormSubmit = async (values) => {
        if (isLogin) await login(values);
        if (isRegister) await register(values);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}

        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,

                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"

                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        mb="2rem"
                    >
                        {isRegister && (
                            <>
                                <TextField
                                    label="Username"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.username}
                                    name="userName"
                                    error={
                                        Boolean(touched.userName) && Boolean(errors.userName)
                                    }
                                    helperText={touched.userName && errors.userName}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </>
                        )}

                        <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            name="password"
                            error={Boolean(touched.password) && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>

                    {/* BUTTONS */}
                    <Box>
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                m: "2rem 0",
                                p: "1rem",
                                color:"white",
                                backgroundColor:"#6f94ae",
                                "&:hover": {
                                    backgroundColor: "#437393",
                                },
                            }}
                            variant="contained"
                            color="primary"

                        >
                            {isLogin ? "LOGIN" : "REGISTER"}
                        </Button>
                        <Typography

                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                cursor: "pointer"
                            }}
                        >
                            {isLogin
                                ? "Don't have an account? Sign Up here."
                                : "Already have an account? Login here."}
                        </Typography>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default Form;