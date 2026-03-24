import express, { Router } from "express"
import { createUser, deleteUser, getAllUser, getMe, verifyOtp } from "../controllers/UserController.js"
import auth from "../midleware/Auth.js";

const route = express.Router();

route.post("/signup", createUser);
route.post("/verifyOtp", verifyOtp);
route.delete('/:id',deleteUser)
route.get('/me',auth,getMe)
route.get('/all',auth,getAllUser)

 

export default route;