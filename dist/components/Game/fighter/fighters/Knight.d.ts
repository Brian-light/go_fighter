import * as types from "../../types";
import Fighter from "../Fighter";
import Sprite from "../../Sprite";
declare class Knight extends Fighter {
    movementSpeed: types.Velocity;
    fighterDim: Record<"width" | "height", number>;
    color: string;
    animations: Record<string, Sprite>;
    tempSide: "left" | "right";
    maxHp: number;
    currentHp: number;
    hitBox: types.HitBox;
    projectileHitBox: types.HitBox;
    isGameOver: boolean;
    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, canvasDimension: types.Dimension, side: "left" | "right");
    draw(): void;
    drawProjectile(): void;
    drawHitEffect(): void;
    update(enemy: Knight): void;
}
export default Knight;
//# sourceMappingURL=Knight.d.ts.map