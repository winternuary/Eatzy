"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { recipes, Recipe } from "@/data/data";
import { MZdata } from "@/data/MZdata";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./style.css";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (typeof query === "string") {
      const lowercasedQuery = query.toLowerCase();
      const searchResults = [
        ...recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(lowercasedQuery),
        ),
        ...MZdata.filter((recipe) =>
          recipe.name.toLowerCase().includes(lowercasedQuery),
        ),
      ];
      setFilteredRecipes(searchResults);
    }
  }, [query]);

  if (filteredRecipes.length === 0) {
    return <div>검색 결과가 없습니다.</div>;
  }

  return (
    <div className={styles.searchResults}>
      {filteredRecipes.map((recipe: Recipe) => (
        <Link href={`/detail/${recipe.id}`} key={recipe.id}>
          <div className={styles.recipeItemStyle}>
            <Image
              className={styles.image}
              src={recipe.imageUrl}
              alt={recipe.name}
              width={120}
              height={120}
            />
            <h3>{recipe.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchPage;
