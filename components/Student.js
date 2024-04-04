import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,Button } from '@mui/material';


export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [name,setName] = React.useState('')
    const[city, setCity]= React.useState('')
    const handleClick=(e)=>{e.preventDefault() 
        const student={name, city}
        console.log(student)
        fetch("http://localhost:8082/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{console.log("New student added")
        })
    }
  

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Container>
                <Paper elevation={10} style={paperStyle}>
                    <h1 style={{color:"blue"}}><u>Enter your info</u></h1>
                    <TextField id="outlined-basic" label="Student name" variant="outlined" 
                    value={name}
                    onChange ={(e)=>setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="City of residence" variant="outlined" 
                    value={city}
                    onChange ={(e)=>setCity(e.target.value)}
                    />
                      <Button variant="contained" color="secondary" onClick={handleClick}>
                    Submit
                    </Button>
                    {name}
                    {city}
                  
                </Paper>
            </Container>
        </Box>
    );
}
