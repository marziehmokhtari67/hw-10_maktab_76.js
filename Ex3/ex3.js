function validate(x){
    try{
     JSON.parse(x)
    }
  catch(error){
        
        return "invalid"
    }
return "valid"
}
console.log(validate("[2]"));
