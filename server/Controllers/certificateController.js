import Certificate from "../Models/Certificate.js";

// Create Certificate
export const createCertificate = async (req, res) => {
  try {
    const { studentName, domain, duration, certificationNo, startingDate, awardDate , adminKey } = req.body;

    if(adminKey !== process.env.ADMIN_KEY || !adminKey){
      return res.status(400).json({ message: "Provide Valid Admin Key" });
    }
    // Check for existing cert no.
    const existing = await Certificate.findOne({ certificationNo });
    if (existing) {
      return res.status(400).json({ message: "Certificate already exists" });
    }

    const newCert = new Certificate({
      studentName,
      domain,
      duration,
      certificationNo,
      startingDate,
      awardDate,
    });

    await newCert.save();
    res.status(201).json({ message: "Certificate created", certificate: newCert });
  } catch (err) {
    res.status(500).json({ message: "Error creating certificate", error: err.message });
  }
};

// Verify Certificate by certificationNo
export const verifyCertificate = async (req, res) => {
  try {
    const { certificationNo } = req.params;
    const cert = await Certificate.findOne({ certificationNo });

    if (!cert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.status(200).json(cert);
  } catch (err) {
    res.status(500).json({ message: "Error verifying certificate", error: err.message });
  }
};

// Update Certificate
export const updateCertificate = async (req, res) => {
  try {
    const { certificationNo } = req.params;
    const updatedCert = await Certificate.findOneAndUpdate(
      { certificationNo },
      req.body,
      { new: true }
    );

    if (!updatedCert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.status(200).json({ message: "Certificate updated", certificate: updatedCert });
  } catch (err) {
    res.status(500).json({ message: "Error updating certificate", error: err.message });
  }
};

// Delete Certificate
export const deleteCertificate = async (req, res) => {
  try {
    const { certificationNo } = req.params;
    const deletedCert = await Certificate.findOneAndDelete({ certificationNo });

    if (!deletedCert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting certificate", error: err.message });
  }
};


// Get All Certificates
export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json(certificates);
  } catch (err) {
    res.status(500).json({ message: "Error fetching certificates", error: err.message });
  }
};
