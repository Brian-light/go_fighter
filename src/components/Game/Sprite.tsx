class Sprite {
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

  constructor(
    context: CanvasRenderingContext2D,
    src: string,
    width: number,
    height: number,
    xScale: number,
    yScale: number,
    xOffset: number,
    yOffset: number,
    totalFrames: number,
    skippedFrames: number,
    cycleStartingFrame: number,
    side: "left" | "right"
  ) {
    this.context = context;
    this.img = new Image() as HTMLImageElement;
    this.img.src = src;
    this.width = width;
    this.height = height;
    this.newWidth = this.width * xScale;
    this.newHeight = this.height * yScale;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.currentFrame = 0;
    this.totalFrames = totalFrames;
    this.counter = 0;
    this.skippedFrames = skippedFrames;
    this.cycleStartingFrame = cycleStartingFrame;
    this.side = side;
    this.finished = false;
  }

  reset(side: "left" | "right") {
    this.currentFrame = 0;
    this.counter = 0;
    this.side = side;
    this.finished = false;
  }

  isFinished() {
    return this.finished;
  }

  setIsFinished() {
    this.currentFrame = this.totalFrames - 1;
    this.finished = true;
  }

  setSide(side: "left" | "right") {
    this.side = side;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getSide() {
    return this.side;
  }

  draw(x: number, y: number) {
    if (this.side === "left") {
      this.context.drawImage(
        this.img,
        this.width * this.currentFrame,
        0,
        this.width,
        this.height,
        x + this.xOffset,
        y + this.yOffset,
        this.newWidth,
        this.newHeight
      );
    } else {
      this.context.save();
      this.context.scale(-1, 1);
      this.context.drawImage(
        this.img,
        this.width * this.currentFrame,
        0,
        this.width,
        this.height,
        -x + this.xOffset - 60,
        y + this.yOffset,
        this.newWidth,
        this.newHeight
      );
      this.context.restore();
    }

    if (this.currentFrame === this.totalFrames - 1) {
      this.currentFrame = this.cycleStartingFrame;
      this.finished = true;
    } else {
      this.currentFrame =
        (this.currentFrame + Math.floor(this.counter / this.skippedFrames)) %
        this.totalFrames;
      this.finished = false;
    }
    this.counter = (this.counter + 1) % (this.skippedFrames + 1);
  }
}

export default Sprite;
