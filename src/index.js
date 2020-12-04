import "./style.css";
import * as THREE from "three";

// world
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xf0d281);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// object
const obj = new THREE.BoxBufferGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xedbd3b });
const cube = new THREE.Mesh(obj, material);
scene.add(cube);

camera.position.z = 2;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
