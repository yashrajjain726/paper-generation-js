import express from 'express';
import questionRoute from './services/routes.js'

const app = express()
app.use(express.json())
app.use('/get-questions',questionRoute)

const PORT = process.env.PORT ||5000;

app.get('/',(req,res)=>{
  res.send('Question Paper Generation API - /get-questions')
})
app.listen(PORT, () =>
  console.log(`Paper Generation App listening on port ${PORT}!`),
);