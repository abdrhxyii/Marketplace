const Product = require('../../Modals/ProductModal');
const Category = require('../../Modals/CategoryModal');
const User = require('../../Modals/UserModal');
const DatabaseConfig = require('../../Configurations/DatabaseConfig.test');
const request = require('supertest');
const app = require('../../app');
const path = require('path');

describe('products endpoints', () => {
    beforeAll(async () => {
        await DatabaseConfig.sync({ force: true });
    });

    afterAll(async () => {
        await DatabaseConfig.close();
    });

    beforeEach(async () => {
        await Product.destroy({ where: {} });
        await Category.destroy({ where: {} });
        await User.destroy({ where: {} });
    });

    describe('product creation test', () => {
        it('should create product', async () => {
            await request(app)
                .post('/auth/register')
                .send({
                    email: "admin@gmail.com",
                    password: "123456789",
                    first_name: "Abdur",
                    last_name: "Rahman",
                    role: "admin"
                });

            const responselogin = await request(app)
                .post('/auth/login')
                .send({
                    email: "admin@gmail.com",
                    password: "123456789",
                });

            const token = responselogin.body.Token;
            const category = await request(app)
            .post('/category/')
            .send({
                name: "Mens"
            })
            
            const response = await request(app)
                .post('/product/')
                .set('Authorization', `Bearer ${token}`)
                .field('name', 'Short Sleeve T-shirts')
                .field('description', 'This is a test description written when creating the product')
                .field('price', '10.20')
                .field('categoryId', category.id)
                .attach('image', path.resolve(__dirname, 'testimages', 'testinimage.jpeg'));

            expect(response.statusCode).toBe(201);
            expect(response.body.message).toBe("Product created");
            expect(response.body.product).toHaveProperty('id');
            expect(response.body.product.name).toBe('Short Sleeve T-shirts');
        }, 10000);
    });
});
