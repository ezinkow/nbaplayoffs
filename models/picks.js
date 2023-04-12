module.exports = function (sequelize, DataTypes) {
    const Picks = sequelize.define("Picks", {
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        series_id: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        pick: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        points: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        games: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        series_round: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    });

    return Picks;
};
