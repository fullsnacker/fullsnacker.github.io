(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const l of i)
			if (l.type === 'childList')
				for (const s of l.addedNodes)
					s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const l = {};
		return (
			i.integrity && (l.integrity = i.integrity),
			i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (l.credentials = 'include')
				: i.crossOrigin === 'anonymous'
					? (l.credentials = 'omit')
					: (l.credentials = 'same-origin'),
			l
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const l = n(i);
		fetch(i.href, l);
	}
})();
function rd(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Na = { exports: {} },
	Ci = {},
	ja = { exports: {} },
	A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hr = Symbol.for('react.element'),
	id = Symbol.for('react.portal'),
	ld = Symbol.for('react.fragment'),
	sd = Symbol.for('react.strict_mode'),
	od = Symbol.for('react.profiler'),
	ad = Symbol.for('react.provider'),
	ud = Symbol.for('react.context'),
	cd = Symbol.for('react.forward_ref'),
	dd = Symbol.for('react.suspense'),
	fd = Symbol.for('react.memo'),
	pd = Symbol.for('react.lazy'),
	uo = Symbol.iterator;
function hd(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (uo && e[uo]) || e['@@iterator']),
			typeof e == 'function' ? e : null);
}
var La = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	Pa = Object.assign,
	Ma = {};
