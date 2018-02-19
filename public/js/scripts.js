!function (e) {
    function __webpack_require__(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
    }

    var t = {};
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function (e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: n})
    }, __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 121)
}([function (e, t, n) {
    (function (e) {
        !function (t, n) {
            e.exports = n()
        }(0, function () {
            "use strict";

            function hooks() {
                return t.apply(null, arguments)
            }

            function isArray(e) {
                return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
            }

            function isObject(e) {
                return null != e && "[object Object]" === Object.prototype.toString.call(e)
            }

            function isObjectEmpty(e) {
                if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                var t;
                for (t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }

            function isUndefined(e) {
                return void 0 === e
            }

            function isNumber(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }

            function isDate(e) {
                return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
            }

            function map(e, t) {
                var n, i = [];
                for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
                return i
            }

            function hasOwnProp(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function extend(e, t) {
                for (var n in t) hasOwnProp(t, n) && (e[n] = t[n]);
                return hasOwnProp(t, "toString") && (e.toString = t.toString), hasOwnProp(t, "valueOf") && (e.valueOf = t.valueOf), e
            }

            function createUTC(e, t, n, i) {
                return createLocalOrUTC(e, t, n, i, !0).utc()
            }

            function defaultParsingFlags() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }

            function getParsingFlags(e) {
                return null == e._pf && (e._pf = defaultParsingFlags()), e._pf
            }

            function isValid(e) {
                if (null == e._isValid) {
                    var t = getParsingFlags(e), n = i.call(t.parsedDateParts, function (e) {
                            return null != e
                        }),
                        a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                    if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                    e._isValid = a
                }
                return e._isValid
            }

            function createInvalid(e) {
                var t = createUTC(NaN);
                return null != e ? extend(getParsingFlags(t), e) : getParsingFlags(t).userInvalidated = !0, t
            }

            function copyConfig(e, t) {
                var n, i, s;
                if (isUndefined(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), isUndefined(t._i) || (e._i = t._i), isUndefined(t._f) || (e._f = t._f), isUndefined(t._l) || (e._l = t._l), isUndefined(t._strict) || (e._strict = t._strict), isUndefined(t._tzm) || (e._tzm = t._tzm), isUndefined(t._isUTC) || (e._isUTC = t._isUTC), isUndefined(t._offset) || (e._offset = t._offset), isUndefined(t._pf) || (e._pf = getParsingFlags(t)), isUndefined(t._locale) || (e._locale = t._locale), a.length > 0) for (n = 0; n < a.length; n++) i = a[n], s = t[i], isUndefined(s) || (e[i] = s);
                return e
            }

            function Moment(e) {
                copyConfig(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === s && (s = !0, hooks.updateOffset(this), s = !1)
            }

            function isMoment(e) {
                return e instanceof Moment || null != e && null != e._isAMomentObject
            }

            function absFloor(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            }

            function toInt(e) {
                var t = +e, n = 0;
                return 0 !== t && isFinite(t) && (n = absFloor(t)), n
            }

            function compareArrays(e, t, n) {
                var i, a = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), r = 0;
                for (i = 0; i < a; i++) (n && e[i] !== t[i] || !n && toInt(e[i]) !== toInt(t[i])) && r++;
                return r + s
            }

            function warn(e) {
                !1 === hooks.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
            }

            function deprecate(e, t) {
                var n = !0;
                return extend(function () {
                    if (null != hooks.deprecationHandler && hooks.deprecationHandler(null, e), n) {
                        for (var i, a = [], s = 0; s < arguments.length; s++) {
                            if (i = "", "object" == typeof arguments[s]) {
                                i += "\n[" + s + "] ";
                                for (var r in arguments[0]) i += r + ": " + arguments[0][r] + ", ";
                                i = i.slice(0, -2)
                            } else i = arguments[s];
                            a.push(i)
                        }
                        warn(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
                    }
                    return t.apply(this, arguments)
                }, t)
            }

            function deprecateSimple(e, t) {
                null != hooks.deprecationHandler && hooks.deprecationHandler(e, t), r[e] || (warn(t), r[e] = !0)
            }

            function isFunction(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }

            function set(e) {
                var t, n;
                for (n in e) t = e[n], isFunction(t) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function mergeConfigs(e, t) {
                var n, i = extend({}, e);
                for (n in t) hasOwnProp(t, n) && (isObject(e[n]) && isObject(t[n]) ? (i[n] = {}, extend(i[n], e[n]), extend(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
                for (n in e) hasOwnProp(e, n) && !hasOwnProp(t, n) && isObject(e[n]) && (i[n] = extend({}, i[n]));
                return i
            }

            function Locale(e) {
                null != e && this.set(e)
            }

            function calendar(e, t, n) {
                var i = this._calendar[e] || this._calendar.sameElse;
                return isFunction(i) ? i.call(t, n) : i
            }

            function longDateFormat(e) {
                var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
                return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
                    return e.slice(1)
                }), this._longDateFormat[e])
            }

            function invalidDate() {
                return this._invalidDate
            }

            function ordinal(e) {
                return this._ordinal.replace("%d", e)
            }

            function relativeTime(e, t, n, i) {
                var a = this._relativeTime[n];
                return isFunction(a) ? a(e, t, n, i) : a.replace(/%d/i, e)
            }

            function pastFuture(e, t) {
                var n = this._relativeTime[e > 0 ? "future" : "past"];
                return isFunction(n) ? n(t) : n.replace(/%s/i, t)
            }

            function addUnitAlias(e, t) {
                var n = e.toLowerCase();
                h[n] = h[n + "s"] = h[t] = e
            }

            function normalizeUnits(e) {
                return "string" == typeof e ? h[e] || h[e.toLowerCase()] : void 0
            }

            function normalizeObjectUnits(e) {
                var t, n, i = {};
                for (n in e) hasOwnProp(e, n) && (t = normalizeUnits(n)) && (i[t] = e[n]);
                return i
            }

            function addUnitPriority(e, t) {
                m[e] = t
            }

            function getPrioritizedUnits(e) {
                var t = [];
                for (var n in e) t.push({unit: n, priority: m[n]});
                return t.sort(function (e, t) {
                    return e.priority - t.priority
                }), t
            }

            function zeroFill(e, t, n) {
                var i = "" + Math.abs(e), a = t - i.length;
                return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
            }

            function addFormatToken(e, t, n, i) {
                var a = i;
                "string" == typeof i && (a = function () {
                    return this[i]()
                }), e && (y[e] = a), t && (y[t[0]] = function () {
                    return zeroFill(a.apply(this, arguments), t[1], t[2])
                }), n && (y[n] = function () {
                    return this.localeData().ordinal(a.apply(this, arguments), e)
                })
            }

            function removeFormattingTokens(e) {
                return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
            }

            function makeFormatFunction(e) {
                var t, n, i = e.match(p);
                for (t = 0, n = i.length; t < n; t++) y[i[t]] ? i[t] = y[i[t]] : i[t] = removeFormattingTokens(i[t]);
                return function (t) {
                    var a, s = "";
                    for (a = 0; a < n; a++) s += isFunction(i[a]) ? i[a].call(t, e) : i[a];
                    return s
                }
            }

            function formatMoment(e, t) {
                return e.isValid() ? (t = expandFormat(t, e.localeData()), _[t] = _[t] || makeFormatFunction(t), _[t](e)) : e.localeData().invalidDate()
            }

            function expandFormat(e, t) {
                function replaceLongDateFormatTokens(e) {
                    return t.longDateFormat(e) || e
                }

                var n = 5;
                for (f.lastIndex = 0; n >= 0 && f.test(e);) e = e.replace(f, replaceLongDateFormatTokens), f.lastIndex = 0, n -= 1;
                return e
            }

            function addRegexToken(e, t, n) {
                O[e] = isFunction(t) ? t : function (e, i) {
                    return e && n ? n : t
                }
            }

            function getParseRegexForToken(e, t) {
                return hasOwnProp(O, e) ? O[e](t._strict, t._locale) : new RegExp(unescapeFormat(e))
            }

            function unescapeFormat(e) {
                return regexEscape(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, a) {
                    return t || n || i || a
                }))
            }

            function regexEscape(e) {
                return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function addParseToken(e, t) {
                var n, i = t;
                for ("string" == typeof e && (e = [e]), isNumber(t) && (i = function (e, n) {
                    n[t] = toInt(e)
                }), n = 0; n < e.length; n++) E[e[n]] = i
            }

            function addWeekParseToken(e, t) {
                addParseToken(e, function (e, n, i, a) {
                    i._w = i._w || {}, t(e, i._w, i, a)
                })
            }

            function addTimeToArrayFromToken(e, t, n) {
                null != t && hasOwnProp(E, e) && E[e](t, n._a, n, e)
            }

            function daysInYear(e) {
                return isLeapYear(e) ? 366 : 365
            }

            function isLeapYear(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }

            function getIsLeapYear() {
                return isLeapYear(this.year())
            }

            function makeGetSet(e, t) {
                return function (n) {
                    return null != n ? (set$1(this, e, n), hooks.updateOffset(this, t), this) : get(this, e)
                }
            }

            function get(e, t) {
                return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
            }

            function set$1(e, t, n) {
                e.isValid() && !isNaN(n) && ("FullYear" === t && isLeapYear(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), daysInMonth(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
            }

            function stringGet(e) {
                return e = normalizeUnits(e), isFunction(this[e]) ? this[e]() : this
            }

            function stringSet(e, t) {
                if ("object" == typeof e) {
                    e = normalizeObjectUnits(e);
                    for (var n = getPrioritizedUnits(e), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit])
                } else if (e = normalizeUnits(e), isFunction(this[e])) return this[e](t);
                return this
            }

            function mod(e, t) {
                return (e % t + t) % t
            }

            function daysInMonth(e, t) {
                if (isNaN(e) || isNaN(t)) return NaN;
                var n = mod(t, 12);
                return e += (t - n) / 12, 1 === n ? isLeapYear(e) ? 29 : 28 : 31 - n % 7 % 2
            }

            function localeMonths(e, t) {
                return e ? isArray(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || J).test(t) ? "format" : "standalone"][e.month()] : isArray(this._months) ? this._months : this._months.standalone
            }

            function localeMonthsShort(e, t) {
                return e ? isArray(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[J.test(t) ? "format" : "standalone"][e.month()] : isArray(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
            }

            function handleStrictParse(e, t, n) {
                var i, a, s, r = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) s = createUTC([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === t ? (a = B.call(this._shortMonthsParse, r), -1 !== a ? a : null) : (a = B.call(this._longMonthsParse, r), -1 !== a ? a : null) : "MMM" === t ? -1 !== (a = B.call(this._shortMonthsParse, r)) ? a : (a = B.call(this._longMonthsParse, r), -1 !== a ? a : null) : -1 !== (a = B.call(this._longMonthsParse, r)) ? a : (a = B.call(this._shortMonthsParse, r), -1 !== a ? a : null)
            }

            function localeMonthsParse(e, t, n) {
                var i, a, s;
                if (this._monthsParseExact) return handleStrictParse.call(this, e, t, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (a = createUTC([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                    if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                    if (!n && this._monthsParse[i].test(e)) return i
                }
            }

            function setMonth(e, t) {
                var n;
                if (!e.isValid()) return e;
                if ("string" == typeof t) if (/^\d+$/.test(t)) t = toInt(t); else if (t = e.localeData().monthsParse(t), !isNumber(t)) return e;
                return n = Math.min(e.date(), daysInMonth(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
            }

            function getSetMonth(e) {
                return null != e ? (setMonth(this, e), hooks.updateOffset(this, !0), this) : get(this, "Month")
            }

            function getDaysInMonth() {
                return daysInMonth(this.year(), this.month())
            }

            function monthsShortRegex(e) {
                return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (hasOwnProp(this, "_monthsShortRegex") || (this._monthsShortRegex = K), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function monthsRegex(e) {
                return this._monthsParseExact ? (hasOwnProp(this, "_monthsRegex") || computeMonthsParse.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (hasOwnProp(this, "_monthsRegex") || (this._monthsRegex = X), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
            }

            function computeMonthsParse() {
                function cmpLenRev(e, t) {
                    return t.length - e.length
                }

                var e, t, n = [], i = [], a = [];
                for (e = 0; e < 12; e++) t = createUTC([2e3, e]), n.push(this.monthsShort(t, "")), i.push(this.months(t, "")), a.push(this.months(t, "")), a.push(this.monthsShort(t, ""));
                for (n.sort(cmpLenRev), i.sort(cmpLenRev), a.sort(cmpLenRev), e = 0; e < 12; e++) n[e] = regexEscape(n[e]), i[e] = regexEscape(i[e]);
                for (e = 0; e < 24; e++) a[e] = regexEscape(a[e]);
                this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
            }

            function createDate(e, t, n, i, a, s, r) {
                var o = new Date(e, t, n, i, a, s, r);
                return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
            }

            function createUTCDate(e) {
                var t = new Date(Date.UTC.apply(null, arguments));
                return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
            }

            function firstWeekOffset(e, t, n) {
                var i = 7 + t - n;
                return -(7 + createUTCDate(e, 0, i).getUTCDay() - t) % 7 + i - 1
            }

            function dayOfYearFromWeeks(e, t, n, i, a) {
                var s, r, o = (7 + n - i) % 7, l = firstWeekOffset(e, i, a), d = 1 + 7 * (t - 1) + o + l;
                return d <= 0 ? (s = e - 1, r = daysInYear(s) + d) : d > daysInYear(e) ? (s = e + 1, r = d - daysInYear(e)) : (s = e, r = d), {
                    year: s,
                    dayOfYear: r
                }
            }

            function weekOfYear(e, t, n) {
                var i, a, s = firstWeekOffset(e.year(), t, n), r = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
                return r < 1 ? (a = e.year() - 1, i = r + weeksInYear(a, t, n)) : r > weeksInYear(e.year(), t, n) ? (i = r - weeksInYear(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = r), {
                    week: i,
                    year: a
                }
            }

            function weeksInYear(e, t, n) {
                var i = firstWeekOffset(e, t, n), a = firstWeekOffset(e + 1, t, n);
                return (daysInYear(e) - i + a) / 7
            }

            function localeWeek(e) {
                return weekOfYear(e, this._week.dow, this._week.doy).week
            }

            function localeFirstDayOfWeek() {
                return this._week.dow
            }

            function localeFirstDayOfYear() {
                return this._week.doy
            }

            function getSetWeek(e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function getSetISOWeek(e) {
                var t = weekOfYear(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d")
            }

            function parseWeekday(e, t) {
                return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
            }

            function parseIsoWeekday(e, t) {
                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
            }

            function localeWeekdays(e, t) {
                return e ? isArray(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : isArray(this._weekdays) ? this._weekdays : this._weekdays.standalone
            }

            function localeWeekdaysShort(e) {
                return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
            }

            function localeWeekdaysMin(e) {
                return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
            }

            function handleStrictParse$1(e, t, n) {
                var i, a, s, r = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) s = createUTC([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === t ? (a = B.call(this._weekdaysParse, r), -1 !== a ? a : null) : "ddd" === t ? (a = B.call(this._shortWeekdaysParse, r), -1 !== a ? a : null) : (a = B.call(this._minWeekdaysParse, r), -1 !== a ? a : null) : "dddd" === t ? -1 !== (a = B.call(this._weekdaysParse, r)) ? a : -1 !== (a = B.call(this._shortWeekdaysParse, r)) ? a : (a = B.call(this._minWeekdaysParse, r), -1 !== a ? a : null) : "ddd" === t ? -1 !== (a = B.call(this._shortWeekdaysParse, r)) ? a : -1 !== (a = B.call(this._weekdaysParse, r)) ? a : (a = B.call(this._minWeekdaysParse, r), -1 !== a ? a : null) : -1 !== (a = B.call(this._minWeekdaysParse, r)) ? a : -1 !== (a = B.call(this._weekdaysParse, r)) ? a : (a = B.call(this._shortWeekdaysParse, r), -1 !== a ? a : null)
            }

            function localeWeekdaysParse(e, t, n) {
                var i, a, s;
                if (this._weekdaysParseExact) return handleStrictParse$1.call(this, e, t, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (a = createUTC([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                    if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                    if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                    if (!n && this._weekdaysParse[i].test(e)) return i
                }
            }

            function getSetDayOfWeek(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != e ? (e = parseWeekday(e, this.localeData()), this.add(e - t, "d")) : t
            }

            function getSetLocaleDayOfWeek(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == e ? t : this.add(e - t, "d")
            }

            function getSetISODayOfWeek(e) {
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    var t = parseIsoWeekday(e, this.localeData());
                    return this.day(this.day() % 7 ? t : t - 7)
                }
                return this.day() || 7
            }

            function weekdaysRegex(e) {
                return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (hasOwnProp(this, "_weekdaysRegex") || (this._weekdaysRegex = ie), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function weekdaysShortRegex(e) {
                return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (hasOwnProp(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ae), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function weekdaysMinRegex(e) {
                return this._weekdaysParseExact ? (hasOwnProp(this, "_weekdaysRegex") || computeWeekdaysParse.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (hasOwnProp(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = se), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function computeWeekdaysParse() {
                function cmpLenRev(e, t) {
                    return t.length - e.length
                }

                var e, t, n, i, a, s = [], r = [], o = [], l = [];
                for (e = 0; e < 7; e++) t = createUTC([2e3, 1]).day(e), n = this.weekdaysMin(t, ""), i = this.weekdaysShort(t, ""), a = this.weekdays(t, ""), s.push(n), r.push(i), o.push(a), l.push(n), l.push(i), l.push(a);
                for (s.sort(cmpLenRev), r.sort(cmpLenRev), o.sort(cmpLenRev), l.sort(cmpLenRev), e = 0; e < 7; e++) r[e] = regexEscape(r[e]), o[e] = regexEscape(o[e]), l[e] = regexEscape(l[e]);
                this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
            }

            function hFormat() {
                return this.hours() % 12 || 12
            }

            function kFormat() {
                return this.hours() || 24
            }

            function meridiem(e, t) {
                addFormatToken(e, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), t)
                })
            }

            function matchMeridiem(e, t) {
                return t._meridiemParse
            }

            function localeIsPM(e) {
                return "p" === (e + "").toLowerCase().charAt(0)
            }

            function localeMeridiem(e, t, n) {
                return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function normalizeLocale(e) {
                return e ? e.toLowerCase().replace("_", "-") : e
            }

            function chooseLocale(e) {
                for (var t, n, i, a, s = 0; s < e.length;) {
                    for (a = normalizeLocale(e[s]).split("-"), t = a.length, n = normalizeLocale(e[s + 1]), n = n ? n.split("-") : null; t > 0;) {
                        if (i = loadLocale(a.slice(0, t).join("-"))) return i;
                        if (n && n.length >= t && compareArrays(a, n, !0) >= t - 1) break;
                        t--
                    }
                    s++
                }
                return null
            }

            function loadLocale(t) {
                var i = null;
                if (!ue[t] && void 0 !== e && e && e.exports) try {
                    i = re._abbr;
                    n(141)("./" + t), getSetGlobalLocale(i)
                } catch (e) {
                }
                return ue[t]
            }

            function getSetGlobalLocale(e, t) {
                var n;
                return e && (n = isUndefined(t) ? getLocale(e) : defineLocale(e, t)) && (re = n), re._abbr
            }

            function defineLocale(e, t) {
                if (null !== t) {
                    var n = de;
                    if (t.abbr = e, null != ue[e]) deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ue[e]._config; else if (null != t.parentLocale) {
                        if (null == ue[t.parentLocale]) return ce[t.parentLocale] || (ce[t.parentLocale] = []), ce[t.parentLocale].push({
                            name: e,
                            config: t
                        }), null;
                        n = ue[t.parentLocale]._config
                    }
                    return ue[e] = new Locale(mergeConfigs(n, t)), ce[e] && ce[e].forEach(function (e) {
                        defineLocale(e.name, e.config)
                    }), getSetGlobalLocale(e), ue[e]
                }
                return delete ue[e], null
            }

            function updateLocale(e, t) {
                if (null != t) {
                    var n, i, a = de;
                    i = loadLocale(e), null != i && (a = i._config), t = mergeConfigs(a, t), n = new Locale(t), n.parentLocale = ue[e], ue[e] = n, getSetGlobalLocale(e)
                } else null != ue[e] && (null != ue[e].parentLocale ? ue[e] = ue[e].parentLocale : null != ue[e] && delete ue[e]);
                return ue[e]
            }

            function getLocale(e) {
                var t;
                if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return re;
                if (!isArray(e)) {
                    if (t = loadLocale(e)) return t;
                    e = [e]
                }
                return chooseLocale(e)
            }

            function listLocales() {
                return o(ue)
            }

            function checkOverflow(e) {
                var t, n = e._a;
                return n && -2 === getParsingFlags(e).overflow && (t = n[$] < 0 || n[$] > 11 ? $ : n[W] < 1 || n[W] > daysInMonth(n[F], n[$]) ? W : n[I] < 0 || n[I] > 24 || 24 === n[I] && (0 !== n[R] || 0 !== n[z] || 0 !== n[N]) ? I : n[R] < 0 || n[R] > 59 ? R : n[z] < 0 || n[z] > 59 ? z : n[N] < 0 || n[N] > 999 ? N : -1, getParsingFlags(e)._overflowDayOfYear && (t < F || t > W) && (t = W), getParsingFlags(e)._overflowWeeks && -1 === t && (t = U), getParsingFlags(e)._overflowWeekday && -1 === t && (t = q), getParsingFlags(e).overflow = t), e
            }

            function defaults(e, t, n) {
                return null != e ? e : null != t ? t : n
            }

            function currentDateArray(e) {
                var t = new Date(hooks.now());
                return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }

            function configFromArray(e) {
                var t, n, i, a, s, r = [];
                if (!e._d) {
                    for (i = currentDateArray(e), e._w && null == e._a[W] && null == e._a[$] && dayOfYearFromWeekInfo(e), null != e._dayOfYear && (s = defaults(e._a[F], i[F]), (e._dayOfYear > daysInYear(s) || 0 === e._dayOfYear) && (getParsingFlags(e)._overflowDayOfYear = !0), n = createUTCDate(s, 0, e._dayOfYear), e._a[$] = n.getUTCMonth(), e._a[W] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = i[t];
                    for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[I] && 0 === e._a[R] && 0 === e._a[z] && 0 === e._a[N] && (e._nextDay = !0, e._a[I] = 0), e._d = (e._useUTC ? createUTCDate : createDate).apply(null, r), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[I] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (getParsingFlags(e).weekdayMismatch = !0)
                }
            }

            function dayOfYearFromWeekInfo(e) {
                var t, n, i, a, s, r, o, l;
                if (t = e._w, null != t.GG || null != t.W || null != t.E) s = 1, r = 4, n = defaults(t.GG, e._a[F], weekOfYear(createLocal(), 1, 4).year), i = defaults(t.W, 1), ((a = defaults(t.E, 1)) < 1 || a > 7) && (l = !0); else {
                    s = e._locale._week.dow, r = e._locale._week.doy;
                    var d = weekOfYear(createLocal(), s, r);
                    n = defaults(t.gg, e._a[F], d.year), i = defaults(t.w, d.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (l = !0) : null != t.e ? (a = t.e + s, (t.e < 0 || t.e > 6) && (l = !0)) : a = s
                }
                i < 1 || i > weeksInYear(n, s, r) ? getParsingFlags(e)._overflowWeeks = !0 : null != l ? getParsingFlags(e)._overflowWeekday = !0 : (o = dayOfYearFromWeeks(n, i, a, s, r), e._a[F] = o.year, e._dayOfYear = o.dayOfYear)
            }

            function configFromISO(e) {
                var t, n, i, a, s, r, o = e._i, l = he.exec(o) || me.exec(o);
                if (l) {
                    for (getParsingFlags(e).iso = !0, t = 0, n = fe.length; t < n; t++) if (fe[t][1].exec(l[1])) {
                        a = fe[t][0], i = !1 !== fe[t][2];
                        break
                    }
                    if (null == a) return void(e._isValid = !1);
                    if (l[3]) {
                        for (t = 0, n = _e.length; t < n; t++) if (_e[t][1].exec(l[3])) {
                            s = (l[2] || " ") + _e[t][0];
                            break
                        }
                        if (null == s) return void(e._isValid = !1)
                    }
                    if (!i && null != s) return void(e._isValid = !1);
                    if (l[4]) {
                        if (!pe.exec(l[4])) return void(e._isValid = !1);
                        r = "Z"
                    }
                    e._f = a + (s || "") + (r || ""), configFromStringAndFormat(e)
                } else e._isValid = !1
            }

            function extractFromRFC2822Strings(e, t, n, i, a, s) {
                var r = [untruncateYear(e), Z.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(a, 10)];
                return s && r.push(parseInt(s, 10)), r
            }

            function untruncateYear(e) {
                var t = parseInt(e, 10);
                return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
            }

            function preprocessRFC2822(e) {
                return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
            }

            function checkWeekday(e, t, n) {
                if (e) {
                    if (te.indexOf(e) !== new Date(t[0], t[1], t[2]).getDay()) return getParsingFlags(n).weekdayMismatch = !0, n._isValid = !1, !1
                }
                return !0
            }

            function calculateOffset(e, t, n) {
                if (e) return Me[e];
                if (t) return 0;
                var i = parseInt(n, 10), a = i % 100;
                return (i - a) / 100 * 60 + a
            }

            function configFromRFC2822(e) {
                var t = ge.exec(preprocessRFC2822(e._i));
                if (t) {
                    var n = extractFromRFC2822Strings(t[4], t[3], t[2], t[5], t[6], t[7]);
                    if (!checkWeekday(t[1], n, e)) return;
                    e._a = n, e._tzm = calculateOffset(t[8], t[9], t[10]), e._d = createUTCDate.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), getParsingFlags(e).rfc2822 = !0
                } else e._isValid = !1
            }

            function configFromString(e) {
                var t = ye.exec(e._i);
                if (null !== t) return void(e._d = new Date(+t[1]));
                configFromISO(e), !1 === e._isValid && (delete e._isValid, configFromRFC2822(e), !1 === e._isValid && (delete e._isValid, hooks.createFromInputFallback(e)))
            }

            function configFromStringAndFormat(e) {
                if (e._f === hooks.ISO_8601) return void configFromISO(e);
                if (e._f === hooks.RFC_2822) return void configFromRFC2822(e);
                e._a = [], getParsingFlags(e).empty = !0;
                var t, n, i, a, s, r = "" + e._i, o = r.length, l = 0;
                for (i = expandFormat(e._f, e._locale).match(p) || [], t = 0; t < i.length; t++) a = i[t], n = (r.match(getParseRegexForToken(a, e)) || [])[0], n && (s = r.substr(0, r.indexOf(n)), s.length > 0 && getParsingFlags(e).unusedInput.push(s), r = r.slice(r.indexOf(n) + n.length), l += n.length), y[a] ? (n ? getParsingFlags(e).empty = !1 : getParsingFlags(e).unusedTokens.push(a), addTimeToArrayFromToken(a, n, e)) : e._strict && !n && getParsingFlags(e).unusedTokens.push(a);
                getParsingFlags(e).charsLeftOver = o - l, r.length > 0 && getParsingFlags(e).unusedInput.push(r), e._a[I] <= 12 && !0 === getParsingFlags(e).bigHour && e._a[I] > 0 && (getParsingFlags(e).bigHour = void 0), getParsingFlags(e).parsedDateParts = e._a.slice(0), getParsingFlags(e).meridiem = e._meridiem, e._a[I] = meridiemFixWrap(e._locale, e._a[I], e._meridiem), configFromArray(e), checkOverflow(e)
            }

            function meridiemFixWrap(e, t, n) {
                var i;
                return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && t < 12 && (t += 12), i || 12 !== t || (t = 0), t) : t
            }

            function configFromStringAndArray(e) {
                var t, n, i, a, s;
                if (0 === e._f.length) return getParsingFlags(e).invalidFormat = !0, void(e._d = new Date(NaN));
                for (a = 0; a < e._f.length; a++) s = 0, t = copyConfig({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], configFromStringAndFormat(t), isValid(t) && (s += getParsingFlags(t).charsLeftOver, s += 10 * getParsingFlags(t).unusedTokens.length, getParsingFlags(t).score = s, (null == i || s < i) && (i = s, n = t));
                extend(e, n || t)
            }

            function configFromObject(e) {
                if (!e._d) {
                    var t = normalizeObjectUnits(e._i);
                    e._a = map([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                        return e && parseInt(e, 10)
                    }), configFromArray(e)
                }
            }

            function createFromConfig(e) {
                var t = new Moment(checkOverflow(prepareConfig(e)));
                return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
            }

            function prepareConfig(e) {
                var t = e._i, n = e._f;
                return e._locale = e._locale || getLocale(e._l), null === t || void 0 === n && "" === t ? createInvalid({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), isMoment(t) ? new Moment(checkOverflow(t)) : (isDate(t) ? e._d = t : isArray(n) ? configFromStringAndArray(e) : n ? configFromStringAndFormat(e) : configFromInput(e), isValid(e) || (e._d = null), e))
            }

            function configFromInput(e) {
                var t = e._i;
                isUndefined(t) ? e._d = new Date(hooks.now()) : isDate(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? configFromString(e) : isArray(t) ? (e._a = map(t.slice(0), function (e) {
                    return parseInt(e, 10)
                }), configFromArray(e)) : isObject(t) ? configFromObject(e) : isNumber(t) ? e._d = new Date(t) : hooks.createFromInputFallback(e)
            }

            function createLocalOrUTC(e, t, n, i, a) {
                var s = {};
                return !0 !== n && !1 !== n || (i = n, n = void 0), (isObject(e) && isObjectEmpty(e) || isArray(e) && 0 === e.length) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = i, createFromConfig(s)
            }

            function createLocal(e, t, n, i) {
                return createLocalOrUTC(e, t, n, i, !1)
            }

            function pickBy(e, t) {
                var n, i;
                if (1 === t.length && isArray(t[0]) && (t = t[0]), !t.length) return createLocal();
                for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
                return n
            }

            function min() {
                return pickBy("isBefore", [].slice.call(arguments, 0))
            }

            function max() {
                return pickBy("isAfter", [].slice.call(arguments, 0))
            }

            function isDurationValid(e) {
                for (var t in e) if (-1 === B.call(we, t) || null != e[t] && isNaN(e[t])) return !1;
                for (var n = !1, i = 0; i < we.length; ++i) if (e[we[i]]) {
                    if (n) return !1;
                    parseFloat(e[we[i]]) !== toInt(e[we[i]]) && (n = !0)
                }
                return !0
            }

            function isValid$1() {
                return this._isValid
            }

            function createInvalid$1() {
                return createDuration(NaN)
            }

            function Duration(e) {
                var t = normalizeObjectUnits(e), n = t.year || 0, i = t.quarter || 0, a = t.month || 0, s = t.week || 0,
                    r = t.day || 0, o = t.hour || 0, l = t.minute || 0, d = t.second || 0, u = t.millisecond || 0;
                this._isValid = isDurationValid(t), this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * o * 60 * 60, this._days = +r + 7 * s, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = getLocale(), this._bubble()
            }

            function isDuration(e) {
                return e instanceof Duration
            }

            function absRound(e) {
                return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
            }

            function offset(e, t) {
                addFormatToken(e, 0, 0, function () {
                    var e = this.utcOffset(), n = "+";
                    return e < 0 && (e = -e, n = "-"), n + zeroFill(~~(e / 60), 2) + t + zeroFill(~~e % 60, 2)
                })
            }

            function offsetFromString(e, t) {
                var n = (t || "").match(e);
                if (null === n) return null;
                var i = n[n.length - 1] || [], a = (i + "").match(Ye) || ["-", 0, 0], s = 60 * a[1] + toInt(a[2]);
                return 0 === s ? 0 : "+" === a[0] ? s : -s
            }

            function cloneWithOffset(e, t) {
                var n, i;
                return t._isUTC ? (n = t.clone(), i = (isMoment(e) || isDate(e) ? e.valueOf() : createLocal(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), hooks.updateOffset(n, !1), n) : createLocal(e).local()
            }

            function getDateOffset(e) {
                return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
            }

            function getSetOffset(e, t, n) {
                var i, a = this._offset || 0;
                if (!this.isValid()) return null != e ? this : NaN;
                if (null != e) {
                    if ("string" == typeof e) {
                        if (null === (e = offsetFromString(j, e))) return this
                    } else Math.abs(e) < 16 && !n && (e *= 60);
                    return !this._isUTC && t && (i = getDateOffset(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), a !== e && (!t || this._changeInProgress ? addSubtract(this, createDuration(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, hooks.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? a : getDateOffset(this)
            }

            function getSetZone(e, t) {
                return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
            }

            function setOffsetToUTC(e) {
                return this.utcOffset(0, e)
            }

            function setOffsetToLocal(e) {
                return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(getDateOffset(this), "m")), this
            }

            function setOffsetToParsedOffset() {
                if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
                    var e = offsetFromString(H, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                }
                return this
            }

            function hasAlignedHourOffset(e) {
                return !!this.isValid() && (e = e ? createLocal(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
            }

            function isDaylightSavingTime() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function isDaylightSavingTimeShifted() {
                if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
                var e = {};
                if (copyConfig(e, this), e = prepareConfig(e), e._a) {
                    var t = e._isUTC ? createUTC(e._a) : createLocal(e._a);
                    this._isDSTShifted = this.isValid() && compareArrays(e._a, t.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function isLocal() {
                return !!this.isValid() && !this._isUTC
            }

            function isUtcOffset() {
                return !!this.isValid() && this._isUTC
            }

            function isUtc() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function createDuration(e, t) {
                var n, i, a, s = e, r = null;
                return isDuration(e) ? s = {
                    ms: e._milliseconds,
                    d: e._days,
                    M: e._months
                } : isNumber(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (r = Te.exec(e)) ? (n = "-" === r[1] ? -1 : 1, s = {
                    y: 0,
                    d: toInt(r[W]) * n,
                    h: toInt(r[I]) * n,
                    m: toInt(r[R]) * n,
                    s: toInt(r[z]) * n,
                    ms: toInt(absRound(1e3 * r[N])) * n
                }) : (r = De.exec(e)) ? (n = "-" === r[1] ? -1 : (r[1], 1), s = {
                    y: parseIso(r[2], n),
                    M: parseIso(r[3], n),
                    w: parseIso(r[4], n),
                    d: parseIso(r[5], n),
                    h: parseIso(r[6], n),
                    m: parseIso(r[7], n),
                    s: parseIso(r[8], n)
                }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (a = momentsDifference(createLocal(s.from), createLocal(s.to)), s = {}, s.ms = a.milliseconds, s.M = a.months), i = new Duration(s), isDuration(e) && hasOwnProp(e, "_locale") && (i._locale = e._locale), i
            }

            function parseIso(e, t) {
                var n = e && parseFloat(e.replace(",", "."));
                return (isNaN(n) ? 0 : n) * t
            }

            function positiveMomentsDifference(e, t) {
                var n = {milliseconds: 0, months: 0};
                return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
            }

            function momentsDifference(e, t) {
                var n;
                return e.isValid() && t.isValid() ? (t = cloneWithOffset(t, e), e.isBefore(t) ? n = positiveMomentsDifference(e, t) : (n = positiveMomentsDifference(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function createAdder(e, t) {
                return function (n, i) {
                    var a, s;
                    return null === i || isNaN(+i) || (deprecateSimple(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, a = createDuration(n, i), addSubtract(this, a, e), this
                }
            }

            function addSubtract(e, t, n, i) {
                var a = t._milliseconds, s = absRound(t._days), r = absRound(t._months);
                e.isValid() && (i = null == i || i, r && setMonth(e, get(e, "Month") + r * n), s && set$1(e, "Date", get(e, "Date") + s * n), a && e._d.setTime(e._d.valueOf() + a * n), i && hooks.updateOffset(e, s || r))
            }

            function getCalendarFormat(e, t) {
                var n = e.diff(t, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }

            function calendar$1(e, t) {
                var n = e || createLocal(), i = cloneWithOffset(n, this).startOf("day"),
                    a = hooks.calendarFormat(this, i) || "sameElse",
                    s = t && (isFunction(t[a]) ? t[a].call(this, n) : t[a]);
                return this.format(s || this.localeData().calendar(a, this, createLocal(n)))
            }

            function clone() {
                return new Moment(this)
            }

            function isAfter(e, t) {
                var n = isMoment(e) ? e : createLocal(e);
                return !(!this.isValid() || !n.isValid()) && (t = normalizeUnits(isUndefined(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
            }

            function isBefore(e, t) {
                var n = isMoment(e) ? e : createLocal(e);
                return !(!this.isValid() || !n.isValid()) && (t = normalizeUnits(isUndefined(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
            }

            function isBetween(e, t, n, i) {
                return i = i || "()", ("(" === i[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
            }

            function isSame(e, t) {
                var n, i = isMoment(e) ? e : createLocal(e);
                return !(!this.isValid() || !i.isValid()) && (t = normalizeUnits(t || "millisecond"), "millisecond" === t ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
            }

            function isSameOrAfter(e, t) {
                return this.isSame(e, t) || this.isAfter(e, t)
            }

            function isSameOrBefore(e, t) {
                return this.isSame(e, t) || this.isBefore(e, t)
            }

            function diff(e, t, n) {
                var i, a, s;
                if (!this.isValid()) return NaN;
                if (i = cloneWithOffset(e, this), !i.isValid()) return NaN;
                switch (a = 6e4 * (i.utcOffset() - this.utcOffset()), t = normalizeUnits(t)) {
                    case"year":
                        s = monthDiff(this, i) / 12;
                        break;
                    case"month":
                        s = monthDiff(this, i);
                        break;
                    case"quarter":
                        s = monthDiff(this, i) / 3;
                        break;
                    case"second":
                        s = (this - i) / 1e3;
                        break;
                    case"minute":
                        s = (this - i) / 6e4;
                        break;
                    case"hour":
                        s = (this - i) / 36e5;
                        break;
                    case"day":
                        s = (this - i - a) / 864e5;
                        break;
                    case"week":
                        s = (this - i - a) / 6048e5;
                        break;
                    default:
                        s = this - i
                }
                return n ? s : absFloor(s)
            }

            function monthDiff(e, t) {
                var n, i, a = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(a, "months");
                return t - s < 0 ? (n = e.clone().add(a - 1, "months"), i = (t - s) / (s - n)) : (n = e.clone().add(a + 1, "months"), i = (t - s) / (n - s)), -(a + i) || 0
            }

            function toString() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function toISOString(e) {
                if (!this.isValid()) return null;
                var t = !0 !== e, n = t ? this.clone().utc() : this;
                return n.year() < 0 || n.year() > 9999 ? formatMoment(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : isFunction(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", formatMoment(n, "Z")) : formatMoment(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function inspect() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var e = "moment", t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                var n = "[" + e + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = t + '[")]';
                return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a)
            }

            function format(e) {
                e || (e = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat);
                var t = formatMoment(this, e);
                return this.localeData().postformat(t)
            }

            function from(e, t) {
                return this.isValid() && (isMoment(e) && e.isValid() || createLocal(e).isValid()) ? createDuration({
                    to: this,
                    from: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function fromNow(e) {
                return this.from(createLocal(), e)
            }

            function to(e, t) {
                return this.isValid() && (isMoment(e) && e.isValid() || createLocal(e).isValid()) ? createDuration({
                    from: this,
                    to: e
                }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
            }

            function toNow(e) {
                return this.to(createLocal(), e)
            }

            function locale(e) {
                var t;
                return void 0 === e ? this._locale._abbr : (t = getLocale(e), null != t && (this._locale = t), this)
            }

            function localeData() {
                return this._locale
            }

            function startOf(e) {
                switch (e = normalizeUnits(e)) {
                    case"year":
                        this.month(0);
                    case"quarter":
                    case"month":
                        this.date(1);
                    case"week":
                    case"isoWeek":
                    case"day":
                    case"date":
                        this.hours(0);
                    case"hour":
                        this.minutes(0);
                    case"minute":
                        this.seconds(0);
                    case"second":
                        this.milliseconds(0)
                }
                return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function endOf(e) {
                return void 0 === (e = normalizeUnits(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
            }

            function valueOf() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function unix() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function toDate() {
                return new Date(this.valueOf())
            }

            function toArray() {
                var e = this;
                return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
            }

            function toObject() {
                var e = this;
                return {
                    years: e.year(),
                    months: e.month(),
                    date: e.date(),
                    hours: e.hours(),
                    minutes: e.minutes(),
                    seconds: e.seconds(),
                    milliseconds: e.milliseconds()
                }
            }

            function toJSON() {
                return this.isValid() ? this.toISOString() : null
            }

            function isValid$2() {
                return isValid(this)
            }

            function parsingFlags() {
                return extend({}, getParsingFlags(this))
            }

            function invalidAt() {
                return getParsingFlags(this).overflow
            }

            function creationData() {
                return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
            }

            function addWeekYearFormatToken(e, t) {
                addFormatToken(0, [e, e.length], 0, t)
            }

            function getSetWeekYear(e) {
                return getSetWeekYearHelper.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function getSetISOWeekYear(e) {
                return getSetWeekYearHelper.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function getISOWeeksInYear() {
                return weeksInYear(this.year(), 1, 4)
            }

            function getWeeksInYear() {
                var e = this.localeData()._week;
                return weeksInYear(this.year(), e.dow, e.doy)
            }

            function getSetWeekYearHelper(e, t, n, i, a) {
                var s;
                return null == e ? weekOfYear(this, i, a).year : (s = weeksInYear(e, i, a), t > s && (t = s), setWeekAll.call(this, e, t, n, i, a))
            }

            function setWeekAll(e, t, n, i, a) {
                var s = dayOfYearFromWeeks(e, t, n, i, a), r = createUTCDate(s.year, 0, s.dayOfYear);
                return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
            }

            function getSetQuarter(e) {
                return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
            }

            function getSetDayOfYear(e) {
                var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == e ? t : this.add(e - t, "d")
            }

            function parseMs(e, t) {
                t[N] = toInt(1e3 * ("0." + e))
            }

            function getZoneAbbr() {
                return this._isUTC ? "UTC" : ""
            }

            function getZoneName() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function createUnix(e) {
                return createLocal(1e3 * e)
            }

            function createInZone() {
                return createLocal.apply(null, arguments).parseZone()
            }

            function preParsePostFormat(e) {
                return e
            }

            function get$1(e, t, n, i) {
                var a = getLocale(), s = createUTC().set(i, t);
                return a[n](s, e)
            }

            function listMonthsImpl(e, t, n) {
                if (isNumber(e) && (t = e, e = void 0), e = e || "", null != t) return get$1(e, t, n, "month");
                var i, a = [];
                for (i = 0; i < 12; i++) a[i] = get$1(e, i, n, "month");
                return a
            }

            function listWeekdaysImpl(e, t, n, i) {
                "boolean" == typeof e ? (isNumber(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, isNumber(t) && (n = t, t = void 0), t = t || "");
                var a = getLocale(), s = e ? a._week.dow : 0;
                if (null != n) return get$1(t, (n + s) % 7, i, "day");
                var r, o = [];
                for (r = 0; r < 7; r++) o[r] = get$1(t, (r + s) % 7, i, "day");
                return o
            }

            function listMonths(e, t) {
                return listMonthsImpl(e, t, "months")
            }

            function listMonthsShort(e, t) {
                return listMonthsImpl(e, t, "monthsShort")
            }

            function listWeekdays(e, t, n) {
                return listWeekdaysImpl(e, t, n, "weekdays")
            }

            function listWeekdaysShort(e, t, n) {
                return listWeekdaysImpl(e, t, n, "weekdaysShort")
            }

            function listWeekdaysMin(e, t, n) {
                return listWeekdaysImpl(e, t, n, "weekdaysMin")
            }

            function abs() {
                var e = this._data;
                return this._milliseconds = Fe(this._milliseconds), this._days = Fe(this._days), this._months = Fe(this._months), e.milliseconds = Fe(e.milliseconds), e.seconds = Fe(e.seconds), e.minutes = Fe(e.minutes), e.hours = Fe(e.hours), e.months = Fe(e.months), e.years = Fe(e.years), this
            }

            function addSubtract$1(e, t, n, i) {
                var a = createDuration(t, n);
                return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble()
            }

            function add$1(e, t) {
                return addSubtract$1(this, e, t, 1)
            }

            function subtract$1(e, t) {
                return addSubtract$1(this, e, t, -1)
            }

            function absCeil(e) {
                return e < 0 ? Math.floor(e) : Math.ceil(e)
            }

            function bubble() {
                var e, t, n, i, a, s = this._milliseconds, r = this._days, o = this._months, l = this._data;
                return s >= 0 && r >= 0 && o >= 0 || s <= 0 && r <= 0 && o <= 0 || (s += 864e5 * absCeil(monthsToDays(o) + r), r = 0, o = 0), l.milliseconds = s % 1e3, e = absFloor(s / 1e3), l.seconds = e % 60, t = absFloor(e / 60), l.minutes = t % 60, n = absFloor(t / 60), l.hours = n % 24, r += absFloor(n / 24), a = absFloor(daysToMonths(r)), o += a, r -= absCeil(monthsToDays(a)), i = absFloor(o / 12), o %= 12, l.days = r, l.months = o, l.years = i, this
            }

            function daysToMonths(e) {
                return 4800 * e / 146097
            }

            function monthsToDays(e) {
                return 146097 * e / 4800
            }

            function as(e) {
                if (!this.isValid()) return NaN;
                var t, n, i = this._milliseconds;
                if ("month" === (e = normalizeUnits(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + daysToMonths(t), "month" === e ? n : n / 12;
                switch (t = this._days + Math.round(monthsToDays(this._months)), e) {
                    case"week":
                        return t / 7 + i / 6048e5;
                    case"day":
                        return t + i / 864e5;
                    case"hour":
                        return 24 * t + i / 36e5;
                    case"minute":
                        return 1440 * t + i / 6e4;
                    case"second":
                        return 86400 * t + i / 1e3;
                    case"millisecond":
                        return Math.floor(864e5 * t) + i;
                    default:
                        throw new Error("Unknown unit " + e)
                }
            }

            function valueOf$1() {
                return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * toInt(this._months / 12) : NaN
            }

            function makeAs(e) {
                return function () {
                    return this.as(e)
                }
            }

            function clone$1() {
                return createDuration(this)
            }

            function get$2(e) {
                return e = normalizeUnits(e), this.isValid() ? this[e + "s"]() : NaN
            }

            function makeGetter(e) {
                return function () {
                    return this.isValid() ? this._data[e] : NaN
                }
            }

            function weeks() {
                return absFloor(this.days() / 7)
            }

            function substituteTimeAgo(e, t, n, i, a) {
                return a.relativeTime(t || 1, !!n, e, i)
            }

            function relativeTime$1(e, t, n) {
                var i = createDuration(e).abs(), a = Qe(i.as("s")), s = Qe(i.as("m")), r = Qe(i.as("h")),
                    o = Qe(i.as("d")), l = Qe(i.as("M")), d = Qe(i.as("y")),
                    u = a <= et.ss && ["s", a] || a < et.s && ["ss", a] || s <= 1 && ["m"] || s < et.m && ["mm", s] || r <= 1 && ["h"] || r < et.h && ["hh", r] || o <= 1 && ["d"] || o < et.d && ["dd", o] || l <= 1 && ["M"] || l < et.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d];
                return u[2] = t, u[3] = +e > 0, u[4] = n, substituteTimeAgo.apply(null, u)
            }

            function getSetRelativeTimeRounding(e) {
                return void 0 === e ? Qe : "function" == typeof e && (Qe = e, !0)
            }

            function getSetRelativeTimeThreshold(e, t) {
                return void 0 !== et[e] && (void 0 === t ? et[e] : (et[e] = t, "s" === e && (et.ss = t - 1), !0))
            }

            function humanize(e) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var t = this.localeData(), n = relativeTime$1(this, !e, t);
                return e && (n = t.pastFuture(+this, n)), t.postformat(n)
            }

            function sign(e) {
                return (e > 0) - (e < 0) || +e
            }

            function toISOString$1() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var e, t, n, i = tt(this._milliseconds) / 1e3, a = tt(this._days), s = tt(this._months);
                e = absFloor(i / 60), t = absFloor(e / 60), i %= 60, e %= 60, n = absFloor(s / 12), s %= 12;
                var r = n, o = s, l = a, d = t, u = e, c = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
                    h = this.asSeconds();
                if (!h) return "P0D";
                var m = h < 0 ? "-" : "", p = sign(this._months) !== sign(h) ? "-" : "",
                    f = sign(this._days) !== sign(h) ? "-" : "", _ = sign(this._milliseconds) !== sign(h) ? "-" : "";
                return m + "P" + (r ? p + r + "Y" : "") + (o ? p + o + "M" : "") + (l ? f + l + "D" : "") + (d || u || c ? "T" : "") + (d ? _ + d + "H" : "") + (u ? _ + u + "M" : "") + (c ? _ + c + "S" : "")
            }

            var t, i;
            i = Array.prototype.some ? Array.prototype.some : function (e) {
                for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++) if (i in t && e.call(this, t[i], i, t)) return !0;
                return !1
            };
            var a = hooks.momentProperties = [], s = !1, r = {};
            hooks.suppressDeprecationWarnings = !1, hooks.deprecationHandler = null;
            var o;
            o = Object.keys ? Object.keys : function (e) {
                var t, n = [];
                for (t in e) hasOwnProp(e, t) && n.push(t);
                return n
            };
            var l = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                }, d = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, u = /\d{1,2}/, c = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    ss: "%d seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                }, h = {}, m = {},
                p = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                f = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, _ = {}, y = {}, g = /\d/, M = /\d\d/, v = /\d{3}/,
                k = /\d{4}/, L = /[+-]?\d{6}/, w = /\d\d?/, Y = /\d\d\d\d?/, T = /\d\d\d\d\d\d?/, D = /\d{1,3}/,
                b = /\d{1,4}/, S = /[+-]?\d{1,6}/, x = /\d+/, C = /[+-]?\d+/, H = /Z|[+-]\d\d:?\d\d/gi,
                j = /Z|[+-]\d\d(?::?\d\d)?/gi, A = /[+-]?\d+(\.\d{1,3})?/,
                P = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                O = {}, E = {}, F = 0, $ = 1, W = 2, I = 3, R = 4, z = 5, N = 6, U = 7, q = 8;
            addFormatToken("Y", 0, 0, function () {
                var e = this.year();
                return e <= 9999 ? "" + e : "+" + e
            }), addFormatToken(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }), addFormatToken(0, ["YYYY", 4], 0, "year"), addFormatToken(0, ["YYYYY", 5], 0, "year"), addFormatToken(0, ["YYYYYY", 6, !0], 0, "year"), addUnitAlias("year", "y"), addUnitPriority("year", 1), addRegexToken("Y", C), addRegexToken("YY", w, M), addRegexToken("YYYY", b, k), addRegexToken("YYYYY", S, L), addRegexToken("YYYYYY", S, L), addParseToken(["YYYYY", "YYYYYY"], F), addParseToken("YYYY", function (e, t) {
                t[F] = 2 === e.length ? hooks.parseTwoDigitYear(e) : toInt(e)
            }), addParseToken("YY", function (e, t) {
                t[F] = hooks.parseTwoDigitYear(e)
            }), addParseToken("Y", function (e, t) {
                t[F] = parseInt(e, 10)
            }), hooks.parseTwoDigitYear = function (e) {
                return toInt(e) + (toInt(e) > 68 ? 1900 : 2e3)
            };
            var B, G = makeGetSet("FullYear", !0);
            B = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1
            }, addFormatToken("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            }), addFormatToken("MMM", 0, 0, function (e) {
                return this.localeData().monthsShort(this, e)
            }), addFormatToken("MMMM", 0, 0, function (e) {
                return this.localeData().months(this, e)
            }), addUnitAlias("month", "M"), addUnitPriority("month", 8), addRegexToken("M", w), addRegexToken("MM", w, M), addRegexToken("MMM", function (e, t) {
                return t.monthsShortRegex(e)
            }), addRegexToken("MMMM", function (e, t) {
                return t.monthsRegex(e)
            }), addParseToken(["M", "MM"], function (e, t) {
                t[$] = toInt(e) - 1
            }), addParseToken(["MMM", "MMMM"], function (e, t, n, i) {
                var a = n._locale.monthsParse(e, i, n._strict);
                null != a ? t[$] = a : getParsingFlags(n).invalidMonth = e
            });
            var J = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                V = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Z = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), K = P, X = P;
            addFormatToken("w", ["ww", 2], "wo", "week"), addFormatToken("W", ["WW", 2], "Wo", "isoWeek"), addUnitAlias("week", "w"), addUnitAlias("isoWeek", "W"), addUnitPriority("week", 5), addUnitPriority("isoWeek", 5), addRegexToken("w", w), addRegexToken("ww", w, M), addRegexToken("W", w), addRegexToken("WW", w, M), addWeekParseToken(["w", "ww", "W", "WW"], function (e, t, n, i) {
                t[i.substr(0, 1)] = toInt(e)
            });
            var Q = {dow: 0, doy: 6};
            addFormatToken("d", 0, "do", "day"), addFormatToken("dd", 0, 0, function (e) {
                return this.localeData().weekdaysMin(this, e)
            }), addFormatToken("ddd", 0, 0, function (e) {
                return this.localeData().weekdaysShort(this, e)
            }), addFormatToken("dddd", 0, 0, function (e) {
                return this.localeData().weekdays(this, e)
            }), addFormatToken("e", 0, 0, "weekday"), addFormatToken("E", 0, 0, "isoWeekday"), addUnitAlias("day", "d"), addUnitAlias("weekday", "e"), addUnitAlias("isoWeekday", "E"), addUnitPriority("day", 11), addUnitPriority("weekday", 11), addUnitPriority("isoWeekday", 11), addRegexToken("d", w), addRegexToken("e", w), addRegexToken("E", w), addRegexToken("dd", function (e, t) {
                return t.weekdaysMinRegex(e)
            }), addRegexToken("ddd", function (e, t) {
                return t.weekdaysShortRegex(e)
            }), addRegexToken("dddd", function (e, t) {
                return t.weekdaysRegex(e)
            }), addWeekParseToken(["dd", "ddd", "dddd"], function (e, t, n, i) {
                var a = n._locale.weekdaysParse(e, i, n._strict);
                null != a ? t.d = a : getParsingFlags(n).invalidWeekday = e
            }), addWeekParseToken(["d", "e", "E"], function (e, t, n, i) {
                t[i] = toInt(e)
            });
            var ee = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                te = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), ne = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ie = P, ae = P,
                se = P;
            addFormatToken("H", ["HH", 2], 0, "hour"), addFormatToken("h", ["hh", 2], 0, hFormat), addFormatToken("k", ["kk", 2], 0, kFormat), addFormatToken("hmm", 0, 0, function () {
                return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2)
            }), addFormatToken("hmmss", 0, 0, function () {
                return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2)
            }), addFormatToken("Hmm", 0, 0, function () {
                return "" + this.hours() + zeroFill(this.minutes(), 2)
            }), addFormatToken("Hmmss", 0, 0, function () {
                return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2)
            }), meridiem("a", !0), meridiem("A", !1), addUnitAlias("hour", "h"), addUnitPriority("hour", 13), addRegexToken("a", matchMeridiem), addRegexToken("A", matchMeridiem), addRegexToken("H", w), addRegexToken("h", w), addRegexToken("k", w), addRegexToken("HH", w, M), addRegexToken("hh", w, M), addRegexToken("kk", w, M), addRegexToken("hmm", Y), addRegexToken("hmmss", T), addRegexToken("Hmm", Y), addRegexToken("Hmmss", T), addParseToken(["H", "HH"], I), addParseToken(["k", "kk"], function (e, t, n) {
                var i = toInt(e);
                t[I] = 24 === i ? 0 : i
            }), addParseToken(["a", "A"], function (e, t, n) {
                n._isPm = n._locale.isPM(e), n._meridiem = e
            }), addParseToken(["h", "hh"], function (e, t, n) {
                t[I] = toInt(e), getParsingFlags(n).bigHour = !0
            }), addParseToken("hmm", function (e, t, n) {
                var i = e.length - 2;
                t[I] = toInt(e.substr(0, i)), t[R] = toInt(e.substr(i)), getParsingFlags(n).bigHour = !0
            }), addParseToken("hmmss", function (e, t, n) {
                var i = e.length - 4, a = e.length - 2;
                t[I] = toInt(e.substr(0, i)), t[R] = toInt(e.substr(i, 2)), t[z] = toInt(e.substr(a)), getParsingFlags(n).bigHour = !0
            }), addParseToken("Hmm", function (e, t, n) {
                var i = e.length - 2;
                t[I] = toInt(e.substr(0, i)), t[R] = toInt(e.substr(i))
            }), addParseToken("Hmmss", function (e, t, n) {
                var i = e.length - 4, a = e.length - 2;
                t[I] = toInt(e.substr(0, i)), t[R] = toInt(e.substr(i, 2)), t[z] = toInt(e.substr(a))
            });
            var re, oe = /[ap]\.?m?\.?/i, le = makeGetSet("Hours", !0), de = {
                    calendar: l,
                    longDateFormat: d,
                    invalidDate: "Invalid date",
                    ordinal: "%d",
                    dayOfMonthOrdinalParse: u,
                    relativeTime: c,
                    months: V,
                    monthsShort: Z,
                    week: Q,
                    weekdays: ee,
                    weekdaysMin: ne,
                    weekdaysShort: te,
                    meridiemParse: oe
                }, ue = {}, ce = {},
                he = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                me = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                pe = /Z|[+-]\d\d(?::?\d\d)?/,
                fe = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
                _e = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
                ye = /^\/?Date\((\-?\d+)/i,
                ge = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Me = {
                    UT: 0,
                    GMT: 0,
                    EDT: -240,
                    EST: -300,
                    CDT: -300,
                    CST: -360,
                    MDT: -360,
                    MST: -420,
                    PDT: -420,
                    PST: -480
                };
            hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
                e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
            }), hooks.ISO_8601 = function () {
            }, hooks.RFC_2822 = function () {
            };
            var ve = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var e = createLocal.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e < this ? this : e : createInvalid()
                }),
                ke = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                    var e = createLocal.apply(null, arguments);
                    return this.isValid() && e.isValid() ? e > this ? this : e : createInvalid()
                }), Le = function () {
                    return Date.now ? Date.now() : +new Date
                }, we = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
            offset("Z", ":"), offset("ZZ", ""), addRegexToken("Z", j), addRegexToken("ZZ", j), addParseToken(["Z", "ZZ"], function (e, t, n) {
                n._useUTC = !0, n._tzm = offsetFromString(j, e)
            });
            var Ye = /([\+\-]|\d\d)/gi;
            hooks.updateOffset = function () {
            };
            var Te = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                De = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
            createDuration.fn = Duration.prototype, createDuration.invalid = createInvalid$1;
            var be = createAdder(1, "add"), Se = createAdder(-1, "subtract");
            hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var xe = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
                return void 0 === e ? this.localeData() : this.locale(e)
            });
            addFormatToken(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            }), addFormatToken(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }), addWeekYearFormatToken("gggg", "weekYear"), addWeekYearFormatToken("ggggg", "weekYear"), addWeekYearFormatToken("GGGG", "isoWeekYear"), addWeekYearFormatToken("GGGGG", "isoWeekYear"), addUnitAlias("weekYear", "gg"), addUnitAlias("isoWeekYear", "GG"), addUnitPriority("weekYear", 1), addUnitPriority("isoWeekYear", 1), addRegexToken("G", C), addRegexToken("g", C), addRegexToken("GG", w, M), addRegexToken("gg", w, M), addRegexToken("GGGG", b, k), addRegexToken("gggg", b, k), addRegexToken("GGGGG", S, L), addRegexToken("ggggg", S, L), addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
                t[i.substr(0, 2)] = toInt(e)
            }), addWeekParseToken(["gg", "GG"], function (e, t, n, i) {
                t[i] = hooks.parseTwoDigitYear(e)
            }), addFormatToken("Q", 0, "Qo", "quarter"), addUnitAlias("quarter", "Q"), addUnitPriority("quarter", 7), addRegexToken("Q", g), addParseToken("Q", function (e, t) {
                t[$] = 3 * (toInt(e) - 1)
            }), addFormatToken("D", ["DD", 2], "Do", "date"), addUnitAlias("date", "D"), addUnitPriority("date", 9), addRegexToken("D", w), addRegexToken("DD", w, M), addRegexToken("Do", function (e, t) {
                return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
            }), addParseToken(["D", "DD"], W), addParseToken("Do", function (e, t) {
                t[W] = toInt(e.match(w)[0])
            });
            var Ce = makeGetSet("Date", !0);
            addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), addUnitAlias("dayOfYear", "DDD"), addUnitPriority("dayOfYear", 4), addRegexToken("DDD", D), addRegexToken("DDDD", v), addParseToken(["DDD", "DDDD"], function (e, t, n) {
                n._dayOfYear = toInt(e)
            }), addFormatToken("m", ["mm", 2], 0, "minute"), addUnitAlias("minute", "m"), addUnitPriority("minute", 14), addRegexToken("m", w), addRegexToken("mm", w, M), addParseToken(["m", "mm"], R);
            var He = makeGetSet("Minutes", !1);
            addFormatToken("s", ["ss", 2], 0, "second"), addUnitAlias("second", "s"), addUnitPriority("second", 15), addRegexToken("s", w), addRegexToken("ss", w, M), addParseToken(["s", "ss"], z);
            var je = makeGetSet("Seconds", !1);
            addFormatToken("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            }), addFormatToken(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }), addFormatToken(0, ["SSS", 3], 0, "millisecond"), addFormatToken(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }), addFormatToken(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }), addFormatToken(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }), addFormatToken(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }), addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }), addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }), addUnitAlias("millisecond", "ms"), addUnitPriority("millisecond", 16), addRegexToken("S", D, g), addRegexToken("SS", D, M), addRegexToken("SSS", D, v);
            var Ae;
            for (Ae = "SSSS"; Ae.length <= 9; Ae += "S") addRegexToken(Ae, x);
            for (Ae = "S"; Ae.length <= 9; Ae += "S") addParseToken(Ae, parseMs);
            var Pe = makeGetSet("Milliseconds", !1);
            addFormatToken("z", 0, 0, "zoneAbbr"), addFormatToken("zz", 0, 0, "zoneName");
            var Oe = Moment.prototype;
            Oe.add = be, Oe.calendar = calendar$1, Oe.clone = clone, Oe.diff = diff, Oe.endOf = endOf, Oe.format = format, Oe.from = from, Oe.fromNow = fromNow, Oe.to = to, Oe.toNow = toNow, Oe.get = stringGet, Oe.invalidAt = invalidAt, Oe.isAfter = isAfter, Oe.isBefore = isBefore, Oe.isBetween = isBetween, Oe.isSame = isSame, Oe.isSameOrAfter = isSameOrAfter, Oe.isSameOrBefore = isSameOrBefore, Oe.isValid = isValid$2, Oe.lang = xe, Oe.locale = locale, Oe.localeData = localeData, Oe.max = ke, Oe.min = ve, Oe.parsingFlags = parsingFlags, Oe.set = stringSet, Oe.startOf = startOf, Oe.subtract = Se, Oe.toArray = toArray, Oe.toObject = toObject, Oe.toDate = toDate, Oe.toISOString = toISOString, Oe.inspect = inspect, Oe.toJSON = toJSON, Oe.toString = toString, Oe.unix = unix, Oe.valueOf = valueOf, Oe.creationData = creationData, Oe.year = G, Oe.isLeapYear = getIsLeapYear, Oe.weekYear = getSetWeekYear, Oe.isoWeekYear = getSetISOWeekYear, Oe.quarter = Oe.quarters = getSetQuarter, Oe.month = getSetMonth, Oe.daysInMonth = getDaysInMonth, Oe.week = Oe.weeks = getSetWeek, Oe.isoWeek = Oe.isoWeeks = getSetISOWeek, Oe.weeksInYear = getWeeksInYear, Oe.isoWeeksInYear = getISOWeeksInYear, Oe.date = Ce, Oe.day = Oe.days = getSetDayOfWeek, Oe.weekday = getSetLocaleDayOfWeek, Oe.isoWeekday = getSetISODayOfWeek, Oe.dayOfYear = getSetDayOfYear, Oe.hour = Oe.hours = le, Oe.minute = Oe.minutes = He, Oe.second = Oe.seconds = je, Oe.millisecond = Oe.milliseconds = Pe, Oe.utcOffset = getSetOffset, Oe.utc = setOffsetToUTC, Oe.local = setOffsetToLocal, Oe.parseZone = setOffsetToParsedOffset, Oe.hasAlignedHourOffset = hasAlignedHourOffset, Oe.isDST = isDaylightSavingTime, Oe.isLocal = isLocal, Oe.isUtcOffset = isUtcOffset, Oe.isUtc = isUtc, Oe.isUTC = isUtc, Oe.zoneAbbr = getZoneAbbr, Oe.zoneName = getZoneName, Oe.dates = deprecate("dates accessor is deprecated. Use date instead.", Ce), Oe.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth), Oe.years = deprecate("years accessor is deprecated. Use year instead", G), Oe.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone), Oe.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
            var Ee = Locale.prototype;
            Ee.calendar = calendar, Ee.longDateFormat = longDateFormat, Ee.invalidDate = invalidDate, Ee.ordinal = ordinal, Ee.preparse = preParsePostFormat, Ee.postformat = preParsePostFormat, Ee.relativeTime = relativeTime, Ee.pastFuture = pastFuture, Ee.set = set, Ee.months = localeMonths, Ee.monthsShort = localeMonthsShort, Ee.monthsParse = localeMonthsParse, Ee.monthsRegex = monthsRegex, Ee.monthsShortRegex = monthsShortRegex, Ee.week = localeWeek, Ee.firstDayOfYear = localeFirstDayOfYear, Ee.firstDayOfWeek = localeFirstDayOfWeek, Ee.weekdays = localeWeekdays, Ee.weekdaysMin = localeWeekdaysMin, Ee.weekdaysShort = localeWeekdaysShort, Ee.weekdaysParse = localeWeekdaysParse, Ee.weekdaysRegex = weekdaysRegex, Ee.weekdaysShortRegex = weekdaysShortRegex, Ee.weekdaysMinRegex = weekdaysMinRegex, Ee.isPM = localeIsPM, Ee.meridiem = localeMeridiem, getSetGlobalLocale("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (e) {
                    var t = e % 10;
                    return e + (1 === toInt(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                }
            }), hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale), hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
            var Fe = Math.abs, $e = makeAs("ms"), We = makeAs("s"), Ie = makeAs("m"), Re = makeAs("h"),
                ze = makeAs("d"), Ne = makeAs("w"), Ue = makeAs("M"), qe = makeAs("y"), Be = makeGetter("milliseconds"),
                Ge = makeGetter("seconds"), Je = makeGetter("minutes"), Ve = makeGetter("hours"),
                Ze = makeGetter("days"), Ke = makeGetter("months"), Xe = makeGetter("years"), Qe = Math.round,
                et = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, tt = Math.abs, nt = Duration.prototype;
            return nt.isValid = isValid$1, nt.abs = abs, nt.add = add$1, nt.subtract = subtract$1, nt.as = as, nt.asMilliseconds = $e, nt.asSeconds = We, nt.asMinutes = Ie, nt.asHours = Re, nt.asDays = ze, nt.asWeeks = Ne, nt.asMonths = Ue, nt.asYears = qe, nt.valueOf = valueOf$1, nt._bubble = bubble, nt.clone = clone$1, nt.get = get$2, nt.milliseconds = Be, nt.seconds = Ge, nt.minutes = Je, nt.hours = Ve, nt.days = Ze, nt.weeks = weeks, nt.months = Ke, nt.years = Xe, nt.humanize = humanize, nt.toISOString = toISOString$1, nt.toString = toISOString$1, nt.toJSON = toISOString$1, nt.locale = locale, nt.localeData = localeData, nt.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1), nt.lang = xe, addFormatToken("X", 0, 0, "unix"), addFormatToken("x", 0, 0, "valueOf"), addRegexToken("x", C), addRegexToken("X", A), addParseToken("X", function (e, t, n) {
                n._d = new Date(1e3 * parseFloat(e, 10))
            }), addParseToken("x", function (e, t, n) {
                n._d = new Date(toInt(e))
            }), hooks.version = "2.20.1", function (e) {
                t = e
            }(createLocal), hooks.fn = Oe, hooks.min = min, hooks.max = max, hooks.now = Le, hooks.utc = createUTC, hooks.unix = createUnix, hooks.months = listMonths, hooks.isDate = isDate, hooks.locale = getSetGlobalLocale, hooks.invalid = createInvalid, hooks.duration = createDuration, hooks.isMoment = isMoment, hooks.weekdays = listWeekdays, hooks.parseZone = createInZone, hooks.localeData = getLocale, hooks.isDuration = isDuration, hooks.monthsShort = listMonthsShort, hooks.weekdaysMin = listWeekdaysMin, hooks.defineLocale = defineLocale, hooks.updateLocale = updateLocale, hooks.locales = listLocales, hooks.weekdaysShort = listWeekdaysShort, hooks.normalizeUnits = normalizeUnits, hooks.relativeTimeRounding = getSetRelativeTimeRounding, hooks.relativeTimeThreshold = getSetRelativeTimeThreshold, hooks.calendarFormat = getCalendarFormat, hooks.prototype = Oe, hooks.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "YYYY-[W]WW",
                MONTH: "YYYY-MM"
            }, hooks
        })
    }).call(t, n(140)(e))
}, function (e, t, n) {
    var i, a;
    !function (t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, s) {
        "use strict";

        function DOMEval(e, t, n) {
            t = t || o;
            var i, a = t.createElement("script");
            if (a.text = e, n) for (i in k) n[i] && (a[i] = n[i]);
            t.head.appendChild(a).parentNode.removeChild(a)
        }

        function toType(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? m[p.call(e)] || "object" : typeof e
        }

        function isArrayLike(e) {
            var t = !!e && "length" in e && e.length, n = toType(e);
            return !M(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function nodeName(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        function winnow(e, t, n) {
            return M(t) ? L.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? L.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? L.grep(e, function (e) {
                return h.call(t, e) > -1 !== n
            }) : L.filter(t, e, n)
        }

        function sibling(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        function createOptions(e) {
            var t = {};
            return L.each(e.match(A) || [], function (e, n) {
                t[n] = !0
            }), t
        }

        function Identity(e) {
            return e
        }

        function Thrower(e) {
            throw e
        }

        function adoptValue(e, t, n, i) {
            var a;
            try {
                e && M(a = e.promise) ? a.call(e).done(t).fail(n) : e && M(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        function completed() {
            o.removeEventListener("DOMContentLoaded", completed), n.removeEventListener("load", completed), L.ready()
        }

        function fcamelCase(e, t) {
            return t.toUpperCase()
        }

        function camelCase(e) {
            return e.replace(F, "ms-").replace($, fcamelCase)
        }

        function Data() {
            this.expando = L.expando + Data.uid++
        }

        function getData(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : z.test(e) ? JSON.parse(e) : e)
        }

        function dataAttr(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(N, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = getData(n)
                } catch (e) {
                }
                R.set(e, t, n)
            } else n = void 0;
            return n
        }

        function adjustCSS(e, t, n, i) {
            var a, s, r = 20, o = i ? function () {
                    return i.cur()
                } : function () {
                    return L.css(e, t, "")
                }, l = o(), d = n && n[3] || (L.cssNumber[t] ? "" : "px"),
                u = (L.cssNumber[t] || "px" !== d && +l) && q.exec(L.css(e, t));
            if (u && u[3] !== d) {
                for (l /= 2, d = d || u[3], u = +l || 1; r--;) L.style(e, t, u + d), (1 - s) * (1 - (s = o() / l || .5)) <= 0 && (r = 0), u /= s;
                u *= 2, L.style(e, t, u + d), n = n || []
            }
            return n && (u = +u || +l || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = a)), a
        }

        function getDefaultDisplay(e) {
            var t, n = e.ownerDocument, i = e.nodeName, a = V[i];
            return a || (t = n.body.appendChild(n.createElement(i)), a = L.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), V[i] = a, a)
        }

        function showHide(e, t) {
            for (var n, i, a = [], s = 0, r = e.length; s < r; s++) i = e[s], i.style && (n = i.style.display, t ? ("none" === n && (a[s] = I.get(i, "display") || null, a[s] || (i.style.display = "")), "" === i.style.display && G(i) && (a[s] = getDefaultDisplay(i))) : "none" !== n && (a[s] = "none", I.set(i, "display", n)));
            for (s = 0; s < r; s++) null != a[s] && (e[s].style.display = a[s]);
            return e
        }

        function getAll(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && nodeName(e, t) ? L.merge([e], n) : n
        }

        function setGlobalEval(e, t) {
            for (var n = 0, i = e.length; n < i; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"))
        }

        function buildFragment(e, t, n, i, a) {
            for (var s, r, o, l, d, u, c = t.createDocumentFragment(), h = [], m = 0, p = e.length; m < p; m++) if ((s = e[m]) || 0 === s) if ("object" === toType(s)) L.merge(h, s.nodeType ? [s] : s); else if (ee.test(s)) {
                for (r = r || c.appendChild(t.createElement("div")), o = (K.exec(s) || ["", ""])[1].toLowerCase(), l = Q[o] || Q._default, r.innerHTML = l[1] + L.htmlPrefilter(s) + l[2], u = l[0]; u--;) r = r.lastChild;
                L.merge(h, r.childNodes), r = c.firstChild, r.textContent = ""
            } else h.push(t.createTextNode(s));
            for (c.textContent = "", m = 0; s = h[m++];) if (i && L.inArray(s, i) > -1) a && a.push(s); else if (d = L.contains(s.ownerDocument, s), r = getAll(c.appendChild(s), "script"), d && setGlobalEval(r), n) for (u = 0; s = r[u++];) X.test(s.type || "") && n.push(s);
            return c
        }

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return o.activeElement
            } catch (e) {
            }
        }

        function on(e, t, n, i, a, s) {
            var r, o;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (o in t) on(e, o, n, i, t[o], s);
                return e
            }
            if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), !1 === a) a = returnFalse; else if (!a) return e;
            return 1 === s && (r = a, a = function (e) {
                return L().off(e), r.apply(this, arguments)
            }, a.guid = r.guid || (r.guid = L.guid++)), e.each(function () {
                L.event.add(this, t, a, i, n)
            })
        }

        function manipulationTarget(e, t) {
            return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? L(e).children("tbody")[0] || e : e
        }

        function disableScript(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function restoreScript(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function cloneCopyEvent(e, t) {
            var n, i, a, s, r, o, l, d;
            if (1 === t.nodeType) {
                if (I.hasData(e) && (s = I.access(e), r = I.set(t, s), d = s.events)) {
                    delete r.handle, r.events = {};
                    for (a in d) for (n = 0, i = d[a].length; n < i; n++) L.event.add(t, a, d[a][n])
                }
                R.hasData(e) && (o = R.access(e), l = L.extend({}, o), R.set(t, l))
            }
        }

        function fixInput(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Z.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function domManip(e, t, n, i) {
            t = u.apply([], t);
            var a, s, r, o, l, d, c = 0, h = e.length, m = h - 1, p = t[0], f = M(p);
            if (f || h > 1 && "string" == typeof p && !g.checkClone && oe.test(p)) return e.each(function (a) {
                var s = e.eq(a);
                f && (t[0] = p.call(this, a, s.html())), domManip(s, t, n, i)
            });
            if (h && (a = buildFragment(t, e[0].ownerDocument, !1, e, i), s = a.firstChild, 1 === a.childNodes.length && (a = s), s || i)) {
                for (r = L.map(getAll(a, "script"), disableScript), o = r.length; c < h; c++) l = a, c !== m && (l = L.clone(l, !0, !0), o && L.merge(r, getAll(l, "script"))), n.call(e[c], l, c);
                if (o) for (d = r[r.length - 1].ownerDocument, L.map(r, restoreScript), c = 0; c < o; c++) l = r[c], X.test(l.type || "") && !I.access(l, "globalEval") && L.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? L._evalUrl && L._evalUrl(l.src) : DOMEval(l.textContent.replace(le, ""), d, l))
            }
            return e
        }

        function remove(e, t, n) {
            for (var i, a = t ? L.filter(t, e) : e, s = 0; null != (i = a[s]); s++) n || 1 !== i.nodeType || L.cleanData(getAll(i)), i.parentNode && (n && L.contains(i.ownerDocument, i) && setGlobalEval(getAll(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function curCSS(e, t, n) {
            var i, a, s, r, o = e.style;
            return n = n || ue(e), n && (r = n.getPropertyValue(t) || n[t], "" !== r || L.contains(e.ownerDocument, e) || (r = L.style(e, t)), !g.pixelBoxStyles() && de.test(r) && ce.test(t) && (i = o.width, a = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = a, o.maxWidth = s)), void 0 !== r ? r + "" : r
        }

        function addGetHookIf(e, t) {
            return {
                get: function () {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function vendorPropName(e) {
            if (e in ye) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;) if ((e = _e[n] + t) in ye) return e
        }

        function finalPropName(e) {
            var t = L.cssProps[e];
            return t || (t = L.cssProps[e] = vendorPropName(e) || e), t
        }

        function setPositiveNumber(e, t, n) {
            var i = q.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function boxModelAdjustment(e, t, n, i, a, s) {
            var r = "width" === t ? 1 : 0, o = 0, l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; r < 4; r += 2) "margin" === n && (l += L.css(e, n + B[r], !0, a)), i ? ("content" === n && (l -= L.css(e, "padding" + B[r], !0, a)), "margin" !== n && (l -= L.css(e, "border" + B[r] + "Width", !0, a))) : (l += L.css(e, "padding" + B[r], !0, a), "padding" !== n ? l += L.css(e, "border" + B[r] + "Width", !0, a) : o += L.css(e, "border" + B[r] + "Width", !0, a));
            return !i && s >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - o - .5))), l
        }

        function getWidthOrHeight(e, t, n) {
            var i = ue(e), a = curCSS(e, t, i), s = "border-box" === L.css(e, "boxSizing", !1, i), r = s;
            if (de.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return r = r && (g.boxSizingReliable() || a === e.style[t]), ("auto" === a || !parseFloat(a) && "inline" === L.css(e, "display", !1, i)) && (a = e["offset" + t[0].toUpperCase() + t.slice(1)], r = !0), (a = parseFloat(a) || 0) + boxModelAdjustment(e, t, n || (s ? "border" : "content"), r, i, a) + "px"
        }

        function Tween(e, t, n, i, a) {
            return new Tween.prototype.init(e, t, n, i, a)
        }

        function schedule() {
            Me && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(schedule) : n.setTimeout(schedule, L.fx.interval), L.fx.tick())
        }

        function createFxNow() {
            return n.setTimeout(function () {
                ge = void 0
            }), ge = Date.now()
        }

        function genFx(e, t) {
            var n, i = 0, a = {height: e};
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = B[i], a["margin" + n] = a["padding" + n] = e;
            return t && (a.opacity = a.width = e), a
        }

        function createTween(e, t, n) {
            for (var i, a = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), s = 0, r = a.length; s < r; s++) if (i = a[s].call(n, t, e)) return i
        }

        function defaultPrefilter(e, t, n) {
            var i, a, s, r, o, l, d, u, c = "width" in t || "height" in t, h = this, m = {}, p = e.style,
                f = e.nodeType && G(e), _ = I.get(e, "fxshow");
            n.queue || (r = L._queueHooks(e, "fx"), null == r.unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function () {
                r.unqueued || o()
            }), r.unqueued++, h.always(function () {
                h.always(function () {
                    r.unqueued--, L.queue(e, "fx").length || r.empty.fire()
                })
            }));
            for (i in t) if (a = t[i], ve.test(a)) {
                if (delete t[i], s = s || "toggle" === a, a === (f ? "hide" : "show")) {
                    if ("show" !== a || !_ || void 0 === _[i]) continue;
                    f = !0
                }
                m[i] = _ && _[i] || L.style(e, i)
            }
            if ((l = !L.isEmptyObject(t)) || !L.isEmptyObject(m)) {
                c && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], d = _ && _.display, null == d && (d = I.get(e, "display")), u = L.css(e, "display"), "none" === u && (d ? u = d : (showHide([e], !0), d = e.style.display || d, u = L.css(e, "display"), showHide([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === L.css(e, "float") && (l || (h.done(function () {
                    p.display = d
                }), null == d && (u = p.display, d = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for (i in m) l || (_ ? "hidden" in _ && (f = _.hidden) : _ = I.access(e, "fxshow", {display: d}), s && (_.hidden = !f), f && showHide([e], !0), h.done(function () {
                    f || showHide([e]), I.remove(e, "fxshow");
                    for (i in m) L.style(e, i, m[i])
                })), l = createTween(f ? _[i] : 0, i, h), i in _ || (_[i] = l.start, f && (l.end = l.start, l.start = 0))
            }
        }

        function propFilter(e, t) {
            var n, i, a, s, r;
            for (n in e) if (i = camelCase(n), a = t[i], s = e[n], Array.isArray(s) && (a = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = L.cssHooks[i]) && "expand" in r) {
                s = r.expand(s), delete e[i];
                for (n in s) n in e || (e[n] = s[n], t[n] = a)
            } else t[i] = a
        }

        function Animation(e, t, n) {
            var i, a, s = 0, r = Animation.prefilters.length, o = L.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (a) return !1;
                for (var t = ge || createFxNow(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, s = 1 - i, r = 0, l = d.tweens.length; r < l; r++) d.tweens[r].run(s);
                return o.notifyWith(e, [d, s, n]), s < 1 && l ? n : (l || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
            }, d = o.promise({
                elem: e,
                props: L.extend({}, t),
                opts: L.extend(!0, {specialEasing: {}, easing: L.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ge || createFxNow(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = L.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(i), i
                },
                stop: function (t) {
                    var n = 0, i = t ? d.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; n < i; n++) d.tweens[n].run(1);
                    return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
                }
            }), u = d.props;
            for (propFilter(u, d.opts.specialEasing); s < r; s++) if (i = Animation.prefilters[s].call(d, e, u, d.opts)) return M(i.stop) && (L._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
            return L.map(u, createTween, d), M(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), L.fx.timer(L.extend(l, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }

        function stripAndCollapse(e) {
            return (e.match(A) || []).join(" ")
        }

        function getClass(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function classesToArray(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.match(A) || [] : []
        }

        function buildParams(e, t, n, i) {
            var a;
            if (Array.isArray(t)) L.each(t, function (t, a) {
                n || je.test(e) ? i(e, a) : buildParams(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i)
            }); else if (n || "object" !== toType(t)) i(e, t); else for (a in t) buildParams(e + "[" + a + "]", t[a], n, i)
        }

        function addToPrefiltersOrTransports(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, a = 0, s = t.toLowerCase().match(A) || [];
                if (M(n)) for (; i = s[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function inspectPrefiltersOrTransports(e, t, n, i) {
            function inspect(r) {
                var o;
                return a[r] = !0, L.each(e[r] || [], function (e, r) {
                    var l = r(t, n, i);
                    return "string" != typeof l || s || a[l] ? s ? !(o = l) : void 0 : (t.dataTypes.unshift(l), inspect(l), !1)
                }), o
            }

            var a = {}, s = e === Ue;
            return inspect(t.dataTypes[0]) || !a["*"] && inspect("*")
        }

        function ajaxExtend(e, t) {
            var n, i, a = L.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
            return i && L.extend(!0, e, i), e
        }

        function ajaxHandleResponses(e, t, n) {
            for (var i, a, s, r, o = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i) for (a in o) if (o[a] && o[a].test(i)) {
                l.unshift(a);
                break
            }
            if (l[0] in n) s = l[0]; else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        s = a;
                        break
                    }
                    r || (r = a)
                }
                s = s || r
            }
            if (s) return s !== l[0] && l.unshift(s), n[s]
        }

        function ajaxConvert(e, t, n, i) {
            var a, s, r, o, l, d = {}, u = e.dataTypes.slice();
            if (u[1]) for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
            for (s = u.shift(); s;) if (e.responseFields[s] && (n[e.responseFields[s]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
                if (!(r = d[l + " " + s] || d["* " + s])) for (a in d) if (o = a.split(" "), o[1] === s && (r = d[l + " " + o[0]] || d["* " + o[0]])) {
                    !0 === r ? r = d[a] : !0 !== d[a] && (s = o[0], u.unshift(o[1]));
                    break
                }
                if (!0 !== r) if (r && e.throws) t = r(t); else try {
                    t = r(t)
                } catch (e) {
                    return {state: "parsererror", error: r ? e : "No conversion from " + l + " to " + s}
                }
            }
            return {state: "success", data: t}
        }

        var r = [], o = n.document, l = Object.getPrototypeOf, d = r.slice, u = r.concat, c = r.push, h = r.indexOf,
            m = {}, p = m.toString, f = m.hasOwnProperty, _ = f.toString, y = _.call(Object), g = {}, M = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, v = function (e) {
                return null != e && e === e.window
            }, k = {type: !0, src: !0, noModule: !0}, L = function (e, t) {
                return new L.fn.init(e, t)
            }, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        L.fn = L.prototype = {
            jquery: "3.3.1", constructor: L, length: 0, toArray: function () {
                return d.call(this)
            }, get: function (e) {
                return null == e ? d.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = L.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return L.each(this, e)
            }, map: function (e) {
                return this.pushStack(L.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(d.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: c, sort: r.sort, splice: r.splice
        }, L.extend = L.fn.extend = function () {
            var e, t, n, i, a, s, r = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
            for ("boolean" == typeof r && (d = r, r = arguments[o] || {}, o++), "object" == typeof r || M(r) || (r = {}), o === l && (r = this, o--); o < l; o++) if (null != (e = arguments[o])) for (t in e) n = r[t], i = e[t], r !== i && (d && i && (L.isPlainObject(i) || (a = Array.isArray(i))) ? (a ? (a = !1, s = n && Array.isArray(n) ? n : []) : s = n && L.isPlainObject(n) ? n : {}, r[t] = L.extend(d, s, i)) : void 0 !== i && (r[t] = i));
            return r
        }, L.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () {
            },
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = l(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && _.call(n) === y)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function (e) {
                DOMEval(e)
            },
            each: function (e, t) {
                var n, i = 0;
                if (isArrayLike(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(w, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (isArrayLike(Object(e)) ? L.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : h.call(t, e, n)
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, a = e.length; i < n; i++) e[a++] = t[i];
                return e.length = a, e
            },
            grep: function (e, t, n) {
                for (var i = [], a = 0, s = e.length, r = !n; a < s; a++) !t(e[a], a) !== r && i.push(e[a]);
                return i
            },
            map: function (e, t, n) {
                var i, a, s = 0, r = [];
                if (isArrayLike(e)) for (i = e.length; s < i; s++) null != (a = t(e[s], s, n)) && r.push(a); else for (s in e) null != (a = t(e[s], s, n)) && r.push(a);
                return u.apply([], r)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (L.fn[Symbol.iterator] = r[Symbol.iterator]), L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            m["[object " + t + "]"] = t.toLowerCase()
        });
        var Y = function (e) {
            function Sizzle(e, t, i, a) {
                var s, o, d, u, c, p, y, g = t && t.ownerDocument, L = t ? t.nodeType : 9;
                if (i = i || [], "string" != typeof e || !e || 1 !== L && 9 !== L && 11 !== L) return i;
                if (!a && ((t ? t.ownerDocument || t : k) !== m && h(t), t = t || m, f)) {
                    if (11 !== L && (c = K.exec(e))) if (s = c[1]) {
                        if (9 === L) {
                            if (!(d = t.getElementById(s))) return i;
                            if (d.id === s) return i.push(d), i
                        } else if (g && (d = g.getElementById(s)) && M(t, d) && d.id === s) return i.push(d), i
                    } else {
                        if (c[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                        if ((s = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(s)), i
                    }
                    if (n.qsa && !D[e + " "] && (!_ || !_.test(e))) {
                        if (1 !== L) g = t, y = e; else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = v), p = r(e), o = p.length; o--;) p[o] = "#" + u + " " + toSelector(p[o]);
                            y = p.join(","), g = X.test(e) && testContext(t.parentNode) || t
                        }
                        if (y) try {
                            return j.apply(i, g.querySelectorAll(y)), i
                        } catch (e) {
                        } finally {
                            u === v && t.removeAttribute("id")
                        }
                    }
                }
                return l(e.replace(R, "$1"), t, i, a)
            }

            function createCache() {
                function cache(t, n) {
                    return e.push(t + " ") > i.cacheLength && delete cache[e.shift()], cache[t + " "] = n
                }

                var e = [];
                return cache
            }

            function markFunction(e) {
                return e[v] = !0, e
            }

            function assert(e) {
                var t = m.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function addHandle(e, t) {
                for (var n = e.split("|"), a = n.length; a--;) i.attrHandle[n[a]] = t
            }

            function siblingCheck(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function createDisabledPseudo(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function createPositionalPseudo(e) {
                return markFunction(function (t) {
                    return t = +t, markFunction(function (n, i) {
                        for (var a, s = e([], n.length, t), r = s.length; r--;) n[a = s[r]] && (n[a] = !(i[a] = n[a]))
                    })
                })
            }

            function testContext(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            function setFilters() {
            }

            function toSelector(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function addCombinator(e, t, n) {
                var i = t.dir, a = t.next, s = a || i, r = n && "parentNode" === s, o = w++;
                return t.first ? function (t, n, a) {
                    for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, a);
                    return !1
                } : function (t, n, l) {
                    var d, u, c, h = [L, o];
                    if (l) {
                        for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, l)) return !0
                    } else for (; t = t[i];) if (1 === t.nodeType || r) if (c = t[v] || (t[v] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[i] || t; else {
                        if ((d = u[s]) && d[0] === L && d[1] === o) return h[2] = d[2];
                        if (u[s] = h, h[2] = e(t, n, l)) return !0
                    }
                    return !1
                }
            }

            function elementMatcher(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var a = e.length; a--;) if (!e[a](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function multipleContexts(e, t, n) {
                for (var i = 0, a = t.length; i < a; i++) Sizzle(e, t[i], n);
                return n
            }

            function condense(e, t, n, i, a) {
                for (var s, r = [], o = 0, l = e.length, d = null != t; o < l; o++) (s = e[o]) && (n && !n(s, i, a) || (r.push(s), d && t.push(o)));
                return r
            }

            function setMatcher(e, t, n, i, a, s) {
                return i && !i[v] && (i = setMatcher(i)), a && !a[v] && (a = setMatcher(a, s)), markFunction(function (s, r, o, l) {
                    var d, u, c, h = [], m = [], p = r.length,
                        f = s || multipleContexts(t || "*", o.nodeType ? [o] : o, []),
                        _ = !e || !s && t ? f : condense(f, h, e, o, l), y = n ? a || (s ? e : p || i) ? [] : r : _;
                    if (n && n(_, y, o, l), i) for (d = condense(y, m), i(d, [], o, l), u = d.length; u--;) (c = d[u]) && (y[m[u]] = !(_[m[u]] = c));
                    if (s) {
                        if (a || e) {
                            if (a) {
                                for (d = [], u = y.length; u--;) (c = y[u]) && d.push(_[u] = c);
                                a(null, y = [], d, l)
                            }
                            for (u = y.length; u--;) (c = y[u]) && (d = a ? P(s, c) : h[u]) > -1 && (s[d] = !(r[d] = c))
                        }
                    } else y = condense(y === r ? y.splice(p, y.length) : y), a ? a(null, r, y, l) : j.apply(r, y)
                })
            }

            function matcherFromTokens(e) {
                for (var t, n, a, s = e.length, r = i.relative[e[0].type], o = r || i.relative[" "], l = r ? 1 : 0, u = addCombinator(function (e) {
                    return e === t
                }, o, !0), c = addCombinator(function (e) {
                    return P(t, e) > -1
                }, o, !0), h = [function (e, n, i) {
                    var a = !r && (i || n !== d) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
                    return t = null, a
                }]; l < s; l++) if (n = i.relative[e[l].type]) h = [addCombinator(elementMatcher(h), n)]; else {
                    if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
                        for (a = ++l; a < s && !i.relative[e[a].type]; a++) ;
                        return setMatcher(l > 1 && elementMatcher(h), l > 1 && toSelector(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(R, "$1"), n, l < a && matcherFromTokens(e.slice(l, a)), a < s && matcherFromTokens(e = e.slice(a)), a < s && toSelector(e))
                    }
                    h.push(n)
                }
                return elementMatcher(h)
            }

            function matcherFromGroupMatchers(e, t) {
                var n = t.length > 0, a = e.length > 0, s = function (s, r, o, l, u) {
                    var c, p, _, y = 0, g = "0", M = s && [], v = [], k = d, w = s || a && i.find.TAG("*", u),
                        Y = L += null == k ? 1 : Math.random() || .1, T = w.length;
                    for (u && (d = r === m || r || u); g !== T && null != (c = w[g]); g++) {
                        if (a && c) {
                            for (p = 0, r || c.ownerDocument === m || (h(c), o = !f); _ = e[p++];) if (_(c, r || m, o)) {
                                l.push(c);
                                break
                            }
                            u && (L = Y)
                        }
                        n && ((c = !_ && c) && y--, s && M.push(c))
                    }
                    if (y += g, n && g !== y) {
                        for (p = 0; _ = t[p++];) _(M, v, r, o);
                        if (s) {
                            if (y > 0) for (; g--;) M[g] || v[g] || (v[g] = C.call(l));
                            v = condense(v)
                        }
                        j.apply(l, v), u && !s && v.length > 0 && y + t.length > 1 && Sizzle.uniqueSort(l)
                    }
                    return u && (L = Y, d = k), M
                };
                return n ? markFunction(s) : s
            }

            var t, n, i, a, s, r, o, l, d, u, c, h, m, p, f, _, y, g, M, v = "sizzle" + 1 * new Date, k = e.document,
                L = 0, w = 0, Y = createCache(), T = createCache(), D = createCache(), b = function (e, t) {
                    return e === t && (c = !0), 0
                }, S = {}.hasOwnProperty, x = [], C = x.pop, H = x.push, j = x.push, A = x.slice, P = function (e, t) {
                    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                    return -1
                },
                O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                E = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                $ = "\\[" + E + "*(" + F + ")(?:" + E + "*([*^$|!~]?=)" + E + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + E + "*\\]",
                W = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
                I = new RegExp(E + "+", "g"), R = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
                z = new RegExp("^" + E + "*," + E + "*"), N = new RegExp("^" + E + "*([>+~]|" + E + ")" + E + "*"),
                U = new RegExp("=" + E + "*([^\\]'\"]*?)" + E + "*\\]", "g"), q = new RegExp(W),
                B = new RegExp("^" + F + "$"), G = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F + "|[*])"),
                    ATTR: new RegExp("^" + $),
                    PSEUDO: new RegExp("^" + W),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + E + "*(even|odd|(([+-]|)(\\d*)n|)" + E + "*(?:([+-]|)" + E + "*(\\d+)|))" + E + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp("^" + E + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + E + "*((?:-\\d)?\\d*)" + E + "*\\)|)(?=[^-]|$)", "i")
                }, J = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
                K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /[+~]/,
                Q = new RegExp("\\\\([\\da-f]{1,6}" + E + "?|(" + E + ")|.)", "ig"), ee = function (e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, ie = function () {
                    h()
                }, ae = addCombinator(function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e)
                }, {dir: "parentNode", next: "legend"});
            try {
                j.apply(x = A.call(k.childNodes), k.childNodes), x[k.childNodes.length].nodeType
            } catch (e) {
                j = {
                    apply: x.length ? function (e, t) {
                        H.apply(e, A.call(t))
                    } : function (e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                        e.length = n - 1
                    }
                }
            }
            n = Sizzle.support = {}, s = Sizzle.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, h = Sizzle.setDocument = function (e) {
                var t, a, r = e ? e.ownerDocument || e : k;
                return r !== m && 9 === r.nodeType && r.documentElement ? (m = r, p = m.documentElement, f = !s(m), k !== m && (a = m.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ie, !1) : a.attachEvent && a.attachEvent("onunload", ie)), n.attributes = assert(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = assert(function (e) {
                    return e.appendChild(m.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Z.test(m.getElementsByClassName), n.getById = assert(function (e) {
                    return p.appendChild(e).id = v, !m.getElementsByName || !m.getElementsByName(v).length
                }), n.getById ? (i.filter.ID = function (e) {
                    var t = e.replace(Q, ee);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && f) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function (e) {
                    var t = e.replace(Q, ee);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && f) {
                        var n, i, a, s = t.getElementById(e);
                        if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
                            for (a = t.getElementsByName(e), i = 0; s = a[i++];) if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [], a = 0, s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = s[a++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e)
                }, y = [], _ = [], (n.qsa = Z.test(m.querySelectorAll)) && (assert(function (e) {
                    p.appendChild(e).innerHTML = "<a id='" + v + "'></a><select id='" + v + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + E + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || _.push("\\[" + E + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + v + "-]").length || _.push("~="), e.querySelectorAll(":checked").length || _.push(":checked"), e.querySelectorAll("a#" + v + "+*").length || _.push(".#.+[+~]")
                }), assert(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = m.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && _.push("name" + E + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), _.push(",.*:")
                })), (n.matchesSelector = Z.test(g = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && assert(function (e) {
                    n.disconnectedMatch = g.call(e, "*"), g.call(e, "[s!='']:x"), y.push("!=", W)
                }), _ = _.length && new RegExp(_.join("|")), y = y.length && new RegExp(y.join("|")), t = Z.test(p.compareDocumentPosition), M = t || Z.test(p.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, b = t ? function (e, t) {
                    if (e === t) return c = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === m || e.ownerDocument === k && M(k, e) ? -1 : t === m || t.ownerDocument === k && M(k, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & i ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return c = !0, 0;
                    var n, i = 0, a = e.parentNode, s = t.parentNode, r = [e], o = [t];
                    if (!a || !s) return e === m ? -1 : t === m ? 1 : a ? -1 : s ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (a === s) return siblingCheck(e, t);
                    for (n = e; n = n.parentNode;) r.unshift(n);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (; r[i] === o[i];) i++;
                    return i ? siblingCheck(r[i], o[i]) : r[i] === k ? -1 : o[i] === k ? 1 : 0
                }, m) : m
            }, Sizzle.matches = function (e, t) {
                return Sizzle(e, null, null, t)
            }, Sizzle.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== m && h(e), t = t.replace(U, "='$1']"), n.matchesSelector && f && !D[t + " "] && (!y || !y.test(t)) && (!_ || !_.test(t))) try {
                    var i = g.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                }
                return Sizzle(t, m, null, [e]).length > 0
            }, Sizzle.contains = function (e, t) {
                return (e.ownerDocument || e) !== m && h(e), M(e, t)
            }, Sizzle.attr = function (e, t) {
                (e.ownerDocument || e) !== m && h(e);
                var a = i.attrHandle[t.toLowerCase()],
                    s = a && S.call(i.attrHandle, t.toLowerCase()) ? a(e, t, !f) : void 0;
                return void 0 !== s ? s : n.attributes || !f ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, Sizzle.escape = function (e) {
                return (e + "").replace(te, ne)
            }, Sizzle.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, Sizzle.uniqueSort = function (e) {
                var t, i = [], a = 0, s = 0;
                if (c = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(b), c) {
                    for (; t = e[s++];) t === e[s] && (a = i.push(s));
                    for (; a--;) e.splice(i[a], 1)
                }
                return u = null, e
            }, a = Sizzle.getText = function (e) {
                var t, n = "", i = 0, s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else for (; t = e[i++];) n += a(t);
                return n
            }, i = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Q, ee).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = Y[e + " "];
                        return t || (t = new RegExp("(^|" + E + ")" + e + "(" + E + "|$)")) && Y(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    }, ATTR: function (e, t, n) {
                        return function (i) {
                            var a = Sizzle.attr(i, e);
                            return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(I, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (e, t, n, i, a) {
                        var s = "nth" !== e.slice(0, 3), r = "last" !== e.slice(-4), o = "of-type" === t;
                        return 1 === i && 0 === a ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var d, u, c, h, m, p, f = s !== r ? "nextSibling" : "previousSibling", _ = t.parentNode,
                                y = o && t.nodeName.toLowerCase(), g = !l && !o, M = !1;
                            if (_) {
                                if (s) {
                                    for (; f;) {
                                        for (h = t; h = h[f];) if (o ? h.nodeName.toLowerCase() === y : 1 === h.nodeType) return !1;
                                        p = f = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [r ? _.firstChild : _.lastChild], r && g) {
                                    for (h = _, c = h[v] || (h[v] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), d = u[e] || [], m = d[0] === L && d[1], M = m && d[2], h = m && _.childNodes[m]; h = ++m && h && h[f] || (M = m = 0) || p.pop();) if (1 === h.nodeType && ++M && h === t) {
                                        u[e] = [L, m, M];
                                        break
                                    }
                                } else if (g && (h = t, c = h[v] || (h[v] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), d = u[e] || [], m = d[0] === L && d[1], M = m), !1 === M) for (; (h = ++m && h && h[f] || (M = m = 0) || p.pop()) && ((o ? h.nodeName.toLowerCase() !== y : 1 !== h.nodeType) || !++M || (g && (c = h[v] || (h[v] = {}), u = c[h.uniqueID] || (c[h.uniqueID] = {}), u[e] = [L, M]), h !== t));) ;
                                return (M -= a) === i || M % i == 0 && M / i >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n,
                            a = i.pseudos[e] || i.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                        return a[v] ? a(t) : a.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction(function (e, n) {
                            for (var i, s = a(e, t), r = s.length; r--;) i = P(e, s[r]), e[i] = !(n[i] = s[r])
                        }) : function (e) {
                            return a(e, 0, n)
                        }) : a
                    }
                },
                pseudos: {
                    not: markFunction(function (e) {
                        var t = [], n = [], i = o(e.replace(R, "$1"));
                        return i[v] ? markFunction(function (e, t, n, a) {
                            for (var s, r = i(e, null, a, []), o = e.length; o--;) (s = r[o]) && (e[o] = !(t[o] = s))
                        }) : function (e, a, s) {
                            return t[0] = e, i(t, null, s, n), t[0] = null, !n.pop()
                        }
                    }), has: markFunction(function (e) {
                        return function (t) {
                            return Sizzle(e, t).length > 0
                        }
                    }), contains: markFunction(function (e) {
                        return e = e.replace(Q, ee), function (t) {
                            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }), lang: markFunction(function (e) {
                        return B.test(e || "") || Sizzle.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === p
                    }, focus: function (e) {
                        return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: createDisabledPseudo(!1), disabled: createDisabledPseudo(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !i.pseudos.empty(e)
                    }, header: function (e) {
                        return V.test(e.nodeName)
                    }, input: function (e) {
                        return J.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: createPositionalPseudo(function () {
                        return [0]
                    }), last: createPositionalPseudo(function (e, t) {
                        return [t - 1]
                    }), eq: createPositionalPseudo(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: createPositionalPseudo(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }), odd: createPositionalPseudo(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }), lt: createPositionalPseudo(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }), gt: createPositionalPseudo(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, i.pseudos.nth = i.pseudos.eq;
            for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) i.pseudos[t] = function (e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(t);
            for (t in{submit: !0, reset: !0}) i.pseudos[t] = function (e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(t);
            return setFilters.prototype = i.filters = i.pseudos, i.setFilters = new setFilters, r = Sizzle.tokenize = function (e, t) {
                var n, a, s, r, o, l, d, u = T[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (o = e, l = [], d = i.preFilter; o;) {
                    n && !(a = z.exec(o)) || (a && (o = o.slice(a[0].length) || o), l.push(s = [])), n = !1, (a = N.exec(o)) && (n = a.shift(), s.push({
                        value: n,
                        type: a[0].replace(R, " ")
                    }), o = o.slice(n.length));
                    for (r in i.filter) !(a = G[r].exec(o)) || d[r] && !(a = d[r](a)) || (n = a.shift(), s.push({
                        value: n,
                        type: r,
                        matches: a
                    }), o = o.slice(n.length));
                    if (!n) break
                }
                return t ? o.length : o ? Sizzle.error(e) : T(e, l).slice(0)
            }, o = Sizzle.compile = function (e, t) {
                var n, i = [], a = [], s = D[e + " "];
                if (!s) {
                    for (t || (t = r(e)), n = t.length; n--;) s = matcherFromTokens(t[n]), s[v] ? i.push(s) : a.push(s);
                    s = D(e, matcherFromGroupMatchers(a, i)), s.selector = e
                }
                return s
            }, l = Sizzle.select = function (e, t, n, a) {
                var s, l, d, u, c, h = "function" == typeof e && e, m = !a && r(e = h.selector || e);
                if (n = n || [], 1 === m.length) {
                    if (l = m[0] = m[0].slice(0), l.length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && f && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(d.matches[0].replace(Q, ee), t) || [])[0])) return n;
                        h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                    }
                    for (s = G.needsContext.test(e) ? 0 : l.length; s-- && (d = l[s], !i.relative[u = d.type]);) if ((c = i.find[u]) && (a = c(d.matches[0].replace(Q, ee), X.test(l[0].type) && testContext(t.parentNode) || t))) {
                        if (l.splice(s, 1), !(e = a.length && toSelector(l))) return j.apply(n, a), n;
                        break
                    }
                }
                return (h || o(e, m))(a, t, !f, n, !t || X.test(e) && testContext(t.parentNode) || t), n
            }, n.sortStable = v.split("").sort(b).join("") === v, n.detectDuplicates = !!c, h(), n.sortDetached = assert(function (e) {
                return 1 & e.compareDocumentPosition(m.createElement("fieldset"))
            }), assert(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || addHandle("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && assert(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || addHandle("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), assert(function (e) {
                return null == e.getAttribute("disabled")
            }) || addHandle(O, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), Sizzle
        }(n);
        L.find = Y, L.expr = Y.selectors, L.expr[":"] = L.expr.pseudos, L.uniqueSort = L.unique = Y.uniqueSort, L.text = Y.getText, L.isXMLDoc = Y.isXML, L.contains = Y.contains, L.escapeSelector = Y.escape;
        var T = function (e, t, n) {
            for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (a && L(e).is(n)) break;
                i.push(e)
            }
            return i
        }, D = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, b = L.expr.match.needsContext, S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        L.filter = function (e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? L.find.matchesSelector(i, e) ? [i] : [] : L.find.matches(e, L.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, L.fn.extend({
            find: function (e) {
                var t, n, i = this.length, a = this;
                if ("string" != typeof e) return this.pushStack(L(e).filter(function () {
                    for (t = 0; t < i; t++) if (L.contains(a[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) L.find(e, a[t], n);
                return i > 1 ? L.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(winnow(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(winnow(this, e || [], !0))
            }, is: function (e) {
                return !!winnow(this, "string" == typeof e && b.test(e) ? L(e) : e || [], !1).length
            }
        });
        var x, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (L.fn.init = function (e, t, n) {
            var i, a;
            if (!e) return this;
            if (n = n || x, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : C.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof L ? t[0] : t, L.merge(this, L.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), S.test(i[1]) && L.isPlainObject(t)) for (i in t) M(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return a = o.getElementById(i[2]), a && (this[0] = a, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : M(e) ? void 0 !== n.ready ? n.ready(e) : e(L) : L.makeArray(e, this)
        }).prototype = L.fn, x = L(o);
        var H = /^(?:parents|prev(?:Until|All))/, j = {children: !0, contents: !0, next: !0, prev: !0};
        L.fn.extend({
            has: function (e) {
                var t = L(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++) if (L.contains(this, t[e])) return !0
                })
            }, closest: function (e, t) {
                var n, i = 0, a = this.length, s = [], r = "string" != typeof e && L(e);
                if (!b.test(e)) for (; i < a; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && L.find.matchesSelector(n, e))) {
                    s.push(n);
                    break
                }
                return this.pushStack(s.length > 1 ? L.uniqueSort(s) : s)
            }, index: function (e) {
                return e ? "string" == typeof e ? h.call(L(e), this[0]) : h.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(L.uniqueSort(L.merge(this.get(), L(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), L.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return T(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return T(e, "parentNode", n)
            }, next: function (e) {
                return sibling(e, "nextSibling")
            }, prev: function (e) {
                return sibling(e, "previousSibling")
            }, nextAll: function (e) {
                return T(e, "nextSibling")
            }, prevAll: function (e) {
                return T(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return T(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return T(e, "previousSibling", n)
            }, siblings: function (e) {
                return D((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return D(e.firstChild)
            }, contents: function (e) {
                return nodeName(e, "iframe") ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e), L.merge([], e.childNodes))
            }
        }, function (e, t) {
            L.fn[e] = function (n, i) {
                var a = L.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = L.filter(i, a)), this.length > 1 && (j[e] || L.uniqueSort(a), H.test(e) && a.reverse()), this.pushStack(a)
            }
        });
        var A = /[^\x20\t\r\n\f]+/g;
        L.Callbacks = function (e) {
            e = "string" == typeof e ? createOptions(e) : L.extend({}, e);
            var t, n, i, a, s = [], r = [], o = -1, l = function () {
                for (a = a || e.once, i = t = !0; r.length; o = -1) for (n = r.shift(); ++o < s.length;) !1 === s[o].apply(n[0], n[1]) && e.stopOnFalse && (o = s.length, n = !1);
                e.memory || (n = !1), t = !1, a && (s = n ? [] : "")
            }, d = {
                add: function () {
                    return s && (n && !t && (o = s.length - 1, r.push(n)), function add(t) {
                        L.each(t, function (t, n) {
                            M(n) ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== toType(n) && add(n)
                        })
                    }(arguments), n && !t && l()), this
                }, remove: function () {
                    return L.each(arguments, function (e, t) {
                        for (var n; (n = L.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= o && o--
                    }), this
                }, has: function (e) {
                    return e ? L.inArray(e, s) > -1 : s.length > 0
                }, empty: function () {
                    return s && (s = []), this
                }, disable: function () {
                    return a = r = [], s = n = "", this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return a = r = [], n || t || (s = n = ""), this
                }, locked: function () {
                    return !!a
                }, fireWith: function (e, n) {
                    return a || (n = n || [], n = [e, n.slice ? n.slice() : n], r.push(n), t || l()), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return d
        }, L.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", L.Callbacks("memory"), L.Callbacks("memory"), 2], ["resolve", "done", L.Callbacks("once memory"), L.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", L.Callbacks("once memory"), L.Callbacks("once memory"), 1, "rejected"]],
                    i = "pending", a = {
                        state: function () {
                            return i
                        }, always: function () {
                            return s.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return a.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return L.Deferred(function (n) {
                                L.each(t, function (t, i) {
                                    var a = M(e[i[4]]) && e[i[4]];
                                    s[i[1]](function () {
                                        var e = a && a.apply(this, arguments);
                                        e && M(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, then: function (e, i, a) {
                            function resolve(e, t, i, a) {
                                return function () {
                                    var r = this, o = arguments, l = function () {
                                        var n, l;
                                        if (!(e < s)) {
                                            if ((n = i.apply(r, o)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            l = n && ("object" == typeof n || "function" == typeof n) && n.then, M(l) ? a ? l.call(n, resolve(s, t, Identity, a), resolve(s, t, Thrower, a)) : (s++, l.call(n, resolve(s, t, Identity, a), resolve(s, t, Thrower, a), resolve(s, t, Identity, t.notifyWith))) : (i !== Identity && (r = void 0, o = [n]), (a || t.resolveWith)(r, o))
                                        }
                                    }, d = a ? l : function () {
                                        try {
                                            l()
                                        } catch (n) {
                                            L.Deferred.exceptionHook && L.Deferred.exceptionHook(n, d.stackTrace), e + 1 >= s && (i !== Thrower && (r = void 0, o = [n]), t.rejectWith(r, o))
                                        }
                                    };
                                    e ? d() : (L.Deferred.getStackHook && (d.stackTrace = L.Deferred.getStackHook()), n.setTimeout(d))
                                }
                            }

                            var s = 0;
                            return L.Deferred(function (n) {
                                t[0][3].add(resolve(0, n, M(a) ? a : Identity, n.notifyWith)), t[1][3].add(resolve(0, n, M(e) ? e : Identity)), t[2][3].add(resolve(0, n, M(i) ? i : Thrower))
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? L.extend(e, a) : a
                        }
                    }, s = {};
                return L.each(t, function (e, n) {
                    var r = n[2], o = n[5];
                    a[n[1]] = r.add, o && r.add(function () {
                        i = o
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), r.add(n[3].fire), s[n[0]] = function () {
                        return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[n[0] + "With"] = r.fireWith
                }), a.promise(s), e && e.call(s, s), s
            }, when: function (e) {
                var t = arguments.length, n = t, i = Array(n), a = d.call(arguments), s = L.Deferred(),
                    r = function (e) {
                        return function (n) {
                            i[e] = this, a[e] = arguments.length > 1 ? d.call(arguments) : n, --t || s.resolveWith(i, a)
                        }
                    };
                if (t <= 1 && (adoptValue(e, s.done(r(n)).resolve, s.reject, !t), "pending" === s.state() || M(a[n] && a[n].then))) return s.then();
                for (; n--;) adoptValue(a[n], r(n), s.reject);
                return s.promise()
            }
        });
        var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        L.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && P.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, L.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var O = L.Deferred();
        L.fn.ready = function (e) {
            return O.then(e).catch(function (e) {
                L.readyException(e)
            }), this
        }, L.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --L.readyWait : L.isReady) || (L.isReady = !0, !0 !== e && --L.readyWait > 0 || O.resolveWith(o, [L]))
            }
        }), L.ready.then = O.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(L.ready) : (o.addEventListener("DOMContentLoaded", completed), n.addEventListener("load", completed));
        var E = function (e, t, n, i, a, s, r) {
            var o = 0, l = e.length, d = null == n;
            if ("object" === toType(n)) {
                a = !0;
                for (o in n) E(e, t, o, n[o], !0, s, r)
            } else if (void 0 !== i && (a = !0, M(i) || (r = !0), d && (r ? (t.call(e, i), t = null) : (d = t, t = function (e, t, n) {
                    return d.call(L(e), n)
                })), t)) for (; o < l; o++) t(e[o], n, r ? i : i.call(e[o], o, t(e[o], n)));
            return a ? e : d ? t.call(e) : l ? t(e[0], n) : s
        }, F = /^-ms-/, $ = /-([a-z])/g, W = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        Data.uid = 1, Data.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, W(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var i, a = this.cache(e);
                if ("string" == typeof t) a[camelCase(t)] = n; else for (i in t) a[camelCase(i)] = t[i];
                return a
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][camelCase(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(camelCase) : (t = camelCase(t), t = t in i ? [t] : t.match(A) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }
                    (void 0 === t || L.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !L.isEmptyObject(t)
            }
        };
        var I = new Data, R = new Data, z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /[A-Z]/g;
        L.extend({
            hasData: function (e) {
                return R.hasData(e) || I.hasData(e)
            }, data: function (e, t, n) {
                return R.access(e, t, n)
            }, removeData: function (e, t) {
                R.remove(e, t)
            }, _data: function (e, t, n) {
                return I.access(e, t, n)
            }, _removeData: function (e, t) {
                I.remove(e, t)
            }
        }), L.fn.extend({
            data: function (e, t) {
                var n, i, a, s = this[0], r = s && s.attributes;
                if (void 0 === e) {
                    if (this.length && (a = R.get(s), 1 === s.nodeType && !I.get(s, "hasDataAttrs"))) {
                        for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = camelCase(i.slice(5)), dataAttr(s, i, a[i])));
                        I.set(s, "hasDataAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof e ? this.each(function () {
                    R.set(this, e)
                }) : E(this, function (t) {
                    var n;
                    if (s && void 0 === t) {
                        if (void 0 !== (n = R.get(s, e))) return n;
                        if (void 0 !== (n = dataAttr(s, e))) return n
                    } else this.each(function () {
                        R.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    R.remove(this, e)
                })
            }
        }), L.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = I.get(e, t), n && (!i || Array.isArray(n) ? i = I.access(e, t, L.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = L.queue(e, t), i = n.length, a = n.shift(), s = L._queueHooks(e, t), r = function () {
                    L.dequeue(e, t)
                };
                "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete s.stop, a.call(e, r, s)), !i && s && s.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return I.get(e, n) || I.access(e, n, {
                    empty: L.Callbacks("once memory").add(function () {
                        I.remove(e, [t + "queue", n])
                    })
                })
            }
        }), L.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? L.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = L.queue(this, e, t);
                    L._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && L.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    L.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, i = 1, a = L.Deferred(), s = this, r = this.length, o = function () {
                    --i || a.resolveWith(s, [s])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) (n = I.get(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
                return o(), a.promise(t)
            }
        });
        var U = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, q = new RegExp("^(?:([+-])=|)(" + U + ")([a-z%]*)$", "i"),
            B = ["Top", "Right", "Bottom", "Left"], G = function (e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && L.contains(e.ownerDocument, e) && "none" === L.css(e, "display")
            }, J = function (e, t, n, i) {
                var a, s, r = {};
                for (s in t) r[s] = e.style[s], e.style[s] = t[s];
                a = n.apply(e, i || []);
                for (s in t) e.style[s] = r[s];
                return a
            }, V = {};
        L.fn.extend({
            show: function () {
                return showHide(this, !0)
            }, hide: function () {
                return showHide(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    G(this) ? L(this).show() : L(this).hide()
                })
            }
        });
        var Z = /^(?:checkbox|radio)$/i, K = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, X = /^$|^module$|\/(?:java|ecma)script/i,
            Q = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Q.optgroup = Q.option, Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead, Q.th = Q.td;
        var ee = /<|&#?\w+;/;
        !function () {
            var e = o.createDocumentFragment(), t = e.appendChild(o.createElement("div")), n = o.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), g.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var te = o.documentElement, ne = /^key/, ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ae = /^([^.]*)(?:\.(.+)|)/;
        L.event = {
            global: {}, add: function (e, t, n, i, a) {
                var s, r, o, l, d, u, c, h, m, p, f, _ = I.get(e);
                if (_) for (n.handler && (s = n, n = s.handler, a = s.selector), a && L.find.matchesSelector(te, a), n.guid || (n.guid = L.guid++), (l = _.events) || (l = _.events = {}), (r = _.handle) || (r = _.handle = function (t) {
                    return void 0 !== L && L.event.triggered !== t.type ? L.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(A) || [""], d = t.length; d--;) o = ae.exec(t[d]) || [], m = f = o[1], p = (o[2] || "").split(".").sort(), m && (c = L.event.special[m] || {}, m = (a ? c.delegateType : c.bindType) || m, c = L.event.special[m] || {}, u = L.extend({
                    type: m,
                    origType: f,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: a,
                    needsContext: a && L.expr.match.needsContext.test(a),
                    namespace: p.join(".")
                }, s), (h = l[m]) || (h = l[m] = [], h.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, p, r) || e.addEventListener && e.addEventListener(m, r)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? h.splice(h.delegateCount++, 0, u) : h.push(u), L.event.global[m] = !0)
            }, remove: function (e, t, n, i, a) {
                var s, r, o, l, d, u, c, h, m, p, f, _ = I.hasData(e) && I.get(e);
                if (_ && (l = _.events)) {
                    for (t = (t || "").match(A) || [""], d = t.length; d--;) if (o = ae.exec(t[d]) || [], m = f = o[1], p = (o[2] || "").split(".").sort(), m) {
                        for (c = L.event.special[m] || {}, m = (i ? c.delegateType : c.bindType) || m, h = l[m] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) u = h[s], !a && f !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
                        r && !h.length && (c.teardown && !1 !== c.teardown.call(e, p, _.handle) || L.removeEvent(e, m, _.handle), delete l[m])
                    } else for (m in l) L.event.remove(e, m + t[d], n, i, !0);
                    L.isEmptyObject(l) && I.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, i, a, s, r, o = L.event.fix(e), l = new Array(arguments.length),
                    d = (I.get(this, "events") || {})[o.type] || [], u = L.event.special[o.type] || {};
                for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                    for (r = L.event.handlers.call(this, o, d), t = 0; (a = r[t++]) && !o.isPropagationStopped();) for (o.currentTarget = a.elem, n = 0; (s = a.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(s.namespace) || (o.handleObj = s, o.data = s.data, void 0 !== (i = ((L.event.special[s.origType] || {}).handle || s.handler).apply(a.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, o), o.result
                }
            }, handlers: function (e, t) {
                var n, i, a, s, r, o = [], l = t.delegateCount, d = e.target;
                if (l && d.nodeType && !("click" === e.type && e.button >= 1)) for (; d !== this; d = d.parentNode || this) if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                    for (s = [], r = {}, n = 0; n < l; n++) i = t[n], a = i.selector + " ", void 0 === r[a] && (r[a] = i.needsContext ? L(a, this).index(d) > -1 : L.find(a, this, null, [d]).length), r[a] && s.push(i);
                    s.length && o.push({elem: d, handlers: s})
                }
                return d = this, l < t.length && o.push({elem: d, handlers: t.slice(l)}), o
            }, addProp: function (e, t) {
                Object.defineProperty(L.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: M(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[L.expando] ? e : new L.Event(e)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== safeActiveElement() && this.focus) return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === safeActiveElement() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && nodeName(this, "input")) return this.click(), !1
                    }, _default: function (e) {
                        return nodeName(e.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, L.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, L.Event = function (e, t) {
            if (!(this instanceof L.Event)) return new L.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && L.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[L.expando] = !0
        }, L.Event.prototype = {
            constructor: L.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, L.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && ne.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ie.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, L.event.addProp), L.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            L.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, i = this, a = e.relatedTarget, s = e.handleObj;
                    return a && (a === i || L.contains(i, a)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), L.fn.extend({
            on: function (e, t, n, i) {
                return on(this, e, t, n, i)
            }, one: function (e, t, n, i) {
                return on(this, e, t, n, i, 1)
            }, off: function (e, t, n) {
                var i, a;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, L(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, t, e[a]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = returnFalse), this.each(function () {
                    L.event.remove(this, e, n, t)
                })
            }
        });
        var se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            re = /<script|<style|<link/i, oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        L.extend({
            htmlPrefilter: function (e) {
                return e.replace(se, "<$1></$2>")
            }, clone: function (e, t, n) {
                var i, a, s, r, o = e.cloneNode(!0), l = L.contains(e.ownerDocument, e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || L.isXMLDoc(e))) for (r = getAll(o), s = getAll(e), i = 0, a = s.length; i < a; i++) fixInput(s[i], r[i]);
                if (t) if (n) for (s = s || getAll(e), r = r || getAll(o), i = 0, a = s.length; i < a; i++) cloneCopyEvent(s[i], r[i]); else cloneCopyEvent(e, o);
                return r = getAll(o, "script"), r.length > 0 && setGlobalEval(r, !l && getAll(e, "script")), o
            }, cleanData: function (e) {
                for (var t, n, i, a = L.event.special, s = 0; void 0 !== (n = e[s]); s++) if (W(n)) {
                    if (t = n[I.expando]) {
                        if (t.events) for (i in t.events) a[i] ? L.event.remove(n, i) : L.removeEvent(n, i, t.handle);
                        n[I.expando] = void 0
                    }
                    n[R.expando] && (n[R.expando] = void 0)
                }
            }
        }), L.fn.extend({
            detach: function (e) {
                return remove(this, e, !0)
            }, remove: function (e) {
                return remove(this, e)
            }, text: function (e) {
                return E(this, function (e) {
                    return void 0 === e ? L.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return domManip(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        manipulationTarget(this, e).appendChild(e)
                    }
                })
            }, prepend: function () {
                return domManip(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = manipulationTarget(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return domManip(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return domManip(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (L.cleanData(getAll(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return L.clone(this, e, t)
                })
            }, html: function (e) {
                return E(this, function (e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !re.test(e) && !Q[(K.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = L.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (L.cleanData(getAll(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return domManip(this, arguments, function (t) {
                    var n = this.parentNode;
                    L.inArray(this, e) < 0 && (L.cleanData(getAll(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), L.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            L.fn[e] = function (e) {
                for (var n, i = [], a = L(e), s = a.length - 1, r = 0; r <= s; r++) n = r === s ? this : this.clone(!0), L(a[r])[t](n), c.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var de = new RegExp("^(" + U + ")(?!px)[a-z%]+$", "i"), ue = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, ce = new RegExp(B.join("|"), "i");
        !function () {
            function computeStyleTests() {
                if (l) {
                    r.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", te.appendChild(r).appendChild(l);
                    var o = n.getComputedStyle(l);
                    e = "1%" !== o.top, s = 12 === roundPixelMeasures(o.marginLeft), l.style.right = "60%", a = 36 === roundPixelMeasures(o.right), t = 36 === roundPixelMeasures(o.width), l.style.position = "absolute", i = 36 === l.offsetWidth || "absolute", te.removeChild(r), l = null
                }
            }

            function roundPixelMeasures(e) {
                return Math.round(parseFloat(e))
            }

            var e, t, i, a, s, r = o.createElement("div"), l = o.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === l.style.backgroundClip, L.extend(g, {
                boxSizingReliable: function () {
                    return computeStyleTests(), t
                }, pixelBoxStyles: function () {
                    return computeStyleTests(), a
                }, pixelPosition: function () {
                    return computeStyleTests(), e
                }, reliableMarginLeft: function () {
                    return computeStyleTests(), s
                }, scrollboxSize: function () {
                    return computeStyleTests(), i
                }
            }))
        }();
        var he = /^(none|table(?!-c[ea]).+)/, me = /^--/,
            pe = {position: "absolute", visibility: "hidden", display: "block"},
            fe = {letterSpacing: "0", fontWeight: "400"}, _e = ["Webkit", "Moz", "ms"],
            ye = o.createElement("div").style;
        L.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = curCSS(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var a, s, r, o = camelCase(t), l = me.test(t), d = e.style;
                    if (l || (t = finalPropName(o)), r = L.cssHooks[t] || L.cssHooks[o], void 0 === n) return r && "get" in r && void 0 !== (a = r.get(e, !1, i)) ? a : d[t];
                    s = typeof n, "string" === s && (a = q.exec(n)) && a[1] && (n = adjustCSS(e, t, a), s = "number"), null != n && n === n && ("number" === s && (n += a && a[3] || (L.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var a, s, r, o = camelCase(t);
                return me.test(t) || (t = finalPropName(o)), r = L.cssHooks[t] || L.cssHooks[o], r && "get" in r && (a = r.get(e, !0, n)), void 0 === a && (a = curCSS(e, t, i)), "normal" === a && t in fe && (a = fe[t]), "" === n || n ? (s = parseFloat(a), !0 === n || isFinite(s) ? s || 0 : a) : a
            }
        }), L.each(["height", "width"], function (e, t) {
            L.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n) return !he.test(L.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, i) : J(e, pe, function () {
                        return getWidthOrHeight(e, t, i)
                    })
                }, set: function (e, n, i) {
                    var a, s = ue(e), r = "border-box" === L.css(e, "boxSizing", !1, s),
                        o = i && boxModelAdjustment(e, t, i, r, s);
                    return r && g.scrollboxSize() === s.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - boxModelAdjustment(e, t, "border", !1, s) - .5)), o && (a = q.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = L.css(e, t)), setPositiveNumber(e, n, o)
                }
            }
        }), L.cssHooks.marginLeft = addGetHookIf(g.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - J(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), L.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            L.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, a = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) a[e + B[i] + t] = s[i] || s[i - 2] || s[0];
                    return a
                }
            }, "margin" !== e && (L.cssHooks[e + t].set = setPositiveNumber)
        }), L.fn.extend({
            css: function (e, t) {
                return E(this, function (e, t, n) {
                    var i, a, s = {}, r = 0;
                    if (Array.isArray(t)) {
                        for (i = ue(e), a = t.length; r < a; r++) s[t[r]] = L.css(e, t[r], !1, i);
                        return s
                    }
                    return void 0 !== n ? L.style(e, t, n) : L.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), L.Tween = Tween, Tween.prototype = {
            constructor: Tween, init: function (e, t, n, i, a, s) {
                this.elem = e, this.prop = n, this.easing = a || L.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (L.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = Tween.propHooks[this.prop];
                return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = Tween.propHooks[this.prop];
                return this.options.duration ? this.pos = t = L.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
            }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = L.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                }, set: function (e) {
                    L.fx.step[e.prop] ? L.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[L.cssProps[e.prop]] && !L.cssHooks[e.prop] ? e.elem[e.prop] = e.now : L.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, L.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, L.fx = Tween.prototype.init, L.fx.step = {};
        var ge, Me, ve = /^(?:toggle|show|hide)$/, ke = /queueHooks$/;
        L.Animation = L.extend(Animation, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return adjustCSS(n.elem, e, q.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                M(e) ? (t = e, e = ["*"]) : e = e.match(A);
                for (var n, i = 0, a = e.length; i < a; i++) n = e[i], Animation.tweeners[n] = Animation.tweeners[n] || [], Animation.tweeners[n].unshift(t)
            }, prefilters: [defaultPrefilter], prefilter: function (e, t) {
                t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
            }
        }), L.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? L.extend({}, e) : {
                complete: n || !n && t || M(e) && e,
                duration: e,
                easing: n && t || t && !M(t) && t
            };
            return L.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in L.fx.speeds ? i.duration = L.fx.speeds[i.duration] : i.duration = L.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                M(i.old) && i.old.call(this), i.queue && L.dequeue(this, i.queue)
            }, i
        }, L.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(G).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
            }, animate: function (e, t, n, i) {
                var a = L.isEmptyObject(e), s = L.speed(t, n, i), r = function () {
                    var t = Animation(this, L.extend({}, e), s);
                    (a || I.get(this, "finish")) && t.stop(!0)
                };
                return r.finish = r, a || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            }, stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, a = null != e && e + "queueHooks", s = L.timers, r = I.get(this);
                    if (a) r[a] && r[a].stop && i(r[a]); else for (a in r) r[a] && r[a].stop && ke.test(a) && i(r[a]);
                    for (a = s.length; a--;) s[a].elem !== this || null != e && s[a].queue !== e || (s[a].anim.stop(n), t = !1, s.splice(a, 1));
                    !t && n || L.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = I.get(this), i = n[e + "queue"], a = n[e + "queueHooks"], s = L.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, L.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), L.each(["toggle", "show", "hide"], function (e, t) {
            var n = L.fn[t];
            L.fn[t] = function (e, i, a) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, i, a)
            }
        }), L.each({
            slideDown: genFx("show"),
            slideUp: genFx("hide"),
            slideToggle: genFx("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            L.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), L.timers = [], L.fx.tick = function () {
            var e, t = 0, n = L.timers;
            for (ge = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || L.fx.stop(), ge = void 0
        }, L.fx.timer = function (e) {
            L.timers.push(e), L.fx.start()
        }, L.fx.interval = 13, L.fx.start = function () {
            Me || (Me = !0, schedule())
        }, L.fx.stop = function () {
            Me = null
        }, L.fx.speeds = {slow: 600, fast: 200, _default: 400}, L.fn.delay = function (e, t) {
            return e = L.fx ? L.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var a = n.setTimeout(t, e);
                i.stop = function () {
                    n.clearTimeout(a)
                }
            })
        }, function () {
            var e = o.createElement("input"), t = o.createElement("select"),
                n = t.appendChild(o.createElement("option"));
            e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = n.selected, e = o.createElement("input"), e.value = "t", e.type = "radio", g.radioValue = "t" === e.value
        }();
        var Le, we = L.expr.attrHandle;
        L.fn.extend({
            attr: function (e, t) {
                return E(this, L.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    L.removeAttr(this, e)
                })
            }
        }), L.extend({
            attr: function (e, t, n) {
                var i, a, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? L.prop(e, t, n) : (1 === s && L.isXMLDoc(e) || (a = L.attrHooks[t.toLowerCase()] || (L.expr.match.bool.test(t) ? Le : void 0)), void 0 !== n ? null === n ? void L.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : (i = L.find.attr(e, t), null == i ? void 0 : i))
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!g.radioValue && "radio" === t && nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, i = 0, a = t && t.match(A);
                if (a && 1 === e.nodeType) for (; n = a[i++];) e.removeAttribute(n)
            }
        }), Le = {
            set: function (e, t, n) {
                return !1 === t ? L.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, L.each(L.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = we[t] || L.find.attr;
            we[t] = function (e, t, i) {
                var a, s, r = t.toLowerCase();
                return i || (s = we[r], we[r] = a, a = null != n(e, t, i) ? r : null, we[r] = s), a
            }
        });
        var Ye = /^(?:input|select|textarea|button)$/i, Te = /^(?:a|area)$/i;
        L.fn.extend({
            prop: function (e, t) {
                return E(this, L.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[L.propFix[e] || e]
                })
            }
        }), L.extend({
            prop: function (e, t, n) {
                var i, a, s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && L.isXMLDoc(e) || (t = L.propFix[t] || t, a = L.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = L.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ye.test(e.nodeName) || Te.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), g.optSelected || (L.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), L.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            L.propFix[this.toLowerCase()] = this
        }), L.fn.extend({
            addClass: function (e) {
                var t, n, i, a, s, r, o, l = 0;
                if (M(e)) return this.each(function (t) {
                    L(this).addClass(e.call(this, t, getClass(this)))
                });
                if (t = classesToArray(e), t.length) for (; n = this[l++];) if (a = getClass(n), i = 1 === n.nodeType && " " + stripAndCollapse(a) + " ") {
                    for (r = 0; s = t[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                    o = stripAndCollapse(i), a !== o && n.setAttribute("class", o)
                }
                return this
            }, removeClass: function (e) {
                var t, n, i, a, s, r, o, l = 0;
                if (M(e)) return this.each(function (t) {
                    L(this).removeClass(e.call(this, t, getClass(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (t = classesToArray(e), t.length) for (; n = this[l++];) if (a = getClass(n), i = 1 === n.nodeType && " " + stripAndCollapse(a) + " ") {
                    for (r = 0; s = t[r++];) for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                    o = stripAndCollapse(i), a !== o && n.setAttribute("class", o)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : M(e) ? this.each(function (n) {
                    L(this).toggleClass(e.call(this, n, getClass(this), t), t)
                }) : this.each(function () {
                    var t, a, s, r;
                    if (i) for (a = 0, s = L(this), r = classesToArray(e); t = r[a++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t); else void 0 !== e && "boolean" !== n || (t = getClass(this), t && I.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : I.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var De = /\r/g;
        L.fn.extend({
            val: function (e) {
                var t, n, i, a = this[0];
                {
                    if (arguments.length) return i = M(e), this.each(function (n) {
                        var a;
                        1 === this.nodeType && (a = i ? e.call(this, n, L(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = L.map(a, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = L.valHooks[this.type] || L.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                    });
                    if (a) return (t = L.valHooks[a.type] || L.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(De, "") : null == n ? "" : n)
                }
            }
        }), L.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = L.find.attr(e, "value");
                        return null != t ? t : stripAndCollapse(L.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, i, a = e.options, s = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [],
                            l = r ? s + 1 : a.length;
                        for (i = s < 0 ? l : r ? s : 0; i < l; i++) if (n = a[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                            if (t = L(n).val(), r) return t;
                            o.push(t)
                        }
                        return o
                    }, set: function (e, t) {
                        for (var n, i, a = e.options, s = L.makeArray(t), r = a.length; r--;) i = a[r], (i.selected = L.inArray(L.valHooks.option.get(i), s) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), s
                    }
                }
            }
        }), L.each(["radio", "checkbox"], function () {
            L.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = L.inArray(L(e).val(), t) > -1
                }
            }, g.checkOn || (L.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), g.focusin = "onfocusin" in n;
        var be = /^(?:focusinfocus|focusoutblur)$/, Se = function (e) {
            e.stopPropagation()
        };
        L.extend(L.event, {
            trigger: function (e, t, i, a) {
                var s, r, l, d, u, c, h, m, p = [i || o], _ = f.call(e, "type") ? e.type : e,
                    y = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = m = l = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !be.test(_ + L.event.triggered) && (_.indexOf(".") > -1 && (y = _.split("."), _ = y.shift(), y.sort()), u = _.indexOf(":") < 0 && "on" + _, e = e[L.expando] ? e : new L.Event(_, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : L.makeArray(t, [e]), h = L.event.special[_] || {}, a || !h.trigger || !1 !== h.trigger.apply(i, t))) {
                    if (!a && !h.noBubble && !v(i)) {
                        for (d = h.delegateType || _, be.test(d + _) || (r = r.parentNode); r; r = r.parentNode) p.push(r), l = r;
                        l === (i.ownerDocument || o) && p.push(l.defaultView || l.parentWindow || n)
                    }
                    for (s = 0; (r = p[s++]) && !e.isPropagationStopped();) m = r, e.type = s > 1 ? d : h.bindType || _, c = (I.get(r, "events") || {})[e.type] && I.get(r, "handle"), c && c.apply(r, t), (c = u && r[u]) && c.apply && W(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
                    return e.type = _, a || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), t) || !W(i) || u && M(i[_]) && !v(i) && (l = i[u], l && (i[u] = null), L.event.triggered = _, e.isPropagationStopped() && m.addEventListener(_, Se), i[_](), e.isPropagationStopped() && m.removeEventListener(_, Se), L.event.triggered = void 0, l && (i[u] = l)), e.result
                }
            }, simulate: function (e, t, n) {
                var i = L.extend(new L.Event, n, {type: e, isSimulated: !0});
                L.event.trigger(i, null, t)
            }
        }), L.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    L.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return L.event.trigger(e, t, n, !0)
            }
        }), g.focusin || L.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                L.event.simulate(t, e.target, L.event.fix(e))
            };
            L.event.special[t] = {
                setup: function () {
                    var i = this.ownerDocument || this, a = I.access(i, t);
                    a || i.addEventListener(e, n, !0), I.access(i, t, (a || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, a = I.access(i, t) - 1;
                    a ? I.access(i, t, a) : (i.removeEventListener(e, n, !0), I.remove(i, t))
                }
            }
        });
        var xe = n.location, Ce = Date.now(), He = /\?/;
        L.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || L.error("Invalid XML: " + e), t
        };
        var je = /\[\]$/, Ae = /\r?\n/g, Pe = /^(?:submit|button|image|reset|file)$/i,
            Oe = /^(?:input|select|textarea|keygen)/i;
        L.param = function (e, t) {
            var n, i = [], a = function (e, t) {
                var n = M(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !L.isPlainObject(e)) L.each(e, function () {
                a(this.name, this.value)
            }); else for (n in e) buildParams(n, e[n], t, a);
            return i.join("&")
        }, L.fn.extend({
            serialize: function () {
                return L.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = L.prop(this, "elements");
                    return e ? L.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !L(this).is(":disabled") && Oe.test(this.nodeName) && !Pe.test(e) && (this.checked || !Z.test(e))
                }).map(function (e, t) {
                    var n = L(this).val();
                    return null == n ? null : Array.isArray(n) ? L.map(n, function (e) {
                        return {name: t.name, value: e.replace(Ae, "\r\n")}
                    }) : {name: t.name, value: n.replace(Ae, "\r\n")}
                }).get()
            }
        });
        var Ee = /%20/g, Fe = /#.*$/, $e = /([?&])_=[^&]*/, We = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Re = /^(?:GET|HEAD)$/, ze = /^\/\//,
            Ne = {}, Ue = {}, qe = "*/".concat("*"), Be = o.createElement("a");
        Be.href = xe.href, L.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe.href,
                type: "GET",
                isLocal: Ie.test(xe.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": L.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? ajaxExtend(ajaxExtend(e, L.ajaxSettings), t) : ajaxExtend(L.ajaxSettings, e)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(Ne),
            ajaxTransport: addToPrefiltersOrTransports(Ue),
            ajax: function (e, t) {
                function done(e, t, r, o) {
                    var d, h, m, v, k, w = t;
                    u || (u = !0, l && n.clearTimeout(l), i = void 0, s = o || "", Y.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, r && (v = ajaxHandleResponses(p, Y, r)), v = ajaxConvert(p, v, Y, d), d ? (p.ifModified && (k = Y.getResponseHeader("Last-Modified"), k && (L.lastModified[a] = k), (k = Y.getResponseHeader("etag")) && (L.etag[a] = k)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = v.state, h = v.data, m = v.error, d = !m)) : (m = w, !e && w || (w = "error", e < 0 && (e = 0))), Y.status = e, Y.statusText = (t || w) + "", d ? y.resolveWith(f, [h, w, Y]) : y.rejectWith(f, [Y, w, m]), Y.statusCode(M), M = void 0, c && _.trigger(d ? "ajaxSuccess" : "ajaxError", [Y, p, d ? h : m]), g.fireWith(f, [Y, w]), c && (_.trigger("ajaxComplete", [Y, p]), --L.active || L.event.trigger("ajaxStop")))
                }

                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, a, s, r, l, d, u, c, h, m, p = L.ajaxSetup({}, t), f = p.context || p,
                    _ = p.context && (f.nodeType || f.jquery) ? L(f) : L.event, y = L.Deferred(),
                    g = L.Callbacks("once memory"), M = p.statusCode || {}, v = {}, k = {}, w = "canceled", Y = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!r) for (r = {}; t = We.exec(s);) r[t[1].toLowerCase()] = t[2];
                                t = r[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        }, getAllResponseHeaders: function () {
                            return u ? s : null
                        }, setRequestHeader: function (e, t) {
                            return null == u && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, v[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == u && (p.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (u) Y.always(e[Y.status]); else for (t in e) M[t] = [M[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || w;
                            return i && i.abort(t), done(0, t), this
                        }
                    };
                if (y.promise(Y), p.url = ((e || p.url || xe.href) + "").replace(ze, xe.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(A) || [""], null == p.crossDomain) {
                    d = o.createElement("a");
                    try {
                        d.href = p.url, d.href = d.href, p.crossDomain = Be.protocol + "//" + Be.host != d.protocol + "//" + d.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = L.param(p.data, p.traditional)), inspectPrefiltersOrTransports(Ne, p, t, Y), u) return Y;
                c = L.event && p.global, c && 0 == L.active++ && L.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Re.test(p.type), a = p.url.replace(Fe, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ee, "+")) : (m = p.url.slice(a.length), p.data && (p.processData || "string" == typeof p.data) && (a += (He.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (a = a.replace($e, "$1"), m = (He.test(a) ? "&" : "?") + "_=" + Ce++ + m), p.url = a + m), p.ifModified && (L.lastModified[a] && Y.setRequestHeader("If-Modified-Since", L.lastModified[a]), L.etag[a] && Y.setRequestHeader("If-None-Match", L.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && Y.setRequestHeader("Content-Type", p.contentType), Y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers) Y.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, Y, p) || u)) return Y.abort();
                if (w = "abort", g.add(p.complete), Y.done(p.success), Y.fail(p.error), i = inspectPrefiltersOrTransports(Ue, p, t, Y)) {
                    if (Y.readyState = 1, c && _.trigger("ajaxSend", [Y, p]), u) return Y;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function () {
                        Y.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1, i.send(v, done)
                    } catch (e) {
                        if (u) throw e;
                        done(-1, e)
                    }
                } else done(-1, "No Transport");
                return Y
            },
            getJSON: function (e, t, n) {
                return L.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return L.get(e, void 0, t, "script")
            }
        }), L.each(["get", "post"], function (e, t) {
            L[t] = function (e, n, i, a) {
                return M(n) && (a = a || i, i = n, n = void 0), L.ajax(L.extend({
                    url: e,
                    type: t,
                    dataType: a,
                    data: n,
                    success: i
                }, L.isPlainObject(e) && e))
            }
        }), L._evalUrl = function (e) {
            return L.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, L.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (M(e) && (e = e.call(this[0])), t = L(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            }, wrapInner: function (e) {
                return M(e) ? this.each(function (t) {
                    L(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = L(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = M(e);
                return this.each(function (n) {
                    L(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    L(this).replaceWith(this.childNodes)
                }), this
            }
        }), L.expr.pseudos.hidden = function (e) {
            return !L.expr.pseudos.visible(e)
        }, L.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, L.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Ge = {0: 200, 1223: 204}, Je = L.ajaxSettings.xhr();
        g.cors = !!Je && "withCredentials" in Je, g.ajax = Je = !!Je, L.ajaxTransport(function (e) {
            var t, i;
            if (g.cors || Je && !e.crossDomain) return {
                send: function (a, s) {
                    var r, o = e.xhr();
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                    for (r in a) o.setRequestHeader(r, a[r]);
                    t = function (e) {
                        return function () {
                            t && (t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Ge[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {binary: o.response} : {text: o.responseText}, o.getAllResponseHeaders()))
                        }
                    }, o.onload = t(), i = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function () {
                        4 === o.readyState && n.setTimeout(function () {
                            t && i()
                        })
                    }, t = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        }), L.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), L.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return L.globalEval(e), e
                }
            }
        }), L.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), L.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, a) {
                        t = L("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                        }), o.head.appendChild(t[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Ve = [], Ze = /(=)\?(?=&|$)|\?\?/;
        L.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Ve.pop() || L.expando + "_" + Ce++;
                return this[e] = !0, e
            }
        }), L.ajaxPrefilter("json jsonp", function (e, t, i) {
            var a, s, r,
                o = !1 !== e.jsonp && (Ze.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0]) return a = e.jsonpCallback = M(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ze, "$1" + a) : !1 !== e.jsonp && (e.url += (He.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function () {
                return r || L.error(a + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = n[a], n[a] = function () {
                r = arguments
            }, i.always(function () {
                void 0 === s ? L(n).removeProp(a) : n[a] = s, e[a] && (e.jsonpCallback = t.jsonpCallback, Ve.push(a)), r && M(s) && s(r[0]), r = s = void 0
            }), "script"
        }), g.createHTMLDocument = function () {
            var e = o.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), L.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, a, s;
            return t || (g.createHTMLDocument ? (t = o.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = o.location.href, t.head.appendChild(i)) : t = o), a = S.exec(e), s = !n && [], a ? [t.createElement(a[1])] : (a = buildFragment([e], t, s), s && s.length && L(s).remove(), L.merge([], a.childNodes))
        }, L.fn.load = function (e, t, n) {
            var i, a, s, r = this, o = e.indexOf(" ");
            return o > -1 && (i = stripAndCollapse(e.slice(o)), e = e.slice(0, o)), M(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), r.length > 0 && L.ajax({
                url: e,
                type: a || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                s = arguments, r.html(i ? L("<div>").append(L.parseHTML(e)).find(i) : e)
            }).always(n && function (e, t) {
                r.each(function () {
                    n.apply(this, s || [e.responseText, t, e])
                })
            }), this
        }, L.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            L.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), L.expr.pseudos.animated = function (e) {
            return L.grep(L.timers, function (t) {
                return e === t.elem
            }).length
        }, L.offset = {
            setOffset: function (e, t, n) {
                var i, a, s, r, o, l, d, u = L.css(e, "position"), c = L(e), h = {};
                "static" === u && (e.style.position = "relative"), o = c.offset(), s = L.css(e, "top"), l = L.css(e, "left"), d = ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1, d ? (i = c.position(), r = i.top, a = i.left) : (r = parseFloat(s) || 0, a = parseFloat(l) || 0), M(t) && (t = t.call(e, n, L.extend({}, o))), null != t.top && (h.top = t.top - o.top + r), null != t.left && (h.left = t.left - o.left + a), "using" in t ? t.using.call(e, h) : c.css(h)
            }
        }, L.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    L.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0];
                if (i) return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var e, t, n, i = this[0], a = {top: 0, left: 0};
                    if ("fixed" === L.css(i, "position")) t = i.getBoundingClientRect(); else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === L.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (a = L(e).offset(), a.top += L.css(e, "borderTopWidth", !0), a.left += L.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - a.top - L.css(i, "marginTop", !0),
                        left: t.left - a.left - L.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === L.css(e, "position");) e = e.offsetParent;
                    return e || te
                })
            }
        }), L.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            L.fn[e] = function (i) {
                return E(this, function (e, i, a) {
                    var s;
                    if (v(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === a) return s ? s[t] : e[i];
                    s ? s.scrollTo(n ? s.pageXOffset : a, n ? a : s.pageYOffset) : e[i] = a
                }, e, i, arguments.length)
            }
        }), L.each(["top", "left"], function (e, t) {
            L.cssHooks[t] = addGetHookIf(g.pixelPosition, function (e, n) {
                if (n) return n = curCSS(e, t), de.test(n) ? L(e).position()[t] + "px" : n
            })
        }), L.each({Height: "height", Width: "width"}, function (e, t) {
            L.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
                L.fn[i] = function (a, s) {
                    var r = arguments.length && (n || "boolean" != typeof a),
                        o = n || (!0 === a || !0 === s ? "margin" : "border");
                    return E(this, function (t, n, a) {
                        var s;
                        return v(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === a ? L.css(t, n, o) : L.style(t, n, a, o)
                    }, t, r ? a : void 0, r)
                }
            })
        }), L.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            L.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), L.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), L.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, i) {
                return this.on(t, e, n, i)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), L.proxy = function (e, t) {
            var n, i, a;
            if ("string" == typeof t && (n = e[t], t = e, e = n), M(e)) return i = d.call(arguments, 2), a = function () {
                return e.apply(t || this, i.concat(d.call(arguments)))
            }, a.guid = e.guid = e.guid || L.guid++, a
        }, L.holdReady = function (e) {
            e ? L.readyWait++ : L.ready(!0)
        }, L.isArray = Array.isArray, L.parseJSON = JSON.parse, L.nodeName = nodeName, L.isFunction = M, L.isWindow = v, L.camelCase = camelCase, L.type = toType, L.now = Date.now, L.isNumeric = function (e) {
            var t = L.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, i = [], void 0 !== (a = function () {
            return L
        }.apply(t, i)) && (e.exports = a);
        var Ke = n.jQuery, Xe = n.$;
        return L.noConflict = function (e) {
            return n.$ === L && (n.$ = Xe), e && n.jQuery === L && (n.jQuery = Ke), L
        }, s || (n.jQuery = n.$ = L), L
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("af", {
            months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
                return /^nm$/i.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Vandag om] LT",
                nextDay: "[Môre om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[Gister om] LT",
                lastWeek: "[Laas] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oor %s",
                past: "%s gelede",
                s: "'n paar sekondes",
                ss: "%d sekondes",
                m: "'n minuut",
                mm: "%d minute",
                h: "'n uur",
                hh: "%d ure",
                d: "'n dag",
                dd: "%d dae",
                M: "'n maand",
                MM: "%d maande",
                y: "'n jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"},
            i = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, s = function (e) {
                return function (t, n, s, r) {
                    var o = i(t), l = a[e][i(t)];
                    return 2 === o && (l = l[n ? 0 : 1]), l.replace(/%d/i, t)
                }
            },
            r = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return e.defineLocale("ar", {
            months: r,
            monthsShort: r,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                ss: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-dz", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 0, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-kw", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 0, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0"}, n = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }, i = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }, a = function (e) {
                return function (t, a, s, r) {
                    var o = n(t), l = i[e][n(t)];
                    return 2 === o && (l = l[a ? 0 : 1]), l.replace(/%d/i, t)
                }
            },
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        return e.defineLocale("ar-ly", {
            months: s,
            monthsShort: s,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/‏M/‏YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: a("s"),
                ss: a("s"),
                m: a("m"),
                mm: a("m"),
                h: a("h"),
                hh: a("h"),
                d: a("d"),
                dd: a("d"),
                M: a("M"),
                MM: a("M"),
                y: a("y"),
                yy: a("y")
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"},
            n = {"١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0"};
        return e.defineLocale("ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                ss: "%d ثانية",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı"
        };
        return e.defineLocale("az", {
            months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
            monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[sabah saat] LT",
                nextWeek: "[gələn həftə] dddd [saat] LT",
                lastDay: "[dünən] LT",
                lastWeek: "[keçən həftə] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s əvvəl",
                s: "birneçə saniyyə",
                ss: "%d saniyə",
                m: "bir dəqiqə",
                mm: "%d dəqiqə",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir il",
                yy: "%d il"
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
                return /^(gündüz|axşam)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
                if (0 === e) return e + "-ıncı";
                var n = e % 10, i = e % 100 - n, a = e >= 100 ? 100 : null;
                return e + (t[n] || t[i] || t[a])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }

        function relativeTimeWithPlural(e, t, n) {
            var i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                dd: "дзень_дні_дзён",
                MM: "месяц_месяцы_месяцаў",
                yy: "год_гады_гадоў"
            };
            return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + plural(i[n], +e)
        }

        return e.defineLocale("be", {
            months: {
                format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
            },
            monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
            weekdays: {
                format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., HH:mm",
                LLLL: "dddd, D MMMM YYYY г., HH:mm"
            },
            calendar: {
                sameDay: "[Сёння ў] LT",
                nextDay: "[Заўтра ў] LT",
                lastDay: "[Учора ў] LT",
                nextWeek: function () {
                    return "[У] dddd [ў] LT"
                },
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "праз %s",
                past: "%s таму",
                s: "некалькі секунд",
                m: relativeTimeWithPlural,
                mm: relativeTimeWithPlural,
                h: relativeTimeWithPlural,
                hh: relativeTimeWithPlural,
                d: "дзень",
                dd: relativeTimeWithPlural,
                M: "месяц",
                MM: relativeTimeWithPlural,
                y: "год",
                yy: relativeTimeWithPlural
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
                return /^(дня|вечара)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case"D":
                        return e + "-га";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("bm", {
            months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "MMMM [tile] D [san] YYYY",
                LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
                LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
            },
            calendar: {
                sameDay: "[Bi lɛrɛ] LT",
                nextDay: "[Sini lɛrɛ] LT",
                nextWeek: "dddd [don lɛrɛ] LT",
                lastDay: "[Kunu lɛrɛ] LT",
                lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s kɔnɔ",
                past: "a bɛ %s bɔ",
                s: "sanga dama dama",
                ss: "sekondi %d",
                m: "miniti kelen",
                mm: "miniti %d",
                h: "lɛrɛ kelen",
                hh: "lɛrɛ %d",
                d: "tile kelen",
                dd: "tile %d",
                M: "kalo kelen",
                MM: "kalo %d",
                y: "san kelen",
                yy: "san %d"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"},
            n = {"১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0"};
        return e.defineLocale("bn", {
            months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm সময়",
                LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[গতকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s পরে",
                past: "%s আগে",
                s: "কয়েক সেকেন্ড",
                ss: "%d সেকেন্ড",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টা",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d মাস",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"},
            n = {"༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0"};
        return e.defineLocale("bo", {
            months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
            weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
            weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[དི་རིང] LT",
                nextDay: "[སང་ཉིན] LT",
                nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                lastDay: "[ཁ་སང] LT",
                lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ལ་",
                past: "%s སྔན་ལ",
                s: "ལམ་སང",
                ss: "%d སྐར་ཆ།",
                m: "སྐར་མ་གཅིག",
                mm: "%d སྐར་མ",
                h: "ཆུ་ཚོད་གཅིག",
                hh: "%d ཆུ་ཚོད",
                d: "ཉིན་གཅིག",
                dd: "%d ཉིན་",
                M: "ཟླ་བ་གཅིག",
                MM: "%d ཟླ་བ",
                y: "ལོ་གཅིག",
                yy: "%d ལོ"
            },
            preparse: function (e) {
                return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function relativeTimeWithMutation(e, t, n) {
            return e + " " + mutation({mm: "munutenn", MM: "miz", dd: "devezh"}[n], e)
        }

        function specialMutationForYears(e) {
            switch (lastNumber(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + " bloaz";
                default:
                    return e + " vloaz"
            }
        }

        function lastNumber(e) {
            return e > 9 ? lastNumber(e % 10) : e
        }

        function mutation(e, t) {
            return 2 === t ? softMutation(e) : e
        }

        function softMutation(e) {
            var t = {m: "v", b: "v", d: "z"};
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }

        return e.defineLocale("br", {
            months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
            monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h[e]mm A",
                LTS: "h[e]mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [a viz] MMMM YYYY",
                LLL: "D [a viz] MMMM YYYY h[e]mm A",
                LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
            },
            calendar: {
                sameDay: "[Hiziv da] LT",
                nextDay: "[Warc'hoazh da] LT",
                nextWeek: "dddd [da] LT",
                lastDay: "[Dec'h da] LT",
                lastWeek: "dddd [paset da] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "a-benn %s",
                past: "%s 'zo",
                s: "un nebeud segondennoù",
                ss: "%d eilenn",
                m: "ur vunutenn",
                mm: relativeTimeWithMutation,
                h: "un eur",
                hh: "%d eur",
                d: "un devezh",
                dd: relativeTimeWithMutation,
                M: "ur miz",
                MM: relativeTimeWithMutation,
                y: "ur bloaz",
                yy: specialMutationForYears
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
                return e + (1 === e ? "añ" : "vet")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function translate(e, t, n) {
            var i = e + " ";
            switch (n) {
                case"ss":
                    return i += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return i += 1 === e ? "dan" : "dana";
                case"MM":
                    return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        return e.defineLocale("bs", {
            months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: "dan",
                dd: translate,
                M: "mjesec",
                MM: translate,
                y: "godinu",
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ca", {
            months: {
                standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                isFormat: /D[oD]?(\s)+MMMM/
            },
            monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [de] YYYY",
                ll: "D MMM YYYY",
                LLL: "D MMMM [de] YYYY [a les] H:mm",
                lll: "D MMM YYYY, H:mm",
                LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                llll: "ddd D MMM YYYY, H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextDay: function () {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "d'aquí %s",
                past: "fa %s",
                s: "uns segons",
                ss: "%d segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return "w" !== t && "W" !== t || (n = "a"), e + n
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10)
        }

        function translate(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case"s":
                    return t || i ? "pár sekund" : "pár sekundami";
                case"ss":
                    return t || i ? a + (plural(e) ? "sekundy" : "sekund") : a + "sekundami";
                case"m":
                    return t ? "minuta" : i ? "minutu" : "minutou";
                case"mm":
                    return t || i ? a + (plural(e) ? "minuty" : "minut") : a + "minutami";
                case"h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case"hh":
                    return t || i ? a + (plural(e) ? "hodiny" : "hodin") : a + "hodinami";
                case"d":
                    return t || i ? "den" : "dnem";
                case"dd":
                    return t || i ? a + (plural(e) ? "dny" : "dní") : a + "dny";
                case"M":
                    return t || i ? "měsíc" : "měsícem";
                case"MM":
                    return t || i ? a + (plural(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case"y":
                    return t || i ? "rok" : "rokem";
                case"yy":
                    return t || i ? a + (plural(e) ? "roky" : "let") : a + "lety"
            }
        }

        var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsParse: function (e, t) {
                var n, i = [];
                for (n = 0; n < 12; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
                return i
            }(t, n),
            shortMonthsParse: function (e) {
                var t, n = [];
                for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(n),
            longMonthsParse: function (e) {
                var t, n = [];
                for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
                return n
            }(t),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm",
                l: "D. M. YYYY"
            },
            calendar: {
                sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                }, lastDay: "[včera v] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: translate,
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: translate,
                dd: translate,
                M: translate,
                MM: translate,
                y: translate,
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("cv", {
            months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
            monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
            },
            calendar: {
                sameDay: "[Паян] LT [сехетре]",
                nextDay: "[Ыран] LT [сехетре]",
                lastDay: "[Ӗнер] LT [сехетре]",
                nextWeek: "[Ҫитес] dddd LT [сехетре]",
                lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                },
                past: "%s каялла",
                s: "пӗр-ик ҫеккунт",
                ss: "%d ҫеккунт",
                m: "пӗр минут",
                mm: "%d минут",
                h: "пӗр сехет",
                hh: "%d сехет",
                d: "пӗр кун",
                dd: "%d кун",
                M: "пӗр уйӑх",
                MM: "%d уйӑх",
                y: "пӗр ҫул",
                yy: "%d ҫул"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("cy", {
            months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
            monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Heddiw am] LT",
                nextDay: "[Yfory am] LT",
                nextWeek: "dddd [am] LT",
                lastDay: "[Ddoe am] LT",
                lastWeek: "dddd [diwethaf am] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "mewn %s",
                past: "%s yn ôl",
                s: "ychydig eiliadau",
                ss: "%d eiliad",
                m: "munud",
                mm: "%d munud",
                h: "awr",
                hh: "%d awr",
                d: "diwrnod",
                dd: "%d diwrnod",
                M: "mis",
                MM: "%d mis",
                y: "blwyddyn",
                yy: "%d flynedd"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
                var t = e, n = "",
                    i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = i[t]), e + n
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "på dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[i] dddd[s kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                ss: "%d sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        return e.defineLocale("de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: processRelativeTime,
                mm: "%d Minuten",
                h: processRelativeTime,
                hh: "%d Stunden",
                d: processRelativeTime,
                dd: processRelativeTime,
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        return e.defineLocale("de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: processRelativeTime,
                mm: "%d Minuten",
                h: processRelativeTime,
                hh: "%d Stunden",
                d: processRelativeTime,
                dd: processRelativeTime,
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? a[n][0] : a[n][1]
        }

        return e.defineLocale("de-ch", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY HH:mm",
                LLLL: "dddd, D. MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                ss: "%d Sekunden",
                m: processRelativeTime,
                mm: "%d Minuten",
                h: processRelativeTime,
                hh: "%d Stunden",
                d: processRelativeTime,
                dd: processRelativeTime,
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        return e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "D/M/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
                return "މފ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "މކ" : "މފ"
            },
            calendar: {
                sameDay: "[މިއަދު] LT",
                nextDay: "[މާދަމާ] LT",
                nextWeek: "dddd LT",
                lastDay: "[އިއްޔެ] LT",
                lastWeek: "[ފާއިތުވި] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ތެރޭގައި %s",
                past: "ކުރިން %s",
                s: "ސިކުންތުކޮޅެއް",
                ss: "d% ސިކުންތު",
                m: "މިނިޓެއް",
                mm: "މިނިޓު %d",
                h: "ގަޑިއިރެއް",
                hh: "ގަޑިއިރު %d",
                d: "ދުވަހެއް",
                dd: "ދުވަސް %d",
                M: "މަހެއް",
                MM: "މަސް %d",
                y: "އަހަރެއް",
                yy: "އަހަރު %d"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 7, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function isFunction(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        return e.defineLocale("el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function (e, t) {
                return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
            },
            isPM: function (e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, t) {
                var n = this._calendarEl[e], i = t && t.hours();
                return isFunction(n) && (n = n.apply(t)), n.replace("{}", i % 12 == 1 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                ss: "%d δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-ie", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("en-nz", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("eo", {
            months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
            weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D[-a de] MMMM, YYYY",
                LLL: "D[-a de] MMMM, YYYY HH:mm",
                LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
                return "p" === e.charAt(0).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
            },
            calendar: {
                sameDay: "[Hodiaŭ je] LT",
                nextDay: "[Morgaŭ je] LT",
                nextWeek: "dddd [je] LT",
                lastDay: "[Hieraŭ je] LT",
                lastWeek: "[pasinta] dddd [je] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "post %s",
                past: "antaŭ %s",
                s: "sekundoj",
                ss: "%d sekundoj",
                m: "minuto",
                mm: "%d minutoj",
                h: "horo",
                hh: "%d horoj",
                d: "tago",
                dd: "%d tagoj",
                M: "monato",
                MM: "%d monatoj",
                y: "jaro",
                yy: "%d jaroj"
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            i = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, i) {
                return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            i = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        return e.defineLocale("es-do", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, i) {
                return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY h:mm A",
                LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        return e.defineLocale("es-us", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, i) {
                return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "MM/DD/YYYY",
                LL: "MMMM [de] D [de] YYYY",
                LLL: "MMMM [de] D [de] YYYY h:mm A",
                LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                ss: [e + "sekundi", e + "sekundit"],
                m: ["ühe minuti", "üks minut"],
                mm: [e + " minuti", e + " minutit"],
                h: ["ühe tunni", "tund aega", "üks tund"],
                hh: [e + " tunni", e + " tundi"],
                d: ["ühe päeva", "üks päev"],
                M: ["kuu aja", "kuu aega", "üks kuu"],
                MM: [e + " kuu", e + " kuud"],
                y: ["ühe aasta", "aasta", "üks aasta"],
                yy: [e + " aasta", e + " aastat"]
            };
            return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
        }

        return e.defineLocale("et", {
            months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Täna,] LT",
                nextDay: "[Homme,] LT",
                nextWeek: "[Järgmine] dddd LT",
                lastDay: "[Eile,] LT",
                lastWeek: "[Eelmine] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s pärast",
                past: "%s tagasi",
                s: processRelativeTime,
                ss: processRelativeTime,
                m: processRelativeTime,
                mm: processRelativeTime,
                h: processRelativeTime,
                hh: processRelativeTime,
                d: processRelativeTime,
                dd: "%d päeva",
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("eu", {
            months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            monthsParseExact: !0,
            weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY[ko] MMMM[ren] D[a]",
                LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                l: "YYYY-M-D",
                ll: "YYYY[ko] MMM D[a]",
                lll: "YYYY[ko] MMM D[a] HH:mm",
                llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
            },
            calendar: {
                sameDay: "[gaur] LT[etan]",
                nextDay: "[bihar] LT[etan]",
                nextWeek: "dddd LT[etan]",
                lastDay: "[atzo] LT[etan]",
                lastWeek: "[aurreko] dddd LT[etan]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s barru",
                past: "duela %s",
                s: "segundo batzuk",
                ss: "%d segundo",
                m: "minutu bat",
                mm: "%d minutu",
                h: "ordu bat",
                hh: "%d ordu",
                d: "egun bat",
                dd: "%d egun",
                M: "hilabete bat",
                MM: "%d hilabete",
                y: "urte bat",
                yy: "%d urte"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"},
            n = {"۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0"};
        return e.defineLocale("fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چند ثانیه",
                ss: "ثانیه d%",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                }).replace(/,/g, "،")
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function translate(e, t, n, i) {
            var a = "";
            switch (n) {
                case"s":
                    return i ? "muutaman sekunnin" : "muutama sekunti";
                case"ss":
                    return i ? "sekunnin" : "sekuntia";
                case"m":
                    return i ? "minuutin" : "minuutti";
                case"mm":
                    a = i ? "minuutin" : "minuuttia";
                    break;
                case"h":
                    return i ? "tunnin" : "tunti";
                case"hh":
                    a = i ? "tunnin" : "tuntia";
                    break;
                case"d":
                    return i ? "päivän" : "päivä";
                case"dd":
                    a = i ? "päivän" : "päivää";
                    break;
                case"M":
                    return i ? "kuukauden" : "kuukausi";
                case"MM":
                    a = i ? "kuukauden" : "kuukautta";
                    break;
                case"y":
                    return i ? "vuoden" : "vuosi";
                case"yy":
                    a = i ? "vuoden" : "vuotta"
            }
            return a = verbalNumber(e, i) + " " + a
        }

        function verbalNumber(e, i) {
            return e < 10 ? i ? n[e] : t[e] : e
        }

        var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];
        return e.defineLocale("fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] HH.mm",
                llll: "ddd, Do MMM YYYY, [klo] HH.mm"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: translate,
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: translate,
                dd: translate,
                M: translate,
                MM: translate,
                y: translate,
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fo", {
            months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D. MMMM, YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Í dag kl.] LT",
                nextDay: "[Í morgin kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[Í gjár kl.] LT",
                lastWeek: "[síðstu] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "um %s",
                past: "%s síðani",
                s: "fá sekund",
                ss: "%d sekundir",
                m: "ein minutt",
                mm: "%d minuttir",
                h: "ein tími",
                hh: "%d tímar",
                d: "ein dagur",
                dd: "%d dagar",
                M: "ein mánaði",
                MM: "%d mánaðir",
                y: "eitt ár",
                yy: "%d ár"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("fr-ch", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            monthsParseExact: !0,
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Aujourd’hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                ss: "%d secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
                switch (t) {
                    default:
                    case"M":
                    case"Q":
                    case"D":
                    case"DDD":
                    case"d":
                        return e + (1 === e ? "er" : "e");
                    case"w":
                    case"W":
                        return e + (1 === e ? "re" : "e")
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        return e.defineLocale("fy", {
            months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
            monthsShort: function (e, i) {
                return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsParseExact: !0,
            weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[hjoed om] LT",
                nextDay: "[moarn om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[juster om] LT",
                lastWeek: "[ôfrûne] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "oer %s",
                past: "%s lyn",
                s: "in pear sekonden",
                ss: "%d sekonden",
                m: "ien minút",
                mm: "%d minuten",
                h: "ien oere",
                hh: "%d oeren",
                d: "ien dei",
                dd: "%d dagen",
                M: "ien moanne",
                MM: "%d moannen",
                y: "ien jier",
                yy: "%d jierren"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
            n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
            i = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
            a = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], s = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
        return e.defineLocale("gd", {
            months: t,
            monthsShort: n,
            monthsParseExact: !0,
            weekdays: i,
            weekdaysShort: a,
            weekdaysMin: s,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[An-diugh aig] LT",
                nextDay: "[A-màireach aig] LT",
                nextWeek: "dddd [aig] LT",
                lastDay: "[An-dè aig] LT",
                lastWeek: "dddd [seo chaidh] [aig] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ann an %s",
                past: "bho chionn %s",
                s: "beagan diogan",
                ss: "%d diogan",
                m: "mionaid",
                mm: "%d mionaidean",
                h: "uair",
                hh: "%d uairean",
                d: "latha",
                dd: "%d latha",
                M: "mìos",
                MM: "%d mìosan",
                y: "bliadhna",
                yy: "%d bliadhna"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
                return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("gl", {
            months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
            monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY H:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
            },
            calendar: {
                sameDay: function () {
                    return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextDay: function () {
                    return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                }, nextWeek: function () {
                    return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, lastDay: function () {
                    return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                }, lastWeek: function () {
                    return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return 0 === e.indexOf("un") ? "n" + e : "en " + e
                },
                past: "hai %s",
                s: "uns segundos",
                ss: "%d segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "unha hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                s: ["thodde secondanim", "thodde second"],
                ss: [e + " secondanim", e + " second"],
                m: ["eka mintan", "ek minute"],
                mm: [e + " mintanim", e + " mintam"],
                h: ["eka horan", "ek hor"],
                hh: [e + " horanim", e + " hor"],
                d: ["eka disan", "ek dis"],
                dd: [e + " disanim", e + " dis"],
                M: ["eka mhoinean", "ek mhoino"],
                MM: [e + " mhoineanim", e + " mhoine"],
                y: ["eka vorsan", "ek voros"],
                yy: [e + " vorsanim", e + " vorsam"]
            };
            return t ? a[n][0] : a[n][1]
        }

        return e.defineLocale("gom-latn", {
            months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
            monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "A h:mm [vazta]",
                LTS: "A h:mm:ss [vazta]",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY A h:mm [vazta]",
                LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                llll: "ddd, D MMM YYYY, A h:mm [vazta]"
            },
            calendar: {
                sameDay: "[Aiz] LT",
                nextDay: "[Faleam] LT",
                nextWeek: "[Ieta to] dddd[,] LT",
                lastDay: "[Kal] LT",
                lastWeek: "[Fatlo] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s",
                past: "%s adim",
                s: processRelativeTime,
                ss: processRelativeTime,
                m: processRelativeTime,
                mm: processRelativeTime,
                h: processRelativeTime,
                hh: processRelativeTime,
                d: processRelativeTime,
                dd: processRelativeTime,
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"D":
                        return e + "er";
                    default:
                    case"M":
                    case"Q":
                    case"DDD":
                    case"d":
                    case"w":
                    case"W":
                        return e
                }
            },
            week: {dow: 1, doy: 4},
            meridiemParse: /rati|sokalli|donparam|sanje/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦"},
            n = {"૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0"};
        return e.defineLocale("gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
            monthsParseExact: !0,
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
                LT: "A h:mm વાગ્યે",
                LTS: "A h:mm:ss વાગ્યે",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm વાગ્યે",
                LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
            },
            calendar: {
                sameDay: "[આજ] LT",
                nextDay: "[કાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ગઇકાલે] LT",
                lastWeek: "[પાછલા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s મા",
                past: "%s પેહલા",
                s: "અમુક પળો",
                ss: "%d સેકંડ",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d મહિનો",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function (e) {
                return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY HH:mm",
                LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                ss: "%d שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            },
            meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
                return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        return e.defineLocale("hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                ss: "%d सेकंड",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function translate(e, t, n) {
            var i = e + " ";
            switch (n) {
                case"ss":
                    return i += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case"m":
                    return t ? "jedna minuta" : "jedne minute";
                case"mm":
                    return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case"h":
                    return t ? "jedan sat" : "jednog sata";
                case"hh":
                    return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case"dd":
                    return i += 1 === e ? "dan" : "dana";
                case"MM":
                    return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case"yy":
                    return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }

        return e.defineLocale("hr", {
            months: {
                format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
            },
            monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[jučer u] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: "dan",
                dd: translate,
                M: "mjesec",
                MM: translate,
                y: "godinu",
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function translate(e, t, n, i) {
            var a = e;
            switch (n) {
                case"s":
                    return i || t ? "néhány másodperc" : "néhány másodperce";
                case"ss":
                    return a + (i || t) ? " másodperc" : " másodperce";
                case"m":
                    return "egy" + (i || t ? " perc" : " perce");
                case"mm":
                    return a + (i || t ? " perc" : " perce");
                case"h":
                    return "egy" + (i || t ? " óra" : " órája");
                case"hh":
                    return a + (i || t ? " óra" : " órája");
                case"d":
                    return "egy" + (i || t ? " nap" : " napja");
                case"dd":
                    return a + (i || t ? " nap" : " napja");
                case"M":
                    return "egy" + (i || t ? " hónap" : " hónapja");
                case"MM":
                    return a + (i || t ? " hónap" : " hónapja");
                case"y":
                    return "egy" + (i || t ? " év" : " éve");
                case"yy":
                    return a + (i || t ? " év" : " éve")
            }
            return ""
        }

        function week(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
        }

        var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        return e.defineLocale("hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D. H:mm",
                LLLL: "YYYY. MMMM D., dddd H:mm"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                    return week.call(this, !0)
                }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                    return week.call(this, !1)
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: translate,
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: translate,
                dd: translate,
                M: translate,
                MM: translate,
                y: translate,
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("hy-am", {
            months: {
                format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
            },
            monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY թ.",
                LLL: "D MMMM YYYY թ., HH:mm",
                LLLL: "dddd, D MMMM YYYY թ., HH:mm"
            },
            calendar: {
                sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                    return "dddd [օրը ժամը] LT"
                }, lastWeek: function () {
                    return "[անցած] dddd [օրը ժամը] LT"
                }, sameElse: "L"
            },
            relativeTime: {
                future: "%s հետո",
                past: "%s առաջ",
                s: "մի քանի վայրկյան",
                ss: "%d վայրկյան",
                m: "րոպե",
                mm: "%d րոպե",
                h: "ժամ",
                hh: "%d ժամ",
                d: "օր",
                dd: "%d օր",
                M: "ամիս",
                MM: "%d ամիս",
                y: "տարի",
                yy: "%d տարի"
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
                return /^(ցերեկվա|երեկոյան)$/.test(e)
            },
            meridiem: function (e) {
                return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"DDD":
                    case"w":
                    case"W":
                    case"DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                ss: "%d detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e) {
            return e % 100 == 11 || e % 10 != 1
        }

        function translate(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case"s":
                    return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case"ss":
                    return plural(e) ? a + (t || i ? "sekúndur" : "sekúndum") : a + "sekúnda";
                case"m":
                    return t ? "mínúta" : "mínútu";
                case"mm":
                    return plural(e) ? a + (t || i ? "mínútur" : "mínútum") : t ? a + "mínúta" : a + "mínútu";
                case"hh":
                    return plural(e) ? a + (t || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
                case"d":
                    return t ? "dagur" : i ? "dag" : "degi";
                case"dd":
                    return plural(e) ? t ? a + "dagar" : a + (i ? "daga" : "dögum") : t ? a + "dagur" : a + (i ? "dag" : "degi");
                case"M":
                    return t ? "mánuður" : i ? "mánuð" : "mánuði";
                case"MM":
                    return plural(e) ? t ? a + "mánuðir" : a + (i ? "mánuði" : "mánuðum") : t ? a + "mánuður" : a + (i ? "mánuð" : "mánuði");
                case"y":
                    return t || i ? "ár" : "ári";
                case"yy":
                    return plural(e) ? a + (t || i ? "ár" : "árum") : a + (t || i ? "ár" : "ári")
            }
        }

        return e.defineLocale("is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: translate,
                ss: translate,
                m: translate,
                mm: translate,
                h: "klukkustund",
                hh: translate,
                d: translate,
                dd: translate,
                M: translate,
                MM: translate,
                y: translate,
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                ss: "%d secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日 HH:mm dddd",
                l: "YYYY/MM/DD",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日 HH:mm dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                ss: "%d秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("jv", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
            },
            calendar: {
                sameDay: "[Dinten puniko pukul] LT",
                nextDay: "[Mbenjang pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kala wingi pukul] LT",
                lastWeek: "dddd [kepengker pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "wonten ing %s",
                past: "%s ingkang kepengker",
                s: "sawetawis detik",
                ss: "%d detik",
                m: "setunggal menit",
                mm: "%d menit",
                h: "setunggal jam",
                hh: "%d jam",
                d: "sedinten",
                dd: "%d dinten",
                M: "sewulan",
                MM: "%d wulan",
                y: "setaun",
                yy: "%d taun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ka", {
            months: {
                standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
                standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                isFormat: /(წინა|შემდეგ)/
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[დღეს] LT[-ზე]",
                nextDay: "[ხვალ] LT[-ზე]",
                lastDay: "[გუშინ] LT[-ზე]",
                nextWeek: "[შემდეგ] dddd LT[-ზე]",
                lastWeek: "[წინა] dddd LT-ზე",
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                },
                past: function (e) {
                    return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                },
                s: "რამდენიმე წამი",
                ss: "%d წამი",
                m: "წუთი",
                mm: "%d წუთი",
                h: "საათი",
                hh: "%d საათი",
                d: "დღე",
                dd: "%d დღე",
                M: "თვე",
                MM: "%d თვე",
                y: "წელი",
                yy: "%d წელი"
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
                return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші"
        };
        return e.defineLocale("kk", {
            months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
            monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгін сағат] LT",
                nextDay: "[Ертең сағат] LT",
                nextWeek: "dddd [сағат] LT",
                lastDay: "[Кеше сағат] LT",
                lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ішінде",
                past: "%s бұрын",
                s: "бірнеше секунд",
                ss: "%d секунд",
                m: "бір минут",
                mm: "%d минут",
                h: "бір сағат",
                hh: "%d сағат",
                d: "бір күн",
                dd: "%d күн",
                M: "бір ай",
                MM: "%d ай",
                y: "бір жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
                var n = e % 10, i = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[i])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("km", {
            months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                nextDay: "[ស្អែក ម៉ោង] LT",
                nextWeek: "dddd [ម៉ោង] LT",
                lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sទៀត",
                past: "%sមុន",
                s: "ប៉ុន្មានវិនាទី",
                ss: "%d វិនាទី",
                m: "មួយនាទី",
                mm: "%d នាទី",
                h: "មួយម៉ោង",
                hh: "%d ម៉ោង",
                d: "មួយថ្ងៃ",
                dd: "%d ថ្ងៃ",
                M: "មួយខែ",
                MM: "%d ខែ",
                y: "មួយឆ្នាំ",
                yy: "%d ឆ្នាំ"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦"},
            n = {"೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0"};
        return e.defineLocale("kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
            monthsParseExact: !0,
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಿನ್ನೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ನಂತರ",
                past: "%s ಹಿಂದೆ",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                ss: "%d ಸೆಕೆಂಡುಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷ",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆ",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ತಿಂಗಳು",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
                return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
                return e + "ನೇ"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 A h:mm",
                LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                l: "YYYY.MM.DD",
                ll: "YYYY년 MMMM D일",
                lll: "YYYY년 MMMM D일 A h:mm",
                llll: "YYYY년 MMMM D일 dddd A h:mm"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇 초",
                ss: "%d초",
                m: "1분",
                mm: "%d분",
                h: "한 시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한 달",
                MM: "%d달",
                y: "일 년",
                yy: "%d년"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "일";
                    case"M":
                        return e + "월";
                    case"w":
                    case"W":
                        return e + "주";
                    default:
                        return e
                }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "오전" : "오후"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү"
        };
        return e.defineLocale("ky", {
            months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
            monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Бүгүн саат] LT",
                nextDay: "[Эртең саат] LT",
                nextWeek: "dddd [саат] LT",
                lastDay: "[Кече саат] LT",
                lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ичинде",
                past: "%s мурун",
                s: "бирнече секунд",
                ss: "%d секунд",
                m: "бир мүнөт",
                mm: "%d мүнөт",
                h: "бир саат",
                hh: "%d саат",
                d: "бир күн",
                dd: "%d күн",
                M: "бир ай",
                MM: "%d ай",
                y: "бир жыл",
                yy: "%d жыл"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
                var n = e % 10, i = e >= 100 ? 100 : null;
                return e + (t[e] || t[n] || t[i])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                m: ["eng Minutt", "enger Minutt"],
                h: ["eng Stonn", "enger Stonn"],
                d: ["een Dag", "engem Dag"],
                M: ["ee Mount", "engem Mount"],
                y: ["ee Joer", "engem Joer"]
            };
            return t ? a[n][0] : a[n][1]
        }

        function processFutureTime(e) {
            return eifelerRegelAppliesToNumber(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
        }

        function processPastTime(e) {
            return eifelerRegelAppliesToNumber(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
        }

        function eifelerRegelAppliesToNumber(e) {
            if (e = parseInt(e, 10), isNaN(e)) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
                var t = e % 10, n = e / 10;
                return eifelerRegelAppliesToNumber(0 === t ? n : t)
            }
            if (e < 1e4) {
                for (; e >= 10;) e /= 10;
                return eifelerRegelAppliesToNumber(e)
            }
            return e /= 1e3, eifelerRegelAppliesToNumber(e)
        }

        return e.defineLocale("lb", {
            months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            monthsParseExact: !0,
            weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm [Auer]",
                LTS: "H:mm:ss [Auer]",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm [Auer]",
                LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
            },
            calendar: {
                sameDay: "[Haut um] LT",
                sameElse: "L",
                nextDay: "[Muer um] LT",
                nextWeek: "dddd [um] LT",
                lastDay: "[Gëschter um] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT"
                    }
                }
            },
            relativeTime: {
                future: processFutureTime,
                past: processPastTime,
                s: "e puer Sekonnen",
                ss: "%d Sekonnen",
                m: processRelativeTime,
                mm: "%d Minutten",
                h: processRelativeTime,
                hh: "%d Stonnen",
                d: processRelativeTime,
                dd: "%d Deeg",
                M: processRelativeTime,
                MM: "%d Méint",
                y: processRelativeTime,
                yy: "%d Joer"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("lo", {
            months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "ວັນdddd D MMMM YYYY HH:mm"
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
                return "ຕອນແລງ" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
            },
            calendar: {
                sameDay: "[ມື້ນີ້ເວລາ] LT",
                nextDay: "[ມື້ອື່ນເວລາ] LT",
                nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ອີກ %s",
                past: "%sຜ່ານມາ",
                s: "ບໍ່ເທົ່າໃດວິນາທີ",
                ss: "%d ວິນາທີ",
                m: "1 ນາທີ",
                mm: "%d ນາທີ",
                h: "1 ຊົ່ວໂມງ",
                hh: "%d ຊົ່ວໂມງ",
                d: "1 ມື້",
                dd: "%d ມື້",
                M: "1 ເດືອນ",
                MM: "%d ເດືອນ",
                y: "1 ປີ",
                yy: "%d ປີ"
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
                return "ທີ່" + e
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function translateSeconds(e, t, n, i) {
            return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
        }

        function translateSingular(e, t, n, i) {
            return t ? forms(n)[0] : i ? forms(n)[1] : forms(n)[2]
        }

        function special(e) {
            return e % 10 == 0 || e > 10 && e < 20
        }

        function forms(e) {
            return t[e].split("_")
        }

        function translate(e, t, n, i) {
            var a = e + " ";
            return 1 === e ? a + translateSingular(e, t, n[0], i) : t ? a + (special(e) ? forms(n)[1] : forms(n)[0]) : i ? a + forms(n)[1] : a + (special(e) ? forms(n)[1] : forms(n)[2])
        }

        var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
        };
        return e.defineLocale("lt", {
            months: {
                format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
            },
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
                format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                isFormat: /dddd HH:mm/
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: translateSeconds,
                ss: translate,
                m: translateSingular,
                mm: translate,
                h: translateSingular,
                hh: translate,
                d: translateSingular,
                dd: translate,
                M: translateSingular,
                MM: translate,
                y: translateSingular,
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function format(e, t, n) {
            return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
        }

        function relativeTimeWithPlural(e, n, i) {
            return e + " " + format(t[i], e, n)
        }

        function relativeTimeWithSingular(e, n, i) {
            return format(t[i], e, n)
        }

        function relativeSeconds(e, t) {
            return t ? "dažas sekundes" : "dažām sekundēm"
        }

        var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_")
        };
        return e.defineLocale("lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY.",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, HH:mm",
                LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "pēc %s",
                past: "pirms %s",
                s: relativeSeconds,
                ss: relativeTimeWithPlural,
                m: relativeTimeWithSingular,
                mm: relativeTimeWithPlural,
                h: relativeTimeWithSingular,
                hh: relativeTimeWithPlural,
                d: relativeTimeWithSingular,
                dd: relativeTimeWithPlural,
                M: relativeTimeWithSingular,
                MM: relativeTimeWithPlural,
                y: relativeTimeWithSingular,
                yy: relativeTimeWithPlural
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekund", "sekunda", "sekundi"],
                m: ["jedan minut", "jednog minuta"],
                mm: ["minut", "minuta", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mjesec", "mjeseca", "mjeseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, i) {
                var a = t.words[i];
                return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        return e.defineLocale("me", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mjesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("mi", {
            months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
            monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [i] HH:mm",
                LLLL: "dddd, D MMMM YYYY [i] HH:mm"
            },
            calendar: {
                sameDay: "[i teie mahana, i] LT",
                nextDay: "[apopo i] LT",
                nextWeek: "dddd [i] LT",
                lastDay: "[inanahi i] LT",
                lastWeek: "dddd [whakamutunga i] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "i roto i %s",
                past: "%s i mua",
                s: "te hēkona ruarua",
                ss: "%d hēkona",
                m: "he meneti",
                mm: "%d meneti",
                h: "te haora",
                hh: "%d haora",
                d: "he ra",
                dd: "%d ra",
                M: "he marama",
                MM: "%d marama",
                y: "he tau",
                yy: "%d tau"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("mk", {
            months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[Денес во] LT",
                nextDay: "[Утре во] LT",
                nextWeek: "[Во] dddd [во] LT",
                lastDay: "[Вчера во] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "после %s",
                past: "пред %s",
                s: "неколку секунди",
                ss: "%d секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дена",
                M: "месец",
                MM: "%d месеци",
                y: "година",
                yy: "%d години"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10, n = e % 100;
                return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ml", {
            months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
            monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
            monthsParseExact: !0,
            weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
                LT: "A h:mm -നു",
                LTS: "A h:mm:ss -നു",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm -നു",
                LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
            },
            calendar: {
                sameDay: "[ഇന്ന്] LT",
                nextDay: "[നാളെ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ഇന്നലെ] LT",
                lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s കഴിഞ്ഞ്",
                past: "%s മുൻപ്",
                s: "അൽപ നിമിഷങ്ങൾ",
                ss: "%d സെക്കൻഡ്",
                m: "ഒരു മിനിറ്റ്",
                mm: "%d മിനിറ്റ്",
                h: "ഒരു മണിക്കൂർ",
                hh: "%d മണിക്കൂർ",
                d: "ഒരു ദിവസം",
                dd: "%d ദിവസം",
                M: "ഒരു മാസം",
                MM: "%d മാസം",
                y: "ഒരു വർഷം",
                yy: "%d വർഷം"
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function relativeTimeMr(e, t, n, i) {
            var a = "";
            if (t) switch (n) {
                case"s":
                    a = "काही सेकंद";
                    break;
                case"ss":
                    a = "%d सेकंद";
                    break;
                case"m":
                    a = "एक मिनिट";
                    break;
                case"mm":
                    a = "%d मिनिटे";
                    break;
                case"h":
                    a = "एक तास";
                    break;
                case"hh":
                    a = "%d तास";
                    break;
                case"d":
                    a = "एक दिवस";
                    break;
                case"dd":
                    a = "%d दिवस";
                    break;
                case"M":
                    a = "एक महिना";
                    break;
                case"MM":
                    a = "%d महिने";
                    break;
                case"y":
                    a = "एक वर्ष";
                    break;
                case"yy":
                    a = "%d वर्षे"
            } else switch (n) {
                case"s":
                    a = "काही सेकंदां";
                    break;
                case"ss":
                    a = "%d सेकंदां";
                    break;
                case"m":
                    a = "एका मिनिटा";
                    break;
                case"mm":
                    a = "%d मिनिटां";
                    break;
                case"h":
                    a = "एका तासा";
                    break;
                case"hh":
                    a = "%d तासां";
                    break;
                case"d":
                    a = "एका दिवसा";
                    break;
                case"dd":
                    a = "%d दिवसां";
                    break;
                case"M":
                    a = "एका महिन्या";
                    break;
                case"MM":
                    a = "%d महिन्यां";
                    break;
                case"y":
                    a = "एका वर्षा";
                    break;
                case"yy":
                    a = "%d वर्षां"
            }
            return a.replace(/%d/i, e)
        }

        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        return e.defineLocale("mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
            monthsParseExact: !0,
            weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm वाजता",
                LTS: "A h:mm:ss वाजता",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm वाजता",
                LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[काल] LT",
                lastWeek: "[मागील] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमध्ये",
                past: "%sपूर्वी",
                s: relativeTimeMr,
                ss: relativeTimeMr,
                m: relativeTimeMr,
                mm: relativeTimeMr,
                h: relativeTimeMr,
                hh: relativeTimeMr,
                d: relativeTimeMr,
                dd: relativeTimeMr,
                M: relativeTimeMr,
                MM: relativeTimeMr,
                y: relativeTimeMr,
                yy: relativeTimeMr
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ms", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ms-my", {
            months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] HH.mm",
                LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Esok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kelmarin pukul] LT",
                lastWeek: "dddd [lepas pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lepas",
                s: "beberapa saat",
                ss: "%d saat",
                m: "seminit",
                mm: "%d minit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("mt", {
            months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
            monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Illum fil-]LT",
                nextDay: "[Għada fil-]LT",
                nextWeek: "dddd [fil-]LT",
                lastDay: "[Il-bieraħ fil-]LT",
                lastWeek: "dddd [li għadda] [fil-]LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "f’ %s",
                past: "%s ilu",
                s: "ftit sekondi",
                ss: "%d sekondi",
                m: "minuta",
                mm: "%d minuti",
                h: "siegħa",
                hh: "%d siegħat",
                d: "ġurnata",
                dd: "%d ġranet",
                M: "xahar",
                MM: "%d xhur",
                y: "sena",
                yy: "%d sni"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"},
            n = {"၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0"};
        return e.defineLocale("my", {
            months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
            monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ယနေ.] LT [မှာ]",
                nextDay: "[မနက်ဖြန်] LT [မှာ]",
                nextWeek: "dddd LT [မှာ]",
                lastDay: "[မနေ.က] LT [မှာ]",
                lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                sameElse: "L"
            },
            relativeTime: {
                future: "လာမည့် %s မှာ",
                past: "လွန်ခဲ့သော %s က",
                s: "စက္ကန်.အနည်းငယ်",
                ss: "%d စက္ကန့်",
                m: "တစ်မိနစ်",
                mm: "%d မိနစ်",
                h: "တစ်နာရီ",
                hh: "%d နာရီ",
                d: "တစ်ရက်",
                dd: "%d ရက်",
                M: "တစ်လ",
                MM: "%d လ",
                y: "တစ်နှစ်",
                yy: "%d နှစ်"
            },
            preparse: function (e) {
                return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
            monthsParseExact: !0,
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "noen sekunder",
                ss: "%d sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"},
            n = {"१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0"};
        return e.defineLocale("ne", {
            months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
            monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
            monthsParseExact: !0,
            weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "Aको h:mm बजे",
                LTS: "Aको h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, Aको h:mm बजे",
                LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[भोलि] LT",
                nextWeek: "[आउँदो] dddd[,] LT",
                lastDay: "[हिजो] LT",
                lastWeek: "[गएको] dddd[,] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sमा",
                past: "%s अगाडि",
                s: "केही क्षण",
                ss: "%d सेकेण्ड",
                m: "एक मिनेट",
                mm: "%d मिनेट",
                h: "एक घण्टा",
                hh: "%d घण्टा",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महिना",
                MM: "%d महिना",
                y: "एक बर्ष",
                yy: "%d बर्ष"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            i = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, i) {
                return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            i = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        return e.defineLocale("nl-be", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, i) {
                return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsRegex: a,
            monthsShortRegex: a,
            monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: i,
            longMonthsParse: i,
            shortMonthsParse: i,
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                ss: "%d seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("nn", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] H:mm",
                LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
            },
            calendar: {
                sameDay: "[I dag klokka] LT",
                nextDay: "[I morgon klokka] LT",
                nextWeek: "dddd [klokka] LT",
                lastDay: "[I går klokka] LT",
                lastWeek: "[Føregåande] dddd [klokka] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s sidan",
                s: "nokre sekund",
                ss: "%d sekund",
                m: "eit minutt",
                mm: "%d minutt",
                h: "ein time",
                hh: "%d timar",
                d: "ein dag",
                dd: "%d dagar",
                M: "ein månad",
                MM: "%d månader",
                y: "eit år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦"},
            n = {"੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0"};
        return e.defineLocale("pa-in", {
            months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
            weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
                LT: "A h:mm ਵਜੇ",
                LTS: "A h:mm:ss ਵਜੇ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
            },
            calendar: {
                sameDay: "[ਅਜ] LT",
                nextDay: "[ਕਲ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ਕਲ] LT",
                lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ਵਿੱਚ",
                past: "%s ਪਿਛਲੇ",
                s: "ਕੁਝ ਸਕਿੰਟ",
                ss: "%d ਸਕਿੰਟ",
                m: "ਇਕ ਮਿੰਟ",
                mm: "%d ਮਿੰਟ",
                h: "ਇੱਕ ਘੰਟਾ",
                hh: "%d ਘੰਟੇ",
                d: "ਇੱਕ ਦਿਨ",
                dd: "%d ਦਿਨ",
                M: "ਇੱਕ ਮਹੀਨਾ",
                MM: "%d ਮਹੀਨੇ",
                y: "ਇੱਕ ਸਾਲ",
                yy: "%d ਸਾਲ"
            },
            preparse: function (e) {
                return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
        }

        function translate(e, t, n) {
            var i = e + " ";
            switch (n) {
                case"ss":
                    return i + (plural(e) ? "sekundy" : "sekund");
                case"m":
                    return t ? "minuta" : "minutę";
                case"mm":
                    return i + (plural(e) ? "minuty" : "minut");
                case"h":
                    return t ? "godzina" : "godzinę";
                case"hh":
                    return i + (plural(e) ? "godziny" : "godzin");
                case"MM":
                    return i + (plural(e) ? "miesiące" : "miesięcy");
                case"yy":
                    return i + (plural(e) ? "lata" : "lat")
            }
        }

        var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        return e.defineLocale("pl", {
            months: function (e, i) {
                return e ? "" === i ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(i) ? n[e.month()] : t[e.month()] : t
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT"
                    }
                }, lastDay: "[Wczoraj o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: translate,
                y: "rok",
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("pt", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("pt-br", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "poucos segundos",
                ss: "%d segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function relativeTimeWithPlural(e, t, n) {
            var i = {ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, a = " ";
            return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = " de "), e + a + i[n]
        }

        return e.defineLocale("ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                ss: relativeTimeWithPlural,
                m: "un minut",
                mm: relativeTimeWithPlural,
                h: "o oră",
                hh: relativeTimeWithPlural,
                d: "o zi",
                dd: relativeTimeWithPlural,
                M: "o lună",
                MM: relativeTimeWithPlural,
                y: "un an",
                yy: relativeTimeWithPlural
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }

        function relativeTimeWithPlural(e, t, n) {
            var i = {
                ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === n ? t ? "минута" : "минуту" : e + " " + plural(i[n], +e)
        }

        var t = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        return e.defineLocale("ru", {
            months: {
                format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
            },
            monthsShort: {
                format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
            },
            weekdays: {
                standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: t,
            longMonthsParse: t,
            shortMonthsParse: t,
            monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., H:mm",
                LLLL: "dddd, D MMMM YYYY г., H:mm"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd [в] LT"
                    }
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                ss: relativeTimeWithPlural,
                m: relativeTimeWithPlural,
                mm: relativeTimeWithPlural,
                h: "час",
                hh: relativeTimeWithPlural,
                d: "день",
                dd: relativeTimeWithPlural,
                M: "месяц",
                MM: relativeTimeWithPlural,
                y: "год",
                yy: relativeTimeWithPlural
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    case"w":
                    case"W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        return e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[اڄ] LT",
                nextDay: "[سڀاڻي] LT",
                nextWeek: "dddd [اڳين هفتي تي] LT",
                lastDay: "[ڪالهه] LT",
                lastWeek: "[گزريل هفتي] dddd [تي] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s پوء",
                past: "%s اڳ",
                s: "چند سيڪنڊ",
                ss: "%d سيڪنڊ",
                m: "هڪ منٽ",
                mm: "%d منٽ",
                h: "هڪ ڪلاڪ",
                hh: "%d ڪلاڪ",
                d: "هڪ ڏينهن",
                dd: "%d ڏينهن",
                M: "هڪ مهينو",
                MM: "%d مهينا",
                y: "هڪ سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("se", {
            months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
            monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
            weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "MMMM D. [b.] YYYY",
                LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
            },
            calendar: {
                sameDay: "[otne ti] LT",
                nextDay: "[ihttin ti] LT",
                nextWeek: "dddd [ti] LT",
                lastDay: "[ikte ti] LT",
                lastWeek: "[ovddit] dddd [ti] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s geažes",
                past: "maŋit %s",
                s: "moadde sekunddat",
                ss: "%d sekunddat",
                m: "okta minuhta",
                mm: "%d minuhtat",
                h: "okta diimmu",
                hh: "%d diimmut",
                d: "okta beaivi",
                dd: "%d beaivvit",
                M: "okta mánnu",
                MM: "%d mánut",
                y: "okta jahki",
                yy: "%d jagit"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("si", {
            months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
            monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
            weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "a h:mm",
                LTS: "a h:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY MMMM D",
                LLL: "YYYY MMMM D, a h:mm",
                LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
            },
            calendar: {
                sameDay: "[අද] LT[ට]",
                nextDay: "[හෙට] LT[ට]",
                nextWeek: "dddd LT[ට]",
                lastDay: "[ඊයේ] LT[ට]",
                lastWeek: "[පසුගිය] dddd LT[ට]",
                sameElse: "L"
            },
            relativeTime: {
                future: "%sකින්",
                past: "%sකට පෙර",
                s: "තත්පර කිහිපය",
                ss: "තත්පර %d",
                m: "මිනිත්තුව",
                mm: "මිනිත්තු %d",
                h: "පැය",
                hh: "පැය %d",
                d: "දිනය",
                dd: "දින %d",
                M: "මාසය",
                MM: "මාස %d",
                y: "වසර",
                yy: "වසර %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
                return e + " වැනි"
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
                return "ප.ව." === e || "පස් වරු" === e
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e) {
            return e > 1 && e < 5
        }

        function translate(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case"s":
                    return t || i ? "pár sekúnd" : "pár sekundami";
                case"ss":
                    return t || i ? a + (plural(e) ? "sekundy" : "sekúnd") : a + "sekundami";
                case"m":
                    return t ? "minúta" : i ? "minútu" : "minútou";
                case"mm":
                    return t || i ? a + (plural(e) ? "minúty" : "minút") : a + "minútami";
                case"h":
                    return t ? "hodina" : i ? "hodinu" : "hodinou";
                case"hh":
                    return t || i ? a + (plural(e) ? "hodiny" : "hodín") : a + "hodinami";
                case"d":
                    return t || i ? "deň" : "dňom";
                case"dd":
                    return t || i ? a + (plural(e) ? "dni" : "dní") : a + "dňami";
                case"M":
                    return t || i ? "mesiac" : "mesiacom";
                case"MM":
                    return t || i ? a + (plural(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
                case"y":
                    return t || i ? "rok" : "rokom";
                case"yy":
                    return t || i ? a + (plural(e) ? "roky" : "rokov") : a + "rokmi"
            }
        }

        var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                }, lastDay: "[včera o] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: translate,
                ss: translate,
                m: translate,
                mm: translate,
                h: translate,
                hh: translate,
                d: translate,
                dd: translate,
                M: translate,
                MM: translate,
                y: translate,
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = e + " ";
            switch (n) {
                case"s":
                    return t || i ? "nekaj sekund" : "nekaj sekundami";
                case"ss":
                    return a += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || i ? "sekundi" : "sekundah" : e < 5 ? t || i ? "sekunde" : "sekundah" : "sekund";
                case"m":
                    return t ? "ena minuta" : "eno minuto";
                case"mm":
                    return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : e < 5 ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami";
                case"h":
                    return t ? "ena ura" : "eno uro";
                case"hh":
                    return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : e < 5 ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami";
                case"d":
                    return t || i ? "en dan" : "enim dnem";
                case"dd":
                    return a += 1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi";
                case"M":
                    return t || i ? "en mesec" : "enim mesecem";
                case"MM":
                    return a += 1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : e < 5 ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci";
                case"y":
                    return t || i ? "eno leto" : "enim letom";
                case"yy":
                    return a += 1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : e < 5 ? t || i ? "leta" : "leti" : t || i ? "let" : "leti"
            }
        }

        return e.defineLocale("sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                }, sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "pred %s",
                s: processRelativeTime,
                ss: processRelativeTime,
                m: processRelativeTime,
                mm: processRelativeTime,
                h: processRelativeTime,
                hh: processRelativeTime,
                d: processRelativeTime,
                dd: processRelativeTime,
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("sq", {
            months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
            monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
                return "M" === e.charAt(0)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "PD" : "MD"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Sot në] LT",
                nextDay: "[Nesër në] LT",
                nextWeek: "dddd [në] LT",
                lastDay: "[Dje në] LT",
                lastWeek: "dddd [e kaluar në] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "në %s",
                past: "%s më parë",
                s: "disa sekonda",
                ss: "%d sekonda",
                m: "një minutë",
                mm: "%d minuta",
                h: "një orë",
                hh: "%d orë",
                d: "një ditë",
                dd: "%d ditë",
                M: "një muaj",
                MM: "%d muaj",
                y: "një vit",
                yy: "%d vite"
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["sekunda", "sekunde", "sekundi"],
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, i) {
                var a = t.words[i];
                return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        return e.defineLocale("sr", {
            months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
            monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
            monthsParseExact: !0,
            weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                }, lastDay: "[juče u] LT", lastWeek: function () {
                    return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "dan",
                dd: t.translate,
                M: "mesec",
                MM: t.translate,
                y: "godinu",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            words: {
                ss: ["секунда", "секунде", "секунди"],
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            }, correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
            }, translate: function (e, n, i) {
                var a = t.words[i];
                return 1 === i.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
            }
        };
        return e.defineLocale("sr-cyrl", {
            months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
            monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
            monthsParseExact: !0,
            weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY H:mm",
                LLLL: "dddd, D. MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                }, lastDay: "[јуче у] LT", lastWeek: function () {
                    return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
                }, sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                ss: t.translate,
                m: t.translate,
                mm: t.translate,
                h: t.translate,
                hh: t.translate,
                d: "дан",
                dd: t.translate,
                M: "месец",
                MM: t.translate,
                y: "годину",
                yy: t.translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("ss", {
            months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
            monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Namuhla nga] LT",
                nextDay: "[Kusasa nga] LT",
                nextWeek: "dddd [nga] LT",
                lastDay: "[Itolo nga] LT",
                lastWeek: "dddd [leliphelile] [nga] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "nga %s",
                past: "wenteka nga %s",
                s: "emizuzwana lomcane",
                ss: "%d mzuzwana",
                m: "umzuzu",
                mm: "%d emizuzu",
                h: "lihora",
                hh: "%d emahora",
                d: "lilanga",
                dd: "%d emalanga",
                M: "inyanga",
                MM: "%d tinyanga",
                y: "umnyaka",
                yy: "%d iminyaka"
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
                return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [kl.] HH:mm",
                LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "[På] dddd LT",
                lastWeek: "[I] dddd[s] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                ss: "%d sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("sw", {
            months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
            monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[leo saa] LT",
                nextDay: "[kesho saa] LT",
                nextWeek: "[wiki ijayo] dddd [saat] LT",
                lastDay: "[jana] LT",
                lastWeek: "[wiki iliyopita] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s baadaye",
                past: "tokea %s",
                s: "hivi punde",
                ss: "sekunde %d",
                m: "dakika moja",
                mm: "dakika %d",
                h: "saa limoja",
                hh: "masaa %d",
                d: "siku moja",
                dd: "masiku %d",
                M: "mwezi mmoja",
                MM: "miezi %d",
                y: "mwaka mmoja",
                yy: "miaka %d"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"},
            n = {"௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0"};
        return e.defineLocale("ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
            weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, HH:mm",
                LLLL: "dddd, D MMMM YYYY, HH:mm"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நேற்று] LT",
                lastWeek: "[கடந்த வாரம்] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்",
                s: "ஒரு சில விநாடிகள்",
                ss: "%d விநாடிகள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி நேரம்",
                d: "ஒரு நாள்",
                dd: "%d நாட்கள்",
                M: "ஒரு மாதம்",
                MM: "%d மாதங்கள்",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டுகள்"
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
                return e + "வது"
            },
            preparse: function (e) {
                return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return t[e]
                })
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
                return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
            },
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
            monthsParseExact: !0,
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
                LT: "A h:mm",
                LTS: "A h:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, A h:mm",
                LLLL: "dddd, D MMMM YYYY, A h:mm"
            },
            calendar: {
                sameDay: "[నేడు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[నిన్న] LT",
                lastWeek: "[గత] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s క్రితం",
                s: "కొన్ని క్షణాలు",
                ss: "%d సెకన్లు",
                m: "ఒక నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజులు",
                M: "ఒక నెల",
                MM: "%d నెలలు",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరాలు"
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
            },
            week: {dow: 0, doy: 6}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tet", {
            months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
            monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Ohin iha] LT",
                nextDay: "[Aban iha] LT",
                nextWeek: "dddd [iha] LT",
                lastDay: "[Horiseik iha] LT",
                lastWeek: "dddd [semana kotuk] [iha] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "iha %s",
                past: "%s liuba",
                s: "minutu balun",
                ss: "minutu %d",
                m: "minutu ida",
                mm: "minutus %d",
                h: "horas ida",
                hh: "horas %d",
                d: "loron ida",
                dd: "loron %d",
                M: "fulan ida",
                MM: "fulan %d",
                y: "tinan ida",
                yy: "tinan %d"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "H:mm",
                LTS: "H:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา H:mm",
                LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                ss: "%d วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tl-ph", {
            months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
            monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "MM/D/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY HH:mm",
                LLLL: "dddd, MMMM DD, YYYY HH:mm"
            },
            calendar: {
                sameDay: "LT [ngayong araw]",
                nextDay: "[Bukas ng] LT",
                nextWeek: "LT [sa susunod na] dddd",
                lastDay: "LT [kahapon]",
                lastWeek: "LT [noong nakaraang] dddd",
                sameElse: "L"
            },
            relativeTime: {
                future: "sa loob ng %s",
                past: "%s ang nakalipas",
                s: "ilang segundo",
                ss: "%d segundo",
                m: "isang minuto",
                mm: "%d minuto",
                h: "isang oras",
                hh: "%d oras",
                d: "isang araw",
                dd: "%d araw",
                M: "isang buwan",
                MM: "%d buwan",
                y: "isang taon",
                yy: "%d taon"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function translateFuture(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
        }

        function translatePast(e) {
            var t = e;
            return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
        }

        function translate(e, t, n, i) {
            var a = numberAsNoun(e);
            switch (n) {
                case"ss":
                    return a + " lup";
                case"mm":
                    return a + " tup";
                case"hh":
                    return a + " rep";
                case"dd":
                    return a + " jaj";
                case"MM":
                    return a + " jar";
                case"yy":
                    return a + " DIS"
            }
        }

        function numberAsNoun(e) {
            var n = Math.floor(e % 1e3 / 100), i = Math.floor(e % 100 / 10), a = e % 10, s = "";
            return n > 0 && (s += t[n] + "vatlh"), i > 0 && (s += ("" !== s ? " " : "") + t[i] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + t[a]), "" === s ? "pagh" : s
        }

        var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
        return e.defineLocale("tlh", {
            months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
            monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
            monthsParseExact: !0,
            weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[DaHjaj] LT",
                nextDay: "[wa’leS] LT",
                nextWeek: "LLL",
                lastDay: "[wa’Hu’] LT",
                lastWeek: "LLL",
                sameElse: "L"
            },
            relativeTime: {
                future: translateFuture,
                past: translatePast,
                s: "puS lup",
                ss: translate,
                m: "wa’ tup",
                mm: translate,
                h: "wa’ rep",
                hh: translate,
                d: "wa’ jaj",
                dd: translate,
                M: "wa’ jar",
                MM: translate,
                y: "wa’ DIS",
                yy: translate
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        return e.defineLocale("tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[gelecek] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                ss: "%d saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function (e) {
                if (0 === e) return e + "'ıncı";
                var n = e % 10, i = e % 100 - n, a = e >= 100 ? 100 : null;
                return e + (t[n] || t[i] || t[a])
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function processRelativeTime(e, t, n, i) {
            var a = {
                s: ["viensas secunds", "'iensas secunds"],
                ss: [e + " secunds", e + " secunds"],
                m: ["'n míut", "'iens míut"],
                mm: [e + " míuts", e + " míuts"],
                h: ["'n þora", "'iensa þora"],
                hh: [e + " þoras", e + " þoras"],
                d: ["'n ziua", "'iensa ziua"],
                dd: [e + " ziuas", e + " ziuas"],
                M: ["'n mes", "'iens mes"],
                MM: [e + " mesen", e + " mesen"],
                y: ["'n ar", "'iens ar"],
                yy: [e + " ars", e + " ars"]
            };
            return i ? a[n][0] : t ? a[n][0] : a[n][1]
        }

        return e.defineLocale("tzl", {
            months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
            monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM [dallas] YYYY",
                LLL: "D. MMMM [dallas] YYYY HH.mm",
                LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
                return "d'o" === e.toLowerCase()
            },
            meridiem: function (e, t, n) {
                return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
            },
            calendar: {
                sameDay: "[oxhi à] LT",
                nextDay: "[demà à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[ieiri à] LT",
                lastWeek: "[sür el] dddd [lasteu à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "osprei %s",
                past: "ja%s",
                s: processRelativeTime,
                ss: processRelativeTime,
                m: processRelativeTime,
                mm: processRelativeTime,
                h: processRelativeTime,
                hh: processRelativeTime,
                d: processRelativeTime,
                dd: processRelativeTime,
                M: processRelativeTime,
                MM: processRelativeTime,
                y: processRelativeTime,
                yy: processRelativeTime
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tzm", {
            months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                nextWeek: "dddd [ⴴ] LT",
                lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                lastWeek: "dddd [ⴴ] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                past: "ⵢⴰⵏ %s",
                s: "ⵉⵎⵉⴽ",
                ss: "%d ⵉⵎⵉⴽ",
                m: "ⵎⵉⵏⵓⴺ",
                mm: "%d ⵎⵉⵏⵓⴺ",
                h: "ⵙⴰⵄⴰ",
                hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                d: "ⴰⵙⵙ",
                dd: "%d oⵙⵙⴰⵏ",
                M: "ⴰⵢoⵓⵔ",
                MM: "%d ⵉⵢⵢⵉⵔⵏ",
                y: "ⴰⵙⴳⴰⵙ",
                yy: "%d ⵉⵙⴳⴰⵙⵏ"
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("tzm-latn", {
            months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[asdkh g] LT",
                nextDay: "[aska g] LT",
                nextWeek: "dddd [g] LT",
                lastDay: "[assant g] LT",
                lastWeek: "dddd [g] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dadkh s yan %s",
                past: "yan %s",
                s: "imik",
                ss: "%d imik",
                m: "minuḍ",
                mm: "%d minuḍ",
                h: "saɛa",
                hh: "%d tassaɛin",
                d: "ass",
                dd: "%d ossan",
                M: "ayowr",
                MM: "%d iyyirn",
                y: "asgas",
                yy: "%d isgasn"
            },
            week: {dow: 6, doy: 12}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";

        function plural(e, t) {
            var n = e.split("_");
            return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
        }

        function relativeTimeWithPlural(e, t, n) {
            var i = {
                ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                hh: t ? "година_години_годин" : "годину_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + plural(i[n], +e)
        }

        function weekdaysCaseReplace(e, t) {
            var n = {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            };
            return e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : n.nominative
        }

        function processHoursFunction(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }

        return e.defineLocale("uk", {
            months: {
                format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
            },
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: weekdaysCaseReplace,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., HH:mm",
                LLLL: "dddd, D MMMM YYYY р., HH:mm"
            },
            calendar: {
                sameDay: processHoursFunction("[Сьогодні "),
                nextDay: processHoursFunction("[Завтра "),
                lastDay: processHoursFunction("[Вчора "),
                nextWeek: processHoursFunction("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return processHoursFunction("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return processHoursFunction("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                ss: relativeTimeWithPlural,
                m: relativeTimeWithPlural,
                mm: relativeTimeWithPlural,
                h: "годину",
                hh: relativeTimeWithPlural,
                d: "день",
                dd: relativeTimeWithPlural,
                M: "місяць",
                MM: relativeTimeWithPlural,
                y: "рік",
                yy: relativeTimeWithPlural
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"M":
                    case"d":
                    case"DDD":
                    case"w":
                    case"W":
                        return e + "-й";
                    case"D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        return e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd، D MMMM YYYY HH:mm"
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
                return "شام" === e
            },
            meridiem: function (e, t, n) {
                return e < 12 ? "صبح" : "شام"
            },
            calendar: {
                sameDay: "[آج بوقت] LT",
                nextDay: "[کل بوقت] LT",
                nextWeek: "dddd [بوقت] LT",
                lastDay: "[گذشتہ روز بوقت] LT",
                lastWeek: "[گذشتہ] dddd [بوقت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s بعد",
                past: "%s قبل",
                s: "چند سیکنڈ",
                ss: "%d سیکنڈ",
                m: "ایک منٹ",
                mm: "%d منٹ",
                h: "ایک گھنٹہ",
                hh: "%d گھنٹے",
                d: "ایک دن",
                dd: "%d دن",
                M: "ایک ماہ",
                MM: "%d ماہ",
                y: "ایک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/,/g, "،")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("uz", {
            months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
            monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Бугун соат] LT [да]",
                nextDay: "[Эртага] LT [да]",
                nextWeek: "dddd [куни соат] LT [да]",
                lastDay: "[Кеча соат] LT [да]",
                lastWeek: "[Утган] dddd [куни соат] LT [да]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Якин %s ичида",
                past: "Бир неча %s олдин",
                s: "фурсат",
                ss: "%d фурсат",
                m: "бир дакика",
                mm: "%d дакика",
                h: "бир соат",
                hh: "%d соат",
                d: "бир кун",
                dd: "%d кун",
                M: "бир ой",
                MM: "%d ой",
                y: "бир йил",
                yy: "%d йил"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("uz-latn", {
            months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
            monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "D MMMM YYYY, dddd HH:mm"
            },
            calendar: {
                sameDay: "[Bugun soat] LT [da]",
                nextDay: "[Ertaga] LT [da]",
                nextWeek: "dddd [kuni soat] LT [da]",
                lastDay: "[Kecha soat] LT [da]",
                lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                sameElse: "L"
            },
            relativeTime: {
                future: "Yaqin %s ichida",
                past: "Bir necha %s oldin",
                s: "soniya",
                ss: "%d soniya",
                m: "bir daqiqa",
                mm: "%d daqiqa",
                h: "bir soat",
                hh: "%d soat",
                d: "bir kun",
                dd: "%d kun",
                M: "bir oy",
                MM: "%d oy",
                y: "bir yil",
                yy: "%d yil"
            },
            week: {dow: 1, doy: 7}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            monthsParseExact: !0,
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
                return /^ch$/i.test(e)
            },
            meridiem: function (e, t, n) {
                return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
            },
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY HH:mm",
                LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY HH:mm",
                llll: "ddd, D MMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                ss: "%d giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("x-pseudo", {
            months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
            monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
            monthsParseExact: !0,
            weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
                LT: "HH:mm",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY HH:mm",
                LLLL: "dddd, D MMMM YYYY HH:mm"
            },
            calendar: {
                sameDay: "[T~ódá~ý át] LT",
                nextDay: "[T~ómó~rró~w át] LT",
                nextWeek: "dddd [át] LT",
                lastDay: "[Ý~ést~érdá~ý át] LT",
                lastWeek: "[L~ást] dddd [át] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "í~ñ %s",
                past: "%s á~gó",
                s: "á ~féw ~sécó~ñds",
                ss: "%d s~écóñ~ds",
                m: "á ~míñ~úté",
                mm: "%d m~íñú~tés",
                h: "á~ñ hó~úr",
                hh: "%d h~óúrs",
                d: "á ~dáý",
                dd: "%d d~áýs",
                M: "á ~móñ~th",
                MM: "%d m~óñt~hs",
                y: "á ~ýéár",
                yy: "%d ý~éárs"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("yo", {
            months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
            monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY h:mm A",
                LLLL: "dddd, D MMMM YYYY h:mm A"
            },
            calendar: {
                sameDay: "[Ònì ni] LT",
                nextDay: "[Ọ̀la ni] LT",
                nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                lastDay: "[Àna ni] LT",
                lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "ní %s",
                past: "%s kọjá",
                s: "ìsẹjú aayá die",
                ss: "aayá %d",
                m: "ìsẹjú kan",
                mm: "ìsẹjú %d",
                h: "wákati kan",
                hh: "wákati %d",
                d: "ọjọ́ kan",
                dd: "ọjọ́ %d",
                M: "osù kan",
                MM: "osù %d",
                y: "ọdún kan",
                yy: "ọdún %d"
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("zh-cn", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日Ah点mm分",
                LLLL: "YYYY年M月D日ddddAh点mm分",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t, n) {
                var i = 100 * e + t;
                return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                ss: "%d 秒",
                m: "1 分钟",
                mm: "%d 分钟",
                h: "1 小时",
                hh: "%d 小时",
                d: "1 天",
                dd: "%d 天",
                M: "1 个月",
                MM: "%d 个月",
                y: "1 年",
                yy: "%d 年"
            },
            week: {dow: 1, doy: 4}
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("zh-hk", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var i = 100 * e + t;
                return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })
}, function (e, t, n) {
    !function (e, t) {
        t(n(0))
    }(0, function (e) {
        "use strict";
        return e.defineLocale("zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日 HH:mm",
                LLLL: "YYYY年M月D日dddd HH:mm",
                l: "YYYY/M/D",
                ll: "YYYY年M月D日",
                lll: "YYYY年M月D日 HH:mm",
                llll: "YYYY年M月D日dddd HH:mm"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t, n) {
                var i = 100 * e + t;
                return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case"d":
                    case"D":
                    case"DDD":
                        return e + "日";
                    case"M":
                        return e + "月";
                    case"w":
                    case"W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                ss: "%d 秒",
                m: "1 分鐘",
                mm: "%d 分鐘",
                h: "1 小時",
                hh: "%d 小時",
                d: "1 天",
                dd: "%d 天",
                M: "1 個月",
                MM: "%d 個月",
                y: "1 年",
                yy: "%d 年"
            }
        })
    })
}, function (e, t, n) {
    "use strict";
    var i = n(1), a = function (e) {
        return e && e.__esModule ? e : {default: e}
    }(i);
    n(122), n(126), n(129), n(130), n(131), n(132), n(133), n(135), n(137), n(138), (0, a.default)(document).ready(function () {
        console.log("main js")
    })
}, function (e, t, n) {
    "use strict";
    n(123), n(124), n(125), console.log("bootstrap js")
}, function (e, t, n) {
    (function (e) {
        +function (e) {
            "use strict";

            function getTargetFromTrigger(t) {
                var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                return e(i)
            }

            function Plugin(n) {
                return this.each(function () {
                    var i = e(this), a = i.data("bs.collapse"),
                        s = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
                    !a && s.toggle && /show|hide/.test(n) && (s.toggle = !1), a || i.data("bs.collapse", a = new t(this, s)), "string" == typeof n && a[n]()
                })
            }

            var t = function (n, i) {
                this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.$trigger = e('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
            };
            t.VERSION = "3.3.7", t.TRANSITION_DURATION = 350, t.DEFAULTS = {toggle: !0}, t.prototype.dimension = function () {
                return this.$element.hasClass("width") ? "width" : "height"
            }, t.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(i && i.length && (n = i.data("bs.collapse")) && n.transitioning)) {
                        var a = e.Event("show.bs.collapse");
                        if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                            i && i.length && (Plugin.call(i, "hide"), n || i.data("bs.collapse", null));
                            var s = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var r = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                            };
                            if (!e.support.transition) return r.call(this);
                            var o = e.camelCase(["scroll", s].join("-"));
                            this.$element.one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[s](this.$element[0][o])
                        }
                    }
                }
            }, t.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var n = e.Event("hide.bs.collapse");
                    if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                        var i = this.dimension();
                        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var a = function () {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        if (!e.support.transition) return a.call(this);
                        this.$element[i](0).one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
                    }
                }
            }, t.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }, t.prototype.getParent = function () {
                return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function (t, n) {
                    var i = e(n);
                    this.addAriaAndCollapsedClass(getTargetFromTrigger(i), i)
                }, this)).end()
            }, t.prototype.addAriaAndCollapsedClass = function (e, t) {
                var n = e.hasClass("in");
                e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
            };
            var n = e.fn.collapse;
            e.fn.collapse = Plugin, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
                return e.fn.collapse = n, this
            }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
                var n = e(this);
                n.attr("data-target") || t.preventDefault();
                var i = getTargetFromTrigger(n), a = i.data("bs.collapse"), s = a ? "toggle" : n.data();
                Plugin.call(i, s)
            })
        }(e)
    }).call(t, n(1))
}, function (e, t, n) {
    (function (e) {
        +function (e) {
            "use strict";

            function getParent(t) {
                var n = t.attr("data-target");
                n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var i = n && e(n);
                return i && i.length ? i : t.parent()
            }

            function clearMenus(i) {
                i && 3 === i.which || (e(t).remove(), e(n).each(function () {
                    var t = e(this), n = getParent(t), a = {relatedTarget: this};
                    n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && e.contains(n[0], i.target) || (n.trigger(i = e.Event("hide.bs.dropdown", a)), i.isDefaultPrevented() || (t.attr("aria-expanded", "false"), n.removeClass("open").trigger(e.Event("hidden.bs.dropdown", a)))))
                }))
            }

            function Plugin(t) {
                return this.each(function () {
                    var n = e(this), a = n.data("bs.dropdown");
                    a || n.data("bs.dropdown", a = new i(this)), "string" == typeof t && a[t].call(n)
                })
            }

            var t = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', i = function (t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
            i.VERSION = "3.3.7", i.prototype.toggle = function (t) {
                var n = e(this);
                if (!n.is(".disabled, :disabled")) {
                    var i = getParent(n), a = i.hasClass("open");
                    if (clearMenus(), !a) {
                        "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", clearMenus);
                        var s = {relatedTarget: this};
                        if (i.trigger(t = e.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
                        n.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
                    }
                    return !1
                }
            }, i.prototype.keydown = function (t) {
                if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                    var i = e(this);
                    if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                        var a = getParent(i), s = a.hasClass("open");
                        if (!s && 27 != t.which || s && 27 == t.which) return 27 == t.which && a.find(n).trigger("focus"), i.trigger("click");
                        var r = a.find(".dropdown-menu li:not(.disabled):visible a");
                        if (r.length) {
                            var o = r.index(t.target);
                            38 == t.which && o > 0 && o--, 40 == t.which && o < r.length - 1 && o++, ~o || (o = 0), r.eq(o).trigger("focus")
                        }
                    }
                }
            };
            var a = e.fn.dropdown;
            e.fn.dropdown = Plugin, e.fn.dropdown.Constructor = i, e.fn.dropdown.noConflict = function () {
                return e.fn.dropdown = a, this
            }, e(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
                e.stopPropagation()
            }).on("click.bs.dropdown.data-api", n, i.prototype.toggle).on("keydown.bs.dropdown.data-api", n, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
        }(e)
    }).call(t, n(1))
}, function (e, t, n) {
    (function (e) {
        +function (e) {
            "use strict";

            function transitionEnd() {
                var e = document.createElement("bootstrap"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in t) if (void 0 !== e.style[n]) return {end: t[n]};
                return !1
            }

            e.fn.emulateTransitionEnd = function (t) {
                var n = !1, i = this;
                e(this).one("bsTransitionEnd", function () {
                    n = !0
                });
                var a = function () {
                    n || e(i).trigger(e.support.transition.end)
                };
                return setTimeout(a, t), this
            }, e(function () {
                e.support.transition = transitionEnd(), e.support.transition && (e.event.special.bsTransitionEnd = {
                    bindType: e.support.transition.end,
                    delegateType: e.support.transition.end,
                    handle: function (t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                })
            })
        }(e)
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var t = n(127), i = _interopRequireDefault(t), a = n(128), s = _interopRequireDefault(a), r = function () {
            var e = document.querySelectorAll(".pswp")[0],
                t = [{src: "images/content-slider-image.jpg", w: 1210, h: 480}, {
                    src: "images/cover-image-1.jpg",
                    w: 1440,
                    h: 360
                }, {src: "images/fixed-slider-image.jpg", w: 1440, h: 600}],
                n = {history: !1, focus: !1, arrowKeys: !0, showAnimationDuration: 0, hideAnimationDuration: 0};
            new i.default(e, s.default, t, n).init()
        };
        e(".gallery__img").click(function (e) {
            e.preventDefault(), r()
        })
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    var i, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (s, r) {
        i = r, void 0 !== (a = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = a)
    }(0, function () {
        return function (e, t, n, i) {
            var a = {
                features: null, bind: function (e, t, n, i) {
                    var a = (i ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var s = 0; s < t.length; s++) t[s] && e[a](t[s], n, !1)
                }, isArray: function (e) {
                    return e instanceof Array
                }, createEl: function (e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n
                }, getScrollY: function () {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                }, unbind: function (e, t, n) {
                    a.bind(e, t, n, !0)
                }, removeClass: function (e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                }, addClass: function (e, t) {
                    a.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                }, hasClass: function (e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                }, getChildByClass: function (e, t) {
                    for (var n = e.firstChild; n;) {
                        if (a.hasClass(n, t)) return n;
                        n = n.nextSibling
                    }
                }, arraySearch: function (e, t, n) {
                    for (var i = e.length; i--;) if (e[i][n] === t) return i;
                    return -1
                }, extend: function (e, t, n) {
                    for (var i in t) if (t.hasOwnProperty(i)) {
                        if (n && e.hasOwnProperty(i)) continue;
                        e[i] = t[i]
                    }
                }, easing: {
                    sine: {
                        out: function (e) {
                            return Math.sin(e * (Math.PI / 2))
                        }, inOut: function (e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    }, cubic: {
                        out: function (e) {
                            return --e * e * e + 1
                        }
                    }
                }, detectFeatures: function () {
                    if (a.features) return a.features;
                    var e = a.createEl(), t = e.style, n = "", i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var s = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && r < 8 && (i.isOldIOSPhone = !0)
                        }
                        var o = s.match(/Android\s([0-9\.]*)/), l = o ? o[1] : 0;
                        l = parseFloat(l), l >= 1 && (l < 4.4 && (i.isOldAndroid = !0), i.androidVersion = l), i.isMobileOpera = /opera mini|opera mobi/i.test(s)
                    }
                    for (var d, u, c = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], m = 0; m < 4; m++) {
                        n = h[m];
                        for (var p = 0; p < 3; p++) d = c[p], u = n + (n ? d.charAt(0).toUpperCase() + d.slice(1) : d), !i[d] && u in t && (i[d] = u);
                        n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var f = 0;
                        i.raf = function (e) {
                            var t = (new Date).getTime(), n = Math.max(0, 16 - (t - f)),
                                i = window.setTimeout(function () {
                                    e(t + n)
                                }, n);
                            return f = t + n, i
                        }, i.caf = function (e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, a.features = i, i
                }
            };
            a.detectFeatures(), a.features.oldIE && (a.bind = function (e, t, n, i) {
                t = t.split(" ");
                for (var a, r = (i ? "detach" : "attach") + "Event", o = function () {
                    n.handleEvent.call(n)
                }, l = 0; l < t.length; l++) if (a = t[l]) if ("object" === (void 0 === n ? "undefined" : s(n)) && n.handleEvent) {
                    if (i) {
                        if (!n["oldIE" + a]) return !1
                    } else n["oldIE" + a] = o;
                    e[r]("on" + a, n["oldIE" + a])
                } else e[r]("on" + a, n)
            });
            var r = this, o = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function (e) {
                    return "A" === e.tagName
                },
                getDoubleTapZoom: function (e, t) {
                    return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
            a.extend(o, i);
            var l, d, u, c, h, m, p, f, _, y, g, M, v, k, L, w, Y, T, D, b, S, x, C, H, j, A, P, O, E, F, $, W, I, R, z,
                N, U, q, B, G, J, V, Z, K, X, Q, ee, te, ne, ie, ae, se, re, oe, le, de, ue, ce = function () {
                    return {x: 0, y: 0}
                }, he = ce(), me = ce(), pe = ce(), fe = {}, _e = 0, ye = {}, ge = ce(), Me = 0, ve = !0, ke = [], Le = {},
                we = !1, Ye = function (e, t) {
                    a.extend(r, t.publicMethods), ke.push(e)
                }, Te = function (e) {
                    var t = Kt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e
                }, De = {}, be = function (e, t) {
                    return De[e] || (De[e] = []), De[e].push(t)
                }, Se = function (e) {
                    var t = De[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var i = 0; i < t.length; i++) t[i].apply(r, n)
                    }
                }, xe = function () {
                    return (new Date).getTime()
                }, Ce = function (e) {
                    le = e, r.bg.style.opacity = e * o.bgOpacity
                }, He = function (e, t, n, i, a) {
                    (!we || a && a !== r.currItem) && (i /= a ? a.fitRatio : r.currItem.fitRatio), e[x] = M + t + "px, " + n + "px" + v + " scale(" + i + ")"
                }, je = function (e) {
                    ie && (e && (y > r.currItem.fitRatio ? we || (un(r.currItem, !1, !0), we = !0) : we && (un(r.currItem), we = !1)), He(ie, pe.x, pe.y, y))
                }, Ae = function (e) {
                    e.container && He(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                }, Pe = function (e, t) {
                    t[x] = M + e + "px, 0px" + v
                }, Oe = function (e, t) {
                    if (!o.loop && t) {
                        var n = c + (ge.x * _e - e) / ge.x, i = Math.round(e - _t.x);
                        (n < 0 && i > 0 || n >= Kt() - 1 && i < 0) && (e = _t.x + i * o.mainScrollEndFriction)
                    }
                    _t.x = e, Pe(e, h)
                }, Ee = function (e, t) {
                    var n = yt[e] - ye[e];
                    return me[e] + he[e] + n - n * (t / g)
                }, Fe = function (e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                }, $e = function (e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                }, We = null, Ie = function _onFirstMouseMove() {
                    We && (a.unbind(document, "mousemove", _onFirstMouseMove), a.addClass(e, "pswp--has_mouse"), o.mouseUsed = !0, Se("mouseUsed")), We = setTimeout(function () {
                        We = null
                    }, 100)
                }, Re = function () {
                    a.bind(document, "keydown", r), $.transform && a.bind(r.scrollWrap, "click", r), o.mouseUsed || a.bind(document, "mousemove", Ie), a.bind(window, "resize scroll orientationchange", r), Se("bindEvents")
                }, ze = function () {
                    a.unbind(window, "resize scroll orientationchange", r), a.unbind(window, "scroll", _.scroll), a.unbind(document, "keydown", r), a.unbind(document, "mousemove", Ie), $.transform && a.unbind(r.scrollWrap, "click", r), B && a.unbind(window, p, r), clearTimeout(W), Se("unbindEvents")
                }, Ne = function (e, t) {
                    var n = rn(r.currItem, fe, e);
                    return t && (ne = n), n
                }, Ue = function (e) {
                    return e || (e = r.currItem), e.initialZoomLevel
                }, qe = function (e) {
                    return e || (e = r.currItem), e.w > 0 ? o.maxSpreadZoom : 1
                }, Be = function (e, t, n, i) {
                    return i === r.currItem.initialZoomLevel ? (n[e] = r.currItem.initialPosition[e], !0) : (n[e] = Ee(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
                }, Ge = function () {
                    if (x) {
                        var t = $.perspective && !H;
                        return M = "translate" + (t ? "3d(" : "("), void(v = $.perspective ? ", 0px)" : ")")
                    }
                    x = "left", a.addClass(e, "pswp--ie"), Pe = function (e, t) {
                        t.left = e + "px"
                    }, Ae = function (e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, i = t * e.w, a = t * e.h;
                        n.width = i + "px", n.height = a + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
                    }, je = function () {
                        if (ie) {
                            var e = ie, t = r.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, i = n * t.w, a = n * t.h;
                            e.width = i + "px", e.height = a + "px", e.left = pe.x + "px", e.top = pe.y + "px"
                        }
                    }
                }, Je = function (e) {
                    var t = "";
                    o.escKey && 27 === e.keyCode ? t = "close" : o.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                }, Ve = function (e) {
                    e && (V || J || ae || U) && (e.preventDefault(), e.stopPropagation())
                }, Ze = function () {
                    r.setScrollOffset(0, a.getScrollY())
                }, Ke = {}, Xe = 0, Qe = function (e) {
                    Ke[e] && (Ke[e].raf && A(Ke[e].raf), Xe--, delete Ke[e])
                }, et = function (e) {
                    Ke[e] && Qe(e), Ke[e] || (Xe++, Ke[e] = {})
                }, tt = function () {
                    for (var e in Ke) Ke.hasOwnProperty(e) && Qe(e)
                }, nt = function (e, t, n, i, a, s, r) {
                    var o, l = xe();
                    et(e);
                    !function animloop() {
                        if (Ke[e]) {
                            if ((o = xe() - l) >= i) return Qe(e), s(n), void(r && r());
                            s((n - t) * a(o / i) + t), Ke[e].raf = j(animloop)
                        }
                    }()
                }, it = {
                    shout: Se, listen: be, viewportSize: fe, options: o, isMainScrollAnimating: function () {
                        return ae
                    }, getZoomLevel: function () {
                        return y
                    }, getCurrentIndex: function () {
                        return c
                    }, isDragging: function () {
                        return B
                    }, isZooming: function () {
                        return Q
                    }, setScrollOffset: function (e, t) {
                        ye.x = e, F = ye.y = t, Se("updateScrollOffset", ye)
                    }, applyZoomPan: function (e, t, n, i) {
                        pe.x = t, pe.y = n, y = e, je(i)
                    }, init: function () {
                        if (!l && !d) {
                            var n;
                            r.framework = a, r.template = e, r.bg = a.getChildByClass(e, "pswp__bg"), P = e.className, l = !0, $ = a.detectFeatures(), j = $.raf, A = $.caf, x = $.transform, E = $.oldIE, r.scrollWrap = a.getChildByClass(e, "pswp__scroll-wrap"), r.container = a.getChildByClass(r.scrollWrap, "pswp__container"), h = r.container.style, r.itemHolders = w = [{
                                el: r.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {el: r.container.children[1], wrap: 0, index: -1}, {
                                el: r.container.children[2],
                                wrap: 0,
                                index: -1
                            }], w[0].el.style.display = w[2].el.style.display = "none", Ge(), _ = {
                                resize: r.updateSize,
                                orientationchange: function () {
                                    clearTimeout(W), W = setTimeout(function () {
                                        fe.x !== r.scrollWrap.clientWidth && r.updateSize()
                                    }, 500)
                                },
                                scroll: Ze,
                                keydown: Je,
                                click: Ve
                            };
                            var i = $.isOldIOSPhone || $.isOldAndroid || $.isMobileOpera;
                            for ($.animationName && $.transform && !i || (o.showAnimationDuration = o.hideAnimationDuration = 0), n = 0; n < ke.length; n++) r["init" + ke[n]]();
                            if (t) {
                                (r.ui = new t(r, a)).init()
                            }
                            Se("firstUpdate"), c = c || o.index || 0, (isNaN(c) || c < 0 || c >= Kt()) && (c = 0), r.currItem = Zt(c), ($.isOldIOSPhone || $.isOldAndroid) && (ve = !1), e.setAttribute("aria-hidden", "false"), o.modal && (ve ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = a.getScrollY() + "px")), void 0 === F && (Se("initialLayout"), F = O = a.getScrollY());
                            var s = "pswp--open ";
                            for (o.mainClass && (s += o.mainClass + " "), o.showHideOpacity && (s += "pswp--animate_opacity "), s += H ? "pswp--touch" : "pswp--notouch", s += $.animationName ? " pswp--css_animation" : "", s += $.svg ? " pswp--svg" : "", a.addClass(e, s), r.updateSize(), m = -1, Me = null, n = 0; n < 3; n++) Pe((n + m) * ge.x, w[n].el.style);
                            E || a.bind(r.scrollWrap, f, r), be("initialZoomInEnd", function () {
                                r.setContent(w[0], c - 1), r.setContent(w[2], c + 1), w[0].el.style.display = w[2].el.style.display = "block", o.focus && e.focus(), Re()
                            }), r.setContent(w[1], c), r.updateCurrItem(), Se("afterInit"), ve || (k = setInterval(function () {
                                Xe || B || Q || y !== r.currItem.initialZoomLevel || r.updateSize()
                            }, 1e3)), a.addClass(e, "pswp--visible")
                        }
                    }, close: function () {
                        l && (l = !1, d = !0, Se("close"), ze(), Qt(r.currItem, null, !0, r.destroy))
                    }, destroy: function () {
                        Se("destroy"), Bt && clearTimeout(Bt), e.setAttribute("aria-hidden", "true"), e.className = P, k && clearInterval(k), a.unbind(r.scrollWrap, f, r), a.unbind(window, "scroll", r), Lt(), tt(), De = null
                    }, panTo: function (e, t, n) {
                        n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), pe.x = e, pe.y = t, je()
                    }, handleEvent: function (e) {
                        e = e || window.event, _[e.type] && _[e.type](e)
                    }, goTo: function (e) {
                        e = Te(e);
                        var t = e - c;
                        Me = t, c = e, r.currItem = Zt(c), _e -= t, Oe(ge.x * _e), tt(), ae = !1, r.updateCurrItem()
                    }, next: function () {
                        r.goTo(c + 1)
                    }, prev: function () {
                        r.goTo(c - 1)
                    }, updateCurrZoomItem: function (e) {
                        if (e && Se("beforeChange", 0), w[1].el.children.length) {
                            var t = w[1].el.children[0];
                            ie = a.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else ie = null;
                        ne = r.currItem.bounds, g = y = r.currItem.initialZoomLevel, pe.x = ne.center.x, pe.y = ne.center.y, e && Se("afterChange")
                    }, invalidateCurrItems: function () {
                        L = !0;
                        for (var e = 0; e < 3; e++) w[e].item && (w[e].item.needsUpdate = !0)
                    }, updateCurrItem: function (e) {
                        if (0 !== Me) {
                            var t, n = Math.abs(Me);
                            if (!(e && n < 2)) {
                                r.currItem = Zt(c), we = !1, Se("beforeChange", Me), n >= 3 && (m += Me + (Me > 0 ? -3 : 3), n = 3);
                                for (var i = 0; i < n; i++) Me > 0 ? (t = w.shift(), w[2] = t, m++, Pe((m + 2) * ge.x, t.el.style), r.setContent(t, c - n + i + 1 + 1)) : (t = w.pop(), w.unshift(t), m--, Pe(m * ge.x, t.el.style), r.setContent(t, c + n - i - 1 - 1));
                                if (ie && 1 === Math.abs(Me)) {
                                    var a = Zt(Y);
                                    a.initialZoomLevel !== y && (rn(a, fe), un(a), Ae(a))
                                }
                                Me = 0, r.updateCurrZoomItem(), Y = c, Se("afterChange")
                            }
                        }
                    }, updateSize: function (t) {
                        if (!ve && o.modal) {
                            var n = a.getScrollY();
                            if (F !== n && (e.style.top = n + "px", F = n), !t && Le.x === window.innerWidth && Le.y === window.innerHeight) return;
                            Le.x = window.innerWidth, Le.y = window.innerHeight, e.style.height = Le.y + "px"
                        }
                        if (fe.x = r.scrollWrap.clientWidth, fe.y = r.scrollWrap.clientHeight, Ze(), ge.x = fe.x + Math.round(fe.x * o.spacing), ge.y = fe.y, Oe(ge.x * _e), Se("beforeResize"), void 0 !== m) {
                            for (var i, s, l, d = 0; d < 3; d++) i = w[d], Pe((d + m) * ge.x, i.el.style), l = c + d - 1, o.loop && Kt() > 2 && (l = Te(l)), s = Zt(l), s && (L || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(i, l), 1 === d && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === i.index && l >= 0 && r.setContent(i, l), s && s.container && (rn(s, fe), un(s), Ae(s));
                            L = !1
                        }
                        g = y = r.currItem.initialZoomLevel, ne = r.currItem.bounds, ne && (pe.x = ne.center.x, pe.y = ne.center.y, je(!0)), Se("resize")
                    }, zoomTo: function (e, t, n, i, s) {
                        t && (g = y, yt.x = Math.abs(t.x) - pe.x, yt.y = Math.abs(t.y) - pe.y, Fe(me, pe));
                        var r = Ne(e, !1), o = {};
                        Be("x", r, o, e), Be("y", r, o, e);
                        var l = y, d = {x: pe.x, y: pe.y};
                        $e(o);
                        var u = function (t) {
                            1 === t ? (y = e, pe.x = o.x, pe.y = o.y) : (y = (e - l) * t + l, pe.x = (o.x - d.x) * t + d.x, pe.y = (o.y - d.y) * t + d.y), s && s(t), je(1 === t)
                        };
                        n ? nt("customZoomTo", 0, 1, n, i || a.easing.sine.inOut, u) : u(1)
                    }
                }, at = {}, st = {}, rt = {}, ot = {}, lt = {}, dt = [], ut = {}, ct = [], ht = {}, mt = 0, pt = ce(),
                ft = 0, _t = ce(), yt = ce(), gt = ce(), Mt = function (e, t) {
                    return e.x === t.x && e.y === t.y
                }, vt = function (e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                }, kt = function (e, t) {
                    return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y)
                }, Lt = function () {
                    Z && (A(Z), Z = null)
                }, wt = function _dragUpdateLoop() {
                    B && (Z = j(_dragUpdateLoop), Wt())
                }, Yt = function () {
                    return !("fit" === o.scaleMode && y === r.currItem.initialZoomLevel)
                }, Tt = function _closestElement(e, t) {
                    return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : _closestElement(e.parentNode, t)))
                }, Dt = {}, bt = function (e, t) {
                    return Dt.prevent = !Tt(e.target, o.isClickableElement), Se("preventDragEvent", e, t, Dt), Dt.prevent
                }, St = function (e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                }, xt = function (e, t, n) {
                    n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
                }, Ct = function (e, t, n) {
                    if (e - R > 50) {
                        var i = ct.length > 2 ? ct.shift() : {};
                        i.x = t, i.y = n, ct.push(i), R = e
                    }
                }, Ht = function () {
                    var e = pe.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (fe.y / 2))
                }, jt = {}, At = {}, Pt = [], Ot = function (e) {
                    for (; Pt.length > 0;) Pt.pop();
                    return C ? (ue = 0, dt.forEach(function (e) {
                        0 === ue ? Pt[0] = e : 1 === ue && (Pt[1] = e), ue++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Pt[0] = St(e.touches[0], jt), e.touches.length > 1 && (Pt[1] = St(e.touches[1], At))) : (jt.x = e.pageX, jt.y = e.pageY, jt.id = "", Pt[0] = jt), Pt
                }, Et = function (e, t) {
                    var n, i, a, s, l = pe[e] + t[e], d = t[e] > 0, u = _t.x + t.x, c = _t.x - ut.x;
                    if (n = l > ne.min[e] || l < ne.max[e] ? o.panEndFriction : 1, l = pe[e] + t[e] * n, (o.allowPanToNext || y === r.currItem.initialZoomLevel) && (ie ? "h" !== se || "x" !== e || J || (d ? (l > ne.min[e] && (n = o.panEndFriction, ne.min[e] - l, i = ne.min[e] - me[e]), (i <= 0 || c < 0) && Kt() > 1 ? (s = u, c < 0 && u > ut.x && (s = ut.x)) : ne.min.x !== ne.max.x && (a = l)) : (l < ne.max[e] && (n = o.panEndFriction, l - ne.max[e], i = me[e] - ne.max[e]), (i <= 0 || c > 0) && Kt() > 1 ? (s = u, c > 0 && u < ut.x && (s = ut.x)) : ne.min.x !== ne.max.x && (a = l))) : s = u, "x" === e)) return void 0 !== s && (Oe(s, !0), K = s !== ut.x), ne.min.x !== ne.max.x && (void 0 !== a ? pe.x = a : K || (pe.x += t.x * n)), void 0 !== s;
                    ae || K || y > r.currItem.fitRatio && (pe[e] += t[e] * n)
                }, Ft = function (e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Vt) return void e.preventDefault();
                        if (!q || "mousedown" !== e.type) {
                            if (bt(e, !0) && e.preventDefault(), Se("pointerDown"), C) {
                                var t = a.arraySearch(dt, e.pointerId, "id");
                                t < 0 && (t = dt.length), dt[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
                            }
                            var n = Ot(e), i = n.length;
                            X = null, tt(), B && 1 !== i || (B = re = !0, a.bind(window, p, r), N = de = oe = U = K = V = G = J = !1, se = null, Se("firstTouchStart", n), Fe(me, pe), he.x = he.y = 0, Fe(ot, n[0]), Fe(lt, ot), ut.x = ge.x * _e, ct = [{
                                x: ot.x,
                                y: ot.y
                            }], R = I = xe(), Ne(y, !0), Lt(), wt()), !Q && i > 1 && !ae && !K && (g = y, J = !1, Q = G = !0, he.y = he.x = 0, Fe(me, pe), Fe(at, n[0]), Fe(st, n[1]), xt(at, st, gt), yt.x = Math.abs(gt.x) - pe.x, yt.y = Math.abs(gt.y) - pe.y, ee = te = kt(at, st))
                        }
                    }
                }, $t = function (e) {
                    if (e.preventDefault(), C) {
                        var t = a.arraySearch(dt, e.pointerId, "id");
                        if (t > -1) {
                            var n = dt[t];
                            n.x = e.pageX, n.y = e.pageY
                        }
                    }
                    if (B) {
                        var i = Ot(e);
                        if (se || V || Q) X = i; else if (_t.x !== ge.x * _e) se = "h"; else {
                            var s = Math.abs(i[0].x - ot.x) - Math.abs(i[0].y - ot.y);
                            Math.abs(s) >= 10 && (se = s > 0 ? "h" : "v", X = i)
                        }
                    }
                }, Wt = function () {
                    if (X) {
                        var e = X.length;
                        if (0 !== e) if (Fe(at, X[0]), rt.x = at.x - ot.x, rt.y = at.y - ot.y, Q && e > 1) {
                            if (ot.x = at.x, ot.y = at.y, !rt.x && !rt.y && Mt(X[1], st)) return;
                            Fe(st, X[1]), J || (J = !0, Se("zoomGestureStarted"));
                            var t = kt(at, st), n = Ut(t);
                            n > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (de = !0);
                            var i = 1, a = Ue(), s = qe();
                            if (n < a) if (o.pinchToClose && !de && g <= r.currItem.initialZoomLevel) {
                                var l = a - n, d = 1 - l / (a / 1.2);
                                Ce(d), Se("onPinchClose", d), oe = !0
                            } else i = (a - n) / a, i > 1 && (i = 1), n = a - i * (a / 3); else n > s && (i = (n - s) / (6 * a), i > 1 && (i = 1), n = s + i * a);
                            i < 0 && (i = 0), ee = t, xt(at, st, pt), he.x += pt.x - gt.x, he.y += pt.y - gt.y, Fe(gt, pt), pe.x = Ee("x", n), pe.y = Ee("y", n), N = n > y, y = n, je()
                        } else {
                            if (!se) return;
                            if (re && (re = !1, Math.abs(rt.x) >= 10 && (rt.x -= X[0].x - lt.x), Math.abs(rt.y) >= 10 && (rt.y -= X[0].y - lt.y)), ot.x = at.x, ot.y = at.y, 0 === rt.x && 0 === rt.y) return;
                            if ("v" === se && o.closeOnVerticalDrag && !Yt()) {
                                he.y += rt.y, pe.y += rt.y;
                                var u = Ht();
                                return U = !0, Se("onVerticalDrag", u), Ce(u), void je()
                            }
                            Ct(xe(), at.x, at.y), V = !0, ne = r.currItem.bounds;
                            var c = Et("x", rt);
                            c || (Et("y", rt), $e(pe), je())
                        }
                    }
                }, It = function (e) {
                    if ($.isOldAndroid) {
                        if (q && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(q), q = setTimeout(function () {
                            q = 0
                        }, 600))
                    }
                    Se("pointerUp"), bt(e, !1) && e.preventDefault();
                    var t;
                    if (C) {
                        var n = a.arraySearch(dt, e.pointerId, "id");
                        if (n > -1) if (t = dt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse"; else {
                            var i = {4: "mouse", 2: "touch", 3: "pen"};
                            t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
                        }
                    }
                    var s, l = Ot(e), d = l.length;
                    if ("mouseup" === e.type && (d = 0), 2 === d) return X = null, !0;
                    1 === d && Fe(lt, l[0]), 0 !== d || se || ae || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Se("touchRelease", e, t));
                    var u = -1;
                    if (0 === d && (B = !1, a.unbind(window, p, r), Lt(), Q ? u = 0 : -1 !== ft && (u = xe() - ft)), ft = 1 === d ? xe() : -1, s = -1 !== u && u < 150 ? "zoom" : "swipe", Q && d < 2 && (Q = !1, 1 === d && (s = "zoomPointerUp"), Se("zoomGestureEnded")), X = null, V || J || ae || U) if (tt(), z || (z = Rt()), z.calculateSwipeSpeed("x"), U) {
                        var c = Ht();
                        if (c < o.verticalDragRange) r.close(); else {
                            var h = pe.y, m = le;
                            nt("verticalDrag", 0, 1, 300, a.easing.cubic.out, function (e) {
                                pe.y = (r.currItem.initialPosition.y - h) * e + h, Ce((1 - m) * e + m), je()
                            }), Se("onVerticalDrag", 1)
                        }
                    } else {
                        if ((K || ae) && 0 === d) {
                            var f = Nt(s, z);
                            if (f) return;
                            s = "zoomPointerUp"
                        }
                        if (!ae) return "swipe" !== s ? void qt() : void(!K && y > r.currItem.fitRatio && zt(z))
                    }
                }, Rt = function () {
                    var e, t, n = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function (i) {
                            ct.length > 1 ? (e = xe() - R + 50, t = ct[ct.length - 2][i]) : (e = xe() - I, t = lt[i]), n.lastFlickOffset[i] = ot[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
                        },
                        calculateOverBoundsAnimOffset: function (e, t) {
                            n.backAnimStarted[e] || (pe[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : pe[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, pe[e], n.backAnimDestination[e], t || 300, a.easing.sine.out, function (t) {
                                pe[e] = t, je()
                            }))))
                        },
                        calculateAnimOffset: function (e) {
                            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, pe[e] += n.distanceOffset[e])
                        },
                        panAnimLoop: function () {
                            if (Ke.zoomPan && (Ke.zoomPan.raf = j(n.panAnimLoop), n.now = xe(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), je(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return pe.x = Math.round(pe.x), pe.y = Math.round(pe.y), je(), void Qe("zoomPan")
                        }
                    };
                    return n
                }, zt = function (e) {
                    if (e.calculateSwipeSpeed("y"), ne = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
                    et("zoomPan"), e.lastNow = xe(), e.panAnimLoop()
                }, Nt = function (e, t) {
                    var n;
                    ae || (mt = c);
                    var i;
                    if ("swipe" === e) {
                        var s = ot.x - lt.x, l = t.lastFlickDist.x < 10;
                        s > 30 && (l || t.lastFlickOffset.x > 20) ? i = -1 : s < -30 && (l || t.lastFlickOffset.x < -20) && (i = 1)
                    }
                    var d;
                    i && (c += i, c < 0 ? (c = o.loop ? Kt() - 1 : 0, d = !0) : c >= Kt() && (c = o.loop ? 0 : Kt() - 1, d = !0), d && !o.loop || (Me += i, _e -= i, n = !0));
                    var u, h = ge.x * _e, m = Math.abs(h - _t.x);
                    return n || h > _t.x == t.lastFlickSpeed.x > 0 ? (u = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, mt === c && (n = !1), ae = !0, Se("mainScrollAnimStart"), nt("mainScroll", _t.x, h, u, a.easing.cubic.out, Oe, function () {
                        tt(), ae = !1, mt = -1, (n || mt !== c) && r.updateCurrItem(), Se("mainScrollAnimComplete")
                    }), n && r.updateCurrItem(!0), n
                }, Ut = function (e) {
                    return 1 / te * e * g
                }, qt = function () {
                    var e = y, t = Ue(), n = qe();
                    y < t ? e = t : y > n && (e = n);
                    var i, s = le;
                    return oe && !N && !de && y < t ? (r.close(), !0) : (oe && (i = function (e) {
                        Ce((1 - s) * e + s)
                    }), r.zoomTo(e, 0, 200, a.easing.cubic.out, i), !0)
                };
            Ye("Gestures", {
                publicMethods: {
                    initGestures: function () {
                        var e = function (e, t, n, i, a) {
                            T = e + t, D = e + n, b = e + i, S = a ? e + a : ""
                        };
                        C = $.pointerEvent, C && $.touch && ($.touch = !1), C ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : $.touch ? (e("touch", "start", "move", "end", "cancel"), H = !0) : e("mouse", "down", "move", "up"), p = D + " " + b + " " + S, f = T, C && !H && (H = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = H, _[T] = Ft, _[D] = $t, _[b] = It, S && (_[S] = _[b]), $.touch && (f += " mousedown", p += " mousemove mouseup", _.mousedown = _[T], _.mousemove = _[D], _.mouseup = _[b]), H || (o.allowPanToNext = !1)
                    }
                }
            });
            var Bt, Gt, Jt, Vt, Zt, Kt, Xt, Qt = function (t, n, i, s) {
                Bt && clearTimeout(Bt), Vt = !0, Jt = !0;
                var l;
                t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = o.getThumbBoundsFn && o.getThumbBoundsFn(c);
                var d = i ? o.hideAnimationDuration : o.showAnimationDuration, h = function () {
                    Qe("initialZoom"), i ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ce(1), n && (n.style.display = "block"), a.addClass(e, "pswp--animated-in"), Se("initialZoom" + (i ? "OutEnd" : "InEnd"))), s && s(), Vt = !1
                };
                if (!d || !l || void 0 === l.x) return Se("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Fe(pe, t.initialPosition), je(), e.style.opacity = i ? 0 : 1, Ce(1), void(d ? setTimeout(function () {
                    h()
                }, d) : h());
                !function () {
                    var n = u, s = !r.currItem.src || r.currItem.loadError || o.showHideOpacity;
                    t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = l.w / t.w, pe.x = l.x, pe.y = l.y - O, r[s ? "template" : "bg"].style.opacity = .001, je()), et("initialZoom"), i && !n && a.removeClass(e, "pswp--animated-in"), s && (i ? a[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                        a.addClass(e, "pswp--animate_opacity")
                    }, 30)), Bt = setTimeout(function () {
                        if (Se("initialZoom" + (i ? "Out" : "In")), i) {
                            var r = l.w / t.w, o = {x: pe.x, y: pe.y}, u = y, c = le, m = function (t) {
                                1 === t ? (y = r, pe.x = l.x, pe.y = l.y - F) : (y = (r - u) * t + u, pe.x = (l.x - o.x) * t + o.x, pe.y = (l.y - F - o.y) * t + o.y), je(), s ? e.style.opacity = 1 - t : Ce(c - t * c)
                            };
                            n ? nt("initialZoom", 0, 1, d, a.easing.cubic.out, m, h) : (m(1), Bt = setTimeout(h, d + 20))
                        } else y = t.initialZoomLevel, Fe(pe, t.initialPosition), je(), Ce(1), s ? e.style.opacity = 1 : Ce(1), Bt = setTimeout(h, d + 20)
                    }, i ? 25 : 90)
                }()
            }, en = {}, tn = [], nn = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function () {
                    return Gt.length
                }
            }, an = function () {
                return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
            }, sn = function (e, t, n) {
                var i = e.bounds;
                i.center.x = Math.round((en.x - t) / 2), i.center.y = Math.round((en.y - n) / 2) + e.vGap.top, i.max.x = t > en.x ? Math.round(en.x - t) : i.center.x, i.max.y = n > en.y ? Math.round(en.y - n) + e.vGap.top : i.center.y, i.min.x = t > en.x ? 0 : i.center.x, i.min.y = n > en.y ? e.vGap.top : i.center.y
            }, rn = function (e, t, n) {
                if (e.src && !e.loadError) {
                    var i = !n;
                    if (i && (e.vGap || (e.vGap = {
                            top: 0,
                            bottom: 0
                        }), Se("parseVerticalMargin", e)), en.x = t.x, en.y = t.y - e.vGap.top - e.vGap.bottom, i) {
                        var a = en.x / e.w, s = en.y / e.h;
                        e.fitRatio = a < s ? a : s;
                        var r = o.scaleMode;
                        "orig" === r ? n = 1 : "fit" === r && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an())
                    }
                    if (!n) return;
                    return sn(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                }
                return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds
            }, on = function (e, t, n, i, a, s) {
                t.loadError || i && (t.imageAppended = !0, un(t, i, t === r.currItem && we), n.appendChild(i), s && setTimeout(function () {
                    t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                }, 500))
            }, ln = function (e) {
                e.loading = !0, e.loaded = !1;
                var t = e.img = a.createEl("pswp__img", "img"), n = function () {
                    e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                };
                return t.onload = n, t.onerror = function () {
                    e.loadError = !0, n()
                }, t.src = e.src, t
            }, dn = function (e, t) {
                if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = o.errorMsg.replace("%url%", e.src), !0
            }, un = function (e, t, n) {
                if (e.src) {
                    t || (t = e.container.lastChild);
                    var i = n ? e.w : Math.round(e.w * e.fitRatio), a = n ? e.h : Math.round(e.h * e.fitRatio);
                    e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = a + "px"), t.style.width = i + "px", t.style.height = a + "px"
                }
            }, cn = function () {
                if (tn.length) {
                    for (var e, t = 0; t < tn.length; t++) e = tn[t], e.holder.index === e.index && on(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                    tn = []
                }
            };
            Ye("Controller", {
                publicMethods: {
                    lazyLoadItem: function (e) {
                        e = Te(e);
                        var t = Zt(e);
                        t && (!t.loaded && !t.loading || L) && (Se("gettingData", e, t), t.src && ln(t))
                    }, initController: function () {
                        a.extend(o, nn, !0), r.items = Gt = n, Zt = r.getItemAt, Kt = o.getNumItemsFn, Xt = o.loop, Kt() < 3 && (o.loop = !1), be("beforeChange", function (e) {
                            var t, n = o.preload, i = null === e || e >= 0, a = Math.min(n[0], Kt()),
                                s = Math.min(n[1], Kt());
                            for (t = 1; t <= (i ? s : a); t++) r.lazyLoadItem(c + t);
                            for (t = 1; t <= (i ? a : s); t++) r.lazyLoadItem(c - t)
                        }), be("initialLayout", function () {
                            r.currItem.initialLayout = o.getThumbBoundsFn && o.getThumbBoundsFn(c)
                        }), be("mainScrollAnimComplete", cn), be("initialZoomInEnd", cn), be("destroy", function () {
                            for (var e, t = 0; t < Gt.length; t++) e = Gt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            tn = null
                        })
                    }, getItemAt: function (e) {
                        return e >= 0 && (void 0 !== Gt[e] && Gt[e])
                    }, allowProgressiveImg: function () {
                        return o.forceProgressiveLoading || !H || o.mouseUsed || screen.width > 1200
                    }, setContent: function (e, t) {
                        o.loop && (t = Te(t));
                        var n = r.getItemAt(e.index);
                        n && (n.container = null);
                        var i, s = r.getItemAt(t);
                        if (!s) return void(e.el.innerHTML = "");
                        Se("gettingData", t, s), e.index = t, e.item = s;
                        var d = s.container = a.createEl("pswp__zoom-wrap");
                        if (!s.src && s.html && (s.html.tagName ? d.appendChild(s.html) : d.innerHTML = s.html), dn(s), rn(s, fe), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (i = a.createEl("pswp__img", "img"), i.style.opacity = 1, i.src = s.src, un(s, i), on(0, s, d, i)); else {
                            if (s.loadComplete = function (n) {
                                    if (l) {
                                        if (e && e.index === t) {
                                            if (dn(n, !0)) return n.loadComplete = n.img = null, rn(n, fe), Ae(n), void(e.index === c && r.updateCurrZoomItem());
                                            n.imageAppended ? !Vt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : $.transform && (ae || Vt) ? tn.push({
                                                item: n,
                                                baseDiv: d,
                                                img: n.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : on(0, n, d, n.img, 0, !0)
                                        }
                                        n.loadComplete = null, n.img = null, Se("imageLoadComplete", t, n)
                                    }
                                }, a.features.transform) {
                                var u = "pswp__img pswp__img--placeholder";
                                u += s.msrc ? "" : " pswp__img--placeholder--blank";
                                var h = a.createEl(u, s.msrc ? "img" : "");
                                s.msrc && (h.src = s.msrc), un(s, h), d.appendChild(h), s.placeholder = h
                            }
                            s.loading || ln(s), r.allowProgressiveImg() && (!Jt && $.transform ? tn.push({
                                item: s,
                                baseDiv: d,
                                img: s.img,
                                index: t,
                                holder: e
                            }) : on(0, s, d, s.img, 0, !0))
                        }
                        Jt || t !== c ? Ae(s) : (ie = d.style, Qt(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(d)
                    }, cleanSlide: function (e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var hn, mn = {}, pn = function (e, t, n) {
                var i = document.createEvent("CustomEvent"),
                    a = {origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch"};
                i.initCustomEvent("pswpTap", !0, !0, a), e.target.dispatchEvent(i)
            };
            Ye("Tap", {
                publicMethods: {
                    initTap: function () {
                        be("firstTouchStart", r.onTapStart), be("touchRelease", r.onTapRelease), be("destroy", function () {
                            mn = {}, hn = null
                        })
                    }, onTapStart: function (e) {
                        e.length > 1 && (clearTimeout(hn), hn = null)
                    }, onTapRelease: function (e, t) {
                        if (t && !V && !G && !Xe) {
                            var n = t;
                            if (hn && (clearTimeout(hn), hn = null, vt(n, mn))) return void Se("doubleTap", n);
                            if ("mouse" === t.type) return void pn(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || a.hasClass(e.target, "pswp__single-tap")) return void pn(e, t);
                            Fe(mn, n), hn = setTimeout(function () {
                                pn(e, t), hn = null
                            }, 300)
                        }
                    }
                }
            });
            var fn;
            Ye("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function () {
                        E || (H ? be("mouseUsed", function () {
                            r.setupDesktopZoom()
                        }) : r.setupDesktopZoom(!0))
                    }, setupDesktopZoom: function (t) {
                        fn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        be("bindEvents", function () {
                            a.bind(e, n, r.handleMouseWheel)
                        }), be("unbindEvents", function () {
                            fn && a.unbind(e, n, r.handleMouseWheel)
                        }), r.mouseZoomedIn = !1;
                        var i, s = function () {
                            r.mouseZoomedIn && (a.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), y < 1 ? a.addClass(e, "pswp--zoom-allowed") : a.removeClass(e, "pswp--zoom-allowed"), o()
                        }, o = function () {
                            i && (a.removeClass(e, "pswp--dragging"), i = !1)
                        };
                        be("resize", s), be("afterChange", s), be("pointerDown", function () {
                            r.mouseZoomedIn && (i = !0, a.addClass(e, "pswp--dragging"))
                        }), be("pointerUp", o), t || s()
                    }, handleMouseWheel: function (e) {
                        if (y <= r.currItem.fitRatio) return o.modal && (!o.closeOnScroll || Xe || B ? e.preventDefault() : x && Math.abs(e.deltaY) > 2 && (u = !0, r.close())), !0;
                        if (e.stopPropagation(), fn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (fn.x = 18 * e.deltaX, fn.y = 18 * e.deltaY) : (fn.x = e.deltaX, fn.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (fn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? fn.y = -.16 * e.wheelDeltaY : fn.y = -.16 * e.wheelDelta; else {
                            if (!("detail" in e)) return;
                            fn.y = e.detail
                        }
                        Ne(y, !0);
                        var t = pe.x - fn.x, n = pe.y - fn.y;
                        (o.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), r.panTo(t, n)
                    }, toggleDesktopZoom: function (t) {
                        t = t || {x: fe.x / 2 + ye.x, y: fe.y / 2 + ye.y};
                        var n = o.getDoubleTapZoom(!0, r.currItem), i = y === n;
                        r.mouseZoomedIn = !i, r.zoomTo(i ? r.currItem.initialZoomLevel : n, t, 333), a[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var _n, yn, gn, Mn, vn, kn, Ln, wn, Yn, Tn, Dn, bn, Sn = {history: !0, galleryUID: 1}, xn = function () {
                return Dn.hash.substring(1)
            }, Cn = function () {
                _n && clearTimeout(_n), gn && clearTimeout(gn)
            }, Hn = function () {
                var e = xn(), t = {};
                if (e.length < 5) return t;
                var n, i = e.split("&");
                for (n = 0; n < i.length; n++) if (i[n]) {
                    var a = i[n].split("=");
                    a.length < 2 || (t[a[0]] = a[1])
                }
                if (o.galleryPIDs) {
                    var s = t.pid;
                    for (t.pid = 0, n = 0; n < Gt.length; n++) if (Gt[n].pid === s) {
                        t.pid = n;
                        break
                    }
                } else t.pid = parseInt(t.pid, 10) - 1;
                return t.pid < 0 && (t.pid = 0), t
            }, jn = function _updateHash() {
                if (gn && clearTimeout(gn), Xe || B) return void(gn = setTimeout(_updateHash, 500));
                Mn ? clearTimeout(yn) : Mn = !0;
                var e = c + 1, t = Zt(c);
                t.hasOwnProperty("pid") && (e = t.pid);
                var n = Ln + "&gid=" + o.galleryUID + "&pid=" + e;
                wn || -1 === Dn.hash.indexOf(n) && (Tn = !0);
                var i = Dn.href.split("#")[0] + "#" + n;
                bn ? "#" + n !== window.location.hash && history[wn ? "replaceState" : "pushState"]("", document.title, i) : wn ? Dn.replace(i) : Dn.hash = n, wn = !0, yn = setTimeout(function () {
                    Mn = !1
                }, 60)
            };
            Ye("History", {
                publicMethods: {
                    initHistory: function () {
                        if (a.extend(o, Sn, !0), o.history) {
                            Dn = window.location, Tn = !1, Yn = !1, wn = !1, Ln = xn(), bn = "pushState" in history, Ln.indexOf("gid=") > -1 && (Ln = Ln.split("&gid=")[0], Ln = Ln.split("?gid=")[0]), be("afterChange", r.updateURL), be("unbindEvents", function () {
                                a.unbind(window, "hashchange", r.onHashChange)
                            });
                            var e = function () {
                                kn = !0, Yn || (Tn ? history.back() : Ln ? Dn.hash = Ln : bn ? history.pushState("", document.title, Dn.pathname + Dn.search) : Dn.hash = ""), Cn()
                            };
                            be("unbindEvents", function () {
                                u && e()
                            }), be("destroy", function () {
                                kn || e()
                            }), be("firstUpdate", function () {
                                c = Hn().pid
                            });
                            var t = Ln.indexOf("pid=");
                            t > -1 && (Ln = Ln.substring(0, t), "&" === Ln.slice(-1) && (Ln = Ln.slice(0, -1))), setTimeout(function () {
                                l && a.bind(window, "hashchange", r.onHashChange)
                            }, 40)
                        }
                    }, onHashChange: function () {
                        if (xn() === Ln) return Yn = !0, void r.close();
                        Mn || (vn = !0, r.goTo(Hn().pid), vn = !1)
                    }, updateURL: function () {
                        Cn(), vn || (wn ? _n = setTimeout(jn, 800) : jn())
                    }
                }
            }), a.extend(r, it)
        }
    })
}, function (e, t, n) {
    "use strict";
    var i, a;
    "function" == typeof Symbol && Symbol.iterator;
    !function (s, r) {
        i = r, void 0 !== (a = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = a)
    }(0, function () {
        return function (e, t) {
            var n, i, a, s, r, o, l, d, u, c, h, m, p, f, _, y, g, M, v, k = this, L = !1, w = !0, Y = !0, T = {
                barsSize: {top: 44, bottom: "auto"},
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function (e, t) {
                    return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
                getImageURLForShare: function () {
                    return e.currItem.src || ""
                },
                getPageURLForShare: function () {
                    return window.location.href
                },
                getTextForShare: function () {
                    return e.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            }, D = function (e) {
                if (y) return !0;
                e = e || window.event, _.timeToIdle && _.mouseUsed && !u && E();
                for (var n, i, a = e.target || e.srcElement, s = a.getAttribute("class") || "", r = 0; r < U.length; r++) n = U[r], n.onTap && s.indexOf("pswp__" + n.name) > -1 && (n.onTap(), i = !0);
                if (i) {
                    e.stopPropagation && e.stopPropagation(), y = !0;
                    var o = t.features.isOldAndroid ? 600 : 30;
                    g = setTimeout(function () {
                        y = !1
                    }, o)
                }
            }, b = function () {
                return !e.likelyTouchDevice || _.mouseUsed || screen.width > _.fitControlsWidth
            }, S = function (e, n, i) {
                t[(i ? "add" : "remove") + "Class"](e, "pswp__" + n)
            }, x = function () {
                var e = 1 === _.getNumItemsFn();
                e !== f && (S(i, "ui--one-slide", e), f = e)
            }, C = function () {
                S(l, "share-modal--hidden", Y)
            }, H = function () {
                return Y = !Y, Y ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                    Y && C()
                }, 300)) : (C(), setTimeout(function () {
                    Y || t.addClass(l, "pswp__share-modal--fade-in")
                }, 30)), Y || A(), !1
            }, j = function (t) {
                t = t || window.event;
                var n = t.target || t.srcElement;
                return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), Y || H(), !1))
            }, A = function () {
                for (var e, t, n, i, a, s = "", r = 0; r < _.shareButtons.length; r++) e = _.shareButtons[r], n = _.getImageURLForShare(e), i = _.getPageURLForShare(e), a = _.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(a)), s += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", _.parseShareButtonOut && (s = _.parseShareButtonOut(e, s));
                l.children[0].innerHTML = s, l.children[0].onclick = j
            }, P = function (e) {
                for (var n = 0; n < _.closeElClasses.length; n++) if (t.hasClass(e, "pswp__" + _.closeElClasses[n])) return !0
            }, O = 0, E = function () {
                clearTimeout(v), O = 0, u && k.setIdle(!1)
            }, F = function (e) {
                e = e || window.event;
                var t = e.relatedTarget || e.toElement;
                t && "HTML" !== t.nodeName || (clearTimeout(v), v = setTimeout(function () {
                    k.setIdle(!0)
                }, _.timeToIdleOutside))
            }, $ = function () {
                _.fullscreenEl && !t.features.isOldAndroid && (n || (n = k.getFullscreenAPI()), n ? (t.bind(document, n.eventK, k.updateFullscreen), k.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
            }, W = function () {
                _.preloaderEl && (I(!0), c("beforeChange", function () {
                    clearTimeout(p), p = setTimeout(function () {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && I(!1) : I(!0)
                    }, _.loadingIndicatorDelay)
                }), c("imageLoadComplete", function (t, n) {
                    e.currItem === n && I(!0)
                }))
            }, I = function (e) {
                m !== e && (S(h, "preloader--active", !e), m = e)
            }, R = function (e) {
                var n = e.vGap;
                if (b()) {
                    var r = _.barsSize;
                    if (_.captionEl && "auto" === r.bottom) if (s || (s = t.createEl("pswp__caption pswp__caption--fake"), s.appendChild(t.createEl("pswp__caption__center")), i.insertBefore(s, a), t.addClass(i, "pswp__ui--fit")), _.addCaptionHTMLFn(e, s, !0)) {
                        var o = s.clientHeight;
                        n.bottom = parseInt(o, 10) || 44
                    } else n.bottom = r.top; else n.bottom = "auto" === r.bottom ? 0 : r.bottom;
                    n.top = r.top
                } else n.top = n.bottom = 0
            }, z = function () {
                _.timeToIdle && c("mouseUsed", function () {
                    t.bind(document, "mousemove", E), t.bind(document, "mouseout", F), M = setInterval(function () {
                        2 === ++O && k.setIdle(!0)
                    }, _.timeToIdle / 2)
                })
            }, N = function () {
                c("onVerticalDrag", function (e) {
                    w && e < .95 ? k.hideControls() : !w && e >= .95 && k.showControls()
                });
                var e;
                c("onPinchClose", function (t) {
                    w && t < .9 ? (k.hideControls(), e = !0) : e && !w && t > .9 && k.showControls()
                }), c("zoomGestureEnded", function () {
                    (e = !1) && !w && k.showControls()
                })
            }, U = [{
                name: "caption", option: "captionEl", onInit: function (e) {
                    a = e
                }
            }, {
                name: "share-modal", option: "shareEl", onInit: function (e) {
                    l = e
                }, onTap: function () {
                    H()
                }
            }, {
                name: "button--share", option: "shareEl", onInit: function (e) {
                    o = e
                }, onTap: function () {
                    H()
                }
            }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
                name: "counter",
                option: "counterEl",
                onInit: function (e) {
                    r = e
                }
            }, {name: "button--close", option: "closeEl", onTap: e.close}, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: e.prev
            }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function () {
                    n.isFullscreen() ? n.exit() : n.enter()
                }
            }, {
                name: "preloader", option: "preloaderEl", onInit: function (e) {
                    h = e
                }
            }], q = function () {
                var e, n, a, s = function (i) {
                    if (i) for (var s = i.length, r = 0; r < s; r++) {
                        e = i[r], n = e.className;
                        for (var o = 0; o < U.length; o++) a = U[o], n.indexOf("pswp__" + a.name) > -1 && (_[a.option] ? (t.removeClass(e, "pswp__element--disabled"), a.onInit && a.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                    }
                };
                s(i.children);
                var r = t.getChildByClass(i, "pswp__top-bar");
                r && s(r.children)
            };
            k.init = function () {
                t.extend(e.options, T, !0), _ = e.options, i = t.getChildByClass(e.scrollWrap, "pswp__ui"), c = e.listen, N(), c("beforeChange", k.update), c("doubleTap", function (t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(_.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), c("preventDragEvent", function (e, t, n) {
                    var i = e.target || e.srcElement;
                    i && i.getAttribute("class") && e.type.indexOf("mouse") > -1 && (i.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(i.tagName)) && (n.prevent = !1)
                }), c("bindEvents", function () {
                    t.bind(i, "pswpTap click", D), t.bind(e.scrollWrap, "pswpTap", k.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", k.onMouseOver)
                }), c("unbindEvents", function () {
                    Y || H(), M && clearInterval(M), t.unbind(document, "mouseout", F), t.unbind(document, "mousemove", E), t.unbind(i, "pswpTap click", D), t.unbind(e.scrollWrap, "pswpTap", k.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", k.onMouseOver), n && (t.unbind(document, n.eventK, k.updateFullscreen), n.isFullscreen() && (_.hideAnimationDuration = 0, n.exit()), n = null)
                }), c("destroy", function () {
                    _.captionEl && (s && i.removeChild(s), t.removeClass(a, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(i, "pswp__ui--over-close"), t.addClass(i, "pswp__ui--hidden"), k.setIdle(!1)
                }), _.showAnimationDuration || t.removeClass(i, "pswp__ui--hidden"), c("initialZoomIn", function () {
                    _.showAnimationDuration && t.removeClass(i, "pswp__ui--hidden")
                }), c("initialZoomOut", function () {
                    t.addClass(i, "pswp__ui--hidden")
                }), c("parseVerticalMargin", R), q(), _.shareEl && o && l && (Y = !0), x(), z(), $(), W()
            }, k.setIdle = function (e) {
                u = e, S(i, "ui--idle", e)
            }, k.update = function () {
                w && e.currItem ? (k.updateIndexIndicator(), _.captionEl && (_.addCaptionHTMLFn(e.currItem, a), S(a, "caption--empty", !e.currItem.title)), L = !0) : L = !1, Y || H(), x()
            }, k.updateFullscreen = function (i) {
                i && setTimeout(function () {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, k.updateIndexIndicator = function () {
                _.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + _.indexIndicatorSep + _.getNumItemsFn())
            }, k.onGlobalTap = function (n) {
                n = n || window.event;
                var i = n.target || n.srcElement;
                if (!y) if (n.detail && "mouse" === n.detail.pointerType) {
                    if (P(i)) return void e.close();
                    t.hasClass(i, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? _.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
                } else if (_.tapToToggleControls && (w ? k.hideControls() : k.showControls()), _.tapToClose && (t.hasClass(i, "pswp__img") || P(i))) return void e.close()
            }, k.onMouseOver = function (e) {
                e = e || window.event;
                var t = e.target || e.srcElement;
                S(i, "ui--over-close", P(t))
            }, k.hideControls = function () {
                t.addClass(i, "pswp__ui--hidden"), w = !1
            }, k.showControls = function () {
                w = !0, L || k.update(), t.removeClass(i, "pswp__ui--hidden")
            }, k.supportsFullscreen = function () {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, k.getFullscreenAPI = function () {
                var t, n = document.documentElement, i = "fullscreenchange";
                return n.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: i
                } : n.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + i
                } : n.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + i
                } : n.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function () {
                    if (d = _.closeOnScroll, _.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
                    e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function () {
                    return _.closeOnScroll = d, document[this.exitK]()
                }, t.isFullscreen = function () {
                    return document[this.elementK]
                }), t
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        !function (e) {
            e.fn.blurryLoad = function (t) {
                var n = e(this).parent();
                n.addClass("blurry-load-container"), e(this).addClass("img-blur");
                var i = new Image;
                i.src = e(this).attr("src"), i.onload = function () {
                    e(this).addClass("loaded")
                };
                var a = (window.innerWidth, new Image);
                a.src = e(this).attr("data-lg"), a.onload = function () {
                    a.classList.add("loaded"), n.append(a)
                }
            }
        }(e)
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    console.log("global.js")
}, function (e, t, n) {
    "use strict";
    (function (e) {
        function scrollHeader() {
            e(window).scrollTop() >= 10 ? (e(".header").addClass("header--small"), e(".main-menu").addClass("scrolled"), e("body").addClass("page-scrolled")) : (e(".header").hasClass("header--main") && e(".header").removeClass("header--small"), e(".main-menu").removeClass("scrolled"), e("body").removeClass("page-scrolled"))
        }

        scrollHeader(), e(window).scroll(function () {
            scrollHeader()
        })
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t = e(".header .nav-link"), n = e(".main-menu"), i = e(".main-menu .menu"), a = e(".btn-menu"),
            s = e(".header"), r = e(".main-menu-close");
        t.click(function (a) {
            a.preventDefault();
            var r = e(this).attr("data-menu");
            n.addClass("active"), e("body").addClass("no-scroll"), e(this).parent().hasClass("active") ? (e(this).parent().removeClass("active"), n.removeClass("active"), e("body").removeClass("no-scroll"), !e("body").hasClass("page-scrolled") && e(".header").hasClass("header--main") && s.removeClass("header--small")) : (t.parent().removeClass("active"), e(this).parent().addClass("active"), s.addClass("header--small")), i.removeClass("active"), e("#" + r).addClass("active")
        }), a.click(function (t) {
            t.preventDefault(), e(this).toggleClass("active"), e("body").toggleClass("no-scroll"), e(".header__nav").toggleClass("active"), n.removeClass("active"), i.removeClass("active")
        }), e(".btn-menu-back").click(function (n) {
            n.preventDefault(), e(this).parents(".main-menu").removeClass("active"), t.parent().removeClass("active")
        }), r.click(function () {
            n.removeClass("active"), t.parent().removeClass("active"), e("body").removeClass("no-scroll"), e(".header__nav").removeClass("active"), !e("body").hasClass("page-scrolled") && e(".header").hasClass("header--main") && s.removeClass("header--small")
        })
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t = n(134);
        !function (e) {
            e && e.__esModule
        }(t);
        e(".main-slider").slick({
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="btn-prev"></button>',
            nextArrow: '<button class="btn-next"></button>',
            dots: !0,
            autoplay: !0,
            autoplaySpeed: 3e3
        }), e(".content-slider").slick({
            infinite: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            dotsClass: "slick-dots-tabs",
            appendDots: e(".content-slider-nav"),
            customPaging: function (e, t) {
                return "<a>" + e.$slides.find(".content-slider__slide")[t].getAttribute("data-title") + "</a>"
            }
        })
    }).call(t, n(1))
}, function (e, t, n) {
    var i, a, s;
    !function (r) {
        "use strict";
        a = [n(1)], i = r, void 0 !== (s = "function" == typeof i ? i.apply(t, a) : i) && (e.exports = s)
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
            function Slick(n, i) {
                var a, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(n),
                    appendDots: e(n),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, n) {
                        return e('<button type="button" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(n), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, a = e(n).data("slick") || {}, s.options = e.extend({}, s.defaults, i, a), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }

            var t = 0;
            return Slick
        }(), t.prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
        }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
            var a = this;
            if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= a.slideCount) return !1;
            a.unload(), "number" == typeof n ? 0 === n && 0 === a.$slides.length ? e(t).appendTo(a.$slideTrack) : i ? e(t).insertBefore(a.$slides.eq(n)) : e(t).insertAfter(a.$slides.eq(n)) : !0 === i ? e(t).prependTo(a.$slideTrack) : e(t).appendTo(a.$slideTrack), a.$slides = a.$slideTrack.children(this.options.slide), a.$slideTrack.children(this.options.slide).detach(), a.$slideTrack.append(a.$slides), a.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t)
            }), a.$slidesCache = a.$slides, a.reinit()
        }, t.prototype.animateHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({height: t}, e.options.speed)
            }
        }, t.prototype.animateSlide = function (t, n) {
            var i = {}, a = this;
            a.animateHeight(), !0 === a.options.rtl && !1 === a.options.vertical && (t = -t), !1 === a.transformsEnabled ? !1 === a.options.vertical ? a.$slideTrack.animate({left: t}, a.options.speed, a.options.easing, n) : a.$slideTrack.animate({top: t}, a.options.speed, a.options.easing, n) : !1 === a.cssTransitions ? (!0 === a.options.rtl && (a.currentLeft = -a.currentLeft), e({animStart: a.currentLeft}).animate({animStart: t}, {
                duration: a.options.speed,
                easing: a.options.easing,
                step: function (e) {
                    e = Math.ceil(e), !1 === a.options.vertical ? (i[a.animType] = "translate(" + e + "px, 0px)", a.$slideTrack.css(i)) : (i[a.animType] = "translate(0px," + e + "px)", a.$slideTrack.css(i))
                },
                complete: function () {
                    n && n.call()
                }
            })) : (a.applyTransition(), t = Math.ceil(t), !1 === a.options.vertical ? i[a.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[a.animType] = "translate3d(0px," + t + "px, 0px)", a.$slideTrack.css(i), n && setTimeout(function () {
                a.disableTransition(), n.call()
            }, a.options.speed))
        }, t.prototype.getNavTarget = function () {
            var t = this, n = t.options.asNavFor;
            return n && null !== n && (n = e(n).not(t.$slider)), n
        }, t.prototype.asNavFor = function (t) {
            var n = this, i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var n = e(this).slick("getSlick");
                n.unslicked || n.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function (e) {
            var t = this, n = {};
            !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
            var e = this, t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function () {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function () {
            var t, n, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
                e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
            var e, t, n, i, a, s, r, o = this;
            if (i = document.createDocumentFragment(), s = o.$slider.children(), o.options.rows > 0) {
                for (r = o.options.slidesPerRow * o.options.rows, a = Math.ceil(s.length / r), e = 0; e < a; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < o.options.rows; t++) {
                        var d = document.createElement("div");
                        for (n = 0; n < o.options.slidesPerRow; n++) {
                            var u = e * r + (t * o.options.slidesPerRow + n);
                            s.get(u) && d.appendChild(s.get(u))
                        }
                        l.appendChild(d)
                    }
                    i.appendChild(l)
                }
                o.$slider.empty().append(i), o.$slider.children().children().children().css({
                    width: 100 / o.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function (t, n) {
            var i, a, s, r = this, o = !1, l = r.$slider.width(), d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                a = null;
                for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (a = r.breakpoints[i]) : s > r.breakpoints[i] && (a = r.breakpoints[i]));
                null !== a ? null !== r.activeBreakpoint ? (a !== r.activeBreakpoint || n) && (r.activeBreakpoint = a, "unslick" === r.breakpointSettings[a] ? r.unslick(a) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[a]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = a) : (r.activeBreakpoint = a, "unslick" === r.breakpointSettings[a] ? r.unslick(a) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[a]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = a) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = a), t || !1 === o || r.$slider.trigger("breakpoint", [r, o])
            }
        }, t.prototype.changeSlide = function (t, n) {
            var i, a, s, r = this, o = e(t.currentTarget);
            switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, i = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case"previous":
                    a = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - a, !1, n);
                    break;
                case"next":
                    a = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + a, !1, n);
                    break;
                case"index":
                    var l = 0 === t.data.index ? 0 : t.data.index || o.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, n), o.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function (e) {
            var t, n, i = this;
            if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var a in t) {
                if (e < t[a]) {
                    e = n;
                    break
                }
                n = t[a]
            }
            return e
        }, t.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function () {
            var e, t = this;
            t.options.rows > 0 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function (e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                e(this).attr("style", e(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
        }, t.prototype.disableTransition = function (e) {
            var t = this, n = {};
            n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
        }, t.prototype.fadeSlide = function (e, t) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), t && setTimeout(function () {
                n.disableTransition(e), t.call()
            }, n.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
                n.stopImmediatePropagation();
                var i = e(this);
                setTimeout(function () {
                    t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, t.prototype.getDotCount = function () {
            var e = this, t = 0, n = 0, i = 0;
            if (!0 === e.options.infinite) if (e.slideCount <= e.options.slidesToShow) ++i; else for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return i - 1
        }, t.prototype.getLeft = function (e) {
            var t, n, i, a, s = this, r = 0;
            return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, a = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? a = -1.5 : 1 === s.options.slidesToShow && (a = -2)), r = n * s.options.slidesToShow * a), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * n * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, r = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * n * -1 + r, !0 === s.options.variableWidth && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === s.options.centerMode && (i = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (s.$list.width() - i.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function () {
            var e, t = this, n = 0, i = 0, a = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) a.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return a
        }, t.prototype.getSlick = function () {
            return this
        }, t.prototype.getSlideCount = function () {
            var t, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (a, s) {
                if (s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * i.swipeLeft) return t = s, !1
            }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
            this.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
        }, t.prototype.init = function (t) {
            var n = this;
            e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, t.prototype.initADA = function () {
            var t = this, n = Math.ceil(t.slideCount / t.options.slidesToShow),
                i = t.getNavigableIndexes().filter(function (e) {
                    return e >= 0 && e < t.slideCount
                });
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({tabindex: "-1"}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
                var a = i.indexOf(n);
                if (e(this).attr({role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1}), -1 !== a) {
                    var s = "slick-slide-control" + t.instanceUid + a;
                    e("#" + s).length && e(this).attr({"aria-describedby": s})
                }
            }), t.$dots.attr("role", "tablist").find("li").each(function (a) {
                var s = i[a];
                e(this).attr({role: "presentation"}), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + a,
                    "aria-controls": "slick-slide" + t.instanceUid + s,
                    "aria-label": a + 1 + " of " + n,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            }).eq(t.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
            for (var a = t.currentSlide, s = a + t.options.slidesToShow; a < s; a++) t.options.focusOnChange ? t.$slides.eq(a).attr({tabindex: "0"}) : t.$slides.eq(a).removeAttr("tabindex");
            t.activateADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function () {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({data: {message: !0 === t.options.rtl ? "next" : "previous"}}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({data: {message: !0 === t.options.rtl ? "previous" : "next"}}))
        }, t.prototype.lazyLoad = function () {
            function loadImages(t) {
                e("img[data-lazy]", t).each(function () {
                    var t = e(this), n = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"),
                        a = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function () {
                        t.animate({opacity: 0}, 100, function () {
                            i && (t.attr("srcset", i), a && t.attr("sizes", a)), t.attr("src", n).animate({opacity: 1}, 200, function () {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), s.$slider.trigger("lazyLoaded", [s, t, n])
                        })
                    }, r.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
                    }, r.src = n
                })
            }

            var t, n, i, a, s = this;
            if (!0 === s.options.centerMode ? !0 === s.options.infinite ? (i = s.currentSlide + (s.options.slidesToShow / 2 + 1), a = i + s.options.slidesToShow + 2) : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), a = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, a = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, a <= s.slideCount && a++)), t = s.$slider.find(".slick-slide").slice(i, a), "anticipated" === s.options.lazyLoad) for (var r = i - 1, o = a, l = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) r < 0 && (r = s.slideCount - 1), t = t.add(l.eq(r)), t = t.add(l.eq(o)), r--, o++;
            loadImages(t), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), loadImages(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), loadImages(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), loadImages(n))
        }, t.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function () {
            this.changeSlide({data: {message: "next"}})
        }, t.prototype.orientationChange = function () {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function (t) {
            var n = this;
            if (!n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange))) {
                e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()
            }
        }, t.prototype.prev = t.prototype.slickPrev = function () {
            this.changeSlide({data: {message: "previous"}})
        }, t.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var n, i, a, s, r, o = this, l = e("img[data-lazy]", o.$slider);
            l.length ? (n = l.first(), i = n.attr("data-lazy"), a = n.attr("data-srcset"), s = n.attr("data-sizes") || o.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function () {
                a && (n.attr("srcset", a), s && n.attr("sizes", s)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, n, i]), o.progressiveLazyLoad()
            }, r.onerror = function () {
                t < 3 ? setTimeout(function () {
                    o.progressiveLazyLoad(t + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, n, i]), o.progressiveLazyLoad())
            }, r.src = i) : o.$slider.trigger("allImagesLoaded", [o])
        }, t.prototype.refresh = function (t) {
            var n, i, a = this;
            i = a.slideCount - a.options.slidesToShow, !a.options.infinite && a.currentSlide > i && (a.currentSlide = i), a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0), n = a.currentSlide, a.destroy(!0), e.extend(a, a.initials, {currentSlide: n}), a.init(), t || a.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function () {
            var t, n, i, a = this, s = a.options.responsive || null;
            if ("array" === e.type(s) && s.length) {
                a.respondTo = a.options.respondTo || "window";
                for (t in s) if (i = a.breakpoints.length - 1, s.hasOwnProperty(t)) {
                    for (n = s[t].breakpoint; i >= 0;) a.breakpoints[i] && a.breakpoints[i] === n && a.breakpoints.splice(i, 1), i--;
                    a.breakpoints.push(n), a.breakpointSettings[n] = s[t].settings
                }
                a.breakpoints.sort(function (e, t) {
                    return a.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
            var i = this;
            if ("boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
            i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
        }, t.prototype.setCSS = function (e) {
            var t, n, i = this, a = {};
            !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", a[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(a) : (a = {}, !1 === i.cssTransitions ? (a[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(a)) : (a[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(a)))
        }, t.prototype.setDimensions = function () {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
            var t, n = this;
            n.$slides.each(function (i, a) {
                t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(a).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : e(a).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
            }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
        }, t.prototype.setHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function () {
            var t, n, i, a, s, r = this, o = !1;
            if ("object" === e.type(arguments[0]) ? (i = arguments[0], o = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], a = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = a; else if ("multiple" === s) e.each(i, function (e, t) {
                r.options[e] = t
            }); else if ("responsive" === s) for (n in a) if ("array" !== e.type(r.options.responsive)) r.options.responsive = [a[n]]; else {
                for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === a[n].breakpoint && r.options.responsive.splice(t, 1), t--;
                r.options.responsive.push(a[n])
            }
            o && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
            var e = this, t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function (e) {
            var t, n, i, a, s = this;
            if (n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
                var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1 + r, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (a = s.slideCount % s.options.slidesToShow, i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - a), i + a).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
        }, t.prototype.setupInfinite = function () {
            var t, n, i, a = this;
            if (!0 === a.options.fade && (a.options.centerMode = !1), !0 === a.options.infinite && !1 === a.options.fade && (n = null, a.slideCount > a.options.slidesToShow)) {
                for (i = !0 === a.options.centerMode ? a.options.slidesToShow + 1 : a.options.slidesToShow, t = a.slideCount; t > a.slideCount - i; t -= 1) n = t - 1, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i + a.slideCount; t += 1) n = t, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned");
                a.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function (e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function (t) {
            var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                a = parseInt(i.attr("data-slick-index"));
            if (a || (a = 0), n.slideCount <= n.options.slidesToShow) return void n.slideHandler(a, !1, !0);
            n.slideHandler(a)
        }, t.prototype.slideHandler = function (e, t, n) {
            var i, a, s, r, o, l = null, d = this;
            if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e)) {
                if (!1 === t && d.asNavFor(e), i = e, l = d.getLeft(i), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) return void(!1 === d.options.fade && (i = d.currentSlide, !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function () {
                    d.postSlide(i)
                }) : d.postSlide(i)));
                if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) return void(!1 === d.options.fade && (i = d.currentSlide, !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function () {
                    d.postSlide(i)
                }) : d.postSlide(i)));
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), a = i < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, a]), s = d.currentSlide, d.currentSlide = a, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (o = d.getNavTarget(), o = o.slick("getSlick"), o.slideCount <= o.options.slidesToShow && o.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== n ? (d.fadeSlideOut(s), d.fadeSlide(a, function () {
                    d.postSlide(a)
                })) : d.postSlide(a), void d.animateHeight();
                !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function () {
                    d.postSlide(a)
                }) : d.postSlide(a)
            }
        }, t.prototype.startLoad = function () {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
            var e, t, n, i, a = this;
            return e = a.touchObject.startX - a.touchObject.curX, t = a.touchObject.startY - a.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? !1 === a.options.rtl ? "left" : "right" : i <= 360 && i >= 315 ? !1 === a.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === a.options.rtl ? "right" : "left" : !0 === a.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function (e) {
            var t, n, i = this;
            if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
            if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
            if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case"left":
                    case"down":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case"right":
                    case"up":
                        t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case"start":
                    t.swipeStart(e);
                    break;
                case"move":
                    t.swipeMove(e);
                    break;
                case"end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function (e) {
            var t, n, i, a, s, r, o = this;
            return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!o.dragging || o.scrolling || s && 1 !== s.length) && (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))), !o.options.verticalSwiping && !o.swiping && r > 4 ? (o.scrolling = !0, !1) : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = r), n = o.swipeDirection(), void 0 !== e.originalEvent && o.touchObject.swipeLength > 4 && (o.swiping = !0, e.preventDefault()), a = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (a = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, !1 === o.options.infinite && (0 === o.currentSlide && "right" === n || o.currentSlide >= o.getDotCount() && "left" === n) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = t + i * a : o.swipeLeft = t + i * (o.$list.height() / o.listWidth) * a, !0 === o.options.verticalSwiping && (o.swipeLeft = t + i * a), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))))
        }, t.prototype.swipeStart = function (e) {
            var t, n = this;
            if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function () {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function () {
            var e, n, i = this, a = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = i.length;
            for (e = 0; e < r; e++) if ("object" == typeof a || void 0 === a ? i[e].slick = new t(i[e], a) : n = i[e].slick[a].apply(i[e].slick, s), void 0 !== n) return n;
            return i
        }
    })
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(136), e(".js-select").select2(), e(".js-select-simple").select2({minimumResultsForSearch: -1}), e(".js-select-list").select2({minimumResultsForSearch: -1})
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (i) {
        var a, s, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        !function (i) {
            s = [n(1)], a = i, void 0 !== (r = "function" == typeof a ? a.apply(t, s) : a) && (e.exports = r)
        }(function (n) {
            var a = function () {
                if (n && n.fn && n.fn.select2 && n.fn.select2.amd) var a = n.fn.select2.amd;
                var a;
                return function () {
                    if (!a || !a.requirejs) {
                        a ? t = a : a = {};
                        var e, t, n;
                        !function (i) {
                            function hasProp(e, t) {
                                return m.call(e, t)
                            }

                            function normalize(e, t) {
                                var n, i, a, s, r, o, l, d, u, h, m, p, _ = t && t.split("/"), y = c.map,
                                    g = y && y["*"] || {};
                                if (e) {
                                    for (e = e.split("/"), r = e.length - 1, c.nodeIdCompat && f.test(e[r]) && (e[r] = e[r].replace(f, "")), "." === e[0].charAt(0) && _ && (p = _.slice(0, _.length - 1), e = p.concat(e)), u = 0; u < e.length; u++) if ("." === (m = e[u])) e.splice(u, 1), u -= 1; else if (".." === m) {
                                        if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
                                        u > 0 && (e.splice(u - 1, 2), u -= 2)
                                    }
                                    e = e.join("/")
                                }
                                if ((_ || g) && y) {
                                    for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                        if (i = n.slice(0, u).join("/"), _) for (h = _.length; h > 0; h -= 1) if ((a = y[_.slice(0, h).join("/")]) && (a = a[i])) {
                                            s = a, o = u;
                                            break
                                        }
                                        if (s) break;
                                        !l && g && g[i] && (l = g[i], d = u)
                                    }
                                    !s && l && (s = l, o = d), s && (n.splice(0, o, s), e = n.join("/"))
                                }
                                return e
                            }

                            function makeRequire(e, t) {
                                return function () {
                                    var n = p.call(arguments, 0);
                                    return "string" != typeof n[0] && 1 === n.length && n.push(null), s.apply(i, n.concat([e, t]))
                                }
                            }

                            function makeNormalize(e) {
                                return function (t) {
                                    return normalize(t, e)
                                }
                            }

                            function makeLoad(e) {
                                return function (t) {
                                    d[e] = t
                                }
                            }

                            function callDep(e) {
                                if (hasProp(u, e)) {
                                    var t = u[e];
                                    delete u[e], h[e] = !0, a.apply(i, t)
                                }
                                if (!hasProp(d, e) && !hasProp(h, e)) throw new Error("No " + e);
                                return d[e]
                            }

                            function splitPrefix(e) {
                                var t, n = e ? e.indexOf("!") : -1;
                                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                            }

                            function makeRelParts(e) {
                                return e ? splitPrefix(e) : []
                            }

                            function makeConfig(e) {
                                return function () {
                                    return c && c.config && c.config[e] || {}
                                }
                            }

                            var a, s, r, l, d = {}, u = {}, c = {}, h = {}, m = Object.prototype.hasOwnProperty,
                                p = [].slice, f = /\.js$/;
                            r = function (e, t) {
                                var n, i = splitPrefix(e), a = i[0], s = t[1];
                                return e = i[1], a && (a = normalize(a, s), n = callDep(a)), a ? e = n && n.normalize ? n.normalize(e, makeNormalize(s)) : normalize(e, s) : (e = normalize(e, s), i = splitPrefix(e), a = i[0], e = i[1], a && (n = callDep(a))), {
                                    f: a ? a + "!" + e : e,
                                    n: e,
                                    pr: a,
                                    p: n
                                }
                            }, l = {
                                require: function (e) {
                                    return makeRequire(e)
                                }, exports: function (e) {
                                    var t = d[e];
                                    return void 0 !== t ? t : d[e] = {}
                                }, module: function (e) {
                                    return {id: e, uri: "", exports: d[e], config: makeConfig(e)}
                                }
                            }, a = function (e, t, n, a) {
                                var s, c, m, p, f, _, y, g = [], M = void 0 === n ? "undefined" : o(n);
                                if (a = a || e, _ = makeRelParts(a), "undefined" === M || "function" === M) {
                                    for (t = !t.length && n.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1) if (p = r(t[f], _), "require" === (c = p.f)) g[f] = l.require(e); else if ("exports" === c) g[f] = l.exports(e), y = !0; else if ("module" === c) s = g[f] = l.module(e); else if (hasProp(d, c) || hasProp(u, c) || hasProp(h, c)) g[f] = callDep(c); else {
                                        if (!p.p) throw new Error(e + " missing " + c);
                                        p.p.load(p.n, makeRequire(a, !0), makeLoad(c), {}), g[f] = d[c]
                                    }
                                    m = n ? n.apply(d[e], g) : void 0, e && (s && s.exports !== i && s.exports !== d[e] ? d[e] = s.exports : m === i && y || (d[e] = m))
                                } else e && (d[e] = n)
                            }, e = t = s = function (e, t, n, o, d) {
                                if ("string" == typeof e) return l[e] ? l[e](t) : callDep(r(e, makeRelParts(t)).f);
                                if (!e.splice) {
                                    if (c = e, c.deps && s(c.deps, c.callback), !t) return;
                                    t.splice ? (e = t, t = n, n = null) : e = i
                                }
                                return t = t || function () {
                                }, "function" == typeof n && (n = o, o = d), o ? a(i, e, t, n) : setTimeout(function () {
                                    a(i, e, t, n)
                                }, 4), s
                            }, s.config = function (e) {
                                return s(e)
                            }, e._defined = d, n = function (e, t, n) {
                                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (n = t, t = []), hasProp(d, e) || hasProp(u, e) || (u[e] = [e, t, n])
                            }, n.amd = {jQuery: !0}
                        }(), a.requirejs = e, a.require = t, a.define = n
                    }
                }(), a.define("almond", function () {
                }), a.define("jquery", [], function () {
                    var e = n || i;
                    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
                }), a.define("select2/utils", ["jquery"], function (e) {
                    function getMethods(e) {
                        var t = e.prototype, n = [];
                        for (var i in t) {
                            "function" == typeof t[i] && ("constructor" !== i && n.push(i))
                        }
                        return n
                    }

                    var t = {};
                    t.Extend = function (e, t) {
                        function BaseConstructor() {
                            this.constructor = e
                        }

                        var n = {}.hasOwnProperty;
                        for (var i in t) n.call(t, i) && (e[i] = t[i]);
                        return BaseConstructor.prototype = t.prototype, e.prototype = new BaseConstructor, e.__super__ = t.prototype, e
                    }, t.Decorate = function (e, t) {
                        function DecoratedClass() {
                            var n = Array.prototype.unshift, i = t.prototype.constructor.length,
                                a = e.prototype.constructor;
                            i > 0 && (n.call(arguments, e.prototype.constructor), a = t.prototype.constructor), a.apply(this, arguments)
                        }

                        function ctr() {
                            this.constructor = DecoratedClass
                        }

                        var n = getMethods(t), i = getMethods(e);
                        t.displayName = e.displayName, DecoratedClass.prototype = new ctr;
                        for (var a = 0; a < i.length; a++) {
                            var s = i[a];
                            DecoratedClass.prototype[s] = e.prototype[s]
                        }
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            DecoratedClass.prototype[o] = function (e) {
                                var n = function () {
                                };
                                e in DecoratedClass.prototype && (n = DecoratedClass.prototype[e]);
                                var i = t.prototype[e];
                                return function () {
                                    return Array.prototype.unshift.call(arguments, n), i.apply(this, arguments)
                                }
                            }(o)
                        }
                        return DecoratedClass
                    };
                    var n = function () {
                        this.listeners = {}
                    };
                    n.prototype.on = function (e, t) {
                        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                    }, n.prototype.trigger = function (e) {
                        var t = Array.prototype.slice, n = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, n.prototype.invoke = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
                    }, t.Observable = n, t.generateChars = function (e) {
                        for (var t = "", n = 0; n < e; n++) {
                            t += Math.floor(36 * Math.random()).toString(36)
                        }
                        return t
                    }, t.bind = function (e, t) {
                        return function () {
                            e.apply(t, arguments)
                        }
                    }, t._convertData = function (e) {
                        for (var t in e) {
                            var n = t.split("-"), i = e;
                            if (1 !== n.length) {
                                for (var a = 0; a < n.length; a++) {
                                    var s = n[a];
                                    s = s.substring(0, 1).toLowerCase() + s.substring(1), s in i || (i[s] = {}), a == n.length - 1 && (i[s] = e[t]), i = i[s]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, t.hasScroll = function (t, n) {
                        var i = e(n), a = n.style.overflowX, s = n.style.overflowY;
                        return (a !== s || "hidden" !== s && "visible" !== s) && ("scroll" === a || "scroll" === s || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                    }, t.escapeMarkup = function (e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                            return t[e]
                        })
                    }, t.appendMany = function (t, n) {
                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                            var i = e();
                            e.map(n, function (e) {
                                i = i.add(e)
                            }), n = i
                        }
                        t.append(n)
                    }, t.__cache = {};
                    var i = 0;
                    return t.GetUniqueElementId = function (e) {
                        var t = e.getAttribute("data-select2-id");
                        return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++i), t = i.toString())), t
                    }, t.StoreData = function (e, n, i) {
                        var a = t.GetUniqueElementId(e);
                        t.__cache[a] || (t.__cache[a] = {}), t.__cache[a][n] = i
                    }, t.GetData = function (n, i) {
                        var a = t.GetUniqueElementId(n);
                        return i ? t.__cache[a] && null != t.__cache[a][i] ? t.__cache[a][i] : e(n).data(i) : t.__cache[a]
                    }, t.RemoveData = function (e) {
                        var n = t.GetUniqueElementId(e);
                        null != t.__cache[n] && delete t.__cache[n]
                    }, t
                }), a.define("select2/results", ["jquery", "./utils"], function (e, t) {
                    function Results(e, t, n) {
                        this.$element = e, this.data = n, this.options = t, Results.__super__.constructor.call(this)
                    }

                    return t.Extend(Results, t.Observable), Results.prototype.render = function () {
                        var t = e('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                    }, Results.prototype.clear = function () {
                        this.$results.empty()
                    }, Results.prototype.displayMessage = function (t) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            a = this.options.get("translations").get(t.message);
                        i.append(n(a(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, Results.prototype.hideMessages = function () {
                        this.$results.find(".select2-results__message").remove()
                    }, Results.prototype.append = function (e) {
                        this.hideLoading();
                        var t = [];
                        if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {message: "noResults"}));
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n], a = this.option(i);
                            t.push(a)
                        }
                        this.$results.append(t)
                    }, Results.prototype.position = function (e, t) {
                        t.find(".select2-results").append(e)
                    }, Results.prototype.sort = function (e) {
                        return this.options.get("sorter")(e)
                    }, Results.prototype.highlightFirstItem = function () {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, Results.prototype.setClasses = function () {
                        var n = this;
                        this.data.current(function (i) {
                            var a = e.map(i, function (e) {
                                return e.id.toString()
                            });
                            n.$results.find(".select2-results__option[aria-selected]").each(function () {
                                var n = e(this), i = t.GetData(this, "data"), s = "" + i.id;
                                null != i.element && i.element.selected || null == i.element && e.inArray(s, a) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                            })
                        })
                    }, Results.prototype.showLoading = function (e) {
                        this.hideLoading();
                        var t = this.options.get("translations").get("searching"),
                            n = {disabled: !0, loading: !0, text: t(e)}, i = this.option(n);
                        i.className += " loading-results", this.$results.prepend(i)
                    }, Results.prototype.hideLoading = function () {
                        this.$results.find(".loading-results").remove()
                    }, Results.prototype.option = function (n) {
                        var i = document.createElement("li");
                        i.className = "select2-results__option";
                        var a = {role: "treeitem", "aria-selected": "false"};
                        n.disabled && (delete a["aria-selected"], a["aria-disabled"] = "true"), null == n.id && delete a["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (a.role = "group", a["aria-label"] = n.text, delete a["aria-selected"]);
                        for (var s in a) {
                            var r = a[s];
                            i.setAttribute(s, r)
                        }
                        if (n.children) {
                            var o = e(i), l = document.createElement("strong");
                            l.className = "select2-results__group";
                            e(l);
                            this.template(n, l);
                            for (var d = [], u = 0; u < n.children.length; u++) {
                                var c = n.children[u], h = this.option(c);
                                d.push(h)
                            }
                            var m = e("<ul></ul>", {class: "select2-results__options select2-results__options--nested"});
                            m.append(d), o.append(l), o.append(m)
                        } else this.template(n, i);
                        return t.StoreData(i, "data", n), i
                    }, Results.prototype.bind = function (n, i) {
                        var a = this, s = n.id + "-results";
                        this.$results.attr("id", s), n.on("results:all", function (e) {
                            a.clear(), a.append(e.data), n.isOpen() && (a.setClasses(), a.highlightFirstItem())
                        }), n.on("results:append", function (e) {
                            a.append(e.data), n.isOpen() && a.setClasses()
                        }), n.on("query", function (e) {
                            a.hideMessages(), a.showLoading(e)
                        }), n.on("select", function () {
                            n.isOpen() && (a.setClasses(), a.highlightFirstItem())
                        }), n.on("unselect", function () {
                            n.isOpen() && (a.setClasses(), a.highlightFirstItem())
                        }), n.on("open", function () {
                            a.$results.attr("aria-expanded", "true"), a.$results.attr("aria-hidden", "false"), a.setClasses(), a.ensureHighlightVisible()
                        }), n.on("close", function () {
                            a.$results.attr("aria-expanded", "false"), a.$results.attr("aria-hidden", "true"), a.$results.removeAttr("aria-activedescendant")
                        }), n.on("results:toggle", function () {
                            var e = a.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), n.on("results:select", function () {
                            var e = a.getHighlightedResults();
                            if (0 !== e.length) {
                                var n = t.GetData(e[0], "data");
                                "true" == e.attr("aria-selected") ? a.trigger("close", {}) : a.trigger("select", {data: n})
                            }
                        }), n.on("results:previous", function () {
                            var e = a.getHighlightedResults(), t = a.$results.find("[aria-selected]"), n = t.index(e);
                            if (!(n <= 0)) {
                                var i = n - 1;
                                0 === e.length && (i = 0);
                                var s = t.eq(i);
                                s.trigger("mouseenter");
                                var r = a.$results.offset().top, o = s.offset().top,
                                    l = a.$results.scrollTop() + (o - r);
                                0 === i ? a.$results.scrollTop(0) : o - r < 0 && a.$results.scrollTop(l)
                            }
                        }), n.on("results:next", function () {
                            var e = a.getHighlightedResults(), t = a.$results.find("[aria-selected]"), n = t.index(e),
                                i = n + 1;
                            if (!(i >= t.length)) {
                                var s = t.eq(i);
                                s.trigger("mouseenter");
                                var r = a.$results.offset().top + a.$results.outerHeight(!1),
                                    o = s.offset().top + s.outerHeight(!1), l = a.$results.scrollTop() + o - r;
                                0 === i ? a.$results.scrollTop(0) : o > r && a.$results.scrollTop(l)
                            }
                        }), n.on("results:focus", function (e) {
                            e.element.addClass("select2-results__option--highlighted")
                        }), n.on("results:message", function (e) {
                            a.displayMessage(e)
                        }), e.fn.mousewheel && this.$results.on("mousewheel", function (e) {
                            var t = a.$results.scrollTop(), n = a.$results.get(0).scrollHeight - t + e.deltaY,
                                i = e.deltaY > 0 && t - e.deltaY <= 0, s = e.deltaY < 0 && n <= a.$results.height();
                            i ? (a.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : s && (a.$results.scrollTop(a.$results.get(0).scrollHeight - a.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (n) {
                            var i = e(this), s = t.GetData(this, "data");
                            if ("true" === i.attr("aria-selected")) return void(a.options.get("multiple") ? a.trigger("unselect", {
                                originalEvent: n,
                                data: s
                            }) : a.trigger("close", {}));
                            a.trigger("select", {originalEvent: n, data: s})
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (n) {
                            var i = t.GetData(this, "data");
                            a.getHighlightedResults().removeClass("select2-results__option--highlighted"), a.trigger("results:focus", {
                                data: i,
                                element: e(this)
                            })
                        })
                    }, Results.prototype.getHighlightedResults = function () {
                        return this.$results.find(".select2-results__option--highlighted")
                    }, Results.prototype.destroy = function () {
                        this.$results.remove()
                    }, Results.prototype.ensureHighlightVisible = function () {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[aria-selected]"), n = t.index(e),
                                i = this.$results.offset().top, a = e.offset().top,
                                s = this.$results.scrollTop() + (a - i), r = a - i;
                            s -= 2 * e.outerHeight(!1), n <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(s)
                        }
                    }, Results.prototype.template = function (t, n) {
                        var i = this.options.get("templateResult"), a = this.options.get("escapeMarkup"), s = i(t, n);
                        null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = a(s) : e(n).append(s)
                    }, Results
                }), a.define("select2/keys", [], function () {
                    return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    }
                }), a.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n) {
                    function BaseSelection(e, t) {
                        this.$element = e, this.options = t, BaseSelection.__super__.constructor.call(this)
                    }

                    return t.Extend(BaseSelection, t.Observable), BaseSelection.prototype.render = function () {
                        var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), this.$selection = n, n
                    }, BaseSelection.prototype.bind = function (e, t) {
                        var i = this, a = (e.id, e.id + "-results");
                        this.container = e, this.$selection.on("focus", function (e) {
                            i.trigger("focus", e)
                        }), this.$selection.on("blur", function (e) {
                            i._handleBlur(e)
                        }), this.$selection.on("keydown", function (e) {
                            i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                        }), e.on("results:focus", function (e) {
                            i.$selection.attr("aria-activedescendant", e.data._resultId)
                        }), e.on("selection:update", function (e) {
                            i.update(e.data)
                        }), e.on("open", function () {
                            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", a), i._attachCloseHandler(e)
                        }), e.on("close", function () {
                            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), window.setTimeout(function () {
                                i.$selection.focus()
                            }, 0), i._detachCloseHandler(e)
                        }), e.on("enable", function () {
                            i.$selection.attr("tabindex", i._tabindex)
                        }), e.on("disable", function () {
                            i.$selection.attr("tabindex", "-1")
                        })
                    }, BaseSelection.prototype._handleBlur = function (t) {
                        var n = this;
                        window.setTimeout(function () {
                            document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                        }, 1)
                    }, BaseSelection.prototype._attachCloseHandler = function (n) {
                        e(document.body).on("mousedown.select2." + n.id, function (n) {
                            var i = e(n.target), a = i.closest(".select2");
                            e(".select2.select2-container--open").each(function () {
                                e(this), this != a[0] && t.GetData(this, "element").select2("close")
                            })
                        })
                    }, BaseSelection.prototype._detachCloseHandler = function (t) {
                        e(document.body).off("mousedown.select2." + t.id)
                    }, BaseSelection.prototype.position = function (e, t) {
                        t.find(".selection").append(e)
                    }, BaseSelection.prototype.destroy = function () {
                        this._detachCloseHandler(this.container)
                    }, BaseSelection.prototype.update = function (e) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, BaseSelection
                }), a.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i) {
                    function SingleSelection() {
                        SingleSelection.__super__.constructor.apply(this, arguments)
                    }

                    return n.Extend(SingleSelection, t), SingleSelection.prototype.render = function () {
                        var e = SingleSelection.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                    }, SingleSelection.prototype.bind = function (e, t) {
                        var n = this;
                        SingleSelection.__super__.bind.apply(this, arguments);
                        var i = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e) {
                            1 === e.which && n.trigger("toggle", {originalEvent: e})
                        }), this.$selection.on("focus", function (e) {
                        }), this.$selection.on("blur", function (e) {
                        }), e.on("focus", function (t) {
                            e.isOpen() || n.$selection.focus()
                        })
                    }, SingleSelection.prototype.clear = function () {
                        var e = this.$selection.find(".select2-selection__rendered");
                        e.empty(), e.removeAttr("title")
                    }, SingleSelection.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t))
                    }, SingleSelection.prototype.selectionContainer = function () {
                        return e("<span></span>")
                    }, SingleSelection.prototype.update = function (e) {
                        if (0 === e.length) return void this.clear();
                        var t = e[0], n = this.$selection.find(".select2-selection__rendered"), i = this.display(t, n);
                        n.empty().append(i), n.attr("title", t.title || t.text)
                    }, SingleSelection
                }), a.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n) {
                    function MultipleSelection(e, t) {
                        MultipleSelection.__super__.constructor.apply(this, arguments)
                    }

                    return n.Extend(MultipleSelection, t), MultipleSelection.prototype.render = function () {
                        var e = MultipleSelection.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                    }, MultipleSelection.prototype.bind = function (t, i) {
                        var a = this;
                        MultipleSelection.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e) {
                            a.trigger("toggle", {originalEvent: e})
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function (t) {
                            if (!a.options.get("disabled")) {
                                var i = e(this), s = i.parent(), r = n.GetData(s[0], "data");
                                a.trigger("unselect", {originalEvent: t, data: r})
                            }
                        })
                    }, MultipleSelection.prototype.clear = function () {
                        var e = this.$selection.find(".select2-selection__rendered");
                        e.empty(), e.removeAttr("title")
                    }, MultipleSelection.prototype.display = function (e, t) {
                        var n = this.options.get("templateSelection");
                        return this.options.get("escapeMarkup")(n(e, t))
                    }, MultipleSelection.prototype.selectionContainer = function () {
                        return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                    }, MultipleSelection.prototype.update = function (e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], i = 0; i < e.length; i++) {
                                var a = e[i], s = this.selectionContainer(), r = this.display(a, s);
                                s.append(r), s.attr("title", a.title || a.text), n.StoreData(s[0], "data", a), t.push(s)
                            }
                            var o = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(o, t)
                        }
                    }, MultipleSelection
                }), a.define("select2/selection/placeholder", ["../utils"], function (e) {
                    function Placeholder(e, t, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                    }

                    return Placeholder.prototype.normalizePlaceholder = function (e, t) {
                        return "string" == typeof t && (t = {id: "", text: t}), t
                    }, Placeholder.prototype.createPlaceholder = function (e, t) {
                        var n = this.selectionContainer();
                        return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, Placeholder.prototype.update = function (e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id;
                        if (t.length > 1 || n) return e.call(this, t);
                        this.clear();
                        var i = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(i)
                    }, Placeholder
                }), a.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n) {
                    function AllowClear() {
                    }

                    return AllowClear.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e) {
                            i._handleClear(e)
                        }), t.on("keypress", function (e) {
                            i._handleKeyboardClear(e, t)
                        })
                    }, AllowClear.prototype._handleClear = function (e, t) {
                        if (!this.options.get("disabled")) {
                            var i = this.$selection.find(".select2-selection__clear");
                            if (0 !== i.length) {
                                t.stopPropagation();
                                var a = n.GetData(i[0], "data"), s = this.$element.val();
                                this.$element.val(this.placeholder.id);
                                var r = {data: a};
                                if (this.trigger("clear", r), r.prevented) return void this.$element.val(s);
                                for (var o = 0; o < a.length; o++) if (r = {data: a[o]}, this.trigger("unselect", r), r.prevented) return void this.$element.val(s);
                                this.$element.trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, AllowClear.prototype._handleKeyboardClear = function (e, n, i) {
                        i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
                    }, AllowClear.prototype.update = function (t, i) {
                        if (t.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                            var a = e('<span class="select2-selection__clear">&times;</span>');
                            n.StoreData(a[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(a)
                        }
                    }, AllowClear
                }), a.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n) {
                    function Search(e, t, n) {
                        e.call(this, t, n)
                    }

                    return Search.prototype.render = function (t) {
                        var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = t.call(this);
                        return this._transferTabIndex(), i
                    }, Search.prototype.bind = function (e, i, a) {
                        var s = this;
                        e.call(this, i, a), i.on("open", function () {
                            s.$search.trigger("focus")
                        }), i.on("close", function () {
                            s.$search.val(""), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus")
                        }), i.on("enable", function () {
                            s.$search.prop("disabled", !1), s._transferTabIndex()
                        }), i.on("disable", function () {
                            s.$search.prop("disabled", !0)
                        }), i.on("focus", function (e) {
                            s.$search.trigger("focus")
                        }), i.on("results:focus", function (e) {
                            s.$search.attr("aria-activedescendant", e.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function (e) {
                            s.trigger("focus", e)
                        }), this.$selection.on("focusout", ".select2-search--inline", function (e) {
                            s._handleBlur(e)
                        }), this.$selection.on("keydown", ".select2-search--inline", function (e) {
                            if (e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === s.$search.val()) {
                                var i = s.$searchContainer.prev(".select2-selection__choice");
                                if (i.length > 0) {
                                    var a = t.GetData(i[0], "data");
                                    s.searchRemoveChoice(a), e.preventDefault()
                                }
                            }
                        });
                        var r = document.documentMode, o = r && r <= 11;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function (e) {
                            if (o) return void s.$selection.off("input.search input.searchcheck");
                            s.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e) {
                            if (o && "input" === e.type) return void s.$selection.off("input.search input.searchcheck");
                            var t = e.which;
                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && s.handleSearch(e)
                        })
                    }, Search.prototype._transferTabIndex = function (e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, Search.prototype.createPlaceholder = function (e, t) {
                        this.$search.attr("placeholder", t.text)
                    }, Search.prototype.update = function (e, t) {
                        var n = this.$search[0] == document.activeElement;
                        if (this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n) {
                            this.$element.find("[data-select2-tag]").length ? this.$element.focus() : this.$search.focus()
                        }
                    }, Search.prototype.handleSearch = function () {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {term: e})
                        }
                        this._keyUpPrevented = !1
                    }, Search.prototype.searchRemoveChoice = function (e, t) {
                        this.trigger("unselect", {data: t}), this.$search.val(t.text), this.handleSearch()
                    }, Search.prototype.resizeSearch = function () {
                        this.$search.css("width", "25px");
                        var e = "";
                        if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth(); else {
                            e = .75 * (this.$search.val().length + 1) + "em"
                        }
                        this.$search.css("width", e)
                    }, Search
                }), a.define("select2/selection/eventRelay", ["jquery"], function (e) {
                    function EventRelay() {
                    }

                    return EventRelay.prototype.bind = function (t, n, i) {
                        var a = this,
                            s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                            r = ["opening", "closing", "selecting", "unselecting", "clearing"];
                        t.call(this, n, i), n.on("*", function (t, n) {
                            if (-1 !== e.inArray(t, s)) {
                                n = n || {};
                                var i = e.Event("select2:" + t, {params: n});
                                a.$element.trigger(i), -1 !== e.inArray(t, r) && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, EventRelay
                }), a.define("select2/translation", ["jquery", "require"], function (e, t) {
                    function Translation(e) {
                        this.dict = e || {}
                    }

                    return Translation.prototype.all = function () {
                        return this.dict
                    }, Translation.prototype.get = function (e) {
                        return this.dict[e]
                    }, Translation.prototype.extend = function (t) {
                        this.dict = e.extend({}, t.all(), this.dict)
                    }, Translation._cache = {}, Translation.loadPath = function (e) {
                        if (!(e in Translation._cache)) {
                            var n = t(e);
                            Translation._cache[e] = n
                        }
                        return new Translation(Translation._cache[e])
                    }, Translation
                }), a.define("select2/diacritics", [], function () {
                    return {
                        "Ⓐ": "A",
                        "Ａ": "A",
                        "À": "A",
                        "Á": "A",
                        "Â": "A",
                        "Ầ": "A",
                        "Ấ": "A",
                        "Ẫ": "A",
                        "Ẩ": "A",
                        "Ã": "A",
                        "Ā": "A",
                        "Ă": "A",
                        "Ằ": "A",
                        "Ắ": "A",
                        "Ẵ": "A",
                        "Ẳ": "A",
                        "Ȧ": "A",
                        "Ǡ": "A",
                        "Ä": "A",
                        "Ǟ": "A",
                        "Ả": "A",
                        "Å": "A",
                        "Ǻ": "A",
                        "Ǎ": "A",
                        "Ȁ": "A",
                        "Ȃ": "A",
                        "Ạ": "A",
                        "Ậ": "A",
                        "Ặ": "A",
                        "Ḁ": "A",
                        "Ą": "A",
                        "Ⱥ": "A",
                        "Ɐ": "A",
                        "Ꜳ": "AA",
                        "Æ": "AE",
                        "Ǽ": "AE",
                        "Ǣ": "AE",
                        "Ꜵ": "AO",
                        "Ꜷ": "AU",
                        "Ꜹ": "AV",
                        "Ꜻ": "AV",
                        "Ꜽ": "AY",
                        "Ⓑ": "B",
                        "Ｂ": "B",
                        "Ḃ": "B",
                        "Ḅ": "B",
                        "Ḇ": "B",
                        "Ƀ": "B",
                        "Ƃ": "B",
                        "Ɓ": "B",
                        "Ⓒ": "C",
                        "Ｃ": "C",
                        "Ć": "C",
                        "Ĉ": "C",
                        "Ċ": "C",
                        "Č": "C",
                        "Ç": "C",
                        "Ḉ": "C",
                        "Ƈ": "C",
                        "Ȼ": "C",
                        "Ꜿ": "C",
                        "Ⓓ": "D",
                        "Ｄ": "D",
                        "Ḋ": "D",
                        "Ď": "D",
                        "Ḍ": "D",
                        "Ḑ": "D",
                        "Ḓ": "D",
                        "Ḏ": "D",
                        "Đ": "D",
                        "Ƌ": "D",
                        "Ɗ": "D",
                        "Ɖ": "D",
                        "Ꝺ": "D",
                        "Ǳ": "DZ",
                        "Ǆ": "DZ",
                        "ǲ": "Dz",
                        "ǅ": "Dz",
                        "Ⓔ": "E",
                        "Ｅ": "E",
                        "È": "E",
                        "É": "E",
                        "Ê": "E",
                        "Ề": "E",
                        "Ế": "E",
                        "Ễ": "E",
                        "Ể": "E",
                        "Ẽ": "E",
                        "Ē": "E",
                        "Ḕ": "E",
                        "Ḗ": "E",
                        "Ĕ": "E",
                        "Ė": "E",
                        "Ë": "E",
                        "Ẻ": "E",
                        "Ě": "E",
                        "Ȅ": "E",
                        "Ȇ": "E",
                        "Ẹ": "E",
                        "Ệ": "E",
                        "Ȩ": "E",
                        "Ḝ": "E",
                        "Ę": "E",
                        "Ḙ": "E",
                        "Ḛ": "E",
                        "Ɛ": "E",
                        "Ǝ": "E",
                        "Ⓕ": "F",
                        "Ｆ": "F",
                        "Ḟ": "F",
                        "Ƒ": "F",
                        "Ꝼ": "F",
                        "Ⓖ": "G",
                        "Ｇ": "G",
                        "Ǵ": "G",
                        "Ĝ": "G",
                        "Ḡ": "G",
                        "Ğ": "G",
                        "Ġ": "G",
                        "Ǧ": "G",
                        "Ģ": "G",
                        "Ǥ": "G",
                        "Ɠ": "G",
                        "Ꞡ": "G",
                        "Ᵹ": "G",
                        "Ꝿ": "G",
                        "Ⓗ": "H",
                        "Ｈ": "H",
                        "Ĥ": "H",
                        "Ḣ": "H",
                        "Ḧ": "H",
                        "Ȟ": "H",
                        "Ḥ": "H",
                        "Ḩ": "H",
                        "Ḫ": "H",
                        "Ħ": "H",
                        "Ⱨ": "H",
                        "Ⱶ": "H",
                        "Ɥ": "H",
                        "Ⓘ": "I",
                        "Ｉ": "I",
                        "Ì": "I",
                        "Í": "I",
                        "Î": "I",
                        "Ĩ": "I",
                        "Ī": "I",
                        "Ĭ": "I",
                        "İ": "I",
                        "Ï": "I",
                        "Ḯ": "I",
                        "Ỉ": "I",
                        "Ǐ": "I",
                        "Ȉ": "I",
                        "Ȋ": "I",
                        "Ị": "I",
                        "Į": "I",
                        "Ḭ": "I",
                        "Ɨ": "I",
                        "Ⓙ": "J",
                        "Ｊ": "J",
                        "Ĵ": "J",
                        "Ɉ": "J",
                        "Ⓚ": "K",
                        "Ｋ": "K",
                        "Ḱ": "K",
                        "Ǩ": "K",
                        "Ḳ": "K",
                        "Ķ": "K",
                        "Ḵ": "K",
                        "Ƙ": "K",
                        "Ⱪ": "K",
                        "Ꝁ": "K",
                        "Ꝃ": "K",
                        "Ꝅ": "K",
                        "Ꞣ": "K",
                        "Ⓛ": "L",
                        "Ｌ": "L",
                        "Ŀ": "L",
                        "Ĺ": "L",
                        "Ľ": "L",
                        "Ḷ": "L",
                        "Ḹ": "L",
                        "Ļ": "L",
                        "Ḽ": "L",
                        "Ḻ": "L",
                        "Ł": "L",
                        "Ƚ": "L",
                        "Ɫ": "L",
                        "Ⱡ": "L",
                        "Ꝉ": "L",
                        "Ꝇ": "L",
                        "Ꞁ": "L",
                        "Ǉ": "LJ",
                        "ǈ": "Lj",
                        "Ⓜ": "M",
                        "Ｍ": "M",
                        "Ḿ": "M",
                        "Ṁ": "M",
                        "Ṃ": "M",
                        "Ɱ": "M",
                        "Ɯ": "M",
                        "Ⓝ": "N",
                        "Ｎ": "N",
                        "Ǹ": "N",
                        "Ń": "N",
                        "Ñ": "N",
                        "Ṅ": "N",
                        "Ň": "N",
                        "Ṇ": "N",
                        "Ņ": "N",
                        "Ṋ": "N",
                        "Ṉ": "N",
                        "Ƞ": "N",
                        "Ɲ": "N",
                        "Ꞑ": "N",
                        "Ꞥ": "N",
                        "Ǌ": "NJ",
                        "ǋ": "Nj",
                        "Ⓞ": "O",
                        "Ｏ": "O",
                        "Ò": "O",
                        "Ó": "O",
                        "Ô": "O",
                        "Ồ": "O",
                        "Ố": "O",
                        "Ỗ": "O",
                        "Ổ": "O",
                        "Õ": "O",
                        "Ṍ": "O",
                        "Ȭ": "O",
                        "Ṏ": "O",
                        "Ō": "O",
                        "Ṑ": "O",
                        "Ṓ": "O",
                        "Ŏ": "O",
                        "Ȯ": "O",
                        "Ȱ": "O",
                        "Ö": "O",
                        "Ȫ": "O",
                        "Ỏ": "O",
                        "Ő": "O",
                        "Ǒ": "O",
                        "Ȍ": "O",
                        "Ȏ": "O",
                        "Ơ": "O",
                        "Ờ": "O",
                        "Ớ": "O",
                        "Ỡ": "O",
                        "Ở": "O",
                        "Ợ": "O",
                        "Ọ": "O",
                        "Ộ": "O",
                        "Ǫ": "O",
                        "Ǭ": "O",
                        "Ø": "O",
                        "Ǿ": "O",
                        "Ɔ": "O",
                        "Ɵ": "O",
                        "Ꝋ": "O",
                        "Ꝍ": "O",
                        "Ƣ": "OI",
                        "Ꝏ": "OO",
                        "Ȣ": "OU",
                        "Ⓟ": "P",
                        "Ｐ": "P",
                        "Ṕ": "P",
                        "Ṗ": "P",
                        "Ƥ": "P",
                        "Ᵽ": "P",
                        "Ꝑ": "P",
                        "Ꝓ": "P",
                        "Ꝕ": "P",
                        "Ⓠ": "Q",
                        "Ｑ": "Q",
                        "Ꝗ": "Q",
                        "Ꝙ": "Q",
                        "Ɋ": "Q",
                        "Ⓡ": "R",
                        "Ｒ": "R",
                        "Ŕ": "R",
                        "Ṙ": "R",
                        "Ř": "R",
                        "Ȑ": "R",
                        "Ȓ": "R",
                        "Ṛ": "R",
                        "Ṝ": "R",
                        "Ŗ": "R",
                        "Ṟ": "R",
                        "Ɍ": "R",
                        "Ɽ": "R",
                        "Ꝛ": "R",
                        "Ꞧ": "R",
                        "Ꞃ": "R",
                        "Ⓢ": "S",
                        "Ｓ": "S",
                        "ẞ": "S",
                        "Ś": "S",
                        "Ṥ": "S",
                        "Ŝ": "S",
                        "Ṡ": "S",
                        "Š": "S",
                        "Ṧ": "S",
                        "Ṣ": "S",
                        "Ṩ": "S",
                        "Ș": "S",
                        "Ş": "S",
                        "Ȿ": "S",
                        "Ꞩ": "S",
                        "Ꞅ": "S",
                        "Ⓣ": "T",
                        "Ｔ": "T",
                        "Ṫ": "T",
                        "Ť": "T",
                        "Ṭ": "T",
                        "Ț": "T",
                        "Ţ": "T",
                        "Ṱ": "T",
                        "Ṯ": "T",
                        "Ŧ": "T",
                        "Ƭ": "T",
                        "Ʈ": "T",
                        "Ⱦ": "T",
                        "Ꞇ": "T",
                        "Ꜩ": "TZ",
                        "Ⓤ": "U",
                        "Ｕ": "U",
                        "Ù": "U",
                        "Ú": "U",
                        "Û": "U",
                        "Ũ": "U",
                        "Ṹ": "U",
                        "Ū": "U",
                        "Ṻ": "U",
                        "Ŭ": "U",
                        "Ü": "U",
                        "Ǜ": "U",
                        "Ǘ": "U",
                        "Ǖ": "U",
                        "Ǚ": "U",
                        "Ủ": "U",
                        "Ů": "U",
                        "Ű": "U",
                        "Ǔ": "U",
                        "Ȕ": "U",
                        "Ȗ": "U",
                        "Ư": "U",
                        "Ừ": "U",
                        "Ứ": "U",
                        "Ữ": "U",
                        "Ử": "U",
                        "Ự": "U",
                        "Ụ": "U",
                        "Ṳ": "U",
                        "Ų": "U",
                        "Ṷ": "U",
                        "Ṵ": "U",
                        "Ʉ": "U",
                        "Ⓥ": "V",
                        "Ｖ": "V",
                        "Ṽ": "V",
                        "Ṿ": "V",
                        "Ʋ": "V",
                        "Ꝟ": "V",
                        "Ʌ": "V",
                        "Ꝡ": "VY",
                        "Ⓦ": "W",
                        "Ｗ": "W",
                        "Ẁ": "W",
                        "Ẃ": "W",
                        "Ŵ": "W",
                        "Ẇ": "W",
                        "Ẅ": "W",
                        "Ẉ": "W",
                        "Ⱳ": "W",
                        "Ⓧ": "X",
                        "Ｘ": "X",
                        "Ẋ": "X",
                        "Ẍ": "X",
                        "Ⓨ": "Y",
                        "Ｙ": "Y",
                        "Ỳ": "Y",
                        "Ý": "Y",
                        "Ŷ": "Y",
                        "Ỹ": "Y",
                        "Ȳ": "Y",
                        "Ẏ": "Y",
                        "Ÿ": "Y",
                        "Ỷ": "Y",
                        "Ỵ": "Y",
                        "Ƴ": "Y",
                        "Ɏ": "Y",
                        "Ỿ": "Y",
                        "Ⓩ": "Z",
                        "Ｚ": "Z",
                        "Ź": "Z",
                        "Ẑ": "Z",
                        "Ż": "Z",
                        "Ž": "Z",
                        "Ẓ": "Z",
                        "Ẕ": "Z",
                        "Ƶ": "Z",
                        "Ȥ": "Z",
                        "Ɀ": "Z",
                        "Ⱬ": "Z",
                        "Ꝣ": "Z",
                        "ⓐ": "a",
                        "ａ": "a",
                        "ẚ": "a",
                        "à": "a",
                        "á": "a",
                        "â": "a",
                        "ầ": "a",
                        "ấ": "a",
                        "ẫ": "a",
                        "ẩ": "a",
                        "ã": "a",
                        "ā": "a",
                        "ă": "a",
                        "ằ": "a",
                        "ắ": "a",
                        "ẵ": "a",
                        "ẳ": "a",
                        "ȧ": "a",
                        "ǡ": "a",
                        "ä": "a",
                        "ǟ": "a",
                        "ả": "a",
                        "å": "a",
                        "ǻ": "a",
                        "ǎ": "a",
                        "ȁ": "a",
                        "ȃ": "a",
                        "ạ": "a",
                        "ậ": "a",
                        "ặ": "a",
                        "ḁ": "a",
                        "ą": "a",
                        "ⱥ": "a",
                        "ɐ": "a",
                        "ꜳ": "aa",
                        "æ": "ae",
                        "ǽ": "ae",
                        "ǣ": "ae",
                        "ꜵ": "ao",
                        "ꜷ": "au",
                        "ꜹ": "av",
                        "ꜻ": "av",
                        "ꜽ": "ay",
                        "ⓑ": "b",
                        "ｂ": "b",
                        "ḃ": "b",
                        "ḅ": "b",
                        "ḇ": "b",
                        "ƀ": "b",
                        "ƃ": "b",
                        "ɓ": "b",
                        "ⓒ": "c",
                        "ｃ": "c",
                        "ć": "c",
                        "ĉ": "c",
                        "ċ": "c",
                        "č": "c",
                        "ç": "c",
                        "ḉ": "c",
                        "ƈ": "c",
                        "ȼ": "c",
                        "ꜿ": "c",
                        "ↄ": "c",
                        "ⓓ": "d",
                        "ｄ": "d",
                        "ḋ": "d",
                        "ď": "d",
                        "ḍ": "d",
                        "ḑ": "d",
                        "ḓ": "d",
                        "ḏ": "d",
                        "đ": "d",
                        "ƌ": "d",
                        "ɖ": "d",
                        "ɗ": "d",
                        "ꝺ": "d",
                        "ǳ": "dz",
                        "ǆ": "dz",
                        "ⓔ": "e",
                        "ｅ": "e",
                        "è": "e",
                        "é": "e",
                        "ê": "e",
                        "ề": "e",
                        "ế": "e",
                        "ễ": "e",
                        "ể": "e",
                        "ẽ": "e",
                        "ē": "e",
                        "ḕ": "e",
                        "ḗ": "e",
                        "ĕ": "e",
                        "ė": "e",
                        "ë": "e",
                        "ẻ": "e",
                        "ě": "e",
                        "ȅ": "e",
                        "ȇ": "e",
                        "ẹ": "e",
                        "ệ": "e",
                        "ȩ": "e",
                        "ḝ": "e",
                        "ę": "e",
                        "ḙ": "e",
                        "ḛ": "e",
                        "ɇ": "e",
                        "ɛ": "e",
                        "ǝ": "e",
                        "ⓕ": "f",
                        "ｆ": "f",
                        "ḟ": "f",
                        "ƒ": "f",
                        "ꝼ": "f",
                        "ⓖ": "g",
                        "ｇ": "g",
                        "ǵ": "g",
                        "ĝ": "g",
                        "ḡ": "g",
                        "ğ": "g",
                        "ġ": "g",
                        "ǧ": "g",
                        "ģ": "g",
                        "ǥ": "g",
                        "ɠ": "g",
                        "ꞡ": "g",
                        "ᵹ": "g",
                        "ꝿ": "g",
                        "ⓗ": "h",
                        "ｈ": "h",
                        "ĥ": "h",
                        "ḣ": "h",
                        "ḧ": "h",
                        "ȟ": "h",
                        "ḥ": "h",
                        "ḩ": "h",
                        "ḫ": "h",
                        "ẖ": "h",
                        "ħ": "h",
                        "ⱨ": "h",
                        "ⱶ": "h",
                        "ɥ": "h",
                        "ƕ": "hv",
                        "ⓘ": "i",
                        "ｉ": "i",
                        "ì": "i",
                        "í": "i",
                        "î": "i",
                        "ĩ": "i",
                        "ī": "i",
                        "ĭ": "i",
                        "ï": "i",
                        "ḯ": "i",
                        "ỉ": "i",
                        "ǐ": "i",
                        "ȉ": "i",
                        "ȋ": "i",
                        "ị": "i",
                        "į": "i",
                        "ḭ": "i",
                        "ɨ": "i",
                        "ı": "i",
                        "ⓙ": "j",
                        "ｊ": "j",
                        "ĵ": "j",
                        "ǰ": "j",
                        "ɉ": "j",
                        "ⓚ": "k",
                        "ｋ": "k",
                        "ḱ": "k",
                        "ǩ": "k",
                        "ḳ": "k",
                        "ķ": "k",
                        "ḵ": "k",
                        "ƙ": "k",
                        "ⱪ": "k",
                        "ꝁ": "k",
                        "ꝃ": "k",
                        "ꝅ": "k",
                        "ꞣ": "k",
                        "ⓛ": "l",
                        "ｌ": "l",
                        "ŀ": "l",
                        "ĺ": "l",
                        "ľ": "l",
                        "ḷ": "l",
                        "ḹ": "l",
                        "ļ": "l",
                        "ḽ": "l",
                        "ḻ": "l",
                        "ſ": "l",
                        "ł": "l",
                        "ƚ": "l",
                        "ɫ": "l",
                        "ⱡ": "l",
                        "ꝉ": "l",
                        "ꞁ": "l",
                        "ꝇ": "l",
                        "ǉ": "lj",
                        "ⓜ": "m",
                        "ｍ": "m",
                        "ḿ": "m",
                        "ṁ": "m",
                        "ṃ": "m",
                        "ɱ": "m",
                        "ɯ": "m",
                        "ⓝ": "n",
                        "ｎ": "n",
                        "ǹ": "n",
                        "ń": "n",
                        "ñ": "n",
                        "ṅ": "n",
                        "ň": "n",
                        "ṇ": "n",
                        "ņ": "n",
                        "ṋ": "n",
                        "ṉ": "n",
                        "ƞ": "n",
                        "ɲ": "n",
                        "ŉ": "n",
                        "ꞑ": "n",
                        "ꞥ": "n",
                        "ǌ": "nj",
                        "ⓞ": "o",
                        "ｏ": "o",
                        "ò": "o",
                        "ó": "o",
                        "ô": "o",
                        "ồ": "o",
                        "ố": "o",
                        "ỗ": "o",
                        "ổ": "o",
                        "õ": "o",
                        "ṍ": "o",
                        "ȭ": "o",
                        "ṏ": "o",
                        "ō": "o",
                        "ṑ": "o",
                        "ṓ": "o",
                        "ŏ": "o",
                        "ȯ": "o",
                        "ȱ": "o",
                        "ö": "o",
                        "ȫ": "o",
                        "ỏ": "o",
                        "ő": "o",
                        "ǒ": "o",
                        "ȍ": "o",
                        "ȏ": "o",
                        "ơ": "o",
                        "ờ": "o",
                        "ớ": "o",
                        "ỡ": "o",
                        "ở": "o",
                        "ợ": "o",
                        "ọ": "o",
                        "ộ": "o",
                        "ǫ": "o",
                        "ǭ": "o",
                        "ø": "o",
                        "ǿ": "o",
                        "ɔ": "o",
                        "ꝋ": "o",
                        "ꝍ": "o",
                        "ɵ": "o",
                        "ƣ": "oi",
                        "ȣ": "ou",
                        "ꝏ": "oo",
                        "ⓟ": "p",
                        "ｐ": "p",
                        "ṕ": "p",
                        "ṗ": "p",
                        "ƥ": "p",
                        "ᵽ": "p",
                        "ꝑ": "p",
                        "ꝓ": "p",
                        "ꝕ": "p",
                        "ⓠ": "q",
                        "ｑ": "q",
                        "ɋ": "q",
                        "ꝗ": "q",
                        "ꝙ": "q",
                        "ⓡ": "r",
                        "ｒ": "r",
                        "ŕ": "r",
                        "ṙ": "r",
                        "ř": "r",
                        "ȑ": "r",
                        "ȓ": "r",
                        "ṛ": "r",
                        "ṝ": "r",
                        "ŗ": "r",
                        "ṟ": "r",
                        "ɍ": "r",
                        "ɽ": "r",
                        "ꝛ": "r",
                        "ꞧ": "r",
                        "ꞃ": "r",
                        "ⓢ": "s",
                        "ｓ": "s",
                        "ß": "s",
                        "ś": "s",
                        "ṥ": "s",
                        "ŝ": "s",
                        "ṡ": "s",
                        "š": "s",
                        "ṧ": "s",
                        "ṣ": "s",
                        "ṩ": "s",
                        "ș": "s",
                        "ş": "s",
                        "ȿ": "s",
                        "ꞩ": "s",
                        "ꞅ": "s",
                        "ẛ": "s",
                        "ⓣ": "t",
                        "ｔ": "t",
                        "ṫ": "t",
                        "ẗ": "t",
                        "ť": "t",
                        "ṭ": "t",
                        "ț": "t",
                        "ţ": "t",
                        "ṱ": "t",
                        "ṯ": "t",
                        "ŧ": "t",
                        "ƭ": "t",
                        "ʈ": "t",
                        "ⱦ": "t",
                        "ꞇ": "t",
                        "ꜩ": "tz",
                        "ⓤ": "u",
                        "ｕ": "u",
                        "ù": "u",
                        "ú": "u",
                        "û": "u",
                        "ũ": "u",
                        "ṹ": "u",
                        "ū": "u",
                        "ṻ": "u",
                        "ŭ": "u",
                        "ü": "u",
                        "ǜ": "u",
                        "ǘ": "u",
                        "ǖ": "u",
                        "ǚ": "u",
                        "ủ": "u",
                        "ů": "u",
                        "ű": "u",
                        "ǔ": "u",
                        "ȕ": "u",
                        "ȗ": "u",
                        "ư": "u",
                        "ừ": "u",
                        "ứ": "u",
                        "ữ": "u",
                        "ử": "u",
                        "ự": "u",
                        "ụ": "u",
                        "ṳ": "u",
                        "ų": "u",
                        "ṷ": "u",
                        "ṵ": "u",
                        "ʉ": "u",
                        "ⓥ": "v",
                        "ｖ": "v",
                        "ṽ": "v",
                        "ṿ": "v",
                        "ʋ": "v",
                        "ꝟ": "v",
                        "ʌ": "v",
                        "ꝡ": "vy",
                        "ⓦ": "w",
                        "ｗ": "w",
                        "ẁ": "w",
                        "ẃ": "w",
                        "ŵ": "w",
                        "ẇ": "w",
                        "ẅ": "w",
                        "ẘ": "w",
                        "ẉ": "w",
                        "ⱳ": "w",
                        "ⓧ": "x",
                        "ｘ": "x",
                        "ẋ": "x",
                        "ẍ": "x",
                        "ⓨ": "y",
                        "ｙ": "y",
                        "ỳ": "y",
                        "ý": "y",
                        "ŷ": "y",
                        "ỹ": "y",
                        "ȳ": "y",
                        "ẏ": "y",
                        "ÿ": "y",
                        "ỷ": "y",
                        "ẙ": "y",
                        "ỵ": "y",
                        "ƴ": "y",
                        "ɏ": "y",
                        "ỿ": "y",
                        "ⓩ": "z",
                        "ｚ": "z",
                        "ź": "z",
                        "ẑ": "z",
                        "ż": "z",
                        "ž": "z",
                        "ẓ": "z",
                        "ẕ": "z",
                        "ƶ": "z",
                        "ȥ": "z",
                        "ɀ": "z",
                        "ⱬ": "z",
                        "ꝣ": "z",
                        "Ά": "Α",
                        "Έ": "Ε",
                        "Ή": "Η",
                        "Ί": "Ι",
                        "Ϊ": "Ι",
                        "Ό": "Ο",
                        "Ύ": "Υ",
                        "Ϋ": "Υ",
                        "Ώ": "Ω",
                        "ά": "α",
                        "έ": "ε",
                        "ή": "η",
                        "ί": "ι",
                        "ϊ": "ι",
                        "ΐ": "ι",
                        "ό": "ο",
                        "ύ": "υ",
                        "ϋ": "υ",
                        "ΰ": "υ",
                        "ω": "ω",
                        "ς": "σ"
                    }
                }), a.define("select2/data/base", ["../utils"], function (e) {
                    function BaseAdapter(e, t) {
                        BaseAdapter.__super__.constructor.call(this)
                    }

                    return e.Extend(BaseAdapter, e.Observable), BaseAdapter.prototype.current = function (e) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, BaseAdapter.prototype.query = function (e, t) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, BaseAdapter.prototype.bind = function (e, t) {
                    }, BaseAdapter.prototype.destroy = function () {
                    }, BaseAdapter.prototype.generateResultId = function (t, n) {
                        var i = t.id + "-result-";
                        return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
                    }, BaseAdapter
                }), a.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n) {
                    function SelectAdapter(e, t) {
                        this.$element = e, this.options = t, SelectAdapter.__super__.constructor.call(this)
                    }

                    return t.Extend(SelectAdapter, e), SelectAdapter.prototype.current = function (e) {
                        var t = [], i = this;
                        this.$element.find(":selected").each(function () {
                            var e = n(this), a = i.item(e);
                            t.push(a)
                        }), e(t)
                    }, SelectAdapter.prototype.select = function (e) {
                        var t = this;
                        if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function (i) {
                            var a = [];
                            e = [e], e.push.apply(e, i);
                            for (var s = 0; s < e.length; s++) {
                                var r = e[s].id;
                                -1 === n.inArray(r, a) && a.push(r)
                            }
                            t.$element.val(a), t.$element.trigger("change")
                        }); else {
                            var i = e.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, SelectAdapter.prototype.unselect = function (e) {
                        var t = this;
                        if (this.$element.prop("multiple")) {
                            if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("change");
                            this.current(function (i) {
                                for (var a = [], s = 0; s < i.length; s++) {
                                    var r = i[s].id;
                                    r !== e.id && -1 === n.inArray(r, a) && a.push(r)
                                }
                                t.$element.val(a), t.$element.trigger("change")
                            })
                        }
                    }, SelectAdapter.prototype.bind = function (e, t) {
                        var n = this;
                        this.container = e, e.on("select", function (e) {
                            n.select(e.data)
                        }), e.on("unselect", function (e) {
                            n.unselect(e.data)
                        })
                    }, SelectAdapter.prototype.destroy = function () {
                        this.$element.find("*").each(function () {
                            t.RemoveData(this)
                        })
                    }, SelectAdapter.prototype.query = function (e, t) {
                        var i = [], a = this;
                        this.$element.children().each(function () {
                            var t = n(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var s = a.item(t), r = a.matches(e, s);
                                null !== r && i.push(r)
                            }
                        }), t({results: i})
                    }, SelectAdapter.prototype.addOptions = function (e) {
                        t.appendMany(this.$element, e)
                    }, SelectAdapter.prototype.option = function (e) {
                        var i;
                        e.children ? (i = document.createElement("optgroup"), i.label = e.text) : (i = document.createElement("option"), void 0 !== i.textContent ? i.textContent = e.text : i.innerText = e.text), void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
                        var a = n(i), s = this._normalizeItem(e);
                        return s.element = i, t.StoreData(i, "data", s), a
                    }, SelectAdapter.prototype.item = function (e) {
                        var i = {};
                        if (null != (i = t.GetData(e[0], "data"))) return i;
                        if (e.is("option")) i = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        }; else if (e.is("optgroup")) {
                            i = {text: e.prop("label"), children: [], title: e.prop("title")};
                            for (var a = e.children("option"), s = [], r = 0; r < a.length; r++) {
                                var o = n(a[r]), l = this.item(o);
                                s.push(l)
                            }
                            i.children = s
                        }
                        return i = this._normalizeItem(i), i.element = e[0], t.StoreData(e[0], "data", i), i
                    }, SelectAdapter.prototype._normalizeItem = function (e) {
                        e !== Object(e) && (e = {id: e, text: e}), e = n.extend({}, {text: ""}, e);
                        var t = {selected: !1, disabled: !1};
                        return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                    }, SelectAdapter.prototype.matches = function (e, t) {
                        return this.options.get("matcher")(e, t)
                    }, SelectAdapter
                }), a.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n) {
                    function ArrayAdapter(e, t) {
                        var n = t.get("data") || [];
                        ArrayAdapter.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                    }

                    return t.Extend(ArrayAdapter, e), ArrayAdapter.prototype.select = function (e) {
                        var t = this.$element.find("option").filter(function (t, n) {
                            return n.value == e.id.toString()
                        });
                        0 === t.length && (t = this.option(e), this.addOptions(t)), ArrayAdapter.__super__.select.call(this, e)
                    }, ArrayAdapter.prototype.convertToOptions = function (e) {
                        for (var i = this, a = this.$element.find("option"), s = a.map(function () {
                            return i.item(n(this)).id
                        }).get(), r = [], o = 0; o < e.length; o++) {
                            var l = this._normalizeItem(e[o]);
                            if (n.inArray(l.id, s) >= 0) {
                                var d = a.filter(function (e) {
                                    return function () {
                                        return n(this).val() == e.id
                                    }
                                }(l)), u = this.item(d), c = n.extend(!0, {}, l, u), h = this.option(c);
                                d.replaceWith(h)
                            } else {
                                var m = this.option(l);
                                if (l.children) {
                                    var p = this.convertToOptions(l.children);
                                    t.appendMany(m, p)
                                }
                                r.push(m)
                            }
                        }
                        return r
                    }, ArrayAdapter
                }), a.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n) {
                    function AjaxAdapter(e, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), AjaxAdapter.__super__.constructor.call(this, e, t)
                    }

                    return t.Extend(AjaxAdapter, e), AjaxAdapter.prototype._applyDefaults = function (e) {
                        var t = {
                            data: function (e) {
                                return n.extend({}, e, {q: e.term})
                            }, transport: function (e, t, i) {
                                var a = n.ajax(e);
                                return a.then(t), a.fail(i), a
                            }
                        };
                        return n.extend({}, t, e, !0)
                    }, AjaxAdapter.prototype.processResults = function (e) {
                        return e
                    }, AjaxAdapter.prototype.query = function (e, t) {
                        function request() {
                            var s = a.transport(a, function (a) {
                                var s = i.processResults(a, e);
                                i.options.get("debug") && window.console && console.error && (s && s.results && n.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(s)
                            }, function () {
                                "status" in s && (0 === s.status || "0" === s.status) || i.trigger("results:message", {message: "errorLoading"})
                            });
                            i._request = s
                        }

                        var i = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var a = n.extend({type: "GET"}, this.ajaxOptions);
                        "function" == typeof a.url && (a.url = a.url.call(this.$element, e)), "function" == typeof a.data && (a.data = a.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay)) : request()
                    }, AjaxAdapter
                }), a.define("select2/data/tags", ["jquery"], function (e) {
                    function Tags(t, n, i) {
                        var a = i.get("tags"), s = i.get("createTag");
                        void 0 !== s && (this.createTag = s);
                        var r = i.get("insertTag");
                        if (void 0 !== r && (this.insertTag = r), t.call(this, n, i), e.isArray(a)) for (var o = 0; o < a.length; o++) {
                            var l = a[o], d = this._normalizeItem(l), u = this.option(d);
                            this.$element.append(u)
                        }
                    }

                    return Tags.prototype.query = function (e, t, n) {
                        function wrapper(e, a) {
                            for (var s = e.results, r = 0; r < s.length; r++) {
                                var o = s[r], l = null != o.children && !wrapper({results: o.children}, !0);
                                if ((o.text || "").toUpperCase() === (t.term || "").toUpperCase() || l) return !a && (e.data = s, void n(e))
                            }
                            if (a) return !0;
                            var d = i.createTag(t);
                            if (null != d) {
                                var u = i.option(d);
                                u.attr("data-select2-tag", !0), i.addOptions([u]), i.insertTag(s, d)
                            }
                            e.results = s, n(e)
                        }

                        var i = this;
                        if (this._removeOldTags(), null == t.term || null != t.page) return void e.call(this, t, n);
                        e.call(this, t, wrapper)
                    }, Tags.prototype.createTag = function (t, n) {
                        var i = e.trim(n.term);
                        return "" === i ? null : {id: i, text: i}
                    }, Tags.prototype.insertTag = function (e, t, n) {
                        t.unshift(n)
                    }, Tags.prototype._removeOldTags = function (t) {
                        this._lastTag;
                        this.$element.find("option[data-select2-tag]").each(function () {
                            this.selected || e(this).remove()
                        })
                    }, Tags
                }), a.define("select2/data/tokenizer", ["jquery"], function (e) {
                    function Tokenizer(e, t, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                    }

                    return Tokenizer.prototype.bind = function (e, t, n) {
                        e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                    }, Tokenizer.prototype.query = function (t, n, i) {
                        function createAndSelect(t) {
                            var n = a._normalizeItem(t);
                            if (!a.$element.find("option").filter(function () {
                                    return e(this).val() === n.id
                                }).length) {
                                var i = a.option(n);
                                i.attr("data-select2-tag", !0), a._removeOldTags(), a.addOptions([i])
                            }
                            select(n)
                        }

                        function select(e) {
                            a.trigger("select", {data: e})
                        }

                        var a = this;
                        n.term = n.term || "";
                        var s = this.tokenizer(n, this.options, createAndSelect);
                        s.term !== n.term && (this.$search.length && (this.$search.val(s.term), this.$search.focus()), n.term = s.term), t.call(this, n, i)
                    }, Tokenizer.prototype.tokenizer = function (t, n, i, a) {
                        for (var s = i.get("tokenSeparators") || [], r = n.term, o = 0, l = this.createTag || function (e) {
                            return {id: e.term, text: e.term}
                        }; o < r.length;) {
                            var d = r[o];
                            if (-1 !== e.inArray(d, s)) {
                                var u = r.substr(0, o), c = e.extend({}, n, {term: u}), h = l(c);
                                null != h ? (a(h), r = r.substr(o + 1) || "", o = 0) : o++
                            } else o++
                        }
                        return {term: r}
                    }, Tokenizer
                }), a.define("select2/data/minimumInputLength", [], function () {
                    function MinimumInputLength(e, t, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                    }

                    return MinimumInputLength.prototype.query = function (e, t, n) {
                        if (t.term = t.term || "", t.term.length < this.minimumInputLength) return void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {minimum: this.minimumInputLength, input: t.term, params: t}
                        });
                        e.call(this, t, n)
                    }, MinimumInputLength
                }), a.define("select2/data/maximumInputLength", [], function () {
                    function MaximumInputLength(e, t, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                    }

                    return MaximumInputLength.prototype.query = function (e, t, n) {
                        if (t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength) return void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {maximum: this.maximumInputLength, input: t.term, params: t}
                        });
                        e.call(this, t, n)
                    }, MaximumInputLength
                }), a.define("select2/data/maximumSelectionLength", [], function () {
                    function MaximumSelectionLength(e, t, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                    }

                    return MaximumSelectionLength.prototype.query = function (e, t, n) {
                        var i = this;
                        this.current(function (a) {
                            var s = null != a ? a.length : 0;
                            if (i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength) return void i.trigger("results:message", {
                                message: "maximumSelected",
                                args: {maximum: i.maximumSelectionLength}
                            });
                            e.call(i, t, n)
                        })
                    }, MaximumSelectionLength
                }), a.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
                    function Dropdown(e, t) {
                        this.$element = e, this.options = t, Dropdown.__super__.constructor.call(this)
                    }

                    return t.Extend(Dropdown, t.Observable), Dropdown.prototype.render = function () {
                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                    }, Dropdown.prototype.bind = function () {
                    }, Dropdown.prototype.position = function (e, t) {
                    }, Dropdown.prototype.destroy = function () {
                        this.$dropdown.remove()
                    }, Dropdown
                }), a.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t) {
                    function Search() {
                    }

                    return Search.prototype.render = function (t) {
                        var n = t.call(this),
                            i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, Search.prototype.bind = function (t, n, i) {
                        var a = this;
                        t.call(this, n, i), this.$search.on("keydown", function (e) {
                            a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented()
                        }), this.$search.on("input", function (t) {
                            e(this).off("keyup")
                        }), this.$search.on("keyup input", function (e) {
                            a.handleSearch(e)
                        }), n.on("open", function () {
                            a.$search.attr("tabindex", 0), a.$search.focus(), window.setTimeout(function () {
                                a.$search.focus()
                            }, 0)
                        }), n.on("close", function () {
                            a.$search.attr("tabindex", -1), a.$search.val(""), a.$search.blur()
                        }), n.on("focus", function () {
                            n.isOpen() || a.$search.focus()
                        }), n.on("results:all", function (e) {
                            if (null == e.query.term || "" === e.query.term) {
                                a.showSearch(e) ? a.$searchContainer.removeClass("select2-search--hide") : a.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, Search.prototype.handleSearch = function (e) {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {term: t})
                        }
                        this._keyUpPrevented = !1
                    }, Search.prototype.showSearch = function (e, t) {
                        return !0
                    }, Search
                }), a.define("select2/dropdown/hidePlaceholder", [], function () {
                    function HidePlaceholder(e, t, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                    }

                    return HidePlaceholder.prototype.append = function (e, t) {
                        t.results = this.removePlaceholder(t.results), e.call(this, t)
                    }, HidePlaceholder.prototype.normalizePlaceholder = function (e, t) {
                        return "string" == typeof t && (t = {id: "", text: t}), t
                    }, HidePlaceholder.prototype.removePlaceholder = function (e, t) {
                        for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                            var a = t[i];
                            this.placeholder.id === a.id && n.splice(i, 1)
                        }
                        return n
                    }, HidePlaceholder
                }), a.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
                    function InfiniteScroll(e, t, n, i) {
                        this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }

                    return InfiniteScroll.prototype.append = function (e, t) {
                        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, InfiniteScroll.prototype.bind = function (t, n, i) {
                        var a = this;
                        t.call(this, n, i), n.on("query", function (e) {
                            a.lastParams = e, a.loading = !0
                        }), n.on("query:append", function (e) {
                            a.lastParams = e, a.loading = !0
                        }), this.$results.on("scroll", function () {
                            var t = e.contains(document.documentElement, a.$loadingMore[0]);
                            if (!a.loading && t) {
                                a.$results.offset().top + a.$results.outerHeight(!1) + 50 >= a.$loadingMore.offset().top + a.$loadingMore.outerHeight(!1) && a.loadMore()
                            }
                        })
                    }, InfiniteScroll.prototype.loadMore = function () {
                        this.loading = !0;
                        var t = e.extend({}, {page: 1}, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, InfiniteScroll.prototype.showLoadingMore = function (e, t) {
                        return t.pagination && t.pagination.more
                    }, InfiniteScroll.prototype.createLoadingMore = function () {
                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return t.html(n(this.lastParams)), t
                    }, InfiniteScroll
                }), a.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t) {
                    function AttachBody(t, n, i) {
                        this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                    }

                    return AttachBody.prototype.bind = function (e, t, n) {
                        var i = this, a = !1;
                        e.call(this, t, n), t.on("open", function () {
                            i._showDropdown(), i._attachPositioningHandler(t), a || (a = !0, t.on("results:all", function () {
                                i._positionDropdown(), i._resizeDropdown()
                            }), t.on("results:append", function () {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), t.on("close", function () {
                            i._hideDropdown(), i._detachPositioningHandler(t)
                        }), this.$dropdownContainer.on("mousedown", function (e) {
                            e.stopPropagation()
                        })
                    }, AttachBody.prototype.destroy = function (e) {
                        e.call(this), this.$dropdownContainer.remove()
                    }, AttachBody.prototype.position = function (e, t, n) {
                        t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, AttachBody.prototype.render = function (t) {
                        var n = e("<span></span>"), i = t.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, AttachBody.prototype._hideDropdown = function (e) {
                        this.$dropdownContainer.detach()
                    }, AttachBody.prototype._attachPositioningHandler = function (n, i) {
                        var a = this, s = "scroll.select2." + i.id, r = "resize.select2." + i.id,
                            o = "orientationchange.select2." + i.id, l = this.$container.parents().filter(t.hasScroll);
                        l.each(function () {
                            t.StoreData(this, "select2-scroll-position", {
                                x: e(this).scrollLeft(),
                                y: e(this).scrollTop()
                            })
                        }), l.on(s, function (n) {
                            var i = t.GetData(this, "select2-scroll-position");
                            e(this).scrollTop(i.y)
                        }), e(window).on(s + " " + r + " " + o, function (e) {
                            a._positionDropdown(), a._resizeDropdown()
                        })
                    }, AttachBody.prototype._detachPositioningHandler = function (n, i) {
                        var a = "scroll.select2." + i.id, s = "resize.select2." + i.id,
                            r = "orientationchange.select2." + i.id;
                        this.$container.parents().filter(t.hasScroll).off(a), e(window).off(a + " " + s + " " + r)
                    }, AttachBody.prototype._positionDropdown = function () {
                        var t = e(window), n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"), a = null,
                            s = this.$container.offset();
                        s.bottom = s.top + this.$container.outerHeight(!1);
                        var r = {height: this.$container.outerHeight(!1)};
                        r.top = s.top, r.bottom = s.top + r.height;
                        var o = {height: this.$dropdown.outerHeight(!1)},
                            l = {top: t.scrollTop(), bottom: t.scrollTop() + t.height()}, d = l.top < s.top - o.height,
                            u = l.bottom > s.bottom + o.height, c = {left: s.left, top: r.bottom},
                            h = this.$dropdownParent;
                        "static" === h.css("position") && (h = h.offsetParent());
                        var m = h.offset();
                        c.top -= m.top, c.left -= m.left, n || i || (a = "below"), u || !d || n ? !d && u && n && (a = "below") : a = "above", ("above" == a || n && "below" !== a) && (c.top = r.top - m.top - o.height), null != a && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + a), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + a)), this.$dropdownContainer.css(c)
                    }, AttachBody.prototype._resizeDropdown = function () {
                        var e = {width: this.$container.outerWidth(!1) + "px"};
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, AttachBody.prototype._showDropdown = function (e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, AttachBody
                }), a.define("select2/dropdown/minimumResultsForSearch", [], function () {
                    function countResults(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.children ? t += countResults(i.children) : t++
                        }
                        return t
                    }

                    function MinimumResultsForSearch(e, t, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                    }

                    return MinimumResultsForSearch.prototype.showSearch = function (e, t) {
                        return !(countResults(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                    }, MinimumResultsForSearch
                }), a.define("select2/dropdown/selectOnClose", ["../utils"], function (e) {
                    function SelectOnClose() {
                    }

                    return SelectOnClose.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("close", function (e) {
                            i._handleSelectOnClose(e)
                        })
                    }, SelectOnClose.prototype._handleSelectOnClose = function (t, n) {
                        if (n && null != n.originalSelect2Event) {
                            var i = n.originalSelect2Event;
                            if ("select" === i._type || "unselect" === i._type) return
                        }
                        var a = this.getHighlightedResults();
                        if (!(a.length < 1)) {
                            var s = e.GetData(a[0], "data");
                            null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select", {data: s})
                        }
                    }, SelectOnClose
                }), a.define("select2/dropdown/closeOnSelect", [], function () {
                    function CloseOnSelect() {
                    }

                    return CloseOnSelect.prototype.bind = function (e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("select", function (e) {
                            i._selectTriggered(e)
                        }), t.on("unselect", function (e) {
                            i._selectTriggered(e)
                        })
                    }, CloseOnSelect.prototype._selectTriggered = function (e, t) {
                        var n = t.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {originalEvent: n, originalSelect2Event: t})
                    }, CloseOnSelect
                }), a.define("select2/i18n/en", [], function () {
                    return {
                        errorLoading: function () {
                            return "The results could not be loaded."
                        }, inputTooLong: function (e) {
                            var t = e.input.length - e.maximum, n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n
                        }, inputTooShort: function (e) {
                            return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                        }, loadingMore: function () {
                            return "Loading more results…"
                        }, maximumSelected: function (e) {
                            var t = "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t
                        }, noResults: function () {
                            return "No results found"
                        }, searching: function () {
                            return "Searching…"
                        }
                    }
                }), a.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, a, s, r, o, l, d, u, c, h, m, p, f, _, y, g, M, v, k, L, w, Y, T, D, b, S) {
                    function Defaults() {
                        this.reset()
                    }

                    return Defaults.prototype.apply = function (c) {
                        if (c = e.extend(!0, {}, this.defaults, c), null == c.dataAdapter) {
                            if (null != c.ajax ? c.dataAdapter = p : null != c.data ? c.dataAdapter = m : c.dataAdapter = h, c.minimumInputLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, y)), c.maximumInputLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, g)), c.maximumSelectionLength > 0 && (c.dataAdapter = d.Decorate(c.dataAdapter, M)), c.tags && (c.dataAdapter = d.Decorate(c.dataAdapter, f)), null == c.tokenSeparators && null == c.tokenizer || (c.dataAdapter = d.Decorate(c.dataAdapter, _)), null != c.query) {
                                var S = t(c.amdBase + "compat/query");
                                c.dataAdapter = d.Decorate(c.dataAdapter, S)
                            }
                            if (null != c.initSelection) {
                                var x = t(c.amdBase + "compat/initSelection");
                                c.dataAdapter = d.Decorate(c.dataAdapter, x)
                            }
                        }
                        if (null == c.resultsAdapter && (c.resultsAdapter = n, null != c.ajax && (c.resultsAdapter = d.Decorate(c.resultsAdapter, w)), null != c.placeholder && (c.resultsAdapter = d.Decorate(c.resultsAdapter, L)), c.selectOnClose && (c.resultsAdapter = d.Decorate(c.resultsAdapter, D))), null == c.dropdownAdapter) {
                            if (c.multiple) c.dropdownAdapter = v; else {
                                var C = d.Decorate(v, k);
                                c.dropdownAdapter = C
                            }
                            if (0 !== c.minimumResultsForSearch && (c.dropdownAdapter = d.Decorate(c.dropdownAdapter, T)), c.closeOnSelect && (c.dropdownAdapter = d.Decorate(c.dropdownAdapter, b)), null != c.dropdownCssClass || null != c.dropdownCss || null != c.adaptDropdownCssClass) {
                                var H = t(c.amdBase + "compat/dropdownCss");
                                c.dropdownAdapter = d.Decorate(c.dropdownAdapter, H)
                            }
                            c.dropdownAdapter = d.Decorate(c.dropdownAdapter, Y)
                        }
                        if (null == c.selectionAdapter) {
                            if (c.multiple ? c.selectionAdapter = a : c.selectionAdapter = i, null != c.placeholder && (c.selectionAdapter = d.Decorate(c.selectionAdapter, s)), c.allowClear && (c.selectionAdapter = d.Decorate(c.selectionAdapter, r)), c.multiple && (c.selectionAdapter = d.Decorate(c.selectionAdapter, o)), null != c.containerCssClass || null != c.containerCss || null != c.adaptContainerCssClass) {
                                var j = t(c.amdBase + "compat/containerCss");
                                c.selectionAdapter = d.Decorate(c.selectionAdapter, j)
                            }
                            c.selectionAdapter = d.Decorate(c.selectionAdapter, l)
                        }
                        if ("string" == typeof c.language) if (c.language.indexOf("-") > 0) {
                            var A = c.language.split("-"), P = A[0];
                            c.language = [c.language, P]
                        } else c.language = [c.language];
                        if (e.isArray(c.language)) {
                            var O = new u;
                            c.language.push("en");
                            for (var E = c.language, F = 0; F < E.length; F++) {
                                var $ = E[F], W = {};
                                try {
                                    W = u.loadPath($)
                                } catch (e) {
                                    try {
                                        $ = this.defaults.amdLanguageBase + $, W = u.loadPath($)
                                    } catch (e) {
                                        c.debug && window.console && console.warn && console.warn('Select2: The language file for "' + $ + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                O.extend(W)
                            }
                            c.translations = O
                        } else {
                            var I = u.loadPath(this.defaults.amdLanguageBase + "en"), R = new u(c.language);
                            R.extend(I), c.translations = R
                        }
                        return c
                    }, Defaults.prototype.reset = function () {
                        function stripDiacritics(e) {
                            function match(e) {
                                return c[e] || e
                            }

                            return e.replace(/[^\u0000-\u007E]/g, match)
                        }

                        function matcher(t, n) {
                            if ("" === e.trim(t.term)) return n;
                            if (n.children && n.children.length > 0) {
                                for (var i = e.extend(!0, {}, n), a = n.children.length - 1; a >= 0; a--) {
                                    null == matcher(t, n.children[a]) && i.children.splice(a, 1)
                                }
                                return i.children.length > 0 ? i : matcher(t, i)
                            }
                            var s = stripDiacritics(n.text).toUpperCase(), r = stripDiacritics(t.term).toUpperCase();
                            return s.indexOf(r) > -1 ? n : null
                        }

                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: d.escapeMarkup,
                            language: S,
                            matcher: matcher,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function (e) {
                                return e
                            },
                            templateResult: function (e) {
                                return e.text
                            },
                            templateSelection: function (e) {
                                return e.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, Defaults.prototype.set = function (t, n) {
                        var i = e.camelCase(t), a = {};
                        a[i] = n;
                        var s = d._convertData(a);
                        e.extend(!0, this.defaults, s)
                    }, new Defaults
                }), a.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i) {
                    function Options(t, a) {
                        if (this.options = t, null != a && this.fromElement(a), this.options = n.apply(this.options), a && a.is("input")) {
                            var s = e(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, s)
                        }
                    }

                    return Options.prototype.fromElement = function (e) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                        var a = {};
                        a = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, i.GetData(e[0])) : i.GetData(e[0]);
                        var s = t.extend(!0, {}, a);
                        s = i._convertData(s);
                        for (var r in s) t.inArray(r, n) > -1 || (t.isPlainObject(this.options[r]) ? t.extend(this.options[r], s[r]) : this.options[r] = s[r]);
                        return this
                    }, Options.prototype.get = function (e) {
                        return this.options[e]
                    }, Options.prototype.set = function (e, t) {
                        this.options[e] = t
                    }, Options
                }), a.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i) {
                    var a = function Select2(e, i) {
                        null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), i = i || {}, this.options = new t(i, e), Select2.__super__.constructor.call(this);
                        var a = e.attr("tabindex") || 0;
                        n.StoreData(e[0], "old-tabindex", a), e.attr("tabindex", "-1");
                        var s = this.options.get("dataAdapter");
                        this.dataAdapter = new s(e, this.options);
                        var r = this.render();
                        this._placeContainer(r);
                        var o = this.options.get("selectionAdapter");
                        this.selection = new o(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                        var d = this.options.get("resultsAdapter");
                        this.results = new d(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var u = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e) {
                            u.trigger("selection:update", {data: e})
                        }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(e[0], "select2", this), e.data("select2", this)
                    };
                    return n.Extend(a, n.Observable), a.prototype._generateId = function (e) {
                        var t = "";
                        return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                    }, a.prototype._placeContainer = function (e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, a.prototype._resolveWidth = function (e, t) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var i = this._resolveWidth(e, "style");
                            return null != i ? i : this._resolveWidth(e, "element")
                        }
                        if ("element" == t) {
                            var a = e.outerWidth(!1);
                            return a <= 0 ? "auto" : a + "px"
                        }
                        if ("style" == t) {
                            var s = e.attr("style");
                            if ("string" != typeof s) return null;
                            for (var r = s.split(";"), o = 0, l = r.length; o < l; o += 1) {
                                var d = r[o].replace(/\s/g, ""), u = d.match(n);
                                if (null !== u && u.length >= 1) return u[1]
                            }
                            return null
                        }
                        return t
                    }, a.prototype._bindAdapters = function () {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, a.prototype._registerDomEvents = function () {
                        var t = this;
                        this.$element.on("change.select2", function () {
                            t.dataAdapter.current(function (e) {
                                t.trigger("selection:update", {data: e})
                            })
                        }), this.$element.on("focus.select2", function (e) {
                            t.trigger("focus", e)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function (n) {
                            e.each(n, t._syncA), e.each(n, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, a.prototype._registerDataEvents = function () {
                        var e = this;
                        this.dataAdapter.on("*", function (t, n) {
                            e.trigger(t, n)
                        })
                    }, a.prototype._registerSelectionEvents = function () {
                        var t = this, n = ["toggle", "focus"];
                        this.selection.on("toggle", function () {
                            t.toggleDropdown()
                        }), this.selection.on("focus", function (e) {
                            t.focus(e)
                        }), this.selection.on("*", function (i, a) {
                            -1 === e.inArray(i, n) && t.trigger(i, a)
                        })
                    }, a.prototype._registerDropdownEvents = function () {
                        var e = this;
                        this.dropdown.on("*", function (t, n) {
                            e.trigger(t, n)
                        })
                    }, a.prototype._registerResultsEvents = function () {
                        var e = this;
                        this.results.on("*", function (t, n) {
                            e.trigger(t, n)
                        })
                    }, a.prototype._registerEvents = function () {
                        var e = this;
                        this.on("open", function () {
                            e.$container.addClass("select2-container--open")
                        }), this.on("close", function () {
                            e.$container.removeClass("select2-container--open")
                        }), this.on("enable", function () {
                            e.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function () {
                            e.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function () {
                            e.$container.removeClass("select2-container--focus")
                        }), this.on("query", function (t) {
                            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function (n) {
                                e.trigger("results:all", {data: n, query: t})
                            })
                        }), this.on("query:append", function (t) {
                            this.dataAdapter.query(t, function (n) {
                                e.trigger("results:append", {data: n, query: t})
                            })
                        }), this.on("keypress", function (t) {
                            var n = t.which;
                            e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                        })
                    }, a.prototype._syncAttributes = function () {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, a.prototype._syncSubtree = function (e, t) {
                        var n = !1, i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t) if (t.addedNodes && t.addedNodes.length > 0) for (var a = 0; a < t.addedNodes.length; a++) {
                                var s = t.addedNodes[a];
                                s.selected && (n = !0)
                            } else t.removedNodes && t.removedNodes.length > 0 && (n = !0); else n = !0;
                            n && this.dataAdapter.current(function (e) {
                                i.trigger("selection:update", {data: e})
                            })
                        }
                    }, a.prototype.trigger = function (e, t) {
                        var n = a.__super__.trigger, i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting",
                            clear: "clearing"
                        };
                        if (void 0 === t && (t = {}), e in i) {
                            var s = i[e], r = {prevented: !1, name: e, args: t};
                            if (n.call(this, s, r), r.prevented) return void(t.prevented = !0)
                        }
                        n.call(this, e, t)
                    }, a.prototype.toggleDropdown = function () {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, a.prototype.open = function () {
                        this.isOpen() || this.trigger("query", {})
                    }, a.prototype.close = function () {
                        this.isOpen() && this.trigger("close", {})
                    }, a.prototype.isOpen = function () {
                        return this.$container.hasClass("select2-container--open")
                    }, a.prototype.hasFocus = function () {
                        return this.$container.hasClass("select2-container--focus")
                    }, a.prototype.focus = function (e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, a.prototype.enable = function (e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, a.prototype.data = function () {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var e = [];
                        return this.dataAdapter.current(function (t) {
                            e = t
                        }), e
                    }, a.prototype.val = function (t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                        var n = t[0];
                        e.isArray(n) && (n = e.map(n, function (e) {
                            return e.toString()
                        })), this.$element.val(n).trigger("change")
                    }, a.prototype.destroy = function () {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, a.prototype.render = function () {
                        var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
                    }, a
                }), a.define("select2/compat/utils", ["jquery"], function (e) {
                    function syncCssClasses(t, n, i) {
                        var a, s, r = [];
                        a = e.trim(t.attr("class")), a && (a = "" + a, e(a.split(/\s+/)).each(function () {
                            0 === this.indexOf("select2-") && r.push(this)
                        })), a = e.trim(n.attr("class")), a && (a = "" + a, e(a.split(/\s+/)).each(function () {
                            0 !== this.indexOf("select2-") && null != (s = i(this)) && r.push(s)
                        })), t.attr("class", r.join(" "))
                    }

                    return {syncCssClasses: syncCssClasses}
                }), a.define("select2/compat/containerCss", ["jquery", "./utils"], function (e, t) {
                    function _containerAdapter(e) {
                        return null
                    }

                    function ContainerCSS() {
                    }

                    return ContainerCSS.prototype.render = function (n) {
                        var i = n.call(this), a = this.options.get("containerCssClass") || "";
                        e.isFunction(a) && (a = a(this.$element));
                        var s = this.options.get("adaptContainerCssClass");
                        if (s = s || _containerAdapter, -1 !== a.indexOf(":all:")) {
                            a = a.replace(":all:", "");
                            var r = s;
                            s = function (e) {
                                var t = r(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var o = this.options.get("containerCss") || {};
                        return e.isFunction(o) && (o = o(this.$element)), t.syncCssClasses(i, this.$element, s), i.css(o), i.addClass(a), i
                    }, ContainerCSS
                }), a.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (e, t) {
                    function _dropdownAdapter(e) {
                        return null
                    }

                    function DropdownCSS() {
                    }

                    return DropdownCSS.prototype.render = function (n) {
                        var i = n.call(this), a = this.options.get("dropdownCssClass") || "";
                        e.isFunction(a) && (a = a(this.$element));
                        var s = this.options.get("adaptDropdownCssClass");
                        if (s = s || _dropdownAdapter, -1 !== a.indexOf(":all:")) {
                            a = a.replace(":all:", "");
                            var r = s;
                            s = function (e) {
                                var t = r(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var o = this.options.get("dropdownCss") || {};
                        return e.isFunction(o) && (o = o(this.$element)), t.syncCssClasses(i, this.$element, s), i.css(o), i.addClass(a), i
                    }, DropdownCSS
                }), a.define("select2/compat/initSelection", ["jquery"], function (e) {
                    function InitSelection(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
                    }

                    return InitSelection.prototype.current = function (t, n) {
                        var i = this;
                        if (this._isInitialized) return void t.call(this, n);
                        this.initSelection.call(null, this.$element, function (t) {
                            i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)
                        })
                    }, InitSelection
                }), a.define("select2/compat/inputData", ["jquery", "../utils"], function (e, t) {
                    function InputData(e, t, n) {
                        this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
                    }

                    return InputData.prototype.current = function (t, n) {
                        function getSelected(t, n) {
                            var i = [];
                            return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, i.push(t)) : t.selected = !1, t.children && i.push.apply(i, getSelected(t.children, n)), i
                        }

                        for (var i = [], a = 0; a < this._currentData.length; a++) {
                            var s = this._currentData[a];
                            i.push.apply(i, getSelected(s, this.$element.val().split(this._valueSeparator)))
                        }
                        n(i)
                    }, InputData.prototype.select = function (t, n) {
                        if (this.options.get("multiple")) {
                            var i = this.$element.val();
                            i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                        } else this.current(function (t) {
                            e.map(t, function (e) {
                                e.selected = !1
                            })
                        }), this.$element.val(n.id), this.$element.trigger("change")
                    }, InputData.prototype.unselect = function (e, t) {
                        var n = this;
                        t.selected = !1, this.current(function (e) {
                            for (var i = [], a = 0; a < e.length; a++) {
                                var s = e[a];
                                t.id != s.id && i.push(s.id)
                            }
                            n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                        })
                    }, InputData.prototype.query = function (e, t, n) {
                        for (var i = [], a = 0; a < this._currentData.length; a++) {
                            var s = this._currentData[a], r = this.matches(t, s);
                            null !== r && i.push(r)
                        }
                        n({results: i})
                    }, InputData.prototype.addOptions = function (n, i) {
                        var a = e.map(i, function (e) {
                            return t.GetData(e[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, a)
                    }, InputData
                }), a.define("select2/compat/matcher", ["jquery"], function (e) {
                    function oldMatcher(t) {
                        function wrappedMatcher(n, i) {
                            var a = e.extend(!0, {}, i);
                            if (null == n.term || "" === e.trim(n.term)) return a;
                            if (i.children) {
                                for (var s = i.children.length - 1; s >= 0; s--) {
                                    var r = i.children[s];
                                    t(n.term, r.text, r) || a.children.splice(s, 1)
                                }
                                if (a.children.length > 0) return a
                            }
                            return t(n.term, i.text, i) ? a : null
                        }

                        return wrappedMatcher
                    }

                    return oldMatcher
                }), a.define("select2/compat/query", [], function () {
                    function Query(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
                    }

                    return Query.prototype.query = function (e, t, n) {
                        t.callback = n, this.options.get("query").call(null, t)
                    }, Query
                }), a.define("select2/dropdown/attachContainer", [], function () {
                    function AttachContainer(e, t, n) {
                        e.call(this, t, n)
                    }

                    return AttachContainer.prototype.position = function (e, t, n) {
                        n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                    }, AttachContainer
                }), a.define("select2/dropdown/stopPropagation", [], function () {
                    function StopPropagation() {
                    }

                    return StopPropagation.prototype.bind = function (e, t, n) {
                        e.call(this, t, n);
                        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(i.join(" "), function (e) {
                            e.stopPropagation()
                        })
                    }, StopPropagation
                }), a.define("select2/selection/stopPropagation", [], function () {
                    function StopPropagation() {
                    }

                    return StopPropagation.prototype.bind = function (e, t, n) {
                        e.call(this, t, n);
                        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(i.join(" "), function (e) {
                            e.stopPropagation()
                        })
                    }, StopPropagation
                }), function (i) {
                    "function" == typeof a.define && a.define.amd ? a.define("jquery-mousewheel", ["jquery"], i) : "object" === o(t) ? e.exports = i : i(n)
                }(function (e) {
                    function handler(i) {
                        var a = i || window.event, r = s.call(arguments, 1), l = 0, d = 0, u = 0, c = 0, h = 0, m = 0;
                        if (i = e.event.fix(a), i.type = "mousewheel", "detail" in a && (u = -1 * a.detail), "wheelDelta" in a && (u = a.wheelDelta), "wheelDeltaY" in a && (u = a.wheelDeltaY), "wheelDeltaX" in a && (d = -1 * a.wheelDeltaX), "axis" in a && a.axis === a.HORIZONTAL_AXIS && (d = -1 * u, u = 0), l = 0 === u ? d : u, "deltaY" in a && (u = -1 * a.deltaY, l = u), "deltaX" in a && (d = a.deltaX, 0 === u && (l = -1 * d)), 0 !== u || 0 !== d) {
                            if (1 === a.deltaMode) {
                                var p = e.data(this, "mousewheel-line-height");
                                l *= p, u *= p, d *= p
                            } else if (2 === a.deltaMode) {
                                var f = e.data(this, "mousewheel-page-height");
                                l *= f, u *= f, d *= f
                            }
                            if (c = Math.max(Math.abs(u), Math.abs(d)), (!n || c < n) && (n = c, shouldAdjustOldDeltas(a, c) && (n /= 40)), shouldAdjustOldDeltas(a, c) && (l /= 40, d /= 40, u /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / n), d = Math[d >= 1 ? "floor" : "ceil"](d / n), u = Math[u >= 1 ? "floor" : "ceil"](u / n), o.settings.normalizeOffset && this.getBoundingClientRect) {
                                var _ = this.getBoundingClientRect();
                                h = i.clientX - _.left, m = i.clientY - _.top
                            }
                            return i.deltaX = d, i.deltaY = u, i.deltaFactor = n, i.offsetX = h, i.offsetY = m, i.deltaMode = 0, r.unshift(i, l, d, u), t && clearTimeout(t), t = setTimeout(nullLowestDelta, 200), (e.event.dispatch || e.event.handle).apply(this, r)
                        }
                    }

                    function nullLowestDelta() {
                        n = null
                    }

                    function shouldAdjustOldDeltas(e, t) {
                        return o.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
                    }

                    var t, n, i = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        s = Array.prototype.slice;
                    if (e.event.fixHooks) for (var r = i.length; r;) e.event.fixHooks[i[--r]] = e.event.mouseHooks;
                    var o = e.event.special.mousewheel = {
                        version: "3.1.12", setup: function () {
                            if (this.addEventListener) for (var t = a.length; t;) this.addEventListener(a[--t], handler, !1); else this.onmousewheel = handler;
                            e.data(this, "mousewheel-line-height", o.getLineHeight(this)), e.data(this, "mousewheel-page-height", o.getPageHeight(this))
                        }, teardown: function () {
                            if (this.removeEventListener) for (var t = a.length; t;) this.removeEventListener(a[--t], handler, !1); else this.onmousewheel = null;
                            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                        }, getLineHeight: function (t) {
                            var n = e(t), i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                        }, getPageHeight: function (t) {
                            return e(t).height()
                        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
                    };
                    e.fn.extend({
                        mousewheel: function (e) {
                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                        }, unmousewheel: function (e) {
                            return this.unbind("mousewheel", e)
                        }
                    })
                }), a.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, i, a) {
                    if (null == e.fn.select2) {
                        var s = ["open", "close", "destroy"];
                        e.fn.select2 = function (t) {
                            if (t = t || {}, "object" === (void 0 === t ? "undefined" : o(t))) return this.each(function () {
                                var i = e.extend(!0, {}, t);
                                new n(e(this), i)
                            }), this;
                            if ("string" == typeof t) {
                                var i, r = Array.prototype.slice.call(arguments, 1);
                                return this.each(function () {
                                    var e = a.GetData(this, "select2");
                                    null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, r)
                                }), e.inArray(t, s) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + t)
                        }
                    }
                    return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                }), {define: a.define, require: a.require}
            }(), s = a.require("jquery.select2");
            return n.fn.select2.amd = a, s
        })
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        var t = e(".label--tab");
        t.click(function () {
            t.removeClass("active"), e(this).addClass("active")
        })
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    (function (e) {
        n(139);
        var t = e('input[name="daterange"]');
        t && t.daterangepicker({
            startDate: "01/17/2018",
            endDate: "01/23/2018",
            applyClass: "btn btn--green btn--sm",
            cancelClass: "btn btn--blue-bg btn--sm"
        })
    }).call(t, n(1))
}, function (e, t, n) {
    "use strict";
    var i, a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (s, r) {
        i = [n(0), n(1)], void 0 !== (a = function (e, t) {
            return t.fn || (t.fn = {}), r(e, t)
        }.apply(t, i)) && (e.exports = a)
    }(0, function (e, t) {
        var n = function (n, i, a) {
            if (this.parentEl = "body", this.element = t(n), this.startDate = e().startOf("day"), this.endDate = e().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyClass = "btn-success", this.cancelClass = "btn-default", this.locale = {
                    direction: "ltr",
                    format: e.localeData().longDateFormat("L"),
                    separator: " - ",
                    applyLabel: "Apply",
                    cancelLabel: "Cancel",
                    weekLabel: "W",
                    customRangeLabel: "Custom Range",
                    daysOfWeek: e.weekdaysMin(),
                    monthNames: e.monthsShort(),
                    firstDay: e.localeData().firstDayOfWeek()
                }, this.callback = function () {
                }, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" === (void 0 === i ? "undefined" : s(i)) && null !== i || (i = {}), i = t.extend(this.element.data(), i), "string" == typeof i.template || i.template instanceof t || (i.template = '<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini form-control" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'), this.parentEl = t(i.parentEl && t(i.parentEl).length ? i.parentEl : this.parentEl), this.container = t(i.template).appendTo(this.parentEl), "object" === s(i.locale) && ("string" == typeof i.locale.direction && (this.locale.direction = i.locale.direction), "string" == typeof i.locale.format && (this.locale.format = i.locale.format), "string" == typeof i.locale.separator && (this.locale.separator = i.locale.separator), "object" === s(i.locale.daysOfWeek) && (this.locale.daysOfWeek = i.locale.daysOfWeek.slice()), "object" === s(i.locale.monthNames) && (this.locale.monthNames = i.locale.monthNames.slice()), "number" == typeof i.locale.firstDay && (this.locale.firstDay = i.locale.firstDay), "string" == typeof i.locale.applyLabel && (this.locale.applyLabel = i.locale.applyLabel), "string" == typeof i.locale.cancelLabel && (this.locale.cancelLabel = i.locale.cancelLabel), "string" == typeof i.locale.weekLabel && (this.locale.weekLabel = i.locale.weekLabel), "string" == typeof i.locale.customRangeLabel)) {
                var r = document.createElement("textarea");
                r.innerHTML = i.locale.customRangeLabel;
                var o = r.value;
                this.locale.customRangeLabel = o
            }
            if (this.container.addClass(this.locale.direction), "string" == typeof i.startDate && (this.startDate = e(i.startDate, this.locale.format)), "string" == typeof i.endDate && (this.endDate = e(i.endDate, this.locale.format)), "string" == typeof i.minDate && (this.minDate = e(i.minDate, this.locale.format)), "string" == typeof i.maxDate && (this.maxDate = e(i.maxDate, this.locale.format)), "object" === s(i.startDate) && (this.startDate = e(i.startDate)), "object" === s(i.endDate) && (this.endDate = e(i.endDate)), "object" === s(i.minDate) && (this.minDate = e(i.minDate)), "object" === s(i.maxDate) && (this.maxDate = e(i.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof i.applyClass && (this.applyClass = i.applyClass), "string" == typeof i.cancelClass && (this.cancelClass = i.cancelClass), "object" === s(i.dateLimit) && (this.dateLimit = i.dateLimit), "string" == typeof i.opens && (this.opens = i.opens), "string" == typeof i.drops && (this.drops = i.drops), "boolean" == typeof i.showWeekNumbers && (this.showWeekNumbers = i.showWeekNumbers), "boolean" == typeof i.showISOWeekNumbers && (this.showISOWeekNumbers = i.showISOWeekNumbers), "string" == typeof i.buttonClasses && (this.buttonClasses = i.buttonClasses), "object" === s(i.buttonClasses) && (this.buttonClasses = i.buttonClasses.join(" ")), "boolean" == typeof i.showDropdowns && (this.showDropdowns = i.showDropdowns), "boolean" == typeof i.showCustomRangeLabel && (this.showCustomRangeLabel = i.showCustomRangeLabel), "boolean" == typeof i.singleDatePicker && (this.singleDatePicker = i.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof i.timePicker && (this.timePicker = i.timePicker), "boolean" == typeof i.timePickerSeconds && (this.timePickerSeconds = i.timePickerSeconds), "number" == typeof i.timePickerIncrement && (this.timePickerIncrement = i.timePickerIncrement), "boolean" == typeof i.timePicker24Hour && (this.timePicker24Hour = i.timePicker24Hour), "boolean" == typeof i.autoApply && (this.autoApply = i.autoApply), "boolean" == typeof i.autoUpdateInput && (this.autoUpdateInput = i.autoUpdateInput), "boolean" == typeof i.linkedCalendars && (this.linkedCalendars = i.linkedCalendars), "function" == typeof i.isInvalidDate && (this.isInvalidDate = i.isInvalidDate), "function" == typeof i.isCustomDate && (this.isCustomDate = i.isCustomDate), "boolean" == typeof i.alwaysShowCalendars && (this.alwaysShowCalendars = i.alwaysShowCalendars), 0 != this.locale.firstDay) for (var l = this.locale.firstDay; l > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), l--;
            var d, u, c;
            if (void 0 === i.startDate && void 0 === i.endDate && t(this.element).is("input[type=text]")) {
                var h = t(this.element).val(), m = h.split(this.locale.separator);
                d = u = null, 2 == m.length ? (d = e(m[0], this.locale.format), u = e(m[1], this.locale.format)) : this.singleDatePicker && "" !== h && (d = e(h, this.locale.format), u = e(h, this.locale.format)), null !== d && null !== u && (this.setStartDate(d), this.setEndDate(u))
            }
            if ("object" === s(i.ranges)) {
                for (c in i.ranges) {
                    d = "string" == typeof i.ranges[c][0] ? e(i.ranges[c][0], this.locale.format) : e(i.ranges[c][0]), u = "string" == typeof i.ranges[c][1] ? e(i.ranges[c][1], this.locale.format) : e(i.ranges[c][1]), this.minDate && d.isBefore(this.minDate) && (d = this.minDate.clone());
                    var p = this.maxDate;
                    if (this.dateLimit && p && d.clone().add(this.dateLimit).isAfter(p) && (p = d.clone().add(this.dateLimit)), p && u.isAfter(p) && (u = p.clone()), !(this.minDate && u.isBefore(this.minDate, this.timepicker ? "minute" : "day") || p && d.isAfter(p, this.timepicker ? "minute" : "day"))) {
                        var r = document.createElement("textarea");
                        r.innerHTML = c;
                        var o = r.value;
                        this.ranges[o] = [d, u]
                    }
                }
                var f = "<ul>";
                for (c in this.ranges) f += '<li data-range-key="' + c + '">' + c + "</li>";
                this.showCustomRangeLabel && (f += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), f += "</ul>", this.container.find(".ranges").prepend(f)
            }
            "function" == typeof a && (this.callback = a), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && "object" !== s(i.ranges) ? this.container.find(".ranges").hide() : this.autoApply && this.container.find(".applyBtn, .cancelBtn").addClass("hide"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.container.find(".daterangepicker_input input, .daterangepicker_input > i").hide(), this.timePicker ? this.container.find(".ranges ul").hide() : this.container.find(".ranges").hide()), (void 0 === i.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), void 0 !== i.ranges && "right" == this.opens && this.container.find(".ranges").prependTo(this.container.find(".calendar.left").parent()), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", t.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", t.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", t.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", t.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", t.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", t.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", t.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", t.proxy(this.timeChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", t.proxy(this.showCalendars, this)).on("focus.daterangepicker", ".daterangepicker_input input", t.proxy(this.formInputsFocused, this)).on("blur.daterangepicker", ".daterangepicker_input input", t.proxy(this.formInputsBlurred, this)).on("change.daterangepicker", ".daterangepicker_input input", t.proxy(this.formInputsChanged, this)).on("keydown.daterangepicker", ".daterangepicker_input input", t.proxy(this.formInputsKeydown, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", t.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", t.proxy(this.clickCancel, this)).on("click.daterangepicker", "li", t.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", t.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", "li", t.proxy(this.updateFormInputs, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
                "click.daterangepicker": t.proxy(this.show, this),
                "focus.daterangepicker": t.proxy(this.show, this),
                "keyup.daterangepicker": t.proxy(this.elementChanged, this),
                "keydown.daterangepicker": t.proxy(this.keydown, this)
            }) : (this.element.on("click.daterangepicker", t.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", t.proxy(this.toggle, this))), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        };
        return n.prototype = {
            constructor: n, setStartDate: function (t) {
                "string" == typeof t && (this.startDate = e(t, this.locale.format)), "object" === (void 0 === t ? "undefined" : s(t)) && (this.startDate = e(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
            }, setEndDate: function (t) {
                "string" == typeof t && (this.endDate = e(t, this.locale.format)), "object" === (void 0 === t ? "undefined" : s(t)) && (this.endDate = e(t)), this.timePicker || (this.endDate = this.endDate.add(1, "d").startOf("day").subtract(1, "second")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.dateLimit)), this.previousRightTime = this.endDate.clone(), this.isShowing || this.updateElement(), this.updateMonthsInView()
            }, isInvalidDate: function () {
                return !1
            }, isCustomDate: function () {
                return !1
            }, updateView: function () {
                this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate ? (this.container.find('input[name="daterangepicker_end"]').removeClass("active"), this.container.find('input[name="daterangepicker_start"]').addClass("active")) : (this.container.find('input[name="daterangepicker_end"]').addClass("active"), this.container.find('input[name="daterangepicker_start"]').removeClass("active")), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
            }, updateMonthsInView: function () {
                if (this.endDate) {
                    if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                    this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
                } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
                this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
            }, updateCalendars: function () {
                if (this.timePicker) {
                    var e, t, n;
                    if (this.endDate) {
                        if (e = parseInt(this.container.find(".left .hourselect").val(), 10), t = parseInt(this.container.find(".left .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                            var i = this.container.find(".left .ampmselect").val();
                            "PM" === i && e < 12 && (e += 12), "AM" === i && 12 === e && (e = 0)
                        }
                    } else if (e = parseInt(this.container.find(".right .hourselect").val(), 10), t = parseInt(this.container.find(".right .minuteselect").val(), 10), n = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) {
                        var i = this.container.find(".right .ampmselect").val();
                        "PM" === i && e < 12 && (e += 12), "AM" === i && 12 === e && (e = 0)
                    }
                    this.leftCalendar.month.hour(e).minute(t).second(n), this.rightCalendar.month.hour(e).minute(t).second(n)
                }
                this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
            }, renderCalendar: function (n) {
                var i = "left" == n ? this.leftCalendar : this.rightCalendar, a = i.month.month(), s = i.month.year(),
                    r = i.month.hour(), o = i.month.minute(), l = i.month.second(), d = e([s, a]).daysInMonth(),
                    u = e([s, a, 1]), c = e([s, a, d]), h = e(u).subtract(1, "month").month(),
                    m = e(u).subtract(1, "month").year(), p = e([m, h]).daysInMonth(), f = u.day(), i = [];
                i.firstDay = u, i.lastDay = c;
                for (var _ = 0; _ < 6; _++) i[_] = [];
                var y = p - f + this.locale.firstDay + 1;
                y > p && (y -= 7), f == this.locale.firstDay && (y = p - 6);
                for (var g, M, v = e([m, h, y, 12, o, l]), _ = 0, g = 0, M = 0; _ < 42; _++, g++, v = e(v).add(24, "hour")) _ > 0 && g % 7 == 0 && (g = 0, M++), i[M][g] = v.clone().hour(r).minute(o).second(l), v.hour(12), this.minDate && i[M][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && i[M][g].isBefore(this.minDate) && "left" == n && (i[M][g] = this.minDate.clone()), this.maxDate && i[M][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && i[M][g].isAfter(this.maxDate) && "right" == n && (i[M][g] = this.maxDate.clone());
                "left" == n ? this.leftCalendar.calendar = i : this.rightCalendar.calendar = i;
                var k = "left" == n ? this.minDate : this.startDate, L = this.maxDate,
                    w = ("left" == n ? this.startDate : this.endDate, "ltr" == this.locale.direction ? {
                        left: "chevron-left",
                        right: "chevron-right"
                    } : {left: "chevron-right", right: "chevron-left"}), Y = '<table class="table-condensed">';
                Y += "<thead>", Y += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (Y += "<th></th>"), k && !k.isBefore(i.firstDay) || this.linkedCalendars && "left" != n ? Y += "<th></th>" : Y += '<th class="prev available"><i class="fa fa-' + w.left + " glyphicon glyphicon-" + w.left + '"></i></th>';
                var T = this.locale.monthNames[i[1][1].month()] + i[1][1].format(" YYYY");
                if (this.showDropdowns) {
                    for (var D = i[1][1].month(), b = i[1][1].year(), S = L && L.year() || b + 5, x = k && k.year() || b - 50, C = b == x, H = b == S, j = '<select class="monthselect">', A = 0; A < 12; A++) (!C || A >= k.month()) && (!H || A <= L.month()) ? j += "<option value='" + A + "'" + (A === D ? " selected='selected'" : "") + ">" + this.locale.monthNames[A] + "</option>" : j += "<option value='" + A + "'" + (A === D ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[A] + "</option>";
                    j += "</select>";
                    for (var P = '<select class="yearselect">', O = x; O <= S; O++) P += '<option value="' + O + '"' + (O === b ? ' selected="selected"' : "") + ">" + O + "</option>";
                    P += "</select>", T = j + P
                }
                if (Y += '<th colspan="5" class="month">' + T + "</th>", L && !L.isAfter(i.lastDay) || this.linkedCalendars && "right" != n && !this.singleDatePicker ? Y += "<th></th>" : Y += '<th class="next available"><i class="fa fa-' + w.right + " glyphicon glyphicon-" + w.right + '"></i></th>', Y += "</tr>", Y += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (Y += '<th class="week">' + this.locale.weekLabel + "</th>"), t.each(this.locale.daysOfWeek, function (e, t) {
                        Y += "<th>" + t + "</th>"
                    }), Y += "</tr>", Y += "</thead>", Y += "<tbody>", null == this.endDate && this.dateLimit) {
                    var E = this.startDate.clone().add(this.dateLimit).endOf("day");
                    L && !E.isBefore(L) || (L = E)
                }
                for (var M = 0; M < 6; M++) {
                    Y += "<tr>", this.showWeekNumbers ? Y += '<td class="week">' + i[M][0].week() + "</td>" : this.showISOWeekNumbers && (Y += '<td class="week">' + i[M][0].isoWeek() + "</td>");
                    for (var g = 0; g < 7; g++) {
                        var F = [];
                        i[M][g].isSame(new Date, "day") && F.push("today"), i[M][g].isoWeekday() > 5 && F.push("weekend"), i[M][g].month() != i[1][1].month() && F.push("off"), this.minDate && i[M][g].isBefore(this.minDate, "day") && F.push("off", "disabled"), L && i[M][g].isAfter(L, "day") && F.push("off", "disabled"), this.isInvalidDate(i[M][g]) && F.push("off", "disabled"), i[M][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && F.push("active", "start-date"), null != this.endDate && i[M][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && F.push("active", "end-date"), null != this.endDate && i[M][g] > this.startDate && i[M][g] < this.endDate && F.push("in-range");
                        var $ = this.isCustomDate(i[M][g]);
                        !1 !== $ && ("string" == typeof $ ? F.push($) : Array.prototype.push.apply(F, $));
                        for (var W = "", I = !1, _ = 0; _ < F.length; _++) W += F[_] + " ", "disabled" == F[_] && (I = !0);
                        I || (W += "available"), Y += '<td class="' + W.replace(/^\s+|\s+$/g, "") + '" data-title="r' + M + "c" + g + '">' + i[M][g].date() + "</td>"
                    }
                    Y += "</tr>"
                }
                Y += "</tbody>", Y += "</table>", this.container.find(".calendar." + n + " .calendar-table").html(Y)
            }, renderTimePicker: function (e) {
                if ("right" != e || this.endDate) {
                    var t, n, i, a = this.maxDate;
                    if (!this.dateLimit || this.maxDate && !this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate) || (a = this.startDate.clone().add(this.dateLimit)), "left" == e) n = this.startDate.clone(), i = this.minDate; else if ("right" == e) {
                        n = this.endDate.clone(), i = this.startDate;
                        var s = this.container.find(".calendar.right .calendar-time div");
                        if ("" != s.html() && (n.hour(s.find(".hourselect option:selected").val() || n.hour()), n.minute(s.find(".minuteselect option:selected").val() || n.minute()), n.second(s.find(".secondselect option:selected").val() || n.second()), !this.timePicker24Hour)) {
                            var r = s.find(".ampmselect option:selected").val();
                            "PM" === r && n.hour() < 12 && n.hour(n.hour() + 12), "AM" === r && 12 === n.hour() && n.hour(0)
                        }
                        n.isBefore(this.startDate) && (n = this.startDate.clone()), a && n.isAfter(a) && (n = a.clone())
                    }
                    t = '<select class="hourselect">';
                    for (var o = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, d = o; d <= l; d++) {
                        var u = d;
                        this.timePicker24Hour || (u = n.hour() >= 12 ? 12 == d ? 12 : d + 12 : 12 == d ? 0 : d);
                        var c = n.clone().hour(u), h = !1;
                        i && c.minute(59).isBefore(i) && (h = !0), a && c.minute(0).isAfter(a) && (h = !0), u != n.hour() || h ? t += h ? '<option value="' + d + '" disabled="disabled" class="disabled">' + d + "</option>" : '<option value="' + d + '">' + d + "</option>" : t += '<option value="' + d + '" selected="selected">' + d + "</option>"
                    }
                    t += "</select> ", t += ': <select class="minuteselect">';
                    for (var d = 0; d < 60; d += this.timePickerIncrement) {
                        var m = d < 10 ? "0" + d : d, c = n.clone().minute(d), h = !1;
                        i && c.second(59).isBefore(i) && (h = !0), a && c.second(0).isAfter(a) && (h = !0), n.minute() != d || h ? t += h ? '<option value="' + d + '" disabled="disabled" class="disabled">' + m + "</option>" : '<option value="' + d + '">' + m + "</option>" : t += '<option value="' + d + '" selected="selected">' + m + "</option>"
                    }
                    if (t += "</select> ", this.timePickerSeconds) {
                        t += ': <select class="secondselect">';
                        for (var d = 0; d < 60; d++) {
                            var m = d < 10 ? "0" + d : d, c = n.clone().second(d), h = !1;
                            i && c.isBefore(i) && (h = !0), a && c.isAfter(a) && (h = !0), n.second() != d || h ? t += h ? '<option value="' + d + '" disabled="disabled" class="disabled">' + m + "</option>" : '<option value="' + d + '">' + m + "</option>" : t += '<option value="' + d + '" selected="selected">' + m + "</option>"
                        }
                        t += "</select> "
                    }
                    if (!this.timePicker24Hour) {
                        t += '<select class="ampmselect">';
                        var p = "", f = "";
                        i && n.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), a && n.clone().hour(0).minute(0).second(0).isAfter(a) && (f = ' disabled="disabled" class="disabled"'), n.hour() >= 12 ? t += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + f + ">PM</option>" : t += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + f + ">PM</option>", t += "</select>"
                    }
                    this.container.find(".calendar." + e + " .calendar-time div").html(t)
                }
            }, updateFormInputs: function () {
                this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus") || (this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)), this.endDate && this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)), this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled"))
            }, move: function () {
                var e, n = {top: 0, left: 0}, i = t(window).width();
                this.parentEl.is("body") || (n = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                }, i = this.parentEl[0].clientWidth + this.parentEl.offset().left), e = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - n.top : this.element.offset().top + this.element.outerHeight() - n.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("dropup"), "left" == this.opens ? (this.container.css({
                    top: e,
                    right: i - this.element.offset().left - this.element.outerWidth(),
                    left: "auto"
                }), this.container.offset().left < 0 && this.container.css({
                    right: "auto",
                    left: 9
                })) : "center" == this.opens ? (this.container.css({
                    top: e,
                    left: this.element.offset().left - n.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                    right: "auto"
                }), this.container.offset().left < 0 && this.container.css({
                    right: "auto",
                    left: 9
                })) : (this.container.css({
                    top: e,
                    left: this.element.offset().left - n.left,
                    right: "auto"
                }), this.container.offset().left + this.container.outerWidth() > t(window).width() && this.container.css({
                    left: "auto",
                    right: 0
                }))
            }, show: function (e) {
                this.isShowing || (this._outsideClickProxy = t.proxy(function (e) {
                    this.outsideClick(e)
                }, this), t(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), t(window).on("resize.daterangepicker", t.proxy(function (e) {
                    this.move(e)
                }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
            }, hide: function (e) {
                this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate, this.endDate, this.chosenLabel), this.updateElement(), t(document).off(".daterangepicker"), t(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
            }, toggle: function (e) {
                this.isShowing ? this.hide() : this.show()
            }, outsideClick: function (e) {
                var n = t(e.target);
                "focusin" == e.type || n.closest(this.element).length || n.closest(this.container).length || n.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
            }, showCalendars: function () {
                this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
            }, hideCalendars: function () {
                this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
            }, hoverRange: function (e) {
                if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus")) {
                    var t = e.target.getAttribute("data-range-key");
                    if (t == this.locale.customRangeLabel) this.updateView(); else {
                        var n = this.ranges[t];
                        this.container.find("input[name=daterangepicker_start]").val(n[0].format(this.locale.format)), this.container.find("input[name=daterangepicker_end]").val(n[1].format(this.locale.format))
                    }
                }
            }, clickRange: function (e) {
                var t = e.target.getAttribute("data-range-key");
                if (this.chosenLabel = t, t == this.locale.customRangeLabel) this.showCalendars(); else {
                    var n = this.ranges[t];
                    this.startDate = n[0], this.endDate = n[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply()
                }
            }, clickPrev: function (e) {
                t(e.target).parents(".calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
            }, clickNext: function (e) {
                t(e.target).parents(".calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
            }, hoverDate: function (e) {
                if (t(e.target).hasClass("available")) {
                    var n = t(e.target).attr("data-title"), i = n.substr(1, 1), a = n.substr(3, 1),
                        s = t(e.target).parents(".calendar"),
                        r = s.hasClass("left") ? this.leftCalendar.calendar[i][a] : this.rightCalendar.calendar[i][a];
                    this.endDate && !this.container.find("input[name=daterangepicker_start]").is(":focus") ? this.container.find("input[name=daterangepicker_start]").val(r.format(this.locale.format)) : this.endDate || this.container.find("input[name=daterangepicker_end]").is(":focus") || this.container.find("input[name=daterangepicker_end]").val(r.format(this.locale.format));
                    var o = this.leftCalendar, l = this.rightCalendar, d = this.startDate;
                    this.endDate || this.container.find(".calendar tbody td").each(function (e, n) {
                        if (!t(n).hasClass("week")) {
                            var i = t(n).attr("data-title"), a = i.substr(1, 1), s = i.substr(3, 1),
                                u = t(n).parents(".calendar"),
                                c = u.hasClass("left") ? o.calendar[a][s] : l.calendar[a][s];
                            c.isAfter(d) && c.isBefore(r) || c.isSame(r, "day") ? t(n).addClass("in-range") : t(n).removeClass("in-range")
                        }
                    })
                }
            }, clickDate: function (e) {
                if (t(e.target).hasClass("available")) {
                    var n = t(e.target).attr("data-title"), i = n.substr(1, 1), a = n.substr(3, 1),
                        s = t(e.target).parents(".calendar"),
                        r = s.hasClass("left") ? this.leftCalendar.calendar[i][a] : this.rightCalendar.calendar[i][a];
                    if (this.endDate || r.isBefore(this.startDate, "day")) {
                        if (this.timePicker) {
                            var o = parseInt(this.container.find(".left .hourselect").val(), 10);
                            if (!this.timePicker24Hour) {
                                var l = this.container.find(".left .ampmselect").val();
                                "PM" === l && o < 12 && (o += 12), "AM" === l && 12 === o && (o = 0)
                            }
                            var d = parseInt(this.container.find(".left .minuteselect").val(), 10),
                                u = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                            r = r.clone().hour(o).minute(d).second(u)
                        }
                        this.endDate = null, this.setStartDate(r.clone())
                    } else if (!this.endDate && r.isBefore(this.startDate)) this.setEndDate(this.startDate.clone()); else {
                        if (this.timePicker) {
                            var o = parseInt(this.container.find(".right .hourselect").val(), 10);
                            if (!this.timePicker24Hour) {
                                var l = this.container.find(".right .ampmselect").val();
                                "PM" === l && o < 12 && (o += 12), "AM" === l && 12 === o && (o = 0)
                            }
                            var d = parseInt(this.container.find(".right .minuteselect").val(), 10),
                                u = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                            r = r.clone().hour(o).minute(d).second(u)
                        }
                        this.setEndDate(r.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())
                    }
                    this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView(), e.stopPropagation()
                }
            }, calculateChosenLabel: function () {
                var e = !0, t = 0;
                for (var n in this.ranges) {
                    if (this.timePicker) {
                        var i = this.timePickerSeconds ? "YYYY-MM-DD hh:mm:ss" : "YYYY-MM-DD hh:mm";
                        if (this.startDate.format(i) == this.ranges[n][0].format(i) && this.endDate.format(i) == this.ranges[n][1].format(i)) {
                            e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + t + ")").addClass("active").html();
                            break
                        }
                    } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[n][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[n][1].format("YYYY-MM-DD")) {
                        e = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + t + ")").addClass("active").html();
                        break
                    }
                    t++
                }
                e && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html() : this.chosenLabel = null, this.showCalendars())
            }, clickApply: function (e) {
                this.hide(), this.element.trigger("apply.daterangepicker", this)
            }, clickCancel: function (e) {
                this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
            }, monthOrYearChanged: function (e) {
                var n = t(e.target).closest(".calendar").hasClass("left"), i = n ? "left" : "right",
                    a = this.container.find(".calendar." + i), s = parseInt(a.find(".monthselect").val(), 10),
                    r = a.find(".yearselect").val();
                n || (r < this.startDate.year() || r == this.startDate.year() && s < this.startDate.month()) && (s = this.startDate.month(), r = this.startDate.year()), this.minDate && (r < this.minDate.year() || r == this.minDate.year() && s < this.minDate.month()) && (s = this.minDate.month(), r = this.minDate.year()), this.maxDate && (r > this.maxDate.year() || r == this.maxDate.year() && s > this.maxDate.month()) && (s = this.maxDate.month(), r = this.maxDate.year()), n ? (this.leftCalendar.month.month(s).year(r), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(s).year(r), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
            }, timeChanged: function (e) {
                var n = t(e.target).closest(".calendar"), i = n.hasClass("left"),
                    a = parseInt(n.find(".hourselect").val(), 10), s = parseInt(n.find(".minuteselect").val(), 10),
                    r = this.timePickerSeconds ? parseInt(n.find(".secondselect").val(), 10) : 0;
                if (!this.timePicker24Hour) {
                    var o = n.find(".ampmselect").val();
                    "PM" === o && a < 12 && (a += 12), "AM" === o && 12 === a && (a = 0)
                }
                if (i) {
                    var l = this.startDate.clone();
                    l.hour(a), l.minute(s), l.second(r), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
                } else if (this.endDate) {
                    var d = this.endDate.clone();
                    d.hour(a), d.minute(s), d.second(r), this.setEndDate(d)
                }
                this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
            }, formInputsChanged: function (n) {
                var i = t(n.target).closest(".calendar").hasClass("right"),
                    a = e(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format),
                    s = e(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);
                a.isValid() && s.isValid() && (i && s.isBefore(a) && (a = s.clone()), this.setStartDate(a), this.setEndDate(s), i ? this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)) : this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))), this.updateView()
            }, formInputsFocused: function (e) {
                this.container.find('input[name="daterangepicker_start"], input[name="daterangepicker_end"]').removeClass("active"), t(e.target).addClass("active"), t(e.target).closest(".calendar").hasClass("right") && (this.endDate = null, this.setStartDate(this.startDate.clone()), this.updateView())
            }, formInputsBlurred: function (t) {
                if (!this.endDate) {
                    var n = this.container.find('input[name="daterangepicker_end"]').val(),
                        i = e(n, this.locale.format);
                    i.isValid() && (this.setEndDate(i), this.updateView())
                }
            }, formInputsKeydown: function (e) {
                13 === e.keyCode && (e.preventDefault(), this.formInputsChanged(e))
            }, elementChanged: function () {
                if (this.element.is("input") && this.element.val().length) {
                    var t = this.element.val().split(this.locale.separator), n = null, i = null;
                    2 === t.length && (n = e(t[0], this.locale.format), i = e(t[1], this.locale.format)), (this.singleDatePicker || null === n || null === i) && (n = e(this.element.val(), this.locale.format), i = n), n.isValid() && i.isValid() && (this.setStartDate(n), this.setEndDate(i), this.updateView())
                }
            }, keydown: function (e) {
                9 !== e.keyCode && 13 !== e.keyCode || this.hide(), 27 === e.keyCode && (e.preventDefault(), e.stopPropagation(), this.hide())
            }, updateElement: function () {
                this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
            }, remove: function () {
                this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
            }
        }, t.fn.daterangepicker = function (e, i) {
            var a = t.extend(!0, {}, t.fn.daterangepicker.defaultOptions, e);
            return this.each(function () {
                var e = t(this);
                e.data("daterangepicker") && e.data("daterangepicker").remove(), e.data("daterangepicker", new n(e, a, i))
            }), this
        }, n
    })
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    function webpackContext(e) {
        return n(webpackContextResolve(e))
    }

    function webpackContextResolve(e) {
        var t = i[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }

    var i = {
        "./af": 2,
        "./af.js": 2,
        "./ar": 3,
        "./ar-dz": 4,
        "./ar-dz.js": 4,
        "./ar-kw": 5,
        "./ar-kw.js": 5,
        "./ar-ly": 6,
        "./ar-ly.js": 6,
        "./ar-ma": 7,
        "./ar-ma.js": 7,
        "./ar-sa": 8,
        "./ar-sa.js": 8,
        "./ar-tn": 9,
        "./ar-tn.js": 9,
        "./ar.js": 3,
        "./az": 10,
        "./az.js": 10,
        "./be": 11,
        "./be.js": 11,
        "./bg": 12,
        "./bg.js": 12,
        "./bm": 13,
        "./bm.js": 13,
        "./bn": 14,
        "./bn.js": 14,
        "./bo": 15,
        "./bo.js": 15,
        "./br": 16,
        "./br.js": 16,
        "./bs": 17,
        "./bs.js": 17,
        "./ca": 18,
        "./ca.js": 18,
        "./cs": 19,
        "./cs.js": 19,
        "./cv": 20,
        "./cv.js": 20,
        "./cy": 21,
        "./cy.js": 21,
        "./da": 22,
        "./da.js": 22,
        "./de": 23,
        "./de-at": 24,
        "./de-at.js": 24,
        "./de-ch": 25,
        "./de-ch.js": 25,
        "./de.js": 23,
        "./dv": 26,
        "./dv.js": 26,
        "./el": 27,
        "./el.js": 27,
        "./en-au": 28,
        "./en-au.js": 28,
        "./en-ca": 29,
        "./en-ca.js": 29,
        "./en-gb": 30,
        "./en-gb.js": 30,
        "./en-ie": 31,
        "./en-ie.js": 31,
        "./en-nz": 32,
        "./en-nz.js": 32,
        "./eo": 33,
        "./eo.js": 33,
        "./es": 34,
        "./es-do": 35,
        "./es-do.js": 35,
        "./es-us": 36,
        "./es-us.js": 36,
        "./es.js": 34,
        "./et": 37,
        "./et.js": 37,
        "./eu": 38,
        "./eu.js": 38,
        "./fa": 39,
        "./fa.js": 39,
        "./fi": 40,
        "./fi.js": 40,
        "./fo": 41,
        "./fo.js": 41,
        "./fr": 42,
        "./fr-ca": 43,
        "./fr-ca.js": 43,
        "./fr-ch": 44,
        "./fr-ch.js": 44,
        "./fr.js": 42,
        "./fy": 45,
        "./fy.js": 45,
        "./gd": 46,
        "./gd.js": 46,
        "./gl": 47,
        "./gl.js": 47,
        "./gom-latn": 48,
        "./gom-latn.js": 48,
        "./gu": 49,
        "./gu.js": 49,
        "./he": 50,
        "./he.js": 50,
        "./hi": 51,
        "./hi.js": 51,
        "./hr": 52,
        "./hr.js": 52,
        "./hu": 53,
        "./hu.js": 53,
        "./hy-am": 54,
        "./hy-am.js": 54,
        "./id": 55,
        "./id.js": 55,
        "./is": 56,
        "./is.js": 56,
        "./it": 57,
        "./it.js": 57,
        "./ja": 58,
        "./ja.js": 58,
        "./jv": 59,
        "./jv.js": 59,
        "./ka": 60,
        "./ka.js": 60,
        "./kk": 61,
        "./kk.js": 61,
        "./km": 62,
        "./km.js": 62,
        "./kn": 63,
        "./kn.js": 63,
        "./ko": 64,
        "./ko.js": 64,
        "./ky": 65,
        "./ky.js": 65,
        "./lb": 66,
        "./lb.js": 66,
        "./lo": 67,
        "./lo.js": 67,
        "./lt": 68,
        "./lt.js": 68,
        "./lv": 69,
        "./lv.js": 69,
        "./me": 70,
        "./me.js": 70,
        "./mi": 71,
        "./mi.js": 71,
        "./mk": 72,
        "./mk.js": 72,
        "./ml": 73,
        "./ml.js": 73,
        "./mr": 74,
        "./mr.js": 74,
        "./ms": 75,
        "./ms-my": 76,
        "./ms-my.js": 76,
        "./ms.js": 75,
        "./mt": 77,
        "./mt.js": 77,
        "./my": 78,
        "./my.js": 78,
        "./nb": 79,
        "./nb.js": 79,
        "./ne": 80,
        "./ne.js": 80,
        "./nl": 81,
        "./nl-be": 82,
        "./nl-be.js": 82,
        "./nl.js": 81,
        "./nn": 83,
        "./nn.js": 83,
        "./pa-in": 84,
        "./pa-in.js": 84,
        "./pl": 85,
        "./pl.js": 85,
        "./pt": 86,
        "./pt-br": 87,
        "./pt-br.js": 87,
        "./pt.js": 86,
        "./ro": 88,
        "./ro.js": 88,
        "./ru": 89,
        "./ru.js": 89,
        "./sd": 90,
        "./sd.js": 90,
        "./se": 91,
        "./se.js": 91,
        "./si": 92,
        "./si.js": 92,
        "./sk": 93,
        "./sk.js": 93,
        "./sl": 94,
        "./sl.js": 94,
        "./sq": 95,
        "./sq.js": 95,
        "./sr": 96,
        "./sr-cyrl": 97,
        "./sr-cyrl.js": 97,
        "./sr.js": 96,
        "./ss": 98,
        "./ss.js": 98,
        "./sv": 99,
        "./sv.js": 99,
        "./sw": 100,
        "./sw.js": 100,
        "./ta": 101,
        "./ta.js": 101,
        "./te": 102,
        "./te.js": 102,
        "./tet": 103,
        "./tet.js": 103,
        "./th": 104,
        "./th.js": 104,
        "./tl-ph": 105,
        "./tl-ph.js": 105,
        "./tlh": 106,
        "./tlh.js": 106,
        "./tr": 107,
        "./tr.js": 107,
        "./tzl": 108,
        "./tzl.js": 108,
        "./tzm": 109,
        "./tzm-latn": 110,
        "./tzm-latn.js": 110,
        "./tzm.js": 109,
        "./uk": 111,
        "./uk.js": 111,
        "./ur": 112,
        "./ur.js": 112,
        "./uz": 113,
        "./uz-latn": 114,
        "./uz-latn.js": 114,
        "./uz.js": 113,
        "./vi": 115,
        "./vi.js": 115,
        "./x-pseudo": 116,
        "./x-pseudo.js": 116,
        "./yo": 117,
        "./yo.js": 117,
        "./zh-cn": 118,
        "./zh-cn.js": 118,
        "./zh-hk": 119,
        "./zh-hk.js": 119,
        "./zh-tw": 120,
        "./zh-tw.js": 120
    };
    webpackContext.keys = function () {
        return Object.keys(i)
    }, webpackContext.resolve = webpackContextResolve, e.exports = webpackContext, webpackContext.id = 141
}]);