import Matter from "matter-js";
import React from "react";
import { View, Image } from "react-native";
import Images from "../Images";

const Boundary = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  const verticalImageIterations = Math.ceil(height / width); //10
  const horizontalImageIterations = Math.ceil(width / height);

  return (
    <View
      style={{
        position: "absolute",
        left: xPos,
        top: yPos,
        width: width,
        height: height,
        overflow: "hidden",
        //flexDirection: height > width ? "column" : "row",
        backgroundColor: props.color,
      }}
    >
      {/* {Array.apply(
        null,
        Array(
          height > width ? verticalImageIterations : horizontalImageIterations
        )
      ).map((el, idx) => {
        return (
          <Image
            style={{
              width: height > width ? width : height,
              height: height > width ? width : height,
            }}
            key={idx}
            resizeMode="stretch"
            source={Images.boundary}
          />
        );
      })} */}
    </View>
  );
};

export default (world, color, pos, size) => {
  const boundary = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Boundary",
      isStatic: true,
    }
  );
  Matter.World.add(world, boundary);
  return { body: boundary, color, pos, size, renderer: <Boundary /> };
};
