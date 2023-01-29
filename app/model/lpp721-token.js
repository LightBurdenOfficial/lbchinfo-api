module.exports = app => {
  const {CHAR} = app.Sequelize

  let LPP721Token = app.model.define('lpp721_token', {
    contractAddress: {
      type: CHAR(20).BINARY,
      primaryKey: true
    },
    tokenId: {
      type: CHAR(32).BINARY,
      primaryKey: true
    },
    holder: CHAR(20).BINARY
  }, {freezeTableName: true, underscored: true, timestamps: false})

  LPP721Token.associate = () => {
    const {Contract} = app.model
    Contract.hasMany(LPP721Token, {as: 'lpp721Tokens', foreignKey: 'contractAddress'})
    LPP721Token.belongsTo(Contract, {as: 'contract', foreignKey: 'contractAddress'})
  }

  return LPP721Token
}
