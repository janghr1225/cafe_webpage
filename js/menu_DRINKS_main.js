//checkbox를 클릭하면 해당 음료를 테이블에 삽입
const showDrinkType = document.getElementById("#showDrinkType");
const showDrinkList = document.getElementById("showDrinkList");
const chkbx = document.getElementsByClassName("chkbx");
const imgDrinks = document.getElementsByClassName("imgDrinks");
// const imgDrinks = document.querySelectorAll("img");
const leaveBtn = document.getElementById("leaveBtn");
const drinkName = document.getElementsByClassName("drinkName");
// const drinkName1 = document.getElementsByClassName("drinkName1");
const drinkName2 = document.getElementsByClassName("drinkName2");
/////////////////////////////////////////////////////////////////////헤더푸터이벤트
const menu2 = document.getElementById("menu2");
leaveBtn.setAttribute("src", "../menu_Drinks/delete_icon.png");
displayMenu.classList.toggle("hiddenMenu");

menu2.addEventListener("mouseover", () => {
  displayMenu.classList.toggle("hiddenMenu");
  menu2.classList.toggle("silverClr");
  if (displayMenu.classList.contains("hiddenMenu")) {
    displayMenu.classList.toggle("hiddenMenu");
    menu2.classList.toggle("silverClr");
  }
});
menu2.addEventListener("mouseleave", () => {
  // menu2.classList.toggle("silverClr");
  displayMenu.classList.toggle("hiddenMenu");
  menu2.classList.toggle("silverClr");
});
//scroll-to-top function
const btn = document.getElementById("btn");
function pageScroll() {
  document.documentElement.style.scrollBehavior = "smooth";
}
let sign = document.getElementById("sign");
//마이페이지 이용전 alert

///////////////////////////////////////////////////////////////////////////
sign.innerHTML = "Sign out";

function changeLoginStatus() {
  if (sign.innerHTML == "Sign out") {
    let result = confirm("로그아웃하시겠습니까?");
    if (result == true) {
      alert("로그아웃되었습니다.");
      sign.innerHTML = "Sign in";
      location.assign("./CafeMain_signout.html");
    } else if (sign.innerHTML == "Sign in") {
      location.assign("./login.html");
      location.assign("");
    }
  }
}
function accesMyPage() {
  if (sign.innerHTML == "Sign out") {
    location.assign("./newsMypage.html");
  }
  if (sign.innerHTML == "Sign in") {
    alert("로그인 후 이용가능합니다.");
    window.location.href = "./login.html";
  }
}
/////////////////////////////////////////////////////////////////////헤더푸터이벤트
const allImgs = function () {
  // if (chkbx[0].checked == true) {
  chkbx[0].checked = true;
  chkbx[1].checked = false;
  chkbx[2].checked = false;
  chkbx[3].checked = false;
  showDrinkList.innerHTML = ""; //초기화
  //json이미지 전체를 배열로 뽑아서
  const arrImg = [];
  drinkMenu.data.forEach((obj) => {
    let imgStr = JSON.stringify(obj.img);
    let imgStrR = imgStr.replace(/"/g, "");
    arrImg.push(imgStrR); //배열에 담아주기
  });

  //json에서 이름 뽑아서
  const arrNames = [];
  drinkMenu.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.name);
    let nameStrR = nameStr.replace(/"/g, "");
    arrNames.push(nameStrR); //배열에 담아주기
  });

  //분류 (전체) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind = document.getElementById("drinkKind");
  drinkKind.innerHTML = "전체 상품보기";
  //<img class="imgDrinks"/>로 속성 추가하고
  for (i = 0; i < arrImg.length; i++) {
    showDrinkList.innerHTML +=
      "<a class='allItemsLink'><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
    const drinksHref = document.querySelectorAll("a");
    // const imgDrinks = document.querySelectorAll("img");
    const drinkName = document.getElementsByClassName("drinkName");
    const imgDrinks = document.getElementsByClassName("imgDrinks");
    imgDrinks[i].setAttribute("src", arrImg[i]); //이미지 삽입하기
    // drinksHref[i].setAttribute("class", "allItemsLink"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    const allItemsLink = document.getElementsByClassName("allItemsLink");
    allItemsLink[i].setAttribute("onclick", `addInfo${i}()`); //이미지 삽입하기

    // console.log(drinksHref);
    drinkName[i].innerHTML = arrNames[i]; //이름 삽입
  }
  // }
};
window.onload = allImgs(); //처음 로드하면 기본설정=전체상품보기, 전체상품보기 체크

// 조건

