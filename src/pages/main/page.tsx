"use client";

import { recipes, Recipe } from "@/data/data";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./styles.css";
import search from "@/assets/search.png";
export const Main = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <p className={styles.Logo}>Eatzy</p>
      <div className={styles.inputContainerStyle}>
        <input
          className={styles.inputStyle}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Image
          src={search}
          alt="search icon"
          className={styles.searchIconStyle}
        />
      </div>
      <div className={styles.popularBox}>
        <p className={styles.popularName}>요새 HOT한 카테고리😍</p>
        <p className={styles.category}>#흑백요리사</p>
        <div className={styles.category}></div>
      </div>
      <div className={styles.recipeListStyle}>
        {recipes.map((recipe: Recipe) => (
          <Link href={`/detail/${recipe.id}`} key={recipe.id}>
            <div className={styles.recipeItemStyle}>
              <h3>{recipe.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
