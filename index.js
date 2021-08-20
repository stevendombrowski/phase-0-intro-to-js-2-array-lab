// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

var destructivelyAppendCat = function(name){
    cats.push(name);
  }
var destructivelyPrependCat = function(name){
    cats.unshift(name);
}
var destructivelyRemoveFirstCat = function() {
    cats.shift();
}
var destructivelyRemoveLastCat = function() {
    cats.pop();
}
var appendCat = function(name) {
    return[...cats, name];
}
var prependCat = function(name) {
    return[name, ...cats]
}
var removeLastCat = function() {
    return cats.slice(0, cats.length - 1);
}
var removeFirstCat = function(){
    return cats.slice(1)
}
