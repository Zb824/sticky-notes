const express = require('express');
const path = require('path');
const app = express();
const uuid = require('uuid');
const PORT = env.PORT || 3001;



app.use(express.JSON());

// get method

app.get('/notes', (req, res) =>  {
  res.send ('')
})

//post method

app.post('/api/notes', (req, res) => {
  res.send('')
})


app.listen(PORT, () =>
console.log(`http://localhost:${PORT}`)

);