const fs = require('fs');

let dictionaryList = [];

const longestWord = (letters) => {

    let longestWord = '';
    const charArray = [...letters];

    dictionaryList.forEach((word) => {

        let wordArray = [...word];
        let tempArray = charArray.slice();
        let counter = wordArray.length;

        wordArray.forEach((w) => {
            if (tempArray.includes(w)) {
                for(let i = 0; i < tempArray.length; i++) {
                    if(tempArray[i] === w) {
                        tempArray.splice(i, 1);
                        counter--;
                        break;
                    }
                }
            }
        });

        if(counter == 0 || (tempArray.length == 0 && wordArray.length == charArray.length)) {
            if (word.length > longestWord.length) longestWord = word;
        }

    });

  return longestWord;

};

class TaskWordFinder {
    longest = '';
    longestWordFinder(localFile, letters) {
        if (letters.length > 12 ) throw 'Entered character string is longer than 12 characters. Please provide a string of up to 12 characters.'
        console.log('Your filepath is: ' + localFile);
        console.log('Your string of letters is: ' + letters);
        dictionaryList = (fs.readFileSync(localFile, {encoding: 'utf8'})).split('\r\n');
        
        this.longest = longestWord(letters);
    }
}

const args = process.argv.slice(2);
const taskWordFinder = new TaskWordFinder();
taskWordFinder.longestWordFinder(args[0], args[1]);
if(taskWordFinder.longest == '') {
    console.log("Your letters don't have a match with any of the words in your provided file.")
} else {
    console.log(`Your longest word is: ${taskWordFinder.longest}`);
}
