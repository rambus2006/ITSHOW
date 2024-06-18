import * as THREE from 'three';
import FBXLoader from 'three-fbx-loader';

var loader = new FBXLoader();

var scene = new THREE.Scene();

loader.load('/models/book.fbx', function (object3d) {
  scene.add(object3d);
});

// 이후 Three.js의 렌더링 루프 등을 설정할 수 있습니다.
