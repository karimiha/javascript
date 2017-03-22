// on va changer l'objet className

//Identification de l'élément
var fly2 = document.getElementById('fly2').getElementsByTagName('div')
[0]
//on définie notre fonction jump
function jump(){
  console.log( [fly2] )
  fly2.className = "jump";
  setTimeout(function(){
    fly2.className = 'run'
  }, 300 )
}
// on utilise le event listener
fly2.addEventListener( "click" ,jump )

console.log(fly2)
