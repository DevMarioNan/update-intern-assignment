import { useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateXp } from '../../features/userSlice';

const Feature = () => {
    const token = useSelector((state) => state.token);
    const user = useSelector((state) => state.user);
    const {id} = useParams();
    const [tasks,setTasks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const getTasks = async () => {
            const card = await axios.get("http://localhost:3000/task/"+id,{
                    headers: {
                        "Authorization": token,
                    },
                });
                setTasks(card.data);
            };
        getTasks();
    },[tasks]);

    const handleClaim = async (id) => {
        
        const claim = await axios({ 
            method: 'patch',
            url: 'http://localhost:3000/task/claim/' + id,
            headers: {
                "Authorization": token,
            },
            data: {
                id: id,
                userId: user._id,
            }
        });
        if(claim.data) {
            dispatch(updateXp(claim.data.xp));
            tasks.map((task) => {
                if(task._id === id) {
                    task.done[user._id] = true;
                }
            });
        }
    }

    return (
        <div >
            <NavBar />
            <div 
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                    marginTop: "20px",
                    width: "100%",
                }}
            >
                <TableContainer component={Paper} style={{
                    maxWidth: "850px",
                    margin: "30px auto",
                    marginBottom: "5rem",
                }}>
                <Table style={{
                    minWidth: 650,
                }} aria-label="modern-styled-table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={{
                            borderBottom:"1px solid #000000",
                            fontWeight:"bold"
                        }}>Task</TableCell>
                        <TableCell style={{
                            borderBottom:"1px solid #000000",
                            fontWeight:"bold"
                        }}>Status</TableCell>
                        <TableCell style={{
                            borderBottom:"1px solid #000000",
                            fontWeight:"bold"
                        }}>XP</TableCell>
                        <TableCell style={{
                            borderBottom:"1px solid #000000",
                            fontWeight:"bold"
                        }}>Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task._id}>
                        <TableCell style={{
                            borderBottom:"1px solid #000000"
                        }}>{task.task}</TableCell>
                        <TableCell style={{
                            borderBottom:"1px solid #000000"
                        }}>
                            {task.done[user._id] ? <p style={{color:"green"}}>Done</p> : <p style={{color:"red"}}>Not Done</p>}
                        </TableCell>
                        <TableCell style={{
                            borderBottom:"1px solid #000000"
                        }}>{task.xp}</TableCell>
                        <TableCell style={{
                            borderBottom:"1px solid #000000"
                        }}>
                            {
                                !task.done[user._id] ?
                                    <Button
                                    variant="contained"
                                    style={{
                                        color:"white",
                                        backgroundColor:"green"
                                    }}
                                    onClick={() => handleClaim(task._id)}
                                    >
                                    Claim
                                    </Button>
                                :
                                <p style={{color:"green"}}>
                                    Claimed
                                </p>
                            }
                            
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            
            </div>
            <Footer />
        </div>
    )
}

export default Feature