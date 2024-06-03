function generateSideBar() {
  const sideBar = `
        <aside class="side-bar">
            <section class="side-bar__icon-box">
                <section class="side-bar__icon-1">
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </section>
            <ul>
                <li><a href="../../main.html">home</a></li>
                <li>
                    <a href="#">나만의 레시피</a>
                    <ul>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('나만의 레시피', '한식')">한식</a></li>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('나만의 레시피', '중식')">중식</a></li>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('나만의 레시피', '양식')">양식</a></li>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('나만의 레시피', '일식')">일식</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">남의 레시피</a>
                    <ul>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('남의 레시피', '한식')">한식</a></li>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('남의 레시피', '중식')">중식</a></li>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('남의 레시피', '양식')">양식</a></li>
                        <li><a href="../../main.html#" onclick="setCategoryAndType('남의 레시피', '일식')">일식</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    `;
  return sideBar;
}

document.addEventListener("DOMContentLoaded", function () {
  const wrap = document.getElementById("bar");

  if (wrap) {
    wrap.innerHTML = generateSideBar();
  }
});

function setCategoryAndType(category, type) {
  localStorage.setItem('selectedCategory', category);
  localStorage.setItem('selectedType', type);
}

// main.html에서 로드될 때 실행되는 함수
document.addEventListener("DOMContentLoaded", function () {
  const category = localStorage.getItem('selectedCategory');
  const type = localStorage.getItem('selectedType');

  if (category && type) {
    showImages(category, type);
    localStorage.removeItem('selectedCategory');
    localStorage.removeItem('selectedType');
  }
});


const images = {
  "나만의 레시피": {
    "한식": [
      "레시피 이미지/한식/떡볶이.jpg",
      "레시피 이미지/한식/소갈비찜.jpg",
      "레시피 이미지/한식/돼지고기김치찌개.jpg",
      "레시피 이미지/한식/청국장.jpg",
      "레시피 이미지/한식/돼지고기수육.jpg",
      "레시피 이미지/한식/소불고기.jpg",
      "레시피 이미지/한식/잡채.jpg",
      "레시피 이미지/한식/무생채.jpg",
      "레시피 이미지/한식/전복죽.jpg",
      "레시피 이미지/한식/찜닭.jpg",
      "레시피 이미지/한식/오므라이스.jpg",
    ],
    "중식": [
      "레시피 이미지/중식/라조육.jpg",
      "레시피 이미지/중식/마라샹궈.jpg",
      "레시피 이미지/중식/마라탕.jpg",
      "레시피 이미지/중식/마파두부.jpg",
      "레시피 이미지/중식/멘보샤.jpg",
    ],
    "양식": [
      "레시피 이미지/양식/로제파스타.jpg",
      "레시피 이미지/양식/베이컨 에그 크레페.jpg",
      "레시피 이미지/양식/새우감바스.jpg",
      "레시피 이미지/양식/애플파이.jpg",
      "레시피 이미지/양식/크림 브륄레.jpg",
    ],
    "일식": [
      "레시피 이미지/일식/규동.jpg",
      "레시피 이미지/일식/니쿠자가.jpg",
      "레시피 이미지/일식/돈코츠라멘.jpg",
      "레시피 이미지/일식/미타라시 당고.jpg",
    ],
  },
  "남의 레시피": {
    "한식": [
      "레시피 이미지/한식/두부조림.jpg",
      "레시피 이미지/한식/동태찌개.jpg",
      "레시피 이미지/한식/김치볶음밥.jpg",
      "레시피 이미지/한식/부추전.jpg",
    ],
    "중식": [
      "레시피 이미지/중식/자장면.jpg",
      "레시피 이미지/중식/짬뽕.jpg",
      "레시피 이미지/중식/팔보채.jpg",
      "레시피 이미지/중식/훠궈.jpg",
    ],
    "양식": [
      "레시피 이미지/양식/크림파스타.jpg",
      "레시피 이미지/양식/토마토 리조또.jpg",
    ],
    "일식": [
      "레시피 이미지/일식/볶음 우동.jpg",
      "레시피 이미지/일식/오야코동.jpg",
      "레시피 이미지/일식/오코노미야끼.jpg",
      "레시피 이미지/일식/우나기동.jpg",
      "레시피 이미지/일식/탄탄멘.jpg",
    ],
  },
};