function En(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Ma),
		(this.updater = n || La);
}
En.prototype.isReactComponent = {};
En.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
En.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function za() {}
za.prototype = En.prototype;
function hs(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Ma),
		(this.updater = n || La);
}
var ms = (hs.prototype = new za());
ms.constructor = hs;
Pa(ms, En.prototype);
ms.isPureReactComponent = !0;
var co = Array.isArray,
	Oa = Object.prototype.hasOwnProperty,
	vs = { current: null },
	Ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
	var r,
		i = {},
		l = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (l = '' + t.key),
		t))
			Oa.call(t, r) && !Ia.hasOwnProperty(r) && (i[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) i.children = n;
	else if (1 < a) {
		for (var o = Array(a), u = 0; u < a; u++) o[u] = arguments[u + 2];
		i.children = o;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
	return {
		$$typeof: hr,
		type: e,
		key: l,
		ref: s,
		props: i,
		_owner: vs.current
	};
}
function md(e, t) {
	return {
		$$typeof: hr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	};
}
function gs(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === hr;
}
function vd(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var fo = /\/+/g;
function Bi(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? vd('' + e.key)
		: t.toString(36);
}
function Vr(e, t, n, r, i) {
	var l = typeof e;
	(l === 'undefined' || l === 'boolean') && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (l) {
			case 'string':
			case 'number':
				s = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case hr:
					case id:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === '' ? '.' + Bi(s, 0) : r),
			co(i)
				? ((n = ''),
					e != null && (n = e.replace(fo, '$&/') + '/'),
					Vr(i, t, n, '', function (u) {
						return u;
					}))
				: i != null &&
					(gs(i) &&
						(i = md(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ''
									: ('' + i.key).replace(fo, '$&/') + '/') +
								e
						)),
					t.push(i)),
			1
		);
	if (((s = 0), (r = r === '' ? '.' : r + ':'), co(e)))
		for (var a = 0; a < e.length; a++) {
			l = e[a];
			var o = r + Bi(l, a);
			s += Vr(l, t, n, o, i);
		}
	else if (((o = hd(e)), typeof o == 'function'))
		for (e = o.call(e), a = 0; !(l = e.next()).done; )
			(l = l.value), (o = r + Bi(l, a++)), (s += Vr(l, t, n, o, i));
	else if (l === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return s;
}
function _r(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Vr(e, r, '', '', function (l) {
			return t.call(n, l, i++);
		}),
		r
	);
}
function gd(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var me = { current: null },
	Hr = { transition: null },
	yd = {
		ReactCurrentDispatcher: me,
		ReactCurrentBatchConfig: Hr,
		ReactCurrentOwner: vs
	};
A.Children = {
	map: _r,
	forEach: function (e, t, n) {
		_r(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			_r(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			_r(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!gs(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	}
};
A.Component = En;
A.Fragment = ld;
A.Profiler = od;
A.PureComponent = hs;
A.StrictMode = sd;
A.Suspense = dd;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
A.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = Pa({}, e.props),
		i = e.key,
		l = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((l = t.ref), (s = vs.current)),
			t.key !== void 0 && (i = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (o in t)
			Oa.call(t, o) &&
				!Ia.hasOwnProperty(o) &&
				(r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
	}
	var o = arguments.length - 2;
	if (o === 1) r.children = n;
	else if (1 < o) {
		a = Array(o);
		for (var u = 0; u < o; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: hr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
A.createContext = function (e) {
	return (
		(e = {
			$$typeof: ud,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		}),
		(e.Provider = { $$typeof: ad, _context: e }),
		(e.Consumer = e)
	);
};
A.createElement = Da;
A.createFactory = function (e) {
	var t = Da.bind(null, e);
	return (t.type = e), t;
};
A.createRef = function () {
	return { current: null };
};
A.forwardRef = function (e) {
	return { $$typeof: cd, render: e };
};
A.isValidElement = gs;
A.lazy = function (e) {
	return { $$typeof: pd, _payload: { _status: -1, _result: e }, _init: gd };
};
A.memo = function (e, t) {
	return { $$typeof: fd, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
	var t = Hr.transition;
	Hr.transition = {};
	try {
		e();
	} finally {
		Hr.transition = t;
	}
};
A.unstable_act = function () {
	throw Error('act(...) is not supported in production builds of React.');
};
A.useCallback = function (e, t) {
	return me.current.useCallback(e, t);
};
A.useContext = function (e) {
	return me.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
	return me.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
	return me.current.useEffect(e, t);
};
A.useId = function () {
	return me.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
	return me.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
	return me.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
	return me.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
	return me.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
	return me.current.useReducer(e, t, n);
};
A.useRef = function (e) {
	return me.current.useRef(e);
};
A.useState = function (e) {
	return me.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
	return me.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
	return me.current.useTransition();
};
A.version = '18.2.0';
ja.exports = A;
var D = ja.exports;
const B = rd(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = D,
	xd = Symbol.for('react.element'),
	Sd = Symbol.for('react.fragment'),
	_d = Object.prototype.hasOwnProperty,
	Cd = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Aa(e, t, n) {
	var r,
		i = {},
		l = null,
		s = null;
	n !== void 0 && (l = '' + n),
		t.key !== void 0 && (l = '' + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) _d.call(t, r) && !kd.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: xd,
		type: e,
		key: l,
		ref: s,
		props: i,
		_owner: Cd.current
	};
}
Ci.Fragment = Sd;
Ci.jsx = Aa;
Ci.jsxs = Aa;
Na.exports = Ci;
var c = Na.exports,
	gl = {},
	Ra = { exports: {} },
	Ne = {},
	$a = { exports: {} },
	Fa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(N, M) {
		var O = N.length;
		N.push(M);
		e: for (; 0 < O; ) {
			var G = (O - 1) >>> 1,
				Z = N[G];
			if (0 < i(Z, M)) (N[G] = M), (N[O] = Z), (O = G);
			else break e;
		}
	}
	function n(N) {
		return N.length === 0 ? null : N[0];
	}
	function r(N) {
		if (N.length === 0) return null;
		var M = N[0],
			O = N.pop();
		if (O !== M) {
			N[0] = O;
			e: for (var G = 0, Z = N.length, xr = Z >>> 1; G < xr; ) {
				var Ot = 2 * (G + 1) - 1,
					Fi = N[Ot],
					It = Ot + 1,
					Sr = N[It];
				if (0 > i(Fi, O))
					It < Z && 0 > i(Sr, Fi)
						? ((N[G] = Sr), (N[It] = O), (G = It))
						: ((N[G] = Fi), (N[Ot] = O), (G = Ot));
				else if (It < Z && 0 > i(Sr, O)) (N[G] = Sr), (N[It] = O), (G = It);
				else break e;
			}
		}
		return M;
	}
	function i(N, M) {
		var O = N.sortIndex - M.sortIndex;
		return O !== 0 ? O : N.id - M.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var l = performance;
		e.unstable_now = function () {
			return l.now();
		};
	} else {
		var s = Date,
			a = s.now();
		e.unstable_now = function () {
			return s.now() - a;
		};
	}
	var o = [],
		u = [],
		d = 1,
		m = null,
		f = 3,
		g = !1,
		w = !1,
		x = !1,
		k = typeof setTimeout == 'function' ? setTimeout : null,
		p = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(N) {
		for (var M = n(u); M !== null; ) {
			if (M.callback === null) r(u);
			else if (M.startTime <= N)
				r(u), (M.sortIndex = M.expirationTime), t(o, M);
			else break;
			M = n(u);
		}
	}
	function y(N) {
		if (((x = !1), v(N), !w))
			if (n(o) !== null) (w = !0), Mt(S);
			else {
				var M = n(u);
				M !== null && zt(y, M.startTime - N);
			}
	}
	function S(N, M) {
		(w = !1), x && ((x = !1), p(C), (C = -1)), (g = !0);
		var O = f;
		try {
			for (
				v(M), m = n(o);
				m !== null && (!(m.expirationTime > M) || (N && !z()));

			) {
				var G = m.callback;
				if (typeof G == 'function') {
					(m.callback = null), (f = m.priorityLevel);
					var Z = G(m.expirationTime <= M);
					(M = e.unstable_now()),
						typeof Z == 'function' ? (m.callback = Z) : m === n(o) && r(o),
						v(M);
				} else r(o);
				m = n(o);
			}
			if (m !== null) var xr = !0;
			else {
				var Ot = n(u);
				Ot !== null && zt(y, Ot.startTime - M), (xr = !1);
			}
			return xr;
		} finally {
			(m = null), (f = O), (g = !1);
		}
	}
	var T = !1,
		L = null,
		C = -1,
		F = 5,
		E = -1;
	function z() {
		return !(e.unstable_now() - E < F);
	}
	function I() {
		if (L !== null) {
			var N = e.unstable_now();
			E = N;
			var M = !0;
			try {
				M = L(!0, N);
			} finally {
				M ? te() : ((T = !1), (L = null));
			}
		} else T = !1;
	}
	var te;
	if (typeof h == 'function')
		te = function () {
			h(I);
		};
	else if (typeof MessageChannel < 'u') {
		var Xe = new MessageChannel(),
			Pt = Xe.port2;
		(Xe.port1.onmessage = I),
			(te = function () {
				Pt.postMessage(null);
			});
	} else
		te = function () {
			k(I, 0);
		};
	function Mt(N) {
		(L = N), T || ((T = !0), te());
	}
	function zt(N, M) {
		C = k(function () {
			N(e.unstable_now());
		}, M);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (N) {
			N.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || g || ((w = !0), Mt(S));
		}),
		(e.unstable_forceFrameRate = function (N) {
			0 > N || 125 < N
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
					)
				: (F = 0 < N ? Math.floor(1e3 / N) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return f;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(o);
		}),
		(e.unstable_next = function (N) {
			switch (f) {
				case 1:
				case 2:
				case 3:
					var M = 3;
					break;
				default:
					M = f;
			}
			var O = f;
			f = M;
			try {
				return N();
			} finally {
				f = O;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (N, M) {
			switch (N) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					N = 3;
			}
			var O = f;
			f = N;
			try {
				return M();
			} finally {
				f = O;
			}
		}),
		(e.unstable_scheduleCallback = function (N, M, O) {
			var G = e.unstable_now();
			switch (
				(typeof O == 'object' && O !== null
					? ((O = O.delay), (O = typeof O == 'number' && 0 < O ? G + O : G))
					: (O = G),
				N)
			) {
				case 1:
					var Z = -1;
					break;
				case 2:
					Z = 250;
					break;
				case 5:
					Z = 1073741823;
					break;
				case 4:
					Z = 1e4;
					break;
				default:
					Z = 5e3;
			}
			return (
				(Z = O + Z),
				(N = {
					id: d++,
					callback: M,
					priorityLevel: N,
					startTime: O,
					expirationTime: Z,
					sortIndex: -1
				}),
				O > G
					? ((N.sortIndex = O),
						t(u, N),
						n(o) === null &&
							N === n(u) &&
							(x ? (p(C), (C = -1)) : (x = !0), zt(y, O - G)))
					: ((N.sortIndex = Z), t(o, N), w || g || ((w = !0), Mt(S))),
				N
			);
		}),
		(e.unstable_shouldYield = z),
		(e.unstable_wrapCallback = function (N) {
			var M = f;
			return function () {
				var O = f;
				f = M;
				try {
					return N.apply(this, arguments);
				} finally {
					f = O;
				}
			};
		});
})(Fa);
$a.exports = Fa;
var Ed = $a.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ba = D,
	Te = Ed;
function _(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var Va = new Set(),
	Kn = {};
function Xt(e, t) {
	gn(e, t), gn(e + 'Capture', t);
}
function gn(e, t) {
	for (Kn[e] = t, e = 0; e < t.length; e++) Va.add(t[e]);
}
var nt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	yl = Object.prototype.hasOwnProperty,
	Td =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	po = {},
	ho = {};
function Nd(e) {
	return yl.call(ho, e)
		? !0
		: yl.call(po, e)
			? !1
			: Td.test(e)
				? (ho[e] = !0)
				: ((po[e] = !0), !1);
}
function jd(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
					? !n.acceptsBooleans
					: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function Ld(e, t, n, r) {
	if (t === null || typeof t > 'u' || jd(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function ve(e, t, n, r, i, l, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = l),
		(this.removeEmptyString = s);
}
var oe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		oe[e] = new ve(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv']
].forEach(function (e) {
	var t = e[0];
	oe[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	oe[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha'
].forEach(function (e) {
	oe[e] = new ve(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		oe[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	oe[e] = new ve(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	oe[e] = new ve(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	oe[e] = new ve(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	oe[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ys = /[\-:]([a-z])/g;
function ws(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ys, ws);
		oe[t] = new ve(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(ys, ws);
		oe[t] = new ve(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(ys, ws);
	oe[t] = new ve(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new ve(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	oe[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xs(e, t, n, r) {
	var i = oe.hasOwnProperty(t) ? oe[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
			!(2 < t.length) ||
			(t[0] !== 'o' && t[0] !== 'O') ||
			(t[1] !== 'n' && t[1] !== 'N')) &&
		(Ld(t, n, i, r) && (n = null),
		r || i === null
			? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: i.mustUseProperty
				? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
				: ((t = i.attributeName),
					(r = i.attributeNamespace),
					n === null
						? e.removeAttribute(t)
						: ((i = i.type),
							(n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
							r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var st = Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Cr = Symbol.for('react.element'),
	bt = Symbol.for('react.portal'),
	Jt = Symbol.for('react.fragment'),
	Ss = Symbol.for('react.strict_mode'),
	wl = Symbol.for('react.profiler'),
	Ha = Symbol.for('react.provider'),
	Wa = Symbol.for('react.context'),
	_s = Symbol.for('react.forward_ref'),
	xl = Symbol.for('react.suspense'),
	Sl = Symbol.for('react.suspense_list'),
	Cs = Symbol.for('react.memo'),
	at = Symbol.for('react.lazy'),
	Ua = Symbol.for('react.offscreen'),
	mo = Symbol.iterator;
function jn(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (mo && e[mo]) || e['@@iterator']),
			typeof e == 'function' ? e : null);
}
var Y = Object.assign,
	Vi;
function An(e) {
	if (Vi === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Vi = (t && t[1]) || '';
		}
	return (
		`
` +
		Vi +
		e
	);
}
var Hi = !1;
function Wi(e, t) {
	if (!e || Hi) return '';
	Hi = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					}
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					l = r.stack.split(`
`),
					s = i.length - 1,
					a = l.length - 1;
				1 <= s && 0 <= a && i[s] !== l[a];

			)
				a--;
			for (; 1 <= s && 0 <= a; s--, a--)
				if (i[s] !== l[a]) {
					if (s !== 1 || a !== 1)
						do
							if ((s--, a--, 0 > a || i[s] !== l[a])) {
								var o =
									`
` + i[s].replace(' at new ', ' at ');
								return (
									e.displayName &&
										o.includes('<anonymous>') &&
										(o = o.replace('<anonymous>', e.displayName)),
									o
								);
							}
						while (1 <= s && 0 <= a);
					break;
				}
		}
	} finally {
		(Hi = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? An(e) : '';
}
function Pd(e) {
	switch (e.tag) {
		case 5:
			return An(e.type);
		case 16:
			return An('Lazy');
		case 13:
			return An('Suspense');
		case 19:
			return An('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Wi(e.type, !1)), e;
		case 11:
			return (e = Wi(e.type.render, !1)), e;
		case 1:
			return (e = Wi(e.type, !0)), e;
		default:
			return '';
	}
}
function _l(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case Jt:
			return 'Fragment';
		case bt:
			return 'Portal';
		case wl:
			return 'Profiler';
		case Ss:
			return 'StrictMode';
		case xl:
			return 'Suspense';
		case Sl:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case Wa:
				return (e.displayName || 'Context') + '.Consumer';
			case Ha:
				return (e._context.displayName || 'Context') + '.Provider';
			case _s:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Cs:
				return (
					(t = e.displayName || null), t !== null ? t : _l(e.type) || 'Memo'
				);
			case at:
				(t = e._payload), (e = e._init);
				try {
					return _l(e(t));
				} catch {}
		}
	return null;
}
function Md(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return _l(t);
		case 8:
			return t === Ss ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function Et(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function Ga(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function zd(e) {
	var t = Ga(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			l = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = '' + s), l.call(this, s);
				}
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = '' + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				}
			}
		);
	}
}
function kr(e) {
	e._valueTracker || (e._valueTracker = zd(e));
}
function Qa(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = Ga(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Jr(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Cl(e, t) {
	var n = t.checked;
	return Y({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	});
}
function vo(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Et(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null
		});
}
function qa(e, t) {
	(t = t.checked), t != null && xs(e, 'checked', t, !1);
}
function kl(e, t) {
	qa(e, t);
	var n = Et(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? El(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && El(e, t.type, Et(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function go(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function El(e, t, n) {
	(t !== 'number' || Jr(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Rn = Array.isArray;
function dn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + Et(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function Tl(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
	return Y({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue
	});
}
function yo(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(_(92));
			if (Rn(n)) {
				if (1 < n.length) throw Error(_(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: Et(n) };
}
function Ya(e, t) {
	var n = Et(t.value),
		r = Et(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function wo(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Xa(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Nl(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? Xa(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
			? 'http://www.w3.org/1999/xhtml'
			: e;
}
var Er,
	Ka = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
				}
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				Er = Er || document.createElement('div'),
					Er.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = Er.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Zn(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Bn = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	Od = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Bn).forEach(function (e) {
	Od.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
	});
});
function Za(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
			? ('' + t).trim()
			: t + 'px';
}
function ba(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = Za(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var Id = Y(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	}
);
function jl(e, t) {
	if (t) {
		if (Id[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(_(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(_(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(_(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(_(62));
	}
}
function Ll(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var Pl = null;
function ks(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Ml = null,
	fn = null,
	pn = null;
function xo(e) {
	if ((e = gr(e))) {
		if (typeof Ml != 'function') throw Error(_(280));
		var t = e.stateNode;
		t && ((t = ji(t)), Ml(e.stateNode, e.type, t));
	}
}
function Ja(e) {
	fn ? (pn ? pn.push(e) : (pn = [e])) : (fn = e);
}
function eu() {
	if (fn) {
		var e = fn,
			t = pn;
		if (((pn = fn = null), xo(e), t)) for (e = 0; e < t.length; e++) xo(t[e]);
	}
}
function tu(e, t) {
	return e(t);
}
function nu() {}
var Ui = !1;
function ru(e, t, n) {
	if (Ui) return e(t, n);
	Ui = !0;
	try {
		return tu(e, t, n);
	} finally {
		(Ui = !1), (fn !== null || pn !== null) && (nu(), eu());
	}
}
function bn(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = ji(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(_(231, t, typeof n));
	return n;
}
var zl = !1;
if (nt)
	try {
		var Ln = {};
		Object.defineProperty(Ln, 'passive', {
			get: function () {
				zl = !0;
			}
		}),
			window.addEventListener('test', Ln, Ln),
			window.removeEventListener('test', Ln, Ln);
	} catch {
		zl = !1;
	}
function Dd(e, t, n, r, i, l, s, a, o) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var Vn = !1,
	ei = null,
	ti = !1,
	Ol = null,
	Ad = {
		onError: function (e) {
			(Vn = !0), (ei = e);
		}
	};
function Rd(e, t, n, r, i, l, s, a, o) {
	(Vn = !1), (ei = null), Dd.apply(Ad, arguments);
}
function $d(e, t, n, r, i, l, s, a, o) {
	if ((Rd.apply(this, arguments), Vn)) {
		if (Vn) {
			var u = ei;
			(Vn = !1), (ei = null);
		} else throw Error(_(198));
		ti || ((ti = !0), (Ol = u));
	}
}
function Kt(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function iu(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function So(e) {
	if (Kt(e) !== e) throw Error(_(188));
}
function Fd(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Kt(e)), t === null)) throw Error(_(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var l = i.alternate;
		if (l === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === l.child) {
			for (l = i.child; l; ) {
				if (l === n) return So(i), e;
				if (l === r) return So(i), t;
				l = l.sibling;
			}
			throw Error(_(188));
		}
		if (n.return !== r.return) (n = i), (r = l);
		else {
			for (var s = !1, a = i.child; a; ) {
				if (a === n) {
					(s = !0), (n = i), (r = l);
					break;
				}
				if (a === r) {
					(s = !0), (r = i), (n = l);
					break;
				}
				a = a.sibling;
			}
			if (!s) {
				for (a = l.child; a; ) {
					if (a === n) {
						(s = !0), (n = l), (r = i);
						break;
					}
					if (a === r) {
						(s = !0), (r = l), (n = i);
						break;
					}
					a = a.sibling;
				}
				if (!s) throw Error(_(189));
			}
		}
		if (n.alternate !== r) throw Error(_(190));
	}
	if (n.tag !== 3) throw Error(_(188));
	return n.stateNode.current === n ? e : t;
}
function lu(e) {
	return (e = Fd(e)), e !== null ? su(e) : null;
}
function su(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = su(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var ou = Te.unstable_scheduleCallback,
	_o = Te.unstable_cancelCallback,
	Bd = Te.unstable_shouldYield,
	Vd = Te.unstable_requestPaint,
	K = Te.unstable_now,
	Hd = Te.unstable_getCurrentPriorityLevel,
	Es = Te.unstable_ImmediatePriority,
	au = Te.unstable_UserBlockingPriority,
	ni = Te.unstable_NormalPriority,
	Wd = Te.unstable_LowPriority,
	uu = Te.unstable_IdlePriority,
	ki = null,
	Qe = null;
function Ud(e) {
	if (Qe && typeof Qe.onCommitFiberRoot == 'function')
		try {
			Qe.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Be = Math.clz32 ? Math.clz32 : qd,
	Gd = Math.log,
	Qd = Math.LN2;
function qd(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Gd(e) / Qd) | 0)) | 0;
}
var Tr = 64,
	Nr = 4194304;
function $n(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function ri(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		l = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var a = s & ~i;
		a !== 0 ? (r = $n(a)) : ((l &= s), l !== 0 && (r = $n(l)));
	} else (s = n & ~i), s !== 0 ? (r = $n(s)) : l !== 0 && (r = $n(l));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Be(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function Yd(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function Xd(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			l = e.pendingLanes;
		0 < l;

	) {
		var s = 31 - Be(l),
			a = 1 << s,
			o = i[s];
		o === -1
			? (!(a & n) || a & r) && (i[s] = Yd(a, t))
			: o <= t && (e.expiredLanes |= a),
			(l &= ~a);
	}
}
function Il(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function cu() {
	var e = Tr;
	return (Tr <<= 1), !(Tr & 4194240) && (Tr = 64), e;
}
function Gi(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function mr(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Be(t)),
		(e[t] = n);
}
function Kd(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Be(n),
			l = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
	}
}
function Ts(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Be(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var $ = 0;
function du(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fu,
	Ns,
	pu,
	hu,
	mu,
	Dl = !1,
	jr = [],
	vt = null,
	gt = null,
	yt = null,
	Jn = new Map(),
	er = new Map(),
	ct = [],
	Zd =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function Co(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			vt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			gt = null;
			break;
		case 'mouseover':
		case 'mouseout':
			yt = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Jn.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			er.delete(t.pointerId);
	}
}
function Pn(e, t, n, r, i, l) {
	return e === null || e.nativeEvent !== l
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: l,
				targetContainers: [i]
			}),
			t !== null && ((t = gr(t)), t !== null && Ns(t)),
			e)
		: ((e.eventSystemFlags |= r),
			(t = e.targetContainers),
			i !== null && t.indexOf(i) === -1 && t.push(i),
			e);
}
function bd(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (vt = Pn(vt, e, t, n, r, i)), !0;
		case 'dragenter':
			return (gt = Pn(gt, e, t, n, r, i)), !0;
		case 'mouseover':
			return (yt = Pn(yt, e, t, n, r, i)), !0;
		case 'pointerover':
			var l = i.pointerId;
			return Jn.set(l, Pn(Jn.get(l) || null, e, t, n, r, i)), !0;
		case 'gotpointercapture':
			return (
				(l = i.pointerId), er.set(l, Pn(er.get(l) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function vu(e) {
	var t = $t(e.target);
	if (t !== null) {
		var n = Kt(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = iu(n)), t !== null)) {
					(e.blockedOn = t),
						mu(e.priority, function () {
							pu(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Wr(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Al(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Pl = r), n.target.dispatchEvent(r), (Pl = null);
		} else return (t = gr(n)), t !== null && Ns(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function ko(e, t, n) {
	Wr(e) && n.delete(t);
}
function Jd() {
	(Dl = !1),
		vt !== null && Wr(vt) && (vt = null),
		gt !== null && Wr(gt) && (gt = null),
		yt !== null && Wr(yt) && (yt = null),
		Jn.forEach(ko),
		er.forEach(ko);
}
function Mn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Dl ||
			((Dl = !0),
			Te.unstable_scheduleCallback(Te.unstable_NormalPriority, Jd)));
}
function tr(e) {
	function t(i) {
		return Mn(i, e);
	}
	if (0 < jr.length) {
		Mn(jr[0], e);
		for (var n = 1; n < jr.length; n++) {
			var r = jr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		vt !== null && Mn(vt, e),
			gt !== null && Mn(gt, e),
			yt !== null && Mn(yt, e),
			Jn.forEach(t),
			er.forEach(t),
			n = 0;
		n < ct.length;
		n++
	)
		(r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
		vu(n), n.blockedOn === null && ct.shift();
}
var hn = st.ReactCurrentBatchConfig,
	ii = !0;
function ef(e, t, n, r) {
	var i = $,
		l = hn.transition;
	hn.transition = null;
	try {
		($ = 1), js(e, t, n, r);
	} finally {
		($ = i), (hn.transition = l);
	}
}
function tf(e, t, n, r) {
	var i = $,
		l = hn.transition;
	hn.transition = null;
	try {
		($ = 4), js(e, t, n, r);
	} finally {
		($ = i), (hn.transition = l);
	}
}
function js(e, t, n, r) {
	if (ii) {
		var i = Al(e, t, n, r);
		if (i === null) tl(e, t, r, li, n), Co(e, r);
		else if (bd(i, e, t, n, r)) r.stopPropagation();
		else if ((Co(e, r), t & 4 && -1 < Zd.indexOf(e))) {
			for (; i !== null; ) {
				var l = gr(i);
				if (
					(l !== null && fu(l),
					(l = Al(e, t, n, r)),
					l === null && tl(e, t, r, li, n),
					l === i)
				)
					break;
				i = l;
			}
			i !== null && r.stopPropagation();
		} else tl(e, t, r, null, n);
	}
}
var li = null;
function Al(e, t, n, r) {
	if (((li = null), (e = ks(r)), (e = $t(e)), e !== null))
		if (((t = Kt(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = iu(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (li = e), null;
}
function gu(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (Hd()) {
				case Es:
					return 1;
				case au:
					return 4;
				case ni:
				case Wd:
					return 16;
				case uu:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var ft = null,
	Ls = null,
	Ur = null;
function yu() {
	if (Ur) return Ur;
	var e,
		t = Ls,
		n = t.length,
		r,
		i = 'value' in ft ? ft.value : ft.textContent,
		l = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
	return (Ur = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Lr() {
	return !0;
}
function Eo() {
	return !1;
}
function je(e) {
	function t(n, r, i, l, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = l),
			(this.target = s),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
		return (
			(this.isDefaultPrevented = (
				l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
			)
				? Lr
				: Eo),
			(this.isPropagationStopped = Eo),
			this
		);
	}
	return (
		Y(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = Lr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = Lr));
			},
			persist: function () {},
			isPersistent: Lr
		}),
		t
	);
}
var Tn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Ps = je(Tn),
	vr = Y({}, Tn, { view: 0, detail: 0 }),
	nf = je(vr),
	Qi,
	qi,
	zn,
	Ei = Y({}, vr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Ms,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== zn &&
						(zn && e.type === 'mousemove'
							? ((Qi = e.screenX - zn.screenX), (qi = e.screenY - zn.screenY))
							: (qi = Qi = 0),
						(zn = e)),
					Qi);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : qi;
		}
	}),
	To = je(Ei),
	rf = Y({}, Ei, { dataTransfer: 0 }),
	lf = je(rf),
	sf = Y({}, vr, { relatedTarget: 0 }),
	Yi = je(sf),
	of = Y({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	af = je(of),
	uf = Y({}, Tn, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		}
	}),
	cf = je(uf),
	df = Y({}, Tn, { data: 0 }),
	No = je(df),
	ff = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified'
	},
	pf = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta'
	},
	hf = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey'
	};
function mf(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = hf[e]) ? !!t[e] : !1;
}
function Ms() {
	return mf;
}
var vf = Y({}, vr, {
		key: function (e) {
			if (e.key) {
				var t = ff[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Gr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
					? pf[e.keyCode] || 'Unidentified'
					: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Ms,
		charCode: function (e) {
			return e.type === 'keypress' ? Gr(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Gr(e)
				: e.type === 'keydown' || e.type === 'keyup'
					? e.keyCode
					: 0;
		}
	}),
	gf = je(vf),
	yf = Y({}, Ei, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	jo = je(yf),
	wf = Y({}, vr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Ms
	}),
	xf = je(wf),
	Sf = Y({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	_f = je(Sf),
	Cf = Y({}, Ei, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
					? -e.wheelDeltaY
					: 'wheelDelta' in e
						? -e.wheelDelta
						: 0;
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	kf = je(Cf),
	Ef = [9, 13, 27, 32],
	zs = nt && 'CompositionEvent' in window,
	Hn = null;
nt && 'documentMode' in document && (Hn = document.documentMode);
var Tf = nt && 'TextEvent' in window && !Hn,
	wu = nt && (!zs || (Hn && 8 < Hn && 11 >= Hn)),
	Lo = ' ',
	Po = !1;
function xu(e, t) {
	switch (e) {
		case 'keyup':
			return Ef.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function Su(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var en = !1;
function Nf(e, t) {
	switch (e) {
		case 'compositionend':
			return Su(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Po = !0), Lo);
		case 'textInput':
			return (e = t.data), e === Lo && Po ? null : e;
		default:
			return null;
	}
}
function jf(e, t) {
	if (en)
		return e === 'compositionend' || (!zs && xu(e, t))
			? ((e = yu()), (Ur = Ls = ft = null), (en = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return wu && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var Lf = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};
function Mo(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!Lf[e.type] : t === 'textarea';
}
function _u(e, t, n, r) {
	Ja(r),
		(t = si(t, 'onChange')),
		0 < t.length &&
			((n = new Ps('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Wn = null,
	nr = null;
function Pf(e) {
	Ou(e, 0);
}
function Ti(e) {
	var t = rn(e);
	if (Qa(t)) return e;
}
function Mf(e, t) {
	if (e === 'change') return t;
}
var Cu = !1;
if (nt) {
	var Xi;
	if (nt) {
		var Ki = 'oninput' in document;
		if (!Ki) {
			var zo = document.createElement('div');
			zo.setAttribute('oninput', 'return;'),
				(Ki = typeof zo.oninput == 'function');
		}
		Xi = Ki;
	} else Xi = !1;
	Cu = Xi && (!document.documentMode || 9 < document.documentMode);
}
function Oo() {
	Wn && (Wn.detachEvent('onpropertychange', ku), (nr = Wn = null));
}
function ku(e) {
	if (e.propertyName === 'value' && Ti(nr)) {
		var t = [];
		_u(t, nr, e, ks(e)), ru(Pf, t);
	}
}
function zf(e, t, n) {
	e === 'focusin'
		? (Oo(), (Wn = t), (nr = n), Wn.attachEvent('onpropertychange', ku))
		: e === 'focusout' && Oo();
}
function Of(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Ti(nr);
}
function If(e, t) {
	if (e === 'click') return Ti(t);
}
function Df(e, t) {
	if (e === 'input' || e === 'change') return Ti(t);
}
function Af(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == 'function' ? Object.is : Af;
function rr(e, t) {
	if (He(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!yl.call(t, i) || !He(e[i], t[i])) return !1;
	}
	return !0;
}
function Io(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Do(e, t) {
	var n = Io(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Io(n);
	}
}
function Eu(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
				? !1
				: t && t.nodeType === 3
					? Eu(e, t.parentNode)
					: 'contains' in e
						? e.contains(t)
						: e.compareDocumentPosition
							? !!(e.compareDocumentPosition(t) & 16)
							: !1
		: !1;
}
function Tu() {
	for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Jr(e.document);
	}
	return t;
}
function Os(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function Rf(e) {
	var t = Tu(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Eu(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Os(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					l = Math.min(r.start, i);
				(r = r.end === void 0 ? l : Math.min(r.end, i)),
					!e.extend && l > r && ((i = r), (r = l), (l = i)),
					(i = Do(n, l));
				var s = Do(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					l > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var $f = nt && 'documentMode' in document && 11 >= document.documentMode,
	tn = null,
	Rl = null,
	Un = null,
	$l = !1;
function Ao(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	$l ||
		tn == null ||
		tn !== Jr(r) ||
		((r = tn),
		'selectionStart' in r && Os(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
				).getSelection()),
				(r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset
				})),
		(Un && rr(Un, r)) ||
			((Un = r),
			(r = si(Rl, 'onSelect')),
			0 < r.length &&
				((t = new Ps('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = tn))));
}
function Pr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var nn = {
		animationend: Pr('Animation', 'AnimationEnd'),
		animationiteration: Pr('Animation', 'AnimationIteration'),
		animationstart: Pr('Animation', 'AnimationStart'),
		transitionend: Pr('Transition', 'TransitionEnd')
	},
	Zi = {},
	Nu = {};
nt &&
	((Nu = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete nn.animationend.animation,
		delete nn.animationiteration.animation,
		delete nn.animationstart.animation),
	'TransitionEvent' in window || delete nn.transitionend.transition);
function Ni(e) {
	if (Zi[e]) return Zi[e];
	if (!nn[e]) return e;
	var t = nn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Nu) return (Zi[e] = t[n]);
	return e;
}
var ju = Ni('animationend'),
	Lu = Ni('animationiteration'),
	Pu = Ni('animationstart'),
	Mu = Ni('transitionend'),
	zu = new Map(),
	Ro =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function Nt(e, t) {
	zu.set(e, t), Xt(t, [e]);
}
for (var bi = 0; bi < Ro.length; bi++) {
	var Ji = Ro[bi],
		Ff = Ji.toLowerCase(),
		Bf = Ji[0].toUpperCase() + Ji.slice(1);
	Nt(Ff, 'on' + Bf);
}
Nt(ju, 'onAnimationEnd');
Nt(Lu, 'onAnimationIteration');
Nt(Pu, 'onAnimationStart');
Nt('dblclick', 'onDoubleClick');
Nt('focusin', 'onFocus');
Nt('focusout', 'onBlur');
Nt(Mu, 'onTransitionEnd');
gn('onMouseEnter', ['mouseout', 'mouseover']);
gn('onMouseLeave', ['mouseout', 'mouseover']);
gn('onPointerEnter', ['pointerout', 'pointerover']);
gn('onPointerLeave', ['pointerout', 'pointerover']);
Xt(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Xt(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
Xt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Xt(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Xt(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Xt(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Fn =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	Vf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Fn));
function $o(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), $d(r, t, void 0, e), (e.currentTarget = null);
}
function Ou(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var l = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var a = r[s],
						o = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
					$o(i, a, u), (l = o);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((a = r[s]),
						(o = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						o !== l && i.isPropagationStopped())
					)
						break e;
					$o(i, a, u), (l = o);
				}
		}
	}
	if (ti) throw ((e = Ol), (ti = !1), (Ol = null), e);
}
function H(e, t) {
	var n = t[Wl];
	n === void 0 && (n = t[Wl] = new Set());
	var r = e + '__bubble';
	n.has(r) || (Iu(t, e, 2, !1), n.add(r));
}
function el(e, t, n) {
	var r = 0;
	t && (r |= 4), Iu(n, e, r, t);
}
var Mr = '_reactListening' + Math.random().toString(36).slice(2);
function ir(e) {
	if (!e[Mr]) {
		(e[Mr] = !0),
			Va.forEach(function (n) {
				n !== 'selectionchange' && (Vf.has(n) || el(n, !1, e), el(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Mr] || ((t[Mr] = !0), el('selectionchange', !1, t));
	}
}
function Iu(e, t, n, r) {
	switch (gu(t)) {
		case 1:
			var i = ef;
			break;
		case 4:
			i = tf;
			break;
		default:
			i = js;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!zl ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
				? e.addEventListener(t, n, { passive: i })
				: e.addEventListener(t, n, !1);
}
function tl(e, t, n, r, i) {
	var l = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var a = r.stateNode.containerInfo;
				if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var o = s.tag;
						if (
							(o === 3 || o === 4) &&
							((o = s.stateNode.containerInfo),
							o === i || (o.nodeType === 8 && o.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; a !== null; ) {
					if (((s = $t(a)), s === null)) return;
					if (((o = s.tag), o === 5 || o === 6)) {
						r = l = s;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	ru(function () {
		var u = l,
			d = ks(n),
			m = [];
		e: {
			var f = zu.get(e);
			if (f !== void 0) {
				var g = Ps,
					w = e;
				switch (e) {
					case 'keypress':
						if (Gr(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						g = gf;
						break;
					case 'focusin':
						(w = 'focus'), (g = Yi);
						break;
					case 'focusout':
						(w = 'blur'), (g = Yi);
						break;
					case 'beforeblur':
					case 'afterblur':
						g = Yi;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						g = To;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						g = lf;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						g = xf;
						break;
					case ju:
					case Lu:
					case Pu:
						g = af;
						break;
					case Mu:
						g = _f;
						break;
					case 'scroll':
						g = nf;
						break;
					case 'wheel':
						g = kf;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						g = cf;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						g = jo;
				}
				var x = (t & 4) !== 0,
					k = !x && e === 'scroll',
					p = x ? (f !== null ? f + 'Capture' : null) : f;
				x = [];
				for (var h = u, v; h !== null; ) {
					v = h;
					var y = v.stateNode;
					if (
						(v.tag === 5 &&
							y !== null &&
							((v = y),
							p !== null && ((y = bn(h, p)), y != null && x.push(lr(h, y, v)))),
						k)
					)
						break;
					h = h.return;
				}
				0 < x.length &&
					((f = new g(f, w, null, n, d)), m.push({ event: f, listeners: x }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((f = e === 'mouseover' || e === 'pointerover'),
					(g = e === 'mouseout' || e === 'pointerout'),
					f &&
						n !== Pl &&
						(w = n.relatedTarget || n.fromElement) &&
						($t(w) || w[rt]))
				)
					break e;
				if (
					(g || f) &&
					((f =
						d.window === d
							? d
							: (f = d.ownerDocument)
								? f.defaultView || f.parentWindow
								: window),
					g
						? ((w = n.relatedTarget || n.toElement),
							(g = u),
							(w = w ? $t(w) : null),
							w !== null &&
								((k = Kt(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((g = null), (w = u)),
					g !== w)
				) {
					if (
						((x = To),
						(y = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(h = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((x = jo),
							(y = 'onPointerLeave'),
							(p = 'onPointerEnter'),
							(h = 'pointer')),
						(k = g == null ? f : rn(g)),
						(v = w == null ? f : rn(w)),
						(f = new x(y, h + 'leave', g, n, d)),
						(f.target = k),
						(f.relatedTarget = v),
						(y = null),
						$t(d) === u &&
							((x = new x(p, h + 'enter', w, n, d)),
							(x.target = v),
							(x.relatedTarget = k),
							(y = x)),
						(k = y),
						g && w)
					)
						t: {
							for (x = g, p = w, h = 0, v = x; v; v = Zt(v)) h++;
							for (v = 0, y = p; y; y = Zt(y)) v++;
							for (; 0 < h - v; ) (x = Zt(x)), h--;
							for (; 0 < v - h; ) (p = Zt(p)), v--;
							for (; h--; ) {
								if (x === p || (p !== null && x === p.alternate)) break t;
								(x = Zt(x)), (p = Zt(p));
							}
							x = null;
						}
					else x = null;
					g !== null && Fo(m, f, g, x, !1),
						w !== null && k !== null && Fo(m, k, w, x, !0);
				}
			}
			e: {
				if (
					((f = u ? rn(u) : window),
					(g = f.nodeName && f.nodeName.toLowerCase()),
					g === 'select' || (g === 'input' && f.type === 'file'))
				)
					var S = Mf;
				else if (Mo(f))
					if (Cu) S = Df;
					else {
						S = Of;
						var T = zf;
					}
				else
					(g = f.nodeName) &&
						g.toLowerCase() === 'input' &&
						(f.type === 'checkbox' || f.type === 'radio') &&
						(S = If);
				if (S && (S = S(e, u))) {
					_u(m, S, n, d);
					break e;
				}
				T && T(e, f, u),
					e === 'focusout' &&
						(T = f._wrapperState) &&
						T.controlled &&
						f.type === 'number' &&
						El(f, 'number', f.value);
			}
			switch (((T = u ? rn(u) : window), e)) {
				case 'focusin':
					(Mo(T) || T.contentEditable === 'true') &&
						((tn = T), (Rl = u), (Un = null));
					break;
				case 'focusout':
					Un = Rl = tn = null;
					break;
				case 'mousedown':
					$l = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					($l = !1), Ao(m, n, d);
					break;
				case 'selectionchange':
					if ($f) break;
				case 'keydown':
				case 'keyup':
					Ao(m, n, d);
			}
			var L;
			if (zs)
				e: {
					switch (e) {
						case 'compositionstart':
							var C = 'onCompositionStart';
							break e;
						case 'compositionend':
							C = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							C = 'onCompositionUpdate';
							break e;
					}
					C = void 0;
				}
			else
				en
					? xu(e, n) && (C = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (C = 'onCompositionStart');
			C &&
				(wu &&
					n.locale !== 'ko' &&
					(en || C !== 'onCompositionStart'
						? C === 'onCompositionEnd' && en && (L = yu())
						: ((ft = d),
							(Ls = 'value' in ft ? ft.value : ft.textContent),
							(en = !0))),
				(T = si(u, C)),
				0 < T.length &&
					((C = new No(C, e, null, n, d)),
					m.push({ event: C, listeners: T }),
					L ? (C.data = L) : ((L = Su(n)), L !== null && (C.data = L)))),
				(L = Tf ? Nf(e, n) : jf(e, n)) &&
					((u = si(u, 'onBeforeInput')),
					0 < u.length &&
						((d = new No('onBeforeInput', 'beforeinput', null, n, d)),
						m.push({ event: d, listeners: u }),
						(d.data = L)));
		}
		Ou(m, t);
	});
}
function lr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			l = i.stateNode;
		i.tag === 5 &&
			l !== null &&
			((i = l),
			(l = bn(e, n)),
			l != null && r.unshift(lr(e, l, i)),
			(l = bn(e, t)),
			l != null && r.push(lr(e, l, i))),
			(e = e.return);
	}
	return r;
}
function Zt(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Fo(e, t, n, r, i) {
	for (var l = t._reactName, s = []; n !== null && n !== r; ) {
		var a = n,
			o = a.alternate,
			u = a.stateNode;
		if (o !== null && o === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			i
				? ((o = bn(n, l)), o != null && s.unshift(lr(n, o, a)))
				: i || ((o = bn(n, l)), o != null && s.push(lr(n, o, a)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var Hf = /\r\n?/g,
	Wf = /\u0000|\uFFFD/g;
function Bo(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			Hf,
			`
`
		)
		.replace(Wf, '');
}
function zr(e, t, n) {
	if (((t = Bo(t)), Bo(e) !== t && n)) throw Error(_(425));
}
function oi() {}
var Fl = null,
	Bl = null;
function Vl(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var Hl = typeof setTimeout == 'function' ? setTimeout : void 0,
	Uf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Vo = typeof Promise == 'function' ? Promise : void 0,
	Gf =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Vo < 'u'
				? function (e) {
						return Vo.resolve(null).then(e).catch(Qf);
					}
				: Hl;
function Qf(e) {
	setTimeout(function () {
		throw e;
	});
}
function nl(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(i), tr(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	tr(t);
}
function wt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Ho(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Nn = Math.random().toString(36).slice(2),
	Ge = '__reactFiber$' + Nn,
	sr = '__reactProps$' + Nn,
	rt = '__reactContainer$' + Nn,
	Wl = '__reactEvents$' + Nn,
	qf = '__reactListeners$' + Nn,
	Yf = '__reactHandles$' + Nn;
function $t(e) {
	var t = e[Ge];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[rt] || n[Ge])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Ho(e); e !== null; ) {
					if ((n = e[Ge])) return n;
					e = Ho(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function gr(e) {
	return (
		(e = e[Ge] || e[rt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function rn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(_(33));
}
function ji(e) {
	return e[sr] || null;
}
var Ul = [],
	ln = -1;
function jt(e) {
	return { current: e };
}
function W(e) {
	0 > ln || ((e.current = Ul[ln]), (Ul[ln] = null), ln--);
}
function V(e, t) {
	ln++, (Ul[ln] = e.current), (e.current = t);
}
var Tt = {},
	de = jt(Tt),
	we = jt(!1),
	Wt = Tt;
function yn(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Tt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		l;
	for (l in n) i[l] = t[l];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function xe(e) {
	return (e = e.childContextTypes), e != null;
}
function ai() {
	W(we), W(de);
}
function Wo(e, t, n) {
	if (de.current !== Tt) throw Error(_(168));
	V(de, t), V(we, n);
}
function Du(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(_(108, Md(e) || 'Unknown', i));
	return Y({}, n, r);
}
function ui(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tt),
		(Wt = de.current),
		V(de, e),
		V(we, we.current),
		!0
	);
}
function Uo(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(_(169));
	n
		? ((e = Du(e, t, Wt)),
			(r.__reactInternalMemoizedMergedChildContext = e),
			W(we),
			W(de),
			V(de, e))
		: W(we),
		V(we, n);
}
var be = null,
	Li = !1,
	rl = !1;
function Au(e) {
	be === null ? (be = [e]) : be.push(e);
}
function Xf(e) {
	(Li = !0), Au(e);
}
function Lt() {
	if (!rl && be !== null) {
		rl = !0;
		var e = 0,
			t = $;
		try {
			var n = be;
			for ($ = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(be = null), (Li = !1);
		} catch (i) {
			throw (be !== null && (be = be.slice(e + 1)), ou(Es, Lt), i);
		} finally {
			($ = t), (rl = !1);
		}
	}
	return null;
}
var sn = [],
	on = 0,
	ci = null,
	di = 0,
	Pe = [],
	Me = 0,
	Ut = null,
	Je = 1,
	et = '';
function Dt(e, t) {
	(sn[on++] = di), (sn[on++] = ci), (ci = e), (di = t);
}
function Ru(e, t, n) {
	(Pe[Me++] = Je), (Pe[Me++] = et), (Pe[Me++] = Ut), (Ut = e);
	var r = Je;
	e = et;
	var i = 32 - Be(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var l = 32 - Be(t) + i;
	if (30 < l) {
		var s = i - (i % 5);
		(l = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(Je = (1 << (32 - Be(t) + i)) | (n << i) | r),
			(et = l + e);
	} else (Je = (1 << l) | (n << i) | r), (et = e);
}
function Is(e) {
	e.return !== null && (Dt(e, 1), Ru(e, 1, 0));
}
function Ds(e) {
	for (; e === ci; )
		(ci = sn[--on]), (sn[on] = null), (di = sn[--on]), (sn[on] = null);
	for (; e === Ut; )
		(Ut = Pe[--Me]),
			(Pe[Me] = null),
			(et = Pe[--Me]),
			(Pe[Me] = null),
			(Je = Pe[--Me]),
			(Pe[Me] = null);
}
var Ee = null,
	ke = null,
	U = !1,
	Fe = null;
function $u(e, t) {
	var n = ze(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Go(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ee = e), (ke = wt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ee = e), (ke = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Ut !== null ? { id: Je, overflow: et } : null),
						(e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824
						}),
						(n = ze(18, null, null, 0)),
						(n.stateNode = t),
						(n.return = e),
						(e.child = n),
						(Ee = e),
						(ke = null),
						!0)
					: !1
			);
		default:
			return !1;
	}
}
function Gl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ql(e) {
	if (U) {
		var t = ke;
		if (t) {
			var n = t;
			if (!Go(e, t)) {
				if (Gl(e)) throw Error(_(418));
				t = wt(n.nextSibling);
				var r = Ee;
				t && Go(e, t)
					? $u(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (U = !1), (Ee = e));
			}
		} else {
			if (Gl(e)) throw Error(_(418));
			(e.flags = (e.flags & -4097) | 2), (U = !1), (Ee = e);
		}
	}
}
function Qo(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ee = e;
}
function Or(e) {
	if (e !== Ee) return !1;
	if (!U) return Qo(e), (U = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !Vl(e.type, e.memoizedProps))),
		t && (t = ke))
	) {
		if (Gl(e)) throw (Fu(), Error(_(418)));
		for (; t; ) $u(e, t), (t = wt(t.nextSibling));
	}
	if ((Qo(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(_(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							ke = wt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			ke = null;
		}
	} else ke = Ee ? wt(e.stateNode.nextSibling) : null;
	return !0;
}
function Fu() {
	for (var e = ke; e; ) e = wt(e.nextSibling);
}
function wn() {
	(ke = Ee = null), (U = !1);
}
function As(e) {
	Fe === null ? (Fe = [e]) : Fe.push(e);
}
var Kf = st.ReactCurrentBatchConfig;
function Re(e, t) {
	if (e && e.defaultProps) {
		(t = Y({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var fi = jt(null),
	pi = null,
	an = null,
	Rs = null;
function $s() {
	Rs = an = pi = null;
}
function Fs(e) {
	var t = fi.current;
	W(fi), (e._currentValue = t);
}
function ql(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function mn(e, t) {
	(pi = e),
		(Rs = an = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Ie(e) {
	var t = e._currentValue;
	if (Rs !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), an === null)) {
			if (pi === null) throw Error(_(308));
			(an = e), (pi.dependencies = { lanes: 0, firstContext: e });
		} else an = an.next = e;
	return t;
}
var Ft = null;
function Bs(e) {
	Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Bu(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), Bs(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		it(e, r)
	);
}
function it(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Vs(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null
	};
}
function Vu(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects
			});
}
function tt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	};
}
function xt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), R & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			it(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Bs(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		it(e, n)
	);
}
function Qr(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ts(e, n);
	}
}
function qo(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			l = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
			} while (n !== null);
			l === null ? (i = l = t) : (l = l.next = t);
		} else i = l = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: l,
			shared: r.shared,
			effects: r.effects
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function hi(e, t, n, r) {
	var i = e.updateQueue;
	ut = !1;
	var l = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		a = i.shared.pending;
	if (a !== null) {
		i.shared.pending = null;
		var o = a,
			u = o.next;
		(o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(a = d.lastBaseUpdate),
			a !== s &&
				(a === null ? (d.firstBaseUpdate = u) : (a.next = u),
				(d.lastBaseUpdate = o)));
	}
	if (l !== null) {
		var m = i.baseState;
		(s = 0), (d = u = o = null), (a = l);
		do {
			var f = a.lane,
				g = a.eventTime;
			if ((r & f) === f) {
				d !== null &&
					(d = d.next =
						{
							eventTime: g,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null
						});
				e: {
					var w = e,
						x = a;
					switch (((f = t), (g = n), x.tag)) {
						case 1:
							if (((w = x.payload), typeof w == 'function')) {
								m = w.call(g, m, f);
								break e;
							}
							m = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = x.payload),
								(f = typeof w == 'function' ? w.call(g, m, f) : w),
								f == null)
							)
								break e;
							m = Y({}, m, f);
							break e;
						case 2:
							ut = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(f = i.effects),
					f === null ? (i.effects = [a]) : f.push(a));
			} else
				(g = {
					eventTime: g,
					lane: f,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null
				}),
					d === null ? ((u = d = g), (o = m)) : (d = d.next = g),
					(s |= f);
			if (((a = a.next), a === null)) {
				if (((a = i.shared.pending), a === null)) break;
				(f = a),
					(a = f.next),
					(f.next = null),
					(i.lastBaseUpdate = f),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(d === null && (o = m),
			(i.baseState = o),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = d),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else l === null && (i.shared.lanes = 0);
		(Qt |= s), (e.lanes = s), (e.memoizedState = m);
	}
}
function Yo(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(_(191, i));
				i.call(r);
			}
		}
}
var Hu = new Ba.Component().refs;
function Yl(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Y({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pi = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Kt(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = he(),
			i = _t(e),
			l = tt(r, i);
		(l.payload = t),
			n != null && (l.callback = n),
			(t = xt(e, l, i)),
			t !== null && (Ve(t, e, i, r), Qr(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = he(),
			i = _t(e),
			l = tt(r, i);
		(l.tag = 1),
			(l.payload = t),
			n != null && (l.callback = n),
			(t = xt(e, l, i)),
			t !== null && (Ve(t, e, i, r), Qr(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = he(),
			r = _t(e),
			i = tt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = xt(e, i, r)),
			t !== null && (Ve(t, e, r, n), Qr(t, e, r));
	}
};
function Xo(e, t, n, r, i, l, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, l, s)
			: t.prototype && t.prototype.isPureReactComponent
				? !rr(n, r) || !rr(i, l)
				: !0
	);
}
function Wu(e, t, n) {
	var r = !1,
		i = Tt,
		l = t.contextType;
	return (
		typeof l == 'object' && l !== null
			? (l = Ie(l))
			: ((i = xe(t) ? Wt : de.current),
				(r = t.contextTypes),
				(l = (r = r != null) ? yn(e, i) : Tt)),
		(t = new t(n, l)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Pi),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		t
	);
}
function Ko(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Pi.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = Hu), Vs(e);
	var l = t.contextType;
	typeof l == 'object' && l !== null
		? (i.context = Ie(l))
		: ((l = xe(t) ? Wt : de.current), (i.context = yn(e, l))),
		(i.state = e.memoizedState),
		(l = t.getDerivedStateFromProps),
		typeof l == 'function' && (Yl(e, t, l, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((t = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Pi.enqueueReplaceState(i, i.state, null),
			hi(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function On(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(_(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(_(147, e));
			var i = r,
				l = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === l
				? t.ref
				: ((t = function (s) {
						var a = i.refs;
						a === Hu && (a = i.refs = {}),
							s === null ? delete a[l] : (a[l] = s);
					}),
					(t._stringRef = l),
					t);
		}
		if (typeof e != 'string') throw Error(_(284));
		if (!n._owner) throw Error(_(290, e));
	}
	return e;
}
function Ir(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			_(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function Zo(e) {
	var t = e._init;
	return t(e._payload);
}
function Uu(e) {
	function t(p, h) {
		if (e) {
			var v = p.deletions;
			v === null ? ((p.deletions = [h]), (p.flags |= 16)) : v.push(h);
		}
	}
	function n(p, h) {
		if (!e) return null;
		for (; h !== null; ) t(p, h), (h = h.sibling);
		return null;
	}
	function r(p, h) {
		for (p = new Map(); h !== null; )
			h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
		return p;
	}
	function i(p, h) {
		return (p = Ct(p, h)), (p.index = 0), (p.sibling = null), p;
	}
	function l(p, h, v) {
		return (
			(p.index = v),
			e
				? ((v = p.alternate),
					v !== null
						? ((v = v.index), v < h ? ((p.flags |= 2), h) : v)
						: ((p.flags |= 2), h))
				: ((p.flags |= 1048576), h)
		);
	}
	function s(p) {
		return e && p.alternate === null && (p.flags |= 2), p;
	}
	function a(p, h, v, y) {
		return h === null || h.tag !== 6
			? ((h = cl(v, p.mode, y)), (h.return = p), h)
			: ((h = i(h, v)), (h.return = p), h);
	}
	function o(p, h, v, y) {
		var S = v.type;
		return S === Jt
			? d(p, h, v.props.children, y, v.key)
			: h !== null &&
				  (h.elementType === S ||
						(typeof S == 'object' &&
							S !== null &&
							S.$$typeof === at &&
							Zo(S) === h.type))
				? ((y = i(h, v.props)), (y.ref = On(p, h, v)), (y.return = p), y)
				: ((y = br(v.type, v.key, v.props, null, p.mode, y)),
					(y.ref = On(p, h, v)),
					(y.return = p),
					y);
	}
	function u(p, h, v, y) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== v.containerInfo ||
			h.stateNode.implementation !== v.implementation
			? ((h = dl(v, p.mode, y)), (h.return = p), h)
			: ((h = i(h, v.children || [])), (h.return = p), h);
	}
	function d(p, h, v, y, S) {
		return h === null || h.tag !== 7
			? ((h = Ht(v, p.mode, y, S)), (h.return = p), h)
			: ((h = i(h, v)), (h.return = p), h);
	}
	function m(p, h, v) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (h = cl('' + h, p.mode, v)), (h.return = p), h;
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case Cr:
					return (
						(v = br(h.type, h.key, h.props, null, p.mode, v)),
						(v.ref = On(p, null, h)),
						(v.return = p),
						v
					);
				case bt:
					return (h = dl(h, p.mode, v)), (h.return = p), h;
				case at:
					var y = h._init;
					return m(p, y(h._payload), v);
			}
			if (Rn(h) || jn(h))
				return (h = Ht(h, p.mode, v, null)), (h.return = p), h;
			Ir(p, h);
		}
		return null;
	}
	function f(p, h, v, y) {
		var S = h !== null ? h.key : null;
		if ((typeof v == 'string' && v !== '') || typeof v == 'number')
			return S !== null ? null : a(p, h, '' + v, y);
		if (typeof v == 'object' && v !== null) {
			switch (v.$$typeof) {
				case Cr:
					return v.key === S ? o(p, h, v, y) : null;
				case bt:
					return v.key === S ? u(p, h, v, y) : null;
				case at:
					return (S = v._init), f(p, h, S(v._payload), y);
			}
			if (Rn(v) || jn(v)) return S !== null ? null : d(p, h, v, y, null);
			Ir(p, v);
		}
		return null;
	}
	function g(p, h, v, y, S) {
		if ((typeof y == 'string' && y !== '') || typeof y == 'number')
			return (p = p.get(v) || null), a(h, p, '' + y, S);
		if (typeof y == 'object' && y !== null) {
			switch (y.$$typeof) {
				case Cr:
					return (p = p.get(y.key === null ? v : y.key) || null), o(h, p, y, S);
				case bt:
					return (p = p.get(y.key === null ? v : y.key) || null), u(h, p, y, S);
				case at:
					var T = y._init;
					return g(p, h, v, T(y._payload), S);
			}
			if (Rn(y) || jn(y)) return (p = p.get(v) || null), d(h, p, y, S, null);
			Ir(h, y);
		}
		return null;
	}
	function w(p, h, v, y) {
		for (
			var S = null, T = null, L = h, C = (h = 0), F = null;
			L !== null && C < v.length;
			C++
		) {
			L.index > C ? ((F = L), (L = null)) : (F = L.sibling);
			var E = f(p, L, v[C], y);
			if (E === null) {
				L === null && (L = F);
				break;
			}
			e && L && E.alternate === null && t(p, L),
				(h = l(E, h, C)),
				T === null ? (S = E) : (T.sibling = E),
				(T = E),
				(L = F);
		}
		if (C === v.length) return n(p, L), U && Dt(p, C), S;
		if (L === null) {
			for (; C < v.length; C++)
				(L = m(p, v[C], y)),
					L !== null &&
						((h = l(L, h, C)), T === null ? (S = L) : (T.sibling = L), (T = L));
			return U && Dt(p, C), S;
		}
		for (L = r(p, L); C < v.length; C++)
			(F = g(L, p, C, v[C], y)),
				F !== null &&
					(e && F.alternate !== null && L.delete(F.key === null ? C : F.key),
					(h = l(F, h, C)),
					T === null ? (S = F) : (T.sibling = F),
					(T = F));
		return (
			e &&
				L.forEach(function (z) {
					return t(p, z);
				}),
			U && Dt(p, C),
			S
		);
	}
	function x(p, h, v, y) {
		var S = jn(v);
		if (typeof S != 'function') throw Error(_(150));
		if (((v = S.call(v)), v == null)) throw Error(_(151));
		for (
			var T = (S = null), L = h, C = (h = 0), F = null, E = v.next();
			L !== null && !E.done;
			C++, E = v.next()
		) {
			L.index > C ? ((F = L), (L = null)) : (F = L.sibling);
			var z = f(p, L, E.value, y);
			if (z === null) {
				L === null && (L = F);
				break;
			}
			e && L && z.alternate === null && t(p, L),
				(h = l(z, h, C)),
				T === null ? (S = z) : (T.sibling = z),
				(T = z),
				(L = F);
		}
		if (E.done) return n(p, L), U && Dt(p, C), S;
		if (L === null) {
			for (; !E.done; C++, E = v.next())
				(E = m(p, E.value, y)),
					E !== null &&
						((h = l(E, h, C)), T === null ? (S = E) : (T.sibling = E), (T = E));
			return U && Dt(p, C), S;
		}
		for (L = r(p, L); !E.done; C++, E = v.next())
			(E = g(L, p, C, E.value, y)),
				E !== null &&
					(e && E.alternate !== null && L.delete(E.key === null ? C : E.key),
					(h = l(E, h, C)),
					T === null ? (S = E) : (T.sibling = E),
					(T = E));
		return (
			e &&
				L.forEach(function (I) {
					return t(p, I);
				}),
			U && Dt(p, C),
			S
		);
	}
	function k(p, h, v, y) {
		if (
			(typeof v == 'object' &&
				v !== null &&
				v.type === Jt &&
				v.key === null &&
				(v = v.props.children),
			typeof v == 'object' && v !== null)
		) {
			switch (v.$$typeof) {
				case Cr:
					e: {
						for (var S = v.key, T = h; T !== null; ) {
							if (T.key === S) {
								if (((S = v.type), S === Jt)) {
									if (T.tag === 7) {
										n(p, T.sibling),
											(h = i(T, v.props.children)),
											(h.return = p),
											(p = h);
										break e;
									}
								} else if (
									T.elementType === S ||
									(typeof S == 'object' &&
										S !== null &&
										S.$$typeof === at &&
										Zo(S) === T.type)
								) {
									n(p, T.sibling),
										(h = i(T, v.props)),
										(h.ref = On(p, T, v)),
										(h.return = p),
										(p = h);
									break e;
								}
								n(p, T);
								break;
							} else t(p, T);
							T = T.sibling;
						}
						v.type === Jt
							? ((h = Ht(v.props.children, p.mode, y, v.key)),
								(h.return = p),
								(p = h))
							: ((y = br(v.type, v.key, v.props, null, p.mode, y)),
								(y.ref = On(p, h, v)),
								(y.return = p),
								(p = y));
					}
					return s(p);
				case bt:
					e: {
						for (T = v.key; h !== null; ) {
							if (h.key === T)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === v.containerInfo &&
									h.stateNode.implementation === v.implementation
								) {
									n(p, h.sibling),
										(h = i(h, v.children || [])),
										(h.return = p),
										(p = h);
									break e;
								} else {
									n(p, h);
									break;
								}
							else t(p, h);
							h = h.sibling;
						}
						(h = dl(v, p.mode, y)), (h.return = p), (p = h);
					}
					return s(p);
				case at:
					return (T = v._init), k(p, h, T(v._payload), y);
			}
			if (Rn(v)) return w(p, h, v, y);
			if (jn(v)) return x(p, h, v, y);
			Ir(p, v);
		}
		return (typeof v == 'string' && v !== '') || typeof v == 'number'
			? ((v = '' + v),
				h !== null && h.tag === 6
					? (n(p, h.sibling), (h = i(h, v)), (h.return = p), (p = h))
					: (n(p, h), (h = cl(v, p.mode, y)), (h.return = p), (p = h)),
				s(p))
			: n(p, h);
	}
	return k;
}
var xn = Uu(!0),
	Gu = Uu(!1),
	yr = {},
	qe = jt(yr),
	or = jt(yr),
	ar = jt(yr);
function Bt(e) {
	if (e === yr) throw Error(_(174));
	return e;
}
function Hs(e, t) {
	switch ((V(ar, t), V(or, e), V(qe, yr), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Nl(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Nl(t, e));
	}
	W(qe), V(qe, t);
}
function Sn() {
	W(qe), W(or), W(ar);
}
function Qu(e) {
	Bt(ar.current);
	var t = Bt(qe.current),
		n = Nl(t, e.type);
	t !== n && (V(or, e), V(qe, n));
}
function Ws(e) {
	or.current === e && (W(qe), W(or));
}
var Q = jt(0);
function mi(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var il = [];
function Us() {
	for (var e = 0; e < il.length; e++)
		il[e]._workInProgressVersionPrimary = null;
	il.length = 0;
}
var qr = st.ReactCurrentDispatcher,
	ll = st.ReactCurrentBatchConfig,
	Gt = 0,
	q = null,
	J = null,
	ne = null,
	vi = !1,
	Gn = !1,
	ur = 0,
	Zf = 0;
function ae() {
	throw Error(_(321));
}
function Gs(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!He(e[n], t[n])) return !1;
	return !0;
}
function Qs(e, t, n, r, i, l) {
	if (
		((Gt = l),
		(q = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(qr.current = e === null || e.memoizedState === null ? tp : np),
		(e = n(r, i)),
		Gn)
	) {
		l = 0;
		do {
			if (((Gn = !1), (ur = 0), 25 <= l)) throw Error(_(301));
			(l += 1),
				(ne = J = null),
				(t.updateQueue = null),
				(qr.current = rp),
				(e = n(r, i));
		} while (Gn);
	}
	if (
		((qr.current = gi),
		(t = J !== null && J.next !== null),
		(Gt = 0),
		(ne = J = q = null),
		(vi = !1),
		t)
	)
		throw Error(_(300));
	return e;
}
function qs() {
	var e = ur !== 0;
	return (ur = 0), e;
}
function Ue() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return ne === null ? (q.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function De() {
	if (J === null) {
		var e = q.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = J.next;
	var t = ne === null ? q.memoizedState : ne.next;
	if (t !== null) (ne = t), (J = e);
	else {
		if (e === null) throw Error(_(310));
		(J = e),
			(e = {
				memoizedState: J.memoizedState,
				baseState: J.baseState,
				baseQueue: J.baseQueue,
				queue: J.queue,
				next: null
			}),
			ne === null ? (q.memoizedState = ne = e) : (ne = ne.next = e);
	}
	return ne;
}
function cr(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function sl(e) {
	var t = De(),
		n = t.queue;
	if (n === null) throw Error(_(311));
	n.lastRenderedReducer = e;
	var r = J,
		i = r.baseQueue,
		l = n.pending;
	if (l !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = l.next), (l.next = s);
		}
		(r.baseQueue = i = l), (n.pending = null);
	}
	if (i !== null) {
		(l = i.next), (r = r.baseState);
		var a = (s = null),
			o = null,
			u = l;
		do {
			var d = u.lane;
			if ((Gt & d) === d)
				o !== null &&
					(o = o.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var m = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				};
				o === null ? ((a = o = m), (s = r)) : (o = o.next = m),
					(q.lanes |= d),
					(Qt |= d);
			}
			u = u.next;
		} while (u !== null && u !== l);
		o === null ? (s = r) : (o.next = a),
			He(r, t.memoizedState) || (ye = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = o),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (l = i.lane), (q.lanes |= l), (Qt |= l), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ol(e) {
	var t = De(),
		n = t.queue;
	if (n === null) throw Error(_(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		l = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (l = e(l, s.action)), (s = s.next);
		while (s !== i);
		He(l, t.memoizedState) || (ye = !0),
			(t.memoizedState = l),
			t.baseQueue === null && (t.baseState = l),
			(n.lastRenderedState = l);
	}
	return [l, r];
}
function qu() {}
function Yu(e, t) {
	var n = q,
		r = De(),
		i = t(),
		l = !He(r.memoizedState, i);
	if (
		(l && ((r.memoizedState = i), (ye = !0)),
		(r = r.queue),
		Ys(Zu.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			dr(9, Ku.bind(null, n, r, i, t), void 0, null),
			re === null)
		)
			throw Error(_(349));
		Gt & 30 || Xu(n, t, i);
	}
	return i;
}
function Xu(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(q.updateQueue = t),
				(t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ku(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), bu(t) && Ju(e);
}
function Zu(e, t, n) {
	return n(function () {
		bu(t) && Ju(e);
	});
}
function bu(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !He(e, n);
	} catch {
		return !0;
	}
}
function Ju(e) {
	var t = it(e, 1);
	t !== null && Ve(t, e, 1, -1);
}
function bo(e) {
	var t = Ue();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: cr,
			lastRenderedState: e
		}),
		(t.queue = e),
		(e = e.dispatch = ep.bind(null, q, e)),
		[t.memoizedState, e]
	);
}
function dr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = q.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
				(q.updateQueue = t),
				(t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
				n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function ec() {
	return De().memoizedState;
}
function Yr(e, t, n, r) {
	var i = Ue();
	(q.flags |= e),
		(i.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mi(e, t, n, r) {
	var i = De();
	r = r === void 0 ? null : r;
	var l = void 0;
	if (J !== null) {
		var s = J.memoizedState;
		if (((l = s.destroy), r !== null && Gs(r, s.deps))) {
			i.memoizedState = dr(t, n, l, r);
			return;
		}
	}
	(q.flags |= e), (i.memoizedState = dr(1 | t, n, l, r));
}
function Jo(e, t) {
	return Yr(8390656, 8, e, t);
}
function Ys(e, t) {
	return Mi(2048, 8, e, t);
}
function tc(e, t) {
	return Mi(4, 2, e, t);
}
function nc(e, t) {
	return Mi(4, 4, e, t);
}
function rc(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function ic(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Mi(4, 4, rc.bind(null, t, e), n)
	);
}
function Xs() {}
function lc(e, t) {
	var n = De();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Gs(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function sc(e, t) {
	var n = De();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Gs(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function oc(e, t, n) {
	return Gt & 21
		? (He(n, t) || ((n = cu()), (q.lanes |= n), (Qt |= n), (e.baseState = !0)),
			t)
		: (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function bf(e, t) {
	var n = $;
	($ = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = ll.transition;
	ll.transition = {};
	try {
		e(!1), t();
	} finally {
		($ = n), (ll.transition = r);
	}
}
function ac() {
	return De().memoizedState;
}
function Jf(e, t, n) {
	var r = _t(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}),
		uc(e))
	)
		cc(t, n);
	else if (((n = Bu(e, t, n, r)), n !== null)) {
		var i = he();
		Ve(n, e, r, i), dc(n, t, r);
	}
}
function ep(e, t, n) {
	var r = _t(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (uc(e)) cc(t, i);
	else {
		var l = e.alternate;
		if (
			e.lanes === 0 &&
			(l === null || l.lanes === 0) &&
			((l = t.lastRenderedReducer), l !== null)
		)
			try {
				var s = t.lastRenderedState,
					a = l(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = a), He(a, s))) {
					var o = t.interleaved;
					o === null
						? ((i.next = i), Bs(t))
						: ((i.next = o.next), (o.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = Bu(e, t, i, r)),
			n !== null && ((i = he()), Ve(n, e, r, i), dc(n, t, r));
	}
}
function uc(e) {
	var t = e.alternate;
	return e === q || (t !== null && t === q);
}
function cc(e, t) {
	Gn = vi = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function dc(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), Ts(e, n);
	}
}
var gi = {
		readContext: Ie,
		useCallback: ae,
		useContext: ae,
		useEffect: ae,
		useImperativeHandle: ae,
		useInsertionEffect: ae,
		useLayoutEffect: ae,
		useMemo: ae,
		useReducer: ae,
		useRef: ae,
		useState: ae,
		useDebugValue: ae,
		useDeferredValue: ae,
		useTransition: ae,
		useMutableSource: ae,
		useSyncExternalStore: ae,
		useId: ae,
		unstable_isNewReconciler: !1
	},
	tp = {
		readContext: Ie,
		useCallback: function (e, t) {
			return (Ue().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Ie,
		useEffect: Jo,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Yr(4194308, 4, rc.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Yr(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Yr(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ue();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ue();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t
				}),
				(r.queue = e),
				(e = e.dispatch = Jf.bind(null, q, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ue();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: bo,
		useDebugValue: Xs,
		useDeferredValue: function (e) {
			return (Ue().memoizedState = e);
		},
		useTransition: function () {
			var e = bo(!1),
				t = e[0];
			return (e = bf.bind(null, e[1])), (Ue().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = q,
				i = Ue();
			if (U) {
				if (n === void 0) throw Error(_(407));
				n = n();
			} else {
				if (((n = t()), re === null)) throw Error(_(349));
				Gt & 30 || Xu(r, t, n);
			}
			i.memoizedState = n;
			var l = { value: n, getSnapshot: t };
			return (
				(i.queue = l),
				Jo(Zu.bind(null, r, l, e), [e]),
				(r.flags |= 2048),
				dr(9, Ku.bind(null, r, l, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ue(),
				t = re.identifierPrefix;
			if (U) {
				var n = et,
					r = Je;
				(n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = ur++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = Zf++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1
	},
	np = {
		readContext: Ie,
		useCallback: lc,
		useContext: Ie,
		useEffect: Ys,
		useImperativeHandle: ic,
		useInsertionEffect: tc,
		useLayoutEffect: nc,
		useMemo: sc,
		useReducer: sl,
		useRef: ec,
		useState: function () {
			return sl(cr);
		},
		useDebugValue: Xs,
		useDeferredValue: function (e) {
			var t = De();
			return oc(t, J.memoizedState, e);
		},
		useTransition: function () {
			var e = sl(cr)[0],
				t = De().memoizedState;
			return [e, t];
		},
		useMutableSource: qu,
		useSyncExternalStore: Yu,
		useId: ac,
		unstable_isNewReconciler: !1
	},
	rp = {
		readContext: Ie,
		useCallback: lc,
		useContext: Ie,
		useEffect: Ys,
		useImperativeHandle: ic,
		useInsertionEffect: tc,
		useLayoutEffect: nc,
		useMemo: sc,
		useReducer: ol,
		useRef: ec,
		useState: function () {
			return ol(cr);
		},
		useDebugValue: Xs,
		useDeferredValue: function (e) {
			var t = De();
			return J === null ? (t.memoizedState = e) : oc(t, J.memoizedState, e);
		},
		useTransition: function () {
			var e = ol(cr)[0],
				t = De().memoizedState;
			return [e, t];
		},
		useMutableSource: qu,
		useSyncExternalStore: Yu,
		useId: ac,
		unstable_isNewReconciler: !1
	};
function _n(e, t) {
	try {
		var n = '',
			r = t;
		do (n += Pd(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (l) {
		i =
			`
Error generating stack: ` +
			l.message +
			`
` +
			l.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function al(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kl(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var ip = typeof WeakMap == 'function' ? WeakMap : Map;
function fc(e, t, n) {
	(n = tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			wi || ((wi = !0), (ss = r)), Kl(e, t);
		}),
		n
	);
}
function pc(e, t, n) {
	(n = tt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				Kl(e, t);
			});
	}
	var l = e.stateNode;
	return (
		l !== null &&
			typeof l.componentDidCatch == 'function' &&
			(n.callback = function () {
				Kl(e, t),
					typeof r != 'function' &&
						(St === null ? (St = new Set([this])) : St.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : ''
				});
			}),
		n
	);
}
function ea(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new ip();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = yp.bind(null, e, t, n)), t.then(e, e));
}
function ta(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function na(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
					(n.flags |= 131072),
					(n.flags &= -52805),
					n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = tt(-1, 1)), (t.tag = 2), xt(n, t, 1))),
					(n.lanes |= 1)),
			e);
}
var lp = st.ReactCurrentOwner,
	ye = !1;
function fe(e, t, n, r) {
	t.child = e === null ? Gu(t, null, n, r) : xn(t, e.child, n, r);
}
function ra(e, t, n, r, i) {
	n = n.render;
	var l = t.ref;
	return (
		mn(t, i),
		(r = Qs(e, t, n, r, l, i)),
		(n = qs()),
		e !== null && !ye
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				lt(e, t, i))
			: (U && n && Is(t), (t.flags |= 1), fe(e, t, r, i), t.child)
	);
}
function ia(e, t, n, r, i) {
	if (e === null) {
		var l = n.type;
		return typeof l == 'function' &&
			!ro(l) &&
			l.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = l), hc(e, t, l, r, i))
			: ((e = br(n.type, null, r, t, t.mode, i)),
				(e.ref = t.ref),
				(e.return = t),
				(t.child = e));
	}
	if (((l = e.child), !(e.lanes & i))) {
		var s = l.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : rr), n(s, r) && e.ref === t.ref)
		)
			return lt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = Ct(l, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function hc(e, t, n, r, i) {
	if (e !== null) {
		var l = e.memoizedProps;
		if (rr(l, r) && e.ref === t.ref)
			if (((ye = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
				e.flags & 131072 && (ye = !0);
			else return (t.lanes = e.lanes), lt(e, t, i);
	}
	return Zl(e, t, n, r, i);
}
function mc(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		l = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				V(cn, _e),
				(_e |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = l !== null ? l.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}),
					(t.updateQueue = null),
					V(cn, _e),
					(_e |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = l !== null ? l.baseLanes : n),
				V(cn, _e),
				(_e |= r);
		}
	else
		l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
			V(cn, _e),
			(_e |= r);
	return fe(e, t, i, n), t.child;
}
function vc(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, r, i) {
	var l = xe(n) ? Wt : de.current;
	return (
		(l = yn(t, l)),
		mn(t, i),
		(n = Qs(e, t, n, r, l, i)),
		(r = qs()),
		e !== null && !ye
			? ((t.updateQueue = e.updateQueue),
				(t.flags &= -2053),
				(e.lanes &= ~i),
				lt(e, t, i))
			: (U && r && Is(t), (t.flags |= 1), fe(e, t, n, i), t.child)
	);
}
function la(e, t, n, r, i) {
	if (xe(n)) {
		var l = !0;
		ui(t);
	} else l = !1;
	if ((mn(t, i), t.stateNode === null))
		Xr(e, t), Wu(t, n, r), Xl(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			a = t.memoizedProps;
		s.props = a;
		var o = s.context,
			u = n.contextType;
		typeof u == 'object' && u !== null
			? (u = Ie(u))
			: ((u = xe(n) ? Wt : de.current), (u = yn(t, u)));
		var d = n.getDerivedStateFromProps,
			m =
				typeof d == 'function' ||
				typeof s.getSnapshotBeforeUpdate == 'function';
		m ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((a !== r || o !== u) && Ko(t, s, r, u)),
			(ut = !1);
		var f = t.memoizedState;
		(s.state = f),
			hi(t, r, s, i),
			(o = t.memoizedState),
			a !== r || f !== o || we.current || ut
				? (typeof d == 'function' && (Yl(t, n, d, r), (o = t.memoizedState)),
					(a = ut || Xo(t, n, a, r, f, o, u))
						? (m ||
								(typeof s.UNSAFE_componentWillMount != 'function' &&
									typeof s.componentWillMount != 'function') ||
								(typeof s.componentWillMount == 'function' &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == 'function' &&
									s.UNSAFE_componentWillMount()),
							typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
							(t.memoizedProps = r),
							(t.memoizedState = o)),
					(s.props = r),
					(s.state = o),
					(s.context = u),
					(r = a))
				: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
					(r = !1));
	} else {
		(s = t.stateNode),
			Vu(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : Re(t.type, a)),
			(s.props = u),
			(m = t.pendingProps),
			(f = s.context),
			(o = n.contextType),
			typeof o == 'object' && o !== null
				? (o = Ie(o))
				: ((o = xe(n) ? Wt : de.current), (o = yn(t, o)));
		var g = n.getDerivedStateFromProps;
		(d =
			typeof g == 'function' ||
			typeof s.getSnapshotBeforeUpdate == 'function') ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((a !== m || f !== o) && Ko(t, s, r, o)),
			(ut = !1),
			(f = t.memoizedState),
			(s.state = f),
			hi(t, r, s, i);
		var w = t.memoizedState;
		a !== m || f !== w || we.current || ut
			? (typeof g == 'function' && (Yl(t, n, g, r), (w = t.memoizedState)),
				(u = ut || Xo(t, n, u, r, f, w, o) || !1)
					? (d ||
							(typeof s.UNSAFE_componentWillUpdate != 'function' &&
								typeof s.componentWillUpdate != 'function') ||
							(typeof s.componentWillUpdate == 'function' &&
								s.componentWillUpdate(r, w, o),
							typeof s.UNSAFE_componentWillUpdate == 'function' &&
								s.UNSAFE_componentWillUpdate(r, w, o)),
						typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
						typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != 'function' ||
							(a === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 4),
						typeof s.getSnapshotBeforeUpdate != 'function' ||
							(a === e.memoizedProps && f === e.memoizedState) ||
							(t.flags |= 1024),
						(t.memoizedProps = r),
						(t.memoizedState = w)),
				(s.props = r),
				(s.state = w),
				(s.context = o),
				(r = u))
			: (typeof s.componentDidUpdate != 'function' ||
					(a === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 4),
				typeof s.getSnapshotBeforeUpdate != 'function' ||
					(a === e.memoizedProps && f === e.memoizedState) ||
					(t.flags |= 1024),
				(r = !1));
	}
	return bl(e, t, n, r, l, i);
}
function bl(e, t, n, r, i, l) {
	vc(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && Uo(t, n, !1), lt(e, t, l);
	(r = t.stateNode), (lp.current = t);
	var a =
		s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = xn(t, e.child, null, l)), (t.child = xn(t, null, a, l)))
			: fe(e, t, a, l),
		(t.memoizedState = r.state),
		i && Uo(t, n, !0),
		t.child
	);
}
function gc(e) {
	var t = e.stateNode;
	t.pendingContext
		? Wo(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Wo(e, t.context, !1),
		Hs(e, t.containerInfo);
}
function sa(e, t, n, r, i) {
	return wn(), As(i), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function yc(e, t, n) {
	var r = t.pendingProps,
		i = Q.current,
		l = !1,
		s = (t.flags & 128) !== 0,
		a;
	if (
		((a = s) ||
			(a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		a
			? ((l = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		V(Q, i & 1),
		e === null)
	)
		return (
			Ql(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
					null)
				: ((s = r.children),
					(e = r.fallback),
					l
						? ((r = t.mode),
							(l = t.child),
							(s = { mode: 'hidden', children: s }),
							!(r & 1) && l !== null
								? ((l.childLanes = 0), (l.pendingProps = s))
								: (l = Ii(s, r, 0, null)),
							(e = Ht(e, r, n, null)),
							(l.return = t),
							(e.return = t),
							(l.sibling = e),
							(t.child = l),
							(t.child.memoizedState = es(n)),
							(t.memoizedState = Jl),
							e)
						: Ks(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
		return sp(e, t, s, r, a, i, n);
	if (l) {
		(l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
		var o = { mode: 'hidden', children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
					(r.childLanes = 0),
					(r.pendingProps = o),
					(t.deletions = null))
				: ((r = Ct(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			a !== null ? (l = Ct(a, l)) : ((l = Ht(l, s, n, null)), (l.flags |= 2)),
			(l.return = t),
			(r.return = t),
			(r.sibling = l),
			(t.child = r),
			(r = l),
			(l = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? es(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions
						}),
			(l.memoizedState = s),
			(l.childLanes = e.childLanes & ~n),
			(t.memoizedState = Jl),
			r
		);
	}
	return (
		(l = e.child),
		(e = l.sibling),
		(r = Ct(l, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Ks(e, t) {
	return (
		(t = Ii({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function Dr(e, t, n, r) {
	return (
		r !== null && As(r),
		xn(t, e.child, null, n),
		(e = Ks(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function sp(e, t, n, r, i, l, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = al(Error(_(422)))), Dr(e, t, s, r))
			: t.memoizedState !== null
				? ((t.child = e.child), (t.flags |= 128), null)
				: ((l = r.fallback),
					(i = t.mode),
					(r = Ii({ mode: 'visible', children: r.children }, i, 0, null)),
					(l = Ht(l, i, s, null)),
					(l.flags |= 2),
					(r.return = t),
					(l.return = t),
					(r.sibling = l),
					(t.child = r),
					t.mode & 1 && xn(t, e.child, null, s),
					(t.child.memoizedState = es(s)),
					(t.memoizedState = Jl),
					l);
	if (!(t.mode & 1)) return Dr(e, t, s, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
		return (r = a), (l = Error(_(419))), (r = al(l, r, void 0)), Dr(e, t, s, r);
	}
	if (((a = (s & e.childLanes) !== 0), ye || a)) {
		if (((r = re), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== l.retryLane &&
					((l.retryLane = i), it(e, i), Ve(r, e, i, -1));
		}
		return no(), (r = al(Error(_(421)))), Dr(e, t, s, r);
	}
	return i.data === '$?'
		? ((t.flags |= 128),
			(t.child = e.child),
			(t = wp.bind(null, e)),
			(i._reactRetry = t),
			null)
		: ((e = l.treeContext),
			(ke = wt(i.nextSibling)),
			(Ee = t),
			(U = !0),
			(Fe = null),
			e !== null &&
				((Pe[Me++] = Je),
				(Pe[Me++] = et),
				(Pe[Me++] = Ut),
				(Je = e.id),
				(et = e.overflow),
				(Ut = t)),
			(t = Ks(t, r.children)),
			(t.flags |= 4096),
			t);
}
function oa(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ql(e.return, t, n);
}
function ul(e, t, n, r, i) {
	var l = e.memoizedState;
	l === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i
			})
		: ((l.isBackwards = t),
			(l.rendering = null),
			(l.renderingStartTime = 0),
			(l.last = r),
			(l.tail = n),
			(l.tailMode = i));
}
function wc(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		l = r.tail;
	if ((fe(e, t, r.children, n), (r = Q.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && oa(e, n, t);
				else if (e.tag === 19) oa(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((V(Q, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case 'forwards':
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && mi(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					ul(t, !1, i, n, l);
				break;
			case 'backwards':
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && mi(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				ul(t, !0, n, null, l);
				break;
			case 'together':
				ul(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Xr(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Qt |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(_(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function op(e, t, n) {
	switch (t.tag) {
		case 3:
			gc(t), wn();
			break;
		case 5:
			Qu(t);
			break;
		case 1:
			xe(t.type) && ui(t);
			break;
		case 4:
			Hs(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			V(fi, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (V(Q, Q.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
						? yc(e, t, n)
						: (V(Q, Q.current & 1),
							(e = lt(e, t, n)),
							e !== null ? e.sibling : null);
			V(Q, Q.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return wc(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				V(Q, Q.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), mc(e, t, n);
	}
	return lt(e, t, n);
}
var xc, ts, Sc, _c;
xc = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
ts = function () {};
Sc = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), Bt(qe.current);
		var l = null;
		switch (n) {
			case 'input':
				(i = Cl(e, i)), (r = Cl(e, r)), (l = []);
				break;
			case 'select':
				(i = Y({}, i, { value: void 0 })),
					(r = Y({}, r, { value: void 0 })),
					(l = []);
				break;
			case 'textarea':
				(i = Tl(e, i)), (r = Tl(e, r)), (l = []);
				break;
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = oi);
		}
		jl(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var a = i[u];
					for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Kn.hasOwnProperty(u)
							? l || (l = [])
							: (l = l || []).push(u, null));
		for (u in r) {
			var o = r[u];
			if (
				((a = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && o !== a && (o != null || a != null))
			)
				if (u === 'style')
					if (a) {
						for (s in a)
							!a.hasOwnProperty(s) ||
								(o && o.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ''));
						for (s in o)
							o.hasOwnProperty(s) &&
								a[s] !== o[s] &&
								(n || (n = {}), (n[s] = o[s]));
					} else n || (l || (l = []), l.push(u, n)), (n = o);
				else
					u === 'dangerouslySetInnerHTML'
						? ((o = o ? o.__html : void 0),
							(a = a ? a.__html : void 0),
							o != null && a !== o && (l = l || []).push(u, o))
						: u === 'children'
							? (typeof o != 'string' && typeof o != 'number') ||
								(l = l || []).push(u, '' + o)
							: u !== 'suppressContentEditableWarning' &&
								u !== 'suppressHydrationWarning' &&
								(Kn.hasOwnProperty(u)
									? (o != null && u === 'onScroll' && H('scroll', e),
										l || a === o || (l = []))
									: (l = l || []).push(u, o));
		}
		n && (l = l || []).push('style', n);
		var u = l;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
_c = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function In(e, t) {
	if (!U)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function ue(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ap(e, t, n) {
	var r = t.pendingProps;
	switch ((Ds(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ue(t), null;
		case 1:
			return xe(t.type) && ai(), ue(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Sn(),
				W(we),
				W(de),
				Us(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Or(t)
						? (t.flags |= 4)
						: e === null ||
							(e.memoizedState.isDehydrated && !(t.flags & 256)) ||
							((t.flags |= 1024), Fe !== null && (us(Fe), (Fe = null)))),
				ts(e, t),
				ue(t),
				null
			);
		case 5:
			Ws(t);
			var i = Bt(ar.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Sc(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(_(166));
					return ue(t), null;
				}
				if (((e = Bt(qe.current)), Or(t))) {
					(r = t.stateNode), (n = t.type);
					var l = t.memoizedProps;
					switch (((r[Ge] = t), (r[sr] = l), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							H('cancel', r), H('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							H('load', r);
							break;
						case 'video':
						case 'audio':
							for (i = 0; i < Fn.length; i++) H(Fn[i], r);
							break;
						case 'source':
							H('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							H('error', r), H('load', r);
							break;
						case 'details':
							H('toggle', r);
							break;
						case 'input':
							vo(r, l), H('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!l.multiple }),
								H('invalid', r);
							break;
						case 'textarea':
							yo(r, l), H('invalid', r);
					}
					jl(n, l), (i = null);
					for (var s in l)
						if (l.hasOwnProperty(s)) {
							var a = l[s];
							s === 'children'
								? typeof a == 'string'
									? r.textContent !== a &&
										(l.suppressHydrationWarning !== !0 &&
											zr(r.textContent, a, e),
										(i = ['children', a]))
									: typeof a == 'number' &&
										r.textContent !== '' + a &&
										(l.suppressHydrationWarning !== !0 &&
											zr(r.textContent, a, e),
										(i = ['children', '' + a]))
								: Kn.hasOwnProperty(s) &&
									a != null &&
									s === 'onScroll' &&
									H('scroll', r);
						}
					switch (n) {
						case 'input':
							kr(r), go(r, l, !0);
							break;
						case 'textarea':
							kr(r), wo(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof l.onClick == 'function' && (r.onclick = oi);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = Xa(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = s.createElement('div')),
									(e.innerHTML = '<script></script>'),
									(e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
									? (e = s.createElement(n, { is: r.is }))
									: ((e = s.createElement(n)),
										n === 'select' &&
											((s = e),
											r.multiple
												? (s.multiple = !0)
												: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Ge] = t),
						(e[sr] = r),
						xc(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = Ll(n, r)), n)) {
							case 'dialog':
								H('cancel', e), H('close', e), (i = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								H('load', e), (i = r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < Fn.length; i++) H(Fn[i], e);
								i = r;
								break;
							case 'source':
								H('error', e), (i = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								H('error', e), H('load', e), (i = r);
								break;
							case 'details':
								H('toggle', e), (i = r);
								break;
							case 'input':
								vo(e, r), (i = Cl(e, r)), H('invalid', e);
								break;
							case 'option':
								i = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = Y({}, r, { value: void 0 })),
									H('invalid', e);
								break;
							case 'textarea':
								yo(e, r), (i = Tl(e, r)), H('invalid', e);
								break;
							default:
								i = r;
						}
						jl(n, i), (a = i);
						for (l in a)
							if (a.hasOwnProperty(l)) {
								var o = a[l];
								l === 'style'
									? ba(e, o)
									: l === 'dangerouslySetInnerHTML'
										? ((o = o ? o.__html : void 0), o != null && Ka(e, o))
										: l === 'children'
											? typeof o == 'string'
												? (n !== 'textarea' || o !== '') && Zn(e, o)
												: typeof o == 'number' && Zn(e, '' + o)
											: l !== 'suppressContentEditableWarning' &&
												l !== 'suppressHydrationWarning' &&
												l !== 'autoFocus' &&
												(Kn.hasOwnProperty(l)
													? o != null && l === 'onScroll' && H('scroll', e)
													: o != null && xs(e, l, o, s));
							}
						switch (n) {
							case 'input':
								kr(e), go(e, r, !1);
								break;
							case 'textarea':
								kr(e), wo(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + Et(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(l = r.value),
									l != null
										? dn(e, !!r.multiple, l, !1)
										: r.defaultValue != null &&
											dn(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == 'function' && (e.onclick = oi);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return ue(t), null;
		case 6:
			if (e && t.stateNode != null) _c(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(_(166));
				if (((n = Bt(ar.current)), Bt(qe.current), Or(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Ge] = t),
						(l = r.nodeValue !== n) && ((e = Ee), e !== null))
					)
						switch (e.tag) {
							case 3:
								zr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									zr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					l && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[Ge] = t),
						(t.stateNode = r);
			}
			return ue(t), null;
		case 13:
			if (
				(W(Q),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if (U && ke !== null && t.mode & 1 && !(t.flags & 128))
					Fu(), wn(), (t.flags |= 98560), (l = !1);
				else if (((l = Or(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!l) throw Error(_(318));
						if (
							((l = t.memoizedState),
							(l = l !== null ? l.dehydrated : null),
							!l)
						)
							throw Error(_(317));
						l[Ge] = t;
					} else
						wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ue(t), (l = !1);
				} else Fe !== null && (us(Fe), (Fe = null)), (l = !0);
				if (!l) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
					r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Q.current & 1 ? ee === 0 && (ee = 3) : no())),
					t.updateQueue !== null && (t.flags |= 4),
					ue(t),
					null);
		case 4:
			return (
				Sn(), ts(e, t), e === null && ir(t.stateNode.containerInfo), ue(t), null
			);
		case 10:
			return Fs(t.type._context), ue(t), null;
		case 17:
			return xe(t.type) && ai(), ue(t), null;
		case 19:
			if ((W(Q), (l = t.memoizedState), l === null)) return ue(t), null;
			if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
				if (r) In(l, !1);
				else {
					if (ee !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = mi(e)), s !== null)) {
								for (
									t.flags |= 128,
										In(l, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(l = n),
										(e = r),
										(l.flags &= 14680066),
										(s = l.alternate),
										s === null
											? ((l.childLanes = 0),
												(l.lanes = e),
												(l.child = null),
												(l.subtreeFlags = 0),
												(l.memoizedProps = null),
												(l.memoizedState = null),
												(l.updateQueue = null),
												(l.dependencies = null),
												(l.stateNode = null))
											: ((l.childLanes = s.childLanes),
												(l.lanes = s.lanes),
												(l.child = s.child),
												(l.subtreeFlags = 0),
												(l.deletions = null),
												(l.memoizedProps = s.memoizedProps),
												(l.memoizedState = s.memoizedState),
												(l.updateQueue = s.updateQueue),
												(l.type = s.type),
												(e = s.dependencies),
												(l.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext
															})),
										(n = n.sibling);
								return V(Q, (Q.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					l.tail !== null &&
						K() > Cn &&
						((t.flags |= 128), (r = !0), In(l, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = mi(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							In(l, !0),
							l.tail === null && l.tailMode === 'hidden' && !s.alternate && !U)
						)
							return ue(t), null;
					} else
						2 * K() - l.renderingStartTime > Cn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), In(l, !1), (t.lanes = 4194304));
				l.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = l.last),
						n !== null ? (n.sibling = s) : (t.child = s),
						(l.last = s));
			}
			return l.tail !== null
				? ((t = l.tail),
					(l.rendering = t),
					(l.tail = t.sibling),
					(l.renderingStartTime = K()),
					(t.sibling = null),
					(n = Q.current),
					V(Q, r ? (n & 1) | 2 : n & 1),
					t)
				: (ue(t), null);
		case 22:
		case 23:
			return (
				to(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? _e & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ue(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(_(156, t.tag));
}
function up(e, t) {
	switch ((Ds(t), t.tag)) {
		case 1:
			return (
				xe(t.type) && ai(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Sn(),
				W(we),
				W(de),
				Us(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return Ws(t), null;
		case 13:
			if ((W(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(_(340));
				wn();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return W(Q), null;
		case 4:
			return Sn(), null;
		case 10:
			return Fs(t.type._context), null;
		case 22:
		case 23:
			return to(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Ar = !1,
	ce = !1,
	cp = typeof WeakSet == 'function' ? WeakSet : Set,
	j = null;
function un(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				X(e, t, r);
			}
		else n.current = null;
}
function ns(e, t, n) {
	try {
		n();
	} catch (r) {
		X(e, t, r);
	}
}
var aa = !1;
function dp(e, t) {
	if (((Fl = ii), (e = Tu()), Os(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						l = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, l.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						a = -1,
						o = -1,
						u = 0,
						d = 0,
						m = e,
						f = null;
					t: for (;;) {
						for (
							var g;
							m !== n || (i !== 0 && m.nodeType !== 3) || (a = s + i),
								m !== l || (r !== 0 && m.nodeType !== 3) || (o = s + r),
								m.nodeType === 3 && (s += m.nodeValue.length),
								(g = m.firstChild) !== null;

						)
							(f = m), (m = g);
						for (;;) {
							if (m === e) break t;
							if (
								(f === n && ++u === i && (a = s),
								f === l && ++d === r && (o = s),
								(g = m.nextSibling) !== null)
							)
								break;
							(m = f), (f = m.parentNode);
						}
						m = g;
					}
					n = a === -1 || o === -1 ? null : { start: a, end: o };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (Bl = { focusedElem: e, selectionRange: n }, ii = !1, j = t; j !== null; )
		if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (j = e);
		else
			for (; j !== null; ) {
				t = j;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var x = w.memoizedProps,
										k = w.memoizedState,
										p = t.stateNode,
										h = p.getSnapshotBeforeUpdate(
											t.elementType === t.type ? x : Re(t.type, x),
											k
										);
									p.__reactInternalSnapshotBeforeUpdate = h;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = '')
									: v.nodeType === 9 &&
										v.documentElement &&
										v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(_(163));
						}
				} catch (y) {
					X(t, t.return, y);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (j = e);
					break;
				}
				j = t.return;
			}
	return (w = aa), (aa = !1), w;
}
function Qn(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var l = i.destroy;
				(i.destroy = void 0), l !== void 0 && ns(t, n, l);
			}
			i = i.next;
		} while (i !== r);
	}
}
function zi(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function rs(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Cc(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Cc(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Ge], delete t[sr], delete t[Wl], delete t[qf], delete t[Yf])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function kc(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ua(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || kc(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function is(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
					(n = n._reactRootContainer),
					n != null || t.onclick !== null || (t.onclick = oi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
function ls(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
var le = null,
	$e = !1;
function ot(e, t, n) {
	for (n = n.child; n !== null; ) Ec(e, t, n), (n = n.sibling);
}
function Ec(e, t, n) {
	if (Qe && typeof Qe.onCommitFiberUnmount == 'function')
		try {
			Qe.onCommitFiberUnmount(ki, n);
		} catch {}
	switch (n.tag) {
		case 5:
			ce || un(n, t);
		case 6:
			var r = le,
				i = $e;
			(le = null),
				ot(e, t, n),
				(le = r),
				($e = i),
				le !== null &&
					($e
						? ((e = le),
							(n = n.stateNode),
							e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: le.removeChild(n.stateNode));
			break;
		case 18:
			le !== null &&
				($e
					? ((e = le),
						(n = n.stateNode),
						e.nodeType === 8
							? nl(e.parentNode, n)
							: e.nodeType === 1 && nl(e, n),
						tr(e))
					: nl(le, n.stateNode));
			break;
		case 4:
			(r = le),
				(i = $e),
				(le = n.stateNode.containerInfo),
				($e = !0),
				ot(e, t, n),
				(le = r),
				($e = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ce &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var l = i,
						s = l.destroy;
					(l = l.tag),
						s !== void 0 && (l & 2 || l & 4) && ns(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			ot(e, t, n);
			break;
		case 1:
			if (
				!ce &&
				(un(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					X(n, t, a);
				}
			ot(e, t, n);
			break;
		case 21:
			ot(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((ce = (r = ce) || n.memoizedState !== null), ot(e, t, n), (ce = r))
				: ot(e, t, n);
			break;
		default:
			ot(e, t, n);
	}
}
function ca(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new cp()),
			t.forEach(function (r) {
				var i = xp.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Ae(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var l = e,
					s = t,
					a = s;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(le = a.stateNode), ($e = !1);
							break e;
						case 3:
							(le = a.stateNode.containerInfo), ($e = !0);
							break e;
						case 4:
							(le = a.stateNode.containerInfo), ($e = !0);
							break e;
					}
					a = a.return;
				}
				if (le === null) throw Error(_(160));
				Ec(l, s, i), (le = null), ($e = !1);
				var o = i.alternate;
				o !== null && (o.return = null), (i.return = null);
			} catch (u) {
				X(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Tc(t, e), (t = t.sibling);
}
function Tc(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ae(t, e), We(e), r & 4)) {
				try {
					Qn(3, e, e.return), zi(3, e);
				} catch (x) {
					X(e, e.return, x);
				}
				try {
					Qn(5, e, e.return);
				} catch (x) {
					X(e, e.return, x);
				}
			}
			break;
		case 1:
			Ae(t, e), We(e), r & 512 && n !== null && un(n, n.return);
			break;
		case 5:
			if (
				(Ae(t, e),
				We(e),
				r & 512 && n !== null && un(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					Zn(i, '');
				} catch (x) {
					X(e, e.return, x);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var l = e.memoizedProps,
					s = n !== null ? n.memoizedProps : l,
					a = e.type,
					o = e.updateQueue;
				if (((e.updateQueue = null), o !== null))
					try {
						a === 'input' && l.type === 'radio' && l.name != null && qa(i, l),
							Ll(a, s);
						var u = Ll(a, l);
						for (s = 0; s < o.length; s += 2) {
							var d = o[s],
								m = o[s + 1];
							d === 'style'
								? ba(i, m)
								: d === 'dangerouslySetInnerHTML'
									? Ka(i, m)
									: d === 'children'
										? Zn(i, m)
										: xs(i, d, m, u);
						}
						switch (a) {
							case 'input':
								kl(i, l);
								break;
							case 'textarea':
								Ya(i, l);
								break;
							case 'select':
								var f = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!l.multiple;
								var g = l.value;
								g != null
									? dn(i, !!l.multiple, g, !1)
									: f !== !!l.multiple &&
										(l.defaultValue != null
											? dn(i, !!l.multiple, l.defaultValue, !0)
											: dn(i, !!l.multiple, l.multiple ? [] : '', !1));
						}
						i[sr] = l;
					} catch (x) {
						X(e, e.return, x);
					}
			}
			break;
		case 6:
			if ((Ae(t, e), We(e), r & 4)) {
				if (e.stateNode === null) throw Error(_(162));
				(i = e.stateNode), (l = e.memoizedProps);
				try {
					i.nodeValue = l;
				} catch (x) {
					X(e, e.return, x);
				}
			}
			break;
		case 3:
			if (
				(Ae(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					tr(t.containerInfo);
				} catch (x) {
					X(e, e.return, x);
				}
			break;
		case 4:
			Ae(t, e), We(e);
			break;
		case 13:
			Ae(t, e),
				We(e),
				(i = e.child),
				i.flags & 8192 &&
					((l = i.memoizedState !== null),
					(i.stateNode.isHidden = l),
					!l ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Js = K())),
				r & 4 && ca(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((ce = (u = ce) || d), Ae(t, e), (ce = u)) : Ae(t, e),
				We(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !d && e.mode & 1)
				)
					for (j = e, d = e.child; d !== null; ) {
						for (m = j = d; j !== null; ) {
							switch (((f = j), (g = f.child), f.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Qn(4, f, f.return);
									break;
								case 1:
									un(f, f.return);
									var w = f.stateNode;
									if (typeof w.componentWillUnmount == 'function') {
										(r = f), (n = f.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (x) {
											X(r, n, x);
										}
									}
									break;
								case 5:
									un(f, f.return);
									break;
								case 22:
									if (f.memoizedState !== null) {
										fa(m);
										continue;
									}
							}
							g !== null ? ((g.return = f), (j = g)) : fa(m);
						}
						d = d.sibling;
					}
				e: for (d = null, m = e; ; ) {
					if (m.tag === 5) {
						if (d === null) {
							d = m;
							try {
								(i = m.stateNode),
									u
										? ((l = i.style),
											typeof l.setProperty == 'function'
												? l.setProperty('display', 'none', 'important')
												: (l.display = 'none'))
										: ((a = m.stateNode),
											(o = m.memoizedProps.style),
											(s =
												o != null && o.hasOwnProperty('display')
													? o.display
													: null),
											(a.style.display = Za('display', s)));
							} catch (x) {
								X(e, e.return, x);
							}
						}
					} else if (m.tag === 6) {
						if (d === null)
							try {
								m.stateNode.nodeValue = u ? '' : m.memoizedProps;
							} catch (x) {
								X(e, e.return, x);
							}
					} else if (
						((m.tag !== 22 && m.tag !== 23) ||
							m.memoizedState === null ||
							m === e) &&
						m.child !== null
					) {
						(m.child.return = m), (m = m.child);
						continue;
					}
					if (m === e) break e;
					for (; m.sibling === null; ) {
						if (m.return === null || m.return === e) break e;
						d === m && (d = null), (m = m.return);
					}
					d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
				}
			}
			break;
		case 19:
			Ae(t, e), We(e), r & 4 && ca(e);
			break;
		case 21:
			break;
		default:
			Ae(t, e), We(e);
	}
}
function We(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (kc(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(_(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Zn(i, ''), (r.flags &= -33));
					var l = ua(e);
					ls(e, l, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						a = ua(e);
					is(e, a, s);
					break;
				default:
					throw Error(_(161));
			}
		} catch (o) {
			X(e, e.return, o);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function fp(e, t, n) {
	(j = e), Nc(e);
}
function Nc(e, t, n) {
	for (var r = (e.mode & 1) !== 0; j !== null; ) {
		var i = j,
			l = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Ar;
			if (!s) {
				var a = i.alternate,
					o = (a !== null && a.memoizedState !== null) || ce;
				a = Ar;
				var u = ce;
				if (((Ar = s), (ce = o) && !u))
					for (j = i; j !== null; )
						(s = j),
							(o = s.child),
							s.tag === 22 && s.memoizedState !== null
								? pa(i)
								: o !== null
									? ((o.return = s), (j = o))
									: pa(i);
				for (; l !== null; ) (j = l), Nc(l), (l = l.sibling);
				(j = i), (Ar = a), (ce = u);
			}
			da(e);
		} else
			i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (j = l)) : da(e);
	}
}
function da(e) {
	for (; j !== null; ) {
		var t = j;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ce || zi(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !ce)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: Re(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var l = t.updateQueue;
							l !== null && Yo(t, l, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Yo(t, s, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var o = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										o.autoFocus && n.focus();
										break;
									case 'img':
										o.src && (n.src = o.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var m = d.dehydrated;
										m !== null && tr(m);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(_(163));
					}
				ce || (t.flags & 512 && rs(t));
			} catch (f) {
				X(t, t.return, f);
			}
		}
		if (t === e) {
			j = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (j = n);
			break;
		}
		j = t.return;
	}
}
function fa(e) {
	for (; j !== null; ) {
		var t = j;
		if (t === e) {
			j = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (j = n);
			break;
		}
		j = t.return;
	}
}
function pa(e) {
	for (; j !== null; ) {
		var t = j;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						zi(4, t);
					} catch (o) {
						X(t, n, o);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (o) {
							X(t, i, o);
						}
					}
					var l = t.return;
					try {
						rs(t);
					} catch (o) {
						X(t, l, o);
					}
					break;
				case 5:
					var s = t.return;
					try {
						rs(t);
					} catch (o) {
						X(t, s, o);
					}
			}
		} catch (o) {
			X(t, t.return, o);
		}
		if (t === e) {
			j = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (j = a);
			break;
		}
		j = t.return;
	}
}
var pp = Math.ceil,
	yi = st.ReactCurrentDispatcher,
	Zs = st.ReactCurrentOwner,
	Oe = st.ReactCurrentBatchConfig,
	R = 0,
	re = null,
	b = null,
	se = 0,
	_e = 0,
	cn = jt(0),
	ee = 0,
	fr = null,
	Qt = 0,
	Oi = 0,
	bs = 0,
	qn = null,
	ge = null,
	Js = 0,
	Cn = 1 / 0,
	Ze = null,
	wi = !1,
	ss = null,
	St = null,
	Rr = !1,
	pt = null,
	xi = 0,
	Yn = 0,
	os = null,
	Kr = -1,
	Zr = 0;
function he() {
	return R & 6 ? K() : Kr !== -1 ? Kr : (Kr = K());
}
function _t(e) {
	return e.mode & 1
		? R & 2 && se !== 0
			? se & -se
			: Kf.transition !== null
				? (Zr === 0 && (Zr = cu()), Zr)
				: ((e = $),
					e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gu(e.type))),
					e)
		: 1;
}
function Ve(e, t, n, r) {
	if (50 < Yn) throw ((Yn = 0), (os = null), Error(_(185)));
	mr(e, n, r),
		(!(R & 2) || e !== re) &&
			(e === re && (!(R & 2) && (Oi |= n), ee === 4 && dt(e, se)),
			Se(e, r),
			n === 1 && R === 0 && !(t.mode & 1) && ((Cn = K() + 500), Li && Lt()));
}
function Se(e, t) {
	var n = e.callbackNode;
	Xd(e, t);
	var r = ri(e, e === re ? se : 0);
	if (r === 0)
		n !== null && _o(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && _o(n), t === 1))
			e.tag === 0 ? Xf(ha.bind(null, e)) : Au(ha.bind(null, e)),
				Gf(function () {
					!(R & 6) && Lt();
				}),
				(n = null);
		else {
			switch (du(r)) {
				case 1:
					n = Es;
					break;
				case 4:
					n = au;
					break;
				case 16:
					n = ni;
					break;
				case 536870912:
					n = uu;
					break;
				default:
					n = ni;
			}
			n = Dc(n, jc.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function jc(e, t) {
	if (((Kr = -1), (Zr = 0), R & 6)) throw Error(_(327));
	var n = e.callbackNode;
	if (vn() && e.callbackNode !== n) return null;
	var r = ri(e, e === re ? se : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Si(e, r);
	else {
		t = r;
		var i = R;
		R |= 2;
		var l = Pc();
		(re !== e || se !== t) && ((Ze = null), (Cn = K() + 500), Vt(e, t));
		do
			try {
				vp();
				break;
			} catch (a) {
				Lc(e, a);
			}
		while (!0);
		$s(),
			(yi.current = l),
			(R = i),
			b !== null ? (t = 0) : ((re = null), (se = 0), (t = ee));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Il(e)), i !== 0 && ((r = i), (t = as(e, i)))), t === 1)
		)
			throw ((n = fr), Vt(e, 0), dt(e, r), Se(e, K()), n);
		if (t === 6) dt(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!hp(i) &&
					((t = Si(e, r)),
					t === 2 && ((l = Il(e)), l !== 0 && ((r = l), (t = as(e, l)))),
					t === 1))
			)
				throw ((n = fr), Vt(e, 0), dt(e, r), Se(e, K()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(_(345));
				case 2:
					At(e, ge, Ze);
					break;
				case 3:
					if (
						(dt(e, r), (r & 130023424) === r && ((t = Js + 500 - K()), 10 < t))
					) {
						if (ri(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							he(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = Hl(At.bind(null, e, ge, Ze), t);
						break;
					}
					At(e, ge, Ze);
					break;
				case 4:
					if ((dt(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Be(r);
						(l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
					}
					if (
						((r = i),
						(r = K() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
									? 480
									: 1080 > r
										? 1080
										: 1920 > r
											? 1920
											: 3e3 > r
												? 3e3
												: 4320 > r
													? 4320
													: 1960 * pp(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = Hl(At.bind(null, e, ge, Ze), r);
						break;
					}
					At(e, ge, Ze);
					break;
				case 5:
					At(e, ge, Ze);
					break;
				default:
					throw Error(_(329));
			}
		}
	}
	return Se(e, K()), e.callbackNode === n ? jc.bind(null, e) : null;
}
function as(e, t) {
	var n = qn;
	return (
		e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
		(e = Si(e, t)),
		e !== 2 && ((t = ge), (ge = n), t !== null && us(t)),
		e
	);
}
function us(e) {
	ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function hp(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						l = i.getSnapshot;
					i = i.value;
					try {
						if (!He(l(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function dt(e, t) {
	for (
		t &= ~bs,
			t &= ~Oi,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Be(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function ha(e) {
	if (R & 6) throw Error(_(327));
	vn();
	var t = ri(e, 0);
	if (!(t & 1)) return Se(e, K()), null;
	var n = Si(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Il(e);
		r !== 0 && ((t = r), (n = as(e, r)));
	}
	if (n === 1) throw ((n = fr), Vt(e, 0), dt(e, t), Se(e, K()), n);
	if (n === 6) throw Error(_(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		At(e, ge, Ze),
		Se(e, K()),
		null
	);
}
function eo(e, t) {
	var n = R;
	R |= 1;
	try {
		return e(t);
	} finally {
		(R = n), R === 0 && ((Cn = K() + 500), Li && Lt());
	}
}
function qt(e) {
	pt !== null && pt.tag === 0 && !(R & 6) && vn();
	var t = R;
	R |= 1;
	var n = Oe.transition,
		r = $;
	try {
		if (((Oe.transition = null), ($ = 1), e)) return e();
	} finally {
		($ = r), (Oe.transition = n), (R = t), !(R & 6) && Lt();
	}
}
function to() {
	(_e = cn.current), W(cn);
}
function Vt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Uf(n)), b !== null))
		for (n = b.return; n !== null; ) {
			var r = n;
			switch ((Ds(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && ai();
					break;
				case 3:
					Sn(), W(we), W(de), Us();
					break;
				case 5:
					Ws(r);
					break;
				case 4:
					Sn();
					break;
				case 13:
					W(Q);
					break;
				case 19:
					W(Q);
					break;
				case 10:
					Fs(r.type._context);
					break;
				case 22:
				case 23:
					to();
			}
			n = n.return;
		}
	if (
		((re = e),
		(b = e = Ct(e.current, null)),
		(se = _e = t),
		(ee = 0),
		(fr = null),
		(bs = Oi = Qt = 0),
		(ge = qn = null),
		Ft !== null)
	) {
		for (t = 0; t < Ft.length; t++)
			if (((n = Ft[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					l = n.pending;
				if (l !== null) {
					var s = l.next;
					(l.next = i), (r.next = s);
				}
				n.pending = r;
			}
		Ft = null;
	}
	return e;
}
function Lc(e, t) {
	do {
		var n = b;
		try {
			if (($s(), (qr.current = gi), vi)) {
				for (var r = q.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				vi = !1;
			}
			if (
				((Gt = 0),
				(ne = J = q = null),
				(Gn = !1),
				(ur = 0),
				(Zs.current = null),
				n === null || n.return === null)
			) {
				(ee = 1), (fr = t), (b = null);
				break;
			}
			e: {
				var l = e,
					s = n.return,
					a = n,
					o = t;
				if (
					((t = se),
					(a.flags |= 32768),
					o !== null && typeof o == 'object' && typeof o.then == 'function')
				) {
					var u = o,
						d = a,
						m = d.tag;
					if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
						var f = d.alternate;
						f
							? ((d.updateQueue = f.updateQueue),
								(d.memoizedState = f.memoizedState),
								(d.lanes = f.lanes))
							: ((d.updateQueue = null), (d.memoizedState = null));
					}
					var g = ta(s);
					if (g !== null) {
						(g.flags &= -257),
							na(g, s, a, l, t),
							g.mode & 1 && ea(l, u, t),
							(t = g),
							(o = u);
						var w = t.updateQueue;
						if (w === null) {
							var x = new Set();
							x.add(o), (t.updateQueue = x);
						} else w.add(o);
						break e;
					} else {
						if (!(t & 1)) {
							ea(l, u, t), no();
							break e;
						}
						o = Error(_(426));
					}
				} else if (U && a.mode & 1) {
					var k = ta(s);
					if (k !== null) {
						!(k.flags & 65536) && (k.flags |= 256),
							na(k, s, a, l, t),
							As(_n(o, a));
						break e;
					}
				}
				(l = o = _n(o, a)),
					ee !== 4 && (ee = 2),
					qn === null ? (qn = [l]) : qn.push(l),
					(l = s);
				do {
					switch (l.tag) {
						case 3:
							(l.flags |= 65536), (t &= -t), (l.lanes |= t);
							var p = fc(l, o, t);
							qo(l, p);
							break e;
						case 1:
							a = o;
							var h = l.type,
								v = l.stateNode;
							if (
								!(l.flags & 128) &&
								(typeof h.getDerivedStateFromError == 'function' ||
									(v !== null &&
										typeof v.componentDidCatch == 'function' &&
										(St === null || !St.has(v))))
							) {
								(l.flags |= 65536), (t &= -t), (l.lanes |= t);
								var y = pc(l, a, t);
								qo(l, y);
								break e;
							}
					}
					l = l.return;
				} while (l !== null);
			}
			zc(n);
		} catch (S) {
			(t = S), b === n && n !== null && (b = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function Pc() {
	var e = yi.current;
	return (yi.current = gi), e === null ? gi : e;
}
function no() {
	(ee === 0 || ee === 3 || ee === 2) && (ee = 4),
		re === null || (!(Qt & 268435455) && !(Oi & 268435455)) || dt(re, se);
}
function Si(e, t) {
	var n = R;
	R |= 2;
	var r = Pc();
	(re !== e || se !== t) && ((Ze = null), Vt(e, t));
	do
		try {
			mp();
			break;
		} catch (i) {
			Lc(e, i);
		}
	while (!0);
	if (($s(), (R = n), (yi.current = r), b !== null)) throw Error(_(261));
	return (re = null), (se = 0), ee;
}
function mp() {
	for (; b !== null; ) Mc(b);
}
function vp() {
	for (; b !== null && !Bd(); ) Mc(b);
}
function Mc(e) {
	var t = Ic(e.alternate, e, _e);
	(e.memoizedProps = e.pendingProps),
		t === null ? zc(e) : (b = t),
		(Zs.current = null);
}
function zc(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = up(n, t)), n !== null)) {
				(n.flags &= 32767), (b = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ee = 6), (b = null);
				return;
			}
		} else if (((n = ap(n, t, _e)), n !== null)) {
			b = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			b = t;
			return;
		}
		b = t = e;
	} while (t !== null);
	ee === 0 && (ee = 5);
}
function At(e, t, n) {
	var r = $,
		i = Oe.transition;
	try {
		(Oe.transition = null), ($ = 1), gp(e, t, n, r);
	} finally {
		(Oe.transition = i), ($ = r);
	}
	return null;
}
function gp(e, t, n, r) {
	do vn();
	while (pt !== null);
	if (R & 6) throw Error(_(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(_(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var l = n.lanes | n.childLanes;
	if (
		(Kd(e, l),
		e === re && ((b = re = null), (se = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Rr ||
			((Rr = !0),
			Dc(ni, function () {
				return vn(), null;
			})),
		(l = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || l)
	) {
		(l = Oe.transition), (Oe.transition = null);
		var s = $;
		$ = 1;
		var a = R;
		(R |= 4),
			(Zs.current = null),
			dp(e, n),
			Tc(n, e),
			Rf(Bl),
			(ii = !!Fl),
			(Bl = Fl = null),
			(e.current = n),
			fp(n),
			Vd(),
			(R = a),
			($ = s),
			(Oe.transition = l);
	} else e.current = n;
	if (
		(Rr && ((Rr = !1), (pt = e), (xi = i)),
		(l = e.pendingLanes),
		l === 0 && (St = null),
		Ud(n.stateNode),
		Se(e, K()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (wi) throw ((wi = !1), (e = ss), (ss = null), e);
	return (
		xi & 1 && e.tag !== 0 && vn(),
		(l = e.pendingLanes),
		l & 1 ? (e === os ? Yn++ : ((Yn = 0), (os = e))) : (Yn = 0),
		Lt(),
		null
	);
}
function vn() {
	if (pt !== null) {
		var e = du(xi),
			t = Oe.transition,
			n = $;
		try {
			if (((Oe.transition = null), ($ = 16 > e ? 16 : e), pt === null))
				var r = !1;
			else {
				if (((e = pt), (pt = null), (xi = 0), R & 6)) throw Error(_(331));
				var i = R;
				for (R |= 4, j = e.current; j !== null; ) {
					var l = j,
						s = l.child;
					if (j.flags & 16) {
						var a = l.deletions;
						if (a !== null) {
							for (var o = 0; o < a.length; o++) {
								var u = a[o];
								for (j = u; j !== null; ) {
									var d = j;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											Qn(8, d, l);
									}
									var m = d.child;
									if (m !== null) (m.return = d), (j = m);
									else
										for (; j !== null; ) {
											d = j;
											var f = d.sibling,
												g = d.return;
											if ((Cc(d), d === u)) {
												j = null;
												break;
											}
											if (f !== null) {
												(f.return = g), (j = f);
												break;
											}
											j = g;
										}
								}
							}
							var w = l.alternate;
							if (w !== null) {
								var x = w.child;
								if (x !== null) {
									w.child = null;
									do {
										var k = x.sibling;
										(x.sibling = null), (x = k);
									} while (x !== null);
								}
							}
							j = l;
						}
					}
					if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (j = s);
					else
						e: for (; j !== null; ) {
							if (((l = j), l.flags & 2048))
								switch (l.tag) {
									case 0:
									case 11:
									case 15:
										Qn(9, l, l.return);
								}
							var p = l.sibling;
							if (p !== null) {
								(p.return = l.return), (j = p);
								break e;
							}
							j = l.return;
						}
				}
				var h = e.current;
				for (j = h; j !== null; ) {
					s = j;
					var v = s.child;
					if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (j = v);
					else
						e: for (s = h; j !== null; ) {
							if (((a = j), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											zi(9, a);
									}
								} catch (S) {
									X(a, a.return, S);
								}
							if (a === s) {
								j = null;
								break e;
							}
							var y = a.sibling;
							if (y !== null) {
								(y.return = a.return), (j = y);
								break e;
							}
							j = a.return;
						}
				}
				if (
					((R = i), Lt(), Qe && typeof Qe.onPostCommitFiberRoot == 'function')
				)
					try {
						Qe.onPostCommitFiberRoot(ki, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			($ = n), (Oe.transition = t);
		}
	}
	return !1;
}
function ma(e, t, n) {
	(t = _n(n, t)),
		(t = fc(e, t, 1)),
		(e = xt(e, t, 1)),
		(t = he()),
		e !== null && (mr(e, 1, t), Se(e, t));
}
function X(e, t, n) {
	if (e.tag === 3) ma(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				ma(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(St === null || !St.has(r)))
				) {
					(e = _n(n, e)),
						(e = pc(t, e, 1)),
						(t = xt(t, e, 1)),
						(e = he()),
						t !== null && (mr(t, 1, e), Se(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function yp(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = he()),
		(e.pingedLanes |= e.suspendedLanes & n),
		re === e &&
			(se & n) === n &&
			(ee === 4 || (ee === 3 && (se & 130023424) === se && 500 > K() - Js)
				? Vt(e, 0)
				: (bs |= n)),
		Se(e, t);
}
function Oc(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
			: (t = 1));
	var n = he();
	(e = it(e, t)), e !== null && (mr(e, t, n), Se(e, n));
}
function wp(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Oc(e, n);
}
function xp(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(_(314));
	}
	r !== null && r.delete(t), Oc(e, n);
}
var Ic;
Ic = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), op(e, t, n);
			ye = !!(e.flags & 131072);
		}
	else (ye = !1), U && t.flags & 1048576 && Ru(t, di, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Xr(e, t), (e = t.pendingProps);
			var i = yn(t, de.current);
			mn(t, n), (i = Qs(null, t, r, e, i, n));
			var l = qs();
			return (
				(t.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((t.tag = 1),
						(t.memoizedState = null),
						(t.updateQueue = null),
						xe(r) ? ((l = !0), ui(t)) : (l = !1),
						(t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
						Vs(t),
						(i.updater = Pi),
						(t.stateNode = i),
						(i._reactInternals = t),
						Xl(t, r, e, n),
						(t = bl(null, t, r, !0, l, n)))
					: ((t.tag = 0), U && l && Is(t), fe(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Xr(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = _p(r)),
					(e = Re(r, e)),
					i)
				) {
					case 0:
						t = Zl(null, t, r, e, n);
						break e;
					case 1:
						t = la(null, t, r, e, n);
						break e;
					case 11:
						t = ra(null, t, r, e, n);
						break e;
					case 14:
						t = ia(null, t, r, Re(r.type, e), n);
						break e;
				}
				throw Error(_(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Re(r, i)),
				Zl(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Re(r, i)),
				la(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((gc(t), e === null)) throw Error(_(387));
				(r = t.pendingProps),
					(l = t.memoizedState),
					(i = l.element),
					Vu(e, t),
					hi(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), l.isDehydrated))
					if (
						((l = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions
						}),
						(t.updateQueue.baseState = l),
						(t.memoizedState = l),
						t.flags & 256)
					) {
						(i = _n(Error(_(423)), t)), (t = sa(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = _n(Error(_(424)), t)), (t = sa(e, t, r, n, i));
						break e;
					} else
						for (
							ke = wt(t.stateNode.containerInfo.firstChild),
								Ee = t,
								U = !0,
								Fe = null,
								n = Gu(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((wn(), r === i)) {
						t = lt(e, t, n);
						break e;
					}
					fe(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				Qu(t),
				e === null && Ql(t),
				(r = t.type),
				(i = t.pendingProps),
				(l = e !== null ? e.memoizedProps : null),
				(s = i.children),
				Vl(r, i) ? (s = null) : l !== null && Vl(r, l) && (t.flags |= 32),
				vc(e, t),
				fe(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && Ql(t), null;
		case 13:
			return yc(e, t, n);
		case 4:
			return (
				Hs(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = xn(t, null, r, n)) : fe(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Re(r, i)),
				ra(e, t, r, i, n)
			);
		case 7:
			return fe(e, t, t.pendingProps, n), t.child;
		case 8:
			return fe(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return fe(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(l = t.memoizedProps),
					(s = i.value),
					V(fi, r._currentValue),
					(r._currentValue = s),
					l !== null)
				)
					if (He(l.value, s)) {
						if (l.children === i.children && !we.current) {
							t = lt(e, t, n);
							break e;
						}
					} else
						for (l = t.child, l !== null && (l.return = t); l !== null; ) {
							var a = l.dependencies;
							if (a !== null) {
								s = l.child;
								for (var o = a.firstContext; o !== null; ) {
									if (o.context === r) {
										if (l.tag === 1) {
											(o = tt(-1, n & -n)), (o.tag = 2);
											var u = l.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null
													? (o.next = o)
													: ((o.next = d.next), (d.next = o)),
													(u.pending = o);
											}
										}
										(l.lanes |= n),
											(o = l.alternate),
											o !== null && (o.lanes |= n),
											ql(l.return, n, t),
											(a.lanes |= n);
										break;
									}
									o = o.next;
								}
							} else if (l.tag === 10) s = l.type === t.type ? null : l.child;
							else if (l.tag === 18) {
								if (((s = l.return), s === null)) throw Error(_(341));
								(s.lanes |= n),
									(a = s.alternate),
									a !== null && (a.lanes |= n),
									ql(s, n, t),
									(s = l.sibling);
							} else s = l.child;
							if (s !== null) s.return = l;
							else
								for (s = l; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((l = s.sibling), l !== null)) {
										(l.return = s.return), (s = l);
										break;
									}
									s = s.return;
								}
							l = s;
						}
				fe(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				mn(t, n),
				(i = Ie(i)),
				(r = r(i)),
				(t.flags |= 1),
				fe(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = Re(r, t.pendingProps)),
				(i = Re(r.type, i)),
				ia(e, t, r, i, n)
			);
		case 15:
			return hc(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : Re(r, i)),
				Xr(e, t),
				(t.tag = 1),
				xe(r) ? ((e = !0), ui(t)) : (e = !1),
				mn(t, n),
				Wu(t, r, i),
				Xl(t, r, i, n),
				bl(null, t, r, !0, e, n)
			);
		case 19:
			return wc(e, t, n);
		case 22:
			return mc(e, t, n);
	}
	throw Error(_(156, t.tag));
};
function Dc(e, t) {
	return ou(e, t);
}
function Sp(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function ze(e, t, n, r) {
	return new Sp(e, t, n, r);
}
function ro(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _p(e) {
	if (typeof e == 'function') return ro(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === _s)) return 11;
		if (e === Cs) return 14;
	}
	return 2;
}
function Ct(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = ze(e.tag, t, e.key, e.mode)),
				(n.elementType = e.elementType),
				(n.type = e.type),
				(n.stateNode = e.stateNode),
				(n.alternate = e),
				(e.alternate = n))
			: ((n.pendingProps = t),
				(n.type = e.type),
				(n.flags = 0),
				(n.subtreeFlags = 0),
				(n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function br(e, t, n, r, i, l) {
	var s = 2;
	if (((r = e), typeof e == 'function')) ro(e) && (s = 1);
	else if (typeof e == 'string') s = 5;
	else
		e: switch (e) {
			case Jt:
				return Ht(n.children, i, l, t);
			case Ss:
				(s = 8), (i |= 8);
				break;
			case wl:
				return (
					(e = ze(12, n, t, i | 2)), (e.elementType = wl), (e.lanes = l), e
				);
			case xl:
				return (e = ze(13, n, t, i)), (e.elementType = xl), (e.lanes = l), e;
			case Sl:
				return (e = ze(19, n, t, i)), (e.elementType = Sl), (e.lanes = l), e;
			case Ua:
				return Ii(n, i, l, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case Ha:
							s = 10;
							break e;
						case Wa:
							s = 9;
							break e;
						case _s:
							s = 11;
							break e;
						case Cs:
							s = 14;
							break e;
						case at:
							(s = 16), (r = null);
							break e;
					}
				throw Error(_(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = ze(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
	);
}
function Ht(e, t, n, r) {
	return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Ii(e, t, n, r) {
	return (
		(e = ze(22, e, r, t)),
		(e.elementType = Ua),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function cl(e, t, n) {
	return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function dl(e, t, n) {
	return (
		(t = ze(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}),
		t
	);
}
function Cp(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Gi(0)),
		(this.expirationTimes = Gi(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Gi(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function io(e, t, n, r, i, l, s, a, o) {
	return (
		(e = new Cp(e, t, n, a, o)),
		t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
		(l = ze(3, null, null, t)),
		(e.current = l),
		(l.stateNode = e),
		(l.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		}),
		Vs(l),
		e
	);
}
function kp(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: bt,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n
	};
}
function Ac(e) {
	if (!e) return Tt;
	e = e._reactInternals;
	e: {
		if (Kt(e) !== e || e.tag !== 1) throw Error(_(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (xe(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(_(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (xe(n)) return Du(e, n, t);
	}
	return t;
}
function Rc(e, t, n, r, i, l, s, a, o) {
	return (
		(e = io(n, r, !0, e, i, l, s, a, o)),
		(e.context = Ac(null)),
		(n = e.current),
		(r = he()),
		(i = _t(n)),
		(l = tt(r, i)),
		(l.callback = t ?? null),
		xt(n, l, i),
		(e.current.lanes = i),
		mr(e, i, r),
		Se(e, r),
		e
	);
}
function Di(e, t, n, r) {
	var i = t.current,
		l = he(),
		s = _t(i);
	return (
		(n = Ac(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = tt(l, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = xt(i, t, s)),
		e !== null && (Ve(e, i, s, l), Qr(e, i, s)),
		s
	);
}
function _i(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function va(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function lo(e, t) {
	va(e, t), (e = e.alternate) && va(e, t);
}
function Ep() {
	return null;
}
var $c =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
			};
function so(e) {
	this._internalRoot = e;
}
Ai.prototype.render = so.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(_(409));
	Di(e, t, null, null);
};
Ai.prototype.unmount = so.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		qt(function () {
			Di(null, e, null, null);
		}),
			(t[rt] = null);
	}
};
function Ai(e) {
	this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = hu();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
		ct.splice(n, 0, e), n === 0 && vu(e);
	}
};
function oo(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ri(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function ga() {}
function Tp(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var l = r;
			r = function () {
				var u = _i(s);
				l.call(u);
			};
		}
		var s = Rc(t, r, e, 0, null, !1, !1, '', ga);
		return (
			(e._reactRootContainer = s),
			(e[rt] = s.current),
			ir(e.nodeType === 8 ? e.parentNode : e),
			qt(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == 'function') {
		var a = r;
		r = function () {
			var u = _i(o);
			a.call(u);
		};
	}
	var o = io(e, 0, !1, null, null, !1, !1, '', ga);
	return (
		(e._reactRootContainer = o),
		(e[rt] = o.current),
		ir(e.nodeType === 8 ? e.parentNode : e),
		qt(function () {
			Di(t, o, n, r);
		}),
		o
	);
}
function $i(e, t, n, r, i) {
	var l = n._reactRootContainer;
	if (l) {
		var s = l;
		if (typeof i == 'function') {
			var a = i;
			i = function () {
				var o = _i(s);
				a.call(o);
			};
		}
		Di(t, s, e, i);
	} else s = Tp(n, t, e, i, r);
	return _i(s);
}
fu = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = $n(t.pendingLanes);
				n !== 0 &&
					(Ts(t, n | 1), Se(t, K()), !(R & 6) && ((Cn = K() + 500), Lt()));
			}
			break;
		case 13:
			qt(function () {
				var r = it(e, 1);
				if (r !== null) {
					var i = he();
					Ve(r, e, 1, i);
				}
			}),
				lo(e, 1);
	}
};
Ns = function (e) {
	if (e.tag === 13) {
		var t = it(e, 134217728);
		if (t !== null) {
			var n = he();
			Ve(t, e, 134217728, n);
		}
		lo(e, 134217728);
	}
};
pu = function (e) {
	if (e.tag === 13) {
		var t = _t(e),
			n = it(e, t);
		if (n !== null) {
			var r = he();
			Ve(n, e, t, r);
		}
		lo(e, t);
	}
};
hu = function () {
	return $;
};
mu = function (e, t) {
	var n = $;
	try {
		return ($ = e), t();
	} finally {
		$ = n;
	}
};
Ml = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((kl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = ji(r);
						if (!i) throw Error(_(90));
						Qa(r), kl(r, i);
					}
				}
			}
			break;
		case 'textarea':
			Ya(e, n);
			break;
		case 'select':
			(t = n.value), t != null && dn(e, !!n.multiple, t, !1);
	}
};
tu = eo;
nu = qt;
var Np = { usingClientEntryPoint: !1, Events: [gr, rn, ji, Ja, eu, eo] },
	Dn = {
		findFiberByHostInstance: $t,
		bundleType: 0,
		version: '18.2.0',
		rendererPackageName: 'react-dom'
	},
	jp = {
		bundleType: Dn.bundleType,
		version: Dn.version,
		rendererPackageName: Dn.rendererPackageName,
		rendererConfig: Dn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: st.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = lu(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Dn.findFiberByHostInstance || Ep,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var $r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!$r.isDisabled && $r.supportsFiber)
		try {
			(ki = $r.inject(jp)), (Qe = $r);
		} catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
Ne.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!oo(t)) throw Error(_(200));
	return kp(e, t, null, n);
};
Ne.createRoot = function (e, t) {
	if (!oo(e)) throw Error(_(299));
	var n = !1,
		r = '',
		i = $c;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = io(e, 1, !1, null, null, n, !1, r, i)),
		(e[rt] = t.current),
		ir(e.nodeType === 8 ? e.parentNode : e),
		new so(t)
	);
};
Ne.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(_(188))
			: ((e = Object.keys(e).join(',')), Error(_(268, e)));
	return (e = lu(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
	return qt(e);
};
Ne.hydrate = function (e, t, n) {
	if (!Ri(t)) throw Error(_(200));
	return $i(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
	if (!oo(e)) throw Error(_(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		l = '',
		s = $c;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = Rc(t, null, e, 1, n ?? null, i, !1, l, s)),
		(e[rt] = t.current),
		ir(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new Ai(t);
};
Ne.render = function (e, t, n) {
	if (!Ri(t)) throw Error(_(200));
	return $i(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
	if (!Ri(e)) throw Error(_(40));
	return e._reactRootContainer
		? (qt(function () {
				$i(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[rt] = null);
				});
			}),
			!0)
		: !1;
};
Ne.unstable_batchedUpdates = eo;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Ri(n)) throw Error(_(200));
	if (e == null || e._reactInternals === void 0) throw Error(_(38));
	return $i(e, t, n, !1, r);
};
Ne.version = '18.2.0-next-9e3b772b8-20220608';
function Fc() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc);
		} catch (e) {
			console.error(e);
		}
}
Fc(), (Ra.exports = Ne);
var Bc = Ra.exports,
	ya = Bc;
(gl.createRoot = ya.createRoot), (gl.hydrateRoot = ya.hydrateRoot);
const Lp = '/assets/about-WyZ9yR-i.jpg',
	Pp = '/assets/Juan-Manuel-Garcia-cv.pdf',
	Mp = () =>
		c.jsxs('section', {
			className: 'about section',
			id: 'about',
			children: [
				c.jsx('h2', { className: 'section__title', children: 'Sobre mí' }),
				c.jsx('span', {
					className: 'section__subtitle',
					children: 'Mí introducción'
				}),
				c.jsxs('div', {
					className: 'about__container container grid',
					children: [
						c.jsx('img', { src: Lp, alt: '', className: 'about__img' }),
						c.jsxs('div', {
							className: 'about__data',
							children: [
								c.jsx('p', {
									className: 'about__description',
									children:
										'Me considero autodidacta, me encanta aprender y probar cosas nuevas. tecnologías. Actualmente aprendiendo Next.js.'
								}),
								c.jsxs('a', {
									download: '',
									href: Pp,
									className: 'button button--flex',
									children: [
										'Descargar CV',
										c.jsxs('svg', {
											className: 'button__icon',
											xmlns: 'http://www.w3.org/2000/svg',
											width: '24',
											height: '24',
											viewBox: '0 0 24 24',
											fill: 'none',
											children: [
												c.jsx('path', {
													d: 'M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z',
													fill: 'var(--container-color)'
												}),
												c.jsx('path', {
													d: 'M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z',
													fill: 'var(--container-color)'
												}),
												c.jsx('path', {
													d: 'M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z',
													fill: 'var(--container-color)'
												}),
												c.jsx('path', {
													d: 'M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z',
													fill: 'var(--container-color)'
												})
											]
										})
									]
								})
							]
						})
					]
				})
			]
		});
var Vc = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	wa = B.createContext && B.createContext(Vc),
	kt = function () {
		return (
			(kt =
				Object.assign ||
				function (e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) {
						t = arguments[n];
						for (var i in t)
							Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					}
					return e;
				}),
			kt.apply(this, arguments)
		);
	},
	zp = function (e, t) {
		var n = {};
		for (var r in e)
			Object.prototype.hasOwnProperty.call(e, r) &&
				t.indexOf(r) < 0 &&
				(n[r] = e[r]);
		if (e != null && typeof Object.getOwnPropertySymbols == 'function')
			for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
				t.indexOf(r[i]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
					(n[r[i]] = e[r[i]]);
		return n;
	};
function Hc(e) {
	return (
		e &&
		e.map(function (t, n) {
			return B.createElement(t.tag, kt({ key: n }, t.attr), Hc(t.child));
		})
	);
}
function Ye(e) {
	return function (t) {
		return B.createElement(Op, kt({ attr: kt({}, e.attr) }, t), Hc(e.child));
	};
}
function Op(e) {
	var t = function (n) {
		var r = e.attr,
			i = e.size,
			l = e.title,
			s = zp(e, ['attr', 'size', 'title']),
			a = i || n.size || '1em',
			o;
		return (
			n.className && (o = n.className),
			e.className && (o = (o ? o + ' ' : '') + e.className),
			B.createElement(
				'svg',
				kt(
					{ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
					n.attr,
					r,
					s,
					{
						className: o,
						style: kt(kt({ color: e.color || n.color }, n.style), e.style),
						height: a,
						width: a,
						xmlns: 'http://www.w3.org/2000/svg'
					}
				),
				l && B.createElement('title', null, l),
				e.children
			)
		);
	};
	return wa !== void 0
		? B.createElement(wa.Consumer, null, function (n) {
				return t(n);
			})
		: t(Vc);
}
function Ip(e) {
	return Ye({
		tag: 'svg',
		attr: {
			fill: 'none',
			viewBox: '0 0 24 24',
			strokeWidth: '2',
			stroke: 'currentColor',
			'aria-hidden': 'true'
		},
		child: [
			{ tag: 'path', attr: { d: 'M12 14l9-5-9-5-9 5 9 5z' } },
			{
				tag: 'path',
				attr: {
					d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
				}
			},
			{
				tag: 'path',
				attr: {
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					d: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
				}
			}
		]
	})(e);
}
function cs(e) {
	return Ye({
		tag: 'svg',
		attr: {
			fill: 'none',
			viewBox: '0 0 24 24',
			strokeWidth: '2',
			stroke: 'currentColor',
			'aria-hidden': 'true'
		},
		child: [
			{
				tag: 'path',
				attr: {
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					d: 'M13 7l5 5m0 0l-5 5m5-5H6'
				}
			}
		]
	})(e);
}
function Dp(e) {
	return Ye({
		tag: 'svg',
		attr: {
			fill: 'none',
			viewBox: '0 0 24 24',
			strokeWidth: '2',
			stroke: 'currentColor',
			'aria-hidden': 'true'
		},
		child: [
			{
				tag: 'path',
				attr: {
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					d: 'M7 11l5-5m0 0l5 5m-5-5v12'
				}
			}
		]
	})(e);
}
function Ap(e) {
	return Ye({
		tag: 'svg',
		attr: {
			fill: 'none',
			viewBox: '0 0 24 24',
			strokeWidth: '2',
			stroke: 'currentColor',
			'aria-hidden': 'true'
		},
		child: [
			{
				tag: 'path',
				attr: {
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
				}
			}
		]
	})(e);
}
function Rt(e) {
	return Ye({
		tag: 'svg',
		attr: {
			fill: 'none',
			viewBox: '0 0 24 24',
			strokeWidth: '2',
			stroke: 'currentColor',
			'aria-hidden': 'true'
		},
		child: [
			{
				tag: 'path',
				attr: {
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
				}
			}
		]
	})(e);
}
function Rp(e) {
	return Ye({
		tag: 'svg',
		attr: {
			fill: 'none',
			viewBox: '0 0 24 24',
			strokeWidth: '2',
			stroke: 'currentColor',
			'aria-hidden': 'true'
		},
		child: [
			{
				tag: 'path',
				attr: {
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
				}
			}
		]
	})(e);
}
const $p = () => {
	const e = D.useRef();
	return c.jsxs('section', {
		className: 'contact section',
		id: 'contact',
		children: [
			c.jsx('h2', { className: 'section__title', children: 'Hablemos' }),
			c.jsx('span', { className: 'section__subtitle', children: 'Contáctame' }),
			c.jsxs('div', {
				className: 'contact__container container grid',
				children: [
					c.jsxs('div', {
						className: 'contact__content',
						children: [
							c.jsx('div', {
								className: 'contact__info',
								children: c.jsxs('div', {
									className: 'contact__card',
									children: [
										c.jsx(Rp, { className: 'contact__card-icon' }),
										c.jsx('h3', {
											className: 'contact__card-title',
											children: 'Email'
										}),
										c.jsx('span', {
											className: 'contact__card-data',
											children: 'fullsnacker@gmail.com'
										}),
										c.jsxs('a', {
											href: 'mailto:fullsnacker@gmail.com',
											className: 'contact__button',
											children: [
												'Escríbeme',
												c.jsx(cs, { className: 'contact__button-icon' })
											]
										})
									]
								})
							}),
							c.jsx('div', {
								className: 'contact__info',
								children: c.jsxs('div', {
									className: 'contact__card',
									children: [
										c.jsx(Rt, { className: 'contact__card-icon' }),
										c.jsx('h3', {
											className: 'contact__card-title',
											children: 'Agenda llamada'
										}),
										c.jsxs('a', {
											href: 'https://calendly.com/fullsnacker/30min',
											className: 'contact__button',
											target: '_blank',
											rel: 'noreferrer',
											children: [
												'Ver disponibilidad',
												c.jsx(cs, { className: 'contact__button-icon' })
											]
										})
									]
								})
							})
						]
					}),
					c.jsxs('div', {
						className: 'contact__content',
						children: [
							c.jsx('h3', {
								className: 'contact__title',
								children: '¿Qué tienes en mente?'
							}),
							c.jsxs('form', {
								ref: e,
								action: 'https://formspree.io/f/xvolloon',
								className: 'contact__form',
								method: 'POST',
								children: [
									c.jsxs('div', {
										className: 'contact__form-div',
										children: [
											c.jsx('label', {
												className: 'contact__form-tag',
												children: 'Nombre'
											}),
											c.jsx('input', {
												type: 'text',
												name: 'name',
												className: 'contact__form-input',
												placeholder: 'Escribe tu nombre',
												required: !0
											})
										]
									}),
									c.jsxs('div', {
										className: 'contact__form-div',
										children: [
											c.jsx('label', {
												className: 'contact__form-tag',
												children: 'Email'
											}),
											c.jsx('input', {
												type: 'email',
												name: 'email',
												className: 'contact__form-input',
												placeholder: 'Escribe tu email',
												required: !0
											})
										]
									}),
									c.jsxs('div', {
										className: 'contact__form-div contact__form-area',
										children: [
											c.jsx('label', {
												className: 'contact__form-tag',
												children: 'Mensaje'
											}),
											c.jsx('textarea', {
												name: 'about',
												cols: '30',
												rows: '10',
												className: 'contact__form-input',
												placeholder: 'Escribe tu Mensaje',
												required: !0
											})
										]
									}),
									c.jsxs('button', {
										href: '#contact',
										className: 'button button--flex',
										type: 'submit',
										children: [
											'Enviar Mensaje',
											c.jsxs('svg', {
												className: 'button__icon',
												xmlns: 'http://www.w3.org/2000/svg',
												width: '24',
												height: '24',
												viewBox: '0 0 24 24',
												fill: 'none',
												children: [
													c.jsx('path', {
														d: 'M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z',
														fill: 'var(--container-color)'
													}),
													c.jsx('path', {
														d: 'M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z',
														fill: 'var(--container-color)'
													})
												]
											})
										]
									})
								]
							})
						]
					})
				]
			})
		]
	});
};
function Fp(e) {
	return Ye({
		tag: 'svg',
		attr: {
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '2',
			strokeLinecap: 'round',
			strokeLinejoin: 'round'
		},
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'
				}
			}
		]
	})(e);
}
function Bp(e) {
	return Ye({
		tag: 'svg',
		attr: {
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '2',
			strokeLinecap: 'round',
			strokeLinejoin: 'round'
		},
		child: [
			{
				tag: 'rect',
				attr: { x: '2', y: '2', width: '20', height: '20', rx: '5', ry: '5' }
			},
			{
				tag: 'path',
				attr: { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' }
			},
			{ tag: 'line', attr: { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5' } }
		]
	})(e);
}
function Vp(e) {
	return Ye({
		tag: 'svg',
		attr: {
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '2',
			strokeLinecap: 'round',
			strokeLinejoin: 'round'
		},
		child: [
			{
				tag: 'path',
				attr: {
					d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'
				}
			},
			{ tag: 'rect', attr: { x: '2', y: '9', width: '4', height: '12' } },
			{ tag: 'circle', attr: { cx: '4', cy: '4', r: '2' } }
		]
	})(e);
}
const Hp = () =>
		c.jsx('footer', {
			className: 'footer',
			children: c.jsxs('div', {
				className: 'footer__container container',
				children: [
					c.jsx('h1', { className: 'footer__title', children: 'Fullsnacker' }),
					c.jsxs('div', {
						className: 'footer__social',
						children: [
							c.jsx('a', {
								href: 'https://github.com/fullsnacker',
								className: 'home__social-icon',
								target: '_blank',
								rel: 'noreferrer',
								children: c.jsx(Fp, {})
							}),
							c.jsx('a', {
								href: 'https://www.instagram.com/fullsnacker/',
								className: 'home__social-icon',
								target: '_blank',
								rel: 'noreferrer',
								children: c.jsx(Bp, {})
							}),
							c.jsx('a', {
								href: 'https://www.linkedin.com/in/fullsnacker/',
								className: 'home__social-icon',
								target: '_blank',
								rel: 'noreferrer',
								children: c.jsx(Vp, {})
							})
						]
					}),
					c.jsx('span', {
						className: 'footer__copy',
						children: 'Copyright 2024'
					})
				]
			})
		}),
	Wp = () => {
		const [e, t] = D.useState(!1);
		return c.jsx('header', {
			className: 'header',
			children: c.jsxs('nav', {
				className: 'nav container',
				children: [
					c.jsx('a', {
						href: 'index.html',
						className: 'nav__logo',
						children: 'Fullsnacker'
					}),
					c.jsxs('div', {
						className: e ? 'nav__menu show-menu' : 'nav__menu',
						children: [
							c.jsxs('ul', {
								className: 'nav__list grid',
								children: [
									c.jsx('li', {
										className: 'nav__item',
										children: c.jsxs('a', {
											href: '#home',
											className: 'nav__link active-link',
											children: [
												c.jsx('i', { className: 'uil uil-estate nav__icon' }),
												'Inicio'
											]
										})
									}),
									c.jsx('li', {
										className: 'nav__item',
										children: c.jsxs('a', {
											href: '#about',
											className: 'nav__link',
											children: [
												c.jsx('i', { className: 'uil uil-user nav__icon' }),
												'Sobre mí'
											]
										})
									}),
									c.jsx('li', {
										className: 'nav__item',
										children: c.jsxs('a', {
											href: '#skills',
											className: 'nav__link',
											children: [
												c.jsx('i', { className: 'uil uil-file-alt nav__icon' }),
												'Habilidades'
											]
										})
									}),
									c.jsx('li', {
										className: 'nav__item',
										children: c.jsxs('a', {
											href: '#portfolio',
											className: 'nav__link',
											children: [
												c.jsx('i', { className: 'uil uil-scenery nav__icon' }),
												'Portfolio'
											]
										})
									}),
									c.jsx('li', {
										className: 'nav__item',
										children: c.jsxs('a', {
											href: '#contact',
											className: 'nav__link',
											children: [
												c.jsx('i', { className: 'uil uil-message nav__icon' }),
												'Contacto'
											]
										})
									})
								]
							}),
							c.jsx('i', {
								className: 'uil uil-times nav__close',
								onClick: () => {
									t(!e);
								}
							})
						]
					}),
					c.jsx('div', {
						className: 'nav__toggle',
						onClick: () => {
							t(!e);
						},
						children: c.jsx('i', { className: 'uil uil-apps' })
					})
				]
			})
		});
	},
	Up = () =>
		c.jsxs('div', {
			className: 'home__data',
			children: [
				c.jsxs('h1', {
					className: 'home__title',
					children: [
						'Fullsnacker',
						c.jsxs('svg', {
							width: '36',
							height: '36',
							viewBox: '0 0 48 48',
							fill: 'none',
							xmlns: 'http://www.w3.org/2000/svg',
							className: 'home__hand',
							children: [
								c.jsx('path', {
									d: 'M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z',
									fill: '#FFDD67'
								}),
								c.jsx('path', {
									d: 'M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z',
									fill: '#EBA352'
								}),
								c.jsx('path', {
									d: 'M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z',
									fill: '#FFDD67'
								}),
								c.jsx('path', {
									d: 'M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z',
									fill: '#EBA352'
								}),
								c.jsx('path', {
									d: 'M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z',
									fill: '#FFDD67'
								}),
								c.jsx('path', {
									d: 'M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z',
									fill: '#EBA352'
								}),
								c.jsx('path', {
									d: 'M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z',
									fill: '#FFDD67'
								}),
								c.jsx('path', {
									d: 'M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z',
									fill: '#EBA352'
								}),
								c.jsx('path', {
									d: 'M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z',
									fill: '#FFDD67'
								}),
								c.jsx('path', {
									d: 'M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z',
									fill: '#EBA352'
								})
							]
						})
					]
				}),
				c.jsx('h3', {
					className: 'home__subtitle',
					children: 'Desarrollador FullStack'
				}),
				c.jsx('p', {
					className: 'home__description',
					children:
						'Soy desarrollador creativo Full-Stack con más de 10 años de experiencia. usando el stack MERN. Vivo en Buenos Aires y soy muy apasionado y dedicado a mi trabajo.'
				}),
				c.jsxs('a', {
					href: '#contact',
					className: 'button button--flex',
					children: [
						'Hablemos',
						c.jsxs('svg', {
							className: 'button__icon',
							xmlns: 'http://www.w3.org/2000/svg',
							width: '24',
							height: '24',
							viewBox: '0 0 24 24',
							fill: 'none',
							children: [
								c.jsx('path', {
									d: 'M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z',
									fill: 'var(--container-color)'
								}),
								c.jsx('path', {
									d: 'M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z',
									fill: 'var(--container-color)'
								})
							]
						})
					]
				})
			]
		}),
	Gp = () =>
		c.jsx('div', {
			className: 'home__scroll',
			children: c.jsxs('a', {
				href: '#about',
				className: 'home__scroll-button button--flex',
				children: [
					c.jsxs('svg', {
						width: '32px',
						height: '32px',
						className: 'home__scroll-mouse',
						viewBox: '0 0 247 390',
						version: '1.1',
						xmlns: 'http://www.w3.org/2000/svg',
						xmlnsXlink: 'http://www.w3.org/1999/xlink',
						style: {
							fillRule: 'evenodd',
							clipRule: 'evenodd',
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeMiterlimit: '1.5'
						},
						children: [
							c.jsx('path', {
								className: 'wheel',
								d: 'M123.359,79.775l0,72.843',
								style: {
									fill: 'none',
									stroke: 'var(--title-color)',
									strokeWidth: '20px'
								}
							}),
							c.jsx('path', {
								id: 'mouse',
								d: 'M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z',
								style: {
									fill: 'none',
									stroke: 'var(--title-color)',
									strokeWidth: '20px'
								}
							})
						]
					}),
					c.jsx('span', {
						className: 'home__scroll-name',
						children: 'Desplazarse hacia abajo'
					}),
					c.jsx('i', { className: 'uil uil-arrow-down home__scroll-arrow' })
				]
			})
		}),
	Qp = () =>
		c.jsxs('div', {
			className: 'home__social',
			children: [
				c.jsx('a', {
					href: 'https://github.com/fullsnacker',
					className: 'home__social-icon',
					target: '_blank',
					rel: 'noreferrer',
					children: c.jsx('i', { className: 'uil uil-github' })
				}),
				c.jsx('a', {
					href: 'https://www.instagram.com/fullsnacker/',
					className: 'home__social-icon',
					target: '_blank',
					rel: 'noreferrer',
					children: c.jsx('i', { className: 'uil uil-instagram' })
				}),
				c.jsx('a', {
					href: 'https://www.linkedin.com/in/fullsnacker/',
					className: 'home__social-icon',
					target: '_blank',
					rel: 'noreferrer',
					children: c.jsx('i', { className: 'uil uil-linkedin-alt' })
				})
			]
		}),
	qp = () =>
		c.jsx('section', {
			className: 'home section',
			id: 'home',
			children: c.jsxs('div', {
				className: 'home__container container grid',
				children: [
					c.jsxs('div', {
						className: 'home__content grid',
						children: [
							c.jsx(Qp, {}),
							c.jsx('div', { className: 'home__img' }),
							c.jsx(Up, {})
						]
					}),
					c.jsx(Gp, {})
				]
			})
		}),
	Yp = '/assets/work001-Tj64OL4q.jpg',
	Xp = '/assets/work002-QEUPQghF.jpg',
	Kp = '/assets/work003-xU_24Dj0.jpg',
	Zp = '/assets/work004-nzr0ZCv1.jpg',
	bp = '/assets/work005-WofgnpYT.jpg',
	Jp = '/assets/work006-jsjmwfEC.jpg',
	eh = '/assets/work007-UiP8sJg5.png',
	xa = [
		{
			id: 1,
			image: Yp,
			title: 'MELI FE Challenge',
			category: 'Challenge',
			url: 'https://github.com/fullsnacker/meli-challenge'
		},
		{
			id: 2,
			image: Xp,
			title: 'Weather APP',
			category: 'Proyecto',
			url: 'https://github.com/fullsnacker/react-weather-app'
		},
		{
			id: 3,
			image: Kp,
			title: 'Journal App',
			category: 'BD',
			url: 'https://github.com/fullsnacker/journal-app'
		},
		{
			id: 4,
			image: Zp,
			title: 'Adviency',
			category: 'Proyecto',
			url: 'https://github.com/fullsnacker/adviency'
		},
		{
			id: 5,
			image: bp,
			title: 'Chatbot',
			category: 'IA',
			url: 'https://github.com/fullsnacker/snachat'
		},
		{
			id: 6,
			image: Jp,
			title: 'Snodo',
			category: 'Proyecto',
			url: 'https://github.com/fullsnacker/snodo'
		},
		{
			id: 7,
			image: eh,
			title: 'MELI Fullstack Challenge',
			category: 'Challenge',
			url: 'https://github.com/fullsnacker/meli-fe-challenge'
		}
	],
	th = [
		{ name: 'All' },
		{ name: 'IA' },
		{ name: 'Challenge' },
		{ name: 'BD' },
		{ name: 'Proyecto' }
	],
	nh = ({ item: e }) =>
		c.jsxs(
			'div',
			{
				className: 'project__card',
				children: [
					c.jsx('img', { className: 'project__img', src: e.image, alt: '' }),
					c.jsx('h3', { className: 'project__title', children: e.title }),
					c.jsxs('a', {
						href: e.url,
						className: 'project__button',
						target: '_blank',
						rel: 'noreferrer',
						children: ['Ver ', c.jsx(cs, { className: 'project__button-icon' })]
					})
				]
			},
			e.id
		),
	rh = () => {
		const [e, t] = D.useState({ name: 'All' }),
			[n, r] = D.useState([]),
			[i, l] = D.useState(0);
		D.useEffect(() => {
			if (e.name === 'All') r(xa);
			else {
				const a = xa.filter((o) => o.category === e.name);
				r(a);
			}
		}, [e]);
		const s = (a, o) => {
			t({ name: a.target.textContent }), l(o);
		};
		return c.jsxs('div', {
			children: [
				c.jsx('div', {
					className: 'project__filters',
					children: th.map((a, o) =>
						c.jsx(
							'span',
							{
								onClick: (u) => {
									s(u, o);
								},
								className: `${i === o ? 'active-project' : ''} project__item`,
								children: a.name
							},
							o
						)
					)
				}),
				c.jsx('div', {
					className: 'project__container container grid',
					children: n.map((a) => c.jsx(nh, { item: a }, a.id))
				})
			]
		});
	},
	ih = () =>
		c.jsxs('section', {
			className: 'portfolio section',
			id: 'portfolio',
			children: [
				c.jsx('h2', { className: 'section__title', children: 'Portfolio' }),
				c.jsx('span', {
					className: 'section__subtitle',
					children: 'Proyectos Recientes'
				}),
				c.jsx(rh, {})
			]
		}),
	lh = () => {
		const [e, t] = D.useState(1),
			n = (r) => {
				t(r);
			};
		return c.jsxs('section', {
			className: 'qualification section',
			children: [
				c.jsx('h2', { className: 'section__title', children: 'Experiencia' }),
				c.jsx('span', { className: 'section__subtitle', children: 'Mi Viaje' }),
				c.jsxs('div', {
					className: 'qualification__container container',
					children: [
						c.jsxs('div', {
							className: 'qualification__tabs',
							children: [
								c.jsxs('div', {
									className:
										e === 1
											? 'qualification__button button--flex qualification__active'
											: 'qualification__button button--flex',
									onClick: () => n(1),
									children: [
										c.jsx(Ip, { className: 'qualification__icon' }),
										'Educación'
									]
								}),
								c.jsxs('div', {
									className:
										e === 2
											? 'qualification__button button--flex qualification__active'
											: 'qualification__button button--flex',
									onClick: () => n(2),
									children: [
										c.jsx(Ap, { className: 'qualification__icon' }),
										'Laboral'
									]
								})
							]
						}),
						c.jsxs('div', {
							className: 'qualification__sections',
							children: [
								c.jsxs('div', {
									className:
										e === 1
											? 'qualification__content qualification__content-active'
											: 'qualification__content',
									children: [
										c.jsxs('div', {
											className: 'qualification__data',
											children: [
												c.jsxs('div', {
													children: [
														c.jsx('h3', {
															className: 'qualification__title',
															children: 'Analista de Sistemas'
														}),
														c.jsx('span', {
															className: 'qualification__subtitle',
															children: 'ORT'
														}),
														c.jsxs('div', {
															className: 'qualification__calendar',
															children: [
																c.jsx(Rt, {
																	className: 'qualification__calendar-icon'
																}),
																'2022'
															]
														})
													]
												}),
												c.jsxs('div', {
													children: [
														c.jsx('span', {
															className: 'qualification__rounder'
														}),
														c.jsx('span', { className: 'qualification__line' })
													]
												})
											]
										}),
										c.jsxs('div', {
											className: 'qualification__data',
											children: [
												c.jsx('div', {}),
												c.jsxs('div', {
													children: [
														c.jsx('span', {
															className: 'qualification__rounder'
														}),
														c.jsx('span', { className: 'qualification__line' })
													]
												}),
												c.jsxs('div', {
													children: [
														c.jsx('h3', {
															className: 'qualification__title',
															children:
																'Diplomatura en Desarrollo de Videojuegos + Unity Certification'
														}),
														c.jsx('span', {
															className: 'qualification__subtitle',
															children: 'UTN + Unity'
														}),
														c.jsxs('div', {
															className: 'qualification__calendar',
															children: [
																c.jsx(Rt, {
																	className: 'qualification__calendar-icon'
																}),
																'2016'
															]
														})
													]
												})
											]
										}),
										c.jsxs('div', {
											className: 'qualification__data',
											children: [
												c.jsxs('div', {
													children: [
														c.jsx('h3', {
															className: 'qualification__title',
															children: 'Técnico Electrónico'
														}),
														c.jsx('span', {
															className: 'qualification__subtitle',
															children: 'ORT'
														}),
														c.jsxs('div', {
															className: 'qualification__calendar',
															children: [
																c.jsx(Rt, {
																	className: 'qualification__calendar-icon'
																}),
																'2004'
															]
														})
													]
												}),
												c.jsxs('div', {
													children: [
														c.jsx('span', {
															className: 'qualification__rounder'
														}),
														c.jsx('span', { className: 'qualification__line' })
													]
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className:
										e === 2
											? 'qualification__content qualification__content-active'
											: 'qualification__content',
									children: [
										c.jsxs('div', {
											className: 'qualification__data',
											children: [
												c.jsxs('div', {
													children: [
														c.jsx('h3', {
															className: 'qualification__title',
															children: 'Desarrollador FullStack'
														}),
														c.jsx('span', {
															className: 'qualification__subtitle',
															children: 'ArtdeCode'
														}),
														c.jsxs('div', {
															className: 'qualification__calendar',
															children: [
																c.jsx(Rt, {
																	className: 'qualification__calendar-icon'
																}),
																'2020-Presente'
															]
														})
													]
												}),
												c.jsxs('div', {
													children: [
														c.jsx('span', {
															className: 'qualification__rounder'
														}),
														c.jsx('span', { className: 'qualification__line' })
													]
												})
											]
										}),
										c.jsxs('div', {
											className: 'qualification__data',
											children: [
												c.jsx('div', {}),
												c.jsxs('div', {
													children: [
														c.jsx('span', {
															className: 'qualification__rounder'
														}),
														c.jsx('span', { className: 'qualification__line' })
													]
												}),
												c.jsxs('div', {
													children: [
														c.jsx('h3', {
															className: 'qualification__title',
															children: 'Desarrollador FullStack'
														}),
														c.jsx('span', {
															className: 'qualification__subtitle',
															children: 'Roemmers'
														}),
														c.jsxs('div', {
															className: 'qualification__calendar',
															children: [
																c.jsx(Rt, {
																	className: 'qualification__calendar-icon'
																}),
																'2019-2020'
															]
														})
													]
												})
											]
										}),
										c.jsxs('div', {
											className: 'qualification__data',
											children: [
												c.jsxs('div', {
													children: [
														c.jsx('h3', {
															className: 'qualification__title',
															children: 'Desarrollador FrontEnd'
														}),
														c.jsx('span', {
															className: 'qualification__subtitle',
															children: 'Freelance'
														}),
														c.jsxs('div', {
															className: 'qualification__calendar',
															children: [
																c.jsx(Rt, {
																	className: 'qualification__calendar-icon'
																}),
																'2013-2019'
															]
														})
													]
												}),
												c.jsxs('div', {
													children: [
														c.jsx('span', {
															className: 'qualification__rounder'
														}),
														c.jsx('span', { className: 'qualification__line' })
													]
												})
											]
										})
									]
								})
							]
						})
					]
				})
			]
		});
	},
	sh = () => (
		window.addEventListener('scroll', function () {
			const e = document.querySelector('.scrollup');
			this.scrollY >= 560
				? e.classList.add('show-scroll')
				: e.classList.remove('show-scroll');
		}),
		c.jsx('a', {
			href: '#',
			className: 'scrollup',
			children: c.jsx(Dp, { className: 'scrollup__icon' })
		})
	);
function pe(e) {
	return Ye({
		tag: 'svg',
		attr: { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
		child: [
			{
				tag: 'path',
				attr: {
					fillRule: 'evenodd',
					d: 'M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z',
					clipRule: 'evenodd'
				}
			}
		]
	})(e);
}
const oh = () =>
		c.jsxs('div', {
			className: 'skills__content',
			children: [
				c.jsx('h3', { className: 'skills__title', children: 'Frontend' }),
				c.jsxs('div', {
					className: 'skills__box',
					children: [
						c.jsxs('div', {
							className: 'skills__group',
							children: [
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'HTML/CSS'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Avanzado'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Typescript'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Tailwind'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								})
							]
						}),
						c.jsxs('div', {
							className: 'skills__group',
							children: [
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'JavaScript'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Avanzado'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'React.js'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Next.js'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Basico'
												})
											]
										})
									]
								})
							]
						})
					]
				})
			]
		}),
	ah = () =>
		c.jsxs('div', {
			className: 'skills__content',
			children: [
				c.jsx('h3', { className: 'skills__title', children: 'Backend' }),
				c.jsxs('div', {
					className: 'skills__box',
					children: [
						c.jsxs('div', {
							className: 'skills__group',
							children: [
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Node.js'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Avanzado'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'MongoDB'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'MySQL'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								})
							]
						}),
						c.jsxs('div', {
							className: 'skills__group',
							children: [
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Express.js'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Linux'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Avanzado'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Git'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Avanzado'
												})
											]
										})
									]
								})
							]
						})
					]
				})
			]
		}),
	uh = () =>
		c.jsxs('div', {
			className: 'skills__content',
			children: [
				c.jsx('h3', { className: 'skills__title', children: 'Idiomas' }),
				c.jsxs('div', {
					className: 'skills__box',
					children: [
						c.jsxs('div', {
							className: 'skills__group',
							children: [
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Español'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Nativo'
												})
											]
										})
									]
								}),
								c.jsxs('div', {
									className: 'skills__data',
									children: [
										c.jsx(pe, {}),
										c.jsxs('div', {
											children: [
												c.jsx('h3', {
													className: 'skills__name',
													children: 'Japonés'
												}),
												c.jsx('span', {
													className: 'skills__level',
													children: 'Intermedio'
												})
											]
										})
									]
								})
							]
						}),
						c.jsx('div', {
							className: 'skills__group',
							children: c.jsxs('div', {
								className: 'skills__data',
								children: [
									c.jsx(pe, {}),
									c.jsxs('div', {
										children: [
											c.jsx('h3', {
												className: 'skills__name',
												children: 'Inglés'
											}),
											c.jsx('span', {
												className: 'skills__level',
												children: 'Avanzado'
											})
										]
									})
								]
							})
						})
					]
				})
			]
		}),
	ch = () =>
		c.jsxs('section', {
			className: 'skills section',
			id: 'skills',
			children: [
				c.jsx('h2', { className: 'section__title', children: 'Habilidades' }),
				c.jsx('span', {
					className: 'section__subtitle',
					children: 'Nivel Técnico'
				}),
				c.jsxs('div', {
					className: 'skills__container container grid',
					children: [c.jsx(oh, {}), c.jsx(ah, {}), c.jsx(uh, {})]
				})
			]
		});
function Sa(e) {
	return (
		e !== null &&
		typeof e == 'object' &&
		'constructor' in e &&
		e.constructor === Object
	);
}
function ao(e = {}, t = {}) {
	Object.keys(t).forEach((n) => {
		typeof e[n] > 'u'
			? (e[n] = t[n])
			: Sa(t[n]) && Sa(e[n]) && Object.keys(t[n]).length > 0 && ao(e[n], t[n]);
	});
}
const Wc = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: { blur() {}, nodeName: '' },
	querySelector() {
		return null;
	},
	querySelectorAll() {
		return [];
	},
	getElementById() {
		return null;
	},
	createEvent() {
		return { initEvent() {} };
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return [];
			}
		};
	},
	createElementNS() {
		return {};
	},
	importNode() {
		return null;
	},
	location: {
		hash: '',
		host: '',
		hostname: '',
		href: '',
		origin: '',
		pathname: '',
		protocol: '',
		search: ''
	}
};
function Le() {
	const e = typeof document < 'u' ? document : {};
	return ao(e, Wc), e;
}
const dh = {
	document: Wc,
	navigator: { userAgent: '' },
	location: {
		hash: '',
		host: '',
		hostname: '',
		href: '',
		origin: '',
		pathname: '',
		protocol: '',
		search: ''
	},
	history: { replaceState() {}, pushState() {}, go() {}, back() {} },
	CustomEvent: function () {
		return this;
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return {
			getPropertyValue() {
				return '';
			}
		};
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {};
	},
	requestAnimationFrame(e) {
		return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
	},
	cancelAnimationFrame(e) {
		typeof setTimeout > 'u' || clearTimeout(e);
	}
};
function ie() {
	const e = typeof window < 'u' ? window : {};
	return ao(e, dh), e;
}
function fh(e) {
	const t = e.__proto__;
	Object.defineProperty(e, '__proto__', {
		get() {
			return t;
		},
		set(n) {
			t.__proto__ = n;
		}
	});
}
class ht extends Array {
	constructor(t) {
		typeof t == 'number' ? super(t) : (super(...(t || [])), fh(this));
	}
}
function wr(e = []) {
	const t = [];
	return (
		e.forEach((n) => {
			Array.isArray(n) ? t.push(...wr(n)) : t.push(n);
		}),
		t
	);
}
function Uc(e, t) {
	return Array.prototype.filter.call(e, t);
}
function ph(e) {
	const t = [];
	for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
	return t;
}
function hh(e, t) {
	if (typeof e != 'string') return [e];
	const n = [],
		r = t.querySelectorAll(e);
	for (let i = 0; i < r.length; i += 1) n.push(r[i]);
	return n;
}
function P(e, t) {
	const n = ie(),
		r = Le();
	let i = [];
	if (!t && e instanceof ht) return e;
	if (!e) return new ht(i);
	if (typeof e == 'string') {
		const l = e.trim();
		if (l.indexOf('<') >= 0 && l.indexOf('>') >= 0) {
			let s = 'div';
			l.indexOf('<li') === 0 && (s = 'ul'),
				l.indexOf('<tr') === 0 && (s = 'tbody'),
				(l.indexOf('<td') === 0 || l.indexOf('<th') === 0) && (s = 'tr'),
				l.indexOf('<tbody') === 0 && (s = 'table'),
				l.indexOf('<option') === 0 && (s = 'select');
			const a = r.createElement(s);
			a.innerHTML = l;
			for (let o = 0; o < a.childNodes.length; o += 1) i.push(a.childNodes[o]);
		} else i = hh(e.trim(), t || r);
	} else if (e.nodeType || e === n || e === r) i.push(e);
	else if (Array.isArray(e)) {
		if (e instanceof ht) return e;
		i = e;
	}
	return new ht(ph(i));
}
P.fn = ht.prototype;
function mh(...e) {
	const t = wr(e.map((n) => n.split(' ')));
	return (
		this.forEach((n) => {
			n.classList.add(...t);
		}),
		this
	);
}
function vh(...e) {
	const t = wr(e.map((n) => n.split(' ')));
	return (
		this.forEach((n) => {
			n.classList.remove(...t);
		}),
		this
	);
}
function gh(...e) {
	const t = wr(e.map((n) => n.split(' ')));
	this.forEach((n) => {
		t.forEach((r) => {
			n.classList.toggle(r);
		});
	});
}
function yh(...e) {
	const t = wr(e.map((n) => n.split(' ')));
	return (
		Uc(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
			.length > 0
	);
}
function wh(e, t) {
	if (arguments.length === 1 && typeof e == 'string')
		return this[0] ? this[0].getAttribute(e) : void 0;
	for (let n = 0; n < this.length; n += 1)
		if (arguments.length === 2) this[n].setAttribute(e, t);
		else for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
	return this;
}
function xh(e) {
	for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
	return this;
}
function Sh(e) {
	for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
	return this;
}
function _h(e) {
	for (let t = 0; t < this.length; t += 1)
		this[t].style.transitionDuration = typeof e != 'string' ? `${e}ms` : e;
	return this;
}
function Ch(...e) {
	let [t, n, r, i] = e;
	typeof e[1] == 'function' && (([t, r, i] = e), (n = void 0)), i || (i = !1);
	function l(u) {
		const d = u.target;
		if (!d) return;
		const m = u.target.dom7EventData || [];
		if ((m.indexOf(u) < 0 && m.unshift(u), P(d).is(n))) r.apply(d, m);
		else {
			const f = P(d).parents();
			for (let g = 0; g < f.length; g += 1) P(f[g]).is(n) && r.apply(f[g], m);
		}
	}
	function s(u) {
		const d = u && u.target ? u.target.dom7EventData || [] : [];
		d.indexOf(u) < 0 && d.unshift(u), r.apply(this, d);
	}
	const a = t.split(' ');
	let o;
	for (let u = 0; u < this.length; u += 1) {
		const d = this[u];
		if (n)
			for (o = 0; o < a.length; o += 1) {
				const m = a[o];
				d.dom7LiveListeners || (d.dom7LiveListeners = {}),
					d.dom7LiveListeners[m] || (d.dom7LiveListeners[m] = []),
					d.dom7LiveListeners[m].push({ listener: r, proxyListener: l }),
					d.addEventListener(m, l, i);
			}
		else
			for (o = 0; o < a.length; o += 1) {
				const m = a[o];
				d.dom7Listeners || (d.dom7Listeners = {}),
					d.dom7Listeners[m] || (d.dom7Listeners[m] = []),
					d.dom7Listeners[m].push({ listener: r, proxyListener: s }),
					d.addEventListener(m, s, i);
			}
	}
	return this;
}
function kh(...e) {
	let [t, n, r, i] = e;
	typeof e[1] == 'function' && (([t, r, i] = e), (n = void 0)), i || (i = !1);
	const l = t.split(' ');
	for (let s = 0; s < l.length; s += 1) {
		const a = l[s];
		for (let o = 0; o < this.length; o += 1) {
			const u = this[o];
			let d;
			if (
				(!n && u.dom7Listeners
					? (d = u.dom7Listeners[a])
					: n && u.dom7LiveListeners && (d = u.dom7LiveListeners[a]),
				d && d.length)
			)
				for (let m = d.length - 1; m >= 0; m -= 1) {
					const f = d[m];
					(r && f.listener === r) ||
					(r &&
						f.listener &&
						f.listener.dom7proxy &&
						f.listener.dom7proxy === r)
						? (u.removeEventListener(a, f.proxyListener, i), d.splice(m, 1))
						: r ||
							(u.removeEventListener(a, f.proxyListener, i), d.splice(m, 1));
				}
		}
	}
	return this;
}
function Eh(...e) {
	const t = ie(),
		n = e[0].split(' '),
		r = e[1];
	for (let i = 0; i < n.length; i += 1) {
		const l = n[i];
		for (let s = 0; s < this.length; s += 1) {
			const a = this[s];
			if (t.CustomEvent) {
				const o = new t.CustomEvent(l, {
					detail: r,
					bubbles: !0,
					cancelable: !0
				});
				(a.dom7EventData = e.filter((u, d) => d > 0)),
					a.dispatchEvent(o),
					(a.dom7EventData = []),
					delete a.dom7EventData;
			}
		}
	}
	return this;
}
function Th(e) {
	const t = this;
	function n(r) {
		r.target === this && (e.call(this, r), t.off('transitionend', n));
	}
	return e && t.on('transitionend', n), this;
}
function Nh(e) {
	if (this.length > 0) {
		if (e) {
			const t = this.styles();
			return (
				this[0].offsetWidth +
				parseFloat(t.getPropertyValue('margin-right')) +
				parseFloat(t.getPropertyValue('margin-left'))
			);
		}
		return this[0].offsetWidth;
	}
	return null;
}
function jh(e) {
	if (this.length > 0) {
		if (e) {
			const t = this.styles();
			return (
				this[0].offsetHeight +
				parseFloat(t.getPropertyValue('margin-top')) +
				parseFloat(t.getPropertyValue('margin-bottom'))
			);
		}
		return this[0].offsetHeight;
	}
	return null;
}
function Lh() {
	if (this.length > 0) {
		const e = ie(),
			t = Le(),
			n = this[0],
			r = n.getBoundingClientRect(),
			i = t.body,
			l = n.clientTop || i.clientTop || 0,
			s = n.clientLeft || i.clientLeft || 0,
			a = n === e ? e.scrollY : n.scrollTop,
			o = n === e ? e.scrollX : n.scrollLeft;
		return { top: r.top + a - l, left: r.left + o - s };
	}
	return null;
}
function Ph() {
	const e = ie();
	return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function Mh(e, t) {
	const n = ie();
	let r;
	if (arguments.length === 1)
		if (typeof e == 'string') {
			if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
		} else {
			for (r = 0; r < this.length; r += 1)
				for (const i in e) this[r].style[i] = e[i];
			return this;
		}
	if (arguments.length === 2 && typeof e == 'string') {
		for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
		return this;
	}
	return this;
}
function zh(e) {
	return e
		? (this.forEach((t, n) => {
				e.apply(t, [t, n]);
			}),
			this)
		: this;
}
function Oh(e) {
	const t = Uc(this, e);
	return P(t);
}
function Ih(e) {
	if (typeof e > 'u') return this[0] ? this[0].innerHTML : null;
	for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
	return this;
}
function Dh(e) {
	if (typeof e > 'u') return this[0] ? this[0].textContent.trim() : null;
	for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
	return this;
}
function Ah(e) {
	const t = ie(),
		n = Le(),
		r = this[0];
	let i, l;
	if (!r || typeof e > 'u') return !1;
	if (typeof e == 'string') {
		if (r.matches) return r.matches(e);
		if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
		if (r.msMatchesSelector) return r.msMatchesSelector(e);
		for (i = P(e), l = 0; l < i.length; l += 1) if (i[l] === r) return !0;
		return !1;
	}
	if (e === n) return r === n;
	if (e === t) return r === t;
	if (e.nodeType || e instanceof ht) {
		for (i = e.nodeType ? [e] : e, l = 0; l < i.length; l += 1)
			if (i[l] === r) return !0;
		return !1;
	}
	return !1;
}
function Rh() {
	let e = this[0],
		t;
	if (e) {
		for (t = 0; (e = e.previousSibling) !== null; )
			e.nodeType === 1 && (t += 1);
		return t;
	}
}
function $h(e) {
	if (typeof e > 'u') return this;
	const t = this.length;
	if (e > t - 1) return P([]);
	if (e < 0) {
		const n = t + e;
		return n < 0 ? P([]) : P([this[n]]);
	}
	return P([this[e]]);
}
function Fh(...e) {
	let t;
	const n = Le();
	for (let r = 0; r < e.length; r += 1) {
		t = e[r];
		for (let i = 0; i < this.length; i += 1)
			if (typeof t == 'string') {
				const l = n.createElement('div');
				for (l.innerHTML = t; l.firstChild; ) this[i].appendChild(l.firstChild);
			} else if (t instanceof ht)
				for (let l = 0; l < t.length; l += 1) this[i].appendChild(t[l]);
			else this[i].appendChild(t);
	}
	return this;
}
function Bh(e) {
	const t = Le();
	let n, r;
	for (n = 0; n < this.length; n += 1)
		if (typeof e == 'string') {
			const i = t.createElement('div');
			for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
				this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
		} else if (e instanceof ht)
			for (r = 0; r < e.length; r += 1)
				this[n].insertBefore(e[r], this[n].childNodes[0]);
		else this[n].insertBefore(e, this[n].childNodes[0]);
	return this;
}
function Vh(e) {
	return this.length > 0
		? e
			? this[0].nextElementSibling && P(this[0].nextElementSibling).is(e)
				? P([this[0].nextElementSibling])
				: P([])
			: this[0].nextElementSibling
				? P([this[0].nextElementSibling])
				: P([])
		: P([]);
}
function Hh(e) {
	const t = [];
	let n = this[0];
	if (!n) return P([]);
	for (; n.nextElementSibling; ) {
		const r = n.nextElementSibling;
		e ? P(r).is(e) && t.push(r) : t.push(r), (n = r);
	}
	return P(t);
}
function Wh(e) {
	if (this.length > 0) {
		const t = this[0];
		return e
			? t.previousElementSibling && P(t.previousElementSibling).is(e)
				? P([t.previousElementSibling])
				: P([])
			: t.previousElementSibling
				? P([t.previousElementSibling])
				: P([]);
	}
	return P([]);
}
function Uh(e) {
	const t = [];
	let n = this[0];
	if (!n) return P([]);
	for (; n.previousElementSibling; ) {
		const r = n.previousElementSibling;
		e ? P(r).is(e) && t.push(r) : t.push(r), (n = r);
	}
	return P(t);
}
function Gh(e) {
	const t = [];
	for (let n = 0; n < this.length; n += 1)
		this[n].parentNode !== null &&
			(e
				? P(this[n].parentNode).is(e) && t.push(this[n].parentNode)
				: t.push(this[n].parentNode));
	return P(t);
}
function Qh(e) {
	const t = [];
	for (let n = 0; n < this.length; n += 1) {
		let r = this[n].parentNode;
		for (; r; ) e ? P(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
	}
	return P(t);
}
function qh(e) {
	let t = this;
	return typeof e > 'u' ? P([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function Yh(e) {
	const t = [];
	for (let n = 0; n < this.length; n += 1) {
		const r = this[n].querySelectorAll(e);
		for (let i = 0; i < r.length; i += 1) t.push(r[i]);
	}
	return P(t);
}
function Xh(e) {
	const t = [];
	for (let n = 0; n < this.length; n += 1) {
		const r = this[n].children;
		for (let i = 0; i < r.length; i += 1) (!e || P(r[i]).is(e)) && t.push(r[i]);
	}
	return P(t);
}
function Kh() {
	for (let e = 0; e < this.length; e += 1)
		this[e].parentNode && this[e].parentNode.removeChild(this[e]);
	return this;
}
const _a = {
	addClass: mh,
	removeClass: vh,
	hasClass: yh,
	toggleClass: gh,
	attr: wh,
	removeAttr: xh,
	transform: Sh,
	transition: _h,
	on: Ch,
	off: kh,
	trigger: Eh,
	transitionEnd: Th,
	outerWidth: Nh,
	outerHeight: jh,
	styles: Ph,
	offset: Lh,
	css: Mh,
	each: zh,
	html: Ih,
	text: Dh,
	is: Ah,
	index: Rh,
	eq: $h,
	append: Fh,
	prepend: Bh,
	next: Vh,
	nextAll: Hh,
	prev: Wh,
	prevAll: Uh,
	parent: Gh,
	parents: Qh,
	closest: qh,
	find: Yh,
	children: Xh,
	filter: Oh,
	remove: Kh
};
Object.keys(_a).forEach((e) => {
	Object.defineProperty(P.fn, e, { value: _a[e], writable: !0 });
});
function Zh(e) {
	const t = e;
	Object.keys(t).forEach((n) => {
		try {
			t[n] = null;
		} catch {}
		try {
			delete t[n];
		} catch {}
	});
}
function ds(e, t = 0) {
	return setTimeout(e, t);
}
function pr() {
	return Date.now();
}
function bh(e) {
	const t = ie();
	let n;
	return (
		t.getComputedStyle && (n = t.getComputedStyle(e, null)),
		!n && e.currentStyle && (n = e.currentStyle),
		n || (n = e.style),
		n
	);
}
function Jh(e, t = 'x') {
	const n = ie();
	let r, i, l;
	const s = bh(e);
	return (
		n.WebKitCSSMatrix
			? ((i = s.transform || s.webkitTransform),
				i.split(',').length > 6 &&
					(i = i
						.split(', ')
						.map((a) => a.replace(',', '.'))
						.join(', ')),
				(l = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
			: ((l =
					s.MozTransform ||
					s.OTransform ||
					s.MsTransform ||
					s.msTransform ||
					s.transform ||
					s
						.getPropertyValue('transform')
						.replace('translate(', 'matrix(1, 0, 0, 1,')),
				(r = l.toString().split(','))),
		t === 'x' &&
			(n.WebKitCSSMatrix
				? (i = l.m41)
				: r.length === 16
					? (i = parseFloat(r[12]))
					: (i = parseFloat(r[4]))),
		t === 'y' &&
			(n.WebKitCSSMatrix
				? (i = l.m42)
				: r.length === 16
					? (i = parseFloat(r[13]))
					: (i = parseFloat(r[5]))),
		i || 0
	);
}
function Fr(e) {
	return (
		typeof e == 'object' &&
		e !== null &&
		e.constructor &&
		Object.prototype.toString.call(e).slice(8, -1) === 'Object'
	);
}
function em(e) {
	return typeof window < 'u' && typeof window.HTMLElement < 'u'
		? e instanceof HTMLElement
		: e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ce(...e) {
	const t = Object(e[0]),
		n = ['__proto__', 'constructor', 'prototype'];
	for (let r = 1; r < e.length; r += 1) {
		const i = e[r];
		if (i != null && !em(i)) {
			const l = Object.keys(Object(i)).filter((s) => n.indexOf(s) < 0);
			for (let s = 0, a = l.length; s < a; s += 1) {
				const o = l[s],
					u = Object.getOwnPropertyDescriptor(i, o);
				u !== void 0 &&
					u.enumerable &&
					(Fr(t[o]) && Fr(i[o])
						? i[o].__swiper__
							? (t[o] = i[o])
							: Ce(t[o], i[o])
						: !Fr(t[o]) && Fr(i[o])
							? ((t[o] = {}), i[o].__swiper__ ? (t[o] = i[o]) : Ce(t[o], i[o]))
							: (t[o] = i[o]));
			}
		}
	}
	return t;
}
function Br(e, t, n) {
	e.style.setProperty(t, n);
}
function Gc({ swiper: e, targetPosition: t, side: n }) {
	const r = ie(),
		i = -e.translate;
	let l = null,
		s;
	const a = e.params.speed;
	(e.wrapperEl.style.scrollSnapType = 'none'),
		r.cancelAnimationFrame(e.cssModeFrameID);
	const o = t > i ? 'next' : 'prev',
		u = (m, f) => (o === 'next' && m >= f) || (o === 'prev' && m <= f),
		d = () => {
			(s = new Date().getTime()), l === null && (l = s);
			const m = Math.max(Math.min((s - l) / a, 1), 0),
				f = 0.5 - Math.cos(m * Math.PI) / 2;
			let g = i + f * (t - i);
			if ((u(g, t) && (g = t), e.wrapperEl.scrollTo({ [n]: g }), u(g, t))) {
				(e.wrapperEl.style.overflow = 'hidden'),
					(e.wrapperEl.style.scrollSnapType = ''),
					setTimeout(() => {
						(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [n]: g });
					}),
					r.cancelAnimationFrame(e.cssModeFrameID);
				return;
			}
			e.cssModeFrameID = r.requestAnimationFrame(d);
		};
	d();
}
let fl;
function tm() {
	const e = ie(),
		t = Le();
	return {
		smoothScroll:
			t.documentElement && 'scrollBehavior' in t.documentElement.style,
		touch: !!(
			'ontouchstart' in e ||
			(e.DocumentTouch && t instanceof e.DocumentTouch)
		),
		passiveListener: (function () {
			let r = !1;
			try {
				const i = Object.defineProperty({}, 'passive', {
					get() {
						r = !0;
					}
				});
				e.addEventListener('testPassiveListener', null, i);
			} catch {}
			return r;
		})(),
		gestures: (function () {
			return 'ongesturestart' in e;
		})()
	};
}
function Qc() {
	return fl || (fl = tm()), fl;
}
let pl;
function nm({ userAgent: e } = {}) {
	const t = Qc(),
		n = ie(),
		r = n.navigator.platform,
		i = e || n.navigator.userAgent,
		l = { ios: !1, android: !1 },
		s = n.screen.width,
		a = n.screen.height,
		o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
	let u = i.match(/(iPad).*OS\s([\d_]+)/);
	const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
		m = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
		f = r === 'Win32';
	let g = r === 'MacIntel';
	const w = [
		'1024x1366',
		'1366x1024',
		'834x1194',
		'1194x834',
		'834x1112',
		'1112x834',
		'768x1024',
		'1024x768',
		'820x1180',
		'1180x820',
		'810x1080',
		'1080x810'
	];
	return (
		!u &&
			g &&
			t.touch &&
			w.indexOf(`${s}x${a}`) >= 0 &&
			((u = i.match(/(Version)\/([\d.]+)/)),
			u || (u = [0, 1, '13_0_0']),
			(g = !1)),
		o && !f && ((l.os = 'android'), (l.android = !0)),
		(u || m || d) && ((l.os = 'ios'), (l.ios = !0)),
		l
	);
}
function rm(e = {}) {
	return pl || (pl = nm(e)), pl;
}
let hl;
function im() {
	const e = ie();
	function t() {
		const n = e.navigator.userAgent.toLowerCase();
		return (
			n.indexOf('safari') >= 0 &&
			n.indexOf('chrome') < 0 &&
			n.indexOf('android') < 0
		);
	}
	return {
		isSafari: t(),
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
			e.navigator.userAgent
		)
	};
}
function lm() {
	return hl || (hl = im()), hl;
}
function sm({ swiper: e, on: t, emit: n }) {
	const r = ie();
	let i = null,
		l = null;
	const s = () => {
			!e || e.destroyed || !e.initialized || (n('beforeResize'), n('resize'));
		},
		a = () => {
			!e ||
				e.destroyed ||
				!e.initialized ||
				((i = new ResizeObserver((d) => {
					l = r.requestAnimationFrame(() => {
						const { width: m, height: f } = e;
						let g = m,
							w = f;
						d.forEach(({ contentBoxSize: x, contentRect: k, target: p }) => {
							(p && p !== e.el) ||
								((g = k ? k.width : (x[0] || x).inlineSize),
								(w = k ? k.height : (x[0] || x).blockSize));
						}),
							(g !== m || w !== f) && s();
					});
				})),
				i.observe(e.el));
		},
		o = () => {
			l && r.cancelAnimationFrame(l),
				i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
		},
		u = () => {
			!e || e.destroyed || !e.initialized || n('orientationchange');
		};
	t('init', () => {
		if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
			a();
			return;
		}
		r.addEventListener('resize', s), r.addEventListener('orientationchange', u);
	}),
		t('destroy', () => {
			o(),
				r.removeEventListener('resize', s),
				r.removeEventListener('orientationchange', u);
		});
}
function om({ swiper: e, extendParams: t, on: n, emit: r }) {
	const i = [],
		l = ie(),
		s = (u, d = {}) => {
			const m = l.MutationObserver || l.WebkitMutationObserver,
				f = new m((g) => {
					if (g.length === 1) {
						r('observerUpdate', g[0]);
						return;
					}
					const w = function () {
						r('observerUpdate', g[0]);
					};
					l.requestAnimationFrame
						? l.requestAnimationFrame(w)
						: l.setTimeout(w, 0);
				});
			f.observe(u, {
				attributes: typeof d.attributes > 'u' ? !0 : d.attributes,
				childList: typeof d.childList > 'u' ? !0 : d.childList,
				characterData: typeof d.characterData > 'u' ? !0 : d.characterData
			}),
				i.push(f);
		},
		a = () => {
			if (e.params.observer) {
				if (e.params.observeParents) {
					const u = e.$el.parents();
					for (let d = 0; d < u.length; d += 1) s(u[d]);
				}
				s(e.$el[0], { childList: e.params.observeSlideChildren }),
					s(e.$wrapperEl[0], { attributes: !1 });
			}
		},
		o = () => {
			i.forEach((u) => {
				u.disconnect();
			}),
				i.splice(0, i.length);
		};
	t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
		n('init', a),
		n('destroy', o);
}
const am = {
	on(e, t, n) {
		const r = this;
		if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
		const i = n ? 'unshift' : 'push';
		return (
			e.split(' ').forEach((l) => {
				r.eventsListeners[l] || (r.eventsListeners[l] = []),
					r.eventsListeners[l][i](t);
			}),
			r
		);
	},
	once(e, t, n) {
		const r = this;
		if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
		function i(...l) {
			r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, l);
		}
		return (i.__emitterProxy = t), r.on(e, i, n);
	},
	onAny(e, t) {
		const n = this;
		if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n;
		const r = t ? 'unshift' : 'push';
		return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
	},
	offAny(e) {
		const t = this;
		if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
		const n = t.eventsAnyListeners.indexOf(e);
		return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
	},
	off(e, t) {
		const n = this;
		return (
			!n.eventsListeners ||
				n.destroyed ||
				!n.eventsListeners ||
				e.split(' ').forEach((r) => {
					typeof t > 'u'
						? (n.eventsListeners[r] = [])
						: n.eventsListeners[r] &&
							n.eventsListeners[r].forEach((i, l) => {
								(i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
									n.eventsListeners[r].splice(l, 1);
							});
				}),
			n
		);
	},
	emit(...e) {
		const t = this;
		if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
		let n, r, i;
		return (
			typeof e[0] == 'string' || Array.isArray(e[0])
				? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
				: ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
			r.unshift(i),
			(Array.isArray(n) ? n : n.split(' ')).forEach((s) => {
				t.eventsAnyListeners &&
					t.eventsAnyListeners.length &&
					t.eventsAnyListeners.forEach((a) => {
						a.apply(i, [s, ...r]);
					}),
					t.eventsListeners &&
						t.eventsListeners[s] &&
						t.eventsListeners[s].forEach((a) => {
							a.apply(i, r);
						});
			}),
			t
		);
	}
};
function um() {
	const e = this;
	let t, n;
	const r = e.$el;
	typeof e.params.width < 'u' && e.params.width !== null
		? (t = e.params.width)
		: (t = r[0].clientWidth),
		typeof e.params.height < 'u' && e.params.height !== null
			? (n = e.params.height)
			: (n = r[0].clientHeight),
		!((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
			((t =
				t -
				parseInt(r.css('padding-left') || 0, 10) -
				parseInt(r.css('padding-right') || 0, 10)),
			(n =
				n -
				parseInt(r.css('padding-top') || 0, 10) -
				parseInt(r.css('padding-bottom') || 0, 10)),
			Number.isNaN(t) && (t = 0),
			Number.isNaN(n) && (n = 0),
			Object.assign(e, {
				width: t,
				height: n,
				size: e.isHorizontal() ? t : n
			}));
}
function cm() {
	const e = this;
	function t(E) {
		return e.isHorizontal()
			? E
			: {
					width: 'height',
					'margin-top': 'margin-left',
					'margin-bottom ': 'margin-right',
					'margin-left': 'margin-top',
					'margin-right': 'margin-bottom',
					'padding-left': 'padding-top',
					'padding-right': 'padding-bottom',
					marginRight: 'marginBottom'
				}[E];
	}
	function n(E, z) {
		return parseFloat(E.getPropertyValue(t(z)) || 0);
	}
	const r = e.params,
		{ $wrapperEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
		o = e.virtual && r.virtual.enabled,
		u = o ? e.virtual.slides.length : e.slides.length,
		d = i.children(`.${e.params.slideClass}`),
		m = o ? e.virtual.slides.length : d.length;
	let f = [];
	const g = [],
		w = [];
	let x = r.slidesOffsetBefore;
	typeof x == 'function' && (x = r.slidesOffsetBefore.call(e));
	let k = r.slidesOffsetAfter;
	typeof k == 'function' && (k = r.slidesOffsetAfter.call(e));
	const p = e.snapGrid.length,
		h = e.slidesGrid.length;
	let v = r.spaceBetween,
		y = -x,
		S = 0,
		T = 0;
	if (typeof l > 'u') return;
	typeof v == 'string' &&
		v.indexOf('%') >= 0 &&
		(v = (parseFloat(v.replace('%', '')) / 100) * l),
		(e.virtualSize = -v),
		s
			? d.css({ marginLeft: '', marginBottom: '', marginTop: '' })
			: d.css({ marginRight: '', marginBottom: '', marginTop: '' }),
		r.centeredSlides &&
			r.cssMode &&
			(Br(e.wrapperEl, '--swiper-centered-offset-before', ''),
			Br(e.wrapperEl, '--swiper-centered-offset-after', ''));
	const L = r.grid && r.grid.rows > 1 && e.grid;
	L && e.grid.initSlides(m);
	let C;
	const F =
		r.slidesPerView === 'auto' &&
		r.breakpoints &&
		Object.keys(r.breakpoints).filter(
			(E) => typeof r.breakpoints[E].slidesPerView < 'u'
		).length > 0;
	for (let E = 0; E < m; E += 1) {
		C = 0;
		const z = d.eq(E);
		if ((L && e.grid.updateSlide(E, z, m, t), z.css('display') !== 'none')) {
			if (r.slidesPerView === 'auto') {
				F && (d[E].style[t('width')] = '');
				const I = getComputedStyle(z[0]),
					te = z[0].style.transform,
					Xe = z[0].style.webkitTransform;
				if (
					(te && (z[0].style.transform = 'none'),
					Xe && (z[0].style.webkitTransform = 'none'),
					r.roundLengths)
				)
					C = e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0);
				else {
					const Pt = n(I, 'width'),
						Mt = n(I, 'padding-left'),
						zt = n(I, 'padding-right'),
						N = n(I, 'margin-left'),
						M = n(I, 'margin-right'),
						O = I.getPropertyValue('box-sizing');
					if (O && O === 'border-box') C = Pt + N + M;
					else {
						const { clientWidth: G, offsetWidth: Z } = z[0];
						C = Pt + Mt + zt + N + M + (Z - G);
					}
				}
				te && (z[0].style.transform = te),
					Xe && (z[0].style.webkitTransform = Xe),
					r.roundLengths && (C = Math.floor(C));
			} else
				(C = (l - (r.slidesPerView - 1) * v) / r.slidesPerView),
					r.roundLengths && (C = Math.floor(C)),
					d[E] && (d[E].style[t('width')] = `${C}px`);
			d[E] && (d[E].swiperSlideSize = C),
				w.push(C),
				r.centeredSlides
					? ((y = y + C / 2 + S / 2 + v),
						S === 0 && E !== 0 && (y = y - l / 2 - v),
						E === 0 && (y = y - l / 2 - v),
						Math.abs(y) < 1 / 1e3 && (y = 0),
						r.roundLengths && (y = Math.floor(y)),
						T % r.slidesPerGroup === 0 && f.push(y),
						g.push(y))
					: (r.roundLengths && (y = Math.floor(y)),
						(T - Math.min(e.params.slidesPerGroupSkip, T)) %
							e.params.slidesPerGroup ===
							0 && f.push(y),
						g.push(y),
						(y = y + C + v)),
				(e.virtualSize += C + v),
				(S = C),
				(T += 1);
		}
	}
	if (
		((e.virtualSize = Math.max(e.virtualSize, l) + k),
		s &&
			a &&
			(r.effect === 'slide' || r.effect === 'coverflow') &&
			i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
		r.setWrapperSize &&
			i.css({ [t('width')]: `${e.virtualSize + r.spaceBetween}px` }),
		L && e.grid.updateWrapperSize(C, f, t),
		!r.centeredSlides)
	) {
		const E = [];
		for (let z = 0; z < f.length; z += 1) {
			let I = f[z];
			r.roundLengths && (I = Math.floor(I)),
				f[z] <= e.virtualSize - l && E.push(I);
		}
		(f = E),
			Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 &&
				f.push(e.virtualSize - l);
	}
	if ((f.length === 0 && (f = [0]), r.spaceBetween !== 0)) {
		const E = e.isHorizontal() && s ? 'marginLeft' : t('marginRight');
		d.filter((z, I) => (r.cssMode ? I !== d.length - 1 : !0)).css({
			[E]: `${v}px`
		});
	}
	if (r.centeredSlides && r.centeredSlidesBounds) {
		let E = 0;
		w.forEach((I) => {
			E += I + (r.spaceBetween ? r.spaceBetween : 0);
		}),
			(E -= r.spaceBetween);
		const z = E - l;
		f = f.map((I) => (I < 0 ? -x : I > z ? z + k : I));
	}
	if (r.centerInsufficientSlides) {
		let E = 0;
		if (
			(w.forEach((z) => {
				E += z + (r.spaceBetween ? r.spaceBetween : 0);
			}),
			(E -= r.spaceBetween),
			E < l)
		) {
			const z = (l - E) / 2;
			f.forEach((I, te) => {
				f[te] = I - z;
			}),
				g.forEach((I, te) => {
					g[te] = I + z;
				});
		}
	}
	if (
		(Object.assign(e, {
			slides: d,
			snapGrid: f,
			slidesGrid: g,
			slidesSizesGrid: w
		}),
		r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
	) {
		Br(e.wrapperEl, '--swiper-centered-offset-before', `${-f[0]}px`),
			Br(
				e.wrapperEl,
				'--swiper-centered-offset-after',
				`${e.size / 2 - w[w.length - 1] / 2}px`
			);
		const E = -e.snapGrid[0],
			z = -e.slidesGrid[0];
		(e.snapGrid = e.snapGrid.map((I) => I + E)),
			(e.slidesGrid = e.slidesGrid.map((I) => I + z));
	}
	if (
		(m !== u && e.emit('slidesLengthChange'),
		f.length !== p &&
			(e.params.watchOverflow && e.checkOverflow(),
			e.emit('snapGridLengthChange')),
		g.length !== h && e.emit('slidesGridLengthChange'),
		r.watchSlidesProgress && e.updateSlidesOffset(),
		!o && !r.cssMode && (r.effect === 'slide' || r.effect === 'fade'))
	) {
		const E = `${r.containerModifierClass}backface-hidden`,
			z = e.$el.hasClass(E);
		m <= r.maxBackfaceHiddenSlides
			? z || e.$el.addClass(E)
			: z && e.$el.removeClass(E);
	}
}
function dm(e) {
	const t = this,
		n = [],
		r = t.virtual && t.params.virtual.enabled;
	let i = 0,
		l;
	typeof e == 'number'
		? t.setTransition(e)
		: e === !0 && t.setTransition(t.params.speed);
	const s = (a) =>
		r
			? t.slides.filter(
					(o) => parseInt(o.getAttribute('data-swiper-slide-index'), 10) === a
				)[0]
			: t.slides.eq(a)[0];
	if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
		if (t.params.centeredSlides)
			(t.visibleSlides || P([])).each((a) => {
				n.push(a);
			});
		else
			for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
				const a = t.activeIndex + l;
				if (a > t.slides.length && !r) break;
				n.push(s(a));
			}
	else n.push(s(t.activeIndex));
	for (l = 0; l < n.length; l += 1)
		if (typeof n[l] < 'u') {
			const a = n[l].offsetHeight;
			i = a > i ? a : i;
		}
	(i || i === 0) && t.$wrapperEl.css('height', `${i}px`);
}
function fm() {
	const e = this,
		t = e.slides;
	for (let n = 0; n < t.length; n += 1)
		t[n].swiperSlideOffset = e.isHorizontal()
			? t[n].offsetLeft
			: t[n].offsetTop;
}
function pm(e = (this && this.translate) || 0) {
	const t = this,
		n = t.params,
		{ slides: r, rtlTranslate: i, snapGrid: l } = t;
	if (r.length === 0) return;
	typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
	let s = -e;
	i && (s = e),
		r.removeClass(n.slideVisibleClass),
		(t.visibleSlidesIndexes = []),
		(t.visibleSlides = []);
	for (let a = 0; a < r.length; a += 1) {
		const o = r[a];
		let u = o.swiperSlideOffset;
		n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
		const d =
				(s + (n.centeredSlides ? t.minTranslate() : 0) - u) /
				(o.swiperSlideSize + n.spaceBetween),
			m =
				(s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
				(o.swiperSlideSize + n.spaceBetween),
			f = -(s - u),
			g = f + t.slidesSizesGrid[a];
		((f >= 0 && f < t.size - 1) ||
			(g > 1 && g <= t.size) ||
			(f <= 0 && g >= t.size)) &&
			(t.visibleSlides.push(o),
			t.visibleSlidesIndexes.push(a),
			r.eq(a).addClass(n.slideVisibleClass)),
			(o.progress = i ? -d : d),
			(o.originalProgress = i ? -m : m);
	}
	t.visibleSlides = P(t.visibleSlides);
}
function hm(e) {
	const t = this;
	if (typeof e > 'u') {
		const u = t.rtlTranslate ? -1 : 1;
		e = (t && t.translate && t.translate * u) || 0;
	}
	const n = t.params,
		r = t.maxTranslate() - t.minTranslate();
	let { progress: i, isBeginning: l, isEnd: s } = t;
	const a = l,
		o = s;
	r === 0
		? ((i = 0), (l = !0), (s = !0))
		: ((i = (e - t.minTranslate()) / r), (l = i <= 0), (s = i >= 1)),
		Object.assign(t, { progress: i, isBeginning: l, isEnd: s }),
		(n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
			t.updateSlidesProgress(e),
		l && !a && t.emit('reachBeginning toEdge'),
		s && !o && t.emit('reachEnd toEdge'),
		((a && !l) || (o && !s)) && t.emit('fromEdge'),
		t.emit('progress', i);
}
function mm() {
	const e = this,
		{ slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: l } = e,
		s = e.virtual && n.virtual.enabled;
	t.removeClass(
		`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
	);
	let a;
	s
		? (a = e.$wrapperEl.find(
				`.${n.slideClass}[data-swiper-slide-index="${i}"]`
			))
		: (a = t.eq(i)),
		a.addClass(n.slideActiveClass),
		n.loop &&
			(a.hasClass(n.slideDuplicateClass)
				? r
						.children(
							`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
						)
						.addClass(n.slideDuplicateActiveClass)
				: r
						.children(
							`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
						)
						.addClass(n.slideDuplicateActiveClass));
	let o = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
	n.loop && o.length === 0 && ((o = t.eq(0)), o.addClass(n.slideNextClass));
	let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
	n.loop && u.length === 0 && ((u = t.eq(-1)), u.addClass(n.slidePrevClass)),
		n.loop &&
			(o.hasClass(n.slideDuplicateClass)
				? r
						.children(
							`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`
						)
						.addClass(n.slideDuplicateNextClass)
				: r
						.children(
							`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`
						)
						.addClass(n.slideDuplicateNextClass),
			u.hasClass(n.slideDuplicateClass)
				? r
						.children(
							`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr('data-swiper-slide-index')}"]`
						)
						.addClass(n.slideDuplicatePrevClass)
				: r
						.children(
							`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr('data-swiper-slide-index')}"]`
						)
						.addClass(n.slideDuplicatePrevClass)),
		e.emitSlidesClasses();
}
function vm(e) {
	const t = this,
		n = t.rtlTranslate ? t.translate : -t.translate,
		{
			slidesGrid: r,
			snapGrid: i,
			params: l,
			activeIndex: s,
			realIndex: a,
			snapIndex: o
		} = t;
	let u = e,
		d;
	if (typeof u > 'u') {
		for (let f = 0; f < r.length; f += 1)
			typeof r[f + 1] < 'u'
				? n >= r[f] && n < r[f + 1] - (r[f + 1] - r[f]) / 2
					? (u = f)
					: n >= r[f] && n < r[f + 1] && (u = f + 1)
				: n >= r[f] && (u = f);
		l.normalizeSlideIndex && (u < 0 || typeof u > 'u') && (u = 0);
	}
	if (i.indexOf(n) >= 0) d = i.indexOf(n);
	else {
		const f = Math.min(l.slidesPerGroupSkip, u);
		d = f + Math.floor((u - f) / l.slidesPerGroup);
	}
	if ((d >= i.length && (d = i.length - 1), u === s)) {
		d !== o && ((t.snapIndex = d), t.emit('snapIndexChange'));
		return;
	}
	const m = parseInt(t.slides.eq(u).attr('data-swiper-slide-index') || u, 10);
	Object.assign(t, {
		snapIndex: d,
		realIndex: m,
		previousIndex: s,
		activeIndex: u
	}),
		t.emit('activeIndexChange'),
		t.emit('snapIndexChange'),
		a !== m && t.emit('realIndexChange'),
		(t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
}
function gm(e) {
	const t = this,
		n = t.params,
		r = P(e).closest(`.${n.slideClass}`)[0];
	let i = !1,
		l;
	if (r) {
		for (let s = 0; s < t.slides.length; s += 1)
			if (t.slides[s] === r) {
				(i = !0), (l = s);
				break;
			}
	}
	if (r && i)
		(t.clickedSlide = r),
			t.virtual && t.params.virtual.enabled
				? (t.clickedIndex = parseInt(P(r).attr('data-swiper-slide-index'), 10))
				: (t.clickedIndex = l);
	else {
		(t.clickedSlide = void 0), (t.clickedIndex = void 0);
		return;
	}
	n.slideToClickedSlide &&
		t.clickedIndex !== void 0 &&
		t.clickedIndex !== t.activeIndex &&
		t.slideToClickedSlide();
}
const ym = {
	updateSize: um,
	updateSlides: cm,
	updateAutoHeight: dm,
	updateSlidesOffset: fm,
	updateSlidesProgress: pm,
	updateProgress: hm,
	updateSlidesClasses: mm,
	updateActiveIndex: vm,
	updateClickedSlide: gm
};
function wm(e = this.isHorizontal() ? 'x' : 'y') {
	const t = this,
		{ params: n, rtlTranslate: r, translate: i, $wrapperEl: l } = t;
	if (n.virtualTranslate) return r ? -i : i;
	if (n.cssMode) return i;
	let s = Jh(l[0], e);
	return r && (s = -s), s || 0;
}
function xm(e, t) {
	const n = this,
		{
			rtlTranslate: r,
			params: i,
			$wrapperEl: l,
			wrapperEl: s,
			progress: a
		} = n;
	let o = 0,
		u = 0;
	const d = 0;
	n.isHorizontal() ? (o = r ? -e : e) : (u = e),
		i.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
		i.cssMode
			? (s[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal()
					? -o
					: -u)
			: i.virtualTranslate ||
				l.transform(`translate3d(${o}px, ${u}px, ${d}px)`),
		(n.previousTranslate = n.translate),
		(n.translate = n.isHorizontal() ? o : u);
	let m;
	const f = n.maxTranslate() - n.minTranslate();
	f === 0 ? (m = 0) : (m = (e - n.minTranslate()) / f),
		m !== a && n.updateProgress(e),
		n.emit('setTranslate', n.translate, t);
}
function Sm() {
	return -this.snapGrid[0];
}
function _m() {
	return -this.snapGrid[this.snapGrid.length - 1];
}
function Cm(e = 0, t = this.params.speed, n = !0, r = !0, i) {
	const l = this,
		{ params: s, wrapperEl: a } = l;
	if (l.animating && s.preventInteractionOnTransition) return !1;
	const o = l.minTranslate(),
		u = l.maxTranslate();
	let d;
	if (
		(r && e > o ? (d = o) : r && e < u ? (d = u) : (d = e),
		l.updateProgress(d),
		s.cssMode)
	) {
		const m = l.isHorizontal();
		if (t === 0) a[m ? 'scrollLeft' : 'scrollTop'] = -d;
		else {
			if (!l.support.smoothScroll)
				return (
					Gc({ swiper: l, targetPosition: -d, side: m ? 'left' : 'top' }), !0
				);
			a.scrollTo({ [m ? 'left' : 'top']: -d, behavior: 'smooth' });
		}
		return !0;
	}
	return (
		t === 0
			? (l.setTransition(0),
				l.setTranslate(d),
				n && (l.emit('beforeTransitionStart', t, i), l.emit('transitionEnd')))
			: (l.setTransition(t),
				l.setTranslate(d),
				n && (l.emit('beforeTransitionStart', t, i), l.emit('transitionStart')),
				l.animating ||
					((l.animating = !0),
					l.onTranslateToWrapperTransitionEnd ||
						(l.onTranslateToWrapperTransitionEnd = function (f) {
							!l ||
								l.destroyed ||
								(f.target === this &&
									(l.$wrapperEl[0].removeEventListener(
										'transitionend',
										l.onTranslateToWrapperTransitionEnd
									),
									l.$wrapperEl[0].removeEventListener(
										'webkitTransitionEnd',
										l.onTranslateToWrapperTransitionEnd
									),
									(l.onTranslateToWrapperTransitionEnd = null),
									delete l.onTranslateToWrapperTransitionEnd,
									n && l.emit('transitionEnd')));
						}),
					l.$wrapperEl[0].addEventListener(
						'transitionend',
						l.onTranslateToWrapperTransitionEnd
					),
					l.$wrapperEl[0].addEventListener(
						'webkitTransitionEnd',
						l.onTranslateToWrapperTransitionEnd
					))),
		!0
	);
}
const km = {
	getTranslate: wm,
	setTranslate: xm,
	minTranslate: Sm,
	maxTranslate: _m,
	translateTo: Cm
};
function Em(e, t) {
	const n = this;
	n.params.cssMode || n.$wrapperEl.transition(e), n.emit('setTransition', e, t);
}
function qc({ swiper: e, runCallbacks: t, direction: n, step: r }) {
	const { activeIndex: i, previousIndex: l } = e;
	let s = n;
	if (
		(s || (i > l ? (s = 'next') : i < l ? (s = 'prev') : (s = 'reset')),
		e.emit(`transition${r}`),
		t && i !== l)
	) {
		if (s === 'reset') {
			e.emit(`slideResetTransition${r}`);
			return;
		}
		e.emit(`slideChangeTransition${r}`),
			s === 'next'
				? e.emit(`slideNextTransition${r}`)
				: e.emit(`slidePrevTransition${r}`);
	}
}
function Tm(e = !0, t) {
	const n = this,
		{ params: r } = n;
	r.cssMode ||
		(r.autoHeight && n.updateAutoHeight(),
		qc({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
}
function Nm(e = !0, t) {
	const n = this,
		{ params: r } = n;
	(n.animating = !1),
		!r.cssMode &&
			(n.setTransition(0),
			qc({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
}
const jm = { setTransition: Em, transitionStart: Tm, transitionEnd: Nm };
function Lm(e = 0, t = this.params.speed, n = !0, r, i) {
	if (typeof e != 'number' && typeof e != 'string')
		throw new Error(
			`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
		);
	if (typeof e == 'string') {
		const v = parseInt(e, 10);
		if (!isFinite(v))
			throw new Error(
				`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
			);
		e = v;
	}
	const l = this;
	let s = e;
	s < 0 && (s = 0);
	const {
		params: a,
		snapGrid: o,
		slidesGrid: u,
		previousIndex: d,
		activeIndex: m,
		rtlTranslate: f,
		wrapperEl: g,
		enabled: w
	} = l;
	if ((l.animating && a.preventInteractionOnTransition) || (!w && !r && !i))
		return !1;
	const x = Math.min(l.params.slidesPerGroupSkip, s);
	let k = x + Math.floor((s - x) / l.params.slidesPerGroup);
	k >= o.length && (k = o.length - 1);
	const p = -o[k];
	if (a.normalizeSlideIndex)
		for (let v = 0; v < u.length; v += 1) {
			const y = -Math.floor(p * 100),
				S = Math.floor(u[v] * 100),
				T = Math.floor(u[v + 1] * 100);
			typeof u[v + 1] < 'u'
				? y >= S && y < T - (T - S) / 2
					? (s = v)
					: y >= S && y < T && (s = v + 1)
				: y >= S && (s = v);
		}
	if (
		l.initialized &&
		s !== m &&
		((!l.allowSlideNext && p < l.translate && p < l.minTranslate()) ||
			(!l.allowSlidePrev &&
				p > l.translate &&
				p > l.maxTranslate() &&
				(m || 0) !== s))
	)
		return !1;
	s !== (d || 0) && n && l.emit('beforeSlideChangeStart'), l.updateProgress(p);
	let h;
	if (
		(s > m ? (h = 'next') : s < m ? (h = 'prev') : (h = 'reset'),
		(f && -p === l.translate) || (!f && p === l.translate))
	)
		return (
			l.updateActiveIndex(s),
			a.autoHeight && l.updateAutoHeight(),
			l.updateSlidesClasses(),
			a.effect !== 'slide' && l.setTranslate(p),
			h !== 'reset' && (l.transitionStart(n, h), l.transitionEnd(n, h)),
			!1
		);
	if (a.cssMode) {
		const v = l.isHorizontal(),
			y = f ? p : -p;
		if (t === 0) {
			const S = l.virtual && l.params.virtual.enabled;
			S &&
				((l.wrapperEl.style.scrollSnapType = 'none'),
				(l._immediateVirtual = !0)),
				(g[v ? 'scrollLeft' : 'scrollTop'] = y),
				S &&
					requestAnimationFrame(() => {
						(l.wrapperEl.style.scrollSnapType = ''),
							(l._swiperImmediateVirtual = !1);
					});
		} else {
			if (!l.support.smoothScroll)
				return (
					Gc({ swiper: l, targetPosition: y, side: v ? 'left' : 'top' }), !0
				);
			g.scrollTo({ [v ? 'left' : 'top']: y, behavior: 'smooth' });
		}
		return !0;
	}
	return (
		l.setTransition(t),
		l.setTranslate(p),
		l.updateActiveIndex(s),
		l.updateSlidesClasses(),
		l.emit('beforeTransitionStart', t, r),
		l.transitionStart(n, h),
		t === 0
			? l.transitionEnd(n, h)
			: l.animating ||
				((l.animating = !0),
				l.onSlideToWrapperTransitionEnd ||
					(l.onSlideToWrapperTransitionEnd = function (y) {
						!l ||
							l.destroyed ||
							(y.target === this &&
								(l.$wrapperEl[0].removeEventListener(
									'transitionend',
									l.onSlideToWrapperTransitionEnd
								),
								l.$wrapperEl[0].removeEventListener(
									'webkitTransitionEnd',
									l.onSlideToWrapperTransitionEnd
								),
								(l.onSlideToWrapperTransitionEnd = null),
								delete l.onSlideToWrapperTransitionEnd,
								l.transitionEnd(n, h)));
					}),
				l.$wrapperEl[0].addEventListener(
					'transitionend',
					l.onSlideToWrapperTransitionEnd
				),
				l.$wrapperEl[0].addEventListener(
					'webkitTransitionEnd',
					l.onSlideToWrapperTransitionEnd
				)),
		!0
	);
}
function Pm(e = 0, t = this.params.speed, n = !0, r) {
	if (typeof e == 'string') {
		const s = parseInt(e, 10);
		if (!isFinite(s))
			throw new Error(
				`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
			);
		e = s;
	}
	const i = this;
	let l = e;
	return i.params.loop && (l += i.loopedSlides), i.slideTo(l, t, n, r);
}
function Mm(e = this.params.speed, t = !0, n) {
	const r = this,
		{ animating: i, enabled: l, params: s } = r;
	if (!l) return r;
	let a = s.slidesPerGroup;
	s.slidesPerView === 'auto' &&
		s.slidesPerGroup === 1 &&
		s.slidesPerGroupAuto &&
		(a = Math.max(r.slidesPerViewDynamic('current', !0), 1));
	const o = r.activeIndex < s.slidesPerGroupSkip ? 1 : a;
	if (s.loop) {
		if (i && s.loopPreventsSlide) return !1;
		r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
	}
	return s.rewind && r.isEnd
		? r.slideTo(0, e, t, n)
		: r.slideTo(r.activeIndex + o, e, t, n);
}
function zm(e = this.params.speed, t = !0, n) {
	const r = this,
		{
			params: i,
			animating: l,
			snapGrid: s,
			slidesGrid: a,
			rtlTranslate: o,
			enabled: u
		} = r;
	if (!u) return r;
	if (i.loop) {
		if (l && i.loopPreventsSlide) return !1;
		r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
	}
	const d = o ? r.translate : -r.translate;
	function m(k) {
		return k < 0 ? -Math.floor(Math.abs(k)) : Math.floor(k);
	}
	const f = m(d),
		g = s.map((k) => m(k));
	let w = s[g.indexOf(f) - 1];
	if (typeof w > 'u' && i.cssMode) {
		let k;
		s.forEach((p, h) => {
			f >= p && (k = h);
		}),
			typeof k < 'u' && (w = s[k > 0 ? k - 1 : k]);
	}
	let x = 0;
	if (
		(typeof w < 'u' &&
			((x = a.indexOf(w)),
			x < 0 && (x = r.activeIndex - 1),
			i.slidesPerView === 'auto' &&
				i.slidesPerGroup === 1 &&
				i.slidesPerGroupAuto &&
				((x = x - r.slidesPerViewDynamic('previous', !0) + 1),
				(x = Math.max(x, 0)))),
		i.rewind && r.isBeginning)
	) {
		const k =
			r.params.virtual && r.params.virtual.enabled && r.virtual
				? r.virtual.slides.length - 1
				: r.slides.length - 1;
		return r.slideTo(k, e, t, n);
	}
	return r.slideTo(x, e, t, n);
}
function Om(e = this.params.speed, t = !0, n) {
	const r = this;
	return r.slideTo(r.activeIndex, e, t, n);
}
function Im(e = this.params.speed, t = !0, n, r = 0.5) {
	const i = this;
	let l = i.activeIndex;
	const s = Math.min(i.params.slidesPerGroupSkip, l),
		a = s + Math.floor((l - s) / i.params.slidesPerGroup),
		o = i.rtlTranslate ? i.translate : -i.translate;
	if (o >= i.snapGrid[a]) {
		const u = i.snapGrid[a],
			d = i.snapGrid[a + 1];
		o - u > (d - u) * r && (l += i.params.slidesPerGroup);
	} else {
		const u = i.snapGrid[a - 1],
			d = i.snapGrid[a];
		o - u <= (d - u) * r && (l -= i.params.slidesPerGroup);
	}
	return (
		(l = Math.max(l, 0)),
		(l = Math.min(l, i.slidesGrid.length - 1)),
		i.slideTo(l, e, t, n)
	);
}
function Dm() {
	const e = this,
		{ params: t, $wrapperEl: n } = e,
		r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView;
	let i = e.clickedIndex,
		l;
	if (t.loop) {
		if (e.animating) return;
		(l = parseInt(P(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
			t.centeredSlides
				? i < e.loopedSlides - r / 2 ||
					i > e.slides.length - e.loopedSlides + r / 2
					? (e.loopFix(),
						(i = n
							.children(
								`.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
							)
							.eq(0)
							.index()),
						ds(() => {
							e.slideTo(i);
						}))
					: e.slideTo(i)
				: i > e.slides.length - r
					? (e.loopFix(),
						(i = n
							.children(
								`.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
							)
							.eq(0)
							.index()),
						ds(() => {
							e.slideTo(i);
						}))
					: e.slideTo(i);
	} else e.slideTo(i);
}
const Am = {
	slideTo: Lm,
	slideToLoop: Pm,
	slideNext: Mm,
	slidePrev: zm,
	slideReset: Om,
	slideToClosest: Im,
	slideToClickedSlide: Dm
};
function Rm() {
	const e = this,
		t = Le(),
		{ params: n, $wrapperEl: r } = e,
		i = r.children().length > 0 ? P(r.children()[0].parentNode) : r;
	i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
	let l = i.children(`.${n.slideClass}`);
	if (n.loopFillGroupWithBlank) {
		const o = n.slidesPerGroup - (l.length % n.slidesPerGroup);
		if (o !== n.slidesPerGroup) {
			for (let u = 0; u < o; u += 1) {
				const d = P(t.createElement('div')).addClass(
					`${n.slideClass} ${n.slideBlankClass}`
				);
				i.append(d);
			}
			l = i.children(`.${n.slideClass}`);
		}
	}
	n.slidesPerView === 'auto' && !n.loopedSlides && (n.loopedSlides = l.length),
		(e.loopedSlides = Math.ceil(
			parseFloat(n.loopedSlides || n.slidesPerView, 10)
		)),
		(e.loopedSlides += n.loopAdditionalSlides),
		e.loopedSlides > l.length &&
			e.params.loopedSlidesLimit &&
			(e.loopedSlides = l.length);
	const s = [],
		a = [];
	l.each((o, u) => {
		P(o).attr('data-swiper-slide-index', u);
	});
	for (let o = 0; o < e.loopedSlides; o += 1) {
		const u = o - Math.floor(o / l.length) * l.length;
		a.push(l.eq(u)[0]), s.unshift(l.eq(l.length - u - 1)[0]);
	}
	for (let o = 0; o < a.length; o += 1)
		i.append(P(a[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
	for (let o = s.length - 1; o >= 0; o -= 1)
		i.prepend(P(s[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function $m() {
	const e = this;
	e.emit('beforeLoopFix');
	const {
		activeIndex: t,
		slides: n,
		loopedSlides: r,
		allowSlidePrev: i,
		allowSlideNext: l,
		snapGrid: s,
		rtlTranslate: a
	} = e;
	let o;
	(e.allowSlidePrev = !0), (e.allowSlideNext = !0);
	const d = -s[t] - e.getTranslate();
	t < r
		? ((o = n.length - r * 3 + t),
			(o += r),
			e.slideTo(o, 0, !1, !0) &&
				d !== 0 &&
				e.setTranslate((a ? -e.translate : e.translate) - d))
		: t >= n.length - r &&
			((o = -n.length + t + r),
			(o += r),
			e.slideTo(o, 0, !1, !0) &&
				d !== 0 &&
				e.setTranslate((a ? -e.translate : e.translate) - d)),
		(e.allowSlidePrev = i),
		(e.allowSlideNext = l),
		e.emit('loopFix');
}
function Fm() {
	const e = this,
		{ $wrapperEl: t, params: n, slides: r } = e;
	t
		.children(
			`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
		)
		.remove(),
		r.removeAttr('data-swiper-slide-index');
}
const Bm = { loopCreate: Rm, loopFix: $m, loopDestroy: Fm };
function Vm(e) {
	const t = this;
	if (
		t.support.touch ||
		!t.params.simulateTouch ||
		(t.params.watchOverflow && t.isLocked) ||
		t.params.cssMode
	)
		return;
	const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
	(n.style.cursor = 'move'), (n.style.cursor = e ? 'grabbing' : 'grab');
}
function Hm() {
	const e = this;
	e.support.touch ||
		(e.params.watchOverflow && e.isLocked) ||
		e.params.cssMode ||
		(e[
			e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
		].style.cursor = '');
}
const Wm = { setGrabCursor: Vm, unsetGrabCursor: Hm };
function Um(e, t = this) {
	function n(r) {
		if (!r || r === Le() || r === ie()) return null;
		r.assignedSlot && (r = r.assignedSlot);
		const i = r.closest(e);
		return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
	}
	return n(t);
}
function Gm(e) {
	const t = this,
		n = Le(),
		r = ie(),
		i = t.touchEventsData,
		{ params: l, touches: s, enabled: a } = t;
	if (!a || (t.animating && l.preventInteractionOnTransition)) return;
	!t.animating && l.cssMode && l.loop && t.loopFix();
	let o = e;
	o.originalEvent && (o = o.originalEvent);
	let u = P(o.target);
	if (
		(l.touchEventsTarget === 'wrapper' && !u.closest(t.wrapperEl).length) ||
		((i.isTouchEvent = o.type === 'touchstart'),
		!i.isTouchEvent && 'which' in o && o.which === 3) ||
		(!i.isTouchEvent && 'button' in o && o.button > 0) ||
		(i.isTouched && i.isMoved)
	)
		return;
	const d = !!l.noSwipingClass && l.noSwipingClass !== '',
		m = e.composedPath ? e.composedPath() : e.path;
	d && o.target && o.target.shadowRoot && m && (u = P(m[0]));
	const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
		g = !!(o.target && o.target.shadowRoot);
	if (l.noSwiping && (g ? Um(f, u[0]) : u.closest(f)[0])) {
		t.allowClick = !0;
		return;
	}
	if (l.swipeHandler && !u.closest(l.swipeHandler)[0]) return;
	(s.currentX = o.type === 'touchstart' ? o.targetTouches[0].pageX : o.pageX),
		(s.currentY = o.type === 'touchstart' ? o.targetTouches[0].pageY : o.pageY);
	const w = s.currentX,
		x = s.currentY,
		k = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
		p = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
	if (k && (w <= p || w >= r.innerWidth - p))
		if (k === 'prevent') e.preventDefault();
		else return;
	if (
		(Object.assign(i, {
			isTouched: !0,
			isMoved: !1,
			allowTouchCallbacks: !0,
			isScrolling: void 0,
			startMoving: void 0
		}),
		(s.startX = w),
		(s.startY = x),
		(i.touchStartTime = pr()),
		(t.allowClick = !0),
		t.updateSize(),
		(t.swipeDirection = void 0),
		l.threshold > 0 && (i.allowThresholdMove = !1),
		o.type !== 'touchstart')
	) {
		let h = !0;
		u.is(i.focusableElements) &&
			((h = !1), u[0].nodeName === 'SELECT' && (i.isTouched = !1)),
			n.activeElement &&
				P(n.activeElement).is(i.focusableElements) &&
				n.activeElement !== u[0] &&
				n.activeElement.blur();
		const v = h && t.allowTouchMove && l.touchStartPreventDefault;
		(l.touchStartForcePreventDefault || v) &&
			!u[0].isContentEditable &&
			o.preventDefault();
	}
	t.params.freeMode &&
		t.params.freeMode.enabled &&
		t.freeMode &&
		t.animating &&
		!l.cssMode &&
		t.freeMode.onTouchStart(),
		t.emit('touchStart', o);
}
function Qm(e) {
	const t = Le(),
		n = this,
		r = n.touchEventsData,
		{ params: i, touches: l, rtlTranslate: s, enabled: a } = n;
	if (!a) return;
	let o = e;
	if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
		r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', o);
		return;
	}
	if (r.isTouchEvent && o.type !== 'touchmove') return;
	const u =
			o.type === 'touchmove' &&
			o.targetTouches &&
			(o.targetTouches[0] || o.changedTouches[0]),
		d = o.type === 'touchmove' ? u.pageX : o.pageX,
		m = o.type === 'touchmove' ? u.pageY : o.pageY;
	if (o.preventedByNestedSwiper) {
		(l.startX = d), (l.startY = m);
		return;
	}
	if (!n.allowTouchMove) {
		P(o.target).is(r.focusableElements) || (n.allowClick = !1),
			r.isTouched &&
				(Object.assign(l, { startX: d, startY: m, currentX: d, currentY: m }),
				(r.touchStartTime = pr()));
		return;
	}
	if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
		if (n.isVertical()) {
			if (
				(m < l.startY && n.translate <= n.maxTranslate()) ||
				(m > l.startY && n.translate >= n.minTranslate())
			) {
				(r.isTouched = !1), (r.isMoved = !1);
				return;
			}
		} else if (
			(d < l.startX && n.translate <= n.maxTranslate()) ||
			(d > l.startX && n.translate >= n.minTranslate())
		)
			return;
	}
	if (
		r.isTouchEvent &&
		t.activeElement &&
		o.target === t.activeElement &&
		P(o.target).is(r.focusableElements)
	) {
		(r.isMoved = !0), (n.allowClick = !1);
		return;
	}
	if (
		(r.allowTouchCallbacks && n.emit('touchMove', o),
		o.targetTouches && o.targetTouches.length > 1)
	)
		return;
	(l.currentX = d), (l.currentY = m);
	const f = l.currentX - l.startX,
		g = l.currentY - l.startY;
	if (n.params.threshold && Math.sqrt(f ** 2 + g ** 2) < n.params.threshold)
		return;
	if (typeof r.isScrolling > 'u') {
		let p;
		(n.isHorizontal() && l.currentY === l.startY) ||
		(n.isVertical() && l.currentX === l.startX)
			? (r.isScrolling = !1)
			: f * f + g * g >= 25 &&
				((p = (Math.atan2(Math.abs(g), Math.abs(f)) * 180) / Math.PI),
				(r.isScrolling = n.isHorizontal()
					? p > i.touchAngle
					: 90 - p > i.touchAngle));
	}
	if (
		(r.isScrolling && n.emit('touchMoveOpposite', o),
		typeof r.startMoving > 'u' &&
			(l.currentX !== l.startX || l.currentY !== l.startY) &&
			(r.startMoving = !0),
		r.isScrolling)
	) {
		r.isTouched = !1;
		return;
	}
	if (!r.startMoving) return;
	(n.allowClick = !1),
		!i.cssMode && o.cancelable && o.preventDefault(),
		i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
		r.isMoved ||
			(i.loop && !i.cssMode && n.loopFix(),
			(r.startTranslate = n.getTranslate()),
			n.setTransition(0),
			n.animating && n.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
			(r.allowMomentumBounce = !1),
			i.grabCursor &&
				(n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
				n.setGrabCursor(!0),
			n.emit('sliderFirstMove', o)),
		n.emit('sliderMove', o),
		(r.isMoved = !0);
	let w = n.isHorizontal() ? f : g;
	(l.diff = w),
		(w *= i.touchRatio),
		s && (w = -w),
		(n.swipeDirection = w > 0 ? 'prev' : 'next'),
		(r.currentTranslate = w + r.startTranslate);
	let x = !0,
		k = i.resistanceRatio;
	if (
		(i.touchReleaseOnEdges && (k = 0),
		w > 0 && r.currentTranslate > n.minTranslate()
			? ((x = !1),
				i.resistance &&
					(r.currentTranslate =
						n.minTranslate() -
						1 +
						(-n.minTranslate() + r.startTranslate + w) ** k))
			: w < 0 &&
				r.currentTranslate < n.maxTranslate() &&
				((x = !1),
				i.resistance &&
					(r.currentTranslate =
						n.maxTranslate() +
						1 -
						(n.maxTranslate() - r.startTranslate - w) ** k)),
		x && (o.preventedByNestedSwiper = !0),
		!n.allowSlideNext &&
			n.swipeDirection === 'next' &&
			r.currentTranslate < r.startTranslate &&
			(r.currentTranslate = r.startTranslate),
		!n.allowSlidePrev &&
			n.swipeDirection === 'prev' &&
			r.currentTranslate > r.startTranslate &&
			(r.currentTranslate = r.startTranslate),
		!n.allowSlidePrev &&
			!n.allowSlideNext &&
			(r.currentTranslate = r.startTranslate),
		i.threshold > 0)
	)
		if (Math.abs(w) > i.threshold || r.allowThresholdMove) {
			if (!r.allowThresholdMove) {
				(r.allowThresholdMove = !0),
					(l.startX = l.currentX),
					(l.startY = l.currentY),
					(r.currentTranslate = r.startTranslate),
					(l.diff = n.isHorizontal()
						? l.currentX - l.startX
						: l.currentY - l.startY);
				return;
			}
		} else {
			r.currentTranslate = r.startTranslate;
			return;
		}
	!i.followFinger ||
		i.cssMode ||
		(((i.freeMode && i.freeMode.enabled && n.freeMode) ||
			i.watchSlidesProgress) &&
			(n.updateActiveIndex(), n.updateSlidesClasses()),
		n.params.freeMode &&
			i.freeMode.enabled &&
			n.freeMode &&
			n.freeMode.onTouchMove(),
		n.updateProgress(r.currentTranslate),
		n.setTranslate(r.currentTranslate));
}
function qm(e) {
	const t = this,
		n = t.touchEventsData,
		{ params: r, touches: i, rtlTranslate: l, slidesGrid: s, enabled: a } = t;
	if (!a) return;
	let o = e;
	if (
		(o.originalEvent && (o = o.originalEvent),
		n.allowTouchCallbacks && t.emit('touchEnd', o),
		(n.allowTouchCallbacks = !1),
		!n.isTouched)
	) {
		n.isMoved && r.grabCursor && t.setGrabCursor(!1),
			(n.isMoved = !1),
			(n.startMoving = !1);
		return;
	}
	r.grabCursor &&
		n.isMoved &&
		n.isTouched &&
		(t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
		t.setGrabCursor(!1);
	const u = pr(),
		d = u - n.touchStartTime;
	if (t.allowClick) {
		const h = o.path || (o.composedPath && o.composedPath());
		t.updateClickedSlide((h && h[0]) || o.target),
			t.emit('tap click', o),
			d < 300 &&
				u - n.lastClickTime < 300 &&
				t.emit('doubleTap doubleClick', o);
	}
	if (
		((n.lastClickTime = pr()),
		ds(() => {
			t.destroyed || (t.allowClick = !0);
		}),
		!n.isTouched ||
			!n.isMoved ||
			!t.swipeDirection ||
			i.diff === 0 ||
			n.currentTranslate === n.startTranslate)
	) {
		(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
		return;
	}
	(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
	let m;
	if (
		(r.followFinger
			? (m = l ? t.translate : -t.translate)
			: (m = -n.currentTranslate),
		r.cssMode)
	)
		return;
	if (t.params.freeMode && r.freeMode.enabled) {
		t.freeMode.onTouchEnd({ currentPos: m });
		return;
	}
	let f = 0,
		g = t.slidesSizesGrid[0];
	for (
		let h = 0;
		h < s.length;
		h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
	) {
		const v = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
		typeof s[h + v] < 'u'
			? m >= s[h] && m < s[h + v] && ((f = h), (g = s[h + v] - s[h]))
			: m >= s[h] && ((f = h), (g = s[s.length - 1] - s[s.length - 2]));
	}
	let w = null,
		x = null;
	r.rewind &&
		(t.isBeginning
			? (x =
					t.params.virtual && t.params.virtual.enabled && t.virtual
						? t.virtual.slides.length - 1
						: t.slides.length - 1)
			: t.isEnd && (w = 0));
	const k = (m - s[f]) / g,
		p = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
	if (d > r.longSwipesMs) {
		if (!r.longSwipes) {
			t.slideTo(t.activeIndex);
			return;
		}
		t.swipeDirection === 'next' &&
			(k >= r.longSwipesRatio
				? t.slideTo(r.rewind && t.isEnd ? w : f + p)
				: t.slideTo(f)),
			t.swipeDirection === 'prev' &&
				(k > 1 - r.longSwipesRatio
					? t.slideTo(f + p)
					: x !== null && k < 0 && Math.abs(k) > r.longSwipesRatio
						? t.slideTo(x)
						: t.slideTo(f));
	} else {
		if (!r.shortSwipes) {
			t.slideTo(t.activeIndex);
			return;
		}
		t.navigation &&
		(o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
			? o.target === t.navigation.nextEl
				? t.slideTo(f + p)
				: t.slideTo(f)
			: (t.swipeDirection === 'next' && t.slideTo(w !== null ? w : f + p),
				t.swipeDirection === 'prev' && t.slideTo(x !== null ? x : f));
	}
}
function Ca() {
	const e = this,
		{ params: t, el: n } = e;
	if (n && n.offsetWidth === 0) return;
	t.breakpoints && e.setBreakpoint();
	const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e;
	(e.allowSlideNext = !0),
		(e.allowSlidePrev = !0),
		e.updateSize(),
		e.updateSlides(),
		e.updateSlidesClasses(),
		(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
		e.isEnd &&
		!e.isBeginning &&
		!e.params.centeredSlides
			? e.slideTo(e.slides.length - 1, 0, !1, !0)
			: e.slideTo(e.activeIndex, 0, !1, !0),
		e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
		(e.allowSlidePrev = i),
		(e.allowSlideNext = r),
		e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Ym(e) {
	const t = this;
	t.enabled &&
		(t.allowClick ||
			(t.params.preventClicks && e.preventDefault(),
			t.params.preventClicksPropagation &&
				t.animating &&
				(e.stopPropagation(), e.stopImmediatePropagation())));
}
function Xm() {
	const e = this,
		{ wrapperEl: t, rtlTranslate: n, enabled: r } = e;
	if (!r) return;
	(e.previousTranslate = e.translate),
		e.isHorizontal()
			? (e.translate = -t.scrollLeft)
			: (e.translate = -t.scrollTop),
		e.translate === 0 && (e.translate = 0),
		e.updateActiveIndex(),
		e.updateSlidesClasses();
	let i;
	const l = e.maxTranslate() - e.minTranslate();
	l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
		i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
		e.emit('setTranslate', e.translate, !1);
}
let ka = !1;
function Km() {}
const Yc = (e, t) => {
	const n = Le(),
		{
			params: r,
			touchEvents: i,
			el: l,
			wrapperEl: s,
			device: a,
			support: o
		} = e,
		u = !!r.nested,
		d = t === 'on' ? 'addEventListener' : 'removeEventListener',
		m = t;
	if (!o.touch)
		l[d](i.start, e.onTouchStart, !1),
			n[d](i.move, e.onTouchMove, u),
			n[d](i.end, e.onTouchEnd, !1);
	else {
		const f =
			i.start === 'touchstart' && o.passiveListener && r.passiveListeners
				? { passive: !0, capture: !1 }
				: !1;
		l[d](i.start, e.onTouchStart, f),
			l[d](
				i.move,
				e.onTouchMove,
				o.passiveListener ? { passive: !1, capture: u } : u
			),
			l[d](i.end, e.onTouchEnd, f),
			i.cancel && l[d](i.cancel, e.onTouchEnd, f);
	}
	(r.preventClicks || r.preventClicksPropagation) &&
		l[d]('click', e.onClick, !0),
		r.cssMode && s[d]('scroll', e.onScroll),
		r.updateOnWindowResize
			? e[m](
					a.ios || a.android
						? 'resize orientationchange observerUpdate'
						: 'resize observerUpdate',
					Ca,
					!0
				)
			: e[m]('observerUpdate', Ca, !0);
};
function Zm() {
	const e = this,
		t = Le(),
		{ params: n, support: r } = e;
	(e.onTouchStart = Gm.bind(e)),
		(e.onTouchMove = Qm.bind(e)),
		(e.onTouchEnd = qm.bind(e)),
		n.cssMode && (e.onScroll = Xm.bind(e)),
		(e.onClick = Ym.bind(e)),
		r.touch && !ka && (t.addEventListener('touchstart', Km), (ka = !0)),
		Yc(e, 'on');
}
function bm() {
	Yc(this, 'off');
}
const Jm = { attachEvents: Zm, detachEvents: bm },
	Ea = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function e0() {
	const e = this,
		{
			activeIndex: t,
			initialized: n,
			loopedSlides: r = 0,
			params: i,
			$el: l
		} = e,
		s = i.breakpoints;
	if (!s || (s && Object.keys(s).length === 0)) return;
	const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
	if (!a || e.currentBreakpoint === a) return;
	const u = (a in s ? s[a] : void 0) || e.originalParams,
		d = Ea(e, i),
		m = Ea(e, u),
		f = i.enabled;
	d && !m
		? (l.removeClass(
				`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
			),
			e.emitContainerClasses())
		: !d &&
			m &&
			(l.addClass(`${i.containerModifierClass}grid`),
			((u.grid.fill && u.grid.fill === 'column') ||
				(!u.grid.fill && i.grid.fill === 'column')) &&
				l.addClass(`${i.containerModifierClass}grid-column`),
			e.emitContainerClasses()),
		['navigation', 'pagination', 'scrollbar'].forEach((k) => {
			const p = i[k] && i[k].enabled,
				h = u[k] && u[k].enabled;
			p && !h && e[k].disable(), !p && h && e[k].enable();
		});
	const g = u.direction && u.direction !== i.direction,
		w = i.loop && (u.slidesPerView !== i.slidesPerView || g);
	g && n && e.changeDirection(), Ce(e.params, u);
	const x = e.params.enabled;
	Object.assign(e, {
		allowTouchMove: e.params.allowTouchMove,
		allowSlideNext: e.params.allowSlideNext,
		allowSlidePrev: e.params.allowSlidePrev
	}),
		f && !x ? e.disable() : !f && x && e.enable(),
		(e.currentBreakpoint = a),
		e.emit('_beforeBreakpoint', u),
		w &&
			n &&
			(e.loopDestroy(),
			e.loopCreate(),
			e.updateSlides(),
			e.slideTo(t - r + e.loopedSlides, 0, !1)),
		e.emit('breakpoint', u);
}
function t0(e, t = 'window', n) {
	if (!e || (t === 'container' && !n)) return;
	let r = !1;
	const i = ie(),
		l = t === 'window' ? i.innerHeight : n.clientHeight,
		s = Object.keys(e).map((a) => {
			if (typeof a == 'string' && a.indexOf('@') === 0) {
				const o = parseFloat(a.substr(1));
				return { value: l * o, point: a };
			}
			return { value: a, point: a };
		});
	s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
	for (let a = 0; a < s.length; a += 1) {
		const { point: o, value: u } = s[a];
		t === 'window'
			? i.matchMedia(`(min-width: ${u}px)`).matches && (r = o)
			: u <= n.clientWidth && (r = o);
	}
	return r || 'max';
}
const n0 = { setBreakpoint: e0, getBreakpoint: t0 };
function r0(e, t) {
	const n = [];
	return (
		e.forEach((r) => {
			typeof r == 'object'
				? Object.keys(r).forEach((i) => {
						r[i] && n.push(t + i);
					})
				: typeof r == 'string' && n.push(t + r);
		}),
		n
	);
}
function i0() {
	const e = this,
		{ classNames: t, params: n, rtl: r, $el: i, device: l, support: s } = e,
		a = r0(
			[
				'initialized',
				n.direction,
				{ 'pointer-events': !s.touch },
				{ 'free-mode': e.params.freeMode && n.freeMode.enabled },
				{ autoheight: n.autoHeight },
				{ rtl: r },
				{ grid: n.grid && n.grid.rows > 1 },
				{
					'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column'
				},
				{ android: l.android },
				{ ios: l.ios },
				{ 'css-mode': n.cssMode },
				{ centered: n.cssMode && n.centeredSlides },
				{ 'watch-progress': n.watchSlidesProgress }
			],
			n.containerModifierClass
		);
	t.push(...a), i.addClass([...t].join(' ')), e.emitContainerClasses();
}
function l0() {
	const e = this,
		{ $el: t, classNames: n } = e;
	t.removeClass(n.join(' ')), e.emitContainerClasses();
}
const s0 = { addClasses: i0, removeClasses: l0 };
function o0(e, t, n, r, i, l) {
	const s = ie();
	let a;
	function o() {
		l && l();
	}
	!P(e).parent('picture')[0] && (!e.complete || !i) && t
		? ((a = new s.Image()),
			(a.onload = o),
			(a.onerror = o),
			r && (a.sizes = r),
			n && (a.srcset = n),
			t && (a.src = t))
		: o();
}
function a0() {
	const e = this;
	e.imagesToLoad = e.$el.find('img');
	function t() {
		typeof e > 'u' ||
			e === null ||
			!e ||
			e.destroyed ||
			(e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
			e.imagesLoaded === e.imagesToLoad.length &&
				(e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
	}
	for (let n = 0; n < e.imagesToLoad.length; n += 1) {
		const r = e.imagesToLoad[n];
		e.loadImage(
			r,
			r.currentSrc || r.getAttribute('src'),
			r.srcset || r.getAttribute('srcset'),
			r.sizes || r.getAttribute('sizes'),
			!0,
			t
		);
	}
}
const u0 = { loadImage: o0, preloadImages: a0 };
function c0() {
	const e = this,
		{ isLocked: t, params: n } = e,
		{ slidesOffsetBefore: r } = n;
	if (r) {
		const i = e.slides.length - 1,
			l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
		e.isLocked = e.size > l;
	} else e.isLocked = e.snapGrid.length === 1;
	n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
		n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
		t && t !== e.isLocked && (e.isEnd = !1),
		t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
const d0 = { checkOverflow: c0 },
	Ta = {
		init: !0,
		direction: 'horizontal',
		touchEventsTarget: 'wrapper',
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements: 'input, select, option, textarea, button, video, label',
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: 'slide',
		breakpoints: void 0,
		breakpointsBase: 'window',
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 0,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		preloadImages: !0,
		updateOnImagesReady: !0,
		loop: !1,
		loopAdditionalSlides: 0,
		loopedSlides: null,
		loopedSlidesLimit: !0,
		loopFillGroupWithBlank: !1,
		loopPreventsSlide: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: 'swiper-no-swiping',
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: 'swiper-',
		slideClass: 'swiper-slide',
		slideBlankClass: 'swiper-slide-invisible-blank',
		slideActiveClass: 'swiper-slide-active',
		slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
		slideVisibleClass: 'swiper-slide-visible',
		slideDuplicateClass: 'swiper-slide-duplicate',
		slideNextClass: 'swiper-slide-next',
		slideDuplicateNextClass: 'swiper-slide-duplicate-next',
		slidePrevClass: 'swiper-slide-prev',
		slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
		wrapperClass: 'swiper-wrapper',
		runCallbacksOnInit: !0,
		_emitClasses: !1
	};
function f0(e, t) {
	return function (r = {}) {
		const i = Object.keys(r)[0],
			l = r[i];
		if (typeof l != 'object' || l === null) {
			Ce(t, r);
			return;
		}
		if (
			(['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 &&
				e[i] === !0 &&
				(e[i] = { auto: !0 }),
			!(i in e && 'enabled' in l))
		) {
			Ce(t, r);
			return;
		}
		e[i] === !0 && (e[i] = { enabled: !0 }),
			typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
			e[i] || (e[i] = { enabled: !1 }),
			Ce(t, r);
	};
}
const ml = {
		eventsEmitter: am,
		update: ym,
		translate: km,
		transition: jm,
		slide: Am,
		loop: Bm,
		grabCursor: Wm,
		events: Jm,
		breakpoints: n0,
		checkOverflow: d0,
		classes: s0,
		images: u0
	},
	vl = {};
let kn = class Ke {
	constructor(...t) {
		let n, r;
		if (
			(t.length === 1 &&
			t[0].constructor &&
			Object.prototype.toString.call(t[0]).slice(8, -1) === 'Object'
				? (r = t[0])
				: ([n, r] = t),
			r || (r = {}),
			(r = Ce({}, r)),
			n && !r.el && (r.el = n),
			r.el && P(r.el).length > 1)
		) {
			const a = [];
			return (
				P(r.el).each((o) => {
					const u = Ce({}, r, { el: o });
					a.push(new Ke(u));
				}),
				a
			);
		}
		const i = this;
		(i.__swiper__ = !0),
			(i.support = Qc()),
			(i.device = rm({ userAgent: r.userAgent })),
			(i.browser = lm()),
			(i.eventsListeners = {}),
			(i.eventsAnyListeners = []),
			(i.modules = [...i.__modules__]),
			r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
		const l = {};
		i.modules.forEach((a) => {
			a({
				swiper: i,
				extendParams: f0(r, l),
				on: i.on.bind(i),
				once: i.once.bind(i),
				off: i.off.bind(i),
				emit: i.emit.bind(i)
			});
		});
		const s = Ce({}, Ta, l);
		return (
			(i.params = Ce({}, s, vl, r)),
			(i.originalParams = Ce({}, i.params)),
			(i.passedParams = Ce({}, r)),
			i.params &&
				i.params.on &&
				Object.keys(i.params.on).forEach((a) => {
					i.on(a, i.params.on[a]);
				}),
			i.params && i.params.onAny && i.onAny(i.params.onAny),
			(i.$ = P),
			Object.assign(i, {
				enabled: i.params.enabled,
				el: n,
				classNames: [],
				slides: P(),
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal() {
					return i.params.direction === 'horizontal';
				},
				isVertical() {
					return i.params.direction === 'vertical';
				},
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				allowSlideNext: i.params.allowSlideNext,
				allowSlidePrev: i.params.allowSlidePrev,
				touchEvents: (function () {
					const o = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
						u = ['pointerdown', 'pointermove', 'pointerup'];
					return (
						(i.touchEventsTouch = {
							start: o[0],
							move: o[1],
							end: o[2],
							cancel: o[3]
						}),
						(i.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
						i.support.touch || !i.params.simulateTouch
							? i.touchEventsTouch
							: i.touchEventsDesktop
					);
				})(),
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: i.params.focusableElements,
					lastClickTime: pr(),
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					isTouchEvent: void 0,
					startMoving: void 0
				},
				allowClick: !0,
				allowTouchMove: i.params.allowTouchMove,
				touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
				imagesToLoad: [],
				imagesLoaded: 0
			}),
			i.emit('_swiper'),
			i.params.init && i.init(),
			i
		);
	}
	enable() {
		const t = this;
		t.enabled ||
			((t.enabled = !0),
			t.params.grabCursor && t.setGrabCursor(),
			t.emit('enable'));
	}
	disable() {
		const t = this;
		t.enabled &&
			((t.enabled = !1),
			t.params.grabCursor && t.unsetGrabCursor(),
			t.emit('disable'));
	}
	setProgress(t, n) {
		const r = this;
		t = Math.min(Math.max(t, 0), 1);
		const i = r.minTranslate(),
			s = (r.maxTranslate() - i) * t + i;
		r.translateTo(s, typeof n > 'u' ? 0 : n),
			r.updateActiveIndex(),
			r.updateSlidesClasses();
	}
	emitContainerClasses() {
		const t = this;
		if (!t.params._emitClasses || !t.el) return;
		const n = t.el.className
			.split(' ')
			.filter(
				(r) =>
					r.indexOf('swiper') === 0 ||
					r.indexOf(t.params.containerModifierClass) === 0
			);
		t.emit('_containerClasses', n.join(' '));
	}
	getSlideClasses(t) {
		const n = this;
		return n.destroyed
			? ''
			: t.className
					.split(' ')
					.filter(
						(r) =>
							r.indexOf('swiper-slide') === 0 ||
							r.indexOf(n.params.slideClass) === 0
					)
					.join(' ');
	}
	emitSlidesClasses() {
		const t = this;
		if (!t.params._emitClasses || !t.el) return;
		const n = [];
		t.slides.each((r) => {
			const i = t.getSlideClasses(r);
			n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i);
		}),
			t.emit('_slideClasses', n);
	}
	slidesPerViewDynamic(t = 'current', n = !1) {
		const r = this,
			{
				params: i,
				slides: l,
				slidesGrid: s,
				slidesSizesGrid: a,
				size: o,
				activeIndex: u
			} = r;
		let d = 1;
		if (i.centeredSlides) {
			let m = l[u].swiperSlideSize,
				f;
			for (let g = u + 1; g < l.length; g += 1)
				l[g] &&
					!f &&
					((m += l[g].swiperSlideSize), (d += 1), m > o && (f = !0));
			for (let g = u - 1; g >= 0; g -= 1)
				l[g] &&
					!f &&
					((m += l[g].swiperSlideSize), (d += 1), m > o && (f = !0));
		} else if (t === 'current')
			for (let m = u + 1; m < l.length; m += 1)
				(n ? s[m] + a[m] - s[u] < o : s[m] - s[u] < o) && (d += 1);
		else for (let m = u - 1; m >= 0; m -= 1) s[u] - s[m] < o && (d += 1);
		return d;
	}
	update() {
		const t = this;
		if (!t || t.destroyed) return;
		const { snapGrid: n, params: r } = t;
		r.breakpoints && t.setBreakpoint(),
			t.updateSize(),
			t.updateSlides(),
			t.updateProgress(),
			t.updateSlidesClasses();
		function i() {
			const s = t.rtlTranslate ? t.translate * -1 : t.translate,
				a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
			t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
		}
		let l;
		t.params.freeMode && t.params.freeMode.enabled
			? (i(), t.params.autoHeight && t.updateAutoHeight())
			: ((t.params.slidesPerView === 'auto' || t.params.slidesPerView > 1) &&
				t.isEnd &&
				!t.params.centeredSlides
					? (l = t.slideTo(t.slides.length - 1, 0, !1, !0))
					: (l = t.slideTo(t.activeIndex, 0, !1, !0)),
				l || i()),
			r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
			t.emit('update');
	}
	changeDirection(t, n = !0) {
		const r = this,
			i = r.params.direction;
		return (
			t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
			t === i ||
				(t !== 'horizontal' && t !== 'vertical') ||
				(r.$el
					.removeClass(`${r.params.containerModifierClass}${i}`)
					.addClass(`${r.params.containerModifierClass}${t}`),
				r.emitContainerClasses(),
				(r.params.direction = t),
				r.slides.each((l) => {
					t === 'vertical' ? (l.style.width = '') : (l.style.height = '');
				}),
				r.emit('changeDirection'),
				n && r.update()),
			r
		);
	}
	changeLanguageDirection(t) {
		const n = this;
		(n.rtl && t === 'rtl') ||
			(!n.rtl && t === 'ltr') ||
			((n.rtl = t === 'rtl'),
			(n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
			n.rtl
				? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
					(n.el.dir = 'rtl'))
				: (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
					(n.el.dir = 'ltr')),
			n.update());
	}
	mount(t) {
		const n = this;
		if (n.mounted) return !0;
		const r = P(t || n.params.el);
		if (((t = r[0]), !t)) return !1;
		t.swiper = n;
		const i = () =>
			`.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`;
		let s = (() => {
			if (t && t.shadowRoot && t.shadowRoot.querySelector) {
				const a = P(t.shadowRoot.querySelector(i()));
				return (a.children = (o) => r.children(o)), a;
			}
			return r.children ? r.children(i()) : P(r).children(i());
		})();
		if (s.length === 0 && n.params.createElements) {
			const o = Le().createElement('div');
			(s = P(o)),
				(o.className = n.params.wrapperClass),
				r.append(o),
				r.children(`.${n.params.slideClass}`).each((u) => {
					s.append(u);
				});
		}
		return (
			Object.assign(n, {
				$el: r,
				el: t,
				$wrapperEl: s,
				wrapperEl: s[0],
				mounted: !0,
				rtl: t.dir.toLowerCase() === 'rtl' || r.css('direction') === 'rtl',
				rtlTranslate:
					n.params.direction === 'horizontal' &&
					(t.dir.toLowerCase() === 'rtl' || r.css('direction') === 'rtl'),
				wrongRTL: s.css('display') === '-webkit-box'
			}),
			!0
		);
	}
	init(t) {
		const n = this;
		return (
			n.initialized ||
				n.mount(t) === !1 ||
				(n.emit('beforeInit'),
				n.params.breakpoints && n.setBreakpoint(),
				n.addClasses(),
				n.params.loop && n.loopCreate(),
				n.updateSize(),
				n.updateSlides(),
				n.params.watchOverflow && n.checkOverflow(),
				n.params.grabCursor && n.enabled && n.setGrabCursor(),
				n.params.preloadImages && n.preloadImages(),
				n.params.loop
					? n.slideTo(
							n.params.initialSlide + n.loopedSlides,
							0,
							n.params.runCallbacksOnInit,
							!1,
							!0
						)
					: n.slideTo(
							n.params.initialSlide,
							0,
							n.params.runCallbacksOnInit,
							!1,
							!0
						),
				n.attachEvents(),
				(n.initialized = !0),
				n.emit('init'),
				n.emit('afterInit')),
			n
		);
	}
	destroy(t = !0, n = !0) {
		const r = this,
			{ params: i, $el: l, $wrapperEl: s, slides: a } = r;
		return (
			typeof r.params > 'u' ||
				r.destroyed ||
				(r.emit('beforeDestroy'),
				(r.initialized = !1),
				r.detachEvents(),
				i.loop && r.loopDestroy(),
				n &&
					(r.removeClasses(),
					l.removeAttr('style'),
					s.removeAttr('style'),
					a &&
						a.length &&
						a
							.removeClass(
								[
									i.slideVisibleClass,
									i.slideActiveClass,
									i.slideNextClass,
									i.slidePrevClass
								].join(' ')
							)
							.removeAttr('style')
							.removeAttr('data-swiper-slide-index')),
				r.emit('destroy'),
				Object.keys(r.eventsListeners).forEach((o) => {
					r.off(o);
				}),
				t !== !1 && ((r.$el[0].swiper = null), Zh(r)),
				(r.destroyed = !0)),
			null
		);
	}
	static extendDefaults(t) {
		Ce(vl, t);
	}
	static get extendedDefaults() {
		return vl;
	}
	static get defaults() {
		return Ta;
	}
	static installModule(t) {
		Ke.prototype.__modules__ || (Ke.prototype.__modules__ = []);
		const n = Ke.prototype.__modules__;
		typeof t == 'function' && n.indexOf(t) < 0 && n.push(t);
	}
	static use(t) {
		return Array.isArray(t)
			? (t.forEach((n) => Ke.installModule(n)), Ke)
			: (Ke.installModule(t), Ke);
	}
};
Object.keys(ml).forEach((e) => {
	Object.keys(ml[e]).forEach((t) => {
		kn.prototype[t] = ml[e][t];
	});
});
kn.use([sm, om]);
function Yt(e) {
	return (
		typeof e == 'object' &&
		e !== null &&
		e.constructor &&
		Object.prototype.toString.call(e).slice(8, -1) === 'Object'
	);
}
function mt(e, t) {
	const n = ['__proto__', 'constructor', 'prototype'];
	Object.keys(t)
		.filter((r) => n.indexOf(r) < 0)
		.forEach((r) => {
			typeof e[r] > 'u'
				? (e[r] = t[r])
				: Yt(t[r]) && Yt(e[r]) && Object.keys(t[r]).length > 0
					? t[r].__swiper__
						? (e[r] = t[r])
						: mt(e[r], t[r])
					: (e[r] = t[r]);
		});
}
function Xc(e = {}) {
	return (
		e.navigation &&
		typeof e.navigation.nextEl > 'u' &&
		typeof e.navigation.prevEl > 'u'
	);
}
function Kc(e = {}) {
	return e.pagination && typeof e.pagination.el > 'u';
}
function Zc(e = {}) {
	return e.scrollbar && typeof e.scrollbar.el > 'u';
}
function bc(e = '') {
	const t = e
			.split(' ')
			.map((r) => r.trim())
			.filter((r) => !!r),
		n = [];
	return (
		t.forEach((r) => {
			n.indexOf(r) < 0 && n.push(r);
		}),
		n.join(' ')
	);
}
const Jc = [
	'modules',
	'init',
	'_direction',
	'touchEventsTarget',
	'initialSlide',
	'_speed',
	'cssMode',
	'updateOnWindowResize',
	'resizeObserver',
	'nested',
	'focusableElements',
	'_enabled',
	'_width',
	'_height',
	'preventInteractionOnTransition',
	'userAgent',
	'url',
	'_edgeSwipeDetection',
	'_edgeSwipeThreshold',
	'_freeMode',
	'_autoHeight',
	'setWrapperSize',
	'virtualTranslate',
	'_effect',
	'breakpoints',
	'_spaceBetween',
	'_slidesPerView',
	'maxBackfaceHiddenSlides',
	'_grid',
	'_slidesPerGroup',
	'_slidesPerGroupSkip',
	'_slidesPerGroupAuto',
	'_centeredSlides',
	'_centeredSlidesBounds',
	'_slidesOffsetBefore',
	'_slidesOffsetAfter',
	'normalizeSlideIndex',
	'_centerInsufficientSlides',
	'_watchOverflow',
	'roundLengths',
	'touchRatio',
	'touchAngle',
	'simulateTouch',
	'_shortSwipes',
	'_longSwipes',
	'longSwipesRatio',
	'longSwipesMs',
	'_followFinger',
	'allowTouchMove',
	'_threshold',
	'touchMoveStopPropagation',
	'touchStartPreventDefault',
	'touchStartForcePreventDefault',
	'touchReleaseOnEdges',
	'uniqueNavElements',
	'_resistance',
	'_resistanceRatio',
	'_watchSlidesProgress',
	'_grabCursor',
	'preventClicks',
	'preventClicksPropagation',
	'_slideToClickedSlide',
	'_preloadImages',
	'updateOnImagesReady',
	'_loop',
	'_loopAdditionalSlides',
	'_loopedSlides',
	'_loopedSlidesLimit',
	'_loopFillGroupWithBlank',
	'loopPreventsSlide',
	'_rewind',
	'_allowSlidePrev',
	'_allowSlideNext',
	'_swipeHandler',
	'_noSwiping',
	'noSwipingClass',
	'noSwipingSelector',
	'passiveListeners',
	'containerModifierClass',
	'slideClass',
	'slideBlankClass',
	'slideActiveClass',
	'slideDuplicateActiveClass',
	'slideVisibleClass',
	'slideDuplicateClass',
	'slideNextClass',
	'slideDuplicateNextClass',
	'slidePrevClass',
	'slideDuplicatePrevClass',
	'wrapperClass',
	'runCallbacksOnInit',
	'observer',
	'observeParents',
	'observeSlideChildren',
	'a11y',
	'_autoplay',
	'_controller',
	'coverflowEffect',
	'cubeEffect',
	'fadeEffect',
	'flipEffect',
	'creativeEffect',
	'cardsEffect',
	'hashNavigation',
	'history',
	'keyboard',
	'lazy',
	'mousewheel',
	'_navigation',
	'_pagination',
	'parallax',
	'_scrollbar',
	'_thumbs',
	'virtual',
	'zoom'
];
function p0(e = {}, t = !0) {
	const n = { on: {} },
		r = {},
		i = {};
	mt(n, kn.defaults),
		mt(n, kn.extendedDefaults),
		(n._emitClasses = !0),
		(n.init = !1);
	const l = {},
		s = Jc.map((o) => o.replace(/_/, '')),
		a = Object.assign({}, e);
	return (
		Object.keys(a).forEach((o) => {
			typeof e[o] > 'u' ||
				(s.indexOf(o) >= 0
					? Yt(e[o])
						? ((n[o] = {}), (i[o] = {}), mt(n[o], e[o]), mt(i[o], e[o]))
						: ((n[o] = e[o]), (i[o] = e[o]))
					: o.search(/on[A-Z]/) === 0 && typeof e[o] == 'function'
						? t
							? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
							: (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
						: (l[o] = e[o]));
		}),
		['navigation', 'pagination', 'scrollbar'].forEach((o) => {
			n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
		}),
		{ params: n, passedParams: i, rest: l, events: r }
	);
}
function h0(
	{ el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
	s
) {
	Xc(s) &&
		t &&
		n &&
		((l.params.navigation.nextEl = t),
		(l.originalParams.navigation.nextEl = t),
		(l.params.navigation.prevEl = n),
		(l.originalParams.navigation.prevEl = n)),
		Kc(s) &&
			r &&
			((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
		Zc(s) &&
			i &&
			((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
		l.init(e);
}
const ed = (e, t) => {
	let n = t.slidesPerView;
	if (t.breakpoints) {
		const i = kn.prototype.getBreakpoint(t.breakpoints),
			l = i in t.breakpoints ? t.breakpoints[i] : void 0;
		l && l.slidesPerView && (n = l.slidesPerView);
	}
	let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
	return (
		(r += t.loopAdditionalSlides),
		r > e.length && t.loopedSlidesLimit && (r = e.length),
		r
	);
};
function m0(e, t, n) {
	const r = t.map((o, u) =>
		B.cloneElement(o, { swiper: e, 'data-swiper-slide-index': u })
	);
	function i(o, u, d) {
		return B.cloneElement(o, {
			key: `${o.key}-duplicate-${u}-${d}`,
			className: `${o.props.className || ''} ${n.slideDuplicateClass}`
		});
	}
	if (n.loopFillGroupWithBlank) {
		const o = n.slidesPerGroup - (r.length % n.slidesPerGroup);
		if (o !== n.slidesPerGroup)
			for (let u = 0; u < o; u += 1) {
				const d = B.createElement('div', {
					className: `${n.slideClass} ${n.slideBlankClass}`
				});
				r.push(d);
			}
	}
	n.slidesPerView === 'auto' && !n.loopedSlides && (n.loopedSlides = r.length);
	const l = ed(r, n),
		s = [],
		a = [];
	for (let o = 0; o < l; o += 1) {
		const u = o - Math.floor(o / r.length) * r.length;
		a.push(i(r[u], o, 'append')),
			s.unshift(i(r[r.length - u - 1], o, 'prepend'));
	}
	return e && (e.loopedSlides = l), [...s, ...r, ...a];
}
function v0(e, t, n, r, i) {
	const l = [];
	if (!t) return l;
	const s = (o) => {
		l.indexOf(o) < 0 && l.push(o);
	};
	if (n && r) {
		const o = r.map(i),
			u = n.map(i);
		o.join('') !== u.join('') && s('children'),
			r.length !== n.length && s('children');
	}
	return (
		Jc.filter((o) => o[0] === '_')
			.map((o) => o.replace(/_/, ''))
			.forEach((o) => {
				if (o in e && o in t)
					if (Yt(e[o]) && Yt(t[o])) {
						const u = Object.keys(e[o]),
							d = Object.keys(t[o]);
						u.length !== d.length
							? s(o)
							: (u.forEach((m) => {
									e[o][m] !== t[o][m] && s(o);
								}),
								d.forEach((m) => {
									e[o][m] !== t[o][m] && s(o);
								}));
					} else e[o] !== t[o] && s(o);
			}),
		l
	);
}
function td(e) {
	return (
		e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide')
	);
}
function nd(e) {
	const t = [];
	return (
		B.Children.toArray(e).forEach((n) => {
			td(n)
				? t.push(n)
				: n.props &&
					n.props.children &&
					nd(n.props.children).forEach((r) => t.push(r));
		}),
		t
	);
}
function g0(e) {
	const t = [],
		n = {
			'container-start': [],
			'container-end': [],
			'wrapper-start': [],
			'wrapper-end': []
		};
	return (
		B.Children.toArray(e).forEach((r) => {
			if (td(r)) t.push(r);
			else if (r.props && r.props.slot && n[r.props.slot])
				n[r.props.slot].push(r);
			else if (r.props && r.props.children) {
				const i = nd(r.props.children);
				i.length > 0 ? i.forEach((l) => t.push(l)) : n['container-end'].push(r);
			} else n['container-end'].push(r);
		}),
		{ slides: t, slots: n }
	);
}
function y0({
	swiper: e,
	slides: t,
	passedParams: n,
	changedParams: r,
	nextEl: i,
	prevEl: l,
	scrollbarEl: s,
	paginationEl: a
}) {
	const o = r.filter((S) => S !== 'children' && S !== 'direction'),
		{
			params: u,
			pagination: d,
			navigation: m,
			scrollbar: f,
			virtual: g,
			thumbs: w
		} = e;
	let x, k, p, h, v;
	r.includes('thumbs') &&
		n.thumbs &&
		n.thumbs.swiper &&
		u.thumbs &&
		!u.thumbs.swiper &&
		(x = !0),
		r.includes('controller') &&
			n.controller &&
			n.controller.control &&
			u.controller &&
			!u.controller.control &&
			(k = !0),
		r.includes('pagination') &&
			n.pagination &&
			(n.pagination.el || a) &&
			(u.pagination || u.pagination === !1) &&
			d &&
			!d.el &&
			(p = !0),
		r.includes('scrollbar') &&
			n.scrollbar &&
			(n.scrollbar.el || s) &&
			(u.scrollbar || u.scrollbar === !1) &&
			f &&
			!f.el &&
			(h = !0),
		r.includes('navigation') &&
			n.navigation &&
			(n.navigation.prevEl || l) &&
			(n.navigation.nextEl || i) &&
			(u.navigation || u.navigation === !1) &&
			m &&
			!m.prevEl &&
			!m.nextEl &&
			(v = !0);
	const y = (S) => {
		e[S] &&
			(e[S].destroy(),
			S === 'navigation'
				? ((u[S].prevEl = void 0),
					(u[S].nextEl = void 0),
					(e[S].prevEl = void 0),
					(e[S].nextEl = void 0))
				: ((u[S].el = void 0), (e[S].el = void 0)));
	};
	o.forEach((S) => {
		if (Yt(u[S]) && Yt(n[S])) mt(u[S], n[S]);
		else {
			const T = n[S];
			(T === !0 || T === !1) &&
			(S === 'navigation' || S === 'pagination' || S === 'scrollbar')
				? T === !1 && y(S)
				: (u[S] = n[S]);
		}
	}),
		o.includes('controller') &&
			!k &&
			e.controller &&
			e.controller.control &&
			u.controller &&
			u.controller.control &&
			(e.controller.control = u.controller.control),
		r.includes('children') && t && g && u.virtual.enabled
			? ((g.slides = t), g.update(!0))
			: r.includes('children') &&
				e.lazy &&
				e.params.lazy.enabled &&
				e.lazy.load(),
		x && w.init() && w.update(!0),
		k && (e.controller.control = u.controller.control),
		p && (a && (u.pagination.el = a), d.init(), d.render(), d.update()),
		h &&
			(s && (u.scrollbar.el = s), f.init(), f.updateSize(), f.setTranslate()),
		v &&
			(i && (u.navigation.nextEl = i),
			l && (u.navigation.prevEl = l),
			m.init(),
			m.update()),
		r.includes('allowSlideNext') && (e.allowSlideNext = n.allowSlideNext),
		r.includes('allowSlidePrev') && (e.allowSlidePrev = n.allowSlidePrev),
		r.includes('direction') && e.changeDirection(n.direction, !1),
		e.update();
}
function w0(e, t, n) {
	if (!n) return null;
	const r = e.isHorizontal()
		? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
		: { top: `${n.offset}px` };
	return t
		.filter((i, l) => l >= n.from && l <= n.to)
		.map((i) => B.cloneElement(i, { swiper: e, style: r }));
}
const x0 = (e) => {
	!e ||
		e.destroyed ||
		!e.params.virtual ||
		(e.params.virtual && !e.params.virtual.enabled) ||
		(e.updateSlides(),
		e.updateProgress(),
		e.updateSlidesClasses(),
		e.lazy && e.params.lazy.enabled && e.lazy.load(),
		e.parallax &&
			e.params.parallax &&
			e.params.parallax.enabled &&
			e.parallax.setTranslate());
};
function Xn(e, t) {
	return typeof window > 'u' ? D.useEffect(e, t) : D.useLayoutEffect(e, t);
}
const S0 = D.createContext(null),
	_0 = D.createContext(null);
function fs() {
	return (
		(fs = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		fs.apply(this, arguments)
	);
}
const C0 = D.forwardRef(function (e, t) {
	let {
			className: n,
			tag: r = 'div',
			wrapperTag: i = 'div',
			children: l,
			onSwiper: s,
			...a
		} = e === void 0 ? {} : e,
		o = !1;
	const [u, d] = D.useState('swiper'),
		[m, f] = D.useState(null),
		[g, w] = D.useState(!1),
		x = D.useRef(!1),
		k = D.useRef(null),
		p = D.useRef(null),
		h = D.useRef(null),
		v = D.useRef(null),
		y = D.useRef(null),
		S = D.useRef(null),
		T = D.useRef(null),
		L = D.useRef(null),
		{ params: C, passedParams: F, rest: E, events: z } = p0(a),
		{ slides: I, slots: te } = g0(l),
		Xe = () => {
			w(!g);
		};
	Object.assign(C.on, {
		_containerClasses(M, O) {
			d(O);
		}
	});
	const Pt = () => {
		if (
			(Object.assign(C.on, z),
			(o = !0),
			(p.current = new kn(C)),
			(p.current.loopCreate = () => {}),
			(p.current.loopDestroy = () => {}),
			C.loop && (p.current.loopedSlides = ed(I, C)),
			p.current.virtual && p.current.params.virtual.enabled)
		) {
			p.current.virtual.slides = I;
			const M = {
				cache: !1,
				slides: I,
				renderExternal: f,
				renderExternalUpdate: !1
			};
			mt(p.current.params.virtual, M), mt(p.current.originalParams.virtual, M);
		}
	};
	k.current || Pt(), p.current && p.current.on('_beforeBreakpoint', Xe);
	const Mt = () => {
			o ||
				!z ||
				!p.current ||
				Object.keys(z).forEach((M) => {
					p.current.on(M, z[M]);
				});
		},
		zt = () => {
			!z ||
				!p.current ||
				Object.keys(z).forEach((M) => {
					p.current.off(M, z[M]);
				});
		};
	D.useEffect(() => () => {
		p.current && p.current.off('_beforeBreakpoint', Xe);
	}),
		D.useEffect(() => {
			!x.current &&
				p.current &&
				(p.current.emitSlidesClasses(), (x.current = !0));
		}),
		Xn(() => {
			if ((t && (t.current = k.current), !!k.current))
				return (
					p.current.destroyed && Pt(),
					h0(
						{
							el: k.current,
							nextEl: y.current,
							prevEl: S.current,
							paginationEl: T.current,
							scrollbarEl: L.current,
							swiper: p.current
						},
						C
					),
					s && s(p.current),
					() => {
						p.current && !p.current.destroyed && p.current.destroy(!0, !1);
					}
				);
		}, []),
		Xn(() => {
			Mt();
			const M = v0(F, h.current, I, v.current, (O) => O.key);
			return (
				(h.current = F),
				(v.current = I),
				M.length &&
					p.current &&
					!p.current.destroyed &&
					y0({
						swiper: p.current,
						slides: I,
						passedParams: F,
						changedParams: M,
						nextEl: y.current,
						prevEl: S.current,
						scrollbarEl: L.current,
						paginationEl: T.current
					}),
				() => {
					zt();
				}
			);
		}),
		Xn(() => {
			x0(p.current);
		}, [m]);
	function N() {
		return C.virtual
			? w0(p.current, I, m)
			: !C.loop || (p.current && p.current.destroyed)
				? I.map((M) => B.cloneElement(M, { swiper: p.current }))
				: m0(p.current, I, C);
	}
	return B.createElement(
		r,
		fs({ ref: k, className: bc(`${u}${n ? ` ${n}` : ''}`) }, E),
		B.createElement(
			_0.Provider,
			{ value: p.current },
			te['container-start'],
			B.createElement(
				i,
				{ className: 'swiper-wrapper' },
				te['wrapper-start'],
				N(),
				te['wrapper-end']
			),
			Xc(C) &&
				B.createElement(
					B.Fragment,
					null,
					B.createElement('div', { ref: S, className: 'swiper-button-prev' }),
					B.createElement('div', { ref: y, className: 'swiper-button-next' })
				),
			Zc(C) &&
				B.createElement('div', { ref: L, className: 'swiper-scrollbar' }),
			Kc(C) &&
				B.createElement('div', { ref: T, className: 'swiper-pagination' }),
			te['container-end']
		)
	);
});
C0.displayName = 'Swiper';
function ps() {
	return (
		(ps = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
				}),
		ps.apply(this, arguments)
	);
}
const k0 = D.forwardRef(function (e, t) {
	let {
		tag: n = 'div',
		children: r,
		className: i = '',
		swiper: l,
		zoom: s,
		virtualIndex: a,
		...o
	} = e === void 0 ? {} : e;
	const u = D.useRef(null),
		[d, m] = D.useState('swiper-slide');
	function f(x, k, p) {
		k === u.current && m(p);
	}
	Xn(() => {
		if ((t && (t.current = u.current), !(!u.current || !l))) {
			if (l.destroyed) {
				d !== 'swiper-slide' && m('swiper-slide');
				return;
			}
			return (
				l.on('_slideClass', f),
				() => {
					l && l.off('_slideClass', f);
				}
			);
		}
	}),
		Xn(() => {
			l && u.current && !l.destroyed && m(l.getSlideClasses(u.current));
		}, [l]);
	const g = {
			isActive:
				d.indexOf('swiper-slide-active') >= 0 ||
				d.indexOf('swiper-slide-duplicate-active') >= 0,
			isVisible: d.indexOf('swiper-slide-visible') >= 0,
			isDuplicate: d.indexOf('swiper-slide-duplicate') >= 0,
			isPrev:
				d.indexOf('swiper-slide-prev') >= 0 ||
				d.indexOf('swiper-slide-duplicate-prev') >= 0,
			isNext:
				d.indexOf('swiper-slide-next') >= 0 ||
				d.indexOf('swiper-slide-duplicate-next') >= 0
		},
		w = () => (typeof r == 'function' ? r(g) : r);
	return B.createElement(
		n,
		ps(
			{
				ref: u,
				className: bc(`${d}${i ? ` ${i}` : ''}`),
				'data-swiper-slide-index': a
			},
			o
		),
		B.createElement(
			S0.Provider,
			{ value: g },
			s
				? B.createElement(
						'div',
						{
							className: 'swiper-zoom-container',
							'data-swiper-zoom': typeof s == 'number' ? s : void 0
						},
						w()
					)
				: w()
		)
	);
});
k0.displayName = 'SwiperSlide';
const E0 = 'B5bzISzoDHudUfdQ5WxDhodGQL4DjYEzurVCpVo8',
	T0 = ({ examples: e, answers: t, initialMessage: n }) => {
		const [r, i] = D.useState([{ id: '1', type: 'bot', text: n }]),
			[l, s] = D.useState(''),
			[a, o] = D.useState(!1),
			[u, d] = D.useState(!0),
			m = D.useRef(null);
		async function f(g) {
			if ((g.preventDefault(), a)) return;
			o(!0),
				i((x) => x.concat({ id: String(Date.now()), type: 'user', text: l })),
				s('');
			const { classifications: w } = await fetch(
				'https://api.cohere.ai/v1/classify',
				{
					method: 'POST',
					headers: {
						Authorization: `BEARER ${E0}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ model: 'large', inputs: [l], examples: e })
				}
			).then((x) => x.json());
			i((x) =>
				x.concat({
					id: String(Date.now()),
					type: 'bot',
					text: t[w[0].prediction.trim()] || t.info
				})
			),
				o(!1);
		}
		return (
			D.useEffect(() => {
				var g;
				(g = m.current) == null || g.scrollTo(0, m.current.scrollHeight);
			}, [r, u]),
			Bc.createPortal(
				c.jsx('div', {
					className: 'out-body',
					children: u
						? c.jsx('button', {
								className: 'collapse-button',
								onClick: () => d(!1),
								children: '?'
							})
						: c.jsxs('div', {
								className: 'button-relative',
								children: [
									c.jsx('button', {
										className: 'collapse-button',
										onClick: () => d(!0),
										children: '×'
									}),
									c.jsxs('div', {
										className: 'chat-border',
										children: [
											c.jsx('div', {
												ref: m,
												className: 'chat-container',
												children: r.map((g) =>
													c.jsx(
														'div',
														{
															className: `message-general
							${g.type === 'bot' ? 'bot-message' : 'user-message'}`,
															children: g.text
														},
														g.id
													)
												)
											}),
											c.jsxs('form', {
												className: 'chat-form',
												onSubmit: f,
												children: [
													c.jsx('input', {
														value: l,
														onChange: (g) => {
															s(g.target.value);
														},
														placeholder: 'Quien sos?',
														className: 'chat-placeholder',
														type: 'text',
														name: 'question'
													}),
													c.jsx('button', {
														disabled: a,
														className: `chat-submit-button ${a ? 'bg-blue-300' : 'bg-blue-500'}`,
														type: 'submit',
														children: 'Enviar'
													})
												]
											})
										]
									})
								]
							})
				}),
				document.getElementById('chat')
			)
		);
	},
	N0 = {
		default: c.jsx('p', {
			children: 'No entendi, podrias reformular tu mensaje?'
		}),
		intro: c.jsx('p', {
			children:
				'Soy Juan Manuel Garcia (A.K.A Fullsnacker), soy desarrollador FullStack. Trabajo con el stack MERN hace 4 años y con js hace unos 7.'
		}),
		info: c.jsx('p', {
			children:
				' Tengo 37 años, vivo en Ciudad Autonoma de Buenos Aires, Argentina.'
		}),
		contact: c.jsxs('p', {
			children: [
				'Puedes contactarte conmigo por:',
				c.jsxs('ul', {
					children: [
						c.jsx('li', {
							children: c.jsx('a', {
								className: 'underline',
								href: 'https://www.linkedin.com/in/fullsnacker',
								target: '_blank',
								rel: 'noreferrer',
								children: 'Linkedin'
							})
						}),
						c.jsx('li', {
							children: c.jsx('a', {
								className: 'underline',
								href: 'https://www.instagram.com/fullsnacker',
								target: '_blank',
								rel: 'noreferrer',
								children: 'Instagram'
							})
						}),
						c.jsx('li', {
							children: c.jsx('a', {
								className: 'underline',
								href: 'https://twitter.com/fullsnacker',
								target: '_blank',
								rel: 'noreferrer',
								children: 'X (Antiguamente Twitter)'
							})
						})
					]
				}),
				c.jsx('br', {}),
				'O ingresando a mi',
				' ',
				c.jsx('a', {
					className: 'underline',
					href: 'https://fullsnacker.github.io/',
					target: '_blank',
					rel: 'noreferrer',
					children: 'Sitio'
				})
			]
		})
	},
	j0 = [
		{ text: 'Tengo un trabajo para vos', label: ' contact' },
		{ text: 'Por donde te puedo contactar?', label: ' contact' },
		{ text: 'Estas buscando trabajo?', label: ' contact' },
		{ text: 'Estas escuchando propuestas?', label: ' contact' },
		{ text: 'Podemos coordinar una reunion?', label: ' contact' },
		{ text: 'Cual es tu expectativa salarial?', label: ' contact' },
		{ text: 'Te interesa cambiar de trabajo?', label: ' contact' },
		{ text: 'Como es tu github?', label: ' contact' },
		{ text: 'Como es tu instagram?', label: ' contact' },
		{ text: 'Como es tu sitio web?', label: ' contact' },
		{ text: 'Cuales son tus redes?', label: ' contact' },
		{ text: 'Cuales son tus pronombres?', label: ' info' },
		{ text: 'Tenes hobbys?', label: ' info' },
		{ text: 'contame un chiste', label: ' info' },
		{ text: 'Quien es segundo?', label: ' info' },
		{ text: 'Arreglas impresoras', label: ' info' },
		{ text: 'Tengo una duda', label: ' info' },
		{ text: 'Necesito solucionar algo', label: ' info' },
		{ text: 'Tenes tutoriales?', label: ' info' },
		{ text: 'Como hiciste este chat?', label: ' info' },
		{ text: 'Cual es tu personaje de ficcion favorito?', label: ' info' },
		{ text: 'dc o marvel?', label: ' info' },
		{ text: 'Hola', label: ' intro' },
		{ text: 'Como estas?', label: ' intro' },
		{ text: 'Quien sos?', label: ' intro' },
		{ text: 'Con que tecnologias trabajas?', label: ' intro' },
		{ text: 'En donde estudiaste?', label: ' intro' },
		{ text: 'Donde trabajas?', label: ' intro' },
		{ text: 'Con que tecnologias tenes experiencia?', label: ' intro' },
		{ text: 'Sabes ingles?', label: ' intro' },
		{ text: 'En que horario estas disponible?', label: ' intro' },
		{ text: 'Cuanto tiempo de experiencia tenes?', label: ' intro' }
	];
function L0() {
	const e = N0,
		t = j0;
	return c.jsxs(c.Fragment, {
		children: [
			c.jsx(Wp, {}),
			c.jsxs('main', {
				className: 'main',
				children: [
					c.jsx(qp, {}),
					c.jsx(Mp, {}),
					c.jsx(ch, {}),
					c.jsx(lh, {}),
					c.jsx(ih, {}),
					c.jsx($p, {}),
					c.jsx(T0, {
						answers: e,
						examples: t,
						initialMessage:
							'Hola! Soy Snachat. Hazme consultas acerca de Fullsnacker'
					})
				]
			}),
			c.jsx(Hp, {}),
			c.jsx(sh, {})
		]
	});
}
gl.createRoot(document.getElementById('root')).render(
	c.jsx(B.StrictMode, { children: c.jsx(L0, {}) })
);
