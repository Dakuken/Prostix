import { GLTFLoader } from './GLTFLoader.js';
import sheet from './style.css';
import * as THREE from 'https://unpkg.com/three@0.138.3/build/three.module.js';
// Setup

const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xff0000,0 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

const backloader = new THREE.TextureLoader();
backloader.load('images/back.png' , function(texture){
  scene.background = texture;  
});


renderer.setClearColor(0xffff4f, 0)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(0);
camera.position.setY(30)
renderer.render(scene, camera);






var pouet
// X on essaie

const loader = new GLTFLoader();
loader.load( 'x.glb', function ( gltf ) { 
  pouet = gltf.scene.children[0];
  var center = new THREE.Vector3();
  pouet.geometry.computeBoundingBox();
  pouet.geometry.boundingBox.getCenter(center);
  pouet.geometry.center();
  pouet.position.copy(center);

  pouet.rotation.set(4.7,0,-0.1); 
  pouet.position.set(20,31,0);
  pouet.scale.set(15,15,15);
  scene.add( (gltf.scene) );
  

}, undefined, function ( error ) {

	console.error( error );

} );
// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);


// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   // camera.rotation.z = t * 0.01;
//   camera.rotation.y = t * 0.001;
//   camera.position.x += t * 0.001;
//   camera.position.z += t * -0.0009
//   // camera.rotation.y = t * 0.001;
// }

// document.body.onscroll = moveCamera;
// moveCamera();
// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);


function animate() {
  const t = document.body.getBoundingClientRect().top;
  requestAnimationFrame(animate)
  renderer.render(scene, camera);
  if (pouet){ 
    pouet.rotation.z +=0.01; 


  }
}
animate();