//커피 상품 보이기 함수
const allCoffee = function () {
  chkbx[0].checked = false;
  chkbx[1].checked = true;
  showDrinkList.innerHTML = "";
  //json이미지 전체를 배열로 뽑아서
  const arrImgCoff = [];
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"커피"') {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImgCoff.push(imgStrR); //배열에 담아주기
    }
  });
  // console.log(arrImgCoff); //8개

  //json 커피 이름 뽑아오기
  const arrNames = [];
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"커피"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrNames.push(imgStrR); //배열에 담아주기
    }
  });

  //분류 (커피) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind = document.getElementById("drinkKind");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"커피"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind.innerHTML = imgStrR;
    }
  });
  console.log(arrImgCoff);
  for (i = 0; i < arrImgCoff.length; i++) {
    if (chkbx[1].checked == true) {
      // console.log(chkbx[1].checked);
      showDrinkList.innerHTML +=
        "<a class='cofLink'><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
      const drinksHref = document.querySelectorAll("a");
      // const imgDrinks = document.querySelectorAll("img");
      const drinkName = document.getElementsByClassName("drinkName");
      const imgDrinks = document.getElementsByClassName("imgDrinks");
      const cofLink = document.getElementsByClassName("cofLink");
      imgDrinks[i].setAttribute("src", arrImgCoff[i]); //이미지 삽입하기
      cofLink[i].setAttribute("onclick", `addInfo${i}()`);
      // console.log(drinksHref);
      drinkName[i].innerHTML = arrNames[i]; //이름 삽입
    }
  }
};
////////////////////////////////////////////////////////
//라떼 티 보이기
const allTea = function () {
  chkbx[0].checked = false;
  chkbx[2].checked = true;
  showDrinkList.innerHTML = "";
  //json이미지 전체를 배열로 뽑아서
  const arrImgTea = [];
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"라떼•티"') {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImgTea.push(imgStrR); //배열에 담아주기
    }
  });
  // console.log(arrImgTea); //8개

  //json 티 이름 뽑아오기
  const arrNames = [];
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"라떼•티"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrNames.push(imgStrR); //배열에 담아주기
    }
  });

  //분류 (커피) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind = document.getElementById("drinkKind");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"라떼•티"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind.innerHTML = imgStrR;
    }
  });
  //화면에 보이기
  for (i = 0; i < arrImgTea.length; i++) {
    if (chkbx[2].checked == true) {
      // console.log(chkbx[2].checked);
      showDrinkList.innerHTML +=
        "<a class='allItemsLink'><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
      // const drinksHref = document.querySelectorAll("a");
      const imgDrinks = document.getElementsByClassName("imgDrinks");
      const drinkName = document.getElementsByClassName("drinkName");
      // drinksHref[i].setAttribute("href", "../html/menu_DETAILS.main.html"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
      imgDrinks[i].setAttribute("src", arrImgTea[i]); //이미지 삽입하기
      // console.log(drinksHref);
      imgDrinks[i].setAttribute("onclick", `addInfo${i + 8}()`);
      drinkName[i].innerHTML = arrNames[i]; //이름 삽입
    }
  }
};
/////////////////////////////////////////
//마할로치노 빙수 보이기
const allFrozen = function () {
  chkbx[0].checked = false;
  chkbx[3].checked = true;
  showDrinkList.innerHTML = "";
  //json이미지 전체를 배열로 뽑아서
  const arrImgFro = [];
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"마할로치노•빙수"') {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImgFro.push(imgStrR); //배열에 담아주기
    }
  });
  // console.log(arrImgFro); //8개

  //json 커피 이름 뽑아오기
  const arrNames = [];
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"마할로치노•빙수"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrNames.push(imgStrR); //배열에 담아주기
    }
  });

  //분류 (마할로치노 빙수) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind = document.getElementById("drinkKind");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"마할로치노•빙수"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind.innerHTML = imgStrR;
    }
  });
  //화면에 보이기
  for (i = 0; i < arrImgFro.length; i++) {
    showDrinkList.innerHTML +=
      "<a class='allItemsLink'><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
    // const drinksHref = document.querySelectorAll("a");
    const imgDrinks = document.getElementsByClassName("imgDrinks");
    const drinkName = document.getElementsByClassName("drinkName");
    // drinksHref[i].setAttribute("href", "../html/menu_DETAILS.main.html"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks[i].setAttribute("src", arrImgFro[i]); //이미지 삽입하기
    // console.log(drinksHref);
    imgDrinks[i].setAttribute("onclick", `addInfo${i + 12}()`);
    drinkName[i].innerHTML = arrNames[i]; //이름 삽입
  }
};

/////////////////////////////////////////
//두개씩 보이는 함수 (커피 & 라떼티)
const allCof_Tea = function () {
  chkbx[0].checked = false;
  chkbx[1].checked = true;
  chkbx[2].checked = true;
  // chkbx[3].checked = false;
  showDrinkList.innerHTML = "";
  const arrCNames = []; //////////////////////////////////////커피이름 배열 arrCNames
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"커피"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrCNames.push(imgStrR); //배열에 담아주기
    }
  });

  const arrTNames = []; //////////////////////////////////////라떼티이름 배열 arrTNames
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"라떼•티"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrTNames.push(imgStrR); //배열에 담아주기
    }
  });
  const arrTCimgs = []; ///////////////////////////////////////////커피 + 라떼•티 이미지배열 arrT
  drinkMenu.data.forEach((obj) => {
    if (
      JSON.stringify(obj.subtype) == '"커피"' ||
      JSON.stringify(obj.subtype) == '"라떼•티"'
    ) {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrTCimgs.push(imgStrR); //배열에 담아주기
    }
  });
  console.log(arrTCimgs); //8(커피)+4(티)
  //json 라떼티 이름 뽑아오기

  //분류 (커피) 뽑아오기- 헤더
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind = document.getElementById("drinkKind");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"커피"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind.innerHTML = imgStrR;
    }
  });
  // 커피 이름,이미지 넣어주기
  for (i = 0; i < arrCNames.length; i++) {
    // console.log(arrCNames);
    showDrinkList.innerHTML +=
      "<a class='cofLink'><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
    const cofLink = document.getElementsByClassName("cofLink");
    const imgDrinks = document.getElementsByClassName("imgDrinks");
    const drinkName = document.getElementsByClassName("drinkName");
    // cofLink[i].setAttribute("href", "../html/menu_DETAILS.main.html"); //링크//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    // imgDrinks[i].setAttribute("class", "cofLink"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks[i].setAttribute("src", arrTCimgs[i]); //이미지 삽입하기
    cofLink[i].setAttribute("onclick", `addInfo${i}()`);
    console.log(arrTCimgs[i]);
    drinkName[i].innerHTML = arrCNames[i]; //이름 삽입
  }

  //분류 (라떼) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind2'></div>";
  // const drinkKind2 = document.getElementById("drinkKind2");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"라떼•티"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind2.innerHTML = imgStrR;
    }
  });

  //라떼 티 이름 넣어주기
  for (i = 0; i < arrTNames.length; i++) {
    // console.log(arrTNames.length);
    showDrinkList.innerHTML +=
      "<a class='tlink'><img class='imgDrinks2'/><div class='drinkName2'></div></a>"; //링크태그
    const tlink = document.getElementsByClassName("tlink");
    const imgDrinks2 = document.getElementsByClassName("imgDrinks2");
    const drinkName2 = document.getElementsByClassName("drinkName2");
    // tlink[j].setAttribute("href", "../html/menu_DETAILS.main.html"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks2[i].setAttribute("src", arrTCimgs[i + 8]); //이미지 삽입하기
    tlink[i].setAttribute("onclick", `addInfo${i + 8}()`);
    drinkName2[i].innerHTML = arrTNames[i]; //이름 삽입
  }
};

