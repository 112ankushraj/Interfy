import express from "express";
import {
  createCertificate,
  verifyCertificate,
  updateCertificate,
  deleteCertificate,
  getAllCertificates 
} from "../Controllers/certificateController.js";

const router = express.Router();

router.get("/all", getAllCertificates); 
router.post("/create", createCertificate);
router.get("/verify/:certificationNo", verifyCertificate);
router.put("/update/:certificationNo", updateCertificate);
router.delete("/delete/:certificationNo", deleteCertificate);

export default router;