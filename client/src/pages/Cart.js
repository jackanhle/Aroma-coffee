import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../utils/actions';
import { Row, Col, Container, Button, } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

 
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

 
  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, drinks: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);


  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }


  function submitCheckout() {
    const drinkIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        drinkIds.push(item._id);
      }
    });

    getCheckout({
      variables: { drinks: drinkIds },
    });
  }


  return (
    <Container>
    <h1 className='mb-4 text-center'>Cart</h1>
      <Row>
        <Col>
          
          
            {state.cart.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          
        </Col>
        <Col>
          
            <h2 className='mt-4'>Total : ${calculateTotal()}</h2>
            {Auth.loggedIn() ?
              <Button type="submit" variant='secondary' size='lg' onClick={submitCheckout}>Checkout
                      </Button>
              :
             <Button href="/login" variant='dark' type='submit'>Login to checkout</Button>
            }
         

        </Col>
      </Row>

    </Container>
    
  );
};

export default Cart;
