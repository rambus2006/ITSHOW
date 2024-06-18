import { Canvas } from "@react-three/fiber";

function CustomCanvas() {
  const cameraRef = useRef<Camera>(null);

  return (
    <Canvas>
      <ambientLight />
      <directionalLight />
      {/* 카메라와 컨트롤러 */}
      {/*<PerspectiveCamera
        ref={cameraRef}
        makeDefault={true}
        position={[0, 0, 50]}
      />
      <OrbitControls
        camera={cameraRef.current}
        makeDefault={true}
        enableZoom={false}
      />*/}
      <Suspense fallback={null}>
        <WolfMesh position={[0, 0, -10]} />
      </Suspense>
    </Canvas>
  );
}
export default CustomCanvas