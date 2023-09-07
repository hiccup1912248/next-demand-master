class button {
    static ready() {
        document.querySelectorAll(".button--glow").forEach(e=>{
            e.addEventListener("pointermove", t=>{
                e.style.setProperty("--pointer-x", t.clientX - e.getBoundingClientRect().left),
                e.style.setProperty("--pointer-y", t.clientY - e.getBoundingClientRect().top)
            }
            )
        }
        )
    }
}
class data_classes {
    static ready() {
        if (document.querySelector(".data-classes-upcoming") || document.querySelector(".data-classes-offering")) {
            var e = new XMLHttpRequest;
            e.addEventListener("load", ()=>{
                if (e.status >= 200 && e.status < 400) {
                    var t = JSON.parse(e.responseText);
                    if (document.querySelector(".data-classes-upcoming") && document.querySelectorAll(".data-classes-upcoming").forEach(e=>{
                        1 == t.length ? e.textContent = "We\u2019ve got 1 live class coming up" : t.length > 1 && (e.textContent = "We\u2019ve got " + t.length + " live classes coming up")
                    }
                    ),
                    document.querySelector(".data-classes-offering") && t.length > 0) {
                        document.querySelector(".data-classes-offering").innerHTML = "";
                        var o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                          , s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        for (var r of Array.from(t)) {
                            var l = new Date(r["class"].start_time);
                            document.querySelector(".data-classes-offering").insertAdjacentHTML("beforeend", "<dl><dt>" + o[l.getDay()] + ", " + s[l.getMonth()] + " " + l.getDate() + " at " + l.toLocaleString("en-US", {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: !0
                            }) + '</dt><dd><a class="button button--small" href="' + r["class"].webinar_link + '">Register for this class</a></dd></dl>')
                        }
                    }
                }
            }
            ),
            e.open("GET", "https://dash.37signals.com/support/classes/export.json"),
            e.send()
        }
    }
}
class data_day {
    static ready() {
        if (document.querySelector(".data-day")) {
            var e = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            document.querySelectorAll(".data-day").forEach(t=>{
                t.textContent = e[(new Date).getDay()]
            }
            )
        }
    }
}
class data_signups {
    static ready() {
        if (document.querySelector(".data-signups")) {
            var e = /^\/2/.test(window.location.pathname) ? "bcx" : "bc3"
              , t = new XMLHttpRequest;
            t.addEventListener("load", ()=>{
                if (t.status >= 200 && t.status < 400) {
                    var e = JSON.parse(t.responseText);
                    document.querySelectorAll(".data-signups").forEach(t=>{
                        t.textContent = e.signups
                    }
                    )
                }
            }
            ),
            t.open("GET", "https://dash.37signals.com/statistics/public?stat=" + e + "_signups"),
            t.send()
        }
    }
}
class features {
    static ready() {
        document.querySelector(".features__control--next") && document.querySelector(".features__control--prev") && document.addEventListener("keydown", e=>{
            39 == e.keyCode ? location.assign(document.querySelector(".features__control--next a").getAttribute("href")) : 37 == e.keyCode && location.assign(document.querySelector(".features__control--prev a").getAttribute("href"))
        }
        )
    }
}
class footer {
    static scroll() {
        var e = document.querySelector(".footer__signup");
        e && (scrollY > 0 ? (e.classList.add("footer__signup--peekaboo"),
        scrollY > document.querySelector(".site").offsetHeight - innerHeight ? e.classList.add("footer__signup--absolute") : e.classList.remove("footer__signup--absolute")) : e.classList.remove("footer__signup--peekaboo"))
    }
}
class illustration {
    static ready() {
        if (document.querySelector(".uo-illustration")) {
            var e = !1
              , t = document.querySelector(".uo-illustration__bubbles--l").children
              , o = Math.floor(Math.random() * t.length)
              , s = t.length - 1
              , r = o;
            function l() {
                e || (e = !0,
                r < s ? r++ : r = 0,
                c())
            }
            function c() {
                document.querySelector(".uo-illustration__bubbles--l img.selected") && document.querySelector(".uo-illustration__bubbles--l img.selected").classList.remove("selected"),
                document.querySelector(".uo-illustration__bubbles--r img.selected") && document.querySelector(".uo-illustration__bubbles--r img.selected").classList.remove("selected"),
                document.querySelectorAll(".uo-illustration__bubbles--l img").item(r).classList.add("selected"),
                document.querySelectorAll(".uo-illustration__bubbles--r img").item(r).classList.add("selected"),
                document.querySelector(".uo-illustration").classList.contains("uo-illustration--display") || document.querySelector(".uo-illustration").classList.add("uo-illustration--display"),
                setTimeout(function() {
                    e = !1,
                    document.querySelector(".uo-illustration").classList.contains("uo-illustration--transition") || document.querySelector(".uo-illustration").classList.add("uo-illustration--transition")
                }, 600)
            }
            document.querySelector(".uo-illustration button").addEventListener("click", function() {
                l()
            }),
            c()
        }
    }
}
class jlmdmj {
    static ready() {
        if (document.querySelector(".jlmdmj__headline") && window.jlmdmj.length) {
            var e = Math.floor(Math.random() * window.jlmdmj.length);
            document.querySelector(".jlmdmj__headline").innerHTML = window.jlmdmj[e].headline
        }
        if (document.querySelector(".jlmdmj__images")) {
            var t = document.querySelector(".jlmdmj__images div").children.length - 1
              , o = 0;
            function s() {
                o > 0 ? o-- : o = t,
                l()
            }
            function r() {
                o < t ? o++ : o = 0,
                l()
            }
            function l() {
                document.querySelector(".jlmdmj__images li.selected").classList.remove("selected"),
                document.querySelectorAll(".jlmdmj__images li").item(o).classList.add("selected"),
                document.querySelector(".jlmdmj__images picture.selected").classList.remove("selected"),
                document.querySelectorAll(".jlmdmj__images picture").item(o).classList.add("selected")
            }
            document.querySelector(".jlmdmj__images ul").firstElementChild.classList.add("selected"),
            document.querySelector(".jlmdmj__images div").firstElementChild.classList.add("selected"),
            document.querySelectorAll(".jlmdmj__images li").forEach((e,t)=>{
                e.addEventListener("click", function() {
                    e.classList.contains("selected") || (o = t,
                    l())
                })
            }
            ),
            document.querySelector(".jlmdmj__button--prev").addEventListener("click", function() {
                s()
            }),
            document.querySelector(".jlmdmj__button--next").addEventListener("click", function() {
                r()
            }),
            document.querySelector(".jlmdmj__images div").addEventListener("click", function() {
                r()
            })
        }
    }
}
class markup {
    static ready() {
        if (document.querySelector(".uo-markup")) {
            var e = 0;
            function t() {
                document.querySelector(".uo-markup__toggle--projects button.selected") && document.querySelector(".uo-markup__toggle--projects button.selected").classList.remove("selected"),
                // document.querySelectorAll(".uo-markup__toggle--projects button").item(e).classList.add("selected"),
                document.querySelector(".uo-markup__project.selected") && document.querySelector(".uo-markup__project.selected").classList.remove("selected"),
                document.querySelectorAll(".uo-markup__project").item(e).classList.add("selected"),
                1 == e ? document.querySelector(".uo-markup__toggle--notes").classList.add("uo-markup__toggle--display") : document.querySelector(".uo-markup__toggle--notes").classList.remove("uo-markup__toggle--display")
            }
            document.querySelectorAll(".uo-markup__toggle--projects button").forEach((o,s)=>{
                o.addEventListener("click", function() {
                    o.classList.contains("selected") || (e = s,
                    t())
                })
            }
            ),
            // document.querySelector(".uo-markup__toggle--notes button").addEventListener("click", function(e) {
            //     e.target.classList.contains("notes-hidden") ? (e.target.classList.remove("notes-hidden"),
            //     e.target.textContent = "Hide Notes",
            //     document.querySelector(".uo-markup__notes").classList.remove("uo-markup__notes--hide")) : (e.target.classList.add("notes-hidden"),
            //     e.target.textContent = "Show Notes",
            //     document.querySelector(".uo-markup__notes").classList.add("uo-markup__notes--hide"))
            // }),
            document.querySelector(".uo-markup__projects").addEventListener("click", function() {
                e = 0 == e ? 1 : 0,
                t()
            }),
            t()
        }
    }
}
class modal {
    static ready() {
        if (document.querySelector(".uo-modal")) {
            function e(e) {
                e.classList.contains("uo-modal__content--open") || e.classList.add("uo-modal__content--open"),
                document.querySelector("html").classList.contains("uo-modal-active") || document.querySelector("html").classList.add("uo-modal-active");
                var t = document.querySelector(".uo-modal__content--open");
                if (t.querySelector(".video")) {
                    document.querySelector(".uo-modal").classList.add("uo-modal--video");
                    var o = t.querySelector("iframe");
                    o.setAttribute("controls", "controls"),
                    // o.play(),
                    t.querySelector(".video__embed").classList.add("video__embed--playing")
                }
            }
            function t() {
                if (document.querySelector("html").classList.contains("uo-modal-active")) {
                    document.querySelector("html").classList.remove("uo-modal-active"),
                    document.querySelector(".uo-modal__container").scrollTo(0, 0);
                    var e = document.querySelector(".uo-modal__content--open");
                    if (e.querySelector(".video")) {
                        var t = e.querySelector("iframe");
                        t.removeAttribute("controls"),
                        t.pause(),
                        t.load(),
                        e.querySelector(".video__embed").classList.remove("video__embed--playing"),
                        document.querySelector(".uo-modal").classList.remove("uo-modal--video")
                    }
                    e.classList.remove("uo-modal__content--open")
                }
            }
            document.querySelector(".uo-modal__close").addEventListener("click", ()=>{
                t()
            }
            ),
            document.addEventListener("keydown", e=>{
                27 == e.keyCode && t()
            }
            ),
            document.querySelector(".uo-modal-trigger") && document.querySelectorAll(".uo-modal-trigger").forEach(t=>{
                t.addEventListener("click", t=>{
                    t.currentTarget.dataset.modal && e(document.querySelector(t.currentTarget.dataset.modal))
                }
                )
            }
            )
        }
    }
}
class pricing {
    static ready() {
        if (document.querySelector(".pricing-markup")) {
            let t = 0;
            function e() {
                document.querySelectorAll(".pricing-markup__toggle--projects button.selected").forEach(e=>{
                    e.classList.remove("selected")
                }
                ),
                document.querySelectorAll(".pricing-markup__project.selected").forEach(e=>{
                    e.classList.remove("selected")
                }
                );
                const e = document.querySelectorAll(".pricing-markup__toggle--projects button")[t]
                  , o = document.querySelectorAll(".pricing-markup__project")[t];
                e.classList.add("selected"),
                o.classList.add("selected");
                const s = document.querySelector(".pricing-markup__toggle")
                  , r = e.getBoundingClientRect()
                  , l = s.getBoundingClientRect()
                  , c = s.scrollLeft + r.left - l.left;
                s.scrollTo({
                    left: c,
                    behavior: "smooth"
                })
            }
            document.querySelectorAll(".pricing-markup__toggle--projects button").forEach((o,s)=>{
                o.addEventListener("click", function() {
                    o.classList.contains("selected") || (t = s,
                    e())
                })
            }
            ),
            e()
        }
    }
}
class quotes {
    static ready() {
        if (document.querySelector(".uo-quotes")) {
            var e = document.querySelector(".uo-quotes__quotes")
              , t = e.firstElementChild
              , o = 0
              , s = e.children.length - 2
              , r = 0
              , l = document.querySelector(".uo-quotes__control--prev")
              , c = document.querySelector(".uo-quotes__control--next")
              , a = document.querySelector(".uo-quotes__hotspot--prev")
              , d = document.querySelector(".uo-quotes__hotspot--next");
            function n() {
                o > 0 && (o--,
                i())
            }
            function u() {
                o < s && (o++,
                i())
            }
            function i() {
                o > 0 ? (l.disabled = !1,
                a.disabled = !1) : (l.disabled = !0,
                a.disabled = !0),
                o < s ? (c.disabled = !1,
                d.disabled = !1) : (c.disabled = !0,
                d.disabled = !0),
                document.querySelector(".uo-quotes__quotes blockquote.selected").classList.remove("selected"),
                document.querySelectorAll(".uo-quotes__quotes blockquote").item(o).classList.add("selected"),
                e.classList.contains("resize") && document.querySelector(".uo-quotes__quotes").classList.remove("resize"),
                r = (t.getBoundingClientRect().width + parseFloat(getComputedStyle(t).getPropertyValue("margin-right"))) * o,
                e.style.transform = `translateX(-${r}px)`
            }
            t.classList.add("selected"),
            l.disabled = !0,
            a.disabled = !0,
            l.addEventListener("click", function() {
                n()
            }),
            c.addEventListener("click", function() {
                u()
            }),
            a.addEventListener("click", function() {
                n()
            }),
            d.addEventListener("click", function() {
                u()
            })
        }
    }
    static resize() {
        if (document.querySelector(".uo-quotes")) {
            var e = document.querySelector(".uo-quotes__quotes")
              , t = e.firstElementChild
              , o = Array.from(e.children).indexOf(document.querySelector(".uo-quotes__quotes blockquote.selected"))
              , s = (t.getBoundingClientRect().width + parseFloat(getComputedStyle(t).getPropertyValue("margin-right"))) * o;
            e.classList.contains("resize") || document.querySelector(".uo-quotes__quotes").classList.add("resize"),
            e.style.transform = `translateX(-${s}px)`
        }
    }
}
class tagline {
    static ready() {
        if (document.querySelector(".header__tagline--js") && window.taglines.length) {
            var e = Math.floor(Math.random() * window.taglines.length);
            document.querySelector(".header__tagline--js span").textContent = window.taglines[e].tagline,
            1 == window.taglines[e].stars && document.querySelector(".header__tagline--js").classList.add("header__tagline--stars")
        }
    }
}
class video {
    static ready() {
        if (document.querySelectorAll(".video__embed").forEach(e=>{
            var t = e.querySelector("iframe")
              , o = t.textTracks
              , s = t.dataset.event;
            // o[0] && (o[0].mode = "hidden"),
            e.querySelector("button").addEventListener("click", function() {
                t.paused ? t.play() : t.pause()
            }),
            t.addEventListener("play", t=>{
                window.plausible && s && 0 == t.target.currentTime && plausible("Video Start", {
                    props: {
                        title: s
                    }
                }),
                e.classList.add("video__embed--playing"),
                t.target.setAttribute("controls", "controls")
            }
            ),
            t.addEventListener("ended", t=>{
                window.plausible && s && plausible("Video Finish", {
                    props: {
                        title: s
                    }
                }),
                e.classList.remove("video__embed--playing"),
                t.target.removeAttribute("controls"),
                t.target.load()
            }
            )
        }
        ),
        document.querySelector(".video--js") && document.querySelector(".video-chooser--js")) {
            var e = document.querySelector(".video--js")
              , t = document.querySelector(".video-chooser--js");
            t.querySelectorAll("button").forEach(o=>{
                o.addEventListener("click", function() {
                    if (!o.classList.contains("selected")) {
                        var s = e.querySelector(".video__embed.selected");
                        t.querySelector("button.selected").classList.remove("selected"),
                        o.classList.add("selected"),
                        s.querySelector("iframe").removeAttribute("controls"),
                        s.querySelector("iframe").load(),
                        s.classList.remove("selected", "video__embed--playing"),
                        e.querySelector(".video__embed." + o.dataset.video).classList.add("selected")
                    }
                })
            }
            )
        }
    }
}
class video_modal {
    static ready() {
        if (document.querySelector(".video-modal")) {
            function e() {
                document.querySelector("html").classList.remove("video-modal-active"),
                document.querySelector(".video-modal video").pause()
            }
            document.querySelector(".video-modal__background").addEventListener("click", ()=>{
                e()
            }
            ),
            document.querySelector(".video-modal__close").addEventListener("click", ()=>{
                e()
            }
            ),
            document.addEventListener("keydown", t=>{
                27 == t.keyCode && e()
            }
            )
        }
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    button.ready(),
    data_classes.ready(),
    data_day.ready(),
    data_signups.ready(),
    illustration.ready(),
    jlmdmj.ready(),
    features.ready(),
    // markup.ready(),
    modal.ready(),
    pricing.ready(),
    quotes.ready(),
    // tagline.ready(),
    video_modal.ready(),
    video.ready()
}
),
addEventListener("scroll", ()=>{
    footer.scroll()
}
),
addEventListener("resize", ()=>{
    quotes.resize()
}
);
//# sourceMappingURL=/assets/source-maps/script.js.map
//# sourceURL=_assets/javascripts/script.js
