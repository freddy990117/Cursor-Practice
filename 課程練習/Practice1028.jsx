// 10/29 Component、ForEach、Map、Filter
import React from "react";

const Practice1028 = () => {
  // Function 練習
  const Mathfun1 = Components1(10, 20);
  const Mathfun2 = Components2(30, 50);
  const Mathfun3 = Components3(100);

  // 1.傳統函數宣告 (Function Declaration)
  function Components1(num1, num2) {
    return num1 * num2;
  }

  // 可進階使用 👇 2.Arror Function
  const Components2 = (num3, num4) => {
    return num3 > num4 ? num3 : num4;
  };

  // 3.直接 retrun value 的 Function
  const Components3 = (num5) => num5;

  // IIFE
  const Components4 = ((num6, num7) => (num6 < num7 ? num7 : num6))(100, 200);

  // ForEach、Map、filter 練習
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
  ];
  const languageCategories = [
    [
      { name: "Python", rating: 9.5, popularity: 9.7 },
      { name: "Java", rating: 9.4, popularity: 8.5 },
    ],
    [
      { name: "C++", rating: 9.2, popularity: 7.7 },
      { name: "PHP", rating: 9.0, popularity: 5.7 },
    ],
    [
      { name: "JS", rating: 8.5, popularity: 8.7 },
      { name: "Ruby", rating: 7.5, popularity: 6.8 },
    ],
  ];

  // 1.filter + map 篩選並提取資料
  function Pract1() {
    const Pract1 = languages.filter((lang) => lang.rating > 9.0);
    Pract1.map((result) => {
      console.log(result.name, result.rating);
    });
  }

  // 2.使用 forEach 計算特定條件的總數
  function Pract2() {
    let count = 0;
    languages.forEach((lang) => {
      if (lang.trending === "hot" || lang.trending === "super hot") {
        count++;
      }
    });
    return count;
  }
  // 3.map + filter 的組合
  // 請使用 map 和 filter 找出 popularity > 8.0 的語言，並輸出符合條件的語言名稱。
  function Pract3() {
    const mapFun = languageCategories.map((category) => {
      return category
        .filter((lang) => lang.popularity > 8.0) //篩選出 popularity 大於 8.0 的語言
        .map((lang) => lang.name);
      提取符合條件的語言名稱;
    });
    console.log(mapFun);
    輸出結果;
  }
  // 4.用 forEach + push 建立新陣列
  // 使用 forEach 遍歷 languages 陣列，將 rating 大於 9.0 的語言 name
  // 存入一個新的陣列 highRatingLanguages，最後輸出此陣列。
  function Pract4() {
    let highRatingLanguages = [];
    const eachFun = languageCategories.forEach((lang) => {
      lang.forEach((lang2) => {
        if (lang2.rating > 9.0) {
          return highRatingLanguages.push(lang2.name);
        }
      });
    });
    console.log(highRatingLanguages);
  }
  // 5.map 轉換物件結構
  // 假設你希望把 languages 陣列轉換成只包含 name 和 trending 屬性的新物件陣列，請使用 map 來完成。
  function Pract5() {
    const transformedLanguages = languages.map(({ name, trending }) => ({
      name,
      trending,
    }));
  }

  // 分別用 forEach & map 取 name 出來

  const Each1 = languages.forEach((lang) => {
    // 遍歷 languages 陣列並印出 name
    console.log(lang.name);
  });

  const map1 = languages.map((lang) => {
    // 遍歷 languages 陣列並回傳薪的陣列，回傳值為 name
    return lang.name;
  });

  // filter 取值
  const filter1 = languages.filter((lang) => lang.popularity > 9.0);
  console.log(filter1);

  retrun(
    <div>
      <h2>我是 Mathfun1 : {Mathfun1}</h2>
      <h2>我是 Mathfun2 : {Mathfun2}</h2>
      <h2>我是 Mathfun3 : {Mathfun3}</h2>
      {/* IIFE 的結果會回傳一個 JavaScript Value，而非JSX 的 Components */}
      <h2>我是 Components4 :{Components4}</h2>
    </div>
  );
};

export default Practice1028;
