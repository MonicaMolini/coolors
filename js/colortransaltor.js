var colortranslator = (function (t) {
    "use strict";
    var r,
      e,
      n,
      o,
      i = function () {
        return (
          (i =
            Object.assign ||
            function (t) {
              for (var r, e = 1, n = arguments.length; e < n; e++)
                for (var o in (r = arguments[e]))
                  Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t;
            }),
          i.apply(this, arguments)
        );
      };
    function a(t, r, e) {
      if (e || 2 === arguments.length)
        for (var n, o = 0, i = r.length; o < i; o++)
          (!n && o in r) ||
            (n || (n = Array.prototype.slice.call(r, 0, o)), (n[o] = r[o]));
      return t.concat(n || Array.prototype.slice.call(r));
    }
    !(function (t) {
      (t.HEX = "HEX"), (t.RGB = "RGB"), (t.HSL = "HSL"), (t.CMYK = "CMYK");
    })(r || (r = {})),
      (t.Harmony = void 0),
      ((e = t.Harmony || (t.Harmony = {})).ANALOGOUS = "ANALOGOUS"),
      (e.COMPLEMENTARY = "COMPLEMENTARY"),
      (e.SPLIT_COMPLEMENTARY = "SPLIT_COMPLEMENTARY"),
      (e.TRIADIC = "TRIADIC"),
      (e.TETRADIC = "TETRADIC"),
      (e.SQUARE = "SQUARE"),
      (t.Mix = void 0),
      ((n = t.Mix || (t.Mix = {})).ADDITIVE = "ADDITIVE"),
      (n.SUBTRACTIVE = "SUBTRACTIVE"),
      (function (t) {
        (t.black = "#000000"),
          (t.silver = "#C0C0C0"),
          (t.gray = "#808080"),
          (t.white = "#FFFFFF"),
          (t.maroon = "#800000"),
          (t.red = "#FF0000"),
          (t.purple = "#800080"),
          (t.fuchsia = "#FF00FF"),
          (t.green = "#008000"),
          (t.lime = "#00FF00"),
          (t.olive = "#808000"),
          (t.yellow = "#FFFF00"),
          (t.navy = "#000080"),
          (t.blue = "#0000FF"),
          (t.teal = "#008080"),
          (t.aqua = "#00FFFF"),
          (t.orange = "#FFA500"),
          (t.aliceblue = "#F0F8FF"),
          (t.antiquewhite = "#FAEBD7"),
          (t.aquamarine = "#7FFFD4"),
          (t.azure = "#F0FFFF"),
          (t.beige = "#F5F5DC"),
          (t.bisque = "#FFE4C4"),
          (t.blanchedalmond = "#FFEBCD"),
          (t.blueviolet = "#8A2BE2"),
          (t.brown = "#A52A2A"),
          (t.burlywood = "#DEB887"),
          (t.cadetblue = "#5F9EA0"),
          (t.chartreuse = "#7FFF00"),
          (t.chocolate = "#D2691E"),
          (t.coral = "#FF7F50"),
          (t.cornflowerblue = "#6495ED"),
          (t.cornsilk = "#FFF8DC"),
          (t.crimson = "#DC143C"),
          (t.cyan = "#00FFFF"),
          (t.darkblue = "#00008B"),
          (t.darkcyan = "#008B8B"),
          (t.darkgoldenrod = "#B8860B"),
          (t.darkgray = "#A9A9A9"),
          (t.darkgreen = "#006400"),
          (t.darkgrey = "#A9A9A9"),
          (t.darkkhaki = "#BDB76B"),
          (t.darkmagenta = "#8B008B"),
          (t.darkolivegreen = "#556B2F"),
          (t.darkorange = "#FF8C00"),
          (t.darkorchid = "#9932CC"),
          (t.darkred = "#8B0000"),
          (t.darksalmon = "#E9967A"),
          (t.darkseagreen = "#8FBC8F"),
          (t.darkslateblue = "#483D8B"),
          (t.darkslategray = "#2F4F4F"),
          (t.darkslategrey = "#2F4F4F"),
          (t.darkturquoise = "#00CED1"),
          (t.darkviolet = "#9400D3"),
          (t.deeppink = "#FF1493"),
          (t.deepskyblue = "#00BFFF"),
          (t.dimgray = "#696969"),
          (t.dimgrey = "#696969"),
          (t.dodgerblue = "#1E90FF"),
          (t.firebrick = "#B22222"),
          (t.floralwhite = "#FFFAF0"),
          (t.forestgreen = "#228B22"),
          (t.gainsboro = "#DCDCDC"),
          (t.ghostwhite = "#F8F8FF"),
          (t.gold = "#FFD700"),
          (t.goldenrod = "#DAA520"),
          (t.greenyellow = "#ADFF2F"),
          (t.grey = "#808080"),
          (t.honeydew = "#F0FFF0"),
          (t.hotpink = "#FF69B4"),
          (t.indianred = "#CD5C5C"),
          (t.indigo = "#4B0082"),
          (t.ivory = "#FFFFF0"),
          (t.khaki = "#F0E68C"),
          (t.lavender = "#E6E6FA"),
          (t.lavenderblush = "#FFF0F5"),
          (t.lawngreen = "#7CFC00"),
          (t.lemonchiffon = "#FFFACD"),
          (t.lightblue = "#ADD8E6"),
          (t.lightcoral = "#F08080"),
          (t.lightcyan = "#E0FFFF"),
          (t.lightgoldenrodyellow = "#FAFAD2"),
          (t.lightgray = "#D3D3D3"),
          (t.lightgreen = "#90EE90"),
          (t.lightgrey = "#D3D3D3"),
          (t.lightpink = "#FFB6C1"),
          (t.lightsalmon = "#FFA07A"),
          (t.lightseagreen = "#20B2AA"),
          (t.lightskyblue = "#87CEFA"),
          (t.lightslategray = "#778899"),
          (t.lightslategrey = "#778899"),
          (t.lightsteelblue = "#B0C4DE"),
          (t.lightyellow = "#FFFFE0"),
          (t.limegreen = "#32CD32"),
          (t.linen = "#FAF0E6"),
          (t.magenta = "#FF00FF"),
          (t.mediumaquamarine = "#66CDAA"),
          (t.mediumblue = "#0000CD"),
          (t.mediumorchid = "#BA55D3"),
          (t.mediumpurple = "#9370DB"),
          (t.mediumseagreen = "#3CB371"),
          (t.mediumslateblue = "#7B68EE"),
          (t.mediumspringgreen = "#00FA9A"),
          (t.mediumturquoise = "#48D1CC"),
          (t.mediumvioletred = "#C71585"),
          (t.midnightblue = "#191970"),
          (t.mintcream = "#F5FFFA"),
          (t.mistyrose = "#FFE4E1"),
          (t.moccasin = "#FFE4B5"),
          (t.navajowhite = "#FFDEAD"),
          (t.oldlace = "#FDF5E6"),
          (t.olivedrab = "#6B8E23"),
          (t.orangered = "#FF4500"),
          (t.orchid = "#DA70D6"),
          (t.palegoldenrod = "#EEE8AA"),
          (t.palegreen = "#98FB98"),
          (t.paleturquoise = "#AFEEEE"),
          (t.palevioletred = "#DB7093"),
          (t.papayawhip = "#FFEFD5"),
          (t.peachpuff = "#FFDAB9"),
          (t.peru = "#CD853F"),
          (t.pink = "#FFC0CB"),
          (t.plum = "#DDA0DD"),
          (t.powderblue = "#B0E0E6"),
          (t.rosybrown = "#BC8F8F"),
          (t.royalblue = "#4169E1"),
          (t.saddlebrown = "#8B4513"),
          (t.salmon = "#FA8072"),
          (t.sandybrown = "#F4A460"),
          (t.seagreen = "#2E8B57"),
          (t.seashell = "#FFF5EE"),
          (t.sienna = "#A0522D"),
          (t.skyblue = "#87CEEB"),
          (t.slateblue = "#6A5ACD"),
          (t.slategray = "#708090"),
          (t.slategrey = "#708090"),
          (t.snow = "#FFFAFA"),
          (t.springgreen = "#00FF7F"),
          (t.steelblue = "#4682B4"),
          (t.tan = "#D2B48C"),
          (t.thistle = "#D8BFD8"),
          (t.tomato = "#FF6347"),
          (t.turquoise = "#40E0D0"),
          (t.violet = "#EE82EE"),
          (t.wheat = "#F5DEB3"),
          (t.whitesmoke = "#F5F5F5"),
          (t.yellowgreen = "#9ACD32"),
          (t.rebeccapurple = "#663399");
      })(o || (o = {}));
    var u,
      c,
      s,
      d,
      l,
      h,
      f,
      g = Object.keys(o),
      p =
        (((u = {})[r.HEX] =
          /^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i),
        (u[r.RGB] =
          /^rgba?\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/),
        (u[r.HSL] =
          /^hsla?\s*\(\s*(?:(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*,\s*((?:\d*\.)?\d+)%\s*,\s*((?:\d*\.)?\d+)%(?:\s*,\s*((?:\d*\.)?\d+))?|(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*((?:\d*\.)?\d+)%\s*((?:\d*\.)?\d+)%(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/),
        (u[r.CMYK] =
          /^(?:device-cmyk|cmyk)\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/),
        u),
      b = /^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/,
      F = /^(\d+(?:\.\d+)?|\.\d+)%$/,
      y = /^0x([a-f\d]{1,2})$/i,
      m = "The provided string color doesn't have a correct format",
      A = "The provided color object doesn't have the proper keys or format",
      E = function (t, r, e) {
        return (
          e < 0 && (e += 6),
          e >= 6 && (e -= 6),
          e < 1
            ? Math.round(255 * ((r - t) * e + t))
            : e < 3
            ? Math.round(255 * r)
            : e < 4
            ? Math.round(255 * ((r - t) * (4 - e) + t))
            : Math.round(255 * t)
        );
      },
      H = function (t, r, e) {
        r /= 100;
        var n = (e /= 100) <= 0.5 ? e * (r + 1) : e + r - e * r,
          o = 2 * e - n;
        return { r: E(o, n, (t /= 60) + 2), g: E(o, n, t), b: E(o, n, t - 2) };
      },
      v = function (t, r, e, n) {
        return (
          (n = 1 - n),
          {
            r: Math.round(255 * (1 - t) * n),
            g: Math.round(255 * (1 - r) * n),
            b: Math.round(255 * (1 - e) * n),
          }
        );
      },
      B = function (t, r, e) {
        (t /= 255), (r /= 255), (e /= 255);
        var n = 1 - Math.max(t, r, e),
          o = 1 - n,
          i = (o - t) / o,
          a = (o - r) / o,
          u = (o - e) / o;
        return {
          c: Math.round(100 * i),
          m: Math.round(100 * a),
          y: Math.round(100 * u),
          k: Math.round(100 * n),
        };
      },
      M = function (t, r, e, n) {
        void 0 === n && (n = 1),
          (t /= 255),
          (r /= 255),
          (e /= 255),
          (n = Math.min(n, 1));
        var o = Math.max(t, r, e),
          i = Math.min(t, r, e),
          a = o - i,
          u = 0,
          c = 0,
          s = (o + i) / 2;
        if (0 === a) (u = 0), (c = 0);
        else {
          switch (o) {
            case t:
              u = ((r - e) / a) % 6;
              break;
            case r:
              u = (e - t) / a + 2;
              break;
            case e:
              u = (t - r) / a + 4;
          }
          (u = Math.round(60 * u)) < 0 && (u += 360),
            (c = a / (1 - Math.abs(2 * s - 1)));
        }
        return { h: u, s: Math.round(100 * c), l: Math.round(100 * s), a: n };
      },
      C = function (t, r) {
        if ((t < 0 && (t += 360), t > 360 && (t -= 360), 360 === t || 0 === t))
          return t;
        var e = [
            [0, 120],
            [120, 180],
            [180, 240],
            [240, 360],
          ],
          n = [
            [0, 60],
            [60, 120],
            [120, 240],
            [240, 360],
          ],
          o = r ? n : e,
          i = 0,
          a = 0,
          u = 0,
          c = 0;
        return (
          (r ? e : n).find(function (r, e) {
            return (
              t >= r[0] &&
              t < r[1] &&
              ((i = r[0]), (a = r[1]), (u = o[e][0]), (c = o[e][1]), !0)
            );
          }),
          u + ((c - u) / (a - i)) * (t - i)
        );
      },
      D = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      },
      R = function (t) {
        return F.test("".concat(t))
          ? +"".concat(t).replace(F, "$1")
          : Math.min(+t, 100);
      },
      S = function (t) {
        return 1 === t.length && (t += t), parseInt(t, 16);
      },
      L = function (t) {
        var r = parseInt("".concat(t)).toString(16).toUpperCase();
        return 1 === r.length ? "0x0".concat(r) : "0x".concat(r);
      },
      G = function (t) {
        var r = parseInt("".concat(t)).toString(16).toUpperCase();
        return 1 === r.length && (r = "0".concat(r)), r;
      },
      k = function (t, r) {
        return (
          void 0 === r && (r = !1),
          !r && F.test(t)
            ? Math.min((255 * +t.replace(F, "$1")) / 100, 255)
            : y.test(t)
            ? 3 === t.length
              ? r
                ? parseInt(t + t.slice(-1)) / 255
                : parseInt(t + t.slice(-1))
              : r
              ? parseInt(t) / 255
              : parseInt(t)
            : Math.min(+t, r ? 1 : 255)
        );
      },
      O = function (t) {
        return Math.min(F.test(t) ? +t.replace(F, "$1") / 100 : +t, 1);
      },
      X = function (t) {
        return t.sort().join("").toUpperCase();
      },
      j = function (t, r) {
        void 0 === r && (r = 0);
        var e = Math.pow(10, r);
        return Math.round(+t * e) / e;
      },
      I = function (t, r, e) {
        return Math.max(r, Math.min(t, e));
      },
      Y =
        (((c = {})[r.HEX] = function (t) {
          return "#"
            .concat(G(t.r))
            .concat(G(t.g))
            .concat(G(t.b))
            .concat((D(t, "a") && G(t.a)) || "");
        }),
        (c[r.RGB] = function (t) {
          return "rgb"
            .concat(D(t, "a") ? "a" : "", "(")
            .concat(j(t.r), ",")
            .concat(j(t.g), ",")
            .concat(j(t.b))
            .concat((D(t, "a") && ",".concat(j(t.a, 2))) || "", ")");
        }),
        (c[r.HSL] = function (t) {
          return "hsl"
            .concat(D(t, "a") ? "a" : "", "(")
            .concat(j(t.h), ",")
            .concat(j(t.s), "%,")
            .concat(j(t.l), "%")
            .concat((D(t, "a") && ",".concat(j(t.a, 2))) || "", ")");
        }),
        (c[r.CMYK] = function (t) {
          return "cmyk("
            .concat(j(t.c), "%,")
            .concat(j(t.m), "%,")
            .concat(j(t.y), "%,")
            .concat(j(t.k), "%")
            .concat((D(t, "a") && ",".concat(j(t.a, 2))) || "", ")");
        }),
        c),
      x = function (t) {
        if ("string" == typeof t) {
          var r = t.match(b),
            e = +r[1];
          switch (r[2]) {
            case "rad":
              t = Math.round((180 * e) / Math.PI);
              break;
            case "turn":
              t = Math.round(360 * e);
              break;
            default:
              t = e;
          }
        }
        return (t > 360 || t < 0) && (t -= 360 * Math.floor(t / 360)), t;
      },
      T = function (t) {
        return (
          "string" == typeof t &&
            (t = F.test(t) ? +t.replace(F, "$1") / 100 : +t),
          isNaN(+t) || t > 1 ? 1 : j(t, 2)
        );
      },
      K = function (r, e, n) {
        return e.reduce(
          function (e, o) {
            return a(
              a([], e, !0),
              [
                i(i({}, r), {
                  h: n === t.Mix.ADDITIVE ? x(r.h + o) : x(C(C(r.h, !1) + o, !0)),
                }),
              ],
              !1
            );
          },
          [i({}, r)]
        );
      },
      P = function (t, r) {
        return K(t, [30, -30], r);
      },
      w = function (t, r) {
        return K(t, [180], r);
      },
      N = function (t, r) {
        return K(t, [150, -150], r);
      },
      V = function (t, r) {
        return K(t, [120, -120], r);
      },
      U = function (t, r) {
        return K(t, [60, -120, 180], r);
      },
      $ = function (t, r) {
        return K(t, [90, -90, 180], r);
      },
      q = Object.entries(r).reduce(function (t, e) {
        var n = e[0],
          o = e[1];
        if (n !== r.HEX) {
          var i = X(n.split(""));
          (t[i] = o), (t["A" + i] = o);
        }
        return t;
      }, {}),
      Q = function (t) {
        return "string" == typeof t
          ? (function (t) {
              var e;
              if (
                (Object.keys(r).some(function (r) {
                  if (p[r].test(t)) return (e = r), !0;
                }),
                !e && ~g.indexOf(t) && (e = r.HEX),
                !e)
              )
                throw new Error(m);
              return e;
            })(t)
          : (function (t) {
              var e,
                n = !1,
                o = X(Object.keys(t));
              if ((q[o] && (e = q[o]), e && e === r.RGB)) {
                var i = Object.entries(t).some(function (t) {
                    return !y.test("".concat(t[1]));
                  }),
                  a = Object.entries(t).some(function (t) {
                    return !(
                      F.test("".concat(t[1])) ||
                      (!y.test("".concat(t[1])) && !isNaN(+t[1]) && +t[1] <= 255)
                    );
                  });
                i && a && (n = !0), i || (e = r.HEX);
              }
              if (!e || n) throw new Error(A);
              return e;
            })(t);
      },
      _ =
        (((s = {})[r.HEX] = function (t) {
          var r = (~g.indexOf(t) ? o[t] : t).match(p.HEX),
            e = { r: S(r[1] || r[5]), g: S(r[2] || r[6]), b: S(r[3] || r[7]) },
            n = r[4] || r[8];
          return void 0 !== n && (e.a = S(n) / 255), e;
        }),
        (s[r.RGB] = function (t) {
          var r = t.match(p.RGB),
            e = k(r[1] || r[5]),
            n = k(r[2] || r[6]),
            o = k(r[3] || r[7]),
            i = r[4] || r[8],
            a = { r: Math.min(e, 255), g: Math.min(n, 255), b: Math.min(o, 255) };
          return void 0 !== i && (a.a = T(i)), a;
        }),
        (s[r.HSL] = function (t) {
          var r = t.match(p.HSL),
            e = x(r[1] || r[5]),
            n = R(r[2] || r[6]),
            o = R(r[3] || r[7]),
            i = r[4] || r[8],
            a = H(e, n, o);
          return void 0 !== i && (a.a = T(i)), a;
        }),
        (s[r.CMYK] = function (t) {
          var r = t.match(p.CMYK),
            e = O(r[1] || r[6]),
            n = O(r[2] || r[7]),
            o = O(r[3] || r[8]),
            i = O(r[4] || r[9]),
            a = r[5] || r[10],
            u = v(e, n, o, i);
          return void 0 !== a && (u.a = T(a)), u;
        }),
        s),
      z =
        (((d = {})[r.HEX] = function (t) {
          var r = {
            r: k("".concat(t.r)),
            g: k("".concat(t.g)),
            b: k("".concat(t.b)),
          };
          return D(t, "a") && (r.a = Math.min(k("".concat(t.a), !0), 1)), r;
        }),
        (d[r.RGB] = function (t) {
          return this.HEX(t);
        }),
        (d[r.HSL] = function (t) {
          var r = R("".concat(t.s)),
            e = R("".concat(t.l)),
            n = H(x(t.h), r, e);
          return D(t, "a") && (n.a = T(t.a)), n;
        }),
        (d[r.CMYK] = function (t) {
          var r = O("".concat(t.c)),
            e = O("".concat(t.m)),
            n = O("".concat(t.y)),
            o = O("".concat(t.k)),
            i = v(r, e, n, o);
          return D(t, "a") && (i.a = T(t.a)), i;
        }),
        d),
      J = function (t, r) {
        return (
          void 0 === r && (r = Q(t)), "string" == typeof t ? _[r](t) : z[r](t)
        );
      },
      W =
        (((l = {})[r.HEX] = function (t) {
          return { r: L(t.r), g: L(t.g), b: L(t.b) };
        }),
        (l.HEXA = function (t) {
          var r = W.HEX(t);
          return (r.a = D(t, "a") ? L(255 * t.a) : "0xFF"), r;
        }),
        (l[r.RGB] = function (t) {
          return D(t, "a") && delete t.a, t;
        }),
        (l.RGBA = function (t) {
          return (t.a = D(t, "a") ? j(t.a, 2) : 1), t;
        }),
        (l[r.HSL] = function (t) {
          var r = M(t.r, t.g, t.b);
          return delete r.a, r;
        }),
        (l.HSLA = function (t) {
          var r = W.HSL(t);
          return (r.a = D(t, "a") ? j(t.a, 2) : 1), r;
        }),
        (l[r.CMYK] = function (t) {
          return B(t.r, t.g, t.b);
        }),
        (l.CMYKA = function (t) {
          var r = B(t.r, t.g, t.b);
          return (r.a = D(t, "a") ? j(t.a, 2) : 1), r;
        }),
        l),
      Z = function (t, e, n) {
        var o = Q(t),
          a = "string" == typeof t,
          u = J(t, o),
          c =
            ("string" == typeof t && D(u, "a")) ||
            ("string" != typeof t && D(t, "a")),
          s = M(u.r, u.g, u.b, u.a);
        c || delete s.a;
        var d = n ? s.l / (e + 1) : (100 - s.l) / (e + 1),
          l = Array(e)
            .fill(null)
            .map(function (t, r) {
              return i(i({}, s), { l: s.l + d * (r + 1) * (1 - 2 * +n) });
            });
        switch (o) {
          case r.HEX:
          default:
            return l.map(function (t) {
              var r = H(t.h, t.s, t.l);
              return (
                c && (r.a = t.a),
                a
                  ? c
                    ? Y.HEX(i(i({}, r), { a: j(255 * r.a, 2) }))
                    : Y.HEX(r)
                  : c
                  ? W.HEXA(r)
                  : W.HEX(r)
              );
            });
          case r.RGB:
            return l.map(function (t) {
              var r = H(t.h, t.s, t.l);
              return c && (r.a = t.a), a ? Y.RGB(r) : c ? W.RGBA(r) : W.RGB(r);
            });
          case r.HSL:
            return l.map(function (t) {
              return a
                ? Y.HSL(t)
                : c
                ? W.HSLA(i(i({}, H(t.h, t.s, t.l)), { a: t.a }))
                : W.HSL(H(t.h, t.s, t.l));
            });
        }
      },
      tt =
        (((h = {
          buildHarmony: function (t, e, n) {
            var o = Q(t),
              i = J(t, o),
              a = M(i.r, i.g, i.b, i.a),
              u =
                ("string" == typeof t && D(i, "a")) ||
                ("string" != typeof t && D(t, "a")),
              c = "string" == typeof t;
            switch (o) {
              case r.HEX:
              default:
                return u ? this.HEXA(a, e, n, c) : this.HEX(a, e, n, c);
              case r.HSL:
                return u ? this.HSLA(a, e, n, c) : this.HSL(a, e, n, c);
              case r.RGB:
                return u ? this.RGBA(a, e, n, c) : this.RGB(a, e, n, c);
            }
          },
        })[r.HEX] = function (t, r, e, n) {
          return r(t, e).map(function (t) {
            return n ? Y.HEX(H(t.h, t.s, t.l)) : W.HEX(H(t.h, t.s, t.l));
          });
        }),
        (h.HEXA = function (t, r, e, n) {
          return r(t, e).map(function (t) {
            return n
              ? Y.HEX(i(i({}, H(t.h, t.s, t.l)), { a: 255 * T(t.a) }))
              : W.HEXA(i(i({}, H(t.h, t.s, t.l)), { a: T(t.a) }));
          });
        }),
        (h[r.RGB] = function (t, r, e, n) {
          return r(t, e).map(function (t) {
            return n ? Y.RGB(H(t.h, t.s, t.l)) : W.RGB(H(t.h, t.s, t.l));
          });
        }),
        (h.RGBA = function (t, r, e, n) {
          return r(t, e).map(function (t) {
            return n
              ? Y.RGB(i(i({}, H(t.h, t.s, t.l)), { a: T(t.a) }))
              : W.RGBA(i(i({}, H(t.h, t.s, t.l)), { a: T(t.a) }));
          });
        }),
        (h[r.HSL] = function (t, r, e, n) {
          return r(t, e).map(function (t) {
            return n
              ? Y.HSL({ h: t.h, s: t.s, l: t.l })
              : W.HSL(H(t.h, t.s, t.l));
          });
        }),
        (h.HSLA = function (t, r, e, n) {
          return r(t, e).map(function (t) {
            return n
              ? Y.HSL(i(i({}, t), { a: T(t.a) }))
              : W.HSLA(i(i({}, H(t.h, t.s, t.l)), { a: T(t.a) }));
          });
        }),
        h),
      rt =
        (((f = {
          mix: function (r, e) {
            var n,
              o,
              a,
              u,
              c,
              s,
              d,
              l,
              h,
              f,
              g,
              p,
              b,
              F,
              y,
              m = r.map(function (t) {
                var r = Q(t);
                return J(t, r);
              }),
              A =
                e === t.Mix.SUBTRACTIVE
                  ? m.map(function (t) {
                      var r,
                        e,
                        n,
                        o,
                        i,
                        a,
                        u,
                        c,
                        s,
                        d,
                        l,
                        h,
                        f,
                        g,
                        p =
                          ((r = t.r),
                          (e = t.g),
                          (n = t.b),
                          (o = Math.min(r, e, n)),
                          (i = Math.min(255 - r, 255 - e, 255 - n)),
                          (a = r - o),
                          (u = e - o),
                          (c = n - o),
                          (s = Math.min(a, u)),
                          (d = a - s),
                          (l = (u + s) / 2),
                          (h = (c + u - s) / 2),
                          (f = Math.max(d, l, h) / Math.max(a, u, c)),
                          (g = isNaN(f) || f === 1 / 0 || f <= 0 ? 1 : f),
                          { r: d / g + i, y: l / g + i, b: h / g + i });
                      return D(t, "a") && (p.a = t.a), p;
                    })
                  : null;
            function E(r) {
              var n =
                e === t.Mix.ADDITIVE
                  ? { r: 0, g: 0, b: 0, a: 0 }
                  : { r: 0, y: 0, b: 0, a: 0 };
              return r.reduce(function (r, n) {
                var o = D(n, "a") ? n.a : 1,
                  a = {
                    r: Math.min(r.r + n.r * o, 255),
                    b: Math.min(r.b + n.b * o, 255),
                    a: 1 - (1 - o) * (1 - r.a),
                  },
                  u = "g" in r ? r.g : r.y,
                  c = "g" in n ? n.g : n.y;
                return i(
                  i({}, a),
                  e === t.Mix.ADDITIVE
                    ? { g: Math.min(u + c * o, 255) }
                    : { y: Math.min(u + c * o, 255) }
                );
              }, n);
            }
            if (e === t.Mix.ADDITIVE) n = E(m);
            else {
              var H = E(A);
              (o = H.r),
                (a = H.y),
                (u = H.b),
                (c = Math.min(o, a, u)),
                (s = Math.min(255 - o, 255 - a, 255 - u)),
                (d = o - c),
                (l = a - c),
                (h = u - c),
                (f = Math.min(l, h)),
                (g = d + l - f),
                (p = l + f),
                (b = 2 * (h - f)),
                (F = Math.max(g, p, b) / Math.max(d, l, h)),
                (y = isNaN(F) || F === 1 / 0 || F <= 0 ? 1 : F),
                ((n = { r: g / y + s, g: p / y + s, b: b / y + s }).a = H.a);
            }
            return { r: j(n.r, 2), g: j(n.g, 2), b: j(n.b, 2), a: I(n.a, 0, 1) };
          },
        })[r.HEX] = function (t, r, e) {
          var n = this.mix(t, r);
          return delete n.a, e ? Y.HEX(n) : W.HEX(n);
        }),
        (f.HEXA = function (t, r, e) {
          var n = this.mix(t, r);
          return (n.a = e ? 255 * T(n.a) : T(n.a)), e ? Y.HEX(n) : W.HEXA(n);
        }),
        (f[r.RGB] = function (t, r, e) {
          var n = this.mix(t, r);
          return delete n.a, e ? Y.RGB(n) : W.RGB(n);
        }),
        (f.RGBA = function (t, r, e) {
          var n = this.mix(t, r);
          return e ? Y.RGB(n) : W.RGBA(n);
        }),
        (f[r.HSL] = function (t, r, e) {
          var n = this.mix(t, r),
            o = M(n.r, n.g, n.b);
          return delete n.a, delete o.a, e ? Y.HSL(o) : W.HSL(n);
        }),
        (f.HSLA = function (t, r, e) {
          var n = this.mix(t, r),
            o = M(n.r, n.g, n.b, n.a);
          return e ? Y.HSL(o) : W.HSLA(n);
        }),
        f),
      et = function (t, r, e, n, o) {
        var i = n(J(t, r));
        return e ? o(i) : i;
      },
      nt = function (t, r, e, n, o, i) {
        e < 1 && (e = 5);
        var a = (function (t, r, e) {
          var n = e - 1,
            o = (r.r - t.r) / n,
            i = (r.g - t.g) / n,
            a = (r.b - t.b) / n,
            u = T(t.a),
            c = (T(r.a) - u) / n;
          return Array(e)
            .fill(null)
            .map(function (e, s) {
              return 0 === s
                ? t
                : s === n
                ? r
                : {
                    r: j(t.r + o * s),
                    g: j(t.g + i * s),
                    b: j(t.b + a * s),
                    a: j(u + c * s, 2),
                  };
            });
        })(J(t), J(r), e);
        return a.map(function (t) {
          var r = o(t);
          return n ? i(r) : r;
        });
      },
      ot = (function () {
        function r(t) {
          (this.rgb = J(t)), this.updateHSL(), this.updateCMYK();
        }
        return (
          (r.prototype.updateRGB = function () {
            this.rgb = i(i({}, H(this.hsl.h, this.hsl.s, this.hsl.l)), {
              a: this.hsl.a,
            });
          }),
          (r.prototype.updateRGBFromCMYK = function () {
            this.rgb = i(
              i({}, v(this.cmyk.c, this.cmyk.m, this.cmyk.y, this.cmyk.k)),
              { a: this.rgb.a }
            );
          }),
          (r.prototype.updateHSL = function () {
            this.hsl = M(this.rgb.r, this.rgb.g, this.rgb.b, this.rgb.a);
          }),
          (r.prototype.updateCMYK = function () {
            this.cmyk = B(this.rgb.r, this.rgb.g, this.rgb.b);
          }),
          (r.prototype.updateRGBAndCMYK = function () {
            return this.updateRGB(), this.updateCMYK(), this;
          }),
          (r.prototype.updateHSLAndCMYK = function () {
            return this.updateHSL(), this.updateCMYK(), this;
          }),
          (r.prototype.updateRGBAndHSL = function () {
            return this.updateRGBFromCMYK(), this.updateHSL(), this;
          }),
          (r.prototype.setH = function (t) {
            return (this.hsl.h = x(t)), this.updateRGBAndCMYK();
          }),
          (r.prototype.setS = function (t) {
            return (this.hsl.s = I(t, 0, 100)), this.updateRGBAndCMYK();
          }),
          (r.prototype.setL = function (t) {
            return (this.hsl.l = I(t, 0, 100)), this.updateRGBAndCMYK();
          }),
          (r.prototype.setR = function (t) {
            return (this.rgb.r = I(t, 0, 255)), this.updateHSLAndCMYK();
          }),
          (r.prototype.setG = function (t) {
            return (this.rgb.g = I(t, 0, 255)), this.updateHSLAndCMYK();
          }),
          (r.prototype.setB = function (t) {
            return (this.rgb.b = I(t, 0, 255)), this.updateHSLAndCMYK();
          }),
          (r.prototype.setA = function (t) {
            return (this.hsl.a = this.rgb.a = I(t, 0, 1)), this;
          }),
          (r.prototype.setC = function (t) {
            return (this.cmyk.c = I(t, 0, 100)), this.updateRGBAndHSL();
          }),
          (r.prototype.setM = function (t) {
            return (this.cmyk.m = I(t, 0, 100)), this.updateRGBAndHSL();
          }),
          (r.prototype.setY = function (t) {
            return (this.cmyk.y = I(t, 0, 100)), this.updateRGBAndHSL();
          }),
          (r.prototype.setK = function (t) {
            return (this.cmyk.k = I(t, 0, 100)), this.updateRGBAndHSL();
          }),
          Object.defineProperty(r.prototype, "H", {
            get: function () {
              return j(this.hsl.h);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "S", {
            get: function () {
              return j(this.hsl.s);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "L", {
            get: function () {
              return j(this.hsl.l);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "R", {
            get: function () {
              return j(this.rgb.r);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "G", {
            get: function () {
              return j(this.rgb.g);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "B", {
            get: function () {
              return j(this.rgb.b);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "A", {
            get: function () {
              return j(this.hsl.a, 2);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "C", {
            get: function () {
              return j(this.cmyk.c);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "M", {
            get: function () {
              return j(this.cmyk.m);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "Y", {
            get: function () {
              return j(this.cmyk.y);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "K", {
            get: function () {
              return j(this.cmyk.k);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HEXObject", {
            get: function () {
              return W.HEX(this.rgb);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HEXAObject", {
            get: function () {
              return W.HEXA(this.rgb);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "RGBObject", {
            get: function () {
              return { r: this.R, g: this.G, b: this.B };
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "RGBAObject", {
            get: function () {
              return i(i({}, this.RGBObject), { a: this.A });
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HSLObject", {
            get: function () {
              return { h: this.H, s: this.S, l: this.L };
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HSLAObject", {
            get: function () {
              return i(i({}, this.HSLObject), { a: this.A });
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "CMYKObject", {
            get: function () {
              return { c: this.C, m: this.M, y: this.Y, k: this.K };
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "CMYKAObject", {
            get: function () {
              return { c: this.C, m: this.M, y: this.Y, k: this.K, a: this.A };
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HEX", {
            get: function () {
              var t = this.rgb,
                r = { r: t.r, g: t.g, b: t.b };
              return Y.HEX(r);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HEXA", {
            get: function () {
              var t = this.rgb,
                r = { r: t.r, g: t.g, b: t.b, a: 255 * this.A };
              return Y.HEX(r);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "RGB", {
            get: function () {
              var t = this.rgb,
                r = { r: t.r, g: t.g, b: t.b };
              return Y.RGB(r);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "RGBA", {
            get: function () {
              var t = this.rgb,
                r = { r: t.r, g: t.g, b: t.b, a: this.A };
              return Y.RGB(r);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HSL", {
            get: function () {
              var t = this.hsl,
                r = { h: t.h, s: t.s, l: t.l };
              return Y.HSL(r);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "HSLA", {
            get: function () {
              return Y.HSL(this.hsl);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "CMYK", {
            get: function () {
              return Y.CMYK(this.cmyk);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(r.prototype, "CMYKA", {
            get: function () {
              return Y.CMYK(i(i({}, this.cmyk), { a: this.A }));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (r.toHEX = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.HEX, Y.HEX);
          }),
          (r.toHEXA = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.HEXA, Y.HEX);
          }),
          (r.toRGB = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.RGB, Y.RGB);
          }),
          (r.toRGBA = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.RGBA, Y.RGB);
          }),
          (r.toHSL = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.HSL, Y.HSL);
          }),
          (r.toHSLA = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.HSLA, Y.HSL);
          }),
          (r.toCMYK = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.CMYK, Y.CMYK);
          }),
          (r.toCMYKA = function (t, r) {
            void 0 === r && (r = !0);
            var e = Q(t);
            return et(t, e, r, W.CMYKA, Y.CMYK);
          }),
          (r.getBlendHEX = function (t, r, e, n) {
            return (
              void 0 === e && (e = 5),
              void 0 === n && (n = !0),
              nt(t, r, e, n, W.HEX, Y.HEX)
            );
          }),
          (r.getBlendHEXA = function (t, r, e, n) {
            return (
              void 0 === e && (e = 5),
              void 0 === n && (n = !0),
              nt(t, r, e, n, W.HEXA, Y.HEX)
            );
          }),
          (r.getBlendRGB = function (t, r, e, n) {
            return (
              void 0 === e && (e = 5),
              void 0 === n && (n = !0),
              nt(t, r, e, n, W.RGB, Y.RGB)
            );
          }),
          (r.getBlendRGBA = function (t, r, e, n) {
            return (
              void 0 === e && (e = 5),
              void 0 === n && (n = !0),
              nt(t, r, e, n, W.RGBA, Y.RGB)
            );
          }),
          (r.getBlendHSL = function (t, r, e, n) {
            return (
              void 0 === e && (e = 5),
              void 0 === n && (n = !0),
              nt(t, r, e, n, W.HSL, Y.HSL)
            );
          }),
          (r.getBlendHSLA = function (t, r, e, n) {
            return (
              void 0 === e && (e = 5),
              void 0 === n && (n = !0),
              nt(t, r, e, n, W.HSLA, Y.HSL)
            );
          }),
          (r.getMixHEX = function (r, e, n) {
            return (
              void 0 === e && (e = t.Mix.ADDITIVE),
              void 0 === n && (n = !0),
              rt.HEX(r, e, n)
            );
          }),
          (r.getMixHEXA = function (r, e, n) {
            return (
              void 0 === e && (e = t.Mix.ADDITIVE),
              void 0 === n && (n = !0),
              rt.HEXA(r, e, n)
            );
          }),
          (r.getMixRGB = function (r, e, n) {
            return (
              void 0 === e && (e = t.Mix.ADDITIVE),
              void 0 === n && (n = !0),
              rt.RGB(r, e, n)
            );
          }),
          (r.getMixRGBA = function (r, e, n) {
            return (
              void 0 === e && (e = t.Mix.ADDITIVE),
              void 0 === n && (n = !0),
              rt.RGBA(r, e, n)
            );
          }),
          (r.getMixHSL = function (r, e, n) {
            return (
              void 0 === e && (e = t.Mix.ADDITIVE),
              void 0 === n && (n = !0),
              rt.HSL(r, e, n)
            );
          }),
          (r.getMixHSLA = function (r, e, n) {
            return (
              void 0 === e && (e = t.Mix.ADDITIVE),
              void 0 === n && (n = !0),
              rt.HSLA(r, e, n)
            );
          }),
          (r.getShades = function (t, r) {
            return Z(t, r, !0);
          }),
          (r.getTints = function (t, r) {
            return Z(t, r, !1);
          }),
          (r.getHarmony = function (r, e, n) {
            switch (
              (void 0 === e && (e = t.Harmony.COMPLEMENTARY),
              void 0 === n && (n = t.Mix.ADDITIVE),
              e)
            ) {
              case t.Harmony.ANALOGOUS:
                return tt.buildHarmony(r, P, n);
              case t.Harmony.SPLIT_COMPLEMENTARY:
                return tt.buildHarmony(r, N, n);
              case t.Harmony.TRIADIC:
                return tt.buildHarmony(r, V, n);
              case t.Harmony.TETRADIC:
                return tt.buildHarmony(r, U, n);
              case t.Harmony.SQUARE:
                return tt.buildHarmony(r, $, n);
              default:
                return tt.buildHarmony(r, w, n);
            }
          }),
          r
        );
      })();
    return (t.ColorTranslator = ot), t;
  })({});

  function hexToHSL(H) {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (H.length === 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length === 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
  
    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0) h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "%," + 50 + "%)";
  }