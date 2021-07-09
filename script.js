var arr=[]
function displayName(){
  var shirts = ['IMG_20210709_200308.jpg', 'IMG_20210709_200357.jpg', 'IMG_20210709_200340.jpg', 'IMG_20210709_200408.jpg', 'IMG_20210709_200419.jpg', 'IMG_20210709_200432.jpg', 'IMG_20210709_200445.jpg', 'IMG_20210709_200454.jpg', 'IMG_20210709_200501.jpg', 'IMG_20210709_200512.jpg', 'IMG_20210709_200521.jpg', 'IMG_20210709_200536.jpg', 'IMG_20210709_200545.jpg', 'IMG_20210709_200552.jpg', 'IMG_20210709_200600.jpg', 'IMG_20210709_200648.jpg', 'IMG_20210709_200832.jpg', 'IMG_20210709_200913.jpg'];
  

  if (localStorage.getItem('name')==''){
    localStorage.setItem('name',JSON.stringify(shirts));
  }
  var Database=JSON.parse(localStorage.getItem("name")); 
  console.log(Database);
  arr=Database
}

function reset(){
  localStorage.setItem('name','')
  displayName()
}

function select(){
  selection=arr[Math.floor(Math.random() * arr.length)]
  console.log(selection);
  const index=arr.indexOf(selection);
  arr.splice(index,1);
  arr.push(selection);
  localStorage.setItem('name',JSON.stringify(arr));
  addImage(selection);
  displayName()
}
function addImage(x){
  var source='images/shirts1/'+x;
  document.getElementById('image').setAttribute('src',source)
  
}