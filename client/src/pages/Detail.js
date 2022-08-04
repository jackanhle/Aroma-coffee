import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from './Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_DRINKS,
} from '../utils/actions';
import { QUERY_DRINKS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import { Button } from 'react-bootstrap';
function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentDrink, setCurrentDrink] = useState({});

  const { loading, data } = useQuery(QUERY_DRINKS);

  const { drinks, cart } = state;

  useEffect(() => {
    
    
    if (drinks.length) {
      setCurrentDrink(drinks.find((drink) => drink._id === id));
    }
    
    
    else if (data) {
      dispatch({
        type: UPDATE_DRINKS,
        drinks: data.drinks,
      });

      data.drinks.forEach((drink) => {
        idbPromise('drinks', 'put', drink);
      });
    }
   
    
    else if (!loading) {
      idbPromise('drinks', 'get').then((indexedDrinks) => {
        dispatch({
          type: UPDATE_DRINKS,
          drinks: indexedDrinks,
        });
      });
    }
  }, [drinks, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        drink: { ...currentDrink, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentDrink, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentDrink._id,
    });

    idbPromise('cart', 'delete', { ...currentDrink });
  };

  return (
    <>
      {currentDrink && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Drinks</Link>

          <h2>{currentDrink.name}</h2>

          <p>{currentDrink.description}</p>

          <p>
            <strong>Price:</strong>${currentDrink.price}{' '}
            <Button type='button' variant='dark' onClick={addToCart}>Add to Cart</Button>
            <Button
              disabled={!cart.find((p) => p._id === currentDrink._id)}
              onClick={removeFromCart}
              type='button'
              variant='dark'
            >
              Remove from Cart
            </Button>
          </p>

          <img
            src={`/images/${currentDrink.image}`}
            alt={currentDrink.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
