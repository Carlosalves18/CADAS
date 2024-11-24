import { Router } from "express"
import { create } from "../controllers/cadasController.js"

const router = Router()


router.post("/", create)



export default router