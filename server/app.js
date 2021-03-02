const express = require("express");
// const cors = require("cors")
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cors)
const users = {
  going: [],
  notGoing: [],
  currentUser: {},
};

app.get("/results", (req, res) => {
    axios.get("http://randomuser.me/api/")
    .then(resp =>{
        person = resp.data.results[0]
            console.log(person)
        res.json({
            first: person.name.first,
            last: person.name.last,
            phone: person.phone,
            email: person.email,
            picture: person.picture.large
        })
    })
})

app.post('mark-invitee', (req, res) =>{
    const incomingUser = req.body
    const userGoing = incomingUser.going
    if (userGoing) {
        goingUsers.push(incomingUser)
    } else {
        notGoingUsers.push(incomingUser)
    }
    res.join({message: 'user added to invites', user: incomingUser})
})

app.get("/going", (req, res) => {
    console.log('please work')
    res.json({hello: true});
});


const port = 3001;

app.listen(port, (req, res) => {
  console.log(`listening on ${port}...probably`);
});

// Create a route for "/" that will return the invite data with the user counts for both going and not going.
// Create a route for "/going" that will pass all those going to the event.
// Create a route for "/notgoing" that will pass all those not going to the event.
// Create a POST route for "/mark-invitee"
// Take the information POST about the user and store it in memory (i.e. in an array / object)
// Don't forget to mark the user as going or not going
