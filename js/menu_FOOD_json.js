//json으로 음료 분류//샌드위치•샐러드//브레드//케이크
//카페인항목에서 제거
let drinkMenu = {
  data: [
    {
      //1
      name: "두부면 팟타이 샐러드", //이름
      subtype: "샐러드•샌드위치 ", //분류
      engname: "Pad Thai Tofu Noodles", //영문이름
      calories: 250, //칼로리
      sugar: 19, //당류
      protein: 14, //단백질
      transfat: 3.8, //포화지방
      sodium: 860, //나트륨
      //설명
      description:
        "팟타이 소스에 버무려진 새우와 그릴드 베지터블을 탱글 탱글한 두부면",
      //이미지 태그
      img: "../img/menu_Food/1_padThaiTofu.png",
      allergen:
        "알레르기 유발요인 : 땅콩 , 대두 , 우유 , 난류 , 밀 , 조개류 , 새우 , 닭고기 , 쇠고기 , 아황산류",
    },
    {
      //2
      name: "불고기머쉬룸 그레인 볼", //이름
      subtype: "샐러드•샌드위치 ", //분류
      engname: "Pork Mushroom Grain Bowl", //영문이름
      calories: 335, //칼로리
      sugar: 1, //당류
      protein: 9, //단백질
      transfat: 1.9, //포화지방
      sodium: 730, //나트륨
      //설명
      description:
        "다양한 곡물,그릴드 베지터블, 버섯, 불고기를 담은 든든한 식사",
      //이미지 태그
      img: "../img/menu_Food/2_warmGrainBowl.png",
      allergen: "",
    },
    {
      //3
      name: "콥 & 화이트 샐러드", //이름
      subtype: "샐러드•샌드위치 ", //분류////샌드위치•샐러드
      engname: "Cobb & White Salad", //영문이름
      calories: 198, //칼로리
      sugar: 4, //당류
      protein: 15, //단백질
      transfat: 2.3, //포화지방
      sodium: 540, //나트륨
      //설명
      description:
        "닭가슴살, 새우 그리고 반숙란이 화이트 발사믹 드레싱과 어우러져 가벼운 한 끼를 책임질 콥 샐러드",
      //이미지 태그
      img: "../img/menu_Food/3_cobbWhiteSalad.png",
      allergen: "알레르기 유발요인 : 대두,난류,토마토,새우,닭고기",
    },
    {
      //4
      name: "더블 에그 샐러드", //이름
      subtype: "샐러드•샌드위치 ", //분류
      engname: "Double Egg Salad", //영문이름
      calories: 249, //칼로리
      sugar: 4, //당류
      protein: 18, //단백질
      transfat: 3.9, //포화지방
      sodium: 763, //나트륨
      //설명
      description:
        "반숙란 두개와 부드러운 닭가슴살, 반건조 토마토를 담은 싱그러운 프릴아이스 샐러드",
      //이미지 태그
      img: "../img/menu_Food/4_doubleEggSalad.png",
      allergen:
        "알레르기 유발요인 : 대두 , 우유 , 난류 , 토마토 , 닭고기 , 아황산류",
    },
    {
      //5
      name: "단호박 에그 샌드위치",
      subtype: "샐러드•샌드위치 ",
      engname: "Sweet Pumpkin Egg Sandwich",
      calories: 350,
      sugar: 7,
      protein: 11,
      transfat: 4.3,
      sodium: 698,
      description:
        "건강 잡곡 식빵 속에 단호박, 달걀, 토마토, 치즈 등을 넣은 콜드 샌드위치",
      img: "../img/menu_Food/5_sweetPumpkinEggSandwich.png",
      allergen: "알레르기 유발요인 : 대두,우유,난류,밀,토마토,조개류,쇠고기",
    },
    {
      //6
      name: "먹물바게트 아보카도 샌드위치", //이름
      subtype: "샐러드•샌드위치 ", //분류
      engname: "SquidInk Avocado Sandwich", //영문이름
      calories: 125, //칼로리
      sugar: 9, //당류
      protein: 5, //단백질
      transfat: 3.9, //포화지방
      sodium: 85, //나트륨
      //설명
      description: "베이컨, 양상추, 아보카도, 토마토간 먹물 바게트 샌드위치",
      //이미지 태그
      img: "../img/menu_Food/6_squidInkBaguetteSandwich.png",
      allergen:
        "알레르기 유발요인 :  대두,우유,난류,밀,토마토,오징어,돼지고기,쇠고기",
    },
    {
      //7
      name: "무화과 햄 바게트 샌드위치", //이름
      subtype: "샐러드•샌드위치 ", //분류
      engname: "Fig & Ham Baguette Sandwich", //영문이름
      calories: 410, //칼로리
      sugar: 13, //당류
      protein: 11, //단백질
      transfat: 7, //포화지방
      sodium: 840, //나트륨
      //설명
      description:
        "절인 무화과, 모르타델라 햄, 치즈, 루꼴라를 넣은 겉은 바삭 속은 쫄깃한 정통 바게트 샌드위치",
      //이미지 태그
      img: "../img/menu_Food/7_FigHamBaguette.png",
      allergen:
        "알레르기 유발요인 : 대두 , 우유 , 난류 , 밀 , 돼지고기 , 쇠고기 , 아황산류",
    },
    {
      //8
      name: "잠봉 베이글 샌드위치", //이름
      subtype: "샐러드•샌드위치 ", //분류
      engname: "Jambon Bagel Sandwich", //영문이름
      calories: 600, //칼로리
      sugar: 8, //당류
      protein: 16, //단백질
      transfat: 22, //포화지방
      sodium: 820, //나트륨
      //설명
      description:
        "통참깨 베이글에 진한 풍미의 치즈버터를 바르고 베이글 사이에 잠봉 햄, 치즈, 루꼴라를 더한 샌드위치",
      //이미지 태그
      img: "../img/menu_Food/8_JambonBagel.png",
      allergen: "알레르기 유발요인 : 우유 , 난류 , 밀 , 돼지고기",
    },

    ////////////////////////////////////////////////브레드 subtype
    {
      //9
      name: "훈제 소시지빵", //이름
      subtype: "브레드", //분류
      engname: "Smoked Sausage Bread", //영문이름
      calories: 520, //칼로리
      sugar: 7, //당류
      protein: 14, //단백질
      transfat: 5, //포화지방
      sodium: 985, //나트륨
      //설명
      description: "훈제된 도톰한 소시지와 곁들인 그릴드 어니언 브레드",
      //이미지 태그
      img: "../img/menu_Food/9_smokedSausageBread.png",
      allergen:
        "알레르기 유발요인 : 대두 , 우유 , 난류 , 밀 , 돼지고기 , 쇠고기",
    },
    {
      //10
      name: "마우나케아 에그커스타드", //이름
      subtype: "브레드", //분류
      engname: "Mauna Kea Egg Custard Pastry", //영문이름
      calories: 590, //칼로리
      sugar: 26, //당류
      protein: 10, //단백질
      transfat: 20, //포화지방
      sodium: 8, //나트륨

      //설명
      description:
        "하와이 마우나케아산을 닮은 치즈 케이크와 달콤한 슈크림을 담은 패스츄리",
      //이미지 태그
      img: "../img/menu_Food/10_eggCustardPastry.png",
      allergen: "알레르기 유발요인 : 우유 , 난류 , 밀 , 아황산류",
    },
    {
      //11
      name: "마할로 연유 버터 브레드", //이름
      subtype: "브레드", //분류
      engname: "Mahalo Sweet butter bread", //영문이름
      calories: 440, //칼로리
      sugar: 23, //당류
      protein: 8, //단백질
      transfat: 11, //포화지방
      sodium: 540, //나트륨

      //설명
      description:
        "닮은 연유 버터크림이 가득들어있어 따뜻하게 드시면 부드럽고 촉촉하게 즐길 수 있는 폭신한 빵",
      //이미지 태그
      img: "../img/menu_Food/11_butterCreamBread.png",
      allergen: "알레르기 유발요인 : 대두 , 우유 , 밀",
    },
    {
      //12
      name: "킬라우에아 티라미수 브레드", //이름
      subtype: "브레드", //분류
      engname: "Kīlauea Tiramisu Bread", //영문이름
      calories: 380, //칼로리
      sugar: 24, //당류
      protein: 5, //단백질
      transfat: 14, //포화지방
      sodium: 240, //나트륨

      //설명
      description: "킬라우에아 활화산용암처럼 크림폭탄을 담은 티라미수 데니쉬",
      //이미지 태그
      img: "../img/menu_Food/12_TiramisuCreamBread.png",
      allergen: "알레르기 유발요인 : 대두 , 우유 , 난류 , 밀",
    },
    ////////////////////////////////////////////////케이크 subtype
    {
      //13
      name: "뉴욕 치즈케이크", //이름
      subtype: "케이크", //분류
      engname: "New York Cheese Cake", //영문이름
      calories: 368, //칼로리
      sugar: 21, //당류
      protein: 5, //단백질
      transfat: 12.9, //포화지방
      sodium: 189, //나트륨
      //설명
      description: "부드럽고 촉촉한 식감과 진한 크림 치즈 맛의 구움 치즈케이크",
      //이미지 태그
      img: "../img/menu_Food/13_newyorkCheeseCake.png",
      allergen: "알레르기 유발요인 : 밀, 계란, 우유, 대두, 쇠고기",
    },
    {
      //14
      name: "트리플 베리 생크림 케이크", //이름
      subtype: "케이크", //분류
      engname: "Triple Berry Fresh Cream Cake", //영문이름
      calories: 268, //칼로리
      sugar: 4, //당류
      protein: 4, //단백질
      transfat: 9.3, //포화지방
      sodium: 105, //나트륨
      //설명
      description:
        "부드러운 생크림과 달콤한 딸기가 샌딩된 케이크 위에 블루베리와 크랜베리를 토핑한 케이크",
      //이미지 태그
      img: "../img/menu_Food/14_trippleBerryCake.png",
      allergen: "알레르기 유발요인 : 계란,우유, 대두,밀, 돼지고기",
    },
    {
      //15
      name: "트리플 베리 치즈 스윗박스", //이름
      subtype: "케이크", //분류
      engname: "Triple Berry Cheese Sweet Box", //영문이름
      calories: 490, //칼로리
      sugar: 47, //당류
      protein: 6, //단백질
      transfat: 13.3, //포화지방
      sodium: 100, //나트륨
      //설명
      description:
        "딸기와 치즈맛이 어우러진 케이크 위에 블루베리, 크랜베리를 토핑한 케이크",
      //이미지 태그
      img: "../img/menu_Food/15_trippleBerryBoxCake.png",
      allergen: "알레르기 유발요인 : 우유, 대두",
    },
    {
      //16
      name: "오레오 스윗박스", //이름
      subtype: "케이크", //분류
      engname: "Cookie & Cream Cake", //영문이름
      calories: 299, //칼로리
      sugar: 26, //당류
      protein: 6, //단백질
      transfat: 4.8, //포화지방
      sodium: 184, //나트륨
      //설명
      description:
        "진한 치즈 무스크림 사이로 바삭하고 촉촉한 쿠키가 토핑된 떠먹는 케이크",
      //이미지 태그
      img: "../img/menu_Food/16_oreoBoxCake.png",
      allergen: "알레르기 유발요인 :  계란, 우유, 대두, 밀, 돼지고기, 호두",
    },
    {
      //17
      name: "먹물 당근케이크", //이름
      subtype: "케이크", //분류
      engname: "Black Carrot Cake", //영문이름
      calories: 304, //칼로리
      sugar: 32, //당류
      protein: 4, //단백질
      transfat: 13, //포화지방
      sodium: 309, //나트륨
      //설명
      description:
        " 오징어 먹물 케이크 시트 사이에 새콤한 당근 크림치즈 무스를 샌드한 컵 케이크",
      //이미지 태그
      img: "../img/menu_Food/17_carrotSquidInkCake.png",
      allergen: "알레르기 유발요인 : 우유 , 난류 , 밀 , 오징어",
    },
    {
      //18
      name: "녹차 롤케이크", //이름
      subtype: "케이크", //분류
      engname: "Green Tea Cream Roll Cake", //영문이름
      calories: 547, //칼로리
      sugar: 57, //당류
      protein: 9, //단백질
      transfat: 15, //포화지방
      sodium: 200, //나트륨
      //설명
      description:
        "녹차 롤 케이크 시트에 진한 마스카포네 크림과 달콤 쌉싸름한 녹차 가나슈를 넣은 롤 케이크",
      //이미지 태그
      img: "../img/menu_Food/18_greenTeaRollCake.png",
      allergen: "알레르기 유발요인 : 우유,대두,호두",
    },
    {
      //19
      name: "슈크림 가득 바움쿠헨", //이름
      subtype: "케이크", //분류
      engname: "Choux Cream Baumkuchen", //영문이름
      calories: 565, //칼로리
      sugar: 43, //당류
      protein: 7, //단백질
      transfat: 20, //포화지방
      sodium: 230, //나트륨
      //설명
      description:
        "바닐라 빈이 들어간 부드러운 슈크림과 바움쿠헨이 조화로운 바닐라 풍미의 케이크",
      //이미지 태그
      img: "../img/menu_Food/19_chouxCreamBaumkuchen.png",
      allergen: "알레르기 유발요인 : 밀,우유,대두,계란,아황산류",
    },
    {
      //20
      name: "마할로 피칸 타르트", //이름
      subtype: "케이크", //분류
      engname: "Mahalo Pecan Tart", //영문이름
      calories: 435, //칼로리
      sugar: 29, //당류
      protein: 6, //단백질
      transfat: 7, //포화지방
      sodium: 160, //나트륨
      //설명
      description:
        "타르트 시트에 달콤한 필링과 고소한 피칸을 듬뿍 올려 구워낸 피칸 타르트",
      //이미지 태그
      img: "../img/menu_Food/20_pecanTart.png",
      allergen: "알레르기 유발요인 : 우유,대두",
    },
  ],
};
