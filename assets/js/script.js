const dq = (el)=>document.querySelector(el);
const dqAl = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = dq('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        dq('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        dq('.pizzaBig img').src = pizzaJson[key].img;
        dq('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

        dq('.pizzaWindowArea').style.opacity = 0;
        dq('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
             dq('.pizzaWindowArea').style.opacity = 1;
        }, 200);
       
    });
    
    dq('.pizza-area').append(pizzaItem);
});