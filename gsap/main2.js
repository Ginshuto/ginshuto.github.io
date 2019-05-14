    // TweenMax.to(".happyEyes", 0.5, {
    //     opacity: 1
    // });
    // TweenMax.to(".happyMouth", 0.5, {
    //     opacity: 1,
    //     delay: 1
    // });
    // TweenMax.to(".happyEyes,.happyMouth", 1, {
    //     opacity: 0,
    //     delay: 3
    // });
    tl = new TimelineLite();

    function happy() {
        if (!tl.isActive()) {
            //on lance l'animation
            tl.from(".face", 0.5, {
                left: "-50%"
            })
            tl.to(".face", 0.5, {
                opacity: 1
            }, "-=0.5")
            tl.from(".funnelUn", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelUn", 0.5, {
                top: "-45%",
                opacity: 1
            }, "-=0.5")
            tl.to(".happyEyes", 0.5, {
                    opacity: 1,
                    top: "1.6%",
                    scale: 1,
                    delay: 0.5
                })
                .to(".happyEyes, .face", 0.5, {
                    left: "33%",
                    delay: 0.5
                })
            tl.from(".funnelDeux", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelDeux", 0.5, {
                    top: "-45%",
                    opacity: 1
                }, "-=0.5")
                .to(".happyMouth", 0.5, {
                    opacity: 1,
                    bottom: 0,
                    scale: 1,
                    delay: 0.5
                })
                // .to(".brasUn, .brasDeux", 0.5, {
                //     left: 0
                // })
                .to(".face, .happyMouth, .happyEyes", 0.5, {
                    left: "66%",
                    delay: 0.5
                })
                .to(".face", 2, {
                    delay: 2,
                    left: "100%",
                    rotation: 360,
                    opacity: 0
                })
                .to(".happyEyes", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 95%",
                    opacity: 0
                }, "-=2")
                .to(".happyMouth", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 5%",
                    opacity: 0
                }, "-=2")
                .to(".funnelUn,.funnelDeux", 0.5, {
                    opacity: 0,
                    top: "-100%",
                })
                .to('.face', 0.1, {
                    left: "0"
                })
                .to('.happyEyes', 0.5, {
                    left: 0,
                    top: "-30%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                })
                .to('.happyMouth', 0.5, {
                    left: "33%",
                    bottom: "60%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                }, "-=0.5")
        }
        //sinon (une animation est en cours)
        else {
            // on affiche le message
            alert("WTF MEK TU VA TRO VITE, 1 SEUL EMOJI A LA FOI STARFOULLAH")

        }

    }

    function sad() {
        if (!tl.isActive()) {
            tl.from(".face", 0.5, {
                left: "-50%"
            })
            tl.to(".face", 0.5, {
                opacity: 1
            }, "-=0.5")
            tl.from(".funnelUn", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelUn", 0.5, {
                top: "-45%",
                opacity: 1
            }, "-=0.5")
            tl.to(".sadEyes", 0.5, {
                    opacity: 1,
                    top: "1.6%",
                    scale: 1,
                    delay: 0.5
                })
                .to(".sadEyes, .face", 0.5, {
                    left: "33%",
                    delay: 0.5
                })
            tl.from(".funnelDeux", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelDeux", 0.5, {
                    top: "-45%",
                    opacity: 1
                }, "-=0.5")
                .to(".sadMouth", 0.5, {
                    opacity: 1,
                    bottom: 0,
                    scale: 1,
                    delay: 0.5
                })
                // .to(".brasUn, .brasDeux", 0.5, {
                //     left: 0
                // })
                .to(".face, .sadMouth, .sadEyes", 0.5, {
                    left: "66%",
                    delay: 0.5
                })
                .to(".face", 2, {
                    delay: 2,
                    left: "100%",
                    rotation: 360,
                    opacity: 0
                })
                .to(".sadEyes", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 95%",
                    opacity: 0
                }, "-=2")
                .to(".sadMouth", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 5%",
                    opacity: 0
                }, "-=2")
                .to(".funnelUn,.funnelDeux", 0.5, {
                    opacity: 0,
                    top: "-100%",
                })
                .to('.face', 0.1, {
                    left: "0"
                })
                .to('.sadEyes', 0.5, {
                    left: 0,
                    top: "-30%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                })
                .to('.sadMouth', 0.5, {
                    left: "33%",
                    bottom: "60%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                }, "-=0.5")
        } else {
            // on affiche le message
            alert("WTF MEK TU VA TRO VITE, 1 SEUL EMOJI A LA FOI STARFOULLAH")

        }
    }

    function wink() {
        if (!tl.isActive()) {
            tl.from(".face", 0.5, {
                left: "-50%"
            })
            tl.to(".face", 0.5, {
                opacity: 1
            }, "-=0.5")
            tl.from(".funnelUn", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelUn", 0.5, {
                top: "-45%",
                opacity: 1
            }, "-=0.5")
            tl.to(".winkEyes", 0.5, {
                    opacity: 1,
                    top: "1.6%",
                    scale: 1,
                    delay: 0.5
                })
                .to(".winkEyes, .face", 0.5, {
                    left: "33%",
                    delay: 0.5
                })
            tl.from(".funnelDeux", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelDeux", 0.5, {
                    top: "-45%",
                    opacity: 1
                }, "-=0.5")
                .to(".winkMouth", 0.5, {
                    opacity: 1,
                    bottom: 0,
                    scale: 1,
                    delay: 0.5
                })
                // .to(".brasUn, .brasDeux", 0.5, {
                //     left: 0
                // })
                .to(".face, .winkMouth, .winkEyes", 0.5, {
                    left: "66%",
                    delay: 0.5
                })
                .to(".face", 2, {
                    delay: 2,
                    left: "100%",
                    rotation: 360,
                    opacity: 0
                })
                .to(".winkEyes", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 95%",
                    opacity: 0
                }, "-=2")
                .to(".winkMouth", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 5%",
                    opacity: 0
                }, "-=2")
                .to(".funnelUn,.funnelDeux", 0.5, {
                    opacity: 0,
                    top: "-100%",
                })
                .to('.face', 0.1, {
                    left: "0"
                })
                .to('.winkEyes', 0.5, {
                    left: 0,
                    top: "-30%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                })
                .to('.winkMouth', 0.5, {
                    left: "33%",
                    bottom: "60%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                }, "-=0.5")
        } else {
            // on affiche le message
            alert("WTF MEK TU VA TRO VITE, 1 SEUL EMOJI A LA FOI STARFOULLAH")

        }
    }

    function love() {
        if (!tl.isActive()) {
            tl.from(".face", 0.5, {
                left: "-50%"
            })
            tl.to(".face", 0.5, {
                opacity: 1
            }, "-=0.5")
            tl.from(".funnelUn", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelUn", 0.5, {
                top: "-45%",
                opacity: 1
            }, "-=0.5")
            tl.to(".loveEyes", 0.5, {
                    opacity: 1,
                    top: "1.6%",
                    scale: 1,
                    delay: 0.5
                })
                .to(".loveEyes, .face", 0.5, {
                    left: "33%",
                    delay: 0.5
                })
            tl.from(".funnelDeux", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelDeux", 0.5, {
                    top: "-45%",
                    opacity: 1
                }, "-=0.5")
                .to(".loveMouth", 0.5, {
                    opacity: 1,
                    bottom: 0,
                    scale: 1,
                    delay: 0.5
                })
                // .to(".brasUn, .brasDeux", 0.5, {
                //     left: 0
                // })
                .to(".face, .loveMouth, .loveEyes", 0.5, {
                    left: "66%",
                    delay: 0.5
                })
                .to(".face", 2, {
                    delay: 2,
                    left: "100%",
                    rotation: 360,
                    opacity: 0
                })
                .to(".loveEyes", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 95%",
                    opacity: 0
                }, "-=2")
                .to(".loveMouth", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 5%",
                    opacity: 0
                }, "-=2")
                .to(".funnelUn,.funnelDeux", 0.5, {
                    opacity: 0,
                    top: "-100%",
                })
                .to('.face', 0.1, {
                    left: "0"
                })
                .to('.loveEyes', 0.5, {
                    left: 0,
                    top: "-30%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                })
                .to('.loveMouth', 0.5, {
                    left: "33%",
                    bottom: "60%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                }, "-=0.5")
        } else {
            // on affiche le message
            alert("WTF MEK TU VA TRO VITE, 1 SEUL EMOJI A LA FOI STARFOULLAH")

        }
    }

    function lmao() {
        if (!tl.isActive()) {
            tl.from(".face", 0.5, {
                left: "-50%"
            })
            tl.to(".face", 0.5, {
                opacity: 1
            }, "-=0.5")
            tl.from(".funnelUn", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelUn", 0.5, {
                top: "-45%",
                opacity: 1
            }, "-=0.5")
            tl.to(".lmaoEyes", 0.5, {
                    opacity: 1,
                    top: "15.6%",
                    scale: 1,
                    delay: 0.5
                })
                .to(".lmaoEyes, .face", 0.5, {
                    left: "33%",
                    delay: 0.5
                })
            tl.from(".funnelDeux", 0.5, {
                top: "-100%",
                delay: 0.5
            })
            tl.to(".funnelDeux", 0.5, {
                    top: "-45%",
                    opacity: 1
                }, "-=0.5")
                .to(".happyMouth", 0.5, {
                    opacity: 1,
                    bottom: 0,
                    scale: 1,
                    delay: 0.5
                })
                // .to(".brasUn, .brasDeux", 0.5, {
                //     left: 0
                // })
                .to(".face, .happyMouth, .lmaoEyes", 0.5, {
                    left: "66%",
                    delay: 0.5
                })
                .to(".face", 2, {
                    delay: 2,
                    left: "100%",
                    rotation: 360,
                    opacity: 0
                })
                .to(".lmaoEyes", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 95%",
                    opacity: 0
                }, "-=2")
                .to(".happyMouth", 2, {
                    left: "100%",
                    rotation: 360,
                    transformOrigin: "50% 5%",
                    opacity: 0
                }, "-=2")
                .to(".funnelUn,.funnelDeux", 0.5, {
                    opacity: 0,
                    top: "-100%",
                })
                .to('.face', 0.1, {
                    left: "0"
                })
                .to('.lmaoEyes', 0.5, {
                    left: 0,
                    top: "-30%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                })
                .to('.happyMouth', 0.5, {
                    left: "33%",
                    bottom: "60%",
                    scale: 0.1,
                    opacity: 0,
                    rotation: 0
                }, "-=0.5")
        } else {
            // on affiche le message
            alert("WTF MEK TU VA TRO VITE, 1 SEUL EMOJI A LA FOI STARFOULLAH")

        }
    }