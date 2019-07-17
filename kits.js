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

/* 有时做类似于树状结构的数据页面编写需要把数据线初步处理
不然不方便动态生成结构,下面使用递归的方法进行封装进行数据的处理
当然，如果服务器端给的数据已经是树状结构最好了，但是也要预备给的数据
就是那么操蛋 
*/
/* 
给的数据举例：
let navData = [
    { id: 1, text: '一级菜单A', parentId: null },
    { id: 2, text: '一级菜单B', parentId: null },
    { id: 3, text: '一级菜单C', parentId: null },
    { id: 4, text: '二级菜单AA', parentId: 1 },
    { id: 5, text: '二级菜单AB', parentId: 1 },
    { id: 6, text: '二级菜单AC', parentId: 1 },
    { id: 7, text: '二级菜单BA', parentId: 2 },
    { id: 8, text: '二级菜单BB', parentId: 2 },
    { id: 9, text: '二级菜单BC', parentId: 2 },
    { id: 10, text: '二级菜单CA', parentId: 3 },
    { id: 11, text: '二级菜单CB', parentId: 3 },
    { id: 12, text: '二级菜单CC', parentId: 3 },
    { id: 13, text: '三级菜单AAA', parentId: 4 },
    { id: 14, text: '三级菜单BAA', parentId: 7 },
    { id: 15, text: '三级菜单CAA', parentId: 10 }
  ]; */
  function fn(arr,fjid){
    //   定义一个空数组存贮修改后的数据
    let temp=[];
    // 遍历给的服务器的数据
    arr.forEach(e => {
        // 利用parentId条件筛选树状的第一级数据
        if(e.parentId==fjid){
            // 满足条件的第一级元素就放进去
            temp.push(e)
            /* 放进一级元素后递归再次探索下一级，判断条件换成
            子级判断条件,每个一级元素应该有关于他的子级元素 id */
            e.child=fn(arr,e.id)
        }
    });
    // 遍历完后temp存储的就是树状结构数据
    return temp;
  }
//   调用方法
// let memu=fn(navData,null)