const descriptions = {
  "나만의 레시피": {
  "한식": [
    ["떡볶이", "매콤한 소스에 쫄깃한 떡이 어우러진 전통 한국 떡요리입니다."],
    [
      "소갈비찜",
      "소갈비찜의 소스는 진한 맛을 낸다. 고기의 식감은 너무 좋아서 여러번 만들고 싶은 요리입니다.",
    ],
    [
      "돼지고기김치찌개",
      "김치찌개는 한국인의 마음속 깊은 곳을 통틀어 든든함을 떠올리게 하는 음식입니다.",
    ],
    [
      "청국장",
      "한국 전통 발효식품 중 하나인 청국장은 풍부한 영양소를 함유하고 있어 건강에 좋은 음식입니다.",
    ],
    [
      "돼지고기수육",
      "고기의 풍미와 부드러움이 일품인 돼지고기 수육은 한국의 대표적인 고기요리 중 하나입니다.",
    ],
    [
      "소불고기",
      "매콤한 양념에 불에 구운 소고기의 맛은 일품이죠. 소불고기는 한식 중에서도 특히 유명한 음식입니다.",
    ],
    [
      "잡채",
      "다양한 채소와 고기를 함께 볶은 잡채는 맑은 소스와 어우러져 상큼하고 맛있는 한국 요리입니다.",
    ],
    [
      "무생채",
      "채썬 무를 간장과 함께 담근 무생채는 한국식 반찬 중 하나로 시원한 맛과 아삭한 식감이 일품입니다.",
    ],
    [
      "전복죽",
      "전복의 깊은 맛과 죽의 부드러움이 어우러진 전복죽은 한국의 대표적인 아침 식사 메뉴입니다.",
    ],
    [
      "찜닭",
      "매콤한 양념에 찜한 닭고기는 쫄깃하고 맛있어 한국 가정에서 자주 먹는 음식 중 하나입니다.",
    ],
    [
      "오므라이스",
      "달걀 볶음밥 위에 양파와 당근 등을 넣어 만든 오므라이스는 한국인들이 좋아하는 양식 메뉴입니다.",
    ],
  ],
  "중식": [
    ["라조육", "매콤하고 달콤한 소스에 고기와 야채를 볶은 중국식 요리입니다."],
    [
      "마라샹궈",
      "마라 소스로 맛을 낸 중국의 전통 음식으로, 다양한 야채와 고기를 끓여먹는 스타일입니다.",
    ],
    [
      "마라탕",
      "마라 소스로 맛을 낸 중국의 전통 음식으로, 고기와 해산물을 끓여먹는 스타일입니다.",
    ],
    [
      "마파두부",
      "마라 소스와 마파두부를 볶은 중국의 전통 음식으로, 고기와 두부를 함께 먹습니다.",
    ],
    [
      "멘보샤",
      "고기와 야채를 넣은 만두를 튀겨서 만든 중국의 요리로, 간단하면서도 맛있는 반찬입니다.",
    ],
  ],
  "양식": [
    ["로제파스타", "토마토와 크림을 섞어 만든 소스로 맛을 내는 파스타입니다."],
    [
      "베이컨 에그 크레페",
      "베이컨과 계란을 넣은 프랑스식 크레페로, 아침식사로 인기가 많은 음식입니다.",
    ],
    [
      "새우감바스",
      "새우와 야채를 넣고 토마토소스와 올리브오일을 이용해 만든 스페인식 음식입니다.",
    ],
    [
      "애플파이",
      "사과를 푹 쪄서 넣은 파이로, 달콤하고 과일 향이 좋은 디저트입니다.",
    ],
    ["크림 브륄레", "카라멜화된 설탕 위에 크림을 올린 프랑스식 디저트입니다."],
  ],
  "일식": [
    [
      "규동",
      "돼지고기와 쇠고기, 양파를 간장과 달걀 위에 올린 일본식 요리입니다.",
    ],
    [
      "니쿠자가",
      "고기와 야채를 도토리가루와 함께 먹는 일본식 음식으로, 건강에 좋은 음식입니다.",
    ],
    [
      "돈코츠라멘",
      "고기육수와 면, 돼지고기를 함께 넣어 먹는 일본식 라면입니다.",
    ],
    [
      "미타라시 당고",
      "미타라시(홍합)와 다시마를 넣고 끓여먹는 일본식 음식입니다.",
    ],
  ],
},
  "남의 레시피": {
    "한식": [
      [
        "두부조림",
        "간장과 설탕으로 달콤하게 조린 두부조림은 부드럽고 고소한 맛이 일품인 한국식 반찬입니다.",
      ],
      [
        "동태찌개",
        "톡 쏘는 맛과 향긋한 향이 일품인 동태찌개는 한국의 대표적인 해물 요리 중 하나입니다.",
      ],
      [
        "김치볶음밥",
        "김치와 밥을 볶아 만든 김치볶음밥은 간단하면서도 맛있는 한국의 대표적인 밥 메뉴입니다.",
      ],
      [
        "부추전",
        "부추와 밀가루를 섞어 부친 부추전은 바삭하면서도 고소한 맛이 일품인 한국식 전입니다.",
      ],
    ],
    "중식":[
      [
        "자장면",
        "짭조름한 자장소스를 고기와 면과 함께 볶아 먹는 중국의 전통 면 요리입니다.",
      ],
      [
        "짬뽕",
        "매콤한 국물에 해산물과 야채, 고기를 넣어 끓여 먹는 중국의 전통 국 요리입니다.",
      ],
      [
        "팔보채",
        "팔보채는 중국 요리의 하나로, 고기와 야채를 고추장으로 맛을 낸 음식입니다.",
      ],
      [
        "훠궈",
        "중국에서 유명한 음식 중 하나로, 다양한 야채와 고기를 끓여 먹는 음식입니다.",
      ],
    ],
    "양식":[
      [
        "크림파스타",
        "크림소스와 파스타를 함께 끓여서 만든 맛있는 이탈리안 음식입니다.",
      ],
      [
        "토마토 리조또",
        "토마토와 치즈, 채소를 넣어 만든 이탈리안 음식으로, 리조또의 대표적인 종류입니다.",
      ],
    ],
    "일식":[
      [
        "볶음 우동",
        "면을 볶아서 만든 우동으로, 달콤하고 짭쪼름한 맛이 일품입니다.",
      ],
      ["오야코동", "오야코(새우)와 밥을 함께 끓여 먹는 일본식 음식입니다."],
    [
      "오코노미야끼",
      "밀가루 반죽에 채소와 해물, 고기를 넣고 부친 일본식 음식입니다.",
    ],
    ["우나기동", "우나기(장어)와 밥을 함께 먹는 일본식 음식입니다."],
    [
      "탄탄멘",
      "고기육수에 면을 넣고 끓여 먹는 중국식 라면으로, 매운맛이 특징입니다.",
    ],
    ],
  },
};

