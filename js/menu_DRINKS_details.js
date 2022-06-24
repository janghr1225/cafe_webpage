// let tbody = document.getElementById("tbody");
let cal = document.getElementById("cal");
let sug = document.getElementById("sug");
let pro = document.getElementById("pro");
let fat = document.getElementById("fat");
let sod = document.getElementById("sod");
let caf = document.getElementById("caf");

drinkMenu.data.forEach((obj) => {});
let result = document.getElementById("result");
let drinkData = drinkMenu.data;
// drinkData.forEach((obj) => {
//   console.log(obj.name);
// });
// loadData();
drinkMenu.data.forEach((obj) => {});

const detailsWrap = document.getElementById("DetailsWrap");
const Kname = document.getElementById("Kname");
const engName = document.getElementById("engName");
const detailDes = document.getElementById("detailDes");
const allergy = document.getElementById("allergy");
const drinkImg = document.getElementById("drinkImg");

drinkData.forEach((obj) => {
  console.log(obj.subtype);
  let subtypeStr = JSON.stringify(obj.subtype);
  let kNameStr = JSON.stringify(obj.name);
  let eNameStr = JSON.stringify(obj.engname);
  let detailStr = JSON.stringify(obj.description);
  let allerStr = JSON.stringify(obj.allergen);

  if (subtypeStr == '"커피"') {
    // console.log(subtypeStr);
    //설명 값넣기
    let imgStrR = subtypeStr.replace(/"/g, "");
    subtype.innerHTML = imgStrR;
    let korName = kNameStr.replace(/"/g, "");
    Kname.innerHTML = korName;
    let eName = eNameStr.replace(/"/g, "");
    engName.innerHTML = eName;
    let detailCof = detailStr.replace(/"/g, "");
    detailDes.innerHTML = detailCof;
    let AllerCof = detailStr.replace(/"/g, "");
    allerStr.innerHTML = AllerCof;
    //표값 넣기
    cal.innerHTML = obj.calories;
    sug.innerHTML = obj.sugar;
    pro.innerHTML = obj.protein;
    fat.innerHTML = obj.transfat;
    sod.innerHTML = obj.sodium;
    caf.innerHTML = obj.caffeine;

    //이미지 삽입
    const arrImg = [];
    drinkMenu.data.forEach((obj) => {
      let imgStr = JSON.stringify(obj.img);
      console.log(imgStr);
      let imgStrR = imgStr.replace(/"/g, "");
      arrImg.push(imgStrR); //배열에 담아주기
    });
    drinkImg.setAttribute("src", arrImg[0]);
    for (i = 0; i < arrImg.length; i++) {
      // drinkImg.setAttribute("src", arrImg[i]);
    }
  }
});
