import express from "express"
const router = express.Router();
// const { sendContactEmail } = require("../Controllers/contactController");
import {sendContactEmail} from "../Controllers/contactController.js";

router.post("/", sendContactEmail);

export default router ;