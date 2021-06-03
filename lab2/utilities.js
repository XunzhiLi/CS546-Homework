function deepEquality(obj1, obj2)
{
    if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null))
     {
        if (Object.keys(obj1).length != Object.keys(obj2).length)
        {
          throw'The length of two objs are not same'
        }
        else
        {
            for (var key in obj1)
            {
                if (obj2.hasOwnProperty(key))
                {  
                    if (obj1[key]!=obj2[key])
                    { 
                        throw'same key of two objs has different value'
                    }
                }
                else{
                    throw'two objs do not have same key'
                }
            }
            return 'two objs are same!'
        }
    }
    else{
        throw'wrong input'
    }
}

// -------------------------------------------------------------------

function uniqueElements(arr)
{
    if(arr == null){
        throw 'input is null'
    }
    else
    {
        if(typeof arr!='object'){
            throw 'argument is not an ogbject'
        }
        else{
            if(arr.constructor!=Array)
            {
                throw 'object is not an array'
            }
            else
            {
                var arr1 =[]
                for(i in arr)
                {
                    if(arr1.includes(arr[i])==false)
                    {
                        arr1.push(arr[i])
                    }
                }
            }
        return arr1.length
        }
    }
}

// -------------------------------------------------------------------

function countOfEachCharacterInString(str)
{
    if(str == null)
    {
        throw 'argument is null'   
    }
    else
    {
        if(typeof str !='string')
        {
            throw 'argument is not a tring' 
        }
        else
        {
            lenofstring = str.length
            var obj1={}
            for(i in str)
            {
                if(obj1.hasOwnProperty(str[i])==false)
                {
                    let key =str[i]
                    j = 0
                    for (g=0;g<lenofstring;g++)
                    {
                        if(str[g]==str[i])
                        {
                            j++
                        }
                    }
                    let value = j
                    obj1[key]=value
                }   
            } 
        }
    return obj1
    }
}

module.exports = {
    firstName: "Xunzhi", 
    lastName: "Li", 
    studentId: "10457500",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};