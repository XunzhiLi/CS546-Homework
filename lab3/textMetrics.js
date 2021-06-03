
// 1-2
var total = ''
async function totalletters(s,result){
    count = 0
    for(i of s){
        if(/^[a-zA-Z]*$/.test(i))
        {
            count++
        }
    }
    result['totalLetters']=count
    result['totalNonLetters']=s.length-count
    total = count
}

// 3:totalwords

async function totalWords(s,result){
    s = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0123456789\n]/g,"")
    s = s.replace("\t", " ")
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    s = s.replace(/(^\s*)|(\s*$)/gi,"")
    result['totalWords']=s.split(' ').length

}

// 4-5:Vowels and Consonants

async function totalVowels(s,result){
    
    count = 0
    for(i of s){
        if(/[aeiouAEIOU]/.test(i))
        {
            count++
        }
    }
    result['totalVowels']= count
    result['totalConsonants']= total-count
    
}

// 6:uniqueWords

async function uniqueWords(s,result){
    s = s.replace(/\[/g,"")         //[
    s = s.replace(/\]/g,"")      
    s = s.replace(/[\/#?!$%\^&\*;:{}=\-_`~()0123456789\n]/g,"")
    s = s.replace(/[,.]/g," ")  
    s = s.replace(/\s/, " ")
    s = s.replace(/"/g,"")
    s = s.replace(/ '/g,"")
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    s = s.replace(/(^\s*)|(\s*$)/gi,"")
    s = s.toLowerCase( )
    arr = s.split(' ')
    var newarr = []
    for(i=0;i<arr.length;i++){
        if(newarr.indexOf(arr[i])==-1)
        {
            newarr.push(arr[i])
        }
    }
    result['uniqueWords']=newarr.length

}

// longwords
async function longWords(s,result){
    s = s.replace(/\[/g,"")         //[
    s = s.replace(/\]/g,"")      
    s = s.replace(/[\/#?!$%\^&\*;:{}=\-_`~()0123456789\n]/g,"")
    s = s.replace(/[,.]/g," ")  
    s = s.replace(/\s/, " ")
    s = s.replace(/"/g,"")
    s = s.replace(/ '/g,"")
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    s = s.replace(/(^\s*)|(\s*$)/gi,"")
    s = s.toLowerCase( )
    arr = s.split(' ')
    n = 0
    for(i in arr)
    {
        if(arr[i].length>=6){
            n++
        }
    }
    result['longWords'] = n
}


// averageWordLength

async function averageWordLength(s,result)
{
    s = s.replace(/\[/g,"")         //[
    s = s.replace(/\]/g,"")      
    s = s.replace(/[\/#?!$%\^&\*;:{}=\-_`~()0123456789\n]/g,"")
    s = s.replace(/[,.]/g," ")  
    s = s.replace(/\s/, " ")
    s = s.replace(/"/g,"")
    s = s.replace(/ '/g,"")
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    s = s.replace(/(^\s*)|(\s*$)/gi,"")
    s = s.toLowerCase( )
    var arr = s.split(' ')
    var sum = 0
    for(i=0;i<arr.length;i++)
    {
        
        sum +=arr[i].length
    }
    result['averageWordLength']=sum/arr.length
}


// wordOccurrences
async function wordOccurrences(s,result)
{
    s = s.replace(/\[/g,"")         //[
    s = s.replace(/\]/g,"")      
    s = s.replace(/[\/#?!$%\^&\*;:{}=\-_`~()0123456789\n]/g,"")
    s = s.replace(/[,.]/g," ")  
    s = s.replace(/\s/, " ")
    s = s.replace(/"/g,"")
    s = s.replace(/ '/g,"")
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    s = s.replace(/(^\s*)|(\s*$)/gi,"")
    s = s.toLowerCase( )
    arr = s.split(' ') 
    arr.sort()
    obj={}  
    for(i in arr){  
            if(obj.hasOwnProperty(arr[i])==false){
                    obj[arr[i]]=1
            }
            else{
                    
                    obj[arr[i]] ++
            }

    }
    result['wordOccurrences']=obj
}




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

module.exports = {
    firstName: "Xunzhi", 
    lastName: "Li", 
    studentId: "10457500",
    total,
    totalletters,
    totalWords,
    totalVowels,
    uniqueWords,
    longWords,
    averageWordLength,
    wordOccurrences
  };