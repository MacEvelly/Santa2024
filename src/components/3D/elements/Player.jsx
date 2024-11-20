//import { EcctrlAnimation, EcctrlJoystick } from "ecctrl";
import { Character } from "../../../assets";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
/**
 * Keyboard control preset
 */
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
  { name: "action1", keys: ["1"] },
  { name: "action2", keys: ["2"] },
  { name: "action3", keys: ["3"] },
  { name: "action4", keys: ["KeyF"] },
];

/**
 * Character animation set preset
 */
const animationSet = {
  idle: "CharacterArmature|Idle",
  walk: "CharacterArmature|Walk",
  run: "CharacterArmature|Run",
  jump: "CharacterArmature|Jump",
  jumpIdle: "CharacterArmature|Jump_Idle",
  jumpLand: "CharacterArmature|Jump_Land",
  fall: "CharacterArmature|Duck",
  action1: "CharacterArmature|Wave",
  action2: "CharacterArmature|Death",
  action3: "CharacterArmature|HitReact",
  action4: "CharacterArmature|Punch",
};

// export function Player() {
//   const { scene, materials, animations } = useGLTF(Player);
//   const { group, actions } = useAnimations(animations, scene);
//   return (
//     <EcctrlAnimation characterURL={Player} animationSet={animationSet}>
//       <CharacterModel />
//     </EcctrlAnimation>
//   );
// }

export function Player(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(Character);
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Santa_Armature"
          position={[-1.876, -1.371, 4.503]}
          rotation={[1.544, -0.019, 0.002]}
        >
          <skinnedMesh
            name="Santa"
            geometry={nodes.Santa.geometry}
            material={materials.Santa_texture}
            skeleton={nodes.Santa.skeleton}
          />
          <primitive object={nodes.Root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(Character);
