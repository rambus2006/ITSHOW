// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls, Loader } from '@react-three/drei';

// function Model() {
//   const gltfUrl = '/book.glb'; // Replace with your actual path

//   const { nodes, materials } = useLoader(GLTFLoader, gltfUrl); // Load GLTF model

//   return (
//     <primitive object={nodes.book} /> // Replace 'book' with the name of your object in GLTF file
//   );
// }

// function App() {
//   return (
//     <div className='canvas-container'>
//       <Canvas
//         camera={{ position: [5, 5, 5] }}
//         style={{ width: '100%', height: '100vh', background: 'blue' }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight color='white' intensity={0.5} position={[0, 10, 0]} />
//         <Suspense fallback={<Loader />}>
//           <Model />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// export default App;
