export interface Position {
  x: number;
  y: number;
}

export interface Dimension {
  x: number;
  y: number;
}

export interface SideDims {
  top: number;
  right: number;
  bottom: number;
  left: number;
  center: number;
}

export interface Velocity {
  forward: number;
  backward: number;
  down: number;
  up: number;
}

export interface FighterState {
  position: "grounded" | "airborne";
  side: "left" | "right";
  defense: "lowBlocking" | "highBlocking" | "notBlocking";
  movement: "active" | "attacking" | "recovering" | "death";
  airAttack: "used" | "available";
  action:
    | "idle"
    | "walkForward"
    | "walkBackward"
    | "crouching"
    | "jumping"
    | "falling"
    | "attack1"
    | "attack2"
    | "lowAttack"
    | "lowAttack2"
    | "roll"
    | "dash"
    | "block"
    | "lowBlock"
    | "hit"
    | "death";
}

export type HitBox = {
  active: boolean;
  damage: number;
  type: "high" | "mid" | "low";
  left: number;
  right: number;
  top: number;
  bottom: number;
} | null;
