import React from "react";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import runGame from "./runGame";

function Game() {
  const animationRef: any = useRef(null);

  const startGame = () => {
    const startButton = document.getElementById("startButton") as HTMLElement;
    startButton.style.visibility = "hidden";
    console.log("play");
    runGame(animationRef);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.gameContainer}>
      <canvas id="game" className={styles.gameCanvas}></canvas>
      <button
        id="startButton"
        className={styles.startButton}
        onClick={startGame}
      >
        play
      </button>
    </div>
  );
}

export default Game;
