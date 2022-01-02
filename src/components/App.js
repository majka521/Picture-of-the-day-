import React, { useState, useEffect } from "react";

export const App = () => {
  //set first time date and picture at local storage
  localStorage.setItem("date", new Date().toLocaleDateString());
  if (localStorage.getItem("pictureOfTheDay") === null) {
    localStorage.setItem("pictureOfTheDay", Math.floor(Math.random() * (35 - 1 + 1) + 1));
  }

  //states
  const [pictureOfTheDay, setPictureOfTheDay] = useState(localStorage.getItem("pictureOfTheDay"));
  const [number, setNumber] = useState(pictureOfTheDay);

  //random picture of the day
  useEffect(() => {
    if (localStorage.getItem("date") !== new Date().toLocaleDateString()) {
      const temp = [+pictureOfTheDay];
      while (temp.length < 2) {
        let randomNumber = Math.floor(Math.random() * (35 - 1 + 1) + 1);
        if (temp.indexOf(randomNumber) === -1) {
          temp.push(randomNumber);
        }
      }
      localStorage.setItem("pictureOfTheDay", temp[1]);
      setPictureOfTheDay(temp[1]);
      setNumber(temp[1]);
    }
  }, [pictureOfTheDay]);

  //random picture button
  const handleClick = (e) => {
    e.preventDefault();
    setNumber(Math.floor(Math.random() * (35 - 1 + 1) + 1));
  };

  return (
    <>
      <main className="mainBox">
        <h1 className="mainBox__title">Picure of the day:</h1>
        <div className="mainBox__imageBox">
          <img src={require(`./data/data(${number}).jpg`)} alt="cat" className="mainBox__imageBox__image"></img>
        </div>
        <a href="." onClick={(e) => handleClick(e)}>
          <p>
            <span className="background"></span>
            <span className="text">New picture</span>
          </p>
        </a>
      </main>
      <footer>
        <p>
          All images are from:{" "}
          <a href="https://pixabay.com/" target="_blank" rel="noreferrer">
            Pixabay.com
          </a>
        </p>
      </footer>
    </>
  );
};
