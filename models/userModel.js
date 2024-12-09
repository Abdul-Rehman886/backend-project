const { models } = require("./index");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },

  getAllUsers: async () => {
    try {
      const user = await models.users.findAll({
        paranoid: false,
        attributes: ["name", "username", "email"],
        // attributes : {exclude : ["userId" , "password" , "createdAt" ]}
      });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getOneUser: async ({ email, username }) => {
    try {
      const user = await models.users.findOne({
        paranoid: false,
        attributes: ["userId", "name", "username", "email", "password"],

        where: {
          ...(email != "false" ? { email: email } : { username: username }),
        },
      });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateUser: async ({ username, ...body }) => {
    try {
      const user = await models.users.update(
        { ...body },
        {
          where: {
            username: username,
          },
        }
      );

      console.log("check", user);

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser: async ({ username }) => {
    try {
      const user = await models.users.destroy({
        where: {
          username: username,
        },
      });

      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
