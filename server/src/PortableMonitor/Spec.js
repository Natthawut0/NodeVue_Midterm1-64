module.exports = (sequelize, DataTypes) => {
  const Spec = sequelize.define('Spec', {
    Product: DataTypes.STRING,
    Aspect_Ratio: DataTypes.STRING,
    Display_Resolution_Maximum: DataTypes.STRING,
    Screen_Size: DataTypes.STRING,
    Item_Dimensions: DataTypes.STRING,
    Item_Weight: DataTypes.STRING,
    Refresh_Rate: DataTypes.STRING,
    Size: DataTypes.STRING,
  })

  return Spec
}