import * as types from "../types";

const player1Controls: string[] = ["w", "a", "s", "d", "e", "r", "f"];
const player2Controls: string[] = [
  "ArrowUp",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "1",
  "2",
  "0",
];

const addControls = (
  canvas: HTMLCanvasElement,
  playerInputs: Record<string, boolean>,
  side: string
): void => {
  const [UP, LEFT, DOWN, RIGHT, ATTACK1, ATTACK2, DASH]: string[] =
    side === "left" ? player1Controls : player2Controls;

  canvas.addEventListener("keydown", (event) => {
    switch (event.key) {
      case RIGHT:
        playerInputs.right = true;
        break;
      case LEFT:
        playerInputs.left = true;
        break;
      case DOWN:
        playerInputs.down = true;
        break;
      case UP:
        playerInputs.up = true;
        break;
      case ATTACK1:
        playerInputs.attack1 = true;
        break;
      case ATTACK2:
        playerInputs.attack2 = true;
        break;
      case DASH:
        playerInputs.dash = true;
        break;
      default:
        break;
    }
  });

  canvas.addEventListener("keyup", (event) => {
    switch (event.key) {
      case RIGHT:
        playerInputs.right = false;
        break;
      case LEFT:
        playerInputs.left = false;
        break;
      case DOWN:
        playerInputs.down = false;
        break;
      case UP:
        playerInputs.up = false;
        break;
      case ATTACK1:
        playerInputs.attack1 = false;
        break;
      case ATTACK2:
        playerInputs.attack2 = false;
        break;
      case DASH:
        playerInputs.dash = false;
        break;
      default:
        break;
    }
  });
};

class Fighter {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  boundry: Record<string, number>;
  fighterDim: Record<"width" | "height", number>;
  fighterCurDim: Record<"width" | "height", number>;
  position: types.Position;
  currentVelocity: types.Dimension;
  movementSpeed: types.Velocity;
  fighterState: types.FighterState;
  playerInputs: Record<string, boolean>;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    canvasDimension: types.Dimension,
    side: "left" | "right"
  ) {
    this.canvas = canvas;
    this.context = context;
    //fighting boundry
    this.boundry = {
      left: 0,
      right: canvasDimension.x,
      up: 0,
      down: canvasDimension.y - 96,
    };
    //fighter states
    this.fighterDim = { width: 50, height: 100 };
    this.fighterCurDim = this.fighterDim;
    this.position = { x: 0, y: 0 };
    this.currentVelocity = { x: 0, y: 0 };
    //default fighter movement speed
    this.movementSpeed = { forward: 15, backward: -10, down: 5, up: -45 };
    this.fighterState = {
      position: "grounded",
      side: side,
      defense: "notBlocking",
      movement: "attacking",
      airAttack: "available",
      action: "attack2",
    };

    this.playerInputs = {
      up: false,
      left: false,
      down: false,
      right: false,
      attack1: false,
      attack2: false,
      dash: false,
    };
    addControls(canvas, this.playerInputs, side);

    //setting up starting position
    switch (side) {
      case "left":
        this.position.x = canvasDimension.x * 0.35 - this.fighterDim.width / 2;
        this.position.y = this.boundry.down! - this.fighterDim.height;
        break;
      case "right":
        this.position.x = canvasDimension.x * 0.65 - this.fighterDim.width / 2;
        this.position.y = this.boundry.down! - this.fighterDim.height;
        break;
      default:
        break;
    }
  }

  get getSideDims() {
    const left: number = this.position.x;
    const top: number =
      this.position.y + this.fighterDim.height - this.fighterCurDim.height;
    const right: number = left + this.fighterDim.width;
    const bottom: number = top + this.fighterDim.height;
    const center: number = (left + right) / 2;
    const playerSideDims: types.SideDims = { left, top, right, bottom, center };
    return playerSideDims;
  }

  detectGroundCollision() {
    //ground boundry detection
    const sideDims: types.SideDims = this.getSideDims;

    if (sideDims.bottom >= this.boundry.down!) {
      this.fighterState.position = "grounded";
      this.fighterState.airAttack = "available";
      this.currentVelocity.y = 0;
      this.position.y = this.boundry.down! - this.fighterDim.height;
    } else {
      this.currentVelocity.y += this.movementSpeed.down;
    }
  }

  detectSideCollision() {
    const sideDims: types.SideDims = this.getSideDims;

    if (sideDims.left < this.boundry.left!) {
      this.position.x = this.boundry.left!;
    } else if (sideDims.right > this.boundry.right!) {
      this.position.x = this.boundry.right! - this.fighterDim.width;
    }
  }

  detectBoxCollision(enemy: Fighter): boolean {
    const self: types.SideDims = this.getSideDims;
    const other: types.SideDims = enemy.getSideDims;

    if (
      self.left < other.right &&
      self.right > other.left &&
      self.top < other.bottom &&
      self.bottom > other.top
    ) {
      return true;
    }
    return false;
  }

  detectHitBoxCollision(hitBox: types.HitBox): boolean {
    if (hitBox == null) {
      return false;
    }

    const self: types.SideDims = this.getSideDims;
    const other: types.HitBox = hitBox;

    if (!other.active) {
      return false;
    }

    if (
      self.left < other.right &&
      self.right > other.left &&
      self.top < other.bottom &&
      self.bottom > other.top
    ) {
      return true;
    }
    return false;
  }

  popOut(other: Fighter): void {
    if (
      (this.fighterState.position === "airborne" &&
        other.fighterState.position !== "airborne") ||
      (this.fighterState.position !== "airborne" &&
        other.fighterState.position === "airborne")
    )
      return;

    const mySideDims: types.SideDims = this.getSideDims;

    if (this.fighterState.side === "left") {
      other.position.x = mySideDims.right;
    } else if (this.fighterState.side === "right") {
      other.position.x = mySideDims.left - other.fighterDim.width;
    }
  }
}

export default Fighter;
