const express = require('express');
const path = require('path');
const app = express();
const uuid = require('uuid');
const PORT = process.env.PORT || 3001;



app.use(express.JSON());


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// get method

app.get('/notes', (req, res) =>  {
  res.sendFile ('')
})

//post method

app.post('/api/notes', (req, res) => {
  res.send('')
})

app.delete('api/notes', (req,res)=>{
  
})


app.listen(PORT, () =>
console.log(`http://localhost:${PORT}`)

);