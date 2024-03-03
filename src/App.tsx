import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Coube from "./components/Coube/Coube";
import { Suspense } from "react";

function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
      <ambientLight intensity={1} />
      <directionalLight />
      <color attach="background" args={["rgb(13, 146, 118)"]} />
      <Suspense fallback={null}>
        <Coube />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
