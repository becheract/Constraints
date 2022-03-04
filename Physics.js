//physics.js
import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";
import Images from "./Images";

//Create a random function for obtanining a random value between provided range
const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Physics = (entities, { touches, dispatch, events, time }) => {
  let engine = entities.physics.engine;

  /* 
    Code for swipe motion on the screen here
    1. Swiping the screen must  move Mr. C towards the direction of the swipe
  */

    let x = entities.CBox.body.position.x;
    let y = entities.CBox.body.position.y;
    touches
      .filter((t) => t.type === "move")
      .forEach((t) => {
        x += t.delta.pageX;
        y += t.delta.pageY;
        Matter.Body.setPosition(entities.CBox.body, {
          x: x,
          y: y,
        });
      });
  

  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;
    /*
      1. Check to see the collision between Mr. C and either of Mr. K amd Ms. C
      2. If Mr. C collides with Mr. K, place Mr. K in the bottom left cell whereas if collision\
          is with Ms. B, place her in bottom right cell
      3. You must also set a random velocity for both Mr. K and Ms. C after placing them in their cell
    */
      if (objALabel === "Mr.K" && objBLabel === "Mr.C") {
        //Matter.Body.scale(objB, 1.01, 1.01);
        //Matter.Body.setVelocity(entities.Enemy.body, { x: 3, y: 0 });
        console.log("work?")
        Matter.Body.setPosition(objA, {
          x: 100,
          y: 500,
        });
        Sleeping.set(objB, true);
        Matter.Body.setVelocity(entities.KBox.body, {x: randomBetween(10,20), y :randomBetween(20,40)});
      }else if
       (objALabel === "Mr.C" && objBLabel === "Ms.B") {
        //Matter.Body.scale(objB, 1.01, 1.01);
        //Matter.Body.setVelocity(entities.Enemy.body, { x: 3, y: 0 });
  
        Matter.Body.setPosition(objB, {
          x: 300,
          y: 400,
        });
        Sleeping.set(objA, true);
        Matter.Body.setVelocity(entities.BBox.body, {x: randomBetween(10,20), y :randomBetween(20,40)});
        //Sleeping.set(objB, true);
      }
  });
  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