/////////////////////////////////////////
//두개씩 보이는 함수 (커피 & 마할로치노)
const allCof_Fro = function () {
  chkbx[0].checked = false;
  chkbx[1].checked = true;
  chkbx[3].checked = true;
  showDrinkList.innerHTML = "";
  const arrCNames = []; //////////////////////////////////////커피이름 배열 arrCNames
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"커피"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrCNames.push(imgStrR); //배열에 담아주기
    }
  });

  const arrFNames = []; //////////////////////////////////////마할로치노이름 배열 arrFNames
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"마할로치노•빙수"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrFNames.push(imgStrR); //배열에 담아주기
    }
  });
  console.log(arrFNames);
  const arrCFimgs = []; ///////////////////////////////////////////커피 + 마할로치노 이미지배열 arrT
  drinkMenu.data.forEach((obj) => {
    if (
      JSON.stringify(obj.subtype) == '"커피"' ||
      JSON.stringify(obj.subtype) == '"마할로치노•빙수"'
    ) {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrCFimgs.push(imgStrR); //배열에 담아주기
    }
  });
  console.log(arrCFimgs); //8(커피)+4(티)
  //json 라떼티 이름 뽑아오기

  //분류 (커피) 뽑아오기- 헤더
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind = document.getElementById("drinkKind");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"커피"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind.innerHTML = imgStrR;
    }
  });
  // 커피 이름,이미지 넣어주기
  for (i = 0; i < arrCNames.length; i++) {
    // console.log(arrCNames);
    showDrinkList.innerHTML +=
      "<a class='cofLink'><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
    const cofLink = document.getElementsByClassName("cofLink");
    const imgDrinks = document.getElementsByClassName("imgDrinks");
    const drinkName = document.getElementsByClassName("drinkName");
    imgDrinks[i].setAttribute("src", arrCFimgs[i]); //이미지 삽입하기
    // console.log(arrCFimgs[i]);
    cofLink[i].setAttribute("onclick", `addInfo${i}()`);
    drinkName[i].innerHTML = arrCNames[i]; //이름 삽입
    console.log(arrCNames);
  }

  //분류 (라떼) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind2'></div>";
  // const drinkKind2 = document.getElementById("drinkKind2");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"마할로치노•빙수"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind2.innerHTML = imgStrR;
    }
  });

  //라떼 티 이름 넣어주기
  for (i = 0; i < arrFNames.length; i++) {
    // console.log(arrFNames.length);
    showDrinkList.innerHTML +=
      "<a class='flink'><img class='imgDrinks3'/><div class='drinkName3'></div></a>"; //링크태그
    const flink = document.getElementsByClassName("flink");
    const imgDrinks3 = document.getElementsByClassName("imgDrinks3");
    const drinkName3 = document.getElementsByClassName("drinkName3");
    imgDrinks3[i].setAttribute("src", arrCFimgs[i + 8]); //이미지 삽입하기
    flink[i].setAttribute("onclick", `addInfo${i + 12}()`); //모달창 띄우줄떄 정보가져다줄 함수
    drinkName3[i].innerHTML = arrFNames[i]; //이름 삽입
  }
};

/////////////////////////////////////////
//두개씩 보이는 함수 (티 & 마할로치노)
const allTea_Fro = function () {
  chkbx[0].checked = false;
  chkbx[2].checked = true;
  chkbx[3].checked = true;
  showDrinkList.innerHTML = "";
  const arrTNames = []; //////////////////////////////////////커피이름 배열 arrCNames
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"라떼•티"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrTNames.push(imgStrR); //배열에 담아주기
    }
  });

  const arrFNames = []; //////////////////////////////////////마할로치노이름 배열 arrFNames
  drinkMenu.data.forEach((obj) => {
    if (JSON.stringify(obj.subtype) == '"마할로치노•빙수"') {
      let imgStr = JSON.stringify(obj.name);
      let imgStrR = imgStr.replace(/"/g, "");
      arrFNames.push(imgStrR); //배열에 담아주기
    }
  });
  console.log(arrFNames);
  const arrTFimgs = []; ///////////////////////////////////////////커피 + 마할로치노 이미지배열 arrT
  drinkMenu.data.forEach((obj) => {
    if (
      JSON.stringify(obj.subtype) == '"라떼•티"' ||
      JSON.stringify(obj.subtype) == '"마할로치노•빙수"'
    ) {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrTFimgs.push(imgStrR); //배열에 담아주기
    }
  });
  console.log(arrTFimgs); //8(커피)+4(티)
  //json 라떼티 이름 뽑아오기

  //분류 (커피) 뽑아오기- 헤더
  showDrinkList.innerHTML += "<div id='drinkKind'></div>";
  const drinkKind2 = document.getElementById("drinkKind");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"라떼•티"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind.innerHTML = imgStrR;
    }
  });
  // 커피 이름,이미지 넣어주기
  //라떼 티 이름 넣어주기
  for (i = 0; i < arrTNames.length; i++) {
    // console.log(arrTNames.length);
    showDrinkList.innerHTML +=
      "<a class='tlink'><img class='imgDrinks2'/><div class='drinkName2'></div></a>"; //링크태그
    const tlink = document.getElementsByClassName("tlink");
    const imgDrinks2 = document.getElementsByClassName("imgDrinks2");
    const drinkName2 = document.getElementsByClassName("drinkName2");
    imgDrinks2[i].setAttribute("src", arrTFimgs[i]); //이미지 삽입하기
    tlink[i].setAttribute("onclick", `addInfo${i + 8}()`);
    drinkName2[i].innerHTML = arrTNames[i]; //이름 삽입
  }

  //분류 (라떼) 뽑아오기
  showDrinkList.innerHTML += "<div id='drinkKind3'></div>";
  // const drinkKind2 = document.getElementById("drinkKind2");
  drinkMenu.data.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    if (subtypeStr == '"마할로치노•빙수"') {
      // console.log(subtypeStr);
      let imgStrR = subtypeStr.replace(/"/g, "");
      drinkKind3.innerHTML = imgStrR;
    }
  });

  //라떼 티 이름 넣어주기
  for (i = 0; i < arrFNames.length; i++) {
    // console.log(arrFNames.length);
    showDrinkList.innerHTML +=
      "<a class='flink'><img class='imgDrinks3'/><div class='drinkName3'></div></a>"; //링크태그
    const flink = document.getElementsByClassName("flink");
    const imgDrinks3 = document.getElementsByClassName("imgDrinks3");
    const drinkName3 = document.getElementsByClassName("drinkName3");
    imgDrinks3[i].setAttribute("src", arrTFimgs[i + 4]); //이미지 삽입하기
    flink[i].setAttribute("onclick", `addInfo${i + 12}()`);
    drinkName3[i].innerHTML = arrFNames[i]; //이름 삽입
  }
};

