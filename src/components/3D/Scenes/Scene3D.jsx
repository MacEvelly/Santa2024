import React from "react";
import { Box, Stage } from "../";
import { Plane } from "@react-three/drei";
//import { Player } from "../elements/Player";

export function Scene3D() {
  return (
    <Stage>
      <Box position={[-1.2, 1, 0]} castShadow receiveShadow />
      <Box position={[1.2, 1, 0]} castShadow receiveShadow />
      <Plane
        position={[0, 0.05, 0]}
        args={[50, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial />
      </Plane>
    </Stage>
  );
}
