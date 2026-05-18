import express  from "express";
import cors from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js";

const app  = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors());
app.use(express.json());

// Endpoints (todos los Routers)
app.use("/api/province", ProvinceRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:3000`)
});