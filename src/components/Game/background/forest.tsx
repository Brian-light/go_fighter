import Sprite from "../Sprite";
import forest from "./scenes/forest/forest.png";
import shop from "./scenes/forest/shop.png";
import demon from "./scenes/forest/demon.png";

class Forest {
  context: CanvasRenderingContext2D;
  background: Sprite;
  shop: Sprite;
  demon: Sprite;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.background = new Sprite(
      this.context,
      forest,
      1024,
      576,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      "left"
    );
    this.shop = new Sprite(
      this.context,
      shop,
      118,
      128,
      2.4,
      2.4,
      0,
      0,
      6,
      6,
      0,
      "left"
    );
    this.demon = new Sprite(
      this.context,
      demon,
      160,
      114,
      1.1,
      1.1,
      0,
      0,
      6,
      8,
      0,
      "left"
    );
  }
  draw() {
    this.background.draw(0, 0);
    this.shop.draw(680, 173);
    this.demon.draw(770, 150);
    this.context.fillStyle = "rgba(255,255,255,0.20)";
    this.context.fillRect(0, 0, 1024, 576);
  }
}

export default Forest;
