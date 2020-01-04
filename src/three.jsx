import * as React from "react";
import { Canvas, useFrame } from "react-three-fiber";

function Thing() {
  const ref = React.useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
  return (
    <mesh
      ref={ref}
      onClick={e => console.log("click")}
      onPointerOver={e => console.log("hover")}
      onPointerOut={e => console.log("unhover")}
    >
      <boxBufferGeometry attach="geometry" args={[3, 5, 2]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export const Three = () => (
  <Canvas>
    <Thing />
  </Canvas>
);
