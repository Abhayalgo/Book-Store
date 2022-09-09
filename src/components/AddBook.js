import { Button, Checkbox, FormControl, FormLabel,inputAdornmentClasses,TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import {Navigate, useNavigate} from 'react-router-dom'
//import {useNavigate} from 'react-router-dom'
const AddBook = () => {
  

//let historyee= useNavigate();


const history = useNavigate();
Navigate('/index')
 const[inputs,setInputs]= useState({
  name:'',
  description:'',
  price:'',
  author:'',
  //available:false,
  image:''
 });
 const [checked, setChecked] = useState(false);
 const handleChange=(e)=>{

setInputs((prevState)=>({
  ...prevState,
  [e.target.name]:e.target.value,
}));

//console.log(e.target.name,"value",e.target.value);


 };



  /*
    
    >*/


    /*
     <FormLabel>Image</FormLabel>
    <TextField margin="normal"fullWidth variant="outline" name="description"/>
    
    */


const sendRequest = async()=>{
 await axios.post("http://localhost:3000/books",{
    name:String(inputs.name),
    author:String(inputs.author),
    description:String (inputs.description),
    price:Number (inputs.price),
    image:String(inputs.image),
    available:Boolean(checked),
  }).then(res=>res.data);
}


const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(inputs,checked);
  sendRequest().then(()=>history('/books'))
};
  return( 
   <form onSubmit={handleSubmit}>
  <Box
    display="flex" 
    flexDirection="column" 
    justifyContent={'cemtre'} 
    maxWidth={700}
    alignContent={"center"}
    alignSelf="center"
    marginLeft={"auto"}
    marginRight="auto"
    marginTop={10}
  >
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} margin="normal"fullWidth variant="outline" name="name"/>

    <FormLabel>author</FormLabel>
    <TextField value={inputs.author} margin="normal"fullWidth variant="outline" name="author"/>

    <FormLabel>description</FormLabel>
    <TextField
    value={inputs.description}
    onChange={handleChange}
    margin="normal"fullWidth variant="outline" name="description"/>

   <FormLabel>price</FormLabel>
    <TextField
    value={inputs.price}
    onChange={handleChange}
    type="number"
    margin="normal" fullWidth variant="outline" name="price"/>

    <FormLabel>Image</FormLabel>
    <TextField 
    value={inputs.image}
    onChange={handleChange} 
    margin="normal"fullWidth variant="outline" name="image"/>
    <FormControl control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} 
    label="Available" 
    />
    
<Button variant="contained" type="submit">
  Add Book
  </Button>
</Box>
  </form>
   
  );
};

export default AddBook;