const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const authAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    if (!admin) return res.status(400).send("Email or password are invalid");
    const verifyPassword = await bcrypt.compare(password, admin.password);
    if (verifyPassword == false)
      return res.status(400).send("Email or password are invalid");
    const payload = {
      id: admin.id,
      name: admin.name,
    };
    //const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);
    const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);

    return res.status(202).json({
      token: jwtToken,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Error auth admin");
  }
};

const getAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany({});
    res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    res.send("Error get admins");
  }
};

const getAdminById = async (req, res) => {
  const id = req.params.id;
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        id: +id,
      },
    });
    res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    res.send("Error get adminById");
  }
};

const getAuthenticatedAdmin = async (req, res) => {
  const { token } = req.body;
  console.log(token)
  try {
    const { id } = jwt.decode(token);
    if(id){
      const admin = await prisma.admin.findFirst({
        where: {
          id: +id,
        },
      });
      return res.status(200).json(admin);
    }
    return res.status(400).json("No user found");
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error get adminById");
  }
};

const addAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  //find the admin with the given email
  try {
    const admin = await prisma.admin.findFirst({
      where: {
        email: email,
      },
    });
    //if admin exist
    if (admin) res.send("User already exist !");
    else {
      try {
        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        //add new admin
        const newAdmin = await prisma.admin.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });
        res.status(201).json(newAdmin);
      } catch (error) {
        res.status(400).send("Error creating user");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Error");
  }

  //add to db
};

const updateAdminById = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedAdmin = await prisma.admin.update({
      where: {
        id: +id,
      },
      data: body,
    });
    res.status(200).json(updatedAdmin);
  } catch (error) {
    console.log(error);
    res.send("Error update adminById");
  }
};

const deleteAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await prisma.admin.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    res.send("Error delete adminById");
  }
};

module.exports = {
  authAdmin,
  getAdmins,
  getAdminById,
  getAuthenticatedAdmin,
  addAdmin,
  updateAdminById,
  deleteAdminById,
};
