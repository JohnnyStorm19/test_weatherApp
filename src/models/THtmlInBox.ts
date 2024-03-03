import { Euler, Vector3 } from "@react-three/fiber";
import { IRequest } from "./IRequest";

export type THtmlInBox = {
    position: Vector3 | undefined;
    index: number;
    rotation: Euler | undefined;
    weatherData: IRequest;
  };