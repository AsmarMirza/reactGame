import "./index.css";
import { useState } from "react";

function Game() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const rock = (
    <img
      alt="rock"
      className="gameImg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2OVIy_EDxNTUeebjn1mqMUCEIMOdhTm5SWa8wwSISzsAWiJ0fOMIZcjZgJ4ARUYQ7ls&usqp=CAU"
    ></img>
  );
  const paper = (
    <img
      alt="paper"
      className="gameImg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9-tnL-IKMLZGiLYorj2Y0F1HNCjBmHJB-xM6xhs5dh4dlh74WsHJCiHv13TkH8GM1bg&usqp=CAU"
    ></img>
  );
  const scissors = (
    <img
      alt="scissors"
      className="gameImg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbY3cebBkKScK2zYfYVJDIWZFIGgoFwrmttJ7XTKdKdyArNO_aVQEE9Y_LhnyCqdzOI_s&usqp=CAU"
    ></img>
  );

  const choices = [rock, paper, scissors];

  function handlePlayer(playerchoice) {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(playerchoice);
    setComputerChoice(computer);

    if (playerchoice === computer) {
      setResult("It's a tie!");
    } else if (
      (playerchoice === rock && computer === scissors) ||
      (playerchoice === paper && computer === rock) ||
      (playerchoice === scissors && computer === paper)
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }
  return (
    <div className="container">
      <div>
        <h1>Rock Paper Scissors</h1>
        {choices.map((x) => (
          <button className="btn" key={x} onClick={() => handlePlayer(x)}>
            {x}
          </button>
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div className="hero">
          <h2 className="myH"> You choose: {playerChoice}</h2>
          <h2 className="myH">Computer choose: {computerChoice}</h2>
          <h1 className="myH">Result: {result}</h1>
        </div>
      )}
    </div>
  );
}

export default Game;
