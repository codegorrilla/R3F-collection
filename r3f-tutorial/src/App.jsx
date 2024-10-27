import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { FirstPersonControls } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

function AnimatedBox() {
	const boxRef = useRef();
	useFrame(() => {
		//Animtion code
		boxRef.current.rotation.x += 0.005;
		boxRef.current.rotation.y += 0.005;
		boxRef.current.rotation.z += 0.005;
	});
	return (
		<mesh ref={boxRef}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={0x0bbfff} wireframe />
		</mesh>
	);
}

function App() {
	return (
		<div id='canvas-container'>
			<Canvas>
				{/* <Canvas camera={{ position: [2, 2, 2] }}> */}
				{/* <mesh position={[-2, 2, -3]} scale={[2, 0.5, 2]}> */}
				{/* <mesh rotation={[Math.PI / 2, 0, 0]}> */}
				{/* <sphereGeometry args={[3, 80, 80]} />
					<meshBasicMaterial wireframe /> */}
				{/* <boxGeometry args={[2, 3, 2]} /> */}
				{/* <meshBasicMaterial color='deepskyblue' /> */}
				{/* <meshPhongMaterial color={0x00bfff} /> */}
				{/* <meshPhysicalMaterial color={0x00bfff} /> */}
				{/* <meshStandardMaterial color={0x00bfff} /> */}
				{/* <torusKnotGeometry args={[1.7, 0.3, 256, 256]} />
					<meshToonMaterial color={0x00bfff} />
				</mesh>
				<directionalLight position={[4, 2, 3]} /> */}
				{/* <FirstPersonControls movementSpeed={3} autoForward={true} /> */}
				{/* <axesHelper args={[10]} /> */}
				<gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} />
				<OrbitControls />
				<AnimatedBox />
				<directionalLight position={[4, 2, 3]} />
			</Canvas>
		</div>
	);
}

export default App;
