const express = require('express')
const Get_all = require('./utils').Get_all
const app = express()

const port = process.env.PORT || 3000

app.get('/', function (req, res) {

    const category = req.query.category
    const country = req.query.country
    const date = req.query.date

    console.log(req.query)


    msg = Get_all(category, country, (msg) => {
        msg = JSON.parse(msg)
        if (msg.length > 0) {
            console.log('Data collected successfully')
            res.send(msg)
        }
        else {
            console.log('No data was found')
            res.send({
                error: 'No data was found. Make sure you have access to the internet!'
            })
        }

    })

})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Listening on port ' + port)
    }
})