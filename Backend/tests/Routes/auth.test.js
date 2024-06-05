const request = require('supertest');
const app = require('../../app');
const User = require('../../Modals/UserModal');
const sequelize = require('../../Configurations/DatabaseConfig.test');

describe('Auth API', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    beforeEach(async () => {
        await User.destroy({ where: {} }); // Clear User table before each test
    });

    describe('POST /auth/register endpoint', () => {
        it('should register a new user', async () => {
            const response = await request(app)
                .post('/auth/register')
                .send({
                    email: "admin@gmail.com",
                    password: "123456789",
                    first_name: "Abdur",
                    last_name: "Rahman",
                    role: "admin"
                });
            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe("Registered successfully");
            expect(response.body.newUser).toHaveProperty('id');
            expect(response.body.newUser.email).toBe('admin@gmail.com');
        });

        it('should not register with an existing email address', async () => {
            await request(app)
                .post('/auth/register')
                .send({
                    email: "admin@gmail.com",
                    password: "123456789",
                    first_name: "Abdur",
                    last_name: "Rahman",
                    role: "admin"
                });

            const response = await request(app)
                .post('/auth/register')
                .send({
                    email: "admin@gmail.com",
                    password: "123456789",
                    first_name: "Abdur",
                    last_name: "Rahman",
                    role: "admin"
                });

            expect(response.statusCode).toBe(409);
            expect(response.body.message).toBe('User already exists');
        });
    });

    describe('POST /auth/login endpoints', () => {
        it('should login with an already existing email address', async () => {
            await request(app)
                .post('/auth/register')
                .send({
                    email: "login@gmail.com",
                    password: "123456789",
                    first_name: "Abdur",
                    last_name: "Rahman",
                    role: "user"
                });

            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: "login@gmail.com",
                    password: "123456789",
                });

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe("Login success");
            expect(response.body).toHaveProperty('Token');
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('role');
        });

        it('should not login with a non-existing email address', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: "nonexistent@gmail.com",
                    password: "123456789",
                });

            expect(response.statusCode).toBe(404);
            expect(response.body.message).toBe("The provided email address doesn't exist. Please register to continue");
        });

        it('should not login with an incorrect password', async () => {
            await request(app)
                .post('/auth/register')
                .send({
                    email: "login@gmail.com",
                    password: "123456789",
                });

            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: "login@gmail.com",
                    password: "wrongpassword",
                });

            expect(response.statusCode).toBe(401); // Changed to 401 Unauthorized
            expect(response.body.message).toBe("Incorrect password");
        });
    });

    describe('GET /auth/profile/:id endpoint', () => {
        it('should retrieve a user profile successfully', async () => {
            const newUser = await User.create({
                email: "admin@gmail.com",
                password: "123456789",
                first_name: "Abdur",
                last_name: "Rahman",
                role: "admin"
            });

            const response = await request(app).get(`/auth/profile/${newUser.id}`);

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toHaveLength(1);
            expect(response.body.message[0].id).toBe(newUser.id);
            expect(response.body.message[0].email).toBe("admin@gmail.com");
        });

        it('should not retrieve any users', async () => {
            const response = await request(app).get('/auth/profile/10'); // Assuming ID 10 doesn't exist

            expect(response.statusCode).toBe(404);
            expect(response.body.message).toBe("No user found");
        });
    });
});
