import express from 'express'
import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

dotenv.config()
const app = express()
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

app.get("/", async (req, res) => {
    const { data, error } = await supabase
        .from('tickets')
        .select()

    res.send(data)
})

app.post("/", async (req, res) => {
    const { error } = await supabase
        .from('tickets')
        .insert({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
            // TODO add status validation either here or in the frontend
            status: req.body.status
        })
    if (error) {
        res.send(error).status(400)
    }
    res.status(200).send("Status created")
})

app.get("/:id", async (req, res) => {
    const { id } = req.params.id
    const { data, error } = await supabase
        .from('tickets')
        .select()
        .is("id", id)

    if (error) {
        res.send(error).status(400)
    }
    res.send(data).status(200)
})

export default app