import { useRouter } from "next/router";
import { useState } from "react";
import { recipes, Recipe } from "@/data/data";
import { MZdata } from "@/data/MZdata";
import Image from "next/image";
import * as styles from "./styles.css";

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isFavorited, setIsFavorited] = useState(false); // 즐겨찾기 상태 관리

  const recipe =
    recipes.find((r: Recipe) => r.id === Number(id)) ||
    MZdata.find((r) => r.id === Number(id));

  if (!recipe) {
    return <div>레시피를 찾을 수 없습니다.</div>;
  }

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <div className={styles.header}>
        <p className={styles.Logo}>Eatzy</p>
        <button onClick={() => router.back()} className={styles.backButton}>
          뒤로가기
        </button>
      </div>
      <div className={styles.detailBox}>
        <Image
          className={styles.image}
          src={recipe.imageUrl}
          alt=""
          width={300}
          height={300}
        />
        <div className={styles.nameBox}>
          <p className={styles.name}>{recipe.name}</p>
          <div className={styles.favoriteContainer}>
            <span className={styles.favoriteIcon} onClick={toggleFavorite}>
              {isFavorited ? "❤️" : "🤍"}
            </span>
          </div>
        </div>
        <p className={styles.ingredientText}>재료</p>
        <p className={styles.ingredient}>{recipe.ingredient}</p>
        <p className={styles.recipe}>만드는 방법:</p>
        <div>
          {recipe.way.map((step, index) => (
            <p className={styles.way} key={index}>
              {step}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
