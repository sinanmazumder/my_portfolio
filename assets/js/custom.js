jQuery(document).ready(function () {
    jQuery(".list").click(function () {
        jQuery(".list").removeClass("active"), jQuery(this).addClass("active")
    });
    const t = document.querySelectorAll(".list");

    function e() {
        t.forEach(t => t.classList.remove("active")), this.classList.add("active")
    }
    t.forEach(t => t.addEventListener("click", e));
    const i = document.querySelector(".nav").querySelectorAll("li"),
        o = i.length,
        s = document.querySelectorAll(".section"),
        c = s.length;
    for (let t = 0; t < o; t++) {
        i[t].querySelector("a").addEventListener("click", function () {
            n();
            for (let t = 0; t < o; t++) i[t].querySelector("a").classList.contains("active") && a(t), i[t].classList.contains("active") && a(t), i[t].querySelector("a").classList.remove("active"), i[t].classList.remove("active");
            this.classList.add("active"), r(this)
        })
    }

    function n() {
        for (let t = 0; t < c; t++) s[t].classList.remove("back-section")
    }

    function a(t) {
        s[t].classList.add("back-section")
    }

    function r(t) {
        for (let t = 0; t < c; t++) s[t].classList.remove("active");
        const e = t.getAttribute("href").split("#")[1];
        document.querySelector("#" + e).classList.add("active")
    }

    function l(t) {
        for (let e = 0; e < o; e++) {
            i[e].querySelector("a").classList.remove("active"), i[e].classList.remove("active");
            const o = t.getAttribute("href").split("#")[1];
            o === i[e].querySelector("a").getAttribute("href").split("#")[1] && i[e].querySelector("a").classList.add("active"), o === i[e].querySelector("a").getAttribute("href").split("#")[1] && i[e].classList.add("active")
        }
    }
    if (document.querySelector(".hire-me").addEventListener("click", function () {
            const t = this.getAttribute("data-section-index");
            r(this), l(this), n(), a(t)
        }), document.querySelector(".about-us").addEventListener("click", function () {
            const t = this.getAttribute("data-section-index");
            r(this), l(this), n(), a(t)
        }), jQuery(".mouse-cursor").length && jQuery("body")) {
        const t = document.querySelector(".cursor-inner"),
            e = document.querySelector(".cursor-outer");
        let i, o = 0,
            s = !1;
        window.onmousemove = function (c) {
            s || (e.style.transform = "translate(" + c.clientX + "px, " + c.clientY + "px)"), t.style.transform = "translate(" + c.clientX + "px, " + c.clientY + "px)", i = c.clientY, o = c.clientX
        }, jQuery("body").on("mouseenter", "a,.trigger, .cursor-pointer", function () {
            t.classList.add("cursor-hover"), e.classList.add("cursor-hover")
        }), jQuery("body").on("mouseleave", "a,.trigger, .cursor-pointer", function () {
            jQuery(this).is("a") && jQuery(this).closest(".cursor-pointer").length || (t.classList.remove("cursor-hover"), e.classList.remove("cursor-hover"))
        }), t.style.visibility = "visible", e.style.visibility = "visible"
    }
    jQuery("#testimonial").owlCarousel({
        loop: !0,
        margin: 20,
        dots: !0,
        nav: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
var mixer = mixitup(".portfolio-list");
jQuery(".funfacts-box").each(function () {
    var t = jQuery(this).offset().top - window.innerHeight,
        e = jQuery(this).find(".counter"),
        i = e.attr("data-to"),
        o = parseInt(e.attr("data-time"));
    t < jQuery(window).scrollTop() && jQuery({
        countNum: e.text()
    }).animate({
        countNum: i
    }, {
        duration: o,
        easing: "swing",
        step: function () {
            e.text(Math.floor(this.countNum))
        },
        complete: function () {
            e.text(this.countNum)
        }
    })
});
jQuery('.counting').countUp({
    delay: 20,
    duration: 2000,
});
let btn = document.getElementById("b1");

function mainDL() {
    const {
        Symbol: t,
        document: e,
        URL: i,
        File: o
    } = globalThis, {
        iterator: s
    } = t, c = t => null != t && s in {
        object: t
    } && "function" == typeof t[s], n = e.createElement.bind(e, "a"), {
        createObjectURL: a,
        revokeObjectURL: r
    } = i;
    ! function ({
        name: t = "resume",
        mime: e = "text/plain",
        charset: i = "UTF-8",
        body: s = "",
        url: l = a(new o(c(s) && "string" != typeof s ? s : [s], t, {
            type: `jQuery{e};charset=jQuery{i}`,
            ending: "native"
        }))
    } = {}) {
        try {
            const o = n();
            o.download = t, o.href = l, o.type = `jQuery{e}; charset=jQuery{i}`, o.target = "_self", o.click()
        } finally {
            r(l)
        }
    }()
}
btn.onclick = mainDL;
