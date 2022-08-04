import React, { useEffect } from 'react';
import DrinkItem from '../DrinkItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_DRINKS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_DRINKS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function DrinkList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_DRINKS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_DRINKS,
        drinks: data.drinks,
      });
      data.drinks.forEach((drink) => {
        idbPromise('drinks', 'put', drink);
      });
    } else if (!loading) {
      idbPromise('drinks', 'get').then((drinks) => {
        dispatch({
          type: UPDATE_DRINKS,
          drinks: drinks,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterDrinks() {
    if (!currentCategory) {
      return state.drinks;
    }

    return state.drinks.filter(
      (drink) => drink.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Drinks:</h2>
      {state.drinks.length ? (
        <div className="flex-row">
          {filterDrinks().map((drink) => (
            <DrinkItem
              key={drink._id}
              _id={drink._id}
              image={drink.image}
              name={drink.name}
              price={drink.price}
              quantity={drink.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any drinks yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default DrinkList;
