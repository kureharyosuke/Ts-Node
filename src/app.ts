import express, { Application, Request, Response, NextFunction } from "express"
import bodyParser from "body-parser"

const app: Application = express()
// app: Application 의 타입

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (re: Request, res: Response) => {
    res.send(" TS APP is Running")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is runnnig on PORT ${PORT}`)
})