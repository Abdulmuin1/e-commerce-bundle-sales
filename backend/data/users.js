import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Abdulmuin',
        email: 'anesru@example.com',
        password: bcrypt.hashSync('123456', 10),
        isProvider: true,
    },
    {
        name: 'Kidus',
        email: 'kabebe@example.com',
        password: bcrypt.hashSync('123456', 10),
        isProvider: true,
    },
    {
        name: 'Rukndo',
        email: 'rsolomon@example.com',
        password: bcrypt.hashSync('123456', 10),

        isDesigner: true,
    },
    {
        name: 'Yeabsira',
        email: 'ytsegaye@example.com',
        password: bcrypt.hashSync('123456', 10),
        isDesigner: true,
    },
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
];

export default users;
