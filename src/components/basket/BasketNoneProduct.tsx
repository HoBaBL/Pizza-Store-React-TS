import style from './Basket.module.css'
import { FC } from 'react';

const BasketNoneProduct: FC = () => {
    
      return (
        <div className={style.BasketNoneProduct}>
            <div className={style.obj}>
                <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="NoneProduct" />
                <p className={style.NoneProductTitle}>Ой, пусто!</p>
                <p className={style.NoneProductText}>
                    Ваша корзина пуста, откройте «Меню»
                    и выберите понравившийся товар.
                    Мы доставим ваш заказ от 549 ₽
                </p>
            </div>
            
        </div>
      );
    }
    
  export default BasketNoneProduct;