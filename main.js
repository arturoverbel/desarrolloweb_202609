
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("From server 🚀")
})

app.get('/api/grettings', (req, res) => {
    res.json({
        message: "Hii, from Node Server 👋"
    })
})

app.get('/api/servers', (req, res) => {
    res.json([
        { id: 1, name: "SEO", price: 150 },
        { id: 2, name: "Web Hosting", price: 100 },
        { id: 3, name: "VPS", price: 200 },
        { id: 4, name: "Dedicated Server", price: 300 }
    ])
})


app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body

    console.log("New messsage: ", name, email, message)

    res.json({
        status: 'ok'
    })
})

app.listen(PORT, () => {
    console.log("Server Listening ....")
})