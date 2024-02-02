import { useState, useEffect } from 'react'
import './Menu.css'
import FoodCard from '../FoodCard/FoodCard'
import useAPIServices from '../service/APIService'
import Spiner from '../assets/Spinner.svg'
import Error from '../assets/error.jpg'

const counrtyTabs = ['russian', 'japanese', 'american', 'italian', 'french', 'british'];

export default function Menu() {
    const [activeTab, setActiveTab] = useState(0);
    const [menu, setMenu] = useState({});
    const { loading, error, getMeals } = useAPIServices();

    useEffect(() => {
        onTabChange(counrtyTabs[activeTab]);
    }, [activeTab])

    function onTabChange(conrty) {
        if (!menu[conrty]) {
            getMeals(conrty)
                .then(res => {
                    setMenu(prevMenu => {
                        const newMenu = { ...prevMenu };
                        newMenu[conrty] = res.filter((e, i) => (+i < 10));
                        return newMenu
                    })
                })
        }
    }

    return (
        <div className='menu'>
            <div className='country-tabs'>
                {counrtyTabs.map((e, i) => {
                    let className = 'country-tab';
                    if (activeTab == i) {
                        className += ' active';
                    }
                    return (
                        <div onClick={() => setActiveTab(i)} className={className} key={i}>
                            <img src={"/src/assets/" + e + '.jpg'} alt={e} className='flag' />
                        </div>
                    )
                })}
            </div>
            {loading && <img src={Spiner} height='200px'></img>}
            {error && <img src={Error} height='300px' width='300px' display='block' margin='auto'></img>}
            {menu[counrtyTabs[activeTab]]?.map((e, i) => {
                return <FoodCard data={e} key={e.id} animationDelay={i / 5 + 0.3 + 's'} />
            })}
        </div>
    )
}
