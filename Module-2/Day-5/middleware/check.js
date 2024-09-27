const check = (req, res, next) => {
    try {

        console.log("In middleware and params", req.query);

        if (!Object.keys(req.query)) {
            throw new Error('No params available')
        }
        req.user = req.query.id
        next()
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }


}

module.exports = { check }