//json으로 음료 분류
let drinkMenu = {
  data: [
    {
      //1
      name: "프리미엄 블랜드 아메리카노", //이름
      subtype: "커피", //분류
      engname: "Premium Blend Americano", //영문이름
      calories: 13, //칼로리
      sugar: 0, //당류
      protein: 1, //단백질
      transfat: 0.1, //포화지방
      sodium: 4, //나트륨
      caffeine: 233, //카페인
      //설명
      description:
        "화사한 산미와 과일과 같은 달콤함, 깔끔한 후미를 즐길수 있는 커피",
      //이미지 태그
      img: "../img/menu_Drinks//1_premiumBlendAmericano.png",
      allergen: "",
    },
    {
      //2
      name: "카페라떼",
      subtype: "커피",
      engname: "Caffe Latte",
      calories: 180,
      sugar: 13,
      protein: 8,
      transfat: 6,
      sodium: 130,
      caffeine: 127,
      description:
        "진한 에스프레소에 우유를 넣어 풍부한 커피향을 부드럽게 즐길 수 있는 커피",
      img: "../img/menu_Drinks//2_cafeLatte.png",
      allergen: "알레르기 유발요인 : 우유",
    },
    {
      //3
      name: "콜드브루 라떼", //이름
      subtype: "커피", //분류
      engname: "Cold Brew Latte", //영문이름
      calories: 125, //칼로리
      sugar: 9, //당류
      protein: 5, //단백질
      transfat: 3.9, //포화지방
      sodium: 85, //나트륨
      caffeine: 148, //카페인
      //설명
      description: "콜드브루 커피의 풍부한 풍미와 우유의 고소함이 더해진 라떼",
      //이미지 태그
      img: "../img/menu_Drinks//3_coldBrewLatte.png",
      allergen: "알레르기 유발요인 : 우유",
    },
    {
      //4
      name: "디카페인 바닐라 딜라이트", //이름
      subtype: "커피", //분류
      engname: "Vanilla Delight (Decaf blend)", //영문이름
      calories: 202, //칼로리
      sugar: 24, //당류
      protein: 6, //단백질
      transfat: 6.1, //포화지방
      sodium: 161, //나트륨
      caffeine: 20, //카페인
      //설명
      description: "콜드브루 커피의 풍부한 풍미와 우유의 고소함이 더해진 라떼",
      //이미지 태그
      img: "../img/menu_Drinks//4_decafvanilladelight.png",
      allergen: "알레르기 유발요인 : 우유, 대두",
    },
    {
      //5
      name: "카페모카", //이름
      subtype: "커피", //분류
      engname: "Caffe Mocha", //영문이름
      calories: 251, //칼로리
      sugar: 28, //당류
      protein: 8, //단백질
      transfat: 5.9, //포화지방
      sodium: 148, //나트륨
      caffeine: 132, //카페인
      //설명
      description:
        "진한 에스프레소와 우유, 달콤 쌉싸름한 초콜릿이 어우러진 커피",
      //이미지 태그
      img: "../img/menu_Drinks//5_cafeMocha.png",
      allergen: "알레르기 유발요인 : 우유, 대두",
    },
    {
      //6
      name: "카푸치노", //이름
      subtype: "커피", //분류
      engname: "Cappuccino", //영문이름
      calories: 165, //칼로리
      sugar: 12, //당류
      protein: 8, //단백질
      transfat: 5.5, //포화지방
      sodium: 119, //나트륨
      caffeine: 127, //카페인
      //설명
      description:
        "에스프레소에 실키하고 폭신폭신한 우유 거품이 풍부하게 더해진 커피",
      //이미지 태그
      img: "../img/menu_Drinks//6_cappucino.png",
      allergen: "알레르기 유발요인 : 우유",
    },
    {
      name: "카라멜 마키아또", //이름
      subtype: "커피", //분류
      engname: "Caramel Macchiato", //영문이름
      calories: 239, //칼로리
      sugar: 24, //당류
      protein: 8, //단백질
      transfat: 6.1, //포화지방
      sodium: 135, //나트륨
      caffeine: 127, //카페인
      //설명
      description:
        "진한 에스프레소에 바닐라 시럽과 카라멜소스가 더해진 카라멜 커피음료의 대표",
      //이미지 태그
      img: "../img/menu_Drinks//7_caramelmacchiato.png",
      allergen: "알레르기 유발요인 : 우유",
    },
    {
      //8
      name: "에스프레소", //이름
      subtype: "커피", //분류
      engname: "Espresso", //영문이름
      calories: 5, //칼로리
      sugar: 0, //당류
      protein: 0, //단백질
      transfat: 0, //포화지방
      sodium: 0, //나트륨
      caffeine: 61, //카페인
      //설명
      description:
        "강렬한 첫 맛, 풍부한 바디감, 깔끔한 뒷 맛이 특징인 커피의 심장",
      //이미지 태그
      img: "../img/menu_Drinks//8_espresso.png",
      allergen: "",
    },
    ////////////////////////////////////////////////라떼 티 subtype
    {
      //9
      name: "제주 청귤 그린티", //이름
      subtype: "라떼•티", //분류
      engname: "Jeju Green Tangerine Green Tea", //영문이름
      calories: 153, //칼로리
      sugar: 24, //당류
      protein: 0, //단백질
      transfat: 0, //포화지방
      sodium: 9, //나트륨
      caffeine: 0, //카페인
      //설명
      description:
        "제주산 청귤과 녹차를 블렌딩한 그린티에 한라봉 과육과 젤리를 듬뿍 넣은 티베리에이션 음료",
      //이미지 태그
      img: "../img/menu_Drinks//9_jejuTea.png",
      allergen: "",
    },
    {
      //10
      name: "홍자몽차", //이름
      subtype: "라떼•티", //분류
      engname: "Red Grapefruit Tea", //영문이름
      calories: 138, //칼로리
      sugar: 32, //당류
      protein: 1, //단백질
      transfat: 0, //포화지방
      sodium: 8, //나트륨
      caffeine: 0, //카페인
      //설명
      description: "자몽과일 특유의 달콤 쌉싸름한 맛을 즐길 수 있는 과일차",
      //이미지 태그
      img: "../img/menu_Drinks//10_redGrapeFruitTea.png",
      allergen: "",
    },
    {
      //11
      name: "그린티라떼", //이름
      subtype: "라떼•티", //분류
      engname: "Green Tea Latte", //영문이름
      calories: 258, //칼로리
      sugar: 31, //당류
      protein: 9, //단백질
      transfat: 6.4, //포화지방
      sodium: 139, //나트륨
      caffeine: 50, //카페인
      //설명
      description:
        "강렬한 첫 맛, 풍부한 바디감, 깔끔한 뒷 맛이 특징인 커피의 심장",
      //이미지 태그
      img: "../img/menu_Drinks//11_greenTeaLatte.png",
      allergen: "알레르기 유발요인 : 우유",
    },
    {
      //12
      name: "복숭아 얼그레이", //이름
      subtype: "라떼•티", //분류
      engname: "Peach Earl Grey", //영문이름
      calories: 109, //칼로리
      sugar: 26, //당류
      protein: 0, //단백질
      transfat: 0, //포화지방
      sodium: 4, //나트륨
      caffeine: 33, //카페인
      //설명
      description:
        "달콤한 복숭아와 얼그레이의 베르가못 향의 조화, 깔끔하면서도 달콤한 티베리에이션 음료",
      //이미지 태그
      img: "../img/menu_Drinks//12_peachEarlgrey.png",
      allergen: "알레르기 유발요인 : 복숭아",
    },
    ////////////////////////////////////////////////마할로치노빙수 subtype
    {
      //13
      name: "복숭아 마할로치노", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Peach Multiccino", //영문이름
      calories: 354, //칼로리
      sugar: 76, //당류
      protein: 2, //단백질
      transfat: 0, //포화지방
      sodium: 26, //나트륨
      caffeine: 0, //카페인
      //설명
      description:
        "복숭아 과육과 탱글한 젤리를 가득 넣은 복숭아 스무디에 발그레한 복숭아 아이스크림을 얹은 스무디",
      //이미지 태그
      img: "../img/menu_Drinks//13_peachSmoothie.png",
      allergen: "알레르기 유발요인 : 복숭아",
    },
    {
      //14
      name: "수박 마할로치노", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Watermelon Multiccino", //영문이름
      calories: 246, //칼로리
      sugar: 58, //당류
      protein: 1, //단백질
      transfat: 0.1, //포화지방
      sodium: 8, //나트륨
      caffeine: 0, //카페인
      //설명
      description:
        "달콤하고 시원한 수박 스무디에 수박 아이스크림을 얹은 스무디",
      //이미지 태그
      img: "../img/menu_Drinks//14_waterMelonSmoothie.png",
      allergen: "알레르기 유발요인 : 우유, 대두",
    },
    {
      //15
      name: "다크초코칩 마할로치노", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Dark Chocochip Multiccino", //영문이름
      calories: 544, //칼로리
      sugar: 47, //당류
      protein: 7, //단백질
      transfat: 20, //포화지방
      sodium: 29, //나트륨
      caffeine: 59, //카페인
      //설명
      description:
        "벨기에산 리얼 다크초콜릿이 씹히는 시원하고 진한 초콜릿 음료",
      //이미지 태그
      img: "../img/menu_Drinks//15_darkChococcino.png",
      allergen: "알레르기 유발요인 : 우유, 대두",
    },
    {
      //16
      name: "민트초코칩 마할로치노", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Mint Chocochip Multiccino", //영문이름
      calories: 377, //칼로리
      sugar: 57, //당류
      protein: 6, //단백질
      transfat: 8.1, //포화지방
      sodium: 170, //나트륨
      caffeine: 1, //카페인
      //설명
      description:
        "초코칩이 콕콕 박힌 상쾌하면서 청량한 민트 맛의 블렌디드 음료",
      //이미지 태그
      img: "../img/menu_Drinks//16_mintChococcino.png",
      allergen: "알레르기 유발요인 : 우유, 대두",
    },
    {
      //17
      name: "피치 딸기 마할로치노", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Peach Strawberry Multiccino", //영문이름
      calories: 193, //칼로리
      sugar: 47, //당류
      protein: 0, //단백질
      transfat: 0, //포화지방
      sodium: 9, //나트륨
      caffeine: 0, //카페인
      //설명
      description:
        "과즙 가득한 복숭아 슬러쉬 안에 톡톡 씹히는 딸기 과육이 더해진 음료",
      //이미지 태그
      img: "../img/menu_Drinks//17_peachStraberricino.png",
      allergen: "알레르기 유발요인 : 복숭아",
    },
    {
      //18
      name: "2인) 눈꽃 팥빙수", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Red Bean Ice Flake", //영문이름
      calories: 441, //칼로리
      sugar: 54, //당류
      protein: 10, //단백질
      transfat: 4.3, //포화지방
      sodium: 173, //나트륨
      caffeine: 0, //카페인
      //설명
      description:
        "부드러운 우유얼음에 국내산 팥, 달콤 바삭한 그래놀라와 고소한 인절미가 어우러진 팥빙수",
      //이미지 태그
      img: "../img/menu_Drinks//18_redBean.png",
      allergen: "알레르기 유발요인 : 우유,대두,호두",
    },
    {
      //19
      name: "2인) 애플망고 치즈 케이크 빙수", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Applemango Cheesecake Ice Flake", //영문이름
      calories: 326, //칼로리
      sugar: 45, //당류
      protein: 5, //단백질
      transfat: 7.7, //포화지방
      sodium: 139, //나트륨
      caffeine: 0, //카페인
      //설명
      description:
        "상큼달콤한 애플망고 베이스에 망고를 한가득 올리고, 진한 치즈 케이크와 바삭한 코코넛칩을 더한 망고 빙수",
      //이미지 태그
      img: "../img/menu_Drinks//19_appleMangoSnow.png",
      allergen: "알레르기 유발요인 : 밀,우유,대두,계란,아황산류",
    },
    {
      //20
      name: "그린티 마할로치노", //이름
      subtype: "마할로치노•빙수", //분류
      engname: "Green Tea Multiccino", //영문이름
      calories: 279, //칼로리
      sugar: 56, //당류
      protein: 6, //단백질
      transfat: 1.2, //포화지방
      sodium: 128, //나트륨
      caffeine: 99, //카페인
      //설명
      description:
        "쌉싸름하면서 고소한 국내산 녹차 100%로 만든 진하고 깊은 슬러쉬 음료",
      //이미지 태그
      img: "../img/menu_Drinks//20_greenticcino.png",
      allergen: "알레르기 유발요인 : 우유,대두",
    },
  ],
};
