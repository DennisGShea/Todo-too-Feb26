const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
const port = 5001

app.get('/events', getEvents)
app.get('/events/:eventId', getSingleEvent)
app.post('/events', postEvent)
app.delete('/events/:eventId', deleteEvent)
app.patch('/events/:eventId', updateEvent)

app.get('/people', getPeople)
app.post('/people', postPerson)
app.get('/person/:personId', getPerson)
app.patch('/person/:personId', updatePerson)

app.get('/', (req, res) => {
	res.status(200).send('Hello World!')
})

app.listen(port, () => {
	console.log('listening on http://localhost:' + port)
})
