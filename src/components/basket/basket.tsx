import style from './Basket.module.css'
import Header from '../header/header';
import { RootState } from '../../redux/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import BasketNoneProduct from './BasketNoneProduct';
import BasketProduct from './BasketProduct';


const Basket: FC = () => {
  const BasketPizzaSlice = useSelector((state: RootState) => state.BasketPizza.BasketPizza)
  
    return (
      <div id='Basket' className={style.Basket}>
        <Header />
        {
          BasketPizzaSlice.length > 0 ? <BasketProduct/>: <BasketNoneProduct/>
        }
      </div>
    );
  }
  
export default Basket;