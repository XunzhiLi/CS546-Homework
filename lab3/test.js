const fd = require("./fileData")
const fm = require("./textMetrics")


// console.log('----------getFileAsString-----------')
// fd.getFileAsString('./text1.txt').then((r)=>{
//     console.log(r)
// })

console.log('----------getFileAsJSON-----------')
fd.getFileAsJSON('./1.json').then((r)=>{
    console.log(r)
})


// console.log('----------saveStringToFile-----------')
// fd.saveStringToFile(".test.txt",'i think i make it')

// console.log('----------saveJSONToFile-----------')
// self_info ={'Age': 7, 'Name': 'Manni'} 
// fd.saveJSONToFile("./test.json",self_info)




// var s = "Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"
// var result={
//     'totalLetters': 'total number of letter characters in the text',
//     'totalNonLetters': 'total number of non-letters in the text',
//     'totalVowels': 'total number of vowels in the text (not counting y)',
//     'totalConsonants': 'total number of consonants in the text (counting y)',
//     'totalWords': 'total number of words in the text; a word is defined as any sequence of letters broken by any not-letter.For example, the phrase to-do is two words; a word does not start until a letter appears',
//     'uniqueWords': 'total number of unique words that appear in the lowercased text',
//     'longWords': 'number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words',
//     'averageWordLength': 'the average number of letters in a word in the text; this is counting the individual words, not unique words',
//     'wordOccurrences': 'a dictionary of each word and how many times each word occurs in the text'
// }

// fm.totalletters(s,result)
// fm.totalWords(s,result)
// fm.totalVowels(s,result)
// fm.uniqueWords(s,result)
// fm.longWords(s,result)
// fm.averageWordLength(s,result)
// fm.wordOccurrences(s,result)
// console.log(result)




