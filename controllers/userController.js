const responseHandler = require("../responseHandler");

// const {hash} = require("bcryptjs")
// const {v4 : uuid} = require("uuid")
const {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../models/userModel");

module.exports = {
  Create: async (req, res) => {
    try {
      // return res.send({
      //     status: 200,
      //     message  : "User created successfully",
      //     data: req.body,
      // })

      // req.body.userId =  uuid();
      // req.body.password = await hash(req.body.password , 5);

      const response = await createUser(req.body);

      return responseHandler(res, response);
    } catch (error) {
      //     return res.send({
      //         status: 400,
      //         message  : error,
      //         data: {},
      // })

      return responseHandler(res, { error: error });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      // return res.send({
      //     status: 200,
      //     message  : "User retrieved successfully",
      //     data: req.query,
      // })

      const response = await getAllUsers();

      return responseHandler(res, response);
    } catch (error) {
      //     return res.send({
      //         status: 400,
      //         message  : error,
      //         data: {},
      // })

      return responseHandler(res, { error: error });
    }
  },

  getOneUser: async (req, res) => {
    try {
      // return res.send({
      //     status: 200,
      //     message  : "User retrieved successfully",
      //     data: req.query,
      // })

      const response = await getOneUser(req.query);

      delete response.response.dataValues.password;

      return responseHandler(res, response);
    } catch (error) {
      //     return res.send({
      //         status: 400,
      //         message  : error,
      //         data: {},
      // })

      return responseHandler(res, { error: error });
    }
  },

  Update: async (req, res) => {
    try {
      // return res.send({
      //     status: 200,
      //     message  : "User updated successfully",
      //     data: req.body,
      // })

      const response = await updateUser(req.body);

      return responseHandler(res, response);
    } catch (error) {
      //     return res.send({
      //         status: 400,
      //         message  : error,
      //         data: {},
      // })

      return responseHandler(res, { error: error });
    }
  },

  Delete: async (req, res) => {
    try {
      //     return res.send({
      //         status: 200,
      //         message  : "User deleted successfully",
      //         data: req.query,
      //     })

      const response = await deleteUser(req.query);

      return responseHandler(res, response);
    } catch (error) {
      //     return res.send({
      //         status: 400,
      //         message  : error,
      //         data: {},
      // })

      return responseHandler(res, { error: error });
    }
  },
};
