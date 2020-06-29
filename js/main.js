const fill1 = document.querySelector(".fill1");
const fill2 = document.querySelector(".fill2");
const fill3 = document.querySelector(".fill3");
const fill4 = document.querySelector(".fill4");
const fill5 = document.querySelector(".fill5");
const vista_previa = document.querySelector(".vista_previa");
const cerrar = document.querySelector(".cerrar");
const img_carrusel = document.querySelector(".img_carrusel");
const name_img = document.querySelector(".name_img");
const left_carrusel = document.querySelector(".left_carrusel");
const right_carrusel = document.querySelector(".right_carrusel");
let contador_ubicacion_img = 0;

const img = [
    {nombre:"DYWl4AjXcAAKK8t.jpg", ubicacion:"./img/img1.webp"},
    {nombre:"maxresdefault.jpg", ubicacion:"./img/img2.webp"},
    {nombre:"DYWl4AjXcAAKK8t.jpg", ubicacion:"./img/img1.webp"},
    {nombre:"head_ene.jpg", ubicacion:"./img/img4.webp"},
    {nombre:"VIVICALLCE.jpg", ubicacion:"./img/img5.webp"}
]
left_carrusel.addEventListener("click", ()=>{
    if(contador_ubicacion_img <=0){
        contador_ubicacion_img = 4
    }else{
        contador_ubicacion_img --;
    }
    console.log(contador_ubicacion_img);
    img_carrusel.src = img[contador_ubicacion_img].ubicacion;
    name_img.innerHTML = `<p>${img[contador_ubicacion_img].nombre}</p>`;
});
right_carrusel.addEventListener("click", ()=>{
    if(contador_ubicacion_img >=4){
        contador_ubicacion_img = 0
    }else{
        contador_ubicacion_img ++;
    }
    console.log(contador_ubicacion_img);
    img_carrusel.src = img[contador_ubicacion_img].ubicacion;
    name_img.innerHTML = `<p>${img[contador_ubicacion_img].nombre}</p>`;
});


fill1.addEventListener("click", ()=>{
    vista_previa.classList.add("active");
    img_carrusel.src = img[0].ubicacion;
    name_img.innerHTML = `<p>${img[0].nombre}</p>`;
    contador_ubicacion_img = 0;
    console.log(contador_ubicacion_img);
});
fill2.addEventListener("click", ()=>{
    vista_previa.classList.add("active");
    img_carrusel.src = img[1].ubicacion;
    name_img.innerHTML = `<p>${img[1].nombre}</p>`;
    contador_ubicacion_img = 1;
    console.log(contador_ubicacion_img);
});
fill3.addEventListener("click", ()=>{
    vista_previa.classList.add("active");
    img_carrusel.src = img[2].ubicacion;
    name_img.innerHTML = `<p>${img[2].nombre}</p>`;
    contador_ubicacion_img = 2;
    console.log(contador_ubicacion_img);
});
fill4.addEventListener("click", ()=>{
    vista_previa.classList.add("active");
    img_carrusel.src = img[3].ubicacion;
    name_img.innerHTML = `<p>${img[3].nombre}</p>`;
    contador_ubicacion_img = 3;
    console.log(contador_ubicacion_img);
});
fill5.addEventListener("click", ()=>{
    vista_previa.classList.add("active");
    img_carrusel.src = img[4].ubicacion;
    name_img.innerHTML = `<p>${img[4].nombre}</p>`;
    contador_ubicacion_img = 4;
    console.log(contador_ubicacion_img);
});




cerrar.addEventListener("click", ()=>{
    vista_previa.classList.remove("active");
});

console.log(img_carrusel);
console.log(img);