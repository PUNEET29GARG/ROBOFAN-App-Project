import React, { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./components/PoductCard";
import "./styles.css";
import Popup from "./components/Popup";

function App() {
  const [userData, setUserData] = useState([]);
  const [copy, setCopy] = useState([]);
  const [userId, setUserId] = useState([]);
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setUserData(data);
        setCopy(data);

        console.log(userId);
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  }, []);

  useEffect(() => {
    if (search) {
      const second = userData.filter((user) => {
        return user.name.includes(search);
      });
      setCopy(second);
    }

    if (search === "") {
      setCopy(userData);
    }
  }, [search]);

  function show() {
    setShowPopup(!showPopup);
  }

  // function userIds() {
  //   userData.map((user) => {
  //     return setUserId([...userId, user.id]);
  //   });
  // }

  return (
    <>
      <div className="App">
        <h1>ROBOFANS</h1>
        <div>
          <button onClick={show}>Open Popup</button>
          <input
            placeholder="Search Robots"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <br />
          <br />
          <div className="roboCard">
            <ProductCard
              copy={copy}
              userData={userData}
              userId={userId}
              setUserId={setUserId}
            />
          </div>
        </div>
      </div>
      {showPopup ? <Popup show={show} /> : null}
    </>
  );
}

export default App;
