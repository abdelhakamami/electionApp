const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dayjs = require('dayjs');

const getElections = async (req, res) => {
  try {
    let elections = await prisma.election.findMany({});
    elections = elections.map(election => {
      election.startDate = dayjs(election.startDate).format('YYYY-MM-DD');
      election.endDate = dayjs(election.endDate).format('YYYY-MM-DD');
      return election;
    })
    console.log(elections)
    res.status(200).json(elections);
  } catch (error) {
    res.send("Error get elections");
  }
};

const getElectionById = async (req, res) => {
  const id = req.params.id;
  try {
    const election = await prisma.election.findFirst({
      where: {
        id: +id,
      },
    });
    // election.startDate = dayjs(election.startDate).format('YYYY-MM-DD');
    // election.endDate = dayjs(election.endDate).format('YYYY-MM-DD');
    res.status(200).json(election);
  } catch (error) {
    res.send("Error get electionById");
  }
};

//////////////////////////////////////////////
const addElection = async (req, res) => {
  const { title, description, status } = req.body;
  const adminId = req.user.id;
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  try {
    //add new election
    const newElection = await prisma.election.create({
      data: {
        title,
        description,
        status,
        startDate,
        endDate,
        adminId,
      },
    });
    res.status(201).json(newElection);
  } catch (error) {
    console.log(error);
    res.send("Error creating election");
  }
};

const updateElectionById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedElection = await prisma.election.update({
      where: {
        id: +id,
      },
      data: body,
    });
    res.status(200).json(updatedElection);
  } catch (error) {
    res.send("Error update electionById");
  }
};

const deleteElectionById = async (req, res) => {
  const { id } = req.params;
  try {
    const election = await prisma.election.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json(election);
  } catch (error) {
    res.send("Error delete electionById");
  }
};

module.exports = {
  getElections,
  getElectionById,
  addElection,
  updateElectionById,
  deleteElectionById,
};
