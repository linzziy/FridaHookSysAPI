Java.perform(function () {
    let user = Java.use('com.changdu.zone.sessionmanage.b')//用户信息。。。
Java.performNow(function() {
    // Java.choose("com.changdu.zone.sessionmanage.c", {
    //     onMatch: function(instance) {
    //         printFields(instance)
    //         console.log(instance.toString());
    //     }, onComplete: function() {
    //     }
    // });

    console.log('user coin---->'+user.f().r())
});

let TextViewerActivity = Java.use("com.changdu.bookread.text.TextViewerActivity");
TextViewerActivity["onCreate"].implementation = function (bundle) {
    console.log('TextViewerActivity onCreate is called' + ', ' + 'bundle: ' + bundle);
    let ret = this.onCreate(bundle);
    console.log('TextViewerActivity onCreate ret value is ' + this.getIntent().getExtras());
    return ret;
};
let ROChapterActivity = Java.use("com.changdu.zone.novelzone.ROChapterActivity");
ROChapterActivity["onCreate"].implementation = function (bundle) {
    console.log('ROChapterActivity onCreate is called' + ', ' + 'bundle: ' + bundle);
    let ret = this.onCreate(bundle);
    console.log('ROChapterActivity onCreate ret value is ' + this.getIntent().getExtras());
    return ret;
};
ROChapterActivity["g4"].implementation = function (str) {
    console.log('g4 is called' + ', ' + 'str: ' + str);
    let ret = this.g4(str);
    console.log('g4 ret value is ' + ret);
    return ret;
};
// let n = Java.use("com.changdu.zone.novelzone.ROChapterActivity$n");
// n["$init"].implementation = function (str) {
//     console.log('$init is called' + ', ' + 'str: ' + str);
//         showStacks()
//
//     let ret = this.$init(str);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };
// let b = Java.use("com.changdu.changdulib.k.v.b"); //返回文件环境
// b["a"].implementation = function (str, j) {
//     console.log('a is called' + ', ' + 'str: ' + str + ', ' + 'j: ' + j);
//     let ret = this.a(str, j);
//     console.log('a ret value is ' + ret);
//     return ret;
// };
// let b = Java.use("com.changdu.zone.novelzone.ROChapterActivity$b");
// b["$init"].implementation = function (str, str2, gVar) {
//     console.log('$init is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'gVar: ' + gVar);
//     let ret = this.$init(str, str2, gVar);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };
// let b2 = Java.use("com.changdu.changdulib.k.v.b");
// b2["f"].implementation = function (str1) {
//     console.log('f is called' + ', ' + 'str1: ' + str1);
//     let ret = this.f(str1);
//     console.log('f ret value is ' + ret);
//     return ret;
// };
let j = Java.use("com.changdu.zone.novelzone.j");
j["J"].implementation = function (str, str2, str3, i, i2, z, str4) {
    console.log('J is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'str4: ' + str4);
    let ret = this.J(str, str2, str3, i, i2, z, str4);
    console.log('J ret value is ' + ret);
    return ret;
};
let b = Java.use("com.changdu.k0.b");
b["l"].implementation = function (str, str2) {
    console.log('l is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2);
    let ret = this.l(str, str2);
    console.log('l ret value is ' + ret);
    return ret;
};



});


function showStacks() {
    //console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    send('调用栈输出\n\t' + Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
}

function printFields(obj) {
    var fields = obj.class.getDeclaredFields();
    console.log('printFields------------------,length=' + fields.length)
    fields.forEach(function (field) {
        field.setAccessible(true);
        // let type = field.getType().toString()
        // if (~type.indexOf('ProtocolData') && field.get(obj)) {
        //     printFields(field.get(obj))
        // }
        console.log(field.getType() + "：" + field.getName() + "------------>" + field.get(obj))
    });
}

var base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    base64DecodeChars = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
var stringToBase64 = function (e) {
    var r, a, c, h, o, t;
    for (c = e.length, a = 0, r = ''; a < c;) {
        if (h = 255 & e.charCodeAt(a++), a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
            break
        }
        if (o = e.charCodeAt(a++), a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
            break
        }
        t = e.charCodeAt(a++),
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
    }
    return r
}
var base64ToString = function (e) {
    var r, a, c, h, o, t, d;
    for (t = e.length, o = 0, d = ''; o < t;) {
        do
            r = base64DecodeChars[255 & e.charCodeAt(o++)];
        while (o < t && r == -1);
        if (r == -1)
            break;
        do
            a = base64DecodeChars[255 & e.charCodeAt(o++)];
        while (o < t && a == -1);
        if (a == -1)
            break;
        d += String.fromCharCode(r << 2 | (48 & a) >> 4);
        do {
            if (c = 255 & e.charCodeAt(o++), 61 == c)
                return d;
            c = base64DecodeChars[c]
        } while (o < t && c == -1);
        if (c == -1)
            break;
        d += String.fromCharCode((15 & a) << 4 | (60 & c) >> 2);
        do {
            if (h = 255 & e.charCodeAt(o++), 61 == h)
                return d;
            h = base64DecodeChars[h]
        } while (o < t && h == -1);
        if (h == -1)
            break;
        d += String.fromCharCode((3 & c) << 6 | h)
    }
    return d
}

/*
var hexToBase64 = function (str) {
    return base64Encode(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}
var base64ToHex = function (str) {
    for (var i = 0, bin = base64Decode(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        var tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1)
            tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex.join("");
}
*/

var hexToBytes = function (str) {
    var pos = 0;
    var len = str.length;
    if (len % 2 != 0) {
        return null;
    }
    len /= 2;
    var hexA = new Array();
    for (var i = 0; i < len; i++) {
        var s = str.substr(pos, 2);
        var v = parseInt(s, 16);
        hexA.push(v);
        pos += 2;
    }
    return hexA;
}
var bytesToHex = function (arr) {
    var str = '';
    var k, j;
    for (var i = 0; i < arr.length; i++) {
        k = arr[i];
        j = k;
        if (k < 0) {
            j = k + 256;
        }
        if (j < 16) {
            str += "0";
        }
        str += j.toString(16);
    }
    return str;
}
var stringToHex = function (str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "")
            val = str.charCodeAt(i).toString(16);
        else
            val += str.charCodeAt(i).toString(16);
    }
    return val
}
var stringToBytes = function (str) {
    var ch, st, re = [];
    for (var i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        st = [];

        do {
            st.push(ch & 0xFF);
            ch = ch >> 8;
        }
        while (ch);
        re = re.concat(st.reverse());
    }
    return re;
}

