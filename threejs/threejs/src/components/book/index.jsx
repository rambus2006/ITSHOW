import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthDayMap from "../../assets/img/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/img/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/img/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/img/8k_earth_clouds.jpg";

export default function Book() {
  
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  
  const earthRef = useRef();
  const cloudsRef = useRef();
//회전을 위해
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      
      <mesh ref={cloudsRef}>
    {/* sphereGeometry의 인자는 순서대로 반지름, 너비, 높이 이다 */}
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}