import { useSelector } from 'react-redux';
import style from './MenuPizza.module.css'
import { FC, useEffect, useState, Dispatch } from 'react';
import { RootState } from '../../redux/store';
import { useAppDispatch } from '../../hooks';
import { addCartPizza } from '../../redux/slice/basketPizza';
import Skeleton from './Skeleton';


const MenuPizza: FC = () => {
  const [menuType, setMenuTipy] = useState(['Традиционное', 'Тонкое'])
  const [size, setSize] = useState([25, 30, 35])
  const BasketPizzaSlice = useSelector((state: RootState) => state.BasketPizza.BasketPizza)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [menu, setMenu] = useState<{
  id: string;
  title: string;
  imagesPizza: string;
  text: string;
  price: number[];
  tipy: string;
  size: number;
  weight:number[];
}[]>([])

  const SearchRedux = useSelector((state: RootState) => state.SearchRedux.SearchRedux)

  useEffect(() => {
    const search = SearchRedux ?  `&search=${SearchRedux}` : ''

    fetch(`https://658179f63dfdd1b11c435f88.mockapi.io/PizzaStore/pizza?${search}`)
    .then((res) => {
        return res.json();
    })
    .then((arr) => {
      setMenu(arr)
      setIsLoading(false)
    })
}, [SearchRedux])

  function AddBasket(title: string, text: string, price:number[], img: string, id: string, type: string, sizeItem:number) {
    let priceReal = 0 
    if (sizeItem === 25) {
      priceReal = price[0]
    } else if (sizeItem === 30) {
      priceReal = price[1]
    } else if (sizeItem === 35) {
      priceReal = price[2]
    }

    const BasketPizza = {
      id: id+type+sizeItem,
      imgCart: img,
      titleBasket: title,
      textBasket: text,
      priceBasket: priceReal,
      count: 1,
      type: type,
      size: sizeItem
    }
    dispatch(addCartPizza(BasketPizza))
  }

  function RenderTypePizza(type:string, id:string) {
    let copyType = [...menu]
    copyType.find(o => {
      if (o.id === id) {
        o.tipy = type
      }
    })
    setMenu(copyType)
    console.log(menu)
  }

  function RenderSizePizza(sizeItem:number, id:string) {
    let copyType = [...menu]
    copyType.find(o => {
      if (o.id === id) {
        o.size = sizeItem
      }
    })
    setMenu(copyType)
    console.log(menu)
  }

  console.log(BasketPizzaSlice)

    return (
      <div className={style.MenuPizza}>
          {
            isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) :
            menu.length > 0 &&(
              menu.map(pizza =>  
                  <div className={style.pizza} key={pizza.id}>
                    <img src={pizza.imagesPizza} alt={pizza.title} className={style.img}/>
                    <p className={style.title}>{pizza.title}</p>
                    <p className={style.text}>{pizza.text}</p>
                    <p className={style.weight}>{pizza.size === 30 ? pizza.weight[1]: pizza.size === 25 ? pizza.weight[0]: pizza.weight[2]} г</p>
                    <div className={style.typeDisplay}>
                      <ul className={style.pizzaUl}>
                        {
                          menuType.map(type => 
                            <li onClick={() => {RenderTypePizza(type, pizza.id)}} key={type} className={pizza.tipy === type ?style.pizzaLiActive:style.pizzaLi }>{type}</li>
                          )
                        }
                      </ul>
                      <ul className={style.pizzaUl}>
                        {
                          size.map(sizeItem =>
                            <li onClick={() => {RenderSizePizza(sizeItem, pizza.id)}} key={sizeItem} className={pizza.size === sizeItem ?style.pizzaLiActive:style.pizzaLi }>{sizeItem} см</li>
                            )
                        }
                      </ul>
                    </div>
                    <div className={style.footer}>
                      <p className={style.price}>{pizza.size === 30 ? pizza.price[1]: pizza.size === 25 ? pizza.price[0]: pizza.price[2]} ₽</p>
                      <button className={style.button} onClick={() => {AddBasket(pizza.title, pizza.text, pizza.price, pizza.imagesPizza, pizza.id, pizza.tipy, pizza.size)}}>Выбрать</button>
                    </div>
                  </div>
                )
            )
          }
      </div>
    )
}
  
export default MenuPizza;
