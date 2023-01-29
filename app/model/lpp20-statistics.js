module.exports = app => {
  const {INTEGER, CHAR} = app.Sequelize

  let LPP20Statistics = app.model.define('lpp20_statistics', {
    contractAddress: {
      type: CHAR(20).BINARY,
      primaryKey: true
    },
    holders: INTEGER.UNSIGNED,
    transactions: INTEGER.UNSIGNED
  }, {freezeTableName: true, underscored: true, timestamps: false})

  LPP20Statistics.associate = () => {
    const {Lpp20: LPP20} = app.model
    LPP20Statistics.belongsTo(LPP20, {as: 'lpp20', foreignKey: 'contractAddress'})
    LPP20.hasOne(LPP20Statistics, {as: 'statistics', foreignKey: 'contractAddress'})
  }

  return LPP20Statistics
}
