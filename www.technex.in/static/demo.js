/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
{
    // Class Menu.
    class Menu {
        constructor(el) {


                this.DOM = { el: el };

                // Open and close ctls.
                this.DOM.openCtrl = this.DOM.el.querySelector('.action--menu');
                // this.DOM.fpdiv = this.DOM.el.querySelector('.fpdiv');

                // this.DOM.closeCtrl.addEventListener('click', () => this.close());  

                var x = document.getElementById("mainmenu_id").querySelectorAll(".mainmenu__item").length;

                this.DOM.sec1 = this.DOM.el.querySelector('.menu__item--1');
                this.DOM.sec2 = this.DOM.el.querySelector('.menu__item--2');
                this.DOM.sec3 = this.DOM.el.querySelector('.menu__item--3');
                this.DOM.sec4 = this.DOM.el.querySelector('.menu__item--4');
                this.DOM.sec5 = this.DOM.el.querySelector('.menu__item--5');

                this.DOM.event_links = Array.from(this.DOM.el.querySelectorAll('.mainmenu__item'));
                this.DOM.event_links.forEach(elink => {
                    elink.addEventListener('click', () => {
                        selected_event = elink.id;

                        for (let i = 1; i <= x; i++) {
                            if (selected_event === 'event--' + i.toString()) {
                                selected_subevent = 'event-' + i.toString() + '-subevent-1';
                            }
                        }
                        document.getElementById("problems_" + selected_event + "_" + selected_subevent).addEventListener("click", function() {
                            // document.getElementById("eventmenuid").style.display = "none";
                            document.getElementById("probspage-" + selected_event + "-" + selected_subevent).style.display = "block";
                            // document.getElementById("landcontent").style.display = "none";
                        });
                        mod_event = !mod_event;
                        console.log("mode" + mod_event);
                        console.log(elink.id);
                        this.open();
                    })
                });

                this.DOM.subevent_links = Array.from(this.DOM.el.querySelectorAll('.sidemenu__item'));
                this.DOM.subevent_links.forEach(elink => {
                    elink.addEventListener('click', () => {
                        selected_subevent = elink.id;
                        document.getElementById("problems_" + selected_event + "_" + selected_subevent).style.display = "block";
                        mod_subevent = !mod_subevent;
                        document.getElementById("problems_" + selected_event + "_" + selected_subevent).addEventListener("click", function() {
                            // document.getElementById("eventmenuid").style.display = "none";
                            document.getElementById("probspage-" + selected_event + "-" + selected_subevent).style.display = "block";
                            // document.getElementById("landcontent").style.display = "none";
                        });
                        document.getElementById("regevent_" + selected_event + "_" + selected_subevent).style.display = "block";
                        console.log("mod" + mod_subevent);
                        console.log(elink.id);
                        this.open();
                    })
                });

                // this.DOM.fpdiv.addEventListener('mouseenter', () => {
                //     this.open();
                // });
                // this.DOM.openCtrl.addEventListener('load', () => this.open());
                this.DOM.openCtrl.addEventListener('click', () => {
                    this.open();
                });
                // The menu items.
                this.DOM.items = Array.from(this.DOM.el.querySelectorAll('.menu__item'));

                // if (screen.width < 500) {
                this.DOM.items_mobile = Array.from(this.DOM.el.querySelectorAll('.menu__item_mobile'));
                // }
                // The total number of items.
                this.itemsTotal = this.DOM.items.length;

                if (screen.width < 500) {
                    this.itemsTotal_mobile = this.DOM.items_mobile.length;
                }

                // Custom elements that will be animated.
                this.DOM.mainLinks = this.DOM.el.querySelectorAll('.mainmenu > a.mainmenu__item');
                this.DOM.sidemenuLinks = this.DOM.el.querySelectorAll('.sidemenu span.sidemenu__item-inner');
                if (screen.width < 500) {
                    this.DOM.sidemenuLinks_mobile = this.DOM.el.querySelectorAll('.sidemenu_mobile span.sidemenu__item-inner_mobile');
                }
                // this.DOM.menulink = this.DOM.el.querySelector('.menu__item-link');
            }
            // Open the menu.
        open() {
                this.toggle('open');
            }
            // Close the menu.
        close() {
            this.toggle('close');
        }
        toggle(action) {
            screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
            var x = document.getElementById("mainmenu_id").querySelectorAll(".mainmenu__item").length;
            var mainm = document.getElementsByClassName("mainmenu__item");
            var sidem = document.getElementsByClassName("sidemenu__item");
            var eventmenu = document.getElementById("eventmenuid");

            for (let i = 1; i <= x; i++) {
                for (let j = 1; j <= document.getElementById("sub-item-set--" + i.toString()).querySelectorAll(".sidemenu__item").length; j++) {
                    document.getElementById("backbuttps-event--" + i.toString() + "-event-" + i.toString() + "-subevent-" + j.toString()).addEventListener("click", function() {
                        var fg = document.getElementsByClassName("probspage");
                        for (let i = 0; i < fg.length; i++) {
                            console.log(fg.length);
                            fg[i].style.display = "none";
                        }
                    });
                }
            }


            Array.prototype.forEach.call(mainm, function(a) {
                a.style.color = "#ffffff";
            });

            Array.prototype.forEach.call(sidem, function(a) {
                a.style.color = "#ffffff";
            });

            document.getElementById(selected_subevent).style.color = "#f20c40";
            document.getElementById(selected_event).style.color = "#f20c40";

            if (this.isAnimating) return;
            // (dis)allow the main image tilt effect.
            allowTilt = action === 'open' ? false : true;
            this.isAnimating = true;
            // Toggling the open state class.
            this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('menu--open');
            // After all is animated..
            const animationEnd = (pos) => {
                if (pos === this.itemsTotal - 1) {
                    this.isAnimating = false;
                }
                if (pos === this.itemsTotal_mobile - 1) {
                    this.isAnimating = false;
                }

            };
            // Going through each menu´s item.
            this.DOM.items.forEach((el, pos) => {
                // The inner wrapper.
                const innerEl = el.querySelector('.menu__item-inner');
                // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
                const config = {};
                const configInner = {};
                // Direction defined in the HTML data-direction.
                // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
                const direction = el.dataset.direction;
                // Using 101% instead of 100% to avoid rendering problems.
                // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
                if (direction === 'bt') {
                    config.y = '101%';
                    configInner.y = '-101%';
                    configInner.x = '0%';
                } else if (direction === 'tb') {
                    config.y = '-101%';
                    configInner.y = '101%';
                    configInner.x = '0%';
                } else if (direction === 'lr') {
                    config.x = '-101%';
                    configInner.x = '101%';
                } else if (direction === 'rl') {
                    config.x = '101%';
                    configInner.x = '-101%';
                } else {
                    config.x = '101%';
                    config.y = '101%';
                    configInner.x = '-101%';
                    configInner.y = '-101%';
                }

                if (action === 'open') {
                    // Setting the initial values.
                    TweenMax.set(el, config);
                    TweenMax.set(innerEl, configInner);

                    // Animate.


                    for (let i = 1; i <= x; i++) {
                        document.getElementById("sub-item-set--" + i.toString()).style.display = "none";
                    }

                    var ass = document.getElementsByClassName("menu__item-hoverlink");
                    for (let i = 0; i < ass.length; i++) {
                        ass[i].style.display = "none";
                    }
                    var rgbl = document.getElementsByClassName("victoria-two");
                    for (let i=0; i<rgbl.length; i++) {
                        rgbl[i].style.display = "none";
                    }

                    document.getElementById("problems_" + selected_event + "_" + selected_subevent).style.display = "block";
                    document.getElementById("regevent_" + selected_event + "_" + selected_subevent).style.display = "block";

                    for (let i = 1; i <= x; i++) {
                        if (selected_event === "event--" + i.toString()) {
                            console.log('parentevent' + i.toString());
                            document.getElementById("sub-item-set--" + i.toString()).style.display = "block";
                        }
                    }

                    TweenMax.to([el, innerEl], .9, {
                        ease: Quint.easeOut,
                        x: '0%',
                        y: '0%',
                        onComplete: () => animationEnd(pos)
                    });
                } else {
                    TweenMax.to(el, 0.6, {
                        ease: Quart.easeInOut,
                        x: config.x || 0,
                        y: config.y || 0
                    });
                    TweenMax.to(innerEl, 0.6, {
                        ease: Quart.easeInOut,
                        x: configInner.x || 0,
                        y: configInner.y || 0,
                        onComplete: () => animationEnd(pos)
                    });
                }
            });


            if (screen.width < 500) {

                // document.getElementById("fh5co-header").style.display = "none";
                var evs = document.getElementsByClassName("sidemenu__item-inner");
                for (let i = 0; i < evs.length; i++) {
                    evs[i].style.zIndex = "200000000";
                }
                this.DOM.items_mobile.forEach((el, pos) => {
                    // The inner wrapper.
                    const innerEl = el.querySelector('.menu__item-inner_mobile');
                    // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
                    const config = {};
                    const configInner = {};
                    // Direction defined in the HTML data-direction.
                    // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
                    const direction = el.dataset.direction;
                    // Using 101% instead of 100% to avoid rendering problems.
                    // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
                    if (direction === 'bt') {
                        config.y = '101%';
                        configInner.y = '-101%';
                        configInner.x = '0%';
                    } else if (direction === 'tb') {
                        config.y = '-101%';
                        configInner.y = '101%';
                        configInner.x = '0%';
                    } else if (direction === 'lr') {
                        config.x = '-101%';
                        configInner.x = '101%';
                    } else if (direction === 'rl') {
                        config.x = '101%';
                        configInner.x = '-101%';
                    } else {
                        config.x = '101%';
                        config.y = '101%';
                        configInner.x = '-101%';
                        configInner.y = '-101%';
                    }

                    if (action === 'open') {
                        // Setting the initial values.
                        TweenMax.set(el, config);
                        TweenMax.set(innerEl, configInner);

                        // Animate.          

                        for (let i = 1; i <= x; i++) {
                            document.getElementById("sub-item-set--" + i.toString()).style.display = "none";
                        }

                        // for (let i = 1; i <= x; i++) {
                        //     document.getElementById("sub-item-set--" + i.toString() + "_mobile").style.display = "none";
                        // }

                        // for (let i = 1; i <= x; i++) {
                        //     if (selected_event === "event--" + i.toString()) {
                        //         console.log('hello' + i.toString() + 'mobile');
                        //         document.getElementById("sub-item-set--" + i.toString() + "_mobile").style.display = "block";
                        //     }
                        // }


                        TweenMax.to([el, innerEl], .9, {
                            ease: Quint.easeOut,
                            x: '0%',
                            y: '0%',
                            onComplete: () => animationEnd(pos)
                        });
                    } else {
                        TweenMax.to(el, 0.6, {
                            ease: Quart.easeInOut,
                            x: config.x || 0,
                            y: config.y || 0
                        });
                        TweenMax.to(innerEl, 0.6, {
                            ease: Quart.easeInOut,
                            x: configInner.x || 0,
                            y: configInner.y || 0,
                            onComplete: () => animationEnd(pos)
                        });
                    }
                });
            }

            TweenMax.to(this.DOM.openCtrl, action === 'open' ? 0.6 : 0.3, {
                delay: action === 'open' ? 0 : 0.3,
                ease: action === 'open' ? Quint.easeOut : Quad.easeOut,
                opacity: action === 'open' ? 0 : 1
            });

            // Main links animation.
            TweenMax.staggerTo(this.DOM.mainLinks, action === 'open' ? 0.9 : 0.2, {
                ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
                startAt: action === 'open' ? { y: '50%', opacity: 0 } : null,
                y: action === 'open' ? '0%' : '50%',
                opacity: action === 'open' ? 1 : 0
            }, action === 'open' ? 0.1 : -0.1);

            // Sidemenu links animation.
            TweenMax.staggerTo(this.DOM.sidemenuLinks, action === 'open' ? 0.5 : 0.2, {
                ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
                startAt: action === 'open' ? { y: '100%' } : null,
                y: action === 'open' ? '0%' : '100%'
            }, action === 'open' ? 0.05 : -0.05);


            if (screen.width < 500) {
                TweenMax.staggerTo(this.DOM.sidemenuLinks_mobile, action === 'open' ? 0.5 : 0.2, {
                    ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
                    startAt: action === 'open' ? { y: '100%' } : null,
                    y: action === 'open' ? '0%' : '100%'
                }, action === 'open' ? 0.05 : -0.05);
            }
            // The "Learn how to participate" menu link.
            // TweenMax.to(this.DOM.menulink, action === 'open' ? 0.9 : 0.6, {
            //     ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
            //     startAt: action === 'open' ? { x: '10%' } : null,
            //     x: action === 'open' ? '0%' : '10%'
            // });
        }
    }
    // Initialize the Menu.
    const menu = new Menu(document.querySelector('.menu'));

    // Preload images.
    // imagesLoaded(document.querySelector('.background'), {background: true}, () => document.body.classList.remove('loading'));

    // extra stuff..

    // From http://www.quirksmode.org/js/events_properties.html#position
    // Get the mouse position.
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy }
    };

    // Main image  tilt effect.
    class TiltFx {
        constructor() {
            this.DOM = { main: document.querySelector('.background') };
            // Number of layers (how many repeated image elements)
            this.layersTotal = 4;
            this.layout();
            this.initEvents();
        }
        layout() {
            let inner = '';
            for (let i = 0; i <= this.layersTotal - 1; ++i) {
                inner += '<div class="background__copy" style="background-image: url(https://d1mteuyxkcon0n.cloudfront.net/assets/images/1.jpg)"></div>';
            }
            this.DOM.main.innerHTML = inner;
            this.DOM.layers = Array.from(this.DOM.main.querySelectorAll('.background__copy'));
        }
        initEvents() {
                this.mousemoveFn = ev => requestAnimationFrame(() => this.tilt(ev));
                document.body.addEventListener('mousemove', this.mousemoveFn);
            }
            // Tilt the image wrap and texts when mouse moving the current slide.
        tilt(ev) {
                if (!allowTilt) return;
                const mousepos = getMousePos(ev);
                const bounds = this.DOM.main.getBoundingClientRect();
                // Mouse position relative to the main element (this.DOM.main).
                const relmousepos = {
                    x: mousepos.x - bounds.left,
                    y: mousepos.y - bounds.top
                };

                this.DOM.layers.forEach((layer, pos) => {
                    // Move the element from -val to val pixels in both x and y axis.
                    let val = (pos + 1);
                    let t = { x: [val, -val], y: [val, -val] },
                        r = { x: [-2, 2], y: [-val, val] },
                        s = { v: [1.03, 0.97] };

                    const transforms = {
                        translation: {
                            x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
                            y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0]
                        },
                        rotation: {
                            x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
                            y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0]
                        },
                        scale: {
                            v: (s.v[1] - s.v[0]) / bounds.height * relmousepos.y + s.v[0],
                        }
                    };

                    TweenMax.to(layer, 1.5, {
                        ease: 'Power1.easeOut',
                        x: transforms.translation.x,
                        y: transforms.translation.y,
                        rotationX: transforms.rotation.x,
                        rotationY: transforms.rotation.y,
                        scale: transforms.scale.v,
                    });
                });
            }
            // Scale up all the layers.
        zoom() {
            TweenMax.staggerTo(this.DOM.layers, 1.5, {
                ease: 'Expo.easeOut',
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1.1,
            }, 0.04);
        }
        reset() {
            TweenMax.staggerTo(this.DOM.layers, 1.5, {
                ease: 'Expo.easeOut',
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
            }, 0.07);
        }
    }

    let allowTilt = true;
    let selected_event = 'event--1';
    let selected_subevent = 'event-1-subevent-1';
    let mod_event = true;
    let mod_subevent = true;
    document.getElementById("problems_" + selected_event + "_" + selected_subevent).style.display = "block";
    document.getElementById("problems_" + selected_event + "_" + selected_subevent).addEventListener("click", function() {
        // document.getElementById("eventmenuid").style.display = "none";
        document.getElementById("probspage-" + selected_event + "-" + selected_subevent).style.display = "block";
        // console.log("probspage-" + selected_event + "-" + selected_subevent);
        // document.getElementById("landcontent").style.display = "none";
    });
    document.getElementById("regevent_" + selected_event + "_" + selected_subevent).style.display = "block";
    const tilt = new TiltFx();

}