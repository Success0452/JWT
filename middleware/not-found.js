const notFound = (req, res) => {
    return res.status(404).send('Requested Route Not Found')
}

module.exports = notFound;