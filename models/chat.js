module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "CHAT",
        {
            CID: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            CONTENTS: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
        }
    );
};