/////////////////////////////////////////
//조건
//다른 세부 조건들은 같이 클릭 가능 단, 전부 다 클릭하면 모두 체크 제거하고 전체보이기

//만약 다 체크가 되어버린다면 전체로 바꾸기

//체크박스클릭 이벤트
//[전체 상품보기 선택]
chkbx[0].addEventListener("click", () => {
  if (chkbx[0].checked == true) {
    chkbx[1].checked = false;
    chkbx[2].checked = false;
    chkbx[3].checked = false;
    allImgs();
    drinkListWrap.style.display = "contents";
  } else if (chkbx[0].checked == false) {
    // console.log(chkbx[0].checked);
    if (
      chkbx[1].checked == false &&
      chkbx[2].checked == false &&
      chkbx[3].checked == false
    ) {
      allImgs();
    }
  }
});

//[커피 선택]
chkbx[1].addEventListener("click", () => {
  // console.log(chkbx[1].checked + "!@@@");
  if (
    //커피만 보기
    chkbx[1].checked == true &&
    chkbx[2].checked == false &&
    chkbx[3].checked == false
  ) {
    chkbx[0].checked == false;
    // drinkListWrap.style.display = "contents";
    allCoffee();
  } else if (
    //커피, 티 checked >티 보기
    chkbx[1].checked == true &&
    chkbx[2].checked == true &&
    chkbx[3].checked == false
  ) {
    allCof_Tea();
  } else if (
    //빙수,커피 checked> 떄커피 빙수 보기
    chkbx[1].checked == true &&
    chkbx[2].checked == false &&
    chkbx[3].checked == true
  ) {
    allCof_Fro();
    console.log("cof_fro");
  } else if (
    // 커피,티 checked> 커피 uncheck > 티만 보이기
    chkbx[1].checked == true &&
    chkbx[2].checked == true &&
    chkbx[3].checked == false
  ) {
    allTea();
  } else if (
    //커피,빙수 checked> 커피 uncheck > 빙수만 보이기
    chkbx[1].checked == false &&
    chkbx[2].checked == false &&
    chkbx[3].checked == true
  ) {
    allFrozen();
    console.log("커피 취소했을 때 빙수만 보이기!@@@");
  } else if (
    //커피,티 checked > 커피 취소했을 때 티
    chkbx[1].checked == false &&
    chkbx[2].checked == true &&
    chkbx[3].checked == false
  ) {
    allTea();
  } else if (
    //다 체크 되면 전체보기
    chkbx[1].checked == true &&
    chkbx[3].checked == true
    // &&chkbx[3].checked == false
  ) {
    allImgs();
    // console.log("!@@@");
  } else if (
    //다 체크 안되면 전체보기
    chkbx[1].checked == false &&
    chkbx[2].checked == false &&
    chkbx[3].checked == false
  ) {
    allImgs();
    // console.log("!@@@");
  }
});
//[라떼 티 선택]
chkbx[2].addEventListener("click", () => {
  if (
    //티만 보기
    chkbx[2].checked == true &&
    chkbx[1].checked == false &&
    chkbx[3].checked == false
  ) {
    chkbx[0].checked == false;
    drinkListWrap.style.display = "contents";
    allTea();
  } else if (
    //커피 + 티 보기
    chkbx[2].checked == true &&
    chkbx[1].checked == true &&
    chkbx[3].checked == false
  ) {
    allCof_Tea();
  } else if (
    //티 + 빙수 보기
    chkbx[2].checked == true &&
    chkbx[1].checked == false &&
    chkbx[3].checked == true
  ) {
    allTea_Fro();
  } else if (
    //티 취소했을 때 빙수만 보이기
    chkbx[2].checked == false &&
    chkbx[1].checked == false &&
    chkbx[3].checked == true
  ) {
    allFrozen();
    // console.log("!@@@");
  } else if (
    //티 취소했을 때 커피만 보이기
    chkbx[2].checked == false &&
    chkbx[1].checked == true &&
    chkbx[3].checked == false
  ) {
    allCoffee();
    console.log("!@@@");
  } else if (
    //다 체크 안되거나ㅏ 다 체크되면 전체보기
    // chkbx[2].checked == false &&
    (chkbx[1].checked == true && chkbx[3].checked == true) ||
    (chkbx[1].checked == false && chkbx[3].checked == false)
  ) {
    allImgs();
  }
});
/////////////////////////////////////////////////////////
// 마할로치노 빙수 선택 시
chkbx[3].addEventListener("click", () => {
  if (chkbx[0].checked == true) {
    //전체 선택 체크 > 빙수 클릭
    allFrozen();
  } else if (
    // 체크박스 다 선택 혹은 하나도 선택 X>전체보기
    (chkbx[1].checked == true && chkbx[2].checked == true) ||
    (chkbx[3].checked == false &&
      chkbx[1].checked == false &&
      chkbx[2].checked == false)
  ) {
    chkbx[0].checked == true;
    allImgs();
  } else if (
    // 커피 checked > 커피 + 빙수 보이기
    chkbx[1].checked == true &&
    chkbx[2].checked == false &&
    chkbx[3].checked == true
  ) {
    allCof_Fro();
  } else if (
    // 커피, 빙수 checked > 빙수 보이기
    chkbx[1].checked == true &&
    chkbx[2].checked == false &&
    chkbx[3].checked == false
  ) {
    allCoffee();
  } else if (
    // 티 checked > 티 + 빙수 보이기
    chkbx[1].checked == false &&
    chkbx[2].checked == true &&
    chkbx[3].checked == true
  ) {
    allTea_Fro();
  } else if (
    // 티, 빙수 checked > 티 보이기
    chkbx[1].checked == false &&
    chkbx[2].checked == true &&
    chkbx[3].checked == false
  ) {
    allTea();
  }
});

