var camera,
  scene,
  renderer,
  mouseX = 0,
  mouseY = 0,
  windowHalfX = window.innerWidth / 2,
  windowHalfY = window.innerHeight / 2,
  SEPARATION = 200,
  AMOUNTX = 1,
  AMOUNTY = 1;
function init() {
  var e,
    n,
    o = 16777215;
  (e = document.getElementById("canvas")),
    ((camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1e4
    )).position.z = 100),
    (scene = new THREE.Scene()),
    (renderer = new THREE.CanvasRenderer({ alpha: !0 })).setPixelRatio(window.devicePixelRatio),
    renderer.setClearColor(0, 0),
    renderer.setSize(window.innerWidth, window.innerHeight),
    e.appendChild(renderer.domElement);
  for (
    var i = 2 * Math.PI,
      t = new THREE.SpriteCanvasMaterial({
        color: o,
        opacity: 0.6,
        program: function (e) {
          e.beginPath(), e.arc(0, 0, 0.5, 0, i, !0), e.fill();
        },
      }),
      a = new THREE.Geometry(),
      r = 0;
    r < 150;
    r++
  )
    ((n = new THREE.Sprite(t)).position.x = 2 * Math.random() - 1),
      (n.position.y = 2 * Math.random() - 1),
      (n.position.z = 2 * Math.random() - 1),
      n.position.normalize(),
      n.position.multiplyScalar(10 * Math.random() + 600),
      (n.scale.x = n.scale.y = 5),
      scene.add(n),
      a.vertices.push(n.position);
  var d = new THREE.Line(a, new THREE.LineBasicMaterial({ color: o, opacity: 0.6 }));
  scene.add(d),
    document.addEventListener("mousemove", onDocumentMouseMove, !1),
    document.addEventListener("touchstart", onDocumentTouchStart, !1),
    document.addEventListener("touchmove", onDocumentTouchMove, !1),
    window.addEventListener("resize", onWindowResize, !1);
}
function onWindowResize() {
  (windowHalfX = window.innerWidth / 2),
    (windowHalfY = window.innerHeight / 2),
    (camera.aspect = window.innerWidth / window.innerHeight),
    camera.updateProjectionMatrix(),
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function onDocumentMouseMove(e) {
  (mouseX = 0.05 * (e.clientX - windowHalfX)), (mouseY = 0.2 * (e.clientY - windowHalfY));
}
function onDocumentTouchStart(e) {
  1 < e.touches.length &&
    (e.preventDefault(),
    (mouseX = 0.7 * (e.touches[0].pageX - windowHalfX)),
    (mouseY = 0.7 * (e.touches[0].pageY - windowHalfY)));
}
function onDocumentTouchMove(e) {
  1 == e.touches.length &&
    (e.preventDefault(),
    (mouseX = e.touches[0].pageX - windowHalfX),
    (mouseY = e.touches[0].pageY - windowHalfY));
}
function animate() {
  requestAnimationFrame(animate), render();
}
function render() {
  (camera.position.x += 0.1 * (mouseX - camera.position.x)),
    (camera.position.y += 0.05 * (200 - mouseY - camera.position.y)),
    (scene.rotation.x += 99e-5),
    (scene.rotation.y += 99e-5),
    camera.lookAt(scene.position),
    renderer.render(scene, camera);
}
init(), animate();
