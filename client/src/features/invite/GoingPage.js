import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showGoing, selectGoing } from "../invite/goingSlice.js"
import axios from 'axios'

export default function Going() {

  const [users, setUsers] = useState([])
  const [usersGoing, setUsersGoing] = useState([])

  const dispatch = useDispatch()
  
  console.log(usersGoing)

  useEffect(() => {
    axios.get('/going')
    .then(resp => {
      setUsersGoing(resp.data)
    })
  }, [])

  return (
    <div className="container">
      <div className="goingHeader">
        <h1>Going</h1>
      </div>
      <div className="goingBody">
        {usersGoing.map((item) => (
          <div>
            <div className="goingUser">
              <div className="userImage">
                <img
                  className="goingImg"
                  src={item.imgLarge}
                  alt="profile picture"
                ></img>
              </div>
              <div className="userInfo">
                <div className="userName">
                  <span>Name:</span> {item.first} {item.last}
                </div>
                <div className="userEmail">
                  <span>Email:</span> {item.email}
                </div>
                <div className="userPhone">
                  <span>Phone:</span> {item.phone}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
