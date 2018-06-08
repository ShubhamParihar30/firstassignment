// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // rite your code here
  var max=array[0];var index=0
  for(var i=0;i<array.length-1;i++)
   {  
      if(array[i+1]>max)
        {max=array[i+1];
          index=i+1; }
   } 
      var temp;temp=array[0];
      array[0]=max;
      array[index]=temp;
    var max1=array[1];
  for(var i=1;i<array.length-1;i++)
   {  
      if(array[i+1]>max1)
        {max1=array[i+1];}
   } 
  return max1;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) 
{
  // Writarr
     var arr=[];var j=0;
     var dict={};
     for(var i=0;i<string.length;i++)
      {
       if((string.charCodeAt(i)>=97)&&(string.charCodeAt(i)<=122))
       {    j=0;
          for(var key in dict)
        { if(dict[key]===dict[string.charAt(i)])
                
               {  dict[string.charAt(i)]+=1;j++;break;
                  }
              
        }  
            if(j===0) 
               {dict[string.charAt(i)]=1; 
               j=0; }
              
       }  
          
       }
  return dict;
 }

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject)
{
  // Write your code here
      var dict={};var final={};var newf={};
      dict=unflatObject;
       for(var key in dict)
       {
         if(!dict.hasOwnProperty(key)) continue;
         
            if((typeof dict[key])=='object') 
              { var newf = flatten(dict[key]); 
                for(var i in newf)
                    {if(!newf.hasOwnProperty(i)) continue;
                     final[key+"."+i]=newf[i];
                     }
              }
            else
              {
                final[key]=dict[key];
              }
         
           
       }  
  return final;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
 
}
