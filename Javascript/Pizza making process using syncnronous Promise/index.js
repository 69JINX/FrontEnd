let x, y, z;
function getIngredients() {
    return new Promise((resolve, reject) => {        //  Promise Creation
        setTimeout(() => {
            x = 'Cheese and flour is ready to use...';
            resolve(x);
            // reject('Bad Cheese'); 
        }, 5000)
    })
}

function makeDough() {
    return new Promise((resolve, reject) => {        //  Promise Creation
        setTimeout(() => {
            y = 'Dough is ready to use...';
            resolve(y);
            // reject('Dough is not properly ready...'); 
        }, 3000)
    })
}

function bakePizza() {
    return new Promise((resolve, reject) => {        //  Promise Creation
        setTimeout(() => {
            z = 'Pizza is ready to serve...';
            resolve(z);
            // reject('Pizza is not ready...'); 
        }, 3000)
    })
}

async function Pizza(){     // Promise Handeling
    let data1 = await getIngredients();
    console.log(data1);
    let data2 = await makeDough();
    console.log(data2);
    let data3 = await bakePizza();
    console.log(data3);
}

Pizza();