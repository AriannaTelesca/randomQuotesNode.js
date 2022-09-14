var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["cat", "girl", "boy", "dog", "man", "friend", "police", "rain", "univers", "computer", "doctor", "sea", "chicken", "tree", "dinosaur", "happiness", "freedom", "nature", "son", "sun"];
verbs = ["run", "kiss", "send", "listen", "narrow", "pretend", "target", "knock", "deem", "slide", "lay", " facilitate", "slip", "found", "resign", "display", "fill", "belong", "comment", "buy"];
adjectives = ["beautiful", "lazy", "wooden", "lovely", "dumb", "rough", "soft", "warm", "oceanic", "talented", "fierce", "third", "sparkling", "impressive", "tearful", "cheap", "royal", "cool", "safe", "foolish"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "generously", "possibly", "warmly", "regularly", "poorly", "continually", "especially", "usually", "too", "devotedly"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];


var quot = [];

function sentence() {
  var rand1 = Math.floor(Math.random() * 20);
  var rand2 = Math.floor(Math.random() * 20);
  var rand3 = Math.floor(Math.random() * 20);
  var rand4 = Math.floor(Math.random() * 20);
  var rand5 = Math.floor(Math.random() * 20);
  var rand6 = Math.floor(Math.random() * 10);
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + verbs[rand3] + " because the " + nouns[rand4] + " " + adverbs[rand5] + " " + verbs[rand6] + " " + preposition[rand6] + " a " + adjectives[rand2] + " " + nouns[rand5] + ".";

quot.push(content);

};

for(x=0; x<100; x++){
  sentence();
}


var firstname = ['John', 'Timur', 'Guillaume', 'Sophie', 'Dante', 'Jilani', 'Arnaud', 'Bhama', 'Clément', 'Arianna', 'Anthony', 'Arthur', 'Framçois', 'Younes', 'Naim', 'Felicien', 'Arnold', 'Quentin', 'Omar', 'Mhedi'];
var lastname = ['Camilleri', 'Tabucchi', 'Bocaccio', 'Calvino', 'Alighieri', 'Sapienza', 'Morante', 'Ottieri', 'Pasolini', 'Leopardi', 'Manzoni', 'Tolstoj', 'Dostoevskij', 'Flaubert', 'Stendal', 'Proust', 'Woolf', 'Wallace', 'Pessoa', 'Rimbaud']

// var faker = require('faker');

var nameA = [];

function author() {
  var rand1 = Math.floor(Math.random() * 20);
  var rand2 = Math.floor(Math.random() * 20);
  var name = firstname[rand1] + " " + lastname[rand2];

  nameA.push(name);

}

for(x=0; x<100; x++){
    author();
}


var apiQuotes = [];

for(x=0; x<100; x++){
  var sent = {};
  sent.author = nameA[x];
  sent.quote = quot[x];

  apiQuotes.push(sent);
}


module.exports = apiQuotes;

