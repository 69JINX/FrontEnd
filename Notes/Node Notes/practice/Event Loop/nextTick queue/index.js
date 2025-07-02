Promise.reject().catch(()=>console.log("This is promise catched"));
process.nextTick(()=>console.log("This is nextTick"))
