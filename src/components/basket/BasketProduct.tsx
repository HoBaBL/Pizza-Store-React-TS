import style from './Basket.module.css'
import { RootState } from '../../redux/store';
import { FC} from 'react';
import { useSelector } from 'react-redux';
import { RxCross2 } from "react-icons/rx";
import BasketSum from './BasketSum';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useAppDispatch } from '../../hooks';
import { deletePizza } from '../../redux/slice/basketPizza';
import { PlusPizza } from '../../redux/slice/basketPizza';
import { MinusPizza } from '../../redux/slice/basketPizza';


const BasketProduct: FC = () => {
    const BasketPizzaSlice = useSelector((state: RootState) => state.BasketPizza.BasketPizza)
    const dispatch = useAppDispatch()

    function deletePazzaCart(pizza:{id:string,type:string,size:number}) {
        dispatch(deletePizza(pizza))
    }

    function PlusPizzaCart(pizza:{id:string,type:string,size:number}) {
        dispatch(PlusPizza(pizza))
    }

    function MinusPizzaCart(pizza:{id:string,type:string,size:number}) {
        dispatch(MinusPizza(pizza))
    }
    
      return (
        <div className={style.BasketProduct}>
            <h2>Корзина</h2>
            <div className={style.flex}>
                <div className={style.width}>
                    {
                        BasketPizzaSlice.length > 0 &&(
                            BasketPizzaSlice.map(pizza => 
                            <div key={pizza.id} className={style.cart}>
                                <div className={style.cross}>
                                    <button onClick={() => deletePazzaCart(pizza) } className={style.crossBtn}><RxCross2 size={22} className={style.crossBtnCross}/></button>
                                </div>
                                <div className={style.pizzaCart}>
                                    <div className={style.pizzaPosition}>
                                        <img className={style.img} src={pizza.imgCart} alt={pizza.titleBasket} />
                                        <div className={style.textCart}>
                                            <p className={style.title}>{pizza.titleBasket}</p>
                                            <p className={style.text}>{pizza.textBasket}</p>
                                            <p className={style.text}>{pizza.type} {pizza.size} см</p>
                                            <div className={style.counter}>
                                                <button onClick={() => MinusPizzaCart(pizza)} className={style.minus}><FaMinus size={18}/></button>
                                                <p>{pizza.count}</p>
                                                <button onClick={() => PlusPizzaCart(pizza)} className={style.plus}><FaPlus size={18}/></button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={style.price}>{pizza.priceBasket * pizza.count} ₽</p>
                                </div>
                                
                            </div>
                            )
                        )
                    }
                </div>


                <BasketSum/>


            </div>
            
        </div>
      );
    }
    
  export default BasketProduct;