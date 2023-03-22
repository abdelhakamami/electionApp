const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVoters = async (req, res) => {
  try {
    const voters = await prisma.voter.findMany({});
    res.status(200).json(voters);
  } catch (error) {
    res.send("Error get Voters");
  }
};

const getVoterById = async (req, res) => {
  const id = req.params.id;
  try {
    const voter = await prisma.voter.findFirst({
      where: {
        id: +id,
      },
    });
    res.status(200).json(voter);
  } catch (error) {
    res.send("Error get VoterById");
  }
};

const addVoter = async (req, res) => {
  const { name, email, password } = req.body;
  //find the Voter with the given email
  try {
    const voter = await prisma.voter.findFirst({
      where: {
        email: email,
      },
    });
    //if Voter exist
    if (voter) res.send("voter already exist !");
    else {
      try {
        //hash password
        const newVoter = await prisma.voter.create({
          data: {
            name,
            email,
            password,
          },
        });
        res.status(201).json(newVoter);
      } catch (error) {
        res.send("Error creating user");
      }
    }
  } catch (error) {
    res.send("Error");
  }

  //add to db
};

const updateVoterById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedVoter = await prisma.voter.update({
      where: {
        id: +id,
      },
      data: body,
    });
    res.status(200).json(updatedVoter);
  } catch (error) {
    res.send("Error update VoterById");
  }
};

const deleteVoterById = async (req, res) => {
  const { id } = req.params;
  try {
    const voter = await prisma.voter.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json(voter);
  } catch (error) {
    res.send("Error delete VoterById");
  }
};

module.exports = {
  getVoters,
  getVoterById,
  addVoter,
  updateVoterById,
  deleteVoterById,
};
