function generate(){
    const wrapper = document.querySelector(".wrapper"),
inp = wrapper.querySelector(".form input"),
btn = wrapper.querySelector(".form button"),
image = wrapper.querySelector(".qrc img");
btn.addEventListener("click", ()=>{
    let qr = inp.value;
    if(!qr)
        return;
    btn.innerText = "GENERATING...";
    image.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qr}`;
    image.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        btn.innerText = "GENERATE QR CODE";
    });    
});
inp.addEventListener("keyup", ()=>{
    if(!inp.value){
        wrapper.classList.remove("active");
    }
});
}
document.querySelector(".form button").addEventListener("click", ()=>{
    generate();
});