const express = require("express");
const voterController = require("../controllers/voterController");
const router = express.Router();

router.get("/", voterController.getVoters);

router.get("/:id", voterController.getVoterById);

router.post("/", voterController.addVoter);

router.put("/:id", voterController.updateVoterById);

router.delete("/:id", voterController.deleteVoterById);

module.exports = router;
