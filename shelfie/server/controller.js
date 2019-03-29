module.exports = {
    get_inventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => {res.status(200).send(products)})
        .catch(err => console.log(`controller.get_inventory: ${err}`))
    },
    create_product: (req, res) => {
        const db = req.app.get('db') 

        db.create_product(req.body)
        .then(() => { res.sendStatus(201)})
        .catch(err => console.log('Failed to Create', err))

    },
    delete: async (req, res) => {
        const db = req.app.get('db')

        await db.delete(req.query.id)
        .then(() => { res.sendStatus(200)})
        .catch(err => console.log('failed to delete', err))
    }
}