
let put =document.getElementById("in")
// let num = Number(put.value)
let bt =document.getElementById("btn")

bt.addEventListener("click", ()=>{
    i.textContent=put.value
    
})



let d =document.createElement("div")
d.style.backgroundColor="grey"
d.style.width="400px"
d.style.height="100px"
d.style.display="flex"
d.style.borderRadius="24px"
d.style.justifyContent="space-evenly"
d.style.alignItems="center"
document.body.appendChild(d)

let k = document.createElement("div")
k.style.backgroundColor="grey"
k.style.width="120px"
k.style.height="80px"
k.textContent="+"
k.style.color="white"
k.style.fontSize="70px"
k.style.textAlign="center"



k.addEventListener("mousedown", () => {
    k.style.backgroundColor = "green";
})
k.addEventListener("mouseup", () => {
    k.style.backgroundColor = "grey";
    
})

k.addEventListener("click", ()=>{
    let c=Number(i.textContent)
    i.textContent=c+1
})


d.appendChild(k) 




let i =document.createElement("div")
i.innerHTML=put.value
i.style.backgroundColor="grey"
i.style.fontSize="60px"
i.style.alignContent="center"
i.style.textAlign="center"
i.style.boxSizing="border-box"
i.style.width="100px"
i.style.height="100px"
d.appendChild(i) 

let v=document.createElement("div")
v.textContent="-"
v.style.backgroundColor="blue"
v.style.width="120px"
v.style.height="80px"
v.style.color="white"
v.style.fontSize="70px"
v.style.boxSizing="border-box"
v.style.textAlign="center"
v.style.backgroundColor="grey"

d.appendChild(v)
v.addEventListener("mousedown", () => {
    v.style.backgroundColor = "red";
})
v.addEventListener("mouseup", () => {
    v.style.backgroundColor = "grey";
    
})

v.addEventListener("click", ()=>{
    let o=Number(i.textContent)
    i.textContent=o-1
})

let col =document.getElementById("color");
col.addEventListener("input", () => {
    i.style.color = col.value;
});