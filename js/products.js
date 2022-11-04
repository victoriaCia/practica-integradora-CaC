var cad=""

if (document.getElementById('products')){
    for (let i=0; i<data.length;i++){
        cad+=`   
            <div class="card-item" id="prod">
                <a href=${data[i].link}>
                    <div class="card-item__img">
                        <img src=${data[i].img}>
                    </div>
                    <p class="card-item__title">${data[i].name}</p>
                    <p class="card-item__desc">${data[i].desc}</p>
                </a>
            </div>
            `
    }
}

document.getElementById('products').innerHTML=cad;