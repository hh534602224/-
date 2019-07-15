// 自己的库
/* 1.调用获取本地数据库  keyname 是你要调用的数据库得到库名（存数据用的键）返回一个数组给你*/
function loaddate (keyname){
    let str=localStorage.getItem(keyname);
    arr=JSON.parse(str)
    if(!arr){
        arr=[];
    }
    return arr;

}

/* 2.把一个数组或者对象装进本地数据库   keyname 是你要存储数据的（库名）键  arr是你将要存进去数据的数组 */
function savedata(keyname,arr){
    let json=JSON.stringify(arr);
    localStorage.setItem(keyname,json);

}
