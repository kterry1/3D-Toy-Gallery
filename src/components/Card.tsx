import React, {useRef, Suspense} from 'react';
import {Card} from 'react-bootstrap';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {Canvas, useFrame,
    useLoader} from 'react-three-fiber';
const Card3D = ({image, title, content, location, objPos, camPos}: {image: any, title: string, content: string, location: string, objPos: number[], camPos: [number, number, number]}) => {
    function Car() {
        const ref = useRef();
        const gltf = useLoader(GLTFLoader, location);
        useFrame(() => {
          const reference: any = ref.current;
          reference.rotation.x += 0;
          reference.rotation.y += 0.004;
        });
        return <primitive ref={ref} object={gltf.scene} position={objPos} />;
      }

      function Scene() {
        return (
          <>
            <ambientLight />
            <spotLight castShadow={true}  intensity={.8} position={[10, 20, 20]} />
            <Suspense fallback={null}>
              <Car />
            </Suspense>
          </>
        );
      }
    return (
        <div>
        <Card>
              <Canvas
              style={{ height: "300px", backgroundColor: "var(--navbar-bg-color)", borderRadius: "30px"}}
        // shadowMap={true}
        camera={{
          position: camPos,
          near: 1,
          far: 500,
        }}
      >
        <Suspense fallback={null}>
            <Scene/>
        </Suspense>
      </Canvas>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {content}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
}

export default Card3D;