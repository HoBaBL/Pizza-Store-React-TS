import { FC, useState } from "react";
import style from './filter.module.css'


const Filter: FC = () => {
    const [filterActive, setFilterActive] = useState('По умолчанию')

    return (
        <div className={style.filter}>
            <p className={style.tilte}>Сортировать:</p>
            <ul className={style.ul}>
                <li onClick={() => setFilterActive('По умолчанию')} className={filterActive === 'По умолчанию' ? style.liActive : style.li}>По умолчанию</li>
                <li onClick={() => setFilterActive('По весу')} className={filterActive === 'По весу' ? style.liActive : style.li}>По весу</li>
                <li onClick={() => setFilterActive('По цене')} className={filterActive === 'По цене' ? style.liActive : style.li}>По цене</li>
            </ul>
        </div>
    )
}

export default Filter;