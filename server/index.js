const express = require('express');
const cors = require('cors');
const PORT = 4004
const control = require('./controller')
const app = express();

app.use(express.json())
app.use(cors())

app.get('/api/houses',control.getHouses)
app.post('/api/houses',control.createHouse)
app.put('/api/houses/:id',control.updateHouse)
app.delete('/api/houses/:id',control.deleteHouse )

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})