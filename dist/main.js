!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t,e){r(2,arguments);var n=a(t),o=a(e),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}function i(t,e){r(2,arguments);var n=a(t),o=a(e),i=n.getFullYear()-o.getFullYear(),s=n.getMonth()-o.getMonth();return 12*i+s}function s(t,e){r(2,arguments);var n=a(t),s=a(e),u=o(n,s),c=Math.abs(i(n,s));n.setMonth(n.getMonth()-u*c);var l=o(n,s)===-u,d=u*(c-l);return 0===d?0:d}function u(t,e){r(2,arguments);var n=a(t),o=a(e);return n.getTime()-o.getTime()}function c(t,e){r(2,arguments);var n=u(t,e)/1e3;return n>0?Math.floor(n):Math.ceil(n)}n.r(e);var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function d(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var f={date:d({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:d({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:d({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function h(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function g(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],s=r.match(i);if(!s)return null;var u,c=s[0],l=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(l)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(l,(function(t){return t.test(c)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(l,(function(t){return t.test(c)})),u=t.valueCallback?t.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(c.length)}}}var w,y={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof l[t]?l[t]:1===e?l[t].one:l[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:f,formatRelative:function(t,e,n,r){return m[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:h({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:h({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:h({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(w={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(w.matchPattern);if(!a)return null;var o=a[0],i=n.match(w.parsePattern);if(!i)return null;var s=w.valueCallback?w.valueCallback(i[0]):i[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(o.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function v(t){return p({},t)}function b(t){return t.getTime()%6e4}function T(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+b(e))%6e4:b(e))}function k(t,e,n){r(2,arguments);var i=n||{},u=i.locale||y;if(!u.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=o(t,e);if(isNaN(l))throw new RangeError("Invalid time value");var d,f,m=v(i);m.addSuffix=Boolean(i.addSuffix),m.comparison=l,l>0?(d=a(e),f=a(t)):(d=a(t),f=a(e));var h,g=c(f,d),w=(T(f)-T(d))/1e3,p=Math.round((g-w)/60);if(p<2)return i.includeSeconds?g<5?u.formatDistance("lessThanXSeconds",5,m):g<10?u.formatDistance("lessThanXSeconds",10,m):g<20?u.formatDistance("lessThanXSeconds",20,m):g<40?u.formatDistance("halfAMinute",null,m):g<60?u.formatDistance("lessThanXMinutes",1,m):u.formatDistance("xMinutes",1,m):0===p?u.formatDistance("lessThanXMinutes",1,m):u.formatDistance("xMinutes",p,m);if(p<45)return u.formatDistance("xMinutes",p,m);if(p<90)return u.formatDistance("aboutXHours",1,m);if(p<1440){var b=Math.round(p/60);return u.formatDistance("aboutXHours",b,m)}if(p<2520)return u.formatDistance("xDays",1,m);if(p<43200){var k=Math.round(p/1440);return u.formatDistance("xDays",k,m)}if(p<86400)return h=Math.round(p/43200),u.formatDistance("aboutXMonths",h,m);if((h=s(f,d))<12){var C=Math.round(p/43200);return u.formatDistance("xMonths",C,m)}var x=h%12,D=Math.floor(h/12);return x<3?u.formatDistance("aboutXYears",D,m):x<9?u.formatDistance("overXYears",D,m):u.formatDistance("almostXYears",D+1,m)}function C(t,e){return r(1,arguments),k(t,Date.now(),e)}function x(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function D(t,e){r(2,arguments);var n=a(t).getTime(),o=x(e);return new Date(n+o)}function M(t,e){r(2,arguments);var n=x(e);return D(t,-n)}function S(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function U(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var E={p:U,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return S(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",S(a,e)).replace("{{time}}",U(o,e))}},P=["D","DD"],N=["YY","YYYY"];function I(t){return-1!==P.indexOf(t)}function Y(t){return-1!==N.indexOf(t)}function q(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}function O(t,e){r(1,arguments);var n=e||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:x(i),u=null==n.weekStartsOn?s:x(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),l=c.getUTCDay(),d=(l<u?7:0)+l-u;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function j(t,e){r(1,arguments);var n=a(t,e),o=n.getUTCFullYear(),i=e||{},s=i.locale,u=s&&s.options&&s.options.firstWeekContainsDate,c=null==u?1:x(u),l=null==i.firstWeekContainsDate?c:x(i.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(o+1,0,l),d.setUTCHours(0,0,0,0);var f=O(d,e),m=new Date(0);m.setUTCFullYear(o,0,l),m.setUTCHours(0,0,0,0);var h=O(m,e);return n.getTime()>=f.getTime()?o+1:n.getTime()>=h.getTime()?o:o-1}function H(t,e,n){r(2,arguments);var o=n||{},i=o.locale,s=i&&i.options&&i.options.weekStartsOn,u=null==s?0:x(s),c=null==o.weekStartsOn?u:x(o.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=a(t),d=x(e),f=l.getUTCDay(),m=d%7,h=(m+7)%7,g=(h<c?7:0)+d-f;return l.setUTCDate(l.getUTCDate()+g),l}function W(t){r(1,arguments);var e=1,n=a(t),o=n.getUTCDay(),i=(o<e?7:0)+o-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function B(t){r(1,arguments);var e=a(t),n=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var i=W(o),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var u=W(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function X(t){r(1,arguments);var e=B(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=W(n);return a}function L(t){r(1,arguments);var e=a(t),n=W(e).getTime()-X(e).getTime();return Math.round(n/6048e5)+1}function Q(t,e){r(1,arguments);var n=e||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:x(o),s=null==n.firstWeekContainsDate?i:x(n.firstWeekContainsDate),u=j(t,e),c=new Date(0);c.setUTCFullYear(u,0,s),c.setUTCHours(0,0,0,0);var l=O(c,e);return l}function F(t,e){r(1,arguments);var n=a(t),o=O(n,e).getTime()-Q(n,e).getTime();return Math.round(o/6048e5)+1}var R=/^(1[0-2]|0?\d)/,J=/^(3[0-1]|[0-2]?\d)/,A=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,G=/^(5[0-3]|[0-4]?\d)/,K=/^(2[0-3]|[0-1]?\d)/,z=/^(2[0-4]|[0-1]?\d)/,Z=/^(1[0-1]|0?\d)/,_=/^(1[0-2]|0?\d)/,V=/^[0-5]?\d/,$=/^[0-5]?\d/,tt=/^\d/,et=/^\d{1,2}/,nt=/^\d{1,3}/,rt=/^\d{1,4}/,at=/^-?\d+/,ot=/^-?\d/,it=/^-?\d{1,2}/,st=/^-?\d{1,3}/,ut=/^-?\d{1,4}/,ct=/^([+-])(\d{2})(\d{2})?|Z/,lt=/^([+-])(\d{2})(\d{2})|Z/,dt=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,ft=/^([+-])(\d{2}):(\d{2})|Z/,mt=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function ht(t,e,n){var r=e.match(t);if(!r)return null;var a=parseInt(r[0],10);return{value:n?n(a):a,rest:e.slice(r[0].length)}}function gt(t,e){var n=e.match(t);return n?"Z"===n[0]?{value:0,rest:e.slice(1)}:{value:("+"===n[1]?1:-1)*(36e5*(n[2]?parseInt(n[2],10):0)+6e4*(n[3]?parseInt(n[3],10):0)+1e3*(n[5]?parseInt(n[5],10):0)),rest:e.slice(n[0].length)}:null}function wt(t,e){return ht(at,t,e)}function yt(t,e,n){switch(t){case 1:return ht(tt,e,n);case 2:return ht(et,e,n);case 3:return ht(nt,e,n);case 4:return ht(rt,e,n);default:return ht(new RegExp("^\\d{1,"+t+"}"),e,n)}}function pt(t,e,n){switch(t){case 1:return ht(ot,e,n);case 2:return ht(it,e,n);case 3:return ht(st,e,n);case 4:return ht(ut,e,n);default:return ht(new RegExp("^-?\\d{1,"+t+"}"),e,n)}}function vt(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function bt(t,e){var n,r=e>0,a=r?e:1-e;if(a<=50)n=t||100;else{var o=a+50;n=t+100*Math.floor(o/100)-(t>=o%100?100:0)}return r?n:1-n}var Tt=[31,28,31,30,31,30,31,31,30,31,30,31],kt=[31,29,31,30,31,30,31,31,30,31,30,31];function Ct(t){return t%400==0||t%4==0&&t%100!=0}var xt={G:{priority:140,parse:function(t,e,n,r){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});case"GGGG":default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}},set:function(t,e,n,r){return e.era=n,t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"yy"===e}};switch(e){case"y":return yt(4,t,a);case"yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return yt(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=t.getUTCFullYear();if(n.isTwoDigitYear){var o=bt(n.year,a);return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t}var i="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(i,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"YY"===e}};switch(e){case"Y":return yt(4,t,a);case"Yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return yt(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=j(t,r);if(n.isTwoDigitYear){var o=bt(n.year,a);return t.setUTCFullYear(o,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),O(t,r)}var i="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(i,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),O(t,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,n,r){return pt("R"===e?4:e.length,t)},set:function(t,e,n,r){var a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),W(a)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,n,r){return pt("u"===e?4:e.length,t)},set:function(t,e,n,r){return t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,n,r){switch(e){case"Q":case"QQ":return yt(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,n,r){switch(e){case"q":case"qq":return yt(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"M":return ht(R,t,a);case"MM":return yt(2,t,a);case"Mo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"L":return ht(R,t,a);case"LL":return yt(2,t,a);case"Lo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,n,r){switch(e){case"w":return ht(G,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,o){return O(function(t,e,n){r(2,arguments);var o=a(t),i=x(e),s=F(o,n)-i;return o.setUTCDate(o.getUTCDate()-7*s),o}(t,n,o),o)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,n,r){switch(e){case"I":return ht(G,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(t,e,n,o){return W(function(t,e){r(2,arguments);var n=a(t),o=x(e),i=L(n)-o;return n.setUTCDate(n.getUTCDate()-7*i),n}(t,n,o),o)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,parse:function(t,e,n,r){switch(e){case"d":return ht(J,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return yt(e.length,t)}},validate:function(t,e,n){var r=Ct(t.getUTCFullYear()),a=t.getUTCMonth();return r?e>=1&&e<=kt[a]:e>=1&&e<=Tt[a]},set:function(t,e,n,r){return t.setUTCDate(n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,parse:function(t,e,n,r){switch(e){case"D":case"DD":return ht(A,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return yt(e.length,t)}},validate:function(t,e,n){return Ct(t.getUTCFullYear())?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,n,r){return t.setUTCMonth(0,n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,n,r){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=H(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return yt(e.length,t,a);case"eo":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=H(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return yt(e.length,t,a);case"co":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=H(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,n,r){var a=function(t){return 0===t?7:t};switch(e){case"i":case"ii":return yt(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiii":return n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiiii":return n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiii":default:return n.day(t,{width:"wide",context:"formatting",valueCallback:a})||n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a})}},validate:function(t,e,n){return e>=1&&e<=7},set:function(t,e,n,o){return(t=function(t,e){r(2,arguments);var n=x(e);n%7==0&&(n-=7);var o=1,i=a(t),s=i.getUTCDay(),u=n%7,c=(u+7)%7,l=(c<o?7:0)+n-s;return i.setUTCDate(i.getUTCDate()+l),i}(t,n,o)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,n,r){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(vt(n),0,0,0),t},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(t,e,n,r){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(vt(n),0,0,0),t},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(t,e,n,r){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(vt(n),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,n,r){switch(e){case"h":return ht(_,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=12},set:function(t,e,n,r){var a=t.getUTCHours()>=12;return a&&n<12?t.setUTCHours(n+12,0,0,0):a||12!==n?t.setUTCHours(n,0,0,0):t.setUTCHours(0,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,n,r){switch(e){case"H":return ht(K,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=23},set:function(t,e,n,r){return t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,n,r){switch(e){case"K":return ht(Z,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.getUTCHours()>=12&&n<12?t.setUTCHours(n+12,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(t,e,n,r){switch(e){case"k":return ht(z,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=24},set:function(t,e,n,r){var a=n<=24?n%24:n;return t.setUTCHours(a,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,n,r){switch(e){case"m":return ht(V,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCMinutes(n,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,n,r){switch(e){case"s":return ht($,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return yt(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCSeconds(n,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,n,r){return yt(e.length,t,(function(t){return Math.floor(t*Math.pow(10,3-e.length))}))},set:function(t,e,n,r){return t.setUTCMilliseconds(n),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,n,r){switch(e){case"X":return gt(ct,t);case"XX":return gt(lt,t);case"XXXX":return gt(dt,t);case"XXXXX":return gt(mt,t);case"XXX":default:return gt(ft,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,n,r){switch(e){case"x":return gt(ct,t);case"xx":return gt(lt,t);case"xxxx":return gt(dt,t);case"xxxxx":return gt(mt,t);case"xxx":default:return gt(ft,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,n,r){return wt(t)},set:function(t,e,n,r){return[new Date(1e3*n),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,n,r){return wt(t)},set:function(t,e,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}},Dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,St=/^'([^]*?)'?$/,Ut=/''/g,Et=/\S/,Pt=/[a-zA-Z]/;function Nt(t,e,n,o){r(3,arguments);var i=String(t),s=String(e),u=o||{},c=u.locale||y;if(!c.match)throw new RangeError("locale must contain match property");var l=c.options&&c.options.firstWeekContainsDate,d=null==l?1:x(l),f=null==u.firstWeekContainsDate?d:x(u.firstWeekContainsDate);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,h=null==m?0:x(m),g=null==u.weekStartsOn?h:x(u.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===s)return""===i?a(n):new Date(NaN);var w,v={firstWeekContainsDate:f,weekStartsOn:g,locale:c},b=[{priority:10,set:It,index:0}],k=s.match(Mt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,E[e])(t,c.formatLong,v):t})).join("").match(Dt),C=[];for(w=0;w<k.length;w++){var D=k[w];!u.useAdditionalWeekYearTokens&&Y(D)&&q(D),!u.useAdditionalDayOfYearTokens&&I(D)&&q(D);var S=D[0],U=xt[S];if(U){var P=U.incompatibleTokens;if(Array.isArray(P)){for(var N=void 0,O=0;O<C.length;O++){var j=C[O].token;if(-1!==P.indexOf(j)||j===S){N=C[O];break}}if(N)throw new RangeError("The format string mustn't contain `".concat(N.fullToken,"` and `").concat(D,"` at the same time"))}else if("*"===U.incompatibleTokens&&C.length)throw new RangeError("The format string mustn't contain `".concat(D,"` and any other token at the same time"));C.push({token:S,fullToken:D});var H=U.parse(i,D,c.match,v);if(!H)return new Date(NaN);b.push({priority:U.priority,set:U.set,validate:U.validate,value:H.value,index:b.length}),i=H.rest}else{if(S.match(Pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");if("''"===D?D="'":"'"===S&&(D=Yt(D)),0!==i.indexOf(D))return new Date(NaN);i=i.slice(D.length)}}if(i.length>0&&Et.test(i))return new Date(NaN);var W=b.map((function(t){return t.priority})).sort((function(t,e){return e-t})).filter((function(t,e,n){return n.indexOf(t)===e})).map((function(t){return b.filter((function(e){return e.priority===t})).reverse()})).map((function(t){return t[0]})),B=a(n);if(isNaN(B))return new Date(NaN);var X=M(B,T(B)),L={};for(w=0;w<W.length;w++){var Q=W[w];if(Q.validate&&!Q.validate(X,Q.value,v))return new Date(NaN);var F=Q.set(X,L,Q.value,v);F[0]?(X=F[0],p(L,F[1])):X=F}return X}function It(t,e){if(e.timestampIsSet)return t;var n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}function Yt(t){return t.match(St)[1].replace(Ut,"'")}const qt=()=>{const t=JSON.parse(localStorage.getItem("projects")),e=document.getElementById("projects");if(t.length>0)for(let n=0;n<t.length;n++){const r=document.getElementById("my-lists").querySelector("ul"),a=document.createElement("li");a.className="task-list",a.setAttribute("data-filter",t[n].split(" ").join("-").toLowerCase()),a.textContent=t[n];const o=document.createElement("button");o.className="delete-btn",o.onclick=Kt;const i=document.createElement("i");i.className="fa fa-trash-o",r.appendChild(a),a.appendChild(o),o.appendChild(i);const s=document.createElement("option");s.textContent=t[n],s.value=t[n],e.appendChild(s),Zt()}},Ot=()=>{const t=JSON.parse(localStorage.getItem("tasks")),e=document.getElementById("table");if(t.length>0)for(let n=0;n<t.length;n++){const r=document.createElement("tr");0==t[n].active&&(r.style.display="none");for(let e=0;e<3;e++){const a=document.createElement("td");if(0==e)a.textContent=t[n].title,a.style.minWidth="15rem";else if(1==e)if(""!==t[n].dueDate){const e=C(Nt(t[n].dueDate,"yyyy-MM-dd",new Date));a.textContent=e}else a.textContent="";else if(2==e){a.className=t[n].priority.split(" ").join("-").toLowerCase();const e=document.createElement("input");e.type="checkbox",a.appendChild(e)}r.appendChild(a)}r.className=t[n].project.split(" ").join("-").toLowerCase(),e.appendChild(r)}},jt=document.getElementById("title"),Ht=document.getElementById("projects"),Wt=document.getElementById("description"),Bt=document.getElementById("priority"),Xt=document.getElementById("due-date"),Lt=document.getElementById("add-task-window"),Qt=document.getElementById("edit-task-btn");class Ft{constructor(t,e,n,r,a,o,i){return!0,{title:t,description:e,dueDate:n,priority:r,project:a,active:!0,completed:i}}}const Rt=()=>(jt.value="",Wt.value="",Xt.value="",Bt.selectedIndex=0,Ht.selectedIndex=0,{clearTaskForm:Rt}),Jt=()=>{const t=document.querySelectorAll("tr"),e=JSON.parse(localStorage.getItem("tasks"));for(let n=0;n<t.length;n++)t[n].firstChild.onmouseover=()=>{t[n].style.transform="scale(1.03)",t[n].style.transition="0.3s ease-in-out"},t[n].firstChild.onmouseout=()=>{t[n].style.transform="scale(1.00)",t[n].style.transition="0.3s ease-in-out"},t[n].firstChild.onclick=()=>{Lt.style.display="flex";document.getElementById("add-task-btn").style.display="none",Qt.style.display="block",jt.value=e[n].title,Ht.value=e[n].project,Wt.value=e[n].description,Bt.value=e[n].priority,Xt.value=e[n].dueDate,Qt.onclick=()=>{e[n].title=jt.value,e[n].project=Ht.value,e[n].description=Wt.value,e[n].priority=Bt.value,e[n].dueDate=Xt.value,localStorage.setItem("tasks",JSON.stringify(e)),Lt.style.display="none",zt()}}},At=()=>{const t=document.querySelectorAll('input[type="checkbox"]'),e=JSON.parse(localStorage.getItem("tasks"));document.getElementById("complete-task-btn").onclick=()=>{t.forEach(t=>{if(t.checked){const n=t.parentNode.parentNode.firstChild.textContent;for(let t=0;t<e.length;t++)e[t].title==n&&(e.splice(t,1),localStorage.setItem("tasks",JSON.stringify(e)),zt())}})}},Gt=()=>{const t=document.getElementById("my-lists").querySelector("ul"),e=document.getElementById("projects");for(;t.children.length>1;)t.removeChild(t.lastChild);for(;e.children.length>1;)e.removeChild(e.lastChild);qt()},Kt=t=>{const e=t.currentTarget.parentNode.textContent,n=JSON.parse(localStorage.getItem("projects")),r=JSON.parse(localStorage.getItem("tasks")),a=n.indexOf(e);for(let t=0;t<r.length;t++)r[t].project==e&&(console.log(r[t].title),r[t].project="");n.splice(a,1),localStorage.setItem("tasks",JSON.stringify(r)),localStorage.setItem("projects",JSON.stringify(n)),Gt()},zt=()=>{const t=document.getElementById("table");for(;t.children.length>0;)t.removeChild(t.lastChild);Ot(),Gt(),Jt(),At()},Zt=()=>{const t=document.querySelectorAll(".task-list");for(let e=0;e<t.length;e++)t[e].onclick=function(){const n=t[e].getAttribute("data-filter");_t(n)}},_t=t=>{const e=JSON.parse(localStorage.getItem("tasks"));for(let n=0;n<e.length;n++)e[n].active=!1,t==e[n].project||"all-tasks"==t?e[n].active=!0:t!==e[n].project&&(e[n].active=!1),localStorage.setItem("tasks",JSON.stringify(e));zt()};null==localStorage.getItem("projects")&&localStorage.setItem("projects",JSON.stringify([])),null==localStorage.getItem("tasks")&&localStorage.setItem("tasks",JSON.stringify([])),(()=>{const t=document.getElementById("add-task-window"),e=document.getElementById("add-new-task"),n=document.getElementsByClassName("close")[0];e.onclick=()=>{Rt();document.getElementById("add-task-btn").style.display="block";document.getElementById("edit-task-btn").style.display="none",t.style.display="flex"},n.onclick=()=>{t.style.display="none"}})(),qt(),Ot(),document.getElementById("ok").onclick=()=>{const t=document.getElementById("project-name");let e=JSON.parse(localStorage.getItem("projects"));e.some(e=>e==t.value)?(alert("Project name already taken"),t.value=""):t.value,e.push(t.value),localStorage.setItem("projects",JSON.stringify(e)),t.value="",Gt()},(()=>{const t=document.getElementById("add-task-btn"),e=document.getElementById("add-task-window");t.onclick=()=>{if(jt.value&&Bt.value){const t=new Ft(jt.value,Wt.value,Xt.value,Bt.value,Ht.value),n=JSON.parse(localStorage.getItem("tasks"));n.push(t),localStorage.setItem("tasks",JSON.stringify(n)),zt(),e.style.display="none",Rt()}}})(),Jt(),At()}]);