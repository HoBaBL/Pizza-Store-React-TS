import style from './Basket.module.css'
import { RootState } from '../../redux/store';
import { FC} from 'react';
import { useSelector } from 'react-redux';

const BasketSum: FC = () => {
    const BasketPizzaSlice = useSelector((state: RootState) => state.BasketPizza.BasketPizza)

    let sumCart = 0;

    BasketPizzaSlice.forEach(v => sumCart += v.priceBasket * v.count)

      return (
        <div className={style.allSum}>
                    <div className={style.position}>
                        <div className={style.flexSum}>
                            <p className={style.allSumText}>Итог</p>
                            <p className={style.price}>{sumCart} ₽</p>
                        </div>
                        <div className={style.line}></div>
                        {
                            BasketPizzaSlice.length > 0 &&(
                                BasketPizzaSlice.map(pizza =>
                                    <div className={style.flexSum} key={pizza.id}>
                                        <p>{pizza.titleBasket} x{pizza.count}</p>
                                        <p className={style.priceMini}>{pizza.priceBasket * pizza.count} ₽</p>
                                    </div>
                                    )
                            )
                        }
                    </div>
                    <div className={style.center}>
                        <button className={style.buy}>Оформить</button>
                    </div>
                    
        </div>
      );
    }
    
  export default BasketSum;