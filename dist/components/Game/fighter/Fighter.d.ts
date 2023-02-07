import * as types from "../types";
declare class Fighter {
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
    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, canvasDimension: types.Dimension, side: "left" | "right");
    get getSideDims(): types.SideDims;
    detectGroundCollision(): void;
    detectSideCollision(): void;
    detectBoxCollision(enemy: Fighter): boolean;
    detectHitBoxCollision(hitBox: types.HitBox): boolean;
    popOut(other: Fighter): void;
}
export default Fighter;
//# sourceMappingURL=Fighter.d.ts.map