var GestureSettingType = { unLock: "unLock", setting: "setting", smallUnLock: "smallUnLock", sm2_setting: "sm2_setting", sm2_unLock: "sm2_unLock" };
function GestureClass(opt) {
    var settingOption = {
        onSelected: null,
        onClosed: null,
        onChangeUser: null,
        onClearUser: null,
        isFirst: false,
        showTip: false,
        userName: "",
        lastDots: 4,
        hideLine: false,
        autoHideLine: false,
        loginRemain: "",
        loginUser: "",
        users: [],
        copyright: "",
        addAccount: "",
        mySwiper: null,
        blockGesture: false
    }

    var Message = {
        lbl_LockMsg_SetPWDSucc: "",
		lbl_LockRem_WrongPWD: "",
		lbl_LockMsg_ConfirmPWD: "",
		lbl_LockRem_4Point: "",
		lbl_LockMsg_SetPWD: "",
		lbl_LockView: "",
        lbl_note: "",
        lbl_LockMsg_KeepUser: "",
        lbl_Skip: "",
        lbl_ok: "",
    }

    var GesTipMsg = {
        'en': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
        'ch': { h: "忘記手勢密碼?", p1: "請點擊", p2: "回登入頁面，並且進入設定頁面重新設定手勢密碼。" },
        'cs': { h: "忘记手势密码?", p1: "请点击", p2: "回登入页面，并且进入设定页面重新设定手势密码。" },
        'zhcn': { h: "忘记手势密码?", p1: "请点击", p2: "回登入页面，并且进入设定页面重新设定手势密码。" },
        'vn': { h: "Quên hình vẽ mật khẩu?", p1: "Vui lòng bấm vào", p2: "để đăng nhập và thay đổi hình vẽ mật khẩu trong phần thiết lập." },
        'th': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
        'id': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
        'jp': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
        'ko': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
        'tl': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
        'mm': { h: "Forget gesture password?", p1: "Please tap", p2: "to login and reset gesture password in setting page." },
    }

    var GestureUI = {
        settingAction: {
            dispatch: {
                onSelected: function () {
                    if (settingOption.blockGesture == false) {
                        GestureUI.settingAction[GestureUI.settingStatus].onSelected();
                    }
                }
            },
            smallUnLock: {
                onSelected: function () {
                    $(".loading").show();
                    if (typeof settingOption.onSelected == "function") {
                        settingOption.onSelected(GestureUI.userPattern, this.onSuccess, this.onFail)
                    }
                },
                onSuccess: function () {
                    $("#lockHeading").html(""),
                    $(".patt-holder").removeClass("patt-error"),
                    $(".patt-holder").addClass("patt-success"),
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 3e2);
                },
                onFail: function (errCode, errMsg) {
                    $("#lockHeading").html("<span class='mhn-lock-failure'>" + errMsg + "</span>"),
                    $(".patt-holder").removeClass("patt-success"),
                    $(".patt-holder").addClass("patt-error");
                    if (errCode == 401) {
                        settingOption.autoHideLine = true;
                        settingOption.blockGesture = true;
                        if (typeof settingOption.onClearUser === "function") {
                            settingOption.onClearUser($("#gesUser").text());
                        }
                        $("li.active").remove();
                    }
                    $(".loading").hide();
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 5e2);
                    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
                    if (navigator.vibrate) {
                        navigator.vibrate(1000);
                    }
                }
            },
            sm2_unLock: {
                onSelected: function () {
                    $(".loading").show();
                    if (typeof settingOption.onSelected == "function") {
                        settingOption.onSelected(GestureUI.userPattern, this.onSuccess, this.onFail)
                    }
                },
                onSuccess: function () {
                    $("#lockHeading").html(""),
                    $(".patt-holder").removeClass("patt-error"),
                    $(".patt-holder").addClass("patt-success"),
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 3e2);
                },
                onFail: function (errCode, errMsg) {
                    $("#lockHeading").html("<span class='mhn-lock-failure'>" + errMsg + "</span>"),
                    $(".patt-holder").removeClass("patt-success"),
                    $(".patt-holder").addClass("patt-error");
                    if (errCode == 401) {
                        settingOption.autoHideLine = true;
                        settingOption.blockGesture = true;
                        if (typeof settingOption.onClearUser === "function") {
                            settingOption.onClearUser($("#gesUser").text());
                        }
                        $("li.active").remove();
                    }
                    $(".loading").hide();
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 5e2);
                    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
                    if (navigator.vibrate) {
                        navigator.vibrate(1000);
                    }
                }
            },
            unLock: {
                onSelected: function () {
                    $(".loading").show();
                    if (typeof settingOption.onSelected == "function") {
                        settingOption.onSelected(GestureUI.userPattern, this.onSuccess, this.onFail)
                    }
                },
                onSuccess: function () {
                    $("#lockHeading").html(""),
                    $(".patt-holder").removeClass("patt-error"),
                    $(".patt-holder").addClass("patt-success"),
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 3e2);
                },
                onFail: function (errCode, errMsg) {
                    $("#lockHeading").html("<span class='mhn-lock-failure'>" + errMsg + "</span>"),
                    $(".patt-holder").removeClass("patt-success"),
                    $(".patt-holder").addClass("patt-error");
                    if (errCode == 401) {
                        settingOption.autoHideLine = true;
                        settingOption.blockGesture = true;
                        if (typeof settingOption.onClearUser === "function") {
                            settingOption.onClearUser($("#gesUser").text());
                        }
                        $("li.active").remove();
                    }
                    $(".loading").hide();
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 5e2);
                    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
                    if (navigator.vibrate) {
                        navigator.vibrate(1000);
                    }
                }
            },
            setting: {
                onSelected: function () {
                    if (GestureUI.checkPattern == "") {
                        GestureUI.settingAction.setting.onConfirmStart();
                    }
                    else {
                        if (GestureUI.checkPattern == GestureUI.userPattern) {
                            $(".loading").show();
                            this.onSuccess();
                            GestureUI.checkPattern = "";
                        }
                        else {
                            this.onFail();
                        }
                    }
                },
                onSuccess: function () {
                    $("#lockHeading").html('<span>' + Message["lbl_LockMsg_SetPWDSucc"] + '</span>');
                    $("#lockNote").hide();
                    $("#lockSuccess").show();
                    $(".patt-holder").addClass("patt-success"),
                    $(".patt-holder").off("touchstart mousedown"),
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 6e2);
                    if (settingOption.onSelected) {
                        settingOption.onSelected(GestureUI.checkPattern);
                    }
                    $(".loading").hide();
                },
                onFail: function (val) {
                    $("#lockHeading").html("<span class='mhn-lock-failure'>" + Message["lbl_LockRem_WrongPWD"] + "</span>"),
                    $(".patt-holder").removeClass("patt-success"),
                    setTimeout(function () {
                        GestureUI.pattern.reset(),
                        $("#lockHeading").html('<span>' + Message["lbl_LockMsg_ConfirmPWD"] + '</span>')
                    }, 1e3);
                },
                onConfirmStart: function () {
                    if (GestureUI.checkPattern == "") {
                        if (GestureUI.userPattern.length >= settingOption.lastDots) {
                            $("#lockHeading").html('<span>' + Message["lbl_LockMsg_ConfirmPWD"] + '</span>'),
                            $(".patt-holder").addClass("patt-success"),
                            GestureUI.checkPattern = GestureUI.userPattern,
                            setTimeout(function () {
                                GestureUI.pattern.reset()
                            }, 1e3)
                        }
                        else {
                            $("#lockHeading").html("<span class='mhn-lock-failure'>" + Message["lbl_LockRem_4Point"] + "</span>");
                            setTimeout(function () {
                                GestureUI.pattern.reset()
                            }, 1e3)
                        }
                    }
                    else {
                        alert("Opps! Why r u here?");
                    }
                }
            },
            sm2_setting: {
                onSelected: function () {
                    if (GestureUI.checkPattern == "") {
                        GestureUI.settingAction.setting.onConfirmStart();
                    }
                    else {
                        if (GestureUI.checkPattern == GestureUI.userPattern) {
                            $(".loading").show();
                            this.onSuccess();
                            GestureUI.checkPattern = "";
                        }
                        else {
                            this.onFail();
                        }
                    }
                },
                onSuccess: function () {
                    $("#lockHeading").html('<span>' + Message["lbl_LockMsg_SetPWDSucc"] + '</span>');
                    $("#lockNote").hide();
                    $("#lockSuccess").css("display", "Flex");
                    $(".patt-holder").addClass("patt-success"),
                    $(".patt-holder").off("touchstart mousedown"),
                    setTimeout(function () {
                        GestureUI.pattern.reset()
                    }, 6e2);
                    if (settingOption.onSelected) {
                        settingOption.onSelected(GestureUI.checkPattern);
                    }
                    $(".loading").hide();
                },
                onFail: function (val) {
                    $("#lockHeading").html("<span class='mhn-lock-failure'>" + Message["lbl_LockRem_WrongPWD"] + "</span>"),
                    $(".patt-holder").removeClass("patt-success"),
                    setTimeout(function () {
                        GestureUI.pattern.reset(),
                        $("#lockHeading").html('<span>' + Message["lbl_LockMsg_ConfirmPWD"] + '</span>')
                    }, 1e3);
                },
                onConfirmStart: function () {
                    if (GestureUI.checkPattern == "") {
                        if (GestureUI.userPattern.length >= settingOption.lastDots) {
                            $("#lockHeading").html('<span>' + Message["lbl_LockMsg_ConfirmPWD"] + '</span>'),
                            $(".patt-holder").addClass("patt-success"),
                            GestureUI.checkPattern = GestureUI.userPattern,
                            setTimeout(function () {
                                GestureUI.pattern.reset()
                            }, 1e3)
                        }
                        else {
                            $("#lockHeading").html("<span class='mhn-lock-failure'>" + Message["lbl_LockRem_4Point"] + "</span>");
                            setTimeout(function () {
                                GestureUI.pattern.reset()
                            }, 1e3)
                        }
                    }
                }
            }
        },
        settingStatus: "",
        userPattern: "",
        checkPattern: "",
        pattern: null,
        setup: function (lockType) {
            this.settingStatus = ("undefined" == typeof lockType) ? this.settingName.unLock : lockType;
            GestureUI.checkPattern = "";
            this.lock(), this.filter(), this.colors()
        },
        lock: function () {
            $(".mhn-ui-page").hide(), $(".mhn-ui-page.page-lock").show(),
            $(".panel-heading").html("");
            GestureUI.pattern = new PatternLock(".mhn-lock", { margin: 15 })
            GestureUI.pattern.checkForPattern(GestureUI.checkPattern);
        },
        filter: function () {
            $(".mhn-ui-filter .mhn-ui-btn").click(function () {
                $(this).toggleClass("active"), $(".mhn-ui-filter-list").toggle(100)
            }), $(".mhn-ui-filter-list>div").click(function () {
                var t = $(this).data("filter");
                $(this).siblings().removeAttr("class"), $(this).addClass("active");
                var e = function (t) {
                    $(".mhn-ui-apps .mhn-ui-col").fadeOut(400), $('.mhn-ui-apps .mhn-ui-col[data-filter="' + t + '"]').fadeIn(400)
                };
                switch (t) {
                    case "all":
                        $(".mhn-ui-apps .mhn-ui-col").fadeIn(400);
                        break;
                    case "general":
                        e(t);
                        break;
                    case "social":
                        e(t);
                        break;
                    case "credits":
                        e(t)
                }
                $(".mhn-ui-filter-list").toggle(100), $(".mhn-ui-filter .mhn-ui-btn").removeClass("active"), $(".mhn-ui-page-title").text($(this).text())
            })
        },
        colors: function () {
            $(".mhn-ui-icon span").on("mouseover", function () {
                $(this).css("background", $(this).data("color"))
            }).on("mouseout", function () {
                $(this).removeAttr("style")
            })
        },
        closeGesture: function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        }
    }

    var Initial = function (lockType, t) {
        var e = window, n = document, a; //t = jquery
        function r(t) {
            for (var e = t.holder, n = t.option, a = n.matrix, r = n.margin, i = n.radius, o = ['<ul class="patt-wrap" style="padding:' + r + 'px">'], s = 0, l = a[0] * a[1]; l > s; s++)
                o.push('<li class="patt-circ" style="margin:' + r + "px; width : " + 2 * i + "px; height : " + 2 * i + "px; -webkit-border-radius: " + i + "px; -moz-border-radius: " + i + "px; border-radius: " + i + 'px; "><div class="patt-dots"></div></li>');
            o.push("</ul>"),
            e.html(o.join("")).css({ width: a[1] * (2 * i + 2 * r) + 2 * r + "px", height: a[0] * (2 * i + 2 * r) + 2 * r + "px" }),
            t.pattCircle = t.holder.find(".patt-circ")
        }
        function i(t, e, n, a) {
            var r = e - t, i = a - n;
            return {
                length: Math.ceil(Math.sqrt(r * r + i * i)),
                angle: Math.round(180 * Math.atan2(i, r) / Math.PI)
            }
        }
        function o() { }
        function s(e, n) {
            var a = this, i = a.token = Math.random(), h = p[i] = new o, u = h.holder = t(e);
            if (0 != u.length) {
                h.object = a, n = h.option = t.extend({}, s.defaults, n), r(h), u.addClass("patt-holder"), "static" == u.css("position") && u.css("position", "relative"),
                u.on("touchstart mousedown", function (t) { d.call(this, t, a) }),
                h.option.onDraw = n.onDraw || l;
                var c = n.mapper;
                h.mapperFunc = "object" == typeof c ? function (t) { return c[t] } : "function" == typeof c ? c : l, h.option.mapper = null
            }
        }
        var l = function () { }, p = {},
        d = function (e, a) {
            e.preventDefault();
            var r = p[a.token];
            if (!r.disabled) {
                r.option.patternVisible || r.holder.addClass("patt-hidden");
                var i = "touchstart" == e.type ? "touchmove" : "mousemove", o = "touchstart" == e.type ? "touchend" : "mouseup";
                t(this).on(i + ".pattern-move", function (t) { h.call(this, t, a) }),
                t(n).one(o, function () { u.call(this, e, a) });
                var s = r.holder.find(".patt-wrap"), l = s.offset();
                r.wrapTop = l.top, r.wrapLeft = l.left, a.reset()
            }
        },
        h = function (e, n) {
            e.preventDefault();
            var a = e.pageX || e.originalEvent.touches[0].pageX, r = e.pageY || e.originalEvent.touches[0].pageY, o = p[n.token], s = o.pattCircle, l = o.patternAry, d = o.option.lineOnMove,
            h = o.getIdxFromPoint(a, r), u = h.idx, c = o.mapperFunc(u) || u;
            if (l.length > 0) {
                var f = i(o.lineX1, h.x, o.lineY1, h.y);
                if (settingOption.autoHideLine === true) {
                    o.line.css({ width: f.length + 10 + "px", transform: "rotate(" + f.angle + "deg)", display: "none" })
                }
                else {
                    o.line.css({ width: f.length + 10 + "px", transform: "rotate(" + f.angle + "deg)" })
                }
            }
            if (u) {
                if (-1 == l.indexOf(c)) {
                    var v, m = t(s[u - 1]);
                    if (o.lastPosObj) {
                        for (var g = o.lastPosObj, x = g.i, w = g.j, b = Math.abs(h.i - x), j = Math.abs(h.j - w) ; (0 == b && j > 1 || 0 == j && b > 1 || j == b && j > 1) && (w != h.j || x != h.i) ;) {
                            x = b ? Math.min(h.i, x) + 1 : x,
                            w = j ? Math.min(h.j, w) + 1 : w,
                            b = Math.abs(h.i - x),
                            j = Math.abs(h.j - w);
                            var M = (w - 1) * o.option.matrix[1] + x,
                            y = o.mapperFunc(M) || M; -1 == l.indexOf(y) && (t(s[M - 1]).addClass("hovered"), l.push(y))
                        }
                        v = [], h.j - g.j > 0 ? v.push("s") : h.j - g.j < 0 ? v.push("n") : 0, h.i - g.i > 0 ? v.push("e") : h.i - g.i < 0 ? v.push("w") : 0, v = v.join("-")
                    }
                    if (settingOption.autoHideLine !== true) { m.addClass("hovered") };
                    l.push(c);
                    var P = o.option.margin, k = o.option.radius, C = (h.i - 1) * (2 * P + 2 * k) + 2 * P + k, O = (h.j - 1) * (2 * P + 2 * k) + 2 * P + k;
                    if (1 != l.length) {
                        var D = i(o.lineX1, C, o.lineY1, O);
                        if (settingOption.autoHideLine === true) {
                            o.line.css({ width: D.length + 10 + "px", transform: "rotate(" + D.angle + "deg)", display: "none" })
                        }
                        else {
                            o.line.css({ width: D.length + 10 + "px", transform: "rotate(" + D.angle + "deg)" })
                        }
                        d || o.line.show()
                    }
                    v && (o.lastElm.addClass(v + " dir"), o.line.addClass(v + " dir"));
                    var E = t('<div class="patt-lines" style="top:' + (O - 5) + "px; left:" + (C - 5) + 'px"></div>');
                    o.line = E, o.lineX1 = C, o.lineY1 = O, o.holder.append(E), d || o.line.hide(), o.lastElm = m
                }
                o.lastPosObj = h
            }
        },
        u = function (t, e) {
            t.preventDefault();
            var n = p[e.token], a = n.patternAry.join("");
            if (a.length > 0) {
                lr(a, a == GestureUI.checkPattern);
                n.holder.off(".pattern-move").removeClass("patt-hidden"),
                a && (n.option.onDraw(a), n.line.remove(), ((n.rightPattern == "" || n.rightPattern == a) ? GestureUI.settingAction.dispatch.onSelected() : (GestureUI.settingAction.dispatch.onSelected(), e.error())))
            }
        };
        o.prototype = {
            constructor: o,
            getIdxFromPoint: function (t, e) {
                var n = this.option, a = n.matrix,
                r = t - this.wrapLeft, i = e - this.wrapTop, o = null,
                s = n.margin, l = 2 * n.radius + 2 * s, p = Math.ceil(r / l),
                d = Math.ceil(i / l), h = r % l, u = i % l; return p <= a[1] && d <= a[0] && h > 2 * s && u > 2 * s && (o = (d - 1) * a[1] + p),
                { idx: o, i: p, j: d, x: r, y: i }
            }
        },
        s.prototype = {
            constructor: s,
            option: function (t, e) {
                var n = p[this.token], i = n.option;
                return e === a ? i[t] : (i[t] = e, void (("margin" == t || "matrix" == t || "radius" == t) && r(n)))
            },
            getPattern: function () {
                return p[this.token].patternAry.join("")
            },
            setPattern: function (t) {
                var e = p[this.token], n = e.option, a = n.matrix, r = n.margin, i = n.radius;
                if (n.enableSetPattern) {
                    this.reset(), e.wrapLeft = 0, e.wrapTop = 0;
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o] - 1, d = s % a[1], u = Math.floor(s / a[1]), c = d * (2 * r + 2 * i) + 2 * r + i, f = u * (2 * r + 2 * i) + 2 * r + i;
                        h.call(null, { pageX: c, pageY: f, preventDefault: l, originalEvent: { touches: [{ pageX: c, pageY: f }] } }, this)
                    }
                }
            },
            enable: function () {
                var t = p[this.token]; t.disabled = !1
            },
            disable: function () {
                var t = p[this.token]; t.disabled = !0
            },
            reset: function () {
                var t = p[this.token];
                t.pattCircle.removeClass("hovered dir s n w e s-w s-e n-w n-e"),
                t.holder.find(".patt-lines").remove(),
                t.patternAry = [], t.lastPosObj = null,
                t.holder.removeClass("patt-error patt-success"),
                t.rightPattern = GestureUI.checkPattern
            },
            error: function () {
                p[this.token].holder.addClass("patt-error")
            },
            checkForPattern: function (t) {
                var a = p[this.token];
                a.rightPattern = t;//, a.onSuccess = e || l, a.onError = n || l
            }
        },
        s.defaults = {
            matrix: [3, 3], margin: 20, radius: 25, patternVisible: !0, lineOnMove: !0, enableSetPattern: !1
        },
        e.PatternLock = s;
        GestureUI.setup(lockType);
    }

    var lr = function (u, r) {
        GestureUI.userPattern = u;
        //console.log(GestureUI.settingStatus + " / " + GestureUI.checkPattern + " / " + GestureUI.userPattern);
    }

	var CreditGenerateSettingHTML = function (opt) {
        _divLockView = document.createElement("div");
        $(_divLockView).attr("id", "lockViewDiv");
        $(_divLockView).attr("data-open", "true");
        _divLockView.className = "c-page";

        var divHeader = document.createElement("div");
        divHeader.className = "c-page__header";

        var divMainBar = document.createElement("div");
        divMainBar.className = "c-header-bar";

        var aBtnText = document.createElement("a");
        aBtnText.className = "c-btn";

        var iBack = document.createElement("i");
        iBack.className = "c-icon c-icon--back";

        var divTitle = document.createElement("span");
        divTitle.className = "c-text";

        $(iBack).appendTo($(aBtnText));
        $(aBtnText).appendTo($(divMainBar));
        $(divTitle).appendTo($(divMainBar));
        $(divMainBar).appendTo($(divHeader));

        var divContent = document.createElement("div");
        divContent.className = "c-page__container";

        var divWrap = document.createElement("div");
        divWrap.className = "c-gesture-pwd mhn-lock-wrap";

        var divHeading = document.createElement("div");
        divHeading.className = "c-gesture-pwd__header mhn-lock-title";
        

        var divMain = document.createElement("div");
        divMain.className = "c-gesture-pwd__main";

        var divLock = document.createElement("div");
        divLock.className = "mhn-lock patt-holder";

        $(divLock).appendTo($(divMain));
        
        var divNote = document.createElement("div");
        divNote.className = "c-gesture-pwd__note";

        var divNoteText = document.createElement("span");
        divNoteText.className = "c-text";
        
        $(divNoteText).appendTo($(divNote));
       
        var divSubmit = document.createElement("div");
        divSubmit.className = "c-gesture-pwd__submit";

        var divBtn = document.createElement("a");
        divBtn.className = "c-btn c-btn--primary";

        var divBtnText = document.createElement("div");
        divBtnText.className = "c-text";

        $(divBtnText).appendTo($(divBtn));
        $(divBtn).appendTo($(divSubmit));
        
        $(divHeading).attr("id", "lockHeading").appendTo($(divWrap));
        $(divMain).appendTo($(divWrap));
        $(divNote).appendTo($(divWrap));
        $(divSubmit).attr("id", "lockSuccess").appendTo($(divWrap));

        $(divWrap).appendTo($(divContent));

        $(divHeader).appendTo($(_divLockView));
        $(divContent).appendTo($(_divLockView));
		
		$(iBack).bind("click", function () {
			console.log(GestureUI.settingStatus + " / " + GestureSettingType.setting);
			if ((GestureUI.settingStatus === GestureSettingType.setting) && (GestureUI.checkPattern !== "")) {
				GestureUI.checkPattern = "";
                if(window._SiteMode == 0) {
                    $("#lockHeading").html('<span>' + Message["lbl_LockMsg_SetPWD"] + '</span>');
                } else {
                    $(".panel-heading").html('<span>' + Message["lbl_LockMsg_SetPWD"] + '</span>');
                }
			}
			else {
				$(_divLockView).hide();
				$(_divLockView).remove();
				_divLockView = null;
				if (typeof settingOption.onClosed === "function") {
					settingOption.onClosed();
				}
			}
		});
		$(divBtn).bind("click", function () {
			$(_divLockView).hide();
			$(_divLockView).remove();
			_divLockView = null;
			if (typeof settingOption.onClosed === "function") {
				settingOption.onClosed();
			}
		});
		setTimeout(function () {
            divTitle.innerText = Message["lbl_LockView"];
            divHeading.innerHTML = Message["lbl_LockMsg_SetPWD"];
            divNoteText.innerHTML = Message["lbl_note"] + ":" + Message["lbl_LockMsg_KeepUser"];
            divBtnText.innerHTML = Message["lbl_ok"];
			
		}, 10);
    }

	var GenerateSettingHTML = function (opt) {
		if (window._SkinMode == 3) {
			_divLockView = document.createElement("div");
			$(_divLockView).attr("id", "lockViewDiv");
            $(_divLockView).attr("data-full", "true");
			_divLockView.className = "page page-gesturePassword";

			var divHeader = document.createElement("div");
			divHeader.className = "page_header";
			var divMainbar = document.createElement("div");
			divMainbar.className = "main-bar";
			var aBtnText = document.createElement("div");
			aBtnText.className = "btn";
			var iBack = document.createElement("i");
			iBack.className = "icon icon-back";
			var divTitle = document.createElement("div");
			divTitle.className = "title";

			$(iBack).appendTo($(aBtnText));
			$(aBtnText).appendTo($(divMainbar));
			$(divTitle).appendTo($(divMainbar));
			$(divMainbar).appendTo($(divHeader));

			var divContent = document.createElement("div");
			divContent.className = "page_content";
			var divContentGroup = document.createElement("div");
			divContentGroup.className = "content_group";
			var divWrap = document.createElement("div");
			divWrap.className = "panel panel-default mhn-lock-wrap";
			var divHeading = document.createElement("div");
			divHeading.className = "panel-heading mhn-lock-title";
			$(divHeading).attr("id", "lockHeading").appendTo($(divWrap));

			var divBody = document.createElement("div");
			divBody.className = "panel-body";
			var divLock = document.createElement("div");
			divLock.className = "mhn-lock patt-holder";
			$(divLock).css({ "width": "300px", "height": "300px", "position": "relative" }).appendTo($(divBody));
			$(divBody).appendTo($(divWrap));

			var divFooter = document.createElement("div");
			divFooter.className = "panel-footer panel-note";
			var divNote = document.createElement("div");
			divNote.className = "title";
			var divSkip = document.createElement("div");
			divSkip.className = "btn btn-link btn-skip";
			$(divNote).appendTo($(divFooter));
			$(divSkip).appendTo($(divFooter));
			$(divFooter).attr("id", "lockNote").appendTo($(divWrap));

			var divSuccess = document.createElement("div");
			divSuccess.className = "panel-footer panel-success";
			var divBtn = document.createElement("div");
			divBtn.className = "btn btn-primary";
			$(divBtn).appendTo($(divSuccess));
			$(divSuccess).attr("id", "lockSuccess").appendTo($(divWrap));

			$(divWrap).appendTo($(divContentGroup));
			$(divContentGroup).appendTo($(divContent));

			$(divHeader).appendTo($(_divLockView));
			$(divContent).appendTo($(_divLockView));
		} else {
			_divLockView = document.createElement("div");
			$(_divLockView).attr("id", "lockViewDiv");
            $(_divLockView).attr("data-full", "true");
			_divLockView.className = "pagePanel gesturePwdPanel setFirst in";

			var divBackdrop = document.createElement("div");
			divBackdrop.className = "modal-backdrop in";
			$(divBackdrop).css({ "height": "736px" }).appendTo($(_divLockView));

			var divMain = document.createElement("div");
			divMain.className = "main";

			var divHeader = document.createElement("div");
			divHeader.className = "header";
			var divMainbar = document.createElement("div");
			divMainbar.className = "main-bar";
			var aBtnText = document.createElement("a");
			aBtnText.className = "btn text-hide";
			var iBack = document.createElement("i");
			iBack.className = "icon icon-back";
			var spanBack = document.createElement("span");
			spanBack.innerText = "Back";
			var divTitle = document.createElement("div");
			divTitle.className = "title";
			if (opt.first !== true) {
				_divLockView.className = "pagePanel gesturePwdPanel in";
			}
			$(iBack).appendTo($(aBtnText));
			$(spanBack).appendTo($(aBtnText));
			$(aBtnText).appendTo($(divMainbar));
			$(divTitle).appendTo($(divMainbar));
			$(divMainbar).appendTo($(divHeader));

			var divContent = document.createElement("div");
			divContent.className = "content";
			var divContentScroller = document.createElement("div");
			divContentScroller.className = "content-scroller";
			var divWrap = document.createElement("div");
			divWrap.className = "panel panel-default mhn-lock-wrap";
			var divHeading = document.createElement("div");
			divHeading.className = "panel-heading mhn-lock-title";
			$(divHeading).attr("id", "lockHeading").appendTo($(divWrap));
			var divBody = document.createElement("div");
			divBody.className = "panel-body";
			var divLock = document.createElement("div");
			divLock.className = "mhn-lock";
			$(divLock).css({ "width": "300px", "height": "300px", "position": "relative" }).appendTo($(divBody));
			$(divBody).appendTo($(divWrap));
			var divFooter = document.createElement("div");
			divFooter.className = "panel-footer panel-note";
			var divNote = document.createElement("div");
			divNote.className = "title";
			$(divNote).appendTo($(divFooter));
			var divBox = document.createElement("div");
			divBox.className = "box";
			var divFlex = document.createElement("div");
			divFlex.className = "box-flex";
			$(divFlex).appendTo($(divBox));
			var divSkip = document.createElement("div");
			divSkip.className = "btn btn-link btn-skip";
			$(divSkip).appendTo($(divBox));
			$(divBox).appendTo($(divFooter));
			$(divFooter).attr("id", "lockNote").appendTo($(divWrap));
			var divSuccess = document.createElement("div");
			divSuccess.className = "panel-footer panel-success";
			var divBtn = document.createElement("div");
			divBtn.className = "btn btn-primary";
			$(divBtn).appendTo($(divSuccess));
			$(divSuccess).attr("id", "lockSuccess").appendTo($(divWrap));
			$(divWrap).appendTo($(divContentScroller));
			$(divContentScroller).appendTo($(divContent));

			$(divHeader).appendTo($(divMain));
			$(divContent).appendTo($(divMain));
			$(divMain).appendTo($(_divLockView));

			var divLoading = document.createElement("div");
			divLoading.className = "loading";
			var iLoading = document.createElement("i");
			iLoading.className = "icon-loading";
			$(iLoading).html("<span></span><span></span><span></span><span></span>");
			$(iLoading).appendTo($(divLoading));
			$(divLoading).css({ "display": "none" }).appendTo($(_divLockView));
		}

       
		$(iBack).bind("click", function () {
			console.log(GestureUI.settingStatus + " / " + GestureSettingType.setting);
			if ((GestureUI.settingStatus === GestureSettingType.setting) && (GestureUI.checkPattern !== "")) {
				GestureUI.checkPattern = "";
				$(".panel-heading").html('<span>' + Message["lbl_LockMsg_SetPWD"] + '</span>');
			}
			else {
				$(_divLockView).hide();
				$(_divLockView).remove();
				_divLockView = null;
				if (typeof settingOption.onClosed === "function") {
					settingOption.onClosed();
				}
			}
		});
		$(divSkip).bind("click", function () {
			$(_divLockView).hide();
			$(_divLockView).remove();
			_divLockView = null;
			if (typeof settingOption.onClosed === "function") {
				settingOption.onClosed();
			}
		});
		$(divBtn).bind("click", function () {
			$(_divLockView).hide();
			$(_divLockView).remove();
			_divLockView = null;
			if (typeof settingOption.onClosed === "function") {
				settingOption.onClosed();
			}
		});
		setTimeout(function () {
			if (window._SkinMode == 3) {
				divTitle.innerText = Message["lbl_LockView"];
				divHeading.innerHTML = Message["lbl_LockMsg_SetPWD"];
				divNote.innerHTML = Message["lbl_note"] + ":" + Message["lbl_LockMsg_KeepUser"];
				divSkip.innerHTML = Message["lbl_Skip"];
				divBtn.innerHTML = Message["lbl_ok"];
			} else {
				divTitle.innerText = Message["lbl_LockView"];
				divHeading.innerHTML = Message["lbl_LockMsg_SetPWD"];
				divNote.innerHTML = Message["lbl_note"] + ":";
				divFlex.innerHTML = Message["lbl_LockMsg_KeepUser"];
				divSkip.innerHTML = Message["lbl_Skip"];
				divBtn.innerHTML = Message["lbl_ok"];
			}
		}, 10);
    }

    var GenerateSM2SettingHTML = function (opt) {
        _divHeader = document.createElement("div");
        _divHeader.className = "content_title";

        _divLockView = document.createElement("div");
        $(_divLockView).attr("id", "lockViewDiv");
        if (opt.first == true) {
            _divLockView.className = "gesturepw setFirst";
        }
        else {
            _divLockView.className = "gesturepw";
        }

        var divWrap = document.createElement("div");
        divWrap.className = "mhn-lock-wrap";
        var divHeading = document.createElement("div");
        divHeading.className = "mhn-lock-title";
        $(divHeading).attr("id", "lockHeading").appendTo($(divWrap));
        var divLock = document.createElement("div");
        divLock.className = "mhn-lock patt-holder";
        $(divLock).css({ "width": "300px", "height": "300px", "position": "relative" }).appendTo($(divWrap));

        $(divWrap).appendTo($(_divLockView));

        var divNote = document.createElement("div");
        divNote.className = "gesturepw_comment";
        var divText = document.createElement("div");
        divText.className = "gesturepw_text";
        var divSkip = document.createElement("div");
        divSkip.className = "btn";
        $(divText).appendTo($(divNote));
        $(divSkip).appendTo($(divNote));
        $(divNote).attr("id", "lockNote").appendTo($(_divLockView));

        var divNote = document.createElement("div");
        divNote.className = "gesturepw_comment";

        var divSuccess = document.createElement("div");
        divSuccess.className = "btn-group";
        var divBtn = document.createElement("div");
        divBtn.className = "btn btn-secondary";
        $(divBtn).appendTo($(divSuccess));
        $(divSuccess).attr("id", "lockSuccess").appendTo($(_divLockView));

        $(divSkip).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            $(_divHeader).remove();
            _divLockView = null;
            _divHeader = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });

        $(divBtn).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            $(_divHeader).remove();
            _divLockView = null;
            _divHeader = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });

        setTimeout(function () {
            _divHeader.innerText = Message["lbl_LockView"];
            divHeading.innerText = Message["lbl_LockMsg_SetPWD"];
            divText.innerText = Message["lbl_note"] + ":" + Message["lbl_LockMsg_KeepUser"];
            divSkip.innerHTML = Message["lbl_Skip"];
            divBtn.innerHTML = Message["lbl_ok"];
        }, 10);
    }

    var GenerateUnLockHTML = function (opt) {
        _divLockView = document.createElement("div");
        $(_divLockView).attr("id", "lockViewDiv");
        _divLockView.className = "gestureInputPage in";

        var divBackdrop = document.createElement("div");
        divBackdrop.className = "modal-backdrop";
        $(divBackdrop).attr("id", "gBackdrop").appendTo(_divLockView);

        var divWrap = document.createElement("div");
        divWrap.className = "gestureInputPanel mhn-lock-wrap";

        var divAccount = document.createElement("div");
        divAccount.className = "account-dropdown";
        var divBtn = document.createElement("div");
        divBtn.className = "btn";
        var iAccount = document.createElement("i");
        iAccount.className = "icon icon-account";
        $(iAccount).appendTo($(divBtn));
        var spanText = document.createElement("span");
        spanText.className = "text-username";
        spanText.id = "gesUser";
        $(spanText).appendTo($(divBtn));
        var spanCaret = document.createElement("span");
        spanCaret.className = "caret";
        $(spanCaret).appendTo($(divBtn));
        $(divBtn).appendTo($(divAccount));
        var ulDropdown = document.createElement("ul");
        ulDropdown.className = "dropdown-menu";
        if (settingOption.users.length > 1) {
            for (var userIdx in settingOption.users) {
                var liUser = document.createElement("li");
                if (settingOption.users[userIdx] == settingOption.userName) {
                    liUser.className = "active";
                }
                var aUser = document.createElement("a");
                var iAcc = document.createElement("i");
                iAcc.className = "icon icon-account";
                $(iAcc).appendTo($(aUser));
                var spanUser = document.createElement("span");
                spanUser.className = "text-username";
                spanUser.innerText = settingOption.users[userIdx];
                $(spanUser).appendTo($(aUser));
                $(aUser).appendTo($(liUser));
                var aClear = document.createElement("a");
                aClear.className = "btn btn-clear";
                var iClear = document.createElement("i");
                iClear.className = "icon icon-clear";
                $(iClear).appendTo($(aClear));
                $(aClear).attr("id", "Clear_" + userIdx).appendTo($(liUser));
                var aDelete = document.createElement("a");
                aDelete.className = "btn btn-delete";
                var iDelete = document.createElement("i");
                iDelete.className = "icon icon-delete-outline";
                $(iDelete).appendTo($(aDelete));
                $(aDelete).attr("id", "Delete_" + userIdx).appendTo($(liUser));
                $(liUser).appendTo($(ulDropdown));

                $(aUser).bind("click", function () {
                    $("li").removeClass("active");
                    $(this).parent().addClass("active");
                    var currUser = $(this).text();
                    $("#gesUser").text(currUser);
                    if (typeof settingOption.onChangeUser === "function") {
                        settingOption.onChangeUser(currUser);
                    }
                    settingOption.blockGesture = false;
                    settingOption.autoHideLine = settingOption.hideLine;
                    $("#lockHeading").html(settingOption.loginRemain);
                    $(divAccount).removeClass("open");
                    $(".delete").removeClass("delete");
                    $("#gBackdrop").hide();
                });
                $(aClear).bind("click", function () {
                    $(".delete").removeClass("delete");
                    var liUser = $(this).parent();
                    liUser.addClass("delete");
                });
                $(aDelete).bind("click", function () {
                    var liUser = $(this).parent();
                    var currUser = liUser.find(".text-username").text();
                    var ulUser = $(this).parent().parent();
                    $(this).parent().remove();
                    if (liUser.hasClass("active")) {
                        var newLiUser = ulUser.find("li:first-child");
                        newLiUser.addClass("active");
                        var newUser = newLiUser.find(".text-username").text();
                        $("#gesUser").text(newUser);
                        if (typeof settingOption.onChangeUser === "function") {
                            settingOption.onChangeUser(newUser);
                        }
                        $("#lockHeading").html(settingOption.loginRemain);
                    };
                    if (ulUser.find(".icon-clear").length <= 1) {
                        ulUser.parent().addClass("single");
                    }
                    if (typeof settingOption.onClearUser === "function") {
                        settingOption.onClearUser(currUser);
                    }
                    $(divAccount).removeClass("open");
                    $("#gBackdrop").hide();
                });
            }

            $(divBtn).bind("click", function (e) {
                $(divAccount).addClass("open");
                $("#gBackdrop").show();
            });
        }
        else {
            $(divAccount).addClass("single");
        }
        var liDivider = document.createElement("li");
        liDivider.className = "divider";
        $(liDivider).appendTo($(ulDropdown));
        var liAddAcc = document.createElement("li");
        liAddAcc.className = "addAccount";
        var aAddAcc = document.createElement("a");
        var iAddAcc = document.createElement("i");
        iAddAcc.className = "icon icon-account-add";
        var spanAddAcc = document.createElement("span");
        spanAddAcc.className = "text-username";
        spanAddAcc.innerText = settingOption.addAccount;
        $(iAddAcc).appendTo($(aAddAcc));
        $(spanAddAcc).appendTo($(aAddAcc));
        $(aAddAcc).appendTo($(liAddAcc));
        $(liAddAcc).appendTo($(ulDropdown));
        $(ulDropdown).appendTo($(divAccount));
        var divKeyPad = document.createElement("div");
        divKeyPad.className = "btn btn-keypad";
        var iKeyPad = document.createElement("i");
        iKeyPad.className = "icon icon-keypad";
        $(iKeyPad).appendTo($(divKeyPad));
        
        if (settingOption.showTip == true) {
            var divTip = document.createElement("div");
            divTip.className = "tooltip-panel in";
            var divTipClear = document.createElement("div");
            divTipClear.className = "btn btn-clear";
            var iTipClear = document.createElement("i");
            iTipClear.className = "icon icon-clear";
            $(iTipClear).appendTo($(divTipClear));
            $(divTipClear).appendTo($(divTip));
            var h2Tip = document.createElement("h2");
            $(h2Tip).attr("id", "H2Tip").append(GesTipMsg[opt.lang]["h"]).appendTo($(divTip));
            var pTip = document.createElement("p");
            $(pTip).append(GesTipMsg[opt.lang]["p1"] + " <span class='sampleicon'><i class='icon icon-keypad'></i></span> " + GesTipMsg[opt.lang]["p2"]);
            $(pTip).attr("id", "PTip").appendTo($(divTip));

            $(iTipClear).bind("click", function () {
                $("#GesTip").removeClass("in");
            });
        }

        var divHeading = document.createElement("div");
        divHeading.className = "panel-heading mhn-lock-title";
        $(divHeading).attr("id", "lockHeading").appendTo($(divWrap));
        var divBody = document.createElement("div");
        divBody.className = "panel-body";
        var divLock = document.createElement("div");
        divLock.className = "mhn-lock";
        $(divLock).css({ "width": "300px", "height": "300px", "position": "relative" }).appendTo($(divBody));
        $(divBody).appendTo($(divWrap));
        $(divWrap).appendTo($(_divLockView));

        $(iKeyPad).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });
        $(aAddAcc).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });
        $(divBackdrop).bind("click", function () {
            $("#userSelecter").removeClass("open");
            $(".delete").removeClass("delete");
            $("#gBackdrop").hide();
        });
        setTimeout(function () {
            spanText.innerHTML = settingOption.userName;
            divHeading.innerHTML = settingOption.loginRemain;
        }, 1e1);
    }

    var GenerateSmallUnLockHTML = function (opt) {
        _divLockView = document.createElement("div");
        $(_divLockView).attr("id", "gestureInput");
        _divLockView.className = "gestureInputPanel mhn-lock-wrap";

        var divBackdrop = document.createElement("div");
        divBackdrop.className = "modal-backdrop backdrop-gesture";
        $(divBackdrop).attr("id", "gBackdrop").appendTo(_divLockView);

        var divAccount = document.createElement("div");
        divAccount.className = "account-dropdown";
        var divBtn = document.createElement("div");
        divBtn.className = "btn";
        var iAccount = document.createElement("i");
        iAccount.className = "icon icon-account";
        $(iAccount).appendTo($(divBtn));
        var spanText = document.createElement("span");
        spanText.className = "text-username";
        spanText.id = "gesUser";
        $(spanText).appendTo($(divBtn));
        var spanCaret = document.createElement("span");
        spanCaret.className = "caret";
        $(spanCaret).appendTo($(divBtn));
        $(divBtn).appendTo($(divAccount));
        var ulDropdown = document.createElement("ul");
        ulDropdown.className = "dropdown-menu";
        if (settingOption.users.length > 1) {
            for (var userIdx in settingOption.users) {
                var liUser = document.createElement("li");
                if (settingOption.users[userIdx] == settingOption.userName) {
                    liUser.className = "active";
                }
                var aUser = document.createElement("a");
                var iAcc = document.createElement("i");
                iAcc.className = "icon icon-account";
                $(iAcc).appendTo($(aUser));
                var spanUser = document.createElement("span");
                spanUser.className = "text-username";
                spanUser.innerText = settingOption.users[userIdx];
                $(spanUser).appendTo($(aUser));
                $(aUser).appendTo($(liUser));
                var aClear = document.createElement("a");
                aClear.className = "btn btn-clear";
                var iClear = document.createElement("i");
                iClear.className = "icon icon-clear";
                $(iClear).appendTo($(aClear));
                $(aClear).attr("id", "Clear_" + userIdx).appendTo($(liUser));
                var aDelete = document.createElement("a");
                aDelete.className = "btn btn-delete";
                var iDelete = document.createElement("i");
                iDelete.className = "icon icon-delete-outline";
                $(iDelete).appendTo($(aDelete));
                $(aDelete).attr("id", "Delete_" + userIdx).appendTo($(liUser));
                $(liUser).appendTo($(ulDropdown));

                $(aUser).bind("click", function () {
                    $("li").removeClass("active");
                    $(this).parent().addClass("active");
                    var currUser = $(this).text();
                    $("#gesUser").text(currUser);
                    if (typeof settingOption.onChangeUser === "function") {
                        settingOption.onChangeUser(currUser);
                    }
                    settingOption.blockGesture = false;
                    settingOption.autoHideLine = settingOption.hideLine;
                    $("#lockHeading").html(settingOption.loginRemain);
                    $(divAccount).removeClass("open");
                    $(".delete").removeClass("delete");
                    $("#gBackdrop").hide();
                });
                $(aClear).bind("click", function () {
                    $(".delete").removeClass("delete");
                    var liUser = $(this).parent();
                    liUser.addClass("delete");
                });
                $(aDelete).bind("click", function () {
                    var liUser = $(this).parent();
                    var currUser = liUser.find(".text-username").text();
                    var ulUser = $(this).parent().parent();
                    $(this).parent().remove();
                    if (liUser.hasClass("active")) {
                        var newLiUser = ulUser.find("li:first-child");
                        newLiUser.addClass("active");
                        var newUser = newLiUser.find(".text-username").text();
                        $("#gesUser").text(newUser);
                        if (typeof settingOption.onChangeUser === "function") {
                            settingOption.onChangeUser(newUser);
                        }
                        $("#lockHeading").html(settingOption.loginRemain);
                    };
                    if (ulUser.find(".icon-clear").length <= 1) {
                        ulUser.parent().addClass("single");
                    }
                    if (typeof settingOption.onClearUser === "function") {
                        settingOption.onClearUser(currUser);
                    }
                    $(divAccount).removeClass("open");
                    $("#gBackdrop").hide();
                });
            }

            $(divBtn).bind("click", function (e) {
                $(divAccount).addClass("open");
                $("#gBackdrop").show();
            });
        }
        else {
            $(divAccount).addClass("single");
        }
        var liDivider = document.createElement("li");
        liDivider.className = "divider";
        $(liDivider).appendTo($(ulDropdown));
        var liAddAcc = document.createElement("li");
        liAddAcc.className = "addAccount";
        var aAddAcc = document.createElement("a");
        var iAddAcc = document.createElement("i");
        iAddAcc.className = "icon icon-account-add";
        var spanAddAcc = document.createElement("span");
        spanAddAcc.className = "text-username";
        spanAddAcc.innerText = settingOption.addAccount;
        $(iAddAcc).appendTo($(aAddAcc));
        $(spanAddAcc).appendTo($(aAddAcc));
        $(aAddAcc).appendTo($(liAddAcc));
        $(liAddAcc).appendTo($(ulDropdown));
        $(ulDropdown).appendTo($(divAccount));
        var divKeyPad = document.createElement("div");
        divKeyPad.className = "btn btn-keypad";
        var iKeyPad = document.createElement("i");
        iKeyPad.className = "icon icon-keypad";
        $(iKeyPad).appendTo($(divKeyPad));

        if (settingOption.showTip == true) {
            var divTip = document.createElement("div");
            divTip.className = "tooltip-panel in";
            var divTipClear = document.createElement("div");
            divTipClear.className = "btn btn-clear";
            var iTipClear = document.createElement("i");
            iTipClear.className = "icon icon-clear";
            $(iTipClear).appendTo($(divTipClear));
            $(divTipClear).appendTo($(divTip));
            var h2Tip = document.createElement("h2");
            $(h2Tip).attr("id", "H2Tip").append(GesTipMsg[opt.lang]["h"]).appendTo($(divTip));
            var pTip = document.createElement("p");
            $(pTip).append(GesTipMsg[opt.lang]["p1"] + " <span class='sampleicon'><i class='icon icon-keypad'></i></span> " + GesTipMsg[opt.lang]["p2"]);
            $(pTip).attr("id", "PTip").appendTo($(divTip));

            $(iTipClear).bind("click", function () {
                $("#GesTip").removeClass("in");
            });
        }


        var divHeading = document.createElement("div");
        divHeading.className = "panel-heading mhn-lock-title";
        $(divHeading).attr("id", "lockHeading").appendTo($(_divLockView));
        var divBody = document.createElement("div");
        divBody.className = "panel-body";
        var divLock = document.createElement("div");
        divLock.className = "mhn-lock";
        $(divLock).css({ "width": "300px", "height": "300px", "position": "relative" }).appendTo($(divBody));
        $(divBody).appendTo($(_divLockView));

        $(iKeyPad).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });
        $(aAddAcc).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });

        $(divBackdrop).bind("click", function () {
            $("#userSelecter").removeClass("open");
            $(".delete").removeClass("delete");
            $("#gBackdrop").hide();
        });

        setTimeout(function () {
            spanText.innerHTML = settingOption.userName;
            divHeading.innerHTML = settingOption.loginRemain;
        }, 1e1);
    }

    var GenerateSM2UnLockHTML = function (opt) {
        _divLockView = document.createElement("div");
        $(_divLockView).attr("id", "lockViewDiv");
        _divLockView.className = "gestureInputPage";

        var divBackdrop = document.createElement("div");
        divBackdrop.className = "modal-backdrop";
        $(divBackdrop).attr("id", "gBackdrop").appendTo(_divLockView);

        var divGesturepw = document.createElement("div");
        divGesturepw.className = "gesturepw";
        
        var divAccount = document.createElement("div");
        divAccount.className = "account-dropdown";
        var divBtn = document.createElement("div");
        divBtn.className = "btn";
        var iAccount = document.createElement("i");
        iAccount.className = "icon icon-account";
        $(iAccount).appendTo($(divBtn));
        var spanText = document.createElement("span");
        spanText.className = "text-username";
        spanText.id = "gesUser";
        $(spanText).appendTo($(divBtn));
        var spanCaret = document.createElement("span");
        spanCaret.className = "caret";
        $(spanCaret).appendTo($(divBtn));
        $(divBtn).appendTo($(divAccount));
        var ulDropdown = document.createElement("ul");
        ulDropdown.className = "dropdown-menu";
        if (settingOption.users.length > 1) {
            for (var userIdx in settingOption.users) {
                var liUser = document.createElement("li");
                if (settingOption.users[userIdx] == settingOption.userName) {
                    liUser.className = "active";
                }
                var aUser = document.createElement("a");
                var iAcc = document.createElement("i");
                iAcc.className = "icon icon-account";
                $(iAcc).appendTo($(aUser));
                var spanUser = document.createElement("span");
                spanUser.className = "text-username";
                spanUser.innerText = settingOption.users[userIdx];
                $(spanUser).appendTo($(aUser));
                $(aUser).appendTo($(liUser));
                var aClear = document.createElement("a");
                aClear.className = "btn btn-clear";
                var iClear = document.createElement("i");
                iClear.className = "icon icon-clear";
                $(iClear).appendTo($(aClear));
                $(aClear).attr("id", "Clear_" + userIdx).appendTo($(liUser));
                var aDelete = document.createElement("a");
                aDelete.className = "btn btn-delete";
                var iDelete = document.createElement("i");
                iDelete.className = "icon icon-delete-outline";
                $(iDelete).appendTo($(aDelete));
                $(aDelete).attr("id", "Delete_" + userIdx).appendTo($(liUser));
                $(liUser).appendTo($(ulDropdown));

                $(aUser).bind("click", function () {
                    $("li").removeClass("active");
                    $(this).parent().addClass("active");
                    var currUser = $(this).text();
                    $("#gesUser").text(currUser);
                    if (typeof settingOption.onChangeUser === "function") {
                        settingOption.onChangeUser(currUser);
                    }
                    settingOption.blockGesture = false;
                    settingOption.autoHideLine = settingOption.hideLine;
                    $("#lockHeading").html(settingOption.loginRemain);
                    $(divAccount).removeClass("open");
                    $(".delete").removeClass("delete");
                    $("#gBackdrop").hide();
                });
                $(aClear).bind("click", function () {
                    $(".delete").removeClass("delete");
                    var liUser = $(this).parent();
                    liUser.addClass("delete");
                });
                $(aDelete).bind("click", function () {
                    var liUser = $(this).parent();
                    var currUser = liUser.find(".text-username").text();
                    var ulUser = $(this).parent().parent();
                    $(this).parent().remove();
                    if (liUser.hasClass("active")) {
                        var newLiUser = ulUser.find("li:first-child");
                        newLiUser.addClass("active");
                        var newUser = newLiUser.find(".text-username").text();
                        $("#gesUser").text(newUser);
                        if (typeof settingOption.onChangeUser === "function") {
                            settingOption.onChangeUser(newUser);
                        }
                        $("#lockHeading").html(settingOption.loginRemain);
                    };
                    if (ulUser.find(".icon-clear").length <= 1) {
                        ulUser.parent().addClass("single");
                    }
                    if (typeof settingOption.onClearUser === "function") {
                        settingOption.onClearUser(currUser);
                    }
                    $(divAccount).removeClass("open");
                    $("#gBackdrop").hide();
                });
            }

            $(divBtn).bind("click", function (e) {
                $(divAccount).addClass("open");
                $("#gBackdrop").show();
            });
        }
        else {
            $(divAccount).addClass("single");
        }
        var liDivider = document.createElement("li");
        liDivider.className = "divider";
        $(liDivider).appendTo($(ulDropdown));
        var liAddAcc = document.createElement("li");
        liAddAcc.className = "addAccount";
        var aAddAcc = document.createElement("a");
        var iAddAcc = document.createElement("i");
        iAddAcc.className = "icon icon-account-add";
        var spanAddAcc = document.createElement("span");
        spanAddAcc.className = "text-username";
        spanAddAcc.innerText = settingOption.addAccount;
        $(iAddAcc).appendTo($(aAddAcc));
        $(spanAddAcc).appendTo($(aAddAcc));
        $(aAddAcc).appendTo($(liAddAcc));
        $(liAddAcc).appendTo($(ulDropdown));
        $(ulDropdown).appendTo($(divAccount));
        var divKeyPad = document.createElement("div");
        divKeyPad.className = "btn btn-keypad";
        var iKeyPad = document.createElement("i");
        iKeyPad.className = "icon icon-keypad";
        $(iKeyPad).appendTo($(divKeyPad));
        if (settingOption.showTip == true) {
            var divTip = document.createElement("div");
            divTip.className = "tooltip-panel in";
            var divTipClear = document.createElement("div");
            divTipClear.className = "btn btn-clear";
            var iTipClear = document.createElement("i");
            iTipClear.className = "icon icon-clear";
            $(iTipClear).appendTo($(divTipClear));
            $(divTipClear).appendTo($(divTip));
            var h2Tip = document.createElement("h2");
            $(h2Tip).attr("id", "H2Tip").append(GesTipMsg[opt.lang]["h"]).appendTo($(divTip));
            var pTip = document.createElement("p");
            $(pTip).append(GesTipMsg[opt.lang]["p1"] + " <span class='sampleicon'><i class='icon icon-keypad'></i></span> " + GesTipMsg[opt.lang]["p2"]);
            $(pTip).attr("id", "PTip").appendTo($(divTip));

            $(iTipClear).bind("click", function () {
                $("#GesTip").removeClass("in");
            });
        }

        var divWrap = document.createElement("div");
        divWrap.className = "mhn-lock-wrap";
        var divHeading = document.createElement("div");
        divHeading.className = "mhn-lock-title";
        $(divHeading).attr("id", "lockHeading").appendTo($(divWrap));
        var divLock = document.createElement("div");
        divLock.className = "mhn-lock patt-holder";
        $(divLock).css({ "width": "300px", "height": "300px", "position": "relative" }).appendTo($(divWrap));
        $(divWrap).appendTo($(divGesturepw));

        $(divGesturepw).appendTo(_divLockView);

        $(iKeyPad).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });
        $(aAddAcc).bind("click", function () {
            $(_divLockView).hide();
            $(_divLockView).remove();
            _divLockView = null;
            if (typeof settingOption.onClosed === "function") {
                settingOption.onClosed();
            }
        });
        $(divBackdrop).bind("click", function () {
            $("#userSelecter").removeClass("open");
            $(".delete").removeClass("delete");
            $("#gBackdrop").hide();
        });
        setTimeout(function () {
            spanText.innerHTML = settingOption.userName;
            divHeading.innerHTML = settingOption.loginRemain;
        }, 10);
    }

    var _divLockView = null;
    var _divHeader = null;

	settingOption.userName = (opt.userName) ? opt.userName : "";
	settingOption.loginRemain = (opt.loginRemain) ? opt.loginRemain : "";
	settingOption.loginUser = (opt.loginUser) ? opt.loginUser : "";
	settingOption.copyright = (opt.copyright) ? opt.copyright : "";
	settingOption.myAD = (opt.ad) ? opt.ad : null;
	settingOption.showTip = (opt.showTip) ? opt.showTip : false;
	settingOption.addAccount = (opt.addAcc) ? opt.addAcc : "";
	settingOption.users = (opt.users) ? opt.users.slice() : [];
	settingOption = $.extend(settingOption, { onSelected: opt.mcb, onClosed: opt.ccb, onChangeUser: opt.ucb, onClearUser: opt.crcb });
	if (!document.getElementById("lockViewDiv")) {
		if (opt.lockType === GestureSettingType.setting) {
			Message = opt.Message;

            if(opt.isCredit) {
                // Note: Credit lite/Standard new GesturePassword View
                CreditGenerateSettingHTML(opt);
            } else {
                GenerateSettingHTML(opt);
            }

			if (opt.parent) {
			    $(_divLockView).appendTo($("#" + opt.parent));
			}
			else {
			    $(_divLockView).appendTo($("body"));
			}
		}
		else if (opt.lockType === GestureSettingType.sm2_setting) {
		    Message = opt.Message;
		    GenerateSM2SettingHTML(opt);
		    if (opt.parent) {
		        $("#" + opt.parent).html("");
		        $(_divHeader).appendTo($("#" + opt.parent));
		        $(_divLockView).appendTo($("#" + opt.parent));
		    }
		    else {
		        $(_divHeader).appendTo($("#" + opt.parent));
		        $(_divLockView).appendTo($("body"));
		    }
		}
		else if (opt.lockType === GestureSettingType.smallUnLock) {
		    if (settingOption.users.indexOf(settingOption.userName) < 0) {
		        settingOption.users.unshift(settingOption.userName);
		    }
		    GenerateSmallUnLockHTML(opt);
		    if (opt.parent) {
		        $(_divLockView).appendTo($("#" + opt.parent));
		    }
		    else {
		        $(_divLockView).appendTo($("body"));
		    }
		}
		else if (opt.lockType === GestureSettingType.sm2_unLock) {
		    GenerateSM2UnLockHTML(opt);
		    if (opt.parent) {
		        $(_divLockView).appendTo($("#" + opt.parent));
		    }
		    else {
		        $(_divLockView).appendTo($("body"));
		    }
		}
		else {
			if (settingOption.users.indexOf(settingOption.userName) < 0) {
				settingOption.users.unshift(settingOption.userName);
			}
			GenerateUnLockHTML(opt);
			if (opt.parent) {
			    $(_divLockView).appendTo($("#" + opt.parent));
			}
			else {
			    $(_divLockView).appendTo($("body"));
			}
		}
		Initial(opt.lockType, opt.t);
	}
}