(THREE.SpriteCanvasMaterial = function (e) {
  THREE.Material.call(this),
    (this.type = "SpriteCanvasMaterial"),
    (this.color = new THREE.Color(16777215)),
    (this.program = function (e, t) {}),
    this.setValues(e);
}),
  (THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial),
  (THREE.SpriteCanvasMaterial.prototype.clone = function () {
    var e = new THREE.SpriteCanvasMaterial();
    return (
      THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      (e.program = this.program),
      e
    );
  }),
  (THREE.CanvasRenderer = function (e) {
    // console.log("THREE.CanvasRenderer", THREE.REVISION);
    var d = THREE.Math.smoothstep;
    e = e || {};
    var a,
      s,
      m,
      x,
      l,
      c,
      p,
      y,
      R,
      u,
      v,
      S,
      T,
      g,
      H,
      w,
      C,
      M,
      b,
      L,
      B = this,
      E = new THREE.Projector(),
      n = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
      f = n.width,
      h = n.height,
      P = Math.floor(f / 2),
      z = Math.floor(h / 2),
      V = 0,
      j = 0,
      D = f,
      W = h,
      o = 1,
      F = n.getContext("2d", { alpha: !0 === e.alpha }),
      i = new THREE.Color(0),
      r = !0 === e.alpha ? 0 : 1,
      N = 1,
      k = 0,
      O = null,
      G = null,
      I = null,
      A = null,
      q = null,
      t = [],
      U = (new THREE.RenderableVertex(), new THREE.RenderableVertex(), new THREE.Color()),
      J =
        (new THREE.Color(),
        new THREE.Color(),
        new THREE.Color(),
        new THREE.Color(),
        new THREE.Color()),
      K = new THREE.Color(),
      Q = new THREE.Color(),
      X = {},
      Y = new THREE.Box2(),
      Z = new THREE.Box2(),
      $ = new THREE.Box2(),
      _ = new THREE.Color(),
      ee = new THREE.Color(),
      te = new THREE.Color(),
      ie = new THREE.Vector3(),
      ne = new THREE.Vector3(),
      oe = new THREE.Vector3(),
      re = new THREE.Matrix3();
    function ae(e, t, i) {
      me(i.opacity), xe(i.blending);
      var n = t.scale.x * P,
        o = t.scale.y * z,
        r = 0.5 * Math.sqrt(n * n + o * o);
      if (
        ($.min.set(e.x - r, e.y - r),
        $.max.set(e.x + r, e.y + r),
        i instanceof THREE.SpriteMaterial)
      ) {
        var a = i.map;
        if (null !== a && void 0 !== a.image) {
          !1 === a.hasEventListener("update", Ee) &&
            (0 < a.image.width && fe(a), a.addEventListener("update", Ee));
          var s = X[a.id];
          Se(void 0 !== s ? s : "rgba( 0, 0, 0, 1 )");
          var l = a.image,
            c = l.width * a.offset.x,
            p = l.height * a.offset.y,
            E = l.width * a.repeat.x,
            f = l.height * a.repeat.y,
            h = n / E,
            d = o / f;
          F.save(),
            F.translate(e.x, e.y),
            0 !== i.rotation && F.rotate(i.rotation),
            F.translate(-n / 2, -o / 2),
            F.scale(h, d),
            F.translate(-c, -p),
            F.fillRect(c, p, E, f),
            F.restore();
        } else
          Se(i.color.getStyle()),
            F.save(),
            F.translate(e.x, e.y),
            0 !== i.rotation && F.rotate(i.rotation),
            F.scale(n, -o),
            F.fillRect(-0.5, -0.5, 1, 1),
            F.restore();
      } else
        i instanceof THREE.SpriteCanvasMaterial &&
          (ve(i.color.getStyle()),
          Se(i.color.getStyle()),
          F.save(),
          F.translate(e.x, e.y),
          0 !== i.rotation && F.rotate(i.rotation),
          F.scale(n, o),
          i.program(F),
          F.restore());
    }
    function se(e, t, i, n) {
      if (
        (me(n.opacity),
        xe(n.blending),
        F.beginPath(),
        F.moveTo(e.positionScreen.x, e.positionScreen.y),
        F.lineTo(t.positionScreen.x, t.positionScreen.y),
        n instanceof THREE.LineBasicMaterial)
      ) {
        if ((ye(n.linewidth), Re(n.linecap), ue(n.linejoin), n.vertexColors !== THREE.VertexColors))
          ve(n.color.getStyle());
        else {
          var o = i.vertexColors[0].getStyle(),
            r = i.vertexColors[1].getStyle();
          if (o === r) ve(o);
          else {
            try {
              var a = F.createLinearGradient(
                e.positionScreen.x,
                e.positionScreen.y,
                t.positionScreen.x,
                t.positionScreen.y
              );
              a.addColorStop(0, o), a.addColorStop(1, r);
            } catch (e) {
              a = o;
            }
            ve(a);
          }
        }
        F.stroke(), $.expandByScalar(2 * n.linewidth);
      } else
        n instanceof THREE.LineDashedMaterial &&
          (ye(n.linewidth),
          Re(n.linecap),
          ue(n.linejoin),
          ve(n.color.getStyle()),
          Te([n.dashSize, n.gapSize]),
          F.stroke(),
          $.expandByScalar(2 * n.linewidth),
          Te([]));
    }
    function le(e, t, i, n, o, r, a, s) {
      var l, c, p, E, f, h;
      if (
        ((B.info.render.vertices += 3),
        B.info.render.faces++,
        me(s.opacity),
        xe(s.blending),
        (y = e.positionScreen.x),
        (R = e.positionScreen.y),
        (u = t.positionScreen.x),
        (v = t.positionScreen.y),
        (S = i.positionScreen.x),
        (T = i.positionScreen.y),
        (l = y),
        (c = R),
        (p = u),
        (E = v),
        (f = S),
        (h = T),
        F.beginPath(),
        F.moveTo(l, c),
        F.lineTo(p, E),
        F.lineTo(f, h),
        F.closePath(),
        (s instanceof THREE.MeshLambertMaterial || s instanceof THREE.MeshPhongMaterial) &&
          null === s.map)
      )
        J.copy(s.color),
          K.copy(s.emissive),
          s.vertexColors === THREE.FaceColors && J.multiply(a.color),
          U.copy(_),
          ne.copy(e.positionWorld).add(t.positionWorld).add(i.positionWorld).divideScalar(3),
          (function (e, t, i) {
            for (var n = 0, o = m.length; n < o; n++) {
              var r = m[n];
              if ((Q.copy(r.color), r instanceof THREE.DirectionalLight)) {
                var a = ie.setFromMatrixPosition(r.matrixWorld).normalize();
                if ((s = t.dot(a)) <= 0) continue;
                (s *= r.intensity), i.add(Q.multiplyScalar(s));
              } else if (r instanceof THREE.PointLight) {
                var s;
                if (
                  ((a = ie.setFromMatrixPosition(r.matrixWorld)),
                  (s = t.dot(ie.subVectors(a, e).normalize())) <= 0)
                )
                  continue;
                if (0 == (s *= 0 == r.distance ? 1 : 1 - Math.min(e.distanceTo(a) / r.distance, 1)))
                  continue;
                (s *= r.intensity), i.add(Q.multiplyScalar(s));
              }
            }
          })(ne, a.normalModel, U),
          U.multiply(J).add(K),
          !0 === s.wireframe
            ? ce(U, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin)
            : pe(U);
      else if (
        s instanceof THREE.MeshBasicMaterial ||
        s instanceof THREE.MeshLambertMaterial ||
        s instanceof THREE.MeshPhongMaterial
      ) {
        if (null !== s.map)
          s.map.mapping === THREE.UVMapping &&
            ((g = a.uvs),
            he(y, R, u, v, S, T, g[n].x, g[n].y, g[o].x, g[o].y, g[r].x, g[r].y, s.map));
        else
          null !== s.envMap
            ? s.envMap.mapping === THREE.SphericalReflectionMapping &&
              (oe.copy(a.vertexNormalsModel[n]).applyMatrix3(re),
              (H = 0.5 * oe.x + 0.5),
              (w = 0.5 * oe.y + 0.5),
              oe.copy(a.vertexNormalsModel[o]).applyMatrix3(re),
              (C = 0.5 * oe.x + 0.5),
              (M = 0.5 * oe.y + 0.5),
              oe.copy(a.vertexNormalsModel[r]).applyMatrix3(re),
              (b = 0.5 * oe.x + 0.5),
              (L = 0.5 * oe.y + 0.5),
              he(y, R, u, v, S, T, H, w, C, M, b, L, s.envMap))
            : (U.copy(s.color),
              s.vertexColors === THREE.FaceColors && U.multiply(a.color),
              !0 === s.wireframe
                ? ce(U, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin)
                : pe(U));
      } else
        s instanceof THREE.MeshDepthMaterial
          ? (U.r = U.g = U.b = 1 - d(e.positionScreen.z * e.positionScreen.w, x.near, x.far))
          : s instanceof THREE.MeshNormalMaterial
          ? (oe.copy(a.normalModel).applyMatrix3(re),
            U.setRGB(oe.x, oe.y, oe.z).multiplyScalar(0.5).addScalar(0.5))
          : U.setRGB(1, 1, 1),
          !0 === s.wireframe
            ? ce(U, s.wireframeLinewidth, s.wireframeLinecap, s.wireframeLinejoin)
            : pe(U);
    }
    function ce(e, t, i, n) {
      ye(t), Re(i), ue(n), ve(e.getStyle()), F.stroke(), $.expandByScalar(2 * t);
    }
    function pe(e) {
      Se(e.getStyle()), F.fill();
    }
    function Ee(e) {
      fe(e.target);
    }
    function fe(e) {
      if (!(e instanceof THREE.CompressedTexture)) {
        var t = e.wrapS === THREE.RepeatWrapping,
          i = e.wrapT === THREE.RepeatWrapping,
          n = e.image,
          o = document.createElement("canvas");
        (o.width = n.width), (o.height = n.height);
        var r = o.getContext("2d");
        r.setTransform(1, 0, 0, -1, 0, n.height),
          r.drawImage(n, 0, 0),
          (X[e.id] = F.createPattern(
            o,
            !0 === t && !0 === i
              ? "repeat"
              : !0 === t && !1 === i
              ? "repeat-x"
              : !1 === t && !0 === i
              ? "repeat-y"
              : "no-repeat"
          ));
      }
    }
    function he(e, t, i, n, o, r, a, s, l, c, p, E, f) {
      if (!(f instanceof THREE.DataTexture)) {
        !1 === f.hasEventListener("update", Ee) &&
          (void 0 !== f.image && 0 < f.image.width && fe(f), f.addEventListener("update", Ee));
        var h = X[f.id];
        if (void 0 === h) return Se("rgba(0,0,0,1)"), void F.fill();
        Se(h);
        var d,
          m,
          x,
          y,
          R,
          u,
          v,
          S,
          T = f.offset.x / f.repeat.x,
          g = f.offset.y / f.repeat.y,
          H = f.image.width * f.repeat.x,
          w = f.image.height * f.repeat.y;
        (l = (l + T) * H),
          (c = (c + g) * w),
          (p = (p + T) * H),
          (E = (E + g) * w),
          (i -= e),
          (n -= t),
          (o -= e),
          (r -= t),
          0 !== (v = (l -= a = (a + T) * H) * (E -= s = (s + g) * w) - (p -= a) * (c -= s)) &&
            ((R = e - (d = (E * i - c * o) * (S = 1 / v)) * a - (x = (l * o - p * i) * S) * s),
            (u = t - (m = (E * n - c * r) * S) * a - (y = (l * r - p * n) * S) * s),
            F.save(),
            F.transform(d, m, x, y, R, u),
            F.fill(),
            F.restore());
      }
    }
    function de(e, t, i) {
      var n,
        o = t.x - e.x,
        r = t.y - e.y,
        a = o * o + r * r;
      0 !== a &&
        ((o *= n = i / Math.sqrt(a)), (r *= n), (t.x += o), (t.y += r), (e.x -= o), (e.y -= r));
    }
    function me(e) {
      N !== e && ((F.globalAlpha = e), (N = e));
    }
    function xe(e) {
      k !== e &&
        (e === THREE.NormalBlending
          ? (F.globalCompositeOperation = "source-over")
          : e === THREE.AdditiveBlending
          ? (F.globalCompositeOperation = "lighter")
          : e === THREE.SubtractiveBlending && (F.globalCompositeOperation = "darker"),
        (k = e));
    }
    function ye(e) {
      I !== e && ((F.lineWidth = e), (I = e));
    }
    function Re(e) {
      A !== e && ((F.lineCap = e), (A = e));
    }
    function ue(e) {
      q !== e && ((F.lineJoin = e), (q = e));
    }
    function ve(e) {
      O !== e && ((F.strokeStyle = e), (O = e));
    }
    function Se(e) {
      G !== e && ((F.fillStyle = e), (G = e));
    }
    function Te(e) {
      t.length !== e.length && (F.setLineDash(e), (t = e));
    }
    void 0 === F.setLineDash && (F.setLineDash = function () {}),
      (this.domElement = n),
      (this.autoClear = !0),
      (this.sortObjects = !0),
      (this.sortElements = !0),
      (this.info = { render: { vertices: 0, faces: 0 } }),
      (this.supportsVertexTextures = function () {}),
      (this.setFaceCulling = function () {}),
      (this.getPixelRatio = function () {
        return o;
      }),
      (this.setPixelRatio = function (e) {
        o = e;
      }),
      (this.setSize = function (e, t, i) {
        (f = e * o),
          (h = t * o),
          (n.width = f),
          (n.height = h),
          (P = Math.floor(f / 2)),
          (z = Math.floor(h / 2)),
          !1 !== i && ((n.style.width = e + "px"), (n.style.height = t + "px")),
          Y.min.set(-P, -z),
          Y.max.set(P, z),
          Z.min.set(-P, -z),
          Z.max.set(P, z),
          (N = 1),
          (k = 0),
          (q = A = I = G = O = null),
          this.setViewport(0, 0, e, t);
      }),
      (this.setViewport = function (e, t, i, n) {
        (V = e * o), (j = t * o), (D = i * o), (W = n * o);
      }),
      (this.setScissor = function () {}),
      (this.enableScissorTest = function () {}),
      (this.setClearColor = function (e, t) {
        i.set(e), (r = void 0 !== t ? t : 1), Z.min.set(-P, -z), Z.max.set(P, z);
      }),
      (this.setClearColorHex = function (e, t) {
        console.warn(
          "THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."
        ),
          this.setClearColor(e, t);
      }),
      (this.getClearColor = function () {
        return i;
      }),
      (this.getClearAlpha = function () {
        return r;
      }),
      (this.getMaxAnisotropy = function () {
        return 0;
      }),
      (this.clear = function () {
        !1 === Z.empty() &&
          (Z.intersect(Y),
          Z.expandByScalar(2),
          (Z.min.x = Z.min.x + P),
          (Z.min.y = -Z.min.y + z),
          (Z.max.x = Z.max.x + P),
          (Z.max.y = -Z.max.y + z),
          r < 1 &&
            F.clearRect(0 | Z.min.x, 0 | Z.max.y, (Z.max.x - Z.min.x) | 0, (Z.min.y - Z.max.y) | 0),
          0 < r &&
            (xe(THREE.NormalBlending),
            me(1),
            Se(
              "rgba(" +
                Math.floor(255 * i.r) +
                "," +
                Math.floor(255 * i.g) +
                "," +
                Math.floor(255 * i.b) +
                "," +
                r +
                ")"
            ),
            F.fillRect(0 | Z.min.x, 0 | Z.max.y, (Z.max.x - Z.min.x) | 0, (Z.min.y - Z.max.y) | 0)),
          Z.makeEmpty());
      }),
      (this.clearColor = function () {}),
      (this.clearDepth = function () {}),
      (this.clearStencil = function () {}),
      (this.render = function (e, t) {
        if (t instanceof THREE.Camera != !1) {
          !0 === this.autoClear && this.clear(),
            (B.info.render.vertices = 0),
            (B.info.render.faces = 0),
            F.setTransform(D / f, 0, 0, -W / h, V, h - j),
            F.translate(P, z),
            (a = E.projectScene(e, t, this.sortObjects, this.sortElements)),
            (s = a.elements),
            (m = a.lights),
            (x = t),
            re.getNormalMatrix(t.matrixWorldInverse),
            (function () {
              _.setRGB(0, 0, 0), ee.setRGB(0, 0, 0), te.setRGB(0, 0, 0);
              for (var e = 0, t = m.length; e < t; e++) {
                var i = m[e],
                  n = i.color;
                i instanceof THREE.AmbientLight
                  ? _.add(n)
                  : i instanceof THREE.DirectionalLight
                  ? ee.add(n)
                  : i instanceof THREE.PointLight && te.add(n);
              }
            })();
          for (var i = 0, n = s.length; i < n; i++) {
            var o = s[i],
              r = o.material;
            if (void 0 !== r && 0 !== r.opacity) {
              if (($.makeEmpty(), o instanceof THREE.RenderableSprite))
                ((l = o).x *= P), (l.y *= z), ae(l, o, r);
              else if (o instanceof THREE.RenderableLine)
                (l = o.v1),
                  (c = o.v2),
                  (l.positionScreen.x *= P),
                  (l.positionScreen.y *= z),
                  (c.positionScreen.x *= P),
                  (c.positionScreen.y *= z),
                  $.setFromPoints([l.positionScreen, c.positionScreen]),
                  !0 === Y.isIntersectionBox($) && se(l, c, o, r);
              else if (o instanceof THREE.RenderableFace) {
                if (
                  ((l = o.v1),
                  (c = o.v2),
                  (p = o.v3),
                  l.positionScreen.z < -1 || 1 < l.positionScreen.z)
                )
                  continue;
                if (c.positionScreen.z < -1 || 1 < c.positionScreen.z) continue;
                if (p.positionScreen.z < -1 || 1 < p.positionScreen.z) continue;
                (l.positionScreen.x *= P),
                  (l.positionScreen.y *= z),
                  (c.positionScreen.x *= P),
                  (c.positionScreen.y *= z),
                  (p.positionScreen.x *= P),
                  (p.positionScreen.y *= z),
                  0 < r.overdraw &&
                    (de(l.positionScreen, c.positionScreen, r.overdraw),
                    de(c.positionScreen, p.positionScreen, r.overdraw),
                    de(p.positionScreen, l.positionScreen, r.overdraw)),
                  $.setFromPoints([l.positionScreen, c.positionScreen, p.positionScreen]),
                  !0 === Y.isIntersectionBox($) && le(l, c, p, 0, 1, 2, o, r);
              }
              Z.union($);
            }
          }
          F.setTransform(1, 0, 0, 1, 0, 0);
        } else
          console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
      });
  });
