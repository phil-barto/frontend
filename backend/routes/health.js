import express from 'express'
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Health check passed")
})

export default app