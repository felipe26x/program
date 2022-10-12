import express from "express";

import employeeRoutes from "./routes/employee.routes.js";

const app  = express()


app.use(express.json())

app.use(employeeRoutes)

app.listen(3002)



