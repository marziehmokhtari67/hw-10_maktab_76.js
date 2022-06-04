new Promise(function(resolve, reject) {
    setTimeout(() => {
    throw new Error("Whoops!");
    }, 1000);
    }).catch(alert);
    // در اینج کار نمیکند cath
    // ابتدا اجرا میشود promise 
    // سپس بعد از یک ثانیه کد داخل 
    // اجرا میشود و سپس خطا تولید میشود وsettimeout
    // نمیشودcatch 
    // زیرا قول اجرا شده است.