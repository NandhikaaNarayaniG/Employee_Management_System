const { DataTypes } = require('sequelize');

module.exports =(sequelize,Datatypes) => {
    const Employee = sequelize.define("Employee", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfJoining: {
        type: DataTypes.DATE,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


    return Employee;
};