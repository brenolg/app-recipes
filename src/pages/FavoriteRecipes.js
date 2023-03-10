import Header from '../components/Header';
import FavoriteRecipesBody from '../components/FavoriteRecipesBody';

function FavoriteRecipes() {
  return (
    <div>
      <Header
        pageTitle="Favorite Recipes"
        searchSymbol={ false }
      >
        Favorite Recipes

      </Header>
      <FavoriteRecipesBody />
    </div>
  );
}

export default FavoriteRecipes;
