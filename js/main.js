// GO!
var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

// TASK 1 -- Show/Hide Nav
document.querySelector("#hide-nav button").addEventListener('click',function(){
var navMenuEl = document.querySelector('.nav-menu');
navMenuEl.classList.toggle('nav-menu-hidden')

})
// TASK 2 -- Select an Icon
var collectionItemEls = document.querySelectorAll('.option')
forEach(collectionItemEls, function(optionEl, i, theArr){
  optionEl.addEventListener('click', function(evt){
  var wholeTargetEl = evt.currentTarget;
  if(wholeTargetEl.className !== 'selected'){
    wholeTargetEl.classList.toggle('selected')
  }
})
})

// TASK 3 -- Move Item From List to List
var numberCircleEl = document.querySelectorAll('.point')
var pointBarEl = document.querySelector('.total-points')
var pointTotal = parseInt(pointBarEl.textContent)
forEach(numberCircleEl, function(circleButton, i, theArr){
  circleButton.addEventListener('click', function(evt){
    var targetCircle = evt.target
    if(targetCircle.className === 'point'){
      var pointValue = parseInt(targetCircle.textContent)
      pointTotal += pointValue;
      console.log(pointTotal)
      pointBarEl.innerHTML ='<h4 class="total-points">' + pointTotal + '</h4>'
    }
  })
})



// TASK 4 -- Add Guest to List
var goodListWholeEl = document.querySelector('.good-standing-list')
var badListWholeEl = document.querySelector('.probation-list')
var goodListEl = document.querySelectorAll('.good-standing-list li')
var badListEl = document.querySelectorAll('.probation-list li')

forEach(goodListEl, function(nameEl, i, theArr){
  nameEl.addEventListener('click', function(evt){
    var targetName = evt.target
      // console.log(targetName)
      if(badListWholeEl.contains(targetName) === false){
        badListWholeEl.appendChild(targetName);
      }else{
        goodListWholeEl.appendChild(targetName)
      }
    })
  })

forEach(badListEl, function(nameEl, i, theArr){
  nameEl.addEventListener('click', function(evt){
    var targetName = evt.target
    var justName = targetName.textContent
    // console.log(targetName)
    if(goodListWholeEl.contains(targetName) === false){
      goodListWholeEl.appendChild(targetName);
    }else{
      badListWholeEl.appendChild(targetName)
    }
  })
})

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

var bgColorEl = document.querySelectorAll('.palette')
var textToChangeEl = document.querySelector('.msg')

forEach(bgColorEl, function(colorEl, i, theArr){
  colorEl.addEventListener('click', function(evt){
  var targetName = evt.target
  var targetClass = targetName.className
  textToChangeEl.className = 'msg ' + targetClass
  })
})
