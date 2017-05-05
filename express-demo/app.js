const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = new express()
const port = process.env.PORT || 80
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, 'www')))
app.get('/get', function(req, res) {
    console.log(req.query)
        // res.send('123')
        // res.status(200).send('123')
    res.json(req.query)
})
app.post('/post', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})
app.get('/api/:id', (req, res) => {
    console.log(req.params.id)
    res.json(req.params.id)
})
app.use('*', (req, res, next) => {
    console.error(req.originalUrl)
    res.status(404).send('no page!!')
        // res.status(404).sendFile(path.join(__dirname, 'www', 'index.html'))
})
app.listen(port, function() {
    console.log('runing Web Server in ' + port + ' port...')
})
