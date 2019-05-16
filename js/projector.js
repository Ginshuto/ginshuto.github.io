THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null},THREE.Projector=function(){var X,Y,o,Z,$,_,ee,te,re,ie,oe,ne=[],ae=0,se=[],t=0,r=[],i=0,n=[],a=0,s=[],c=0,ce={objects:[],lights:[],elements:[]},le=new THREE.Vector3,pe=new THREE.Vector4,l=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),R=new THREE.Box3,d=new Array(3),Ee=(new Array(4),new THREE.Matrix4),ue=new THREE.Matrix4,he=new THREE.Matrix4,fe=new THREE.Matrix3,ve=new THREE.Frustum,me=new THREE.Vector4,Re=new THREE.Vector4;this.projectVector=function(e,t){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(e,t){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var de=new function(){var p=[],E=[],u=null,h=null,f=new THREE.Matrix3,i=function(e){var t=e.position,r=e.positionWorld,i=e.positionScreen;r.copy(t).applyMatrix4(oe),i.copy(r).applyMatrix4(ue);var o=1/i.w;i.x*=o,i.y*=o,i.z*=o,e.visible=-1<=i.x&&i.x<=1&&-1<=i.y&&i.y<=1&&-1<=i.z&&i.z<=1},v=function(e,t,r){return!0===e.visible||!0===t.visible||!0===r.visible||(d[0]=e.positionScreen,d[1]=t.positionScreen,d[2]=r.positionScreen,l.isIntersectionBox(R.setFromPoints(d)))},m=function(e,t,r){return(r.positionScreen.x-e.positionScreen.x)*(t.positionScreen.y-e.positionScreen.y)-(r.positionScreen.y-e.positionScreen.y)*(t.positionScreen.x-e.positionScreen.x)<0};return{setObject:function(e){h=(u=e).material,f.getNormalMatrix(u.matrixWorld),p.length=0,E.length=0},projectVertex:i,checkTriangleVisibility:v,checkBackfaceCulling:m,pushVertex:function(e,t,r){(o=xe()).position.set(e,t,r),i(o)},pushNormal:function(e,t,r){p.push(e,t,r)},pushUv:function(e,t){E.push(e,t)},pushLine:function(e,t){var r=se[e],i=se[t];(ee=ye()).id=u.id,ee.v1.copy(r),ee.v2.copy(i),ee.z=(r.positionScreen.z+i.positionScreen.z)/2,ee.material=u.material,ce.elements.push(ee)},pushTriangle:function(e,t,r){var i=se[e],o=se[t],n=se[r];if(!1!==v(i,o,n)&&(h.side===THREE.DoubleSide||!0===m(i,o,n))){($=Te()).id=u.id,$.v1.copy(i),$.v2.copy(o),$.v3.copy(n),$.z=(i.positionScreen.z+o.positionScreen.z+n.positionScreen.z)/3;for(var a=0;a<3;a++){var s=3*arguments[a],c=$.vertexNormalsModel[a];c.set(p[s],p[s+1],p[s+2]),c.applyMatrix3(f).normalize();var l=2*arguments[a];$.uvs[a].set(E[l],E[l+1])}$.vertexNormalsLength=3,$.material=u.material,ce.elements.push($)}}}};function xe(){if(Z!==t)return se[Z++];var e=new THREE.RenderableVertex;return se.push(e),t++,Z++,e}function Te(){if(_!==i)return r[_++];var e=new THREE.RenderableFace;return r.push(e),i++,_++,e}function ye(){if(te!==a)return n[te++];var e=new THREE.RenderableLine;return n.push(e),a++,te++,e}function He(){if(ie!==c)return s[ie++];var e=new THREE.RenderableSprite;return s.push(e),c++,ie++,e}function we(e,t){return e.z!==t.z?t.z-e.z:e.id!==t.id?e.id-t.id:0}function ge(e,t){var r=0,i=1,o=e.z+e.w,n=t.z+t.w,a=-e.z+e.w,s=-t.z+t.w;return 0<=o&&0<=n&&0<=a&&0<=s||!(o<0&&n<0||a<0&&s<0)&&(o<0?r=Math.max(r,o/(o-n)):n<0&&(i=Math.min(i,o/(o-n))),a<0?r=Math.max(r,a/(a-s)):s<0&&(i=Math.min(i,a/(a-s))),!(i<r)&&(e.lerp(t,r),t.lerp(e,1-i),!0))}this.projectScene=function(e,t,r,i){ie=te=_=0,!(ce.elements.length=0)===e.autoUpdate&&e.updateMatrixWorld(),void 0===t.parent&&t.updateMatrixWorld(),Ee.copy(t.matrixWorldInverse.getInverse(t.matrixWorld)),ue.multiplyMatrices(t.projectionMatrix,Ee),ve.setFromMatrix(ue),Y=0,ce.objects.length=0,ce.lights.length=0,e.traverseVisible(function(e){if(e instanceof THREE.Light)ce.lights.push(e);else if(e instanceof THREE.Mesh||e instanceof THREE.Line||e instanceof THREE.Sprite){if(!1===e.material.visible)return;!1!==e.frustumCulled&&!0!==ve.intersectsObject(e)||((X=function(){if(Y!==ae)return ne[Y++];var e=new THREE.RenderableObject;return ne.push(e),ae++,Y++,e}()).id=e.id,X.object=e,le.setFromMatrixPosition(e.matrixWorld),le.applyProjection(ue),X.z=le.z,ce.objects.push(X))}}),!0===r&&ce.objects.sort(we);for(var o=0,n=ce.objects.length;o<n;o++){var a=ce.objects[o].object,s=a.geometry;if(de.setObject(a),oe=a.matrixWorld,Z=0,a instanceof THREE.Mesh){if(s instanceof THREE.BufferGeometry){var c=s.attributes,l=s.offsets;if(void 0===c.position)continue;for(var p=0,E=(J=c.position.array).length;p<E;p+=3)de.pushVertex(J[p],J[p+1],J[p+2]);if(void 0!==c.normal){var u=c.normal.array;for(p=0,E=u.length;p<E;p+=3)de.pushNormal(u[p],u[p+1],u[p+2])}if(void 0!==c.uv){var h=c.uv.array;for(p=0,E=h.length;p<E;p+=2)de.pushUv(h[p],h[p+1])}if(void 0!==c.index){var f=c.index.array;if(0<l.length)for(o=0;o<l.length;o++){var v=l[o],m=v.index;for(p=v.start,E=v.start+v.count;p<E;p+=3)de.pushTriangle(f[p]+m,f[p+1]+m,f[p+2]+m)}else for(p=0,E=f.length;p<E;p+=3)de.pushTriangle(f[p],f[p+1],f[p+2])}else for(p=0,E=J.length/3;p<E;p+=3)de.pushTriangle(p,p+1,p+2)}else if(s instanceof THREE.Geometry){var R=s.vertices,d=s.faces,x=s.faceVertexUvs[0];fe.getNormalMatrix(oe);for(var T=(k=a.material)instanceof THREE.MeshFaceMaterial,y=!0===T?a.material:null,H=0,w=R.length;H<w;H++){var g=R[H];if(le.copy(g),!0===k.morphTargets)for(var b=s.morphTargets,M=a.morphTargetInfluences,S=0,z=b.length;S<z;S++){var V=M[S];if(0!==V){var j=b[S].vertices[H];le.x+=(j.x-g.x)*V,le.y+=(j.y-g.y)*V,le.z+=(j.z-g.z)*V}}de.pushVertex(le.x,le.y,le.z)}for(var L=0,C=d.length;L<C;L++){var k,N=d[L];if(void 0!==(k=!0===T?y.materials[N.materialIndex]:a.material)){var W=k.side,B=se[N.a],F=se[N.b],P=se[N.c];if(!1!==de.checkTriangleVisibility(B,F,P)){var I=de.checkBackfaceCulling(B,F,P);if(W!==THREE.DoubleSide){if(W===THREE.FrontSide&&!1===I)continue;if(W===THREE.BackSide&&!0===I)continue}($=Te()).id=a.id,$.v1.copy(B),$.v2.copy(F),$.v3.copy(P),$.normalModel.copy(N.normal),!1!==I||W!==THREE.BackSide&&W!==THREE.DoubleSide||$.normalModel.negate(),$.normalModel.applyMatrix3(fe).normalize();for(var O=N.vertexNormals,D=0,G=Math.min(O.length,3);D<G;D++){var U=$.vertexNormalsModel[D];U.copy(O[D]),!1!==I||W!==THREE.BackSide&&W!==THREE.DoubleSide||U.negate(),U.applyMatrix3(fe).normalize()}$.vertexNormalsLength=O.length;var A=x[L];if(void 0!==A)for(var q=0;q<3;q++)$.uvs[q].copy(A[q]);$.color=N.color,$.material=k,$.z=(B.positionScreen.z+F.positionScreen.z+P.positionScreen.z)/3,ce.elements.push($)}}}}}else if(a instanceof THREE.Line){if(s instanceof THREE.BufferGeometry){if(void 0!==(c=s.attributes).position){var J;for(p=0,E=(J=c.position.array).length;p<E;p+=3)de.pushVertex(J[p],J[p+1],J[p+2]);if(void 0!==c.index)for(p=0,E=(f=c.index.array).length;p<E;p+=2)de.pushLine(f[p],f[p+1]);else{var K=a.mode===THREE.LinePieces?2:1;for(p=0,E=J.length/3-1;p<E;p+=K)de.pushLine(p,p+1)}}}else if(s instanceof THREE.Geometry){if(he.multiplyMatrices(ue,oe),0===(R=a.geometry.vertices).length)continue;(B=xe()).positionScreen.copy(R[0]).applyMatrix4(he);for(K=a.mode===THREE.LinePieces?2:1,H=1,w=R.length;H<w;H++)(B=xe()).positionScreen.copy(R[H]).applyMatrix4(he),0<(H+1)%K||(F=se[Z-2],me.copy(B.positionScreen),Re.copy(F.positionScreen),!0===ge(me,Re)&&(me.multiplyScalar(1/me.w),Re.multiplyScalar(1/Re.w),(ee=ye()).id=a.id,ee.v1.positionScreen.copy(me),ee.v2.positionScreen.copy(Re),ee.z=Math.max(me.z,Re.z),ee.material=a.material,a.material.vertexColors===THREE.VertexColors&&(ee.vertexColors[0].copy(a.geometry.colors[H]),ee.vertexColors[1].copy(a.geometry.colors[H-1])),ce.elements.push(ee)))}}else if(a instanceof THREE.Sprite){pe.set(oe.elements[12],oe.elements[13],oe.elements[14],1),pe.applyMatrix4(ue);var Q=1/pe.w;pe.z*=Q,-1<=pe.z&&pe.z<=1&&((re=He()).id=a.id,re.x=pe.x*Q,re.y=pe.y*Q,re.z=pe.z,re.object=a,re.rotation=a.rotation,re.scale.x=a.scale.x*Math.abs(re.x-(pe.x+t.projectionMatrix.elements[0])/(pe.w+t.projectionMatrix.elements[12])),re.scale.y=a.scale.y*Math.abs(re.y-(pe.y+t.projectionMatrix.elements[5])/(pe.w+t.projectionMatrix.elements[13])),re.material=a.material,ce.elements.push(re))}}return!0===i&&ce.elements.sort(we),ce}};