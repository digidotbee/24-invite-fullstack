import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { showNotGoing, selectNotGoing } from "./notGoingSlice.js"

export default function NotGoing() {
  const dispatch = useDispatch()
  const usersNotGoing = {
    results: [
    {
    gender: "male",
    name: {
    title: "Mr",
    first: "Mathis",
    last: "Liu"
    },
    location: {
    street: {
    number: 6353,
    name: "Queen St"
    },
    city: "Charlottetown",
    state: "Newfoundland and Labrador",
    country: "Canada",
    postcode: "F9W 0J5",
    coordinates: {
    latitude: "-59.9688",
    longitude: "-119.4580"
    },
    timezone: {
    offset: "+9:30",
    description: "Adelaide, Darwin"
    }
    },
    email: "mathis.liu@example.com",
    login: {
    uuid: "a8eac252-d17a-4aa9-9f91-246316265a4a",
    username: "organicbutterfly239",
    password: "xiao",
    salt: "2fDNQQMv",
    md5: "025c8f609c53b0ae5dbb7d979a2d9a44",
    sha1: "dedf9afc20e65c9aefab58d2329dcdf83eb8372e",
    sha256: "5f9b2af95267d2052142354915e8ba5b294280797d379039d8401f78ca936b7c"
    },
    dob: {
    date: "1960-01-26T15:58:38.462Z",
    age: 61
    },
    registered: {
    date: "2009-01-14T20:04:41.514Z",
    age: 12
    },
    phone: "141-436-2618",
    cell: "976-800-0144",
    id: {
    name: "",
    value: null
    },
    picture: {
    large: "https://randomuser.me/api/portraits/men/19.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
    },
    nat: "CA"
    }
    ],
    info: {
    seed: "59a464f6b04602f4",
    results: 1,
    page: 1,
    version: "1.3"
    }
    }
  console.log(usersNotGoing)

  useEffect(() => {
    dispatch(showNotGoing())
  }, [])

  return (
    <div className="isNotGoingContainer">
      <div className="isNotGoingHeader">
        <h1>Not Going</h1>
      </div>
      <div className="isGoingBody">
        {usersNotGoing.map((item) => (
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
