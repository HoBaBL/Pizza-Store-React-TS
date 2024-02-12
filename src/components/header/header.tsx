import style from './header.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FC } from 'react';
import { setSearch } from '../../redux/slice/search';
import { useAppDispatch } from '../../hooks';


const Header: FC = () => {
  const Pizzalogo = require('../../images/pizalogo.png')
  const BasketPizzaSlice = useSelector((state: RootState) => state.BasketPizza.BasketPizza)
  let sum = 0
  const dispatch = useAppDispatch()

  BasketPizzaSlice.forEach(o => {
    sum += o.count
  })

  return (
    <div className={style.Header}>
      <div className={style.logoPosition}>
        <Link to={`/`}>
          <img src={Pizzalogo} alt="logo" className={style.logo}/>
        </Link>
        <div className={style.searchPosition}>
          <BsSearch size={20}/>
          <input className={style.search} type="text" placeholder='Найти пиццу' onChange={event => dispatch(setSearch(event.target.value))} />
        </div>
      </div>
      <Link to={`/basket`} className={style.basket}>
        <p>Корзина</p>
        <div className={style.line}></div>
        <p>{sum}</p>
      </Link>
    </div>
  );
}

export default Header;