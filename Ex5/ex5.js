// answer:
// promise.then(f1).catch(f2);
// Versus:
// promise.then(f1, f2);
// این دو قطعه کد یکسان نیستند زیرا در کد خط 2 اگر یک خطایی در دستور
// اتفاق بیافتد توسطthen
// .گرفته میشود و برگردانده میشودcatch
// مانند مثال زیر:
new Promise (function(resolve,reject){
    let x=2
    if (typeof(x)==="number"){
    resolve("hello")}
})
.then((a)=>console.log(b))
.catch(
    function(e){
        console.log(e);
    }
)
// f1در کد خط 4 به این صورت هست که بعد از
// هیچ زنجیره ای وجود ندارد که خطای موجود در 
// را بگیردf1
// مانند مثال زیر
new Promise (function(resolve,reject){
    resolve("hello")
})
.then(result=> console.log(resu),
error=>console.log(error))
