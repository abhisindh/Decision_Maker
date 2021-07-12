var selectedSet=[];
var selectedSetName='';
function reset(){
    if (confirm('Are you sure you want to reset the order of list items?')){
        var setOne=['IMG_20210709_200308.jpg', 'IMG_20210709_200357.jpg', 'IMG_20210709_200340.jpg', 'IMG_20210709_200408.jpg', 'IMG_20210709_200419.jpg', 'IMG_20210709_200432.jpg', 'IMG_20210709_200445.jpg', 'IMG_20210709_200454.jpg', 'IMG_20210709_200501.jpg', 'IMG_20210709_200512.jpg', 'IMG_20210709_200521.jpg', 'IMG_20210709_200536.jpg', 'IMG_20210709_200545.jpg', 'IMG_20210709_200552.jpg', 'IMG_20210709_200600.jpg', 'IMG_20210709_200648.jpg', 'IMG_20210709_200832.jpg', 'IMG_20210709_200913.jpg','IMG_20210712_092905.jpg']
    var setTwo=['a','b','c','d','e','f','g','h']
    var setThree=['1','2','3','4','5','6']
    localStorage.setItem('setOne',JSON.stringify(setOne));
    localStorage.setItem('setTwo',JSON.stringify(setTwo));
    localStorage.setItem('setThree',JSON.stringify(setThree));
    }
    
}
function selectSet(set){
    var all=document.getElementsByClassName('set-button');
    for(var i=0;i<all.length;i++){
        all[i].style.backgroundColor='#29E6B4';
    }
    selectedSet=JSON.parse(localStorage.getItem(set));
    selectedSetName=set;
    console.log(selectedSet);
    document.getElementById('reset').disabled=false;
    document.getElementById('select').disabled=false;
    document.getElementById(set).style.backgroundColor='#E65629'
}
function selectItem(){
    selection=selectionAlgorithm();
    
    
    

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

    return selectedSet[Math.floor(((len*0.9)**(x))-1)];
}
