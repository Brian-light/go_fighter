import * as types from "../../types";
// import * as constants from "../../constants";
import Fighter from "../Fighter";
import Sprite from "../../Sprite";

//import animations
import p1_idle from "./knight_assets/p1/_Idle.png";
import p1_walkFoward from "./knight_assets/p1/_Run.png";
import p1_walkBackward from "./knight_assets/p1/_BackRun.png";
import p1_crouch from "./knight_assets/p1/_CrouchFull.png";
import p1_jumping from "./knight_assets/p1/_Jump.png";
import p1_falling from "./knight_assets/p1/_Fall.png";
import p1_attack1 from "./knight_assets/p1/_AttackNoMovement.png";
import p1_attack2 from "./knight_assets/p1/_Attack2NoMovement.png";
import p1_lowAttack from "./knight_assets/p1/_CrouchAttack.png";
import p1_dash from "./knight_assets/p1/_Dash.png";
import p1_roll from "./knight_assets/p1/_Roll.png";
import p1_Block from "./knight_assets/p1/_Block.png";
import p1_lowBlock from "./knight_assets/p1/_LowBlock.png";
import p1_hit from "./knight_assets/p1/_Hit.png";
import p1_death from "./knight_assets/p1/_DeathNoMovement.png";
import p1_projectile from "./knight_assets/p1/_Projectile2.png";
import p1_pojectileHit from "./knight_assets/p1/_ThunderHit.png";
import p1_hitEffect from "./knight_assets/p1/_HitEffect.png";

import p2_idle from "./knight_assets/p2/_Idle.png";
import p2_walkFoward from "./knight_assets/p2/_Run.png";
import p2_walkBackward from "./knight_assets/p2/_BackRun.png";
import p2_crouch from "./knight_assets/p2/_CrouchFull.png";
import p2_jumping from "./knight_assets/p2/_Jump.png";
import p2_falling from "./knight_assets/p2/_Fall.png";
import p2_attack1 from "./knight_assets/p2/_AttackNoMovement.png";
import p2_attack2 from "./knight_assets/p2/_Attack2NoMovement.png";
import p2_lowAttack from "./knight_assets/p2/_CrouchAttack.png";
import p2_dash from "./knight_assets/p2/_Dash.png";
import p2_roll from "./knight_assets/p2/_Roll.png";
import p2_Block from "./knight_assets/p2/_Block.png";
import p2_lowBlock from "./knight_assets/p2/_LowBlock.png";
import p2_hit from "./knight_assets/p2/_Hit.png";
import p2_death from "./knight_assets/p2/_DeathNoMovement.png";
import p2_projectile from "./knight_assets/p2/_Projectile2.png";
import p2_pojectileHit from "./knight_assets/p2/_ThunderHit.png";
import p2_hitEffect from "./knight_assets/p2/_HitEffect.png";

