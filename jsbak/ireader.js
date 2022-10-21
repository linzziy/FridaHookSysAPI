Java.perform(function () {
    var security = Java.use('com.zhangyue.iReader.JNI.runtime.Security');
	security.hash.implementation = function (str) {
		send("======================================");
		send("参数：" + str);

		let ret = this.hash(str)

		send("结果：" + ret);
		return ret;
	}

	var aa = Java.use('xa.sorry');
	aa.IReader.overload('java.lang.String').implementation = function (token) {
        send("======================================");
		send("token=" + token);

		var result = this.IReader(token);

		send("result=" + bytesToString(result));

		return result;
    }
});