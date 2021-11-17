# Code Exercise

This small Javascript file runs in node and takes two arguments: The first argument is to the filepath of a file that contains a list of  words; The second is a string of characters up to a max of 12. It then searches in the list of words for the longest word comprised of the characters in the string, and returns it.  
An example list of 10000 words can be found [here](https://goo.gl/aoEr9Q), and is included in this repo.

## Prereqs

- Node
- Terminal/Command Line

## Running it

You can run it like below:

`node {FILEPATH TO JS FILE} {FILEPATH TO LIST OF WORDS} {CHARACTER STRING}`

for example `node WordFinder.js words.txt transfdsfsnfoi` from within the root of this repo.