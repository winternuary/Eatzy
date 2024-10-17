export interface Recipe {
  id: number;
  name: string;
  ingredient: string;
  way: string[];
  category: string;
  imageUrl: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "김치볶음밥",
    ingredient: "김치, 밥, 대파, 참기름, 간장, 계란",
    way: [
      "1. 김치를 볶는다.",
      "2. 밥을 넣고 같이 볶는다.",
      "3. 계란 프라이와 함께 먹는다.",
    ],
    category: "밥",
    imageUrl: "/images/kimchi_fried_rice.jpg",
  },
  {
    id: 2,
    name: "된장찌개",
    ingredient: "된장, 두부, 호박, 대파, 버섯, 고추",
    way: [
      "1. 된장을 물에 풀고 끓인다.",
      "2. 두부와 호박, 대파 등을 넣고 끓인다.",
    ],
    category: "찌개",
    imageUrl: "/images/soybean_soup.jpg",
  },
  {
    id: 3,
    name: "불고기",
    ingredient: "소고기, 간장, 설탕, 마늘, 대파, 양파",
    way: ["1. 소고기를 양념에 재운다.", "2. 고기를 볶는다."],
    category: "고기",
    imageUrl: "/images/bulgogi.jpg",
  },
  {
    id: 4,
    name: "비빔국수",
    ingredient: "소면, 고추장, 참기름, 설탕, 오이, 계란",
    way: [
      "1. 소면을 삶는다.",
      "2. 고추장과 참기름으로 양념을 만든다.",
      "3. 면과 양념을 비빈다.",
    ],
    category: "국수",
    imageUrl: "/images/bibim_noodles.jpg",
  },
  {
    id: 5,
    name: "삼계탕",
    ingredient: "닭, 인삼, 대추, 마늘, 찹쌀",
    way: ["1. 닭을 깨끗이 씻는다.", "2. 냄비에 모든 재료를 넣고 끓인다."],
    category: "탕",
    imageUrl: "/images/samgyetang.jpg",
  },
  {
    id: 6,
    name: "잡채",
    ingredient: "당면, 소고기, 시금치, 당근, 간장, 설탕",
    way: [
      "1. 당면을 삶고 나머지 재료들을 볶는다.",
      "2. 당면과 볶은 재료들을 함께 볶는다.",
    ],
    category: "반찬",
    imageUrl: "/images/japchae.jpg",
  },
  {
    id: 7,
    name: "김밥",
    ingredient: "김, 밥, 단무지, 시금치, 햄, 계란",
    way: ["1. 밥과 재료들을 김에 올린다.", "2. 말아서 자른다."],
    category: "밥",
    imageUrl: "/images/kimbap.jpg",
  },
  {
    id: 8,
    name: "해물파전",
    ingredient: "밀가루, 해물, 대파, 계란",
    way: ["1. 밀가루 반죽을 만든다.", "2. 해물과 대파를 넣고 부친다."],
    category: "전",
    imageUrl: "/images/seafood_pancake.jpg",
  },
  {
    id: 9,
    name: "떡볶이",
    ingredient: "떡, 고추장, 설탕, 어묵, 대파",
    way: ["1. 고추장을 물에 풀고 끓인다.", "2. 떡과 어묵을 넣고 끓인다."],
    category: "간식",
    imageUrl: "/images/tteokbokki.jpg",
  },
  {
    id: 10,
    name: "오징어볶음",
    ingredient: "오징어, 고추장, 설탕, 대파, 마늘",
    way: ["1. 오징어를 손질하고 고추장 양념에 볶는다."],
    category: "반찬",
    imageUrl: "/images/spicy_squid.jpg",
  },
];
