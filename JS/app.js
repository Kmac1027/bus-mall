'use strict'

var parentElement = document.getElementById('here');
var parentList = document.getElementById('list')
var itemArray = [];
var maxClick = 25;

function item(filepath, alt, title) {
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  this.clickCount = 0;
  this.itemShown = 0;
  itemArray.push(this);
}

new item('../IMG/bag.jpg', 'bag', 'bag');
new item('../IMG/banana.jpg', 'banana', 'banana');
new item('../IMG/bathroom.jpg', 'bathroom', 'bathroom');
new item('../IMG/boots.jpg', 'boots', 'boots');
new item('../IMG/breakfast.jpg', 'breakfast', 'breakfast');
new item('../IMG/bubblegum.jpg', 'bubblegum', 'bubblegum');
new item('../IMG/chair.jpg', 'chair', 'chair');
new item('../IMG/cthulhu.jpg', 'cthulhu', 'cthulhu');
new item('../IMG/dog-duck.jpg', 'dog duck', 'dog duck');
new item('../IMG/dragon.jpg', 'dragon', 'dragon');
new item('../IMG/pen.jpg', 'pen', 'pen');
new item('../IMG/pet-sweep.jpg', 'pet sweep', 'pet sweep');
new item('../IMG/scissors.jpg', 'scissors', 'scissors');
new item('../IMG/shark.jpg', 'shark', 'shark');
new item('../IMG/sweep.png', 'sweep', 'sweep');
new item('../IMG/tauntaun.jpg', 'tauntaun', 'tauntaun');
new item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
new item('../IMG/usb.gif', 'usb', 'usb');
new item('../IMG/unicorn.jpg', 'unicorn', 'unicorn');
new item('../IMG/water-can.jpg', 'water-can', 'water-can');
new item('../IMG/wine-glass.jpg', 'wine glass', 'wine glass')

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