////////////////////////////////////////////////////////////////////////////테스트
// allCof_Tea();
// allCof_Fro();
// allTea_Fro();
//모달창
const leaveIcon = document.getElementsByTagName("i")[0];
const leaveModal = document.getElementById("leaveModal");
const body = document.querySelector("body");
const modal2 = document.querySelector(".modal2");
const allItemsLink = document.getElementsByClassName("allItemsLink");

modal2.addEventListener("click", () => {
  if (modal2.classList.contains("show")) {
    body.style.overflow = "auto";
    modal2.classList.toggle("show");
  }
});

//////////////////
//X 버튼 클릭하면 나가기 기능
//버튼 mouseover하면 색 바꾸기, mouseleave하면 색 다시 돌려놓기
leaveModal.addEventListener("click", () => {
  modal2.classList.toggle("show");
  // body.style.overflow = "hidden";
  if (!modal2.classList.contains("show")) {
    // body.style.overflow = "hidden";
    body.style.overflow = "auto";
  }
});

let cal = document.getElementById("cal");
let sug = document.getElementById("sug");
let pro = document.getElementById("pro");
let fat = document.getElementById("fat");
let sod = document.getElementById("sod");
let caf = document.getElementById("caf");

let drinkData = drinkMenu.data;

// const detailsWrap = document.getElementById("DetailsWrap");
const subtype = document.getElementById("subtype");
const Kname = document.getElementById("Kname");
const engName = document.getElementById("engName");
const detailDes = document.getElementById("detailDes");
const allergy = document.getElementById("allergy");
const drinkImg = document.getElementById("drinkImg");

