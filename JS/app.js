'use strict'

var parentElement = document.getElementById('here');
var parentList = document.getElementById('list')
var itemArray = [];
var maxClick = 25;

function Item(filepath, alt, title) {
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clickCount = 0;
  this.itemShown = 0;
  itemArray.push(this);
}

new Item('../IMG/bag.jpg', 'bag', 'bag');
new Item('../IMG/banana.jpg', 'banana', 'banana');
new Item('../IMG/bathroom.jpg', 'bathroom', 'bathroom');
new Item('../IMG/boots.jpg', 'boots', 'boots');
new Item('../IMG/breakfast.jpg', 'breakfast', 'breakfast');
new Item('../IMG/bubblegum.jpg', 'bubblegum', 'bubblegum');
new Item('../IMG/chair.jpg', 'chair', 'chair');
new Item('../IMG/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Item('../IMG/dog-duck.jpg', 'dog duck', 'dog duck');
new Item('../IMG/dragon.jpg', 'dragon', 'dragon');
new Item('../IMG/pen.jpg', 'pen', 'pen');
new Item('../IMG/pet-sweep.jpg', 'pet sweep', 'pet sweep');
new Item('../IMG/scissors.jpg', 'scissors', 'scissors');
new Item('../IMG/shark.jpg', 'shark', 'shark');
new Item('../IMG/sweep.png', 'sweep', 'sweep');
new Item('../IMG/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
new Item('../IMG/usb.gif', 'usb', 'usb');
new Item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
new Item('../IMG/water-can.jpg', 'water-can', 'water-can');
new Item('../IMG/wine-glass.jpg', 'wine glass', 'wine glass')

function random() {
  var randomImage = randomNumber(itemArray.length);
  var chooseImage = itemArray[randomImage];
  chooseImage.itemShown++;
  var imageElement = document.createElement('img');
  imageElement.setAttribute('src', chooseImage.filepath);
  imageElement.setAttribute('alt', chooseImage.alt);
  imageElement.setAttribute('title', chooseImage.title);
  parentElement.appendChild(imageElement);
}
function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function onClick(event) {
  var alt = event.target.alt;
  maxClick--;
  if (maxClick !== 0) {
    for (var i = 0; i < itemArray.length; i++) {
      if (alt === itemArray[i].alt) {
        itemArray[i].clickCount++;
      }
    }
    parentElement.innerHTML = '';
    random();
    random();
    random();
  }
  else{
    parentElement.innerHTML = '';
    for (var i = 0; i < itemArray.length; i++) {
      var li = document.createElement('li');
      li.textContent = itemArray[i].alt + ' had ' + itemArray[i].clickCount + ' vote(s) and was shown ' + itemArray[i].itemShown + ' time(s).'
      parentList.appendChild(li);
    }
  }
}

parentElement.addEventListener('click', onClick);

random();
random();
random();