// 场景，相机，渲染器
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
for ( var i = 0; i < geometry.faces.length; i += 2 ) {
    var hex = Math.random() * 0xffffff;
    geometry.faces[ i ].color.setHex( hex );
    geometry.faces[ i + 1 ].color.setHex( hex );

}
var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

(function initGrid(){
    // 网格的边长是1000，每个小网格的边长是50
    var helper = new THREE.GridHelper( 1000, 50 );
    // helper.setColors( 0x0000ff, 0x808080 );
    scene.add( helper );
})();


camera.position.z = 5;
camera.position.y = 3;
camera.position.x = 0;
// 相机的焦点
camera.lookAt({
    x : 0,
    y : 0,
    z : 0
});


var flag = false;
var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  camera.position.y += 0.002;
  camera.position.z += 0.002;

  renderer.render(scene, camera);
};

render();
