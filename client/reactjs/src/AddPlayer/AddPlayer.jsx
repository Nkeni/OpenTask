import React from "react";
import {useState, useRef } from "react";
import './addplayer.scss'


const FormComponent = () => {
    const [error, setErrors] = useState(null);
    const nameInput = useRef();
  const ageInput = useRef();
  const gamesInput = useRef();
  const positionInput = useRef();

  //^ add a player
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      playername: nameInput.current.value,
      age: ageInput.current.value,
      games: gamesInput.current.value,
      position: positionInput.current.value,
    };

    const config = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:2000/detail", config)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            console.log(err);
            setErrors(err);
          });
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        setErrors(err);
        console.log(err);
      });
    nameInput.current.value = "";
    ageInput.current.value = "";
    gamesInput.current.value = "";
    positionInput.current.value = "";
    alert("Your favourite player is added to the server");
    };

    return (
        
        <form onSubmit={submitHandler}>
            <h2>Add your favourite player</h2>
            <div>
            <label>Name</label>
            <input type="text" name="name"  ref={nameInput} />
            </div>
            <div>
            <label>Age</label>
            <input type="number" name="age"  ref={ageInput} />
            </div>
            <div>
            <label>Games</label>
            <input type="number" name="games"  ref={gamesInput}/>
            </div>
            <div>
            <label>Position</label>
            <input type="number" name="position"  ref={positionInput} />
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default FormComponent;