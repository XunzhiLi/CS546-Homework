const fd = require("./fileData")
const fm = require("./textMetrics")
const fs = require('fs')
const path = require('path')
var result={
        'totalLetters': 'total number of letter characters in the text',
        'totalNonLetters': 'total number of non-letters in the text',
        'totalVowels': 'total number of vowels in the text (not counting y)',
        'totalConsonants': 'total number of consonants in the text (counting y)',
        'totalWords': 'total number of words in the text; a word is defined as any sequence of letters broken by any not-letter.For example, the phrase to-do is two words; a word does not start until a letter appears',
        'uniqueWords': 'total number of unique words that appear in the lowercased text',
        'longWords': 'number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words',
        'averageWordLength': 'the average number of letters in a word in the text; this is counting the individual words, not unique words',
        'wordOccurrences': 'a dictionary of each word and how many times each word occurs in the text'
    }



try {
       
        if (fs.existsSync('./chapter1_result.json')){
                fd.getFileAsJSON('./chapter1_result.json').then((b)=>{
                        console.log('----------------------------------------chapter1-----------------------------------')
                        console.log(b)
                            })
        }
        else{  
                fd.getFileAsString('./chapter1.txt').then((r)=>{
                        fm.totalletters(r,result)
                        fm.totalWords(r,result)
                        fm.totalVowels(r,result)
                        fm.uniqueWords(r,result)
                        fm.longWords(r,result)
                        fm.averageWordLength(r,result)
                        fm.wordOccurrences(r,result)
                        fd.saveJSONToFile('./chapter1_result.json', result)
        
                })

}
        
} catch (error) {
        console.log(error)
        
}

try {
       
        if (fs.existsSync('./chapter2_result.json')){
                fd.getFileAsJSON('./chapter2_result.json').then((b)=>{
                        console.log('----------------------------------------chapter2-----------------------------------')
                        console.log(b)
                            })
        }
        else{  
                fd.getFileAsString('./chapter2.txt').then((r)=>{
                        fm.totalletters(r,result)
                        fm.totalWords(r,result)
                        fm.totalVowels(r,result)
                        fm.uniqueWords(r,result)
                        fm.longWords(r,result)
                        fm.averageWordLength(r,result)
                        fm.wordOccurrences(r,result)
                        fd.saveJSONToFile('./chapter2_result.json', result)
        
                })

}
        
} catch (error) {
        console.log(error)
        
}

try {
       
        if (fs.existsSync('./chapter3_result.json')){
                fd.getFileAsJSON('./chapter3_result.json').then((b)=>{
                        console.log('----------------------------------------chapter3-----------------------------------')
                        console.log(b)
                            })
        }
        else{  
                fd.getFileAsString('./chapter3.txt').then((r)=>{
                        fm.totalletters(r,result)
                        fm.totalWords(r,result)
                        fm.totalVowels(r,result)
                        fm.uniqueWords(r,result)
                        fm.longWords(r,result)
                        fm.averageWordLength(r,result)
                        fm.wordOccurrences(r,result)
                        fd.saveJSONToFile('./chapter3_result.json', result)
        
                })

}
        
} catch (error) {
        console.log(error)
        
}








