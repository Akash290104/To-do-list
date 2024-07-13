


input.addEventListener("keydown", (e)=>{
    if(e.key==="Enter"){
        

        let item=document.createElement("div")
        let task=document.createElement("div")
        let symbols=document.createElement("div")
        let check=document.createElement("i")
        let trash=document.createElement("i")
       
       check.className="fa-solid fa-check"
       trash.className="fa-solid fa-trash"
       symbols.appendChild(check)
       symbols.appendChild(trash)
       
       task.className="task"
       let input=document.querySelector("#input")
       let value=input.value
       task.innerHTML=value
        
      item.className="item"
      item.appendChild(task)
      item.appendChild(symbols)
      let todo=document.querySelector(".to-do")
      todo.append(item)
      input.value=""
      
      let count=0;
      check.addEventListener("click", ()=>{
        count++
        if(count%2!=0){
        check.style.color="limegreen"
        }else{
        check.style.color="black"
        }
    })
    
    trash.addEventListener("click", ()=>{
        item.remove()
    })

      
    }  
})




