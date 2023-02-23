const calificacion = document.querySelectorAll('.calif');
const btn = document.querySelector('button');
const container = document.querySelector('.container');
const footer = document.querySelector('.attribution');



let select = '';

calificacion.forEach((elemento)=>{
    elemento.addEventListener('click', ()=>{
    container.classList.remove('backInDown');
    footer.classList.remove('backInDown');

        
        if(elemento.classList.contains('active')){
            elemento.classList.remove('active')
        }else{
            
            calificacion.forEach((e)=>{
                e.classList.remove("active");
            });

            elemento.classList.add("active");

        }
        select = elemento.textContent;
    });
});




function removerAction(){
    calificacion.forEach(elementos=>{
        elementos.classList.remove('active');
    })
    
}

btn.addEventListener('click',()=>{
    container.classList.add('backInDown');
    footer.classList.add('backInDown');

    
    if(select != ''){
        container.innerHTML = `

        <div class="Cimg2">
            <img src="images/illustration-thank-you.svg" alt="">
        </div>

        <div class = "selectedR"> You selected ${select} out of 5</div>
         

         <h2>Thank you!</h2>

         <p class = "message">We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch! </p>
        
        `
    }
})