import * as types from "./types";
import * as constants from "./constants";
import Knight from "./fighter/fighters/Knight";
import Forest from "./background/forest";

const handleWinCondition = (
  context: CanvasRenderingContext2D,
  timer: number,
  p1Hp: number,
  p2Hp: number
) => {
  if (timer <= 0) {
    if (p1Hp === p2Hp) {
      context.strokeText("Draw Game", 512, 288);
    } else if (p1Hp > p2Hp) {
      context.strokeText("Player 1 Wins", 512, 288);
    } else if (p1Hp < p2Hp) {
      context.strokeText("Player 2 Wins", 512, 288);
    }
    return true;
  }

  if (p1Hp === 0 && p2Hp === 0) {
    context.strokeText("Draw Game", 512, 288);
    return true;
  } else if (p2Hp === 0) {
    context.strokeText("Player 1 Wins", 512, 288);
    return true;
  } else if (p1Hp === 0) {
    context.strokeText("Player 2 Wins", 512, 288);
    return true;
  }

  return false;
};

const runGame = (animationRef: any) => {
  const canvas = document.getElementById("game") as HTMLCanvasElement;
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  canvas.width = constants.CANVASWIDTH;
  canvas.height = constants.CANVASHEIGHT;
  const canvasDimension: types.Dimension = {
    x: canvas.width,
    y: canvas.height,
  };
  canvas.tabIndex = 0;
  canvas.focus();

  let timer: number = 100;
  context.font = "30px Sans-serif";
  context.textAlign = "center";
  context.strokeStyle = "azure";
  const background = new Forest(context);
  const player1 = new Knight(canvas, context, canvasDimension, "left");
  const player2 = new Knight(canvas, context, canvasDimension, "right");
  let gameState: "inProgress" | "finished" = "inProgress";

  const decreaseTimer = () => {
    setTimeout(decreaseTimer, 1000);
    if (timer > 0) {
      timer--;
    }
  };

  const animate = (): void => {
    // Throttle the frame rate.

    // context.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();

    player1.update(player2);
    player2.update(player1);

    player1.draw();
    player2.draw();
    player1.drawProjectile();
    player2.drawProjectile();
    player1.drawHitEffect();
    player2.drawHitEffect();

    context.fillStyle = "red";
    context.fillRect(20, 35, 468, 30);
    context.fillRect(536, 35, 468, 30);

    context.fillStyle = "yellow";
    context.fillRect(
      21 + 467 * (1 - player1.currentHp / player1.maxHp),
      36,
      (467 * player1.currentHp) / player1.maxHp,
      28
    );
    context.fillRect(536, 36, (467 * player2.currentHp) / player2.maxHp, 28);

    context.fillStyle = "white";
    context.fillRect(489, 30, 46, 40);
    context.fillStyle = "black";
    context.fillRect(492, 32, 40, 36);
    context.strokeText(String(timer), 512, 60);

    if (timer >= 99) {
      context.strokeText("Fight", 512, 288);
    }

    if (
      handleWinCondition(
        context,
        timer,
        player1.currentHp,
        player2.currentHp
      ) &&
      gameState === "inProgress"
    ) {
      gameState = "finished";
      const startButton = document.getElementById("startButton") as HTMLElement;
      startButton.style.visibility = "visible";
      startButton.innerHTML = "play again";
      startButton.style.top = "53%";
      player1.isGameOver = true;
      player2.isGameOver = true;
    }

    requestAnimationFrame(animate);
  };

  decreaseTimer();
  animationRef.current = requestAnimationFrame(animate);
};

export default runGame;
