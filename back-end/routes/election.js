const express = require("express");
const passport = require("passport");
const router = express.Router();
const electionController = require("../controllers/electionController");

router.get(
  "/",
  //passport.authenticate("jwt", { session: false }),
  electionController.getElections
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  electionController.getElectionById
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  electionController.addElection
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  electionController.updateElectionById
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  electionController.deleteElectionById
);

module.exports = router;
