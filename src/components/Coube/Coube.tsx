import { Euler, Vector3 } from "@react-three/fiber";
import HtmlInBox from "../HtmlInBox/HtmlInBox";
import { useFetchData } from "../../hooks/useFetchData";

const sidePositions = [
  [0, 0, 0.51], // Front
  [0, 0, -0.51], // Back
  [0, 0.51, 0], // Top
  [0, -0.51, 0], // Bottom
  [0.51, 0, 0], // Right
  [-0.51, 0, 0], // Left
];

const sideRotations = [
  [0, 0, 0], // Front
  [0, Math.PI, 0], // Back
  [-Math.PI / 2, 0, 0], // Top
  [Math.PI / 2, 0, 0], // Bottom
  [0, Math.PI / 2, 0], // Right
  [0, -Math.PI / 2, 0], // Left
];

function Coube() {
  const { data } = useFetchData();

  if (data) {
    console.log(data);
  }

  return (
    <>
      {data && (
        <mesh scale={1}>
          <boxGeometry />
          <meshStandardMaterial />
          <group>
            {sidePositions.map((position, index) => (
              <HtmlInBox
                key={index}
                position={position as Vector3}
                index={index}
                rotation={sideRotations[index] as Euler}
                weatherData={data}
              />
            ))}
          </group>
        </mesh>
      )}
    </>
  );
}

export default Coube;
