import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogout } from '../../features/userSlice';


const Profile = () => {
    const {id} = useParams();
    const token = useSelector((state) => state.token);
    const [tasks,setTasks] = useState([]);
    const user = useSelector((state) => state.user);
    const xp = useSelector((state) => state.xp);
    const dispatch = useDispatch();

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await axios.get("http://localhost:3000/task/tasks/"+id,{
                headers: {
                    "Authorization": token,
                },
            
            });
            setTasks(tasks.data);
        };
        getTasks();
    },[]);


    return (
        <div style={{paddingBottom:"5rem"}}>
            <NavBar />
            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
                marginTop: "20px",
                width: "100%",
            }}>
                <Paper sx={{
                    padding: "20px",
                    maxWidth: 400,
                    
                    marginTop: "20px",
                
                }} elevation={3}>
                <Typography variant="h5" gutterBottom>
                    User Profile
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Username: {user.username}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    Email: {user.email}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                    XP Points: {xp}
                </Typography>
                
                <button
                    style={{
                        backgroundColor:"#6f94ae",
                        "&:hover": {
                            backgroundColor: "#437393",
                        },
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px",
                        marginTop: "20px",
                        cursor: "pointer",
                        color: "#ffffff",
                        fontWeight: "bold",
                    }}

                    onClick={() => dispatch(setLogout())}
                >
                    Logout
                </button>
                </Paper>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    marginTop: "20px",
                    width: "100%",
                }}>
                
                
                    {tasks.map((task) => (
                        <List sx={{
                            width: '90%',
                            border: "1px solid #000000",
                            borderRadius: "10px",
                            boxShadow: 1,
                        }} key={task._id}>
                            <ListItem>
                                <ListItemText primary={task.task} secondary={task.xp} />
                            </ListItem>
                        </List>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile