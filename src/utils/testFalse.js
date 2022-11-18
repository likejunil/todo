const testFalse = () => {
    // 이게 도대체 뭐냐..
    if (false) { console.log("뭐지1?"); }
    if (undefined) { console.log("뭐지2?"); }
    if (null) { console.log("뭐지3?"); }
    if ("") { console.log("뭐지4?"); }
    if (0) { console.log("뭐지5?"); }
    if (NaN) { console.log("뭐지6?"); }
    
    if (null == false) { console.log("비교31?"); }
    if (null == undefined) { console.log("비교32?"); } //<<<<<<<<<<<<<<<<<< true
    if (null == "") { console.log("비교34?"); }
    if (null == 0) { console.log("비교35?"); }
    if (null == NaN) { console.log("비교36?"); }

    if ("" == false) { console.log("비교41?"); } //<<<<<<<<<<<<<<<<<< true
    if ("" == undefined) { console.log("비교42?"); }
    if ("" == 0) { console.log("비교45?"); } //<<<<<<<<<<<<<<<<<< true
    if ("" == NaN) { console.log("비교46?"); }
    
    if (undefined == false) { console.log("비교21?"); }
    if (undefined == 0) { console.log("비교25?"); }
    if (undefined == NaN) { console.log("비교26?"); }
    
    if (0 == false) { console.log("비교51?"); } //<<<<<<<<<<<<<<<<<< true
    if (0 == NaN) { console.log("비교56?"); }

    if (NaN == false) { console.log("비교61?"); }
    if (NaN == NaN) { console.log("비교66?"); }
    if (NaN === NaN) { console.log("비교77?"); } //심지어 이것도 거짓..

    if (null == undefined) { console.log("비교32?"); } //<<<<<<<<<<<<<<<<<< true
    if ("" == false) { console.log("비교41?"); } //<<<<<<<<<<<<<<<<<< true
    if ("" == 0) { console.log("비교45?"); } //<<<<<<<<<<<<<<<<<< true
    if (0 == false) { console.log("비교51?"); } //<<<<<<<<<<<<<<<<<< true
}