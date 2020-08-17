'use strict'

var parentElement = document.getElementById('');
itemArray = [];

function item(filepath, alt, title){
  this.filepath = filepath;
  this.alt = alt;
  this.title = title;
  clickCount = 0;
  itemShown = 0;
}