var bytesToString = function (arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = "";
    arr = new Uint8Array(arr);
    for (var i in arr) {
        str += String.fromCharCode(arr[i]);
    }
    return str
}
var bytesToBase64 = function (e) {
    var r, a, c, h, o, t;
    for (c = e.length, a = 0, r = ''; a < c;) {
        if (h = 255 & e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4),
                r += '==';
            break
        }
        if (o = e[a++], a == c) {
            r += base64EncodeChars.charAt(h >> 2),
                r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
                r += base64EncodeChars.charAt((15 & o) << 2),
                r += '=';
            break
        }
        t = e[a++],
            r += base64EncodeChars.charAt(h >> 2),
            r += base64EncodeChars.charAt((3 & h) << 4 | (240 & o) >> 4),
            r += base64EncodeChars.charAt((15 & o) << 2 | (192 & t) >> 6),
            r += base64EncodeChars.charAt(63 & t)
    }
    return r
}
var base64ToBytes = function (e) {
    var r, a, c, h, o, t, d;
    for (t = e.length, o = 0, d = []; o < t;) {
        do
            r = base64DecodeChars[255 & e.charCodeAt(o++)];
        while (o < t && r == -1);
        if (r == -1)
            break;
        do
            a = base64DecodeChars[255 & e.charCodeAt(o++)];
        while (o < t && a == -1);
        if (a == -1)
            break;
        d.push(r << 2 | (48 & a) >> 4);
        do {
            if (c = 255 & e.charCodeAt(o++), 61 == c)
                return d;
            c = base64DecodeChars[c]
        } while (o < t && c == -1);
        if (c == -1)
            break;
        d.push((15 & a) << 4 | (60 & c) >> 2);
        do {
            if (h = 255 & e.charCodeAt(o++), 61 == h)
                return d;
            h = base64DecodeChars[h]
        } while (o < t && h == -1);
        if (h == -1)
            break;
        d.push((3 & c) << 6 | h)
    }
    return d
}