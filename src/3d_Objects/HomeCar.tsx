import React, { useRef, Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Canvas,
  useFrame,
  useLoader,
} from "react-three-fiber";

const HomeCar =  () => {

  function Car() {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, "/scene.gltf");
    useFrame(() => {
      const reference: any = ref.current;
      reference.rotation.x += 0;
      reference.rotation.y += 0.05;
    });
    return <primitive ref={ref} object={gltf.scene} position={[0, 2, 10]} />;
  }

  function Scene() {
    return (
      <>
        <ambientLight />
        <spotLight castShadow={true}  intensity={.5} position={[10, 20, 20]} />
        <Suspense fallback={null}>
          <Car />
        </Suspense>
      </>
    );
  }

  return (
    <div>
      <div className="text-bubble"><div>Whooooaaa! I'm getting dizzy here! Take a look around while I figure out this steering wheel.</div></div>
      <Canvas
      style={{display: "block", width: "300px", height: "800px", margin: "auto", position: "relative", bottom: "16rem"}}
        shadowMap={true}
        camera={{
          position: [0, 5, 16],
          near: 5,
          far: 15,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HomeCar;
