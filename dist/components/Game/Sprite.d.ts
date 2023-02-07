declare class Sprite {
    context: CanvasRenderingContext2D;
    img: HTMLImageElement;
    width: number;
    height: number;
    xOffset: number;
    yOffset: number;
    newWidth: number;
    newHeight: number;
    currentFrame: number;
    totalFrames: number;
    counter: number;
    skippedFrames: number;
    cycleStartingFrame: number;
    side: "left" | "right";
    finished: boolean;
    constructor(context: CanvasRenderingContext2D, src: string, width: number, height: number, xScale: number, yScale: number, xOffset: number, yOffset: number, totalFrames: number, skippedFrames: number, cycleStartingFrame: number, side: "left" | "right");
    reset(side: "left" | "right"): void;
    isFinished(): boolean;
    setIsFinished(): void;
    setSide(side: "left" | "right"): void;
    getCurrentFrame(): number;
    getSide(): "left" | "right";
    draw(x: number, y: number): void;
}
export default Sprite;
//# sourceMappingURL=Sprite.d.ts.map