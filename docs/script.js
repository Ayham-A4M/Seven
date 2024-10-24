AOS.init();

if(window.innerWidth<=767){
    document.querySelectorAll('.meet-our-team .container>div').forEach((e)=>{
        e.removeAttribute('data-aos-duration');
        e.setAttribute('data-aos-duration',"500");
    })
}
// **************************************

const iconMeneu=document.querySelector('.icon-menue');
const meneu=document.querySelector('.links-menue');
const linksMeneu=document.querySelectorAll('.links-menue a');
console.log(linksMeneu);
// linksMeneu.forEach((e)=>{
//     e.setAttribute('style','left:-200%;');
// })
 async function come(index){
    // await linksMeneu[index].setAttribute('style',`animation: ComeMenue ${0+(i*100)}ms linear 0s 1 forwards;`);
    await new Promise((resolve,reject)=>{
        linksMeneu[index].setAttribute('style',`animation: ComeMenue ${150+(index*100)}ms linear 0s 1 forwards;`);
    })
 }
iconMeneu.addEventListener('click',()=>{
    meneu.classList.remove('hidden');
    meneu.classList.add('flex');
   for(let i=0;i<linksMeneu.length;i++){
    come(i);
    }
})
document.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('icon-menue')){
        meneu.classList.add('hidden');
        meneu.classList.remove('flex');
    }
})

//=============================================== 
const projects=document.querySelectorAll('.projects >div');


const buttons=document.querySelectorAll('.buttons button');
buttons.forEach((e)=>{
    e.addEventListener('click',()=>{
        buttons.forEach((e)=>{
            e.classList.remove('active-now');
            e.classList.add('not-active');
        })
        e.classList.remove('not-active');
        e.classList.add('active-now');
        clicked(e);
    })
})
// start buttons clicked
function removeHidden(e){
    projects.forEach((e)=>{
        if(e.classList.contains('hidden')){
        e.classList.remove('hidden');
        }
})
}
function clicked(e){
    let typeOfButton=e.getAttribute("type-button");
    if(typeOfButton==='all'){
        removeHidden(e);
        return;
    }
    removeHidden(e)
    projects.forEach((e)=>{
        if(!e.classList.contains(typeOfButton)){
            e.classList.add("hidden");  
        }
      
})

}
// end buttons clicked
// click goup btn
