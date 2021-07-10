var selectedSet=[];
var selectedSetName='';
debugArray=[];
function reset(){
    if (confirm('Are you sure you want to reset the order of list items?')){
        var setOne=['IMG_20210709_200308.jpg', 'IMG_20210709_200357.jpg', 'IMG_20210709_200340.jpg', 'IMG_20210709_200408.jpg', 'IMG_20210709_200419.jpg', 'IMG_20210709_200432.jpg', 'IMG_20210709_200445.jpg', 'IMG_20210709_200454.jpg', 'IMG_20210709_200501.jpg', 'IMG_20210709_200512.jpg', 'IMG_20210709_200521.jpg', 'IMG_20210709_200536.jpg', 'IMG_20210709_200545.jpg', 'IMG_20210709_200552.jpg', 'IMG_20210709_200600.jpg', 'IMG_20210709_200648.jpg', 'IMG_20210709_200832.jpg', 'IMG_20210709_200913.jpg']
    var setTwo=['a','b','c','d','e','f','g','h']
    var setThree=['1','2','3','4','5','6']
    localStorage.setItem('setOne',JSON.stringify(setOne));
    localStorage.setItem('setTwo',JSON.stringify(setTwo));
    localStorage.setItem('setThree',JSON.stringify(setThree));
    }
    
}
function selectSet(set){
    selectedSet=JSON.parse(localStorage.getItem(set));
    selectedSetName=set;
    console.log(selectedSet);
    document.getElementById('reset').style.display='none';
    document.getElementById('setOne').style.display='none';
    document.getElementById('setTwo').style.display='none';
    document.getElementById('setThree').style.display='none';
    document.getElementById('select').style.display='block';
}
function selectItem(){
    selection=selectionAlgorithm();

    console.log(selection);
    var lastOccur=debugArray.lastIndexOf(selection);
    debugArray.push(selection);
    if (lastOccur!=-1){
        console.log(debugArray.length-lastOccur);
    }
    

    const index=selectedSet.indexOf(selection);
    selectedSet.splice(index,1);
    selectedSet.push(selection);
    localStorage.setItem(selectedSetName,JSON.stringify(selectedSet));
    addImage(selection);
}
function addImage(x){
  var source='images/'+x;
  document.getElementById('image').setAttribute('src',source)
  
}
function selectionAlgorithm(){
    var len=selectedSet.length;
    var x=Math.random();
    console.log(x);
    return selectedSet[Math.floor(((len*0.9)**(x))-1)];
}