// modal2.classList.toggle("show"); //false로 만들어주기
let arrays = drinkData.forEach((obj) => {
  let subtypeStr = JSON.stringify(obj.subtype);
  let subStrR = subtypeStr.replace(/"/g, "");

  let kNameStr = JSON.stringify(obj.name);
  let eNameStr = JSON.stringify(obj.engname);
  let detailStr = JSON.stringify(obj.description);
  let allerStr = JSON.stringify(obj.allergen);
  // console.log(obj.protein);

  subtype.innerHTML = subStrR;
  let korName = kNameStr.replace(/"/g, ""); //이름
  // Kname.innerHTML = korName;
  let eName = eNameStr.replace(/"/g, ""); //영문이름
  // engName.innerHTML = eName;
  let detailCof = detailStr.replace(/"/g, ""); //상세설명
  // detailDes.innerHTML = detailCof;
  let AllerCof = detailStr.replace(/"/g, ""); //알러지
  // allerStr.innerHTML = AllerCof;

  //이미지 배열
  const arrImg = [];
  drinkMenu.data.forEach((obj) => {
    let imgStr = JSON.stringify(obj.img);
    let imgStrR = imgStr.replace(/"/g, "");
    arrImg.push(imgStrR);
  });
  // 이름 배열
  const nameArr = [];
  drinkMenu.data.forEach((obj) => {
    let nameStr = JSON.stringify(obj.name);
    let nameStrR = nameStr.replace(/"/g, "");
    nameArr.push(nameStrR);
  });
  // 분류;
  const subtArr = [];
  drinkMenu.data.forEach((obj) => {
    let subtStr = JSON.stringify(obj.subtype);
    let subStrR = subtStr.replace(/"/g, "");
    subtArr.push(subStrR);
  });

  //영문이름배열
  const engnameArr = [];
  drinkMenu.data.forEach((obj) => {
    let enameStr = JSON.stringify(obj.engname);
    // console.log(engnameArr);
    let enameStrR = enameStr.replace(/"/g, "");
    engnameArr.push(enameStrR); //배열에 담아주기
    // console.log(nameArr);
  });
  //설명배열
  const descArr = [];
  drinkMenu.data.forEach((obj) => {
    let descStr = JSON.stringify(obj.description);
    // console.log(descStr);
    let descStrR = descStr.replace(/"/g, "");
    descArr.push(descStrR); //배열에 담아주기
    // console.log(nameArr);
  });
  //알러지배열
  const allerArr = [];
  drinkMenu.data.forEach((obj) => {
    let allerStr = JSON.stringify(obj.allergen);
    // console.log(allerStr);
    let allerStrR = allerStr.replace(/"/g, "");
    allerArr.push(allerStrR); //배열에 담아주기
    // console.log(allerStr);
  });
  //칼로리 배열
  const calArr = [];
  drinkMenu.data.forEach((obj) => {
    let calStr = JSON.stringify(obj.calories);
    calArr.push(calStr); //배열에 담아주기
  });
  //칼로리 배열
  const sugArr = [];
  drinkMenu.data.forEach((obj) => {
    let sugStr = JSON.stringify(obj.sugar);
    sugArr.push(sugStr); //배열에 담아주기
  });
  //단백질 배열
  const proteinArr = [];
  drinkMenu.data.forEach((obj) => {
    let proStr = JSON.stringify(obj.protein);
    proteinArr.push(proStr); //배열에 담아주기
  });
  //지방 배열
  const fatArr = [];
  drinkMenu.data.forEach((obj) => {
    let fatStr = JSON.stringify(obj.transfat);
    fatArr.push(fatStr); //배열에 담아주기
  });
  //나트륨 배열
  const sodiumArr = [];
  drinkMenu.data.forEach((obj) => {
    let sodStr = JSON.stringify(obj.sodium);
    sodiumArr.push(sodStr); //배열에 담아주기
  });

  const caffeiArr = [];
  drinkMenu.data.forEach((obj) => {
    let cafStr = JSON.stringify(obj.caffeine);
    caffeiArr.push(cafStr); //배열에 담아주기
  });
});
// }
function addInfo0() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  console.log("됐나?");
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    drinkImg.setAttribute("src", arrImg[0]); //이미지넣기
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[0]; //메뉴명넣기
    engName.innerHTML = engnameArr[0]; //메뉴명넣기
    detailDes.innerHTML = descArr[0]; //메뉴명넣기
    allergy.innerHTML = allerArr[0]; //메뉴명넣기
    subtype.innerHTML = subtArr[0]; //메뉴명넣기

    cal.innerHTML = calArr[0]; //칼로리 넣기
    sug.innerHTML = sugArr[0]; // 당분 넣기
    pro.innerHTML = proteinArr[0]; //단백질넣기
    fat.innerHTML = fatArr[0]; //설명넣기
    sod.innerHTML = sodiumArr[0]; //설명넣기
    caf.innerHTML = caffeiArr[0]; //설명넣기
  });
}
////////////////////////////////////////////////////////////
function addInfo1() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    drinkImg.setAttribute("src", arrImg[1]); //이미지넣기
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[1]; //메뉴명넣기
    engName.innerHTML = engnameArr[1]; //메뉴명넣기
    detailDes.innerHTML = descArr[1]; //메뉴명넣기
    allergy.innerHTML = allerArr[1]; //메뉴명넣기
    subtype.innerHTML = subtArr[1]; //메뉴명넣기

    cal.innerHTML = calArr[1]; //칼로리 넣기
    sug.innerHTML = sugArr[1]; // 당분 넣기
    pro.innerHTML = proteinArr[1]; //단백질넣기
    fat.innerHTML = fatArr[1]; //설명넣기
    sod.innerHTML = sodiumArr[1]; //설명넣기
    caf.innerHTML = caffeiArr[1]; //설명넣기
  });
}
////////////////////////////////////////////////////////////////////////////
function addInfo2() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    drinkImg.setAttribute("src", arrImg[2]); //이미지넣기
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[2]; //메뉴명넣기
    engName.innerHTML = engnameArr[2]; //메뉴명넣기
    detailDes.innerHTML = descArr[2]; //메뉴명넣기
    allergy.innerHTML = allerArr[2]; //메뉴명넣기
    subtype.innerHTML = subtArr[2]; //메뉴명넣기

    cal.innerHTML = calArr[2]; //칼로리 넣기
    sug.innerHTML = sugArr[2]; // 당분 넣기
    pro.innerHTML = proteinArr[2]; //단백질넣기
    fat.innerHTML = fatArr[2]; //설명넣기
    sod.innerHTML = sodiumArr[2]; //설명넣기
    caf.innerHTML = caffeiArr[2]; //설명넣기
  });
}
///////////////////////////////////////////////////////////////////
function addInfo3() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    drinkImg.setAttribute("src", arrImg[3]); //이미지넣기
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[3]; //메뉴명넣기
    engName.innerHTML = engnameArr[3]; //메뉴명넣기
    detailDes.innerHTML = descArr[3]; //메뉴명넣기
    allergy.innerHTML = allerArr[3]; //메뉴명넣기
    subtype.innerHTML = subtArr[3]; //메뉴명넣기

    cal.innerHTML = calArr[3]; //칼로리 넣기
    sug.innerHTML = sugArr[3]; // 당분 넣기
    pro.innerHTML = proteinArr[3]; //단백질넣기
    fat.innerHTML = fatArr[3]; //설명넣기
    sod.innerHTML = sodiumArr[3]; //설명넣기
    caf.innerHTML = caffeiArr[3]; //설명넣기
  });
}
///////////////////////////////////////////////////////////////////
function addInfo4() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[3]; //메뉴명넣기
    engName.innerHTML = engnameArr[3]; //메뉴명넣기
    detailDes.innerHTML = descArr[3]; //메뉴명넣기
    allergy.innerHTML = allerArr[3]; //메뉴명넣기
    subtype.innerHTML = subtArr[3]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[4]); //이미지넣기

    cal.innerHTML = calArr[3]; //칼로리 넣기
    sug.innerHTML = sugArr[3]; // 당분 넣기
    pro.innerHTML = proteinArr[3]; //단백질넣기
    fat.innerHTML = fatArr[3]; //설명넣기
    sod.innerHTML = sodiumArr[3]; //설명넣기
    caf.innerHTML = caffeiArr[3]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo5() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[5]; //메뉴명넣기
    engName.innerHTML = engnameArr[5]; //메뉴명넣기
    detailDes.innerHTML = descArr[5]; //메뉴명넣기
    allergy.innerHTML = allerArr[5]; //메뉴명넣기
    subtype.innerHTML = subtArr[5]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[5]); //이미지넣기

    cal.innerHTML = calArr[5]; //칼로리 넣기
    sug.innerHTML = sugArr[5]; // 당분 넣기
    pro.innerHTML = proteinArr[5]; //단백질넣기
    fat.innerHTML = fatArr[5]; //설명넣기
    sod.innerHTML = sodiumArr[5]; //설명넣기
    caf.innerHTML = caffeiArr[5]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo6() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[6]; //메뉴명넣기
    engName.innerHTML = engnameArr[6]; //메뉴명넣기
    detailDes.innerHTML = descArr[6]; //메뉴명넣기
    allergy.innerHTML = allerArr[6]; //메뉴명넣기
    subtype.innerHTML = subtArr[6]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[6]); //이미지넣기

    cal.innerHTML = calArr[6]; //칼로리 넣기
    sug.innerHTML = sugArr[6]; // 당분 넣기
    pro.innerHTML = proteinArr[6]; //단백질넣기
    fat.innerHTML = fatArr[6]; //설명넣기
    sod.innerHTML = sodiumArr[6]; //설명넣기
    caf.innerHTML = caffeiArr[6]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo7() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[7]; //메뉴명넣기
    engName.innerHTML = engnameArr[7]; //메뉴명넣기
    detailDes.innerHTML = descArr[7]; //메뉴명넣기
    allergy.innerHTML = allerArr[7]; //메뉴명넣기
    subtype.innerHTML = subtArr[7]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[7]); //이미지넣기

    cal.innerHTML = calArr[7]; //칼로리 넣기
    sug.innerHTML = sugArr[7]; // 당분 넣기
    pro.innerHTML = proteinArr[7]; //단백질넣기
    fat.innerHTML = fatArr[7]; //설명넣기
    sod.innerHTML = sodiumArr[7]; //설명넣기
    caf.innerHTML = caffeiArr[7]; //설명넣기
  });
}
/////////////////////////////////////////////////////////////////////////////////////////라뗴*티
function addInfo8() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[8]; //메뉴명넣기
    engName.innerHTML = engnameArr[8]; //메뉴명넣기
    detailDes.innerHTML = descArr[8]; //메뉴명넣기
    allergy.innerHTML = allerArr[8]; //메뉴명넣기
    subtype.innerHTML = subtArr[8]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[8]); //이미지넣기

    cal.innerHTML = calArr[8]; //칼로리 넣기
    sug.innerHTML = sugArr[8]; // 당분 넣기
    pro.innerHTML = proteinArr[8]; //단백질넣기
    fat.innerHTML = fatArr[8]; //설명넣기
    sod.innerHTML = sodiumArr[8]; //설명넣기
    caf.innerHTML = caffeiArr[8]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo9() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[9]; //메뉴명넣기
    engName.innerHTML = engnameArr[9]; //메뉴명넣기
    detailDes.innerHTML = descArr[9]; //메뉴명넣기
    allergy.innerHTML = allerArr[9]; //메뉴명넣기
    subtype.innerHTML = subtArr[9]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[9]); //이미지넣기

    cal.innerHTML = calArr[9]; //칼로리 넣기
    sug.innerHTML = sugArr[9]; // 당분 넣기
    pro.innerHTML = proteinArr[9]; //단백질넣기
    fat.innerHTML = fatArr[9]; //설명넣기
    sod.innerHTML = sodiumArr[9]; //설명넣기
    caf.innerHTML = caffeiArr[9]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo10() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[10]; //메뉴명넣기
    engName.innerHTML = engnameArr[10]; //메뉴명넣기
    detailDes.innerHTML = descArr[10]; //메뉴명넣기
    allergy.innerHTML = allerArr[10]; //메뉴명넣기
    subtype.innerHTML = subtArr[10]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[10]); //이미지넣기

    cal.innerHTML = calArr[10]; //칼로리 넣기
    sug.innerHTML = sugArr[10]; // 당분 넣기
    pro.innerHTML = proteinArr[10]; //단백질넣기
    fat.innerHTML = fatArr[10]; //설명넣기
    sod.innerHTML = sodiumArr[10]; //설명넣기
    caf.innerHTML = caffeiArr[10]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo11() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[11]; //메뉴명넣기
    engName.innerHTML = engnameArr[11]; //메뉴명넣기
    detailDes.innerHTML = descArr[11]; //메뉴명넣기
    allergy.innerHTML = allerArr[11]; //메뉴명넣기
    subtype.innerHTML = subtArr[11]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[11]); //이미지넣기

    cal.innerHTML = calArr[11]; //칼로리 넣기
    sug.innerHTML = sugArr[11]; // 당분 넣기
    pro.innerHTML = proteinArr[11]; //단백질넣기
    fat.innerHTML = fatArr[11]; //설명넣기
    sod.innerHTML = sodiumArr[11]; //설명넣기
    caf.innerHTML = caffeiArr[11]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////빙수 종류
