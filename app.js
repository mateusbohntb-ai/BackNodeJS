import express from "express"

import atendimento from "./router/atendimento.js"
import login from "./router/login.js"

const app = express()

app.use(express.json())



app.use("/api/v1/atendimento" ,atendimento)
app.use("/api/v1/login",login)


export default app 