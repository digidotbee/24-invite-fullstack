import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import {
  getUser,
  isGoingUser,
  notGoingUser,
  selectInvitee,
} from "./inviteSlice.js"
import { selectGoing } from "./goingSlice.js"
import { selectNotGoing } from "./notGoingSlice.js"
import { FaCheck, FaTimes } from 'react-icons/fa';
import axios from 'axios';
// import crazyCage from "./CrazyCage";

export default function InvitePage() {

    const [invitee, setInvitee] = useState({})

    const dispatch = useDispatch()
  
  
    console.log(invitee)
    // console.log(usersGoing)
    // console.log(usersNotGoing)


    // refactor to use slice
    useEffect(() => {
        axios.get('/results')//{headers: {"Access-Control-Allow-Origin": "*"}})
        .then(resp => {
            console.log(resp.data)
            console.log('test')
            setInvitee(resp.data)
        })
    }, [])
    return (
        <div className="container">
        <div className="goingOrNotGoing">
          <div>Going: <strong>1235 peeps</strong></div>{" "}
          <div>Not Going: <strong>Crazy Nick Cage</strong></div>
        </div>
        <div className="randomUserContainer">
          <div className="userImage">
            <img
              className="profile"
              src={invitee.picture}
              alt="profile picture"
            ></img>
          </div>
          <div className="userInfo">
            <div className="userName">
              <span>Name:</span> {invitee.first} {invitee.last}
            </div>
            <div className="userEmail">
              <span>Email:</span> {invitee.email}
            </div>
            <div className="userPhone">
              <span>Phone:</span> {invitee.phone}
            </div>
          </div>
          <div className="inviteBtns">
            <button
              onClick={() => dispatch(notGoingUser(invitee))}
              className="notGoingBtn"
            >
              <FaTimes />
            </button>
            <button
              onClick={() => dispatch(isGoingUser(invitee))}
              className="goingBtn"
            >
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    )
  }
