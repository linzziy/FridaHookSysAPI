Java.perform(function () {
Java.performNow(function() {
    // Java.choose("com.changdu.changdulib.i.d", {
    //     onMatch: function(instance) {
    //         printFields(instance)
    //         console.log(instance.toString());
    //     }, onComplete: function() {
    //     }
    // });

});



let EncryptUtil = Java.use("com.qq.lib.EncryptUtil");
EncryptUtil["decrypt"].implementation = function (str, str2) {
    console.log('decrypt is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2);
    // showStacks()
    let ret = this.decrypt(str, str2);
    console.log('decrypt ret value is ' + ret);
    return ret;
};
// EncryptUtil["encrypt"].implementation = function (str, str2) {
//     console.log('encrypt is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2);
//     let ret = this.encrypt(str, str2);
//     console.log('encrypt ret value is ' + ret);
//     return ret;
// };

//     let AtlasDetailBean = Java.use("com.blmvl.blvl.bean.AtlasDetailBean");
// AtlasDetailBean["getCoins"].implementation = function () {
//     console.log('getCoins is called');
//     let ret = this.getCoins();
//     console.log('getCoins ret value is ' + ret);
//     return 0;
// };
// AtlasDetailBean["getIs_pay"].implementation = function () {
//     console.log('getIs_pay is called');
//     let ret = this.getIs_pay();
//     console.log('getIs_pay ret value is ' + ret);
//     return 1;
// };



// let ComicsDetailActivity = Java.use("com.blmvl.blvl.activity.ComicsDetailActivity");
// ComicsDetailActivity["d"].overload('java.lang.String').implementation = function (str) {
//     console.log('d is called' + ', ' + 'str: ' + str);
//     let ret = this.d(str);
//     console.log('d ret value is ' + ret);
//     return ret;
// };
// let m = Java.use("e.c.a.k.m");
// m["a"].implementation = function (context, comicsDetailBean, i2) {
//     console.log('a is called' + ', ' + 'context: ' + context + ', ' + 'comicsDetailBean: ' + comicsDetailBean + ', ' + 'i2: ' + i2);
//     let ret = this.a(context, comicsDetailBean, i2);
//     console.log('a ret value is ' + ret);
//     return ret;
// };
// let ComicsDetailBean = Java.use("com.blmvl.blvl.bean.ComicsDetailBean");
// ComicsDetailBean["getCoins"].implementation = function () {
//     console.log('getCoins is called');
//     let ret = this.getCoins();
//     console.log('getCoins ret value is ' + ret);
//     return ret;
// };
// ComicsDetailBean["getIs_pay"].implementation = function () {
//     console.log('getIs_pay is called');
//     let ret = this.getIs_pay();
//     console.log('getIs_pay ret value is ' + ret);
//     return 1;
// };


    let VideoBean = Java.use("com.blmvl.blvl.bean.VideoBean");
VideoBean["getIs_free"].implementation = function () {
    console.log('getIs_free is called');
    let ret = this.getIs_free();
    console.log('getIs_free ret value is ' + ret);
    return 1;
};
VideoBean["getIs_pay"].implementation = function () {
    console.log('getIs_pay is called');
    let ret = this.getIs_pay();
    console.log('getIs_pay ret value is ' + ret);
    return 1;
};
VideoBean["getCoins"].implementation = function () {
    console.log('getCoins is called');
    let ret = this.getCoins();
    console.log('getCoins ret value is ' + ret);
    return 0;
};
let UserBean = Java.use("com.blmvl.blvl.bean.UserBean");
UserBean["getWatch_count"].implementation = function () {
    console.log('getWatch_count is called');
    let ret = this.getWatch_count();
    console.log('getWatch_count ret value is ' + ret);
    return ret;
};
UserBean["getLive_count"].implementation = function () {
    console.log('getLive_count is called');
    let ret = this.getLive_count();
    console.log('getLive_count ret value is ' + ret);
    return ret;
};
UserBean["getIs_vip"].implementation = function () {
    console.log('getIs_vip is called');
    let ret = this.getIs_vip();
    console.log('getIs_vip ret value is ' + ret);
    return 1;
};
UserBean["isRealVip"].implementation = function () {
    console.log('isRealVip is called');
    let ret = this.isRealVip();
    console.log('isRealVip ret value is ' + ret);
    return true;
};


let SubmitPlayDataResultBean = Java.use("com.blmvl.blvl.bean.SubmitPlayDataResultBean");
SubmitPlayDataResultBean["getCanWatchCount"].implementation = function () {
    console.log('getCanWatchCount is called');
    let ret = this.getCanWatchCount();
    console.log('getCanWatchCount ret value is ' + ret);
    return 3000;
};
SubmitPlayDataResultBean["getWatched"].implementation = function () {
    console.log('getWatched is called');
    let ret = this.getWatched();
    console.log('getWatched ret value is ' + ret);
    return 1;
};
SubmitPlayDataResultBean["getLeft"].implementation = function () {
    console.log('getLeft is called');
    let ret = this.getLeft();
    console.log('getLeft ret value is ' + ret);
    return 99999;
};

   let d = Java.use("e.c.a.i.d");
d["e"].overload('java.lang.String', 'java.lang.String', 'e.c.a.i.a').implementation = function (str, str2, aVar) {
    console.log('e is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'aVar: ' + aVar);
    showStacks()
    let ret = this.e(str, str2, aVar);
    console.log('e ret value is ' + ret);
    return ret;
};
let HVideoPlayer = Java.use("com.blmvl.blvl.videoplayer.HVideoPlayer");
HVideoPlayer["subWatchLog"].implementation = function () {
    console.log('subWatchLog is called');
};

VideoBean["getPlay_url"].implementation = function () {
    console.log('getPlay_url is called');
    let ret = this.getPlay_url();
    console.log('getPlay_url ret value is ' + ret);
    return ret;
};
// let GSYVideoControlView = Java.use("com.shuyu.gsyvideoplayer.video.base.GSYVideoControlView");
// GSYVideoControlView["setUp"].overload('java.lang.String', 'boolean', 'java.lang.String').implementation = function (str, z, str2) {
//     console.log('setUp is called' + ', ' + 'str: ' + str + ', ' + 'z: ' + z + ', ' + 'str2: ' + str2);
//     let ret = this.setUp(str, z, str2);
//     console.log('setUp ret value is ' + ret);
//     return ret;
// };
let GSYVideoView = Java.use("com.shuyu.gsyvideoplayer.video.base.GSYVideoView");
GSYVideoView["setUp"].overload('java.lang.String', 'boolean', 'java.io.File', 'java.util.Map', 'java.lang.String').implementation = function (str, z, file, map, str2) {
    console.log('setUp is called' + ', ' + 'str: ' + str + ', ' + 'z: ' + z + ', ' + 'file: ' + file + ', ' + 'map: ' + map + ', ' + 'str2: ' + str2);
    let ret = this.setUp(str, z, file, map, str2);
    console.log('setUp ret value is ' + ret);
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