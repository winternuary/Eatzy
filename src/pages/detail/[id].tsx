import { useRouter } from "next/router";
import { recipes, Recipe } from "@/data/data";

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipe = recipes.find((r: Recipe) => r.id === Number(id));

  if (!recipe) {
    return <div>레시피를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{recipe.name}</h1>
      <h3>재료:</h3>
      <p>{recipe.ingredient}</p>
      <h3>만드는 방법:</h3>
      <p>{recipe.way}</p>
    </div>
  );
};

export default RecipeDetail;