// import idle from
const getAnimations = (
  context: CanvasRenderingContext2D,
  side: "left" | "right"
) => {
  const animations: Record<string, Sprite> = {};

  switch (side) {
    case "left":
      animations.idle = new Sprite(
        context,
        p1_idle,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        0,
        side
      );
      animations.walkForward = new Sprite(
        context,
        p1_walkFoward,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        0,
        side
      );
      animations.walkBackward = new Sprite(
        context,
        p1_walkBackward,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        0,
        side
      );
      animations.crouching = new Sprite(
        context,
        p1_crouch,
        120,
        80,
        3,
        3,
        -135,
        -130,
        2,
        4,
        1,
        side
      );
      animations.jumping = new Sprite(
        context,
        p1_jumping,
        120,
        80,
        3,
        3,
        -135,
        -130,
        3,
        4,
        0,
        side
      );
      animations.falling = new Sprite(
        context,
        p1_falling,
        120,
        80,
        3,
        3,
        -135,
        -130,
        3,
        4,
        0,
        side
      );
      animations.attack1 = new Sprite(
        context,
        p1_attack1,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        5,
        0,
        side
      );
      animations.attack2 = new Sprite(
        context,
        p1_attack2,
        120,
        80,
        3,
        3,
        -135,
        -130,
        6,
        4,
        0,
        side
      );
      animations.lowAttack = new Sprite(
        context,
        p1_lowAttack,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.dash = new Sprite(
        context,
        p1_dash,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.roll = new Sprite(
        context,
        p1_roll,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        3,
        0,
        side
      );
      animations.lowAttack2 = new Sprite(
        context,
        p1_attack2,
        120,
        80,
        3,
        3,
        -135,
        -130,
        6,
        6,
        0,
        side
      );
      animations.block = new Sprite(
        context,
        p1_Block,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.lowBlock = new Sprite(
        context,
        p1_lowBlock,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.hit = new Sprite(
        context,
        p1_hit,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.death = new Sprite(
        context,
        p1_death,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        9,
        side
      );
      animations.projectile = new Sprite(
        context,
        p1_projectile,
        48,
        48,
        1.5,
        1.5,
        -12,
        -22,
        16,
        2,
        8,
        side
      );
      animations.projectileHit = new Sprite(
        context,
        p1_pojectileHit,
        32,
        32,
        2.5,
        2.5,
        20,
        20,
        5,
        4,
        0,
        side
      );
      animations.hitEffect = new Sprite(
        context,
        p1_hitEffect,
        32,
        32,
        2.5,
        2.5,
        5,
        0,
        4,
        4,
        0,
        side
      );
      break;
    case "right":
      animations.idle = new Sprite(
        context,
        p2_idle,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        0,
        side
      );
      animations.walkForward = new Sprite(
        context,
        p2_walkFoward,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        0,
        side
      );
      animations.walkBackward = new Sprite(
        context,
        p2_walkBackward,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        0,
        side
      );
      animations.crouching = new Sprite(
        context,
        p2_crouch,
        120,
        80,
        3,
        3,
        -135,
        -130,
        2,
        4,
        1,
        side
      );
      animations.jumping = new Sprite(
        context,
        p2_jumping,
        120,
        80,
        3,
        3,
        -135,
        -130,
        3,
        4,
        0,
        side
      );
      animations.falling = new Sprite(
        context,
        p2_falling,
        120,
        80,
        3,
        3,
        -135,
        -130,
        3,
        4,
        0,
        side
      );
      animations.attack1 = new Sprite(
        context,
        p2_attack1,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        5,
        0,
        side
      );
      animations.attack2 = new Sprite(
        context,
        p2_attack2,
        120,
        80,
        3,
        3,
        -135,
        -130,
        6,
        4,
        0,
        side
      );
      animations.lowAttack = new Sprite(
        context,
        p2_lowAttack,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.dash = new Sprite(
        context,
        p2_dash,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.roll = new Sprite(
        context,
        p2_roll,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        3,
        0,
        side
      );
      animations.lowAttack2 = new Sprite(
        context,
        p2_attack2,
        120,
        80,
        3,
        3,
        -135,
        -130,
        6,
        6,
        0,
        side
      );
      animations.block = new Sprite(
        context,
        p2_Block,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.lowBlock = new Sprite(
        context,
        p2_lowBlock,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.hit = new Sprite(
        context,
        p2_hit,
        120,
        80,
        3,
        3,
        -135,
        -130,
        4,
        4,
        0,
        side
      );
      animations.death = new Sprite(
        context,
        p2_death,
        120,
        80,
        3,
        3,
        -135,
        -130,
        10,
        4,
        9,
        side
      );
      animations.projectile = new Sprite(
        context,
        p2_projectile,
        48,
        48,
        1.5,
        1.5,
        -12,
        -22,
        16,
        2,
        8,
        side
      );
      animations.projectileHit = new Sprite(
        context,
        p2_pojectileHit,
        32,
        32,
        2.5,
        2.5,
        20,
        20,
        6,
        4,
        0,
        side
      );
      animations.hitEffect = new Sprite(
        context,
        p2_hitEffect,
        32,
        32,
        3,
        3,
        5,
        0,
        4,
        4,
        0,
        side
      );
      break;
  }
  return animations;
};

class Knight extends Fighter {
  override movementSpeed: types.Velocity;
  override fighterDim: Record<"width" | "height", number>;
  color: string;
  animations: Record<string, Sprite>;
  tempSide: "left" | "right";
  maxHp: number;
  currentHp: number;
  hitBox: types.HitBox;
  projectileHitBox: types.HitBox;
  isGameOver: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    canvasDimension: types.Dimension,
    side: "left" | "right"
  ) {
    super(canvas, context, canvasDimension, side);

    this.movementSpeed = { forward: 5, backward: -4, down: 1, up: -16 };
    this.fighterDim = { width: 60, height: 110 };
    this.color = "red";

    if (side === "right") {
      this.color = "green";
    }

    this.animations = getAnimations(this.context, this.fighterState.side);
    this.tempSide = side;
    this.maxHp = 1000;
    this.currentHp = this.maxHp;
    this.hitBox = null;
    this.projectileHitBox = null;
    this.animations.projectileHit?.setIsFinished();
    this.animations.hitEffect?.setIsFinished();
    this.isGameOver = false;
  }

  draw() {
    this.context.fillStyle = this.color;

    // this.context.fillRect(
    //   this.position.x,
    //   this.position.y,
    //   this.fighterDim.width,
    //   this.fighterDim.height
    // );

    // if (this.hitBox !== null) {
    //   this.context.fillStyle = this.color;
    //   this.context.fillRect(
    //     this.hitBox.left,
    //     this.hitBox.top!,
    //     Math.abs(this.hitBox.right - this.hitBox.left),
    //     this.hitBox.bottom - this.hitBox.top
    //   );
    // }

    switch (this.fighterState.action) {
      case "walkForward":
        this.animations.walkForward?.draw(this.position.x, this.position.y);
        break;
      case "idle":
        this.animations.idle?.draw(this.position.x, this.position.y);
        break;
      case "walkBackward":
        this.animations.walkBackward?.draw(this.position.x, this.position.y);
        break;
      case "crouching":
        this.animations.crouching?.draw(this.position.x, this.position.y);
        break;
      case "jumping":
        this.animations.jumping?.draw(this.position.x, this.position.y);
        break;
      case "falling":
        this.animations.falling?.draw(this.position.x, this.position.y);
        break;
      case "lowAttack":
        this.animations.lowAttack?.draw(this.position.x, this.position.y);
        break;
      case "attack1":
        this.animations.attack1?.draw(this.position.x, this.position.y);
        break;
      case "attack2":
        this.animations.attack2?.draw(this.position.x, this.position.y);
        break;
      case "roll":
        this.animations.roll?.draw(this.position.x, this.position.y);
        break;
      case "dash":
        this.animations.dash?.draw(this.position.x, this.position.y);
        break;
      case "lowAttack2":
        this.animations.lowAttack2?.draw(this.position.x, this.position.y);
        break;
      case "block":
        this.animations.block?.draw(this.position.x, this.position.y);
        break;
      case "lowBlock":
        this.animations.lowBlock?.draw(this.position.x, this.position.y);
        break;
      case "hit":
        this.animations.hit?.draw(this.position.x, this.position.y);
        break;
      case "death":
        this.animations.death?.draw(this.position.x, this.position.y);
        break;
    }
  }

  drawProjectile() {
    if (this.projectileHitBox) {
      this.animations.projectile?.draw(
        this.projectileHitBox.left,
        this.projectileHitBox.top
      );
      // this.context.fillRect(
      //   this.projectileHitBox.left,
      //   this.projectileHitBox.top,
      //   this.projectileHitBox.right - this.projectileHitBox.left,
      //   this.projectileHitBox.bottom - this.projectileHitBox.top
      // );
    }
  }

  drawHitEffect() {
    if (!this.animations.projectileHit?.isFinished()) {
      this.animations.projectileHit?.draw(this.position.x, this.position.y);
    }

    if (!this.animations.hitEffect?.isFinished()) {
      this.animations.hitEffect?.draw(this.position.x, this.position.y);
    }
  }

  update(enemy: Knight) {
    if (this.isGameOver) {
      this.playerInputs = {
        left: false,
        right: false,
        up: false,
        down: false,
        attack1: false,
        attack2: false,
        dash: false,
      };
    }

    if (
      this.projectileHitBox &&
      this.animations.projectile?.getCurrentFrame()! >= 7
    ) {
      this.projectileHitBox.active = true;
      switch (this.animations.projectile?.getSide()) {
        case "left":
          this.projectileHitBox.left += 15;
          this.projectileHitBox.right += 15;
          break;
        case "right":
          this.projectileHitBox.left -= 15;
          this.projectileHitBox.right -= 15;
          break;
      }
    } else if (this.projectileHitBox) {
      switch (this.animations.projectile!.getSide()) {
        case "left":
          this.projectileHitBox.left =
            this.position.x + this.fighterDim.width + 40;
          this.projectileHitBox.right =
            this.position.x + this.fighterDim.width + 100;
          break;
        case "right": {
          this.projectileHitBox.left = this.position.x - 110;
          this.projectileHitBox.right = this.position.x - 50;
        }
      }
    }

    if (
      this.projectileHitBox !== null &&
      (this.projectileHitBox!.right < this.boundry.left! ||
        this.projectileHitBox!.left > this.boundry.right!)
    ) {
      this.projectileHitBox = null;
    }

    //determine player defensive state
    this.fighterState.defense = "notBlocking";
    if (
      this.fighterState.position === "grounded" &&
      this.fighterState.movement === "active"
    ) {
      switch (this.fighterState.side) {
        case "left":
          if (this.playerInputs.left && !this.playerInputs.right) {
            this.fighterState.defense = "highBlocking";
            if (this.playerInputs.down) {
              this.fighterState.defense = "lowBlocking";
            }
          }
          break;
        case "right":
          if (this.playerInputs.right && !this.playerInputs.left) {
            this.fighterState.defense = "highBlocking";
            if (this.playerInputs.down) {
              this.fighterState.defense = "lowBlocking";
            }
          }
          break;
      }
    }

    //determine and handle hitbox collision
    if (
      this.detectHitBoxCollision(enemy.hitBox) &&
      this.fighterState.movement != "recovering"
    ) {
      this.fighterState.movement = "recovering";

      switch (this.fighterState.side) {
        case "left":
          this.currentVelocity.x = -3;
          enemy.currentVelocity.x = 3;
          break;
        case "right":
          this.currentVelocity.x = 3;
          enemy.currentVelocity.x = -3;
          break;
      }

      let damage = enemy.hitBox!.damage;
      this.animations.hitEffect?.reset(this.fighterState.side);

      switch (enemy.hitBox!.type) {
        case "high":
          if (this.fighterState.defense === "highBlocking") {
            this.animations.block?.reset(this.fighterState.side);
            this.fighterState.action = "block";
          } else {
            this.animations.hit?.reset(this.fighterState.side);
            this.fighterState.action = "hit";
            this.currentHp -= damage;
          }
          break;
        case "mid":
          if (this.fighterState.defense === "highBlocking") {
            this.animations.block?.reset(this.fighterState.side);
            this.fighterState.action = "block";
          } else if (this.fighterState.defense === "lowBlocking") {
            this.animations.lowBlock?.reset(this.fighterState.side);
            this.fighterState.action = "lowBlock";
          } else {
            this.animations.hit?.reset(this.fighterState.side);
            this.fighterState.action = "hit";
            this.currentHp -= damage;
          }
          break;
        case "low":
          if (this.fighterState.defense === "lowBlocking") {
            this.animations.lowBlock?.reset(this.fighterState.side);
            this.fighterState.movement = "recovering";
            this.fighterState.action = "lowBlock";
          } else {
            this.animations.hit?.reset(this.fighterState.side);
            this.fighterState.action = "hit";
            this.currentHp -= damage;
          }
          break;
      }
    }

    //handels projectile hits
    if (
      this.detectHitBoxCollision(enemy.projectileHitBox) &&
      this.fighterState.movement != "recovering" &&
      this.fighterState.action != "roll"
    ) {
      this.fighterState.movement = "recovering";

      switch (this.fighterState.side) {
        case "left":
          this.currentVelocity.x = -2;
          break;
        case "right":
          this.currentVelocity.x = 2;
          break;
      }

      let damage = enemy.projectileHitBox!.damage;
      this.animations.projectileHit?.reset(this.fighterState.side);

      if (this.fighterState.defense === "highBlocking") {
        this.animations.block?.reset(this.fighterState.side);
        this.fighterState.action = "block";
        this.currentHp -= 10;
      } else if (this.fighterState.defense === "lowBlocking") {
        this.animations.lowBlock?.reset(this.fighterState.side);
        this.fighterState.action = "lowBlock";
        this.currentHp -= 10;
      } else {
        this.animations.hit?.reset(this.fighterState.side);
        this.fighterState.action = "hit";
        this.currentHp -= damage;
      }

      enemy.projectileHitBox = null;
    }

    //round off hp if it goes below zero
    if (this.currentHp <= 0) {
      this.fighterState.movement = "death";
      this.fighterState.action = "death";
      this.currentVelocity.x = 0;
      this.currentHp = 0;
    }

    if (
      this.fighterState.position == "grounded" &&
      this.fighterState.movement === "active"
    ) {
      //adjust walk speed base on player side and reset velocity
      this.currentVelocity.x = 0;
      let forwardSpeed =
        this.fighterState.side === "left"
          ? this.movementSpeed.forward
          : -this.movementSpeed.backward;
      let backwardSpeed =
        this.fighterState.side == "left"
          ? this.movementSpeed.backward
          : -this.movementSpeed.forward;

      //jumping handler
      if (this.playerInputs.up) {
        this.fighterState.position = "airborne";
        this.tempSide = this.fighterState.side;
        this.currentVelocity.y = this.movementSpeed.up;

        if (this.playerInputs.right) {
          this.currentVelocity.x = forwardSpeed * 1;
        } else if (this.playerInputs.left) {
          this.currentVelocity.x = backwardSpeed * 1;
        }

        if (this.fighterState.action !== "jumping") {
          this.fighterState.action = "jumping";
          this.animations.jumping?.reset(this.fighterState.side);
        }
        //crouching handler
      } else if (this.playerInputs.down) {
        this.currentVelocity.x = 0;

        //perform low attack
        if (this.playerInputs.attack1) {
          this.animations.lowAttack?.reset(this.fighterState.side);
          this.fighterState.movement = "attacking";
          this.fighterState.action = "lowAttack";
          //perform low attack 2
        } else if (
          this.playerInputs.attack2 &&
          this.projectileHitBox === null
        ) {
          this.animations.lowAttack2?.reset(this.fighterState.side);
          this.animations.lowAttack2?.reset(this.fighterState.side);
          this.animations.projectile?.reset(this.fighterState.side);
          this.fighterState.movement = "attacking";
          this.fighterState.action = "lowAttack2";
          //perform roll
        } else if (this.playerInputs.dash) {
          this.animations.roll?.reset(this.fighterState.side);
          this.fighterState.movement = "attacking";
          this.fighterState.action = "roll";

          if (this.fighterState.side === "left") {
            this.currentVelocity.x = forwardSpeed * 0.7;
          } else {
            this.currentVelocity.x = forwardSpeed * -0.7;
          }
        } else {
          //remain crouching if no attack button was pressed
          if (this.fighterState.action !== "crouching") {
            this.animations.crouching?.reset(this.fighterState.side);
            this.fighterState.action = "crouching";
          }
        }
        //perform attack1
      } else if (this.playerInputs.attack1) {
        this.animations.attack1?.reset(this.fighterState.side);
        this.fighterState.movement = "attacking";
        this.fighterState.action = "attack1";
        //perform attack2
      } else if (this.playerInputs.attack2) {
        this.animations.attack2?.reset(this.fighterState.side);
        this.fighterState.movement = "attacking";
        this.fighterState.action = "attack2";
        //perform dash
      } else if (this.playerInputs.dash) {
        this.animations.dash?.reset(this.fighterState.side);
        this.fighterState.movement = "attacking";
        this.fighterState.action = "dash";

        if (this.fighterState.side === "left") {
          this.currentVelocity.x = forwardSpeed * 1.5;
        } else {
          this.currentVelocity.x = forwardSpeed * -1.5;
        }
        //moves forward
      } else if (this.playerInputs.right) {
        this.currentVelocity.x = forwardSpeed;

        switch (this.fighterState.side) {
          case "left":
            if (this.fighterState.action !== "walkForward") {
              this.fighterState.action = "walkForward";
              this.animations.walkForward?.reset(this.fighterState.side);
            }
            break;
          case "right":
            if (this.fighterState.action !== "walkBackward") {
              this.fighterState.action = "walkBackward";
              this.animations.walkBackward?.reset(this.fighterState.side);
            }
            break;
        }
        //moves backward
      } else if (this.playerInputs.left) {
        this.currentVelocity.x = backwardSpeed;

        switch (this.fighterState.side) {
          case "left":
            if (this.fighterState.action !== "walkBackward") {
              this.fighterState.action = "walkBackward";
              this.animations.walkBackward?.reset(this.fighterState.side);
            }
            break;
          case "right":
            if (this.fighterState.action !== "walkForward") {
              this.fighterState.action = "walkForward";
              this.animations.walkForward?.reset(this.fighterState.side);
            }
            break;
        }
      } else {
        if (this.fighterState.action !== "idle") {
          this.fighterState.action = "idle";
          this.animations.idle?.reset(this.fighterState.side);
        } else {
          this.animations.idle?.setSide(this.fighterState.side);
        }
      }
    } else if (this.fighterState.movement === "attacking") {
      let attackType: "mid" | "high" =
        this.fighterState.position === "airborne" ? "high" : "mid";

      switch (this.fighterState.action) {
        case "attack1":
          if (this.animations.attack1?.isFinished()) {
            this.fighterState.movement = "active";
          }
          if (this.animations.attack1?.currentFrame == 2) {
            switch (this.animations.attack1.getSide()) {
              case "left":
                this.hitBox = {
                  active: true,
                  damage: 100,
                  type: attackType,
                  left: this.position.x + this.fighterDim.width,
                  right: this.position.x + this.fighterDim.width + 120,
                  top: this.position.y + 25,
                  bottom: this.position.y + 85,
                };
                break;
              case "right":
                this.hitBox = {
                  active: true,
                  damage: 100,
                  type: attackType,
                  left: this.position.x - 120,
                  right: this.position.x,
                  top: this.position.y + 25,
                  bottom: this.position.y + 85,
                };
                break;
              default:
                this.hitBox = null;
                break;
            }
          } else {
            this.hitBox = null;
          }
          break;
        case "attack2":
          if (this.animations.attack2?.isFinished()) {
            this.fighterState.movement = "active";
          }

          if (
            this.animations.attack2?.currentFrame == 3 ||
            this.animations.attack2?.currentFrame == 4
          ) {
            switch (this.animations.attack2.getSide()) {
              case "left":
                this.hitBox = {
                  active: true,
                  damage: 135,
                  type: attackType,
                  left: this.position.x + this.fighterDim.width,
                  right: this.position.x + this.fighterDim.width + 110,
                  top: this.position.y + 25,
                  bottom: this.position.y + 85,
                };
                break;
              case "right":
                this.hitBox = {
                  active: true,
                  damage: 135,
                  type: attackType,
                  left: this.position.x - 110,
                  right: this.position.x,
                  top: this.position.y + 25,
                  bottom: this.position.y + 85,
                };
                break;
              default:
                this.hitBox = null;
                break;
            }
          } else {
            this.hitBox = null;
          }

          break;
        case "lowAttack":
          if (this.animations.lowAttack?.isFinished()) {
            this.fighterState.movement = "active";
          }

          if (
            this.animations.lowAttack?.currentFrame == 2 ||
            this.animations.lowAttack?.currentFrame == 3
          ) {
            switch (this.animations.lowAttack?.getSide()) {
              case "left":
                this.hitBox = {
                  active: true,
                  damage: 100,
                  type: "low",
                  left: this.position.x + this.fighterDim.width,
                  right: this.position.x + this.fighterDim.width + 95,
                  top: this.position.y + 45,
                  bottom: this.position.y + 85,
                };
                break;
              case "right":
                this.hitBox = {
                  active: true,
                  damage: 100,
                  type: "low",
                  left: this.position.x - 95,
                  right: this.position.x,
                  top: this.position.y + 45,
                  bottom: this.position.y + 85,
                };
                break;
              default:
                this.hitBox = null;
                break;
            }
          } else {
            this.hitBox = null;
          }
          break;

        case "lowAttack2":
          if (this.animations.lowAttack2?.isFinished()) {
            this.fighterState.movement = "active";
          }

          if (this.animations.lowAttack2?.currentFrame == 1) {
            switch (this.animations.lowAttack2.getSide()) {
              case "left":
                this.projectileHitBox = {
                  active: false,
                  damage: 80,
                  type: "mid",
                  left: this.position.x + this.fighterDim.width + 40,
                  right: this.position.x + this.fighterDim.width + 100,
                  top: this.position.y + 42,
                  bottom: this.position.y + 68,
                };
                break;
              case "right":
                this.projectileHitBox = {
                  active: false,
                  damage: 80,
                  type: "mid",
                  left: this.position.x - 100,
                  right: this.position.x - 40,
                  top: this.position.y + 42,
                  bottom: this.position.y + 68,
                };
            }
          }

          break;
        case "dash":
          if (this.animations.dash?.isFinished()) {
            this.fighterState.movement = "active";
          }
          break;
        case "roll":
          if (this.animations.roll?.isFinished()) {
            this.fighterState.movement = "active";
          }
          break;
      }
    } else if (this.fighterState.movement === "recovering") {
      switch (this.fighterState.action) {
        case "block":
          if (this.animations.block?.isFinished()) {
            this.fighterState.movement = "active";
          }
          break;
        case "lowBlock":
          if (this.animations.lowBlock?.isFinished()) {
            this.fighterState.movement = "active";
          }
          break;
        case "hit":
          if (this.animations.hit?.isFinished()) {
            this.fighterState.movement = "active";
          }
          break;
      }
    } else if (this.fighterState.position === "airborne") {
      if (
        this.playerInputs.attack1 &&
        this.fighterState.airAttack === "available" &&
        this.position.y < this.boundry.down! - 60
      ) {
        this.animations.attack1?.reset(this.fighterState.side);
        this.fighterState.movement = "attacking";
        this.fighterState.action = "attack1";
        this.fighterState.airAttack = "used";
      } else if (
        this.playerInputs.attack2 &&
        this.fighterState.airAttack === "available" &&
        this.position.y < this.boundry.down! - 60
      ) {
        this.animations.attack2?.reset(this.fighterState.side);
        this.fighterState.movement = "attacking";
        this.fighterState.action = "attack2";
        this.fighterState.airAttack = "used";
      } else if (
        this.currentVelocity.y > 0 &&
        this.fighterState.action !== "falling"
      ) {
        this.fighterState.action = "falling";
        this.animations.falling?.reset(this.tempSide);
      }
    }

    //update position
    this.position.x += this.currentVelocity.x;
    this.position.y += this.currentVelocity.y;

    const mySideDims: types.SideDims = this.getSideDims;
    const enemySideDims: types.SideDims = enemy.getSideDims;

    //controls side switches
    if (mySideDims.center < enemySideDims.center) {
      this.fighterState.side = "left";
      enemy.fighterState.side = "right";
    } else if (mySideDims.center > enemySideDims.center) {
      this.fighterState.side = "right";
      enemy.fighterState.side = "left";
    }

    //if ground collision occurred, fix position
    this.detectGroundCollision();

    //pop out enemy if collision occurred
    if (this.detectBoxCollision(enemy)) {
      this.popOut(enemy);
    }

    //if enemy hits wall, adjust position
    enemy.detectSideCollision();

    //pop out enemy if collision occurred
    if (enemy.detectBoxCollision(this)) {
      enemy.popOut(this);
    }

    this.detectSideCollision();
  }
}

export default Knight;
