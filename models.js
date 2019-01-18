const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

module.exports = db

const gardener = db.define('gardener', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
        type: Sequelize.SMALLINT,
        allowNull: false
    }
})

const vegetable = db.define('vegetable', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    plantedOn: {
      type: Sequelize.DATE,
      allowNull: false
    }
})

const plot = db.define('plot', {
    size: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    shaded: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})


Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})