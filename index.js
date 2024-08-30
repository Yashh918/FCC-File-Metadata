import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config({
  path: './.env'
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is live on port ${process.env.PORT}`)
})