function showImages(category, type) {
  document.getElementById("wrap").style.display = "block";
  const selectedImages = images[category][type];
  const descriptionList = descriptions[category][type];
  const foodNumbers = foodNumber[category][type];

  document.getElementById("wrap").innerHTML = selectedImages
    .map((src, index) => {
      const foodName = descriptionList[index][0];
      const description = descriptionList[index][1];
      const foodNumber = foodNumbers[index]; // 음식 번호 가져오기

      return `
            <article class="content">
              <a href="recipe/${category}/${type}${foodNumber}.html">
                <img src="${src}" alt="${foodName}">
                <h3>${foodName}</h3>
                <p>${description}</p>
              </a>
            </article>
          `;
    })
    .join("");
  ScrollReveal().reveal(".content", {
    duration: 800,
    distance: "50px",
    easing: "ease-in-out",
    origin: "bottom",
  });
  console.log(`Showing images for ${category} - ${type}`);
}

const foodNumber = {
  "나만의 레시피": {
    "한식": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    "중식": ["1", "2", "3", "4", "5"],
    "양식": ["1", "2", "3", "4", "5"],
    "일식": ["1", "2", "3", "4"],
  },
  "남의 레시피": {
    "한식": ["1", "2", "3", "4"],
    "중식": ["1", "2", "3", "4"],
    "양식": ["1", "2"],
    "일식": ["1", "2", "3", "4", "5"],
  },
};
