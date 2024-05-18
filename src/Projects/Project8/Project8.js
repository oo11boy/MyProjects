
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Suspense } from "react";

const Scene = () => {
  const fbx = useFBX("./Poimandres.fbx");

  return <primitive object={fbx} scale={0.005} />;
};

export default function Project8() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
