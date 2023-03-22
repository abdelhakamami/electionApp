const express = require("express");
const passport = require("passport");
const adminController = require("../controllers/adminController");
const router = express.Router();

router.post("/auth", adminController.authAdmin);

router.get(
  "/",
  //passport.authenticate("jwt", { session: false }),
  adminController.getAdmins
);

router.get("/:id", adminController.getAdminById);

router.post("/auth-admin", adminController.getAuthenticatedAdmin);

router.post("/", adminController.addAdmin);

router.put("/:id", adminController.updateAdminById);

router.delete("/:id", adminController.deleteAdminById);

module.exports = router;
