Java.perform(function () {
    // var security = Java.use('com.zhangyue.iReader.JNI.runtime.Security');
    // security.hash.implementation = function (str) {
    // 	send("======================================");
    // 	send("参数：" + str);
    //
    // 	let ret = this.hash(str)
    //
    // 	send("结果：" + ret);
    // 	return ret;
    // }

    // var aa = Java.use('xa.sorry');
    // aa.IReader.overload('java.lang.String').implementation = function (token) {
    //     send("======================================");
    // 	send("token=" + token);
    //
    // 	var result = this.IReader(token);
    //
    // 	send("result=" + bytesToString(result));
    //
    // 	return result;
    // }

// //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//     //ndaction:readbyte(https://api.cdreader.com/api.aspx?actionid=101&formtype=10029&cid=90012&pos=30030301)
//     let d = Java.use("com.changdu.zone.ndaction.b$d");//b.d x = b.d.x(str);
//     let ReadBtyeNdAction = Java.use("com.changdu.zone.ndaction.ReadBtyeNdAction");
//     ReadBtyeNdAction["n"].implementation = function (dVar, dVar2, z) {
//         // console.log(JSON.stringify(this))
//         // console.log(this)
//         console.log('n is called' + ', ' + 'dVar: ' + dVar + ', ' + 'dVar2: ' + dVar2 + ', ' + 'z: ' + z);
//         // showStacks()
//         // dVar = d.x('ndaction:readbyte(https://api.cdreader.com/api.aspx?actionid=8001&id=1581001&restype=5)')
//         // console.log(dVar)
//         let ret = this.n(dVar, dVar2, z);
//         // console.log('n ret value is ' + ret);
//         return ret;
//     };
//     let PortalItem_Style4 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style4");
//     let PortalItem_Style5 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style5");
//     let PortalItem_Style8 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style8");
//     let PortalForm_Parser = Java.use("com.changdu.netprotocol.parser.elements.PortalForm_Parser");
//     PortalForm_Parser["parse"].overload('com.changdu.netprotocol.netreader.NetReader', 'com.changdu.netprotocol.ProtocolData$PortalForm')
//         .implementation = function (netreader, pform) {
//         console.log('parse is called：' + pform.style.value);
//         let ret = this.parse(netreader, pform);
//         console.log('parse ret style value is ' + pform.style.value);
//
//         if (pform.style.value == 8) {
//             console.log('==============================parse ret size length is ' + pform.dataItemList.value.size());
//             // printFields(pform)
//             printFields(Java.cast(pform.dataItemList.value.get(0), PortalItem_Style8))
//             // console.log('parse ret size length is -------' + pform.dataItemList.value.size());
//         }
//         if (pform.style.value == 5) {
//             console.log('==============================parse ret size length is ' + pform.dataItemList.value.size());
//             // printFields(pform)
//             printFields(Java.cast(pform.dataItemList.value.get(0), PortalItem_Style5))
//             // console.log('parse ret size length is -------' + pform.dataItemList.value.size());
//         }
//         if (pform.style.value == 49) {//书本简介
//             console.log("com.changdu.netprotocol.ProtocolData$PortalItem_Style49")
//             printFields(Java.cast(pform.dataItemList.value.get(0), Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style49")))
//         }
//         return ret;
//     };
//     let c = Java.use("com.changdu.common.data.c");
//     c["d"].implementation = function (oVar, i, str, cls, sVar, str2, mVar, z) {
//         console.log('d is called' + ', ' + 'oVar: ' + oVar + ', ' + 'i: ' + i + ', ' + 'str: ' + str + ', ' + 'cls: ' + cls + ', ' + 'sVar: ' + sVar + ', ' + 'str2: ' + str2 + ', ' + 'mVar: ' + mVar + ', ' + 'z: ' + z);
//         let ret = this.d(oVar, i, str, cls, sVar, str2, mVar, z);
//         // console.log('d ret value is ' + ret);
//         return ret;
//     };

// c["c"].implementation = function (oVar, i, str, cls, sVar, str2, nVar) {
//     console.log('c is called' + ', ' + 'oVar: ' + oVar + ', ' + 'i: ' + i + ', ' + 'str: ' + str + ', ' + 'cls: ' + cls + ', ' + 'sVar: ' + sVar + ', ' + 'str2: ' + str2 + ', ' + 'nVar: ' + nVar);
//     let ret = this.c(oVar, i, str, cls, sVar, str2, nVar);
//     console.log('c ret value is ' + ret);
//     return ret;
// };
// c["b"].implementation = function (oVar, i, str, cls, sVar, str2, mVar, z, z2) {
//     console.log('b is called' + ', ' + 'oVar: ' + oVar + ', ' + 'i: ' + i + ', ' + 'str: ' + str + ', ' + 'cls: ' + cls + ', ' + 'sVar: ' + sVar + ', ' + 'str2: ' + str2 + ', ' + 'mVar: ' + mVar + ', ' + 'z: ' + z + ', ' + 'z2: ' + z2);
//     let ret = this.b(oVar, i, str, cls, sVar, str2, mVar, z, z2);
//     console.log('b ret value is ' + ret);
//     return ret;
// };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


    //let d = Java.use("com.changdu.zone.ndaction.b$d");b.d x = b.d.x(str);
// let ReadBtyeNdAction = Java.use("com.changdu.zone.ndaction.ReadBtyeNdAction");
// ReadBtyeNdAction["n"].implementation = function (dVar, dVar2, z) {
//     console.log('n is called' + ', ' + 'dVar: ' + dVar + ', ' + 'dVar2: ' + dVar2 + ', ' + 'z: ' + z);
//     let ret = this.n(dVar, dVar2, z);
//     console.log('n ret value is ' + ret);
//     return ret;
// };

//     //===========================================================================================================
//     let PortalItem_Style4 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style4");
// let PortalForm_Parser = Java.use("com.changdu.netprotocol.parser.elements.PortalForm_Parser");
// PortalForm_Parser["parse"].overload('com.changdu.netprotocol.netreader.NetReader', 'com.changdu.netprotocol.ProtocolData$PortalForm')
//     .implementation = function (netreader, pform) {
//     console.log('parse is called：'+pform.style.value);
//     showStacks()
//     let ret = this.parse(netreader, pform);
//     console.log('parse ret style value is ' + pform.style.value);
//
//     printFields(Java.cast(pform.dataItemList.value.get(0), PortalItem_Style4))
//     return ret;
// };
// PortalForm_Parser["parsePortalItems"].implementation = function (portalForm, netReader) {
//     console.log('parsePortalItems is called' + ', ' + 'portalForm: ' + portalForm + ', ' + 'netReader: ' + netReader);
//     console.log('parse is called：'+portalForm.style.value);
//     let ret = this.parsePortalItems(portalForm, netReader);
//     console.log('parsePortalItems ret value is ' + ret);
//     return ret;
// };

//     //简介数据。。。
// let PortalItem_Style8_Parser = Java.use("com.changdu.netprotocol.parser.elements.PortalItem_Style8_Parser");
// PortalItem_Style8_Parser["parse"].overload('com.changdu.netprotocol.netreader.NetReader').implementation = function (netReader) {
//     console.log('parse is called');
//     let ret = this.parse(netReader);
//     console.log('parse ret value is ' + JSON.stringify(ret));
//     printFields(ret)
//     return ret;
// };
//     //内容描述数据。。。
// let PortalItem_Style5_Parser = Java.use("com.changdu.netprotocol.parser.elements.PortalItem_Style5_Parser");
// PortalItem_Style5_Parser["parse"].overload('com.changdu.netprotocol.netreader.NetReader').implementation = function (netReader) {
//     console.log('parse is called');
//     let ret = this.parse(netReader);
//     console.log('parse ret value is ' + JSON.stringify(ret));
//     printFields(ret)
//     return ret;
// };
//     //前端数据内容
//     let l = Java.use("com.changdu.zone.adapter.creator.l");
// l["z"].overload('com.changdu.zone.adapter.creator.l$e', 'com.changdu.zone.adapter.f', 'com.changdu.common.data.IDrawablePullover', 'android.content.Context')
//     .implementation = function (x1, x2, x3, x4) {
//     console.log('z is called x1:'+x1);
//     console.log('z is called x2:'+x2);
//     console.log('z is called x3:'+x3);
//     console.log('z is called x4:'+x4);
//     let ret = this.z(x1, x2, x3, x4);
//     console.log('z ret value is ' + ret);
//     return ret;
// };
//
//     //--------------------------------------------------------------------------------------------------------
//     let Response_8001 = Java.use("com.changdu.netprotocol.ProtocolData$Response_8001");
//     let PortalForm = Java.use("com.changdu.netprotocol.ProtocolData$PortalForm");
// let PortalItem_Style8 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style8");
// let PortalItem_Style5 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style5");
// Response_8001["parseData"].implementation = function (bArr) {
//     console.log('parseData is called' + ', ' + 'bArr: ' + bArr);
//     let ret = this.parseData(bArr);
//     // console.log('parseData ret value is ' + this.formList);
//     // console.log('parseData ret value is ' + this.formList.value);
//     // console.log('parseData ret value is ' + this.formList.value.size());
//     // console.log('parseData ret value is ' + this.formList.value.get(0));
//     var list = this.formList.value;
//     // console.log('parseData ret value is ' + list.size());
//     // console.log('parseData ret value is ' + list.get(0));
//     // // console.log(list.get(0).style)
//     // // console.log(list.get(0).style.value)
//     // // Java.cast
//     for(var i=0;i < list.size(); i++) {
//         var obj = Java.cast(list.get(i), PortalForm);
//         // let obj = list.get(i)
//         let style = obj.style.value
//         let data = obj.dataItemList.value;//ArrayList<PortalItem_BaseStyle> dataItemList;
//         console.log(style+'===============================>'+data.size())
//         if (style == 8) { //基础的内容
//             // console.log('------------>let PortalItem_Style8 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style8");')
//             // for (var j=0; j<data.size(); j++) {
//             //     var style8 = Java.cast(data.get(j), PortalItem_Style8);
//             //     printFields(style8)
//             // }
//         }else if (style == 5) {//书本简介
//             // console.log('------------>let PortalItem_Style5 = Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style5");')
//             //  for (var j=0; j<data.size(); j++) {
//             //     var style5 = Java.cast(data.get(j), PortalItem_Style5);
//             //     printFields(style5)
//             // }
//         }
//         else if (style == 49) {//书本简介
//             console.log("com.changdu.netprotocol.ProtocolData$PortalItem_Style49")
//              for (var j=0; j<data.size(); j++) {
//                 var style5 = Java.cast(data.get(j), Java.use("com.changdu.netprotocol.ProtocolData$PortalItem_Style49"));
//                 printFields(style5)
//             }
//         }
//     }
//     return ret;
// };


//     //书本目录的分析--------------------------------------------------------------------------------------------------------
// let l = Java.use("com.changdu.download.l");
// l["I"].implementation = function (str, str2, z, bVar, i, resultMessage2) {
//     console.log('I is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'z: ' + z + ', ' + 'bVar: ' + bVar + ', ' + 'i: ' + i + ', ' + 'resultMessage2: ' + resultMessage2);
//     showStacks()
//     let ret = this.I(str, str2, z, bVar, i, resultMessage2);
//     console.log('I ret value is ' + ret);
//     return ret;
// };
// let j = Java.use("com.changdu.zone.novelzone.j");
// j["J"].implementation = function (str, str2, str3, i, i2, z, str4) {
//     console.log('J is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'str4: ' + str4);
//     let ret = this.J(str, str2, str3, i, i2, z, str4);
//     console.log('J ret value is ' + ret);
//     printFields(ret[0])
//     return ret;
// };

//     //列表的分析--------------------------------------------------------------------------------------------------------
// let ROChapterActivity = Java.use("com.changdu.zone.novelzone.ROChapterActivity");
// ROChapterActivity["onCreate"].implementation = function (bundle) {
//     console.log('onCreate is called' + ', ' + 'bundle: ' + bundle);
//     let ret = this.onCreate(bundle);
//     console.log('onCreate ret value is ' + this.getIntent().getExtras());
//     return ret;
// };


// Java.performNow(function() {
//     Java.choose("com.changdu.zone.style.view.StyleLayout", {
//         onMatch: function(instance) {
//             console.log(instance.toString());
//         }, onComplete: function() {
//         }
//     });
// });
// let StyleActivity = Java.use("com.changdu.zone.style.StyleActivity");
// StyleActivity["onCreate"].implementation = function (bundle) {
//     console.log('onCreate is called' + ', ' + 'bundle: ' + bundle);
//     let ret = this.onCreate(bundle);
//     console.log('onCreate ret value is ' + this.getIntent().getExtras());
//     return ret;
// };


// let c = Java.use("com.changdu.zone.ndaction.c");
// c["v"].implementation = function (str, aVar) {
//     console.log('v is called' + ', ' + 'str: ' + str + ', ' + 'aVar: ' + aVar);
//     let ret = this.v(str, aVar);
//     console.log('v ret value is ' + ret);
//     return ret;
// };

// let d = Java.use("com.changdu.zone.ndaction.b$d");
// d["x"].implementation = function (str) {
//     console.log('x is called' + ', ' + 'str: ' + str);
//     showStacks()
//     let ret = this.x(str);
//     console.log('x ret value is ' + ret);
//     return ret;
// };


// let h = Java.use("com.changdu.zone.novelzone.h");
// h["$init"].implementation = function (aVar, view) {
//     console.log('$init is called' + ', ' + 'aVar: ' + aVar + ', ' + 'view: ' + view);
//     showStacks()
//     console.log(JSON.stringify(aVar))
//     let ret = this.$init(aVar, view);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };

// let b = Java.use("com.changdu.zone.adapter.b");
// b["getItem"].implementation = function (i) {
//     console.log('getItem is called' + ', ' + 'i: ' + i);
//     let ret = this.getItem(i);
//     console.log('getItem ret value is ' + ret);
//     return ret;
// };

// let b = Java.use("com.changdu.zone.adapter.b");
// b["setDataArray"].implementation = function (list) {
//     console.log('setDataArray is called' + ', ' + 'list: ' + list);
//     console.log(JSON.stringify(list))
//     console.log(list.get(0))
//     console.log(JSON.stringify(list.get(0)))
//     // let item = Java.cast(list.get(0), Java.use('com.changdu.zone.novelzone.k'));
//     // console.log(JSON.stringify(item.a.value))
//     // printFields(item.a.value)
//     let ret = this.setDataArray(list);
//     console.log('setDataArray ret value is ' + ret);
//     return ret;
// };

// let j = Java.use("com.changdu.zone.novelzone.j");
// j["J"].implementation = function (str, str2, str3, i, i2, z, str4) {
//     console.log('J is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'str4: ' + str4);
//     let ret = this.J(str, str2, str3, i, i2, z, str4);
//     console.log('J ret value is ' + ret);
//     return ret;
// };
// j["v"].implementation = function (str, str2, str3, i, i2, z, str4) {
//     console.log('v is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'str4: ' + str4);
//     let ret = this.v(str, str2, str3, i, i2, z, str4);
//     console.log('v ret value is ' + ret);
//     return ret;
// };

//
//     let StyleActivity = Java.use("com.changdu.zone.style.StyleActivity");
// StyleActivity["onCreate"].implementation = function (bundle) {
//     console.log('onCreate is called' + ', ' + 'bundle: ' + bundle);
//     let ret = this.onCreate(bundle);
//     console.log('onCreate ret value is ' + this.getIntent().getExtras());
//     return ret;
// };

//     let ROChapterLoader = Java.use("com.changdu.zone.novelzone.j");
// let Response_8001 = Java.use("com.changdu.netprotocol.ProtocolData$Response_8001");
// Response_8001["parseData"].implementation = function (bArr) {
//     console.log('parseData is called' + ', ' + 'bArr: ' + bArr);
//     let bData = bytesToString(bArr);
//     if (bData) {
//         let bFlag = /\(.*?bookid=.*?siteid=.*?name=[^\)]*/i.exec(bData)[0]
//         let bookid = /bookid=(\d+)/i.exec(bFlag)[1];
//         let siteid = /siteid=(\d+)/i.exec(bFlag)[1];
//         let name = decodeURIComponent(/name=([^&,]+)/i.exec(bFlag)[1])
//         let pi = 1
//         let ps = 100
//
//         console.log('bookid---------'+bookid)
//         console.log('siteid---------'+siteid)
//         console.log('name---------'+name)
//
//         let g = ROChapterLoader.$new().J(bookid, name, siteid, pi, ps, false, '')
//         console.log(g)
//     }
//     let ret = this.parseData(bArr);
//     console.log('parseData ret value is ' + ret);
//     return ret;
// };

// let j = Java.use("com.changdu.zone.novelzone.j");
// j["J"].implementation = function (str, str2, str3, i, i2, z, str4) {
//     console.log('J is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'str4: ' + str4);
//     // showStacks()
//     let ret = this.J(str, str2, str3, i, i2, z, str4);
//     console.log('J ret value is ' + ret);
//     // printFields(ret[0])
//     return ret;
// };

// let l = Java.use("com.changdu.zone.novelzone.ROChapterActivity$l");
// l["$init"].implementation = function (str, str2, i, i2, z) {
//     console.log('$init is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z);
//     showStacks()
//     let ret = this.$init(str, str2, i, i2, z);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };
// let j2 = Java.use("com.changdu.zone.novelzone.j");
// j2["l"].implementation = function (str, str2, str3, i, i2, str4, str5) {
//     console.log('l is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'str4: ' + str4 + ', ' + 'str5: ' + str5);
//     let ret = this.l(str, str2, str3, i, i2, str4, str5);
//     console.log('l ret value is ' + ret);
//     return ret;
// };
// let j2 = Java.use("com.changdu.zone.novelzone.j");
// j2["v"].implementation = function (str, str2, str3, i, i2, z, str4) {
//     console.log('v is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'str4: ' + str4);
//     showStacks()
//     let ret = this.v(str, str2, str3, i, i2, z, str4);
//     console.log('v ret value is ' + ret);
//     return ret;
// };

// let GetChaptersResponse = Java.use("com.changdu.netprotocol.ProtocolData$GetChaptersResponse");
// GetChaptersResponse["parseData"].implementation = function (bArr) {
//     console.log('parseData is called' + ', ' + 'bArr: ' + bArr);
//     showStacks()
//     let ret = this.parseData(bArr);
//     console.log('parseData ret value is ' + this.pandanotes.value.size());
//     console.log('parseData ret value is ' + JSON.stringify(this.pandanotes.value.get(0)));
//     // printFields(Java.cast(this.pandanotes.value.get(0), Java.use('com.changdu.netprotocol.ProtocolData$PandaChapterInfoForBinary')))
//     // printFields(Java.cast(this.pandanotes.value.get(7), Java.use('com.changdu.netprotocol.ProtocolData$PandaChapterInfoForBinary')))
//     return ret;
// };

// j["u"].implementation = function (str, str2, z, i, abstractC0142e) {
//     console.log('u is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'z: ' + z + ', ' + 'i: ' + i + ', ' + 'abstractC0142e: ' + abstractC0142e);
//     let ret = this.u(str, str2, z, i, abstractC0142e);
//     console.log('u ret value is ' + ret);
//     return ret;
// };
// let m = Java.use("com.changdu.download.m");
// m["x"].implementation = function () {
//     console.log('x is called');
//     let ret = this.x();
//     console.log('x ret value is ' + ret);
//     return ret;
// };

    //=============================
let TextViewerActivity = Java.use("com.changdu.bookread.text.TextViewerActivity");
TextViewerActivity["onCreate"].implementation = function (bundle) {
    console.log('onCreate is called' + ', ' + 'bundle: ' + bundle);
    let ret = this.onCreate(bundle);
    console.log('onCreate ret value is ' + this.getIntent().getExtras());
    return ret;
};
TextViewerActivity["e8"].implementation = function (message) {
    console.log('e8 is called' + ', ' + 'message: ' + message);
    let ret = this.e8(message);
    console.log('e8 ret value is ' + ret);
    return ret;
};
//
//
let ReadOnlineNdAction2 = Java.use("com.changdu.zone.ndaction.ReadOnlineNdAction");
ReadOnlineNdAction2["J"].implementation = function (dVar, book, dVar2) {
    console.log('J is called' + ', ' + 'dVar: ' + dVar + ', ' + 'book: ' + book + ', ' + 'dVar2: ' + dVar2);
    let ret = this.J(dVar, book, dVar2);
    console.log('J ret value is ' + ret);
    return ret;
};

// let j = Java.use("com.changdu.zone.novelzone.j");
// j["m"].implementation = function (str, str2, str3, i, i2) {
//     console.log('m is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2);
//     let ret = this.m(str, str2, str3, i, i2);
//     console.log('m ret value is ' + ret);
//     return ret;
// };


// let b = Java.use("com.changdu.r0.a.b");
// b["j"].implementation = function (activity, jVar, gVarArr, i2, z, i3, iDrawablePullover) {
//     console.log('j is called' + ', ' + 'activity: ' + activity + ', ' + 'jVar: ' + jVar + ', ' + 'gVarArr: ' + gVarArr + ', ' + 'i2: ' + i2 + ', ' + 'z: ' + z + ', ' + 'i3: ' + i3 + ', ' + 'iDrawablePullover: ' + iDrawablePullover);
//     let ret = this.j(activity, jVar, gVarArr, i2, z, i3, iDrawablePullover);
//     console.log('j ret value is ' + ret);
//     console.log('j ret value is ' + JSON.stringify(ret));
//     printFields(ret)
//     return ret;
// };
    let i = Java.use("com.changdu.bookshelf.i");
i["T"].implementation = function (gVar, z) {
    console.log('T is called' + ', ' + 'gVar: ' + gVar + ', ' + 'z: ' + z);
    let ret = this.T(gVar, z);
    console.log('T ret value is ' + ret);
    return ret;
};
let e = Java.use("com.changdu.bookread.epub.e");
e["B"].implementation = function (str) {
    console.log('B is called' + ', ' + 'str: ' + str);
    let ret = this.B(str);
    console.log('B ret value is ' + ret);
    return ret;
};


// let file = Java.use("java.io.File");
// file["$init"].overload('java.lang.String').implementation = function (file) {
//     if (!~file.indexOf('.txt')) {
//         return this.$init(file);
//     }
//     showStacks()
//     console.log('$init is called' + ', ' + 'file): ' + file);
//     let ret = this.$init(file);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };
// let k = Java.use("com.changdu.changdulib.i.k");
// k["u"].implementation = function (str) {
//     console.log('u is called' + ', ' + 'str: ' + str);
//     let ret = this.u(str);
//     console.log('u ret value is ' + ret);
//     return ret;
// };

// TextViewerActivity["Ma"].implementation = function (nVar, i4) {
//     console.log('Ma is called' + ', ' + 'nVar: ' + nVar + ', ' + 'i4: ' + i4);
//     showStacks()
//     // printFields(nVar)
//     // let ret = this.Ma(nVar, i4);
//     // console.log('Ma ret value is ' + ret);
//     // return ret;
// };
// TextViewerActivity["zb"].implementation = function (str, i4) {
//     console.log('zb is called' + ', ' + 'str: ' + str + ', ' + 'i4: ' + i4);
//
// };
// let ViewerActivity = Java.use("com.changdu.bookread.text.ViewerActivity");
// ViewerActivity["l2"].implementation = function (message) {
//     console.log('l2 is called' + ', ' + 'message: ' + message);
//     let ret = this.l2(message);
//     console.log('l2 ret value is ' + ret);
//     return ret;
// };
// ViewerActivity["Q2"].implementation = function () {
//     console.log('Q2 is called');
//     let ret = this.Q2();
//     console.log('Q2 ret value is ' + ret);
//     return ret;
// };
// ViewerActivity["C2"].implementation = function (z) {
//     console.log('C2 is called' + ', ' + 'z: ' + z);
//     // let ret = this.C2(z);
//     // console.log('C2 ret value is ' + ret);
//     // return ret;
// };
// ViewerActivity["y2"].implementation = function (str) {
//     console.log('y2 is called' + ', ' + 'str: ' + str);
//     let ret = this.y2(str);
//     console.log('y2 ret value is ' + this.f.value);
//     console.log('y2 ret value is ' + this.f.value);
//     console.log('y2 ret value is ' + this.f.value);
//     console.log('y2 ret value is ' + this.f.value);
//     return ret;
// };


// let g2 = Java.use("com.changdu.bookread.text.TextViewerActivity$g2");
// g2["b"].implementation = function (x) {
//     console.log('doInBackground is called:'+x);
//     // let ret = this.b();
//     // console.log('doInBackground ret value is ' + ret);
//     // return ret;
//     return false;
// };


// let b = Java.use("com.changdu.bookread.text.readfile.b");
// b["$init"].implementation = function (str, str2, str3, i, str4) {
//     console.log('$init is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i: ' + i + ', ' + 'str4: ' + str4);
//     let ret = this.$init(str, str2, str3, i, str4);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };


// let j2 = Java.use("com.changdu.k0.j");
// j2["L"].implementation = function (str) {
//     console.log('L is called' + ', ' + 'str: ' + str);
//     let ret = this.L(str);
//     console.log('L ret value is ' + ret);
//     return ret;
// };
// TextDraw["a1"].implementation = function (bVar) {
//     console.log('a1 is called' + ', ' + 'bVar: ' + bVar);
//     let ret = this.a1(bVar);
//     console.log('a1 ret value is ' + ret);
//     return ret;
// };
// TextDraw["V0"].implementation = function (iVar, bVar) {
//     console.log('V0 is called' + ', ' + 'iVar: ' + iVar + ', ' + 'bVar: ' + bVar);
//     let ret = this.V0(iVar, bVar);
//     console.log('V0 ret value is ' + ret);
//     return ret;
// };
// TextDraw["setChapterTitle"].implementation = function (str) {
//     console.log('setChapterTitle is called' + ', ' + 'str: ' + str);
//     let ret = this.setChapterTitle(str);
//     console.log('setChapterTitle ret value is ' + ret);
//     return ret;
// };
// TextDraw["setChapterTitle2"].implementation = function (str) {
//     console.log('setChapterTitle2 is called' + ', ' + 'str: ' + str);
//     let ret = this.setChapterTitle2(str);
//     console.log('setChapterTitle2 ret value is ' + ret);
//     return ret;
// };
// TextDraw["setChapterTitleRedraw"].implementation = function () {
//     console.log('setChapterTitleRedraw is called');
//     let ret = this.setChapterTitleRedraw();
//     console.log('setChapterTitleRedraw ret value is ' + ret);
//     return ret;
// };
// let c = Java.use("com.changdu.bookread.text.textpanel.c");
// c["o"].implementation = function (i) {
//     console.log('o is called' + ', ' + 'i: ' + i);
//     let ret = this.o(i);
//     console.log('o ret value is ' + ret);
//     return ret;
// };

// TextViewerActivity["J8"].implementation = function (bVar) {
//     console.log('J8 is called' + ', ' + 'bVar: ' + bVar);
//     let ret = this.J8(bVar);
//     console.log('J8 ret value is ' + ret);
//     return ret;
// };
// TextViewerActivity["K8"].implementation = function (bVar) {
//     console.log('K8 is called' + ', ' + 'bVar: ' + bVar);
//     let ret = this.K8(bVar);
//     console.log('K8 ret value is ' + ret);
//     return ret;
// };

// let TextDraw = Java.use("com.changdu.bookread.text.textpanel.TextDraw");
// TextDraw["setChangeTONextChaptLoad"].implementation = function (fVar, str, i2, str2) {
//     console.log('setChangeTONextChaptLoad is called' + ', ' + 'fVar: ' + fVar + ', ' + 'str: ' + str + ', ' + 'i2: ' + i2 + ', ' + 'str2: ' + str2);
//     console.log(JSON.stringify(fVar))
//     // showStacks()
//     // printFields(fVar)
//     let ret = this.setChangeTONextChaptLoad(fVar, str, i2, str2);
//     console.log('setChangeTONextChaptLoad ret value is ' + ret);
//     return ret;
// };
// let r3 = Java.use("com.changdu.bookread.text.TextViewerActivity$r3");
// r3["handleMessage"].implementation = function (message) {
//     console.log('handleMessage is called' + ', ' + 'message: ' + message);
//     let ret = this.handleMessage(message);
//     console.log('handleMessage ret value is ' + ret);
//     return ret;
// };

// let b = Java.use("com.changdu.r0.a.b");
// b["i"].implementation = function (activity, jVar, gVar, gVarArr, z, i2, iDrawablePullover) {
//     console.log('i is called' + ', ' + 'activity: ' + activity + ', ' + 'jVar: ' + jVar + ', ' + 'gVar: ' + gVar + ', ' + 'gVarArr: ' + gVarArr + ', ' + 'z: ' + z + ', ' + 'i2: ' + i2 + ', ' + 'iDrawablePullover: ' + iDrawablePullover);
//     showStacks()
//     let ret = this.i(activity, jVar, gVar, gVarArr, z, i2, iDrawablePullover);
//     console.log('i ret value is ' + ret);
//     printFields(ret)
//     return ret;
// };
// let StatePanelView = Java.use("com.changdu.bookread.text.textpanel.StatePanelView");
// StatePanelView["setChapterName"].implementation = function (str) {
//     console.log('setChapterName is called' + ', ' + 'str: ' + str);
//     let ret = this.setChapterName(str);
//     console.log('setChapterName ret value is ' + ret);
//     return ret;
// };
// StatePanelView["setChapterName"].implementation = function (str) {
//     console.log('setChapterName is called' + ', ' + 'str: ' + str);
//     let ret = this.setChapterName(str);
//     console.log('setChapterName ret value is ' + ret);
//     return ret;
// };
// let ROChapterActivity = Java.use("com.changdu.zone.novelzone.ROChapterActivity");
// ROChapterActivity["g4"].implementation = function (str) {
//     console.log('g4 is called' + ', ' + 'str: ' + str);
//     showStacks()
//     let ret = this.g4(str);
//     console.log('g4 ret value is ' + ret);
//     return ret;
// };
//
// // let n = Java.use("com.changdu.zone.novelzone.ROChapterActivity$n");
// // n["$init"].implementation = function (str) {
// //     console.log('$init is called' + ', ' + 'str: ' + str);
// //     showStacks()
// //     let ret = this.$init(str);
// //     console.log('$init ret value is ' + ret);
// //     return ret;
// // };
//
//
// ROChapterActivity["a4"].implementation = function (i2) {
//     console.log('a4 is called' + ', ' + 'i2: ' + i2);
//     let ret = this.a4(i2);
//     console.log('a4 ret value is ' + ret);
//     return ret;
// };
// ROChapterActivity["P3"].implementation = function (i2) {
//     console.log('P3 is called' + ', ' + 'i2: ' + i2);
//     let ret = this.P3(i2);
//     console.log('P3 ret value is ' + ret);
//     return ret;
// };
//
// // let b = Java.use("com.changdu.changdulib.k.v.b");
// // b["f"].implementation = function (str) {
// //     console.log('f is called' + ', ' + 'null: ' + null);
// //     let ret = this.f(str);
// //     console.log('f ret value is ' + ret);
// //     return ret;
// // };
//
//
// let i = Java.use("com.changdu.zone.novelzone.i");
// i["i"].implementation = function (str) {
//     console.log('i is called' + ', ' + 'str: ' + str);
//     showStacks()
//     let ret = this.i(str);
//     console.log('i ret value is ' + ret);
//     return ret;
// };

// let TextDraw = Java.use("com.changdu.bookread.text.textpanel.TextDraw");
// TextDraw["$init"].implementation = function (context, str, str2, str3, i2, str4, str5) {
//     console.log('$init is called' + ', ' + 'context: ' + context + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'str3: ' + str3 + ', ' + 'i2: ' + i2 + ', ' + 'str4: ' + str4 + ', ' + 'str5: ' + str5);
//     let ret = this.$init(context, str, str2, str3, i2, str4, str5);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };

    //com.changdu.bookread.text.readfile.n,com.changdu.changdulib.i.d
Java.performNow(function() {
    Java.choose("com.changdu.browser.compressfile.a", {
        onMatch: function(instance) {
            printFields(instance)
            console.log(instance.toString());
        }, onComplete: function() {
        }
    });
});
// let y = Java.use("com.changdu.bookread.text.readfile.y");
// y["$init"].overload('java.lang.StringBuffer', 'com.changdu.bookread.text.textpanel.s', 'com.changdu.setting.c', 'java.lang.String', 'java.lang.String', 'int', 'boolean').implementation = function (stringBuffer, sVar, cVar, str, str2, i, z) {
//     console.log('$init is called' + ', ' + 'stringBuffer: ' + stringBuffer + ', ' + 'sVar: ' + sVar + ', ' + 'cVar: ' + cVar + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'i: ' + i + ', ' + 'z: ' + z);
//     showStacks()
//     let ret = this.$init(stringBuffer, sVar, cVar, str, str2, i, z);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };
// let y = Java.use("com.changdu.bookread.text.readfile.y");
// y["$init"].overload('java.lang.StringBuffer', 'com.changdu.bookread.text.textpanel.s', 'com.changdu.setting.c', 'java.lang.String', 'java.lang.String', 'int', 'boolean').implementation = function (stringBuffer, sVar, cVar, str, str2, i, z) {
//     console.log('$init is called' + ', ' + 'stringBuffer: ' + stringBuffer + ', ' + 'sVar: ' + sVar + ', ' + 'cVar: ' + cVar + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'i: ' + i + ', ' + 'z: ' + z);
//     let ret = this.$init(stringBuffer, sVar, cVar, str, str2, i, z);
//     console.log('$init ret value is ' + ret);
//     printFields(this)
//     return ret;
// };
// let k = Java.use("com.changdu.changdulib.i.k");
// k["r"].implementation = function () {
//     console.log('r is called');
//     showStacks()
//     let ret = this.r();
//     console.log('r ret value is ' + ret);
//     printFields(ret)
//     return ret;
// };
let d = Java.use("com.changdu.changdulib.i.d");
// d["f"].implementation = function (str, str2, i) {
//     console.log('f is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2 + ', ' + 'i: ' + i);
//     showStacks()
//     let ret = this.f(str, str2, i);
//     console.log('f ret value is ' + ret);
//     console.log('---->'+bytesToString(this.c.length))
//     console.log('---->'+bytesToString(this.c))
//     console.log('---->'+bytesToString(this.c.value))
//
//     console.log(this.e(this.c.value, 0, parseInt(i)))
//     return ret;
// };
// d["$init"].overload('java.lang.String', 'java.lang.String').implementation = function (str1, str2) {
//     console.log('$init is called');
//     let ret = this.$init(str1, str2);
//     console.log('$init ret value is ' + this);
//     console.log('---->'+this.c.length)
//     console.log('---->'+this.c)
//     console.log('---->'+this.c.value)
//     console.log('---->'+bytesToString(this.c.value))
//
//     console.log(this.e(this.c, 0, 12288))
//     return ret;
// };
// d["k"].implementation = function () {
//     console.log('k is called');
//     let ret = this.k();
//     console.log('k ret value is ' + ret);
//     console.log('---->'+this.c.length)
//     console.log('---->'+this.c)
//     console.log('---->'+this.c.value)
//     console.log('---->'+bytesToString(this.c.value))
//     return ret;
// };
let b = Java.use("com.changdu.changdulib.i.b");
// b["$init"].implementation = function (str, str2) {
//     console.log('$init is called' + ', ' + 'str: ' + str + ', ' + 'str2: ' + str2);
//     let ret = this.$init(str, str2);
//     console.log('$init ret value is ' + ret);
//     return ret;
// };

let c = Java.use("com.changdu.changdulib.k.u.c");
c["g"].implementation = function (file, i, i2) {
    console.log('g is called' + ', ' + 'file: ' + file + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2);
    let ret = this.g(file, i, i2);
    console.log('g ret value is ' + ret);
    return ret;
};
c["d"].implementation = function (i, bArr, i2, i3, i4) {
    console.log('d is called' + ', ' + 'i: ' + i + ', ' + 'bArr: ' + bArr + ', ' + 'i2: ' + i2 + ', ' + 'i3: ' + i3 + ', ' + 'i4: ' + i4);
    showStacks()
    console.log('*****************'+bytesToString(bArr))
    let ret = this.d(i, bArr, i2, i3, i4);
    console.log('d ret value is ' + ret);
    console.log('*****************'+bytesToString(bArr))
    return ret;
};
// c["e"].implementation = function (j, bArr, i, i2, i3) {
//     console.log('e is called' + ', ' + 'j: ' + j + ', ' + 'bArr: ' + bArr + ', ' + 'i: ' + i + ', ' + 'i2: ' + i2 + ', ' + 'i3: ' + i3);
//     let ret = this.e(j, bArr, i, i2, i3);
//     console.log('e ret value is ' + ret);
//     return ret;
// };
// d["a"].overload().implementation = function () {
//     console.log('a is called');
//     let ret = this.a();
//     console.log('a ret value is ' + ret);
//     console.log('*****************'+bytesToString(this.c))
//     console.log('*****************'+bytesToString(this.c.value))
//     return ret;
// };
// let c = Java.use("com.changdu.changdulib.k.u.c");
// c["d"].implementation = function (i, bArr, i2, i3, i4) {
//     console.log('d is called' + ', ' + 'i: ' + i + ', ' + 'bArr: ' + bArr + ', ' + 'i2: ' + i2 + ', ' + 'i3: ' + i3 + ', ' + 'i4: ' + i4);
//     let ret = this.d(i, bArr, i2, i3, i4);
//     console.log('d ret value is ' + ret);
//     return ret;
// };


// d["k"].implementation = function () {
//     console.log('k is called');
//     showStacks()
//     let ret = this.k();
//     console.log('k ret value is ' + ret);
//     return ret;
// };
// let k = Java.use("com.changdu.changdulib.i.k");
// k["h"].implementation = function (i) {
//     console.log('h is called' + ', ' + 'i: ' + i);
//     let ret = this.h(i);
//     console.log('h ret value is ' + ret);
//     return ret;
// };

let i2 = Java.use("com.changdu.zone.novelzone.i");
i2["G"].implementation = function (activity, str) {
    console.log('G is called' + ', ' + 'activity: ' + activity + ', ' + 'str: ' + str);
    let ret = this.G(activity, str);
    console.log('G ret value is ' + ret);
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