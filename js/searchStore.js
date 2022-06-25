
const arrLocal = [];
  seoulStore.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.local);
    let nameStrR = nameStr.replace(/"/g, "");
    arrLocal.push(nameStrR); //배열에 담아주기
  });

  const arrSubLocal = [];
  seoulStore.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.subLocal);
    let nameStrR = nameStr.replace(/"/g, "");
    arrSubLocal.push(nameStrR); //배열에 담아주기
  });

  const arrStore = [];
  seoulStore.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.store);
    let nameStrR = nameStr.replace(/"/g, "");
    arrStore.push(nameStrR); //배열에 담아주기
  });

  const arrAddr = [];
  seoulStore.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.addr);
    let nameStrR = nameStr.replace(/"/g, "");
    arrAddr.push(nameStrR); //배열에 담아주기
  });

  const arrTel = [];
  seoulStore.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.tel);
    let nameStrR = nameStr.replace(/"/g, "");
    arrTel.push(nameStrR); //배열에 담아주기
  });

  function getJSON(){
    let table = document.getElementById('target');

    // alert(depth1.options[depth1.selectedIndex].text);
    
    let selLocal = depth1.options[depth1.selectedIndex].text;
    let subSelLocal = depth2.options[depth2.selectedIndex].text;

   
    let tr;

    var remTr = document.querySelector("#trId");
    if (remTr != null){
        remTr.parentNode.innerHTML="";
    }


    for(i=0; i<arrLocal.length; i++){

        if((arrLocal[i] == selLocal || selLocal=='전체') && (arrSubLocal[i] == subSelLocal || subSelLocal == '전체' )){
    
            tr = document.createElement("tr");
            tr.id = "trId";
            
            let td1 = document.createElement("td");			  
            td1.appendChild(document.createTextNode(arrLocal[i] + ""));

            let td2 = document.createElement("td");			  
            td2.appendChild(document.createTextNode(arrSubLocal[i] + ""));
            
            let td3 = document.createElement("td");			 
            td3.appendChild(document.createTextNode(arrStore[i] + ""));
            
            let td4 = document.createElement("td");			 
            td4.appendChild(document.createTextNode(arrAddr[i]+ ""));

            let td5 = document.createElement("td");			 
            td5.appendChild(document.createTextNode(arrTel[i]+ ""));

            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

          
            table.appendChild(tr);
      
        }
    }

   

    
}