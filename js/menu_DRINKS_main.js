//checkbox를 클릭하면 해당 음료를 테이블에 삽입
const showDrinkType = document.getElementById("#showDrinkType");
const showDrinkList = document.getElementById("showDrinkList");
const chkbx = document.getElementsByClassName("chkbx");
const imgDrinks = document.querySelectorAll("img");
const drinkName = document.getElementsByClassName("drinkName");
// const drinkName1 = document.getElementsByClassName("drinkName1");
const drinkName2 = document.getElementsByClassName("drinkName2");
//전체보이기 함수
//displayNone 함수

// const list1 = document.getElementsByClassName("coffLink");
// const list2 = document.getElementsByClassName("tLink");

// if (drinkName.innerHTML == "") {
//   list1.add("displayNone");
//   list2.add("displayNone");
// }

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
      "<a><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
    const drinksHref = document.querySelectorAll("a");
    const imgDrinks = document.querySelectorAll("img");
    const drinkName = document.getElementsByClassName("drinkName");
    drinksHref[i].setAttribute("href", "./menu_DETAILS.main.html"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    drinksHref[i].setAttribute("class", "allItemsLink"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks[i].setAttribute("src", arrImg[i]); //이미지 삽입하기
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

  for (i = 0; i < arrImgCoff.length; i++) {
    if (chkbx[1].checked == true) {
      // console.log(chkbx[1].checked);
      showDrinkList.innerHTML +=
        "<a><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
      const drinksHref = document.querySelectorAll("a");
      const imgDrinks = document.querySelectorAll("img");
      const drinkName = document.getElementsByClassName("drinkName");
      drinksHref[i].setAttribute("href", "#"); //링크 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
      drinksHref[i].setAttribute("class", "cofLink"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
      imgDrinks[i].setAttribute("src", arrImgCoff[i]); //이미지 삽입하기
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

  //json 커피 이름 뽑아오기
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
        "<a><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
      const drinksHref = document.querySelectorAll("a");
      const imgDrinks = document.querySelectorAll("img");
      const drinkName = document.getElementsByClassName("drinkName");
      drinksHref[i].setAttribute("href", "#"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
      imgDrinks[i].setAttribute("src", arrImgTea[i]); //이미지 삽입하기
      // console.log(drinksHref);
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
      "<a><img class='imgDrinks'/><div class='drinkName'></div></a>"; //링크태그
    const drinksHref = document.querySelectorAll("a");
    const imgDrinks = document.querySelectorAll("img");
    const drinkName = document.getElementsByClassName("drinkName");
    drinksHref[i].setAttribute("href", "#"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks[i].setAttribute("src", arrImgFro[i]); //이미지 삽입하기
    // console.log(drinksHref);
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
    cofLink[i].setAttribute("href", "#"); //링크//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    // imgDrinks[i].setAttribute("class", "cofLink"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks[i].setAttribute("src", arrTCimgs[i]); //이미지 삽입하기
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
  for (j = 0; j < arrTNames.length; j++) {
    // console.log(arrTNames.length);
    showDrinkList.innerHTML +=
      "<a class='tlink'><img class='imgDrinks2'/><div class='drinkName2'></div></a>"; //링크태그
    const tlink = document.getElementsByClassName("tlink");
    const imgDrinks2 = document.getElementsByClassName("imgDrinks2");
    const drinkName2 = document.getElementsByClassName("drinkName2");
    tlink[j].setAttribute("href", "#"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks2[j].setAttribute("src", arrTCimgs[j + 8]); //이미지 삽입하기
    drinkName2[j].innerHTML = arrTNames[j]; //이름 삽입
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
    cofLink[i].setAttribute("href", "#"); //링크//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    // drinksHref[i].setAttribute("class", "cofLink"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks[i].setAttribute("src", arrCFimgs[i]); //이미지 삽입하기
    // console.log(arrCFimgs[i]);
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
  for (j = 0; j < arrFNames.length; j++) {
    // console.log(arrFNames.length);
    showDrinkList.innerHTML +=
      "<a class='flink'><img class='imgDrinks3'/><div class='drinkName3'></div></a>"; //링크태그
    const flink = document.getElementsByClassName("flink");
    const imgDrinks3 = document.getElementsByClassName("imgDrinks3");
    const drinkName3 = document.getElementsByClassName("drinkName3");
    flink[j].setAttribute("href", "#"); //f링크 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks3[j].setAttribute("src", arrCFimgs[j + 8]); //이미지 삽입하기
    drinkName3[j].innerHTML = arrFNames[j]; //이름 삽입
  }
};

/////////////////////////////////////////
//두개씩 보이는 함수 (커피 & 마할로치노)
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
  for (j = 0; j < arrTNames.length; j++) {
    // console.log(arrTNames.length);
    showDrinkList.innerHTML +=
      "<a class='tlink'><img class='imgDrinks2'/><div class='drinkName2'></div></a>"; //링크태그
    const tlink = document.getElementsByClassName("tlink");
    const imgDrinks2 = document.getElementsByClassName("imgDrinks2");
    const drinkName2 = document.getElementsByClassName("drinkName2");
    tlink[j].setAttribute("href", "#"); //클래스명 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks2[j].setAttribute("src", arrTFimgs[j]); //이미지 삽입하기
    drinkName2[j].innerHTML = arrTNames[j]; //이름 삽입
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
  for (j = 0; j < arrFNames.length; j++) {
    // console.log(arrFNames.length);
    showDrinkList.innerHTML +=
      "<a class='flink'><img class='imgDrinks3'/><div class='drinkName3'></div></a>"; //링크태그
    const flink = document.getElementsByClassName("flink");
    const imgDrinks3 = document.getElementsByClassName("imgDrinks3");
    const drinkName3 = document.getElementsByClassName("drinkName3");
    flink[j].setAttribute("href", "#"); //f링크 붙여주기//////////////////////////////////////////////////////////////////////////상세정보 페이지로
    imgDrinks3[j].setAttribute("src", arrTFimgs[j + 4]); //이미지 삽입하기
    drinkName3[j].innerHTML = arrFNames[j]; //이름 삽입
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
