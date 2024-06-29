const request = require('supertest')
const app = require('../../app')
const BlogModal = require('../../Modals/BlogModal')
const dbsequelize = require('../../Configurations/DatabaseConfig.test')


describe('Blog api testing', () => {
    beforeAll(async () => {
        await dbsequelize.sync({force: true})
    })

    afterAll(async () => {
        await dbsequelize.close()
    })

    beforeEach(async () => {
        await BlogModal.destroy({where: {}})
    })
})