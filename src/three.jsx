import * as React from "react";
import { Canvas, useFrame } from "react-three-fiber";

function Thing() {
  const ref1 = React.useRef();
  useFrame(() => (ref1.current.rotation.x = ref1.current.rotation.y += 0.01));

  const ref = React.useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.007));

  return (
    <>
      <mesh
        ref={ref1}
        onClick={e => console.log("click")}
        onPointerOver={e => console.log("hover")}
        onPointerOut={e => console.log("unhover")}
      >
        {/*
        var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        var cube = new THREE.Mesh( geometry, material );
      */}
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      aaaa
      <mesh
        ref={ref}
        onClick={e => console.log("click")}
        onPointerOver={e => console.log("hover")}
        onPointerOut={e => console.log("unhover")}
      >
        {/*
        var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        var cube = new THREE.Mesh( geometry, material );
      */}
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshBasicMaterial attach="material" args={{ color: 0x00ff00 }} />
        {/* <meshNormalMaterial attach="material" /> */}
      </mesh>
    </>
  );
}

export const Three = () => (
  <Canvas>
    <Thing />
  </Canvas>
);
