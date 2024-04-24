import express from 'express'
import health from "./routes/health.js"
import support_ticket from "./routes/support-ticket.js"
import bodyParser from 'body-parser'

const app = express()
const port = 8000

//Middleware
app.use(express.json())
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use('/health', health)
app.use('/support_ticket', support_ticket)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})