var _ = require('lodash');

module.exports = {

  secondLargest(array) {
    if(array.length<2){
      throw new Error(`length must be greater than 1`);
    }
    var max=array[0];var value=0
    for(var index=0;index<array.length-1;index++){  
      if(typeof(array[index])!='number'){throw new Error(`data type must be a integer`); break;}
      if(array[index+1]>max){
        max=array[index+1];
        value=index+1; 
      }
    } 
    var temp;temp=array[0];
    array[0]=max;
    array[value]=temp;
    var max1=array[1];
    for(var index=1;index<array.length-1;index++){  
        if(array[index+1]>max1)
          {max1=array[index+1];}
    } 
    return max1;
  },


  calculateFrequency(string) {
    var arr=[];var value=0;
    var dict={};
    if(string.length==0){throw new Error(`length must be greater than 0`);
    }
    for(var index=0;index<string.length;index++){
      if((string.charCodeAt(index)>=97)&&(string.charCodeAt(index)<=122)){
        value=0;
        for(var key in dict){ 
          if(dict[key]===dict[string.charAt(index)]){
            dict[string.charAt(index)]+=1;value++;break;
          } 
        }  
        if(value===0){
          dict[string.charAt(index)]=1; 
          value=0; 
        }  
      }    
    }
    return dict;
  },


  flatten: function flatten(unflatObject){
    var dict={};var final={};var newf={};
    dict=unflatObject;
         
    if(_.isEmpty(unflatObject)){
      throw new Error(`no key in object`);
    }
    if(typeof unflatObject==='object'){
      for(var key in dict){
        if(!dict.hasOwnProperty(key)) continue;
        if((typeof dict[key])=='object'){
          var newf = flatten(dict[key]); 
          for(var i in newf){
            if(!newf.hasOwnProperty(i)) continue;
            final[key+"."+i]=newf[i];
          }
        }
        else{
          final[key]=dict[key];
        } 
      }  
    }
    else{
      throw new Error(`object is not passed`);
    } 
    return final;
  }
}