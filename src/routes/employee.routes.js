import { Router } from "express";
import { GetEemployee , GetUser } from "../controllers/employee.controller.js";
import { DeleteEemployee, PostEemployee, PutEemployee } from "../controllers/employee.controller.js";


const router = Router()

router.get("/employee", GetEemployee )


router.get("/user/:id", GetUser )

router.post("/employee", PostEemployee )


router.patch("/employee/:id",  PutEemployee)


router.delete("/employee/:id", DeleteEemployee)



export default router