function addInfo12() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[12]; //메뉴명넣기
    engName.innerHTML = engnameArr[12]; //메뉴명넣기
    detailDes.innerHTML = descArr[12]; //메뉴명넣기
    allergy.innerHTML = allerArr[12]; //메뉴명넣기
    subtype.innerHTML = subtArr[12]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[12]); //이미지넣기

    cal.innerHTML = calArr[12]; //칼로리 넣기
    sug.innerHTML = sugArr[12]; // 당분 넣기
    pro.innerHTML = proteinArr[12]; //단백질넣기
    fat.innerHTML = fatArr[12]; //설명넣기
    sod.innerHTML = sodiumArr[12]; //설명넣기
    caf.innerHTML = caffeiArr[12]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////빙수 종류
function addInfo13() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[13]; //메뉴명넣기
    engName.innerHTML = engnameArr[13]; //메뉴명넣기
    detailDes.innerHTML = descArr[13]; //메뉴명넣기
    allergy.innerHTML = allerArr[13]; //메뉴명넣기
    subtype.innerHTML = subtArr[13]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[13]); //이미지넣기

    cal.innerHTML = calArr[13]; //칼로리 넣기
    sug.innerHTML = sugArr[13]; // 당분 넣기
    pro.innerHTML = proteinArr[13]; //단백질넣기
    fat.innerHTML = sodiumArr[13]; //설명넣기
    sod.innerHTML = sodiumArr[13]; //설명넣기
    caf.innerHTML = caffeiArr[13]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo14() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[14]; //메뉴명넣기
    engName.innerHTML = engnameArr[14]; //메뉴명넣기
    detailDes.innerHTML = descArr[14]; //메뉴명넣기
    allergy.innerHTML = allerArr[14]; //메뉴명넣기
    subtype.innerHTML = subtArr[14]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[14]); //이미지넣기

    cal.innerHTML = calArr[14]; //칼로리 넣기
    sug.innerHTML = sugArr[14]; // 당분 넣기
    pro.innerHTML = proteinArr[14]; //단백질넣기
    fat.innerHTML = fatArr[14]; //설명넣기
    sod.innerHTML = sodiumArr[14]; //설명넣기
    caf.innerHTML = caffeiArr[14]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo15() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[15]; //메뉴명넣기
    engName.innerHTML = engnameArr[15]; //메뉴명넣기
    detailDes.innerHTML = descArr[15]; //메뉴명넣기
    allergy.innerHTML = allerArr[15]; //메뉴명넣기
    subtype.innerHTML = subtArr[15]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[15]); //이미지넣기

    cal.innerHTML = calArr[15]; //칼로리 넣기
    sug.innerHTML = sugArr[15]; // 당분 넣기
    pro.innerHTML = proteinArr[15]; //단백질넣기
    fat.innerHTML = fatArr[15]; //설명넣기
    sod.innerHTML = sodiumArr[15]; //설명넣기
    caf.innerHTML = caffeiArr[15]; //설명넣기
  });
}
//////////////////////////////////////////////////////////////////////////
function addInfo16() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[16]; //메뉴명넣기
    engName.innerHTML = engnameArr[16]; //메뉴명넣기
    detailDes.innerHTML = descArr[16]; //메뉴명넣기
    allergy.innerHTML = allerArr[16]; //메뉴명넣기
    subtype.innerHTML = subtArr[16]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[16]); //이미지넣기

    cal.innerHTML = calArr[16]; //칼로리 넣기
    sug.innerHTML = sugArr[16]; // 당분 넣기
    pro.innerHTML = proteinArr[16]; //단백질넣기
    fat.innerHTML = fatArr[16]; //설명넣기
    sod.innerHTML = sodiumArr[16]; //설명넣기
    caf.innerHTML = caffeiArr[16]; //설명넣기
  });
}
///////////////////////////////////////////////////////////////////////////
function addInfo17() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[17]; //메뉴명넣기
    engName.innerHTML = engnameArr[17]; //메뉴명넣기
    detailDes.innerHTML = descArr[17]; //메뉴명넣기
    allergy.innerHTML = allerArr[17]; //메뉴명넣기
    subtype.innerHTML = subtArr[17]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[17]); //이미지넣기

    cal.innerHTML = calArr[17]; //칼로리 넣기
    sug.innerHTML = sugArr[17]; // 당분 넣기
    pro.innerHTML = proteinArr[17]; //단백질넣기
    fat.innerHTML = fatArr[17]; //설명넣기
    sod.innerHTML = sodiumArr[17]; //설명넣기
    caf.innerHTML = caffeiArr[17]; //설명넣기
  });
}
///////////////////////////////////////////////////////////////////////////
function addInfo18() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[18]; //메뉴명넣기
    engName.innerHTML = engnameArr[18]; //메뉴명넣기
    detailDes.innerHTML = descArr[18]; //메뉴명넣기
    allergy.innerHTML = allerArr[18]; //메뉴명넣기
    subtype.innerHTML = subtArr[18]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[18]); //이미지넣기

    cal.innerHTML = calArr[18]; //칼로리 넣기
    sug.innerHTML = sugArr[18]; // 당분 넣기
    pro.innerHTML = proteinArr[18]; //단백질넣기
    fat.innerHTML = fatArr[18]; //설명넣기
    sod.innerHTML = sodiumArr[18]; //설명넣기
    caf.innerHTML = caffeiArr[18]; //설명넣기
  });
}
///////////////////////////////////////////////////////////////////////////
function addInfo19() {
  modal2.classList.toggle("show");
  body.style.overflow = "hidden";
  drinkData.forEach((obj) => {
    let subtypeStr = JSON.stringify(obj.subtype);
    let kNameStr = JSON.stringify(obj.name);
    let eNameStr = JSON.stringify(obj.engname);
    let detailStr = JSON.stringify(obj.description);
    let allerStr = JSON.stringify(obj.allergen);
    let subStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = subStrR;
    let korName = kNameStr.replace(/"/g, ""); //이름
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, ""); //영문이름
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, ""); //상세설명
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, ""); //알러지
    allerStr.innerHTML = AllerCof;
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR);
    });
    const nameArr = [];
    drinkMenu.data.forEach((obj) => {
      let nameStr = JSON.stringify(obj.name);
      let nameStrR = nameStr.replace(/"/g, "");
      nameArr.push(nameStrR);
    });
    const engnameArr = [];
    drinkMenu.data.forEach((obj) => {
      let enameStr = JSON.stringify(obj.engname);
      // console.log(engnameArr);
      let enameStrR = enameStr.replace(/"/g, "");
      engnameArr.push(enameStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    const descArr = [];
    drinkMenu.data.forEach((obj) => {
      let descStr = JSON.stringify(obj.description);
      // console.log(descStr);
      let descStrR = descStr.replace(/"/g, "");
      descArr.push(descStrR); //배열에 담아주기
      // console.log(nameArr);
    });
    //알러지배열
    const allerArr = [];
    drinkMenu.data.forEach((obj) => {
      let allerStr = JSON.stringify(obj.allergen);
      // console.log(allerStr);
      let allerStrR = allerStr.replace(/"/g, "");
      allerArr.push(allerStrR); //배열에 담아주기
      // console.log(allerStr);
    });
    //칼로리 배열
    const sugArr = [];
    drinkMenu.data.forEach((obj) => {
      let sugStr = JSON.stringify(obj.sugar);
      sugArr.push(sugStr); //배열에 담아주기
    });
    const subtArr = [];
    drinkMenu.data.forEach((obj) => {
      let subtStr = JSON.stringify(obj.subtype);
      let subStrR = subtStr.replace(/"/g, "");
      subtArr.push(subStrR);
    });
    const calArr = [];
    drinkMenu.data.forEach((obj) => {
      let calStr = JSON.stringify(obj.calories);
      calArr.push(calStr); //배열에 담아주기
    });
    const proteinArr = [];
    drinkMenu.data.forEach((obj) => {
      let proStr = JSON.stringify(obj.protein);
      proteinArr.push(proStr); //배열에 담아주기
    });
    const sodiumArr = [];
    drinkMenu.data.forEach((obj) => {
      let sodStr = JSON.stringify(obj.sodium);
      sodiumArr.push(sodStr); //배열에 담아주기
    });
    const caffeiArr = [];
    drinkMenu.data.forEach((obj) => {
      let cafStr = JSON.stringify(obj.caffeine);
      caffeiArr.push(cafStr); //배열에 담아주기
    });
    const fatArr = [];
    drinkMenu.data.forEach((obj) => {
      let fatStr = JSON.stringify(obj.transfat);
      fatArr.push(fatStr); //배열에 담아주기
    });
    Kname.innerHTML = nameArr[19]; //메뉴명넣기
    engName.innerHTML = engnameArr[19]; //메뉴명넣기
    detailDes.innerHTML = descArr[19]; //메뉴명넣기
    allergy.innerHTML = allerArr[19]; //메뉴명넣기
    subtype.innerHTML = subtArr[19]; //메뉴명넣기
    drinkImg.setAttribute("src", arrImg[19]); //이미지넣기

    cal.innerHTML = calArr[19]; //칼로리 넣기
    sug.innerHTML = sugArr[19]; // 당분 넣기
    pro.innerHTML = proteinArr[19]; //단백질넣기
    fat.innerHTML = fatArr[19]; //설명넣기
    sod.innerHTML = sodiumArr[19]; //설명넣기
    caf.innerHTML = caffeiArr[19]; //설명넣기
  });
}
