const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,

    pool: {
      max: +process.env.POOL_MAX,
      min: +process.env.POOL_MIN,
      acquire: +process.env.POOL_ACQUIRE,
      idle: +process.env.POOL_IDLE,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.tutor = require("./tutor.model.js")(sequelize, Sequelize);

// if you want to specify association between different model, below is the sample way
// db.tutor.hasMany(db.tutorials, { as: "tutorials" });
// db.tutorials.belongsTo(db.tutor);

module.exports = db;
