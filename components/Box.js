import { View, Image } from "react-native";
import Matter from "matter-js";
import Images from "../Images";
const Box = (props) => {
  const width = props.size.width;
  const height = props.size.height;
  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  return (
    <Image
      style={{
        width: props.size.width,
        height: props.size.height,
        left: xPos,
        top: yPos,
        position: "absolute",
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  );
};

export default (world, color, pos, size, extraOptions) => {
  const theBox = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: extraOptions.label,
      frictionAir: 0,
      angularVelocity: 0,
      restitution: extraOptions.restitution,
      mass: 1,
      friction: 0,
      frictionStatic: 0,
      isStatic: extraOptions.isStatic,
      isSleeping: extraOptions.isSleeping,
      velocity: { x: 1, y: 1 },
      Images: extraOptions.image
    }
  );
  Matter.World.add(world, theBox);
  return { body: theBox, color, pos, size, extraOptions, renderer: <Box /> };
};
