const Role = require('../models/Role');

exports.createRole = async (req, res) => {
    const { name, permissions } = req.body;
    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json({ message: 'Role created successfully' });
};

exports.updateRole = async (req, res) => {
    const { roleId, permissions } = req.body;
    const role = await Role.findByIdAndUpdate(roleId, { permissions }, { new: true });
    res.json(role);
};
