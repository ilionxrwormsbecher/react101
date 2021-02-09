import { Dispatch, SetStateAction, useEffect } from 'react';
import cities from '../../assets/data/bootcamps.json'
import { ICity } from '../../models/ICity';


interface SidebarComponentProps {
    selectCityHandler: Dispatch<SetStateAction<ICity>>;
    currentSelectedCity: ICity;
}

export const SidebarComponent = (props: SidebarComponentProps) => {

    useEffect(() => {
        props.selectCityHandler(cities.bootcampCities[0]);
    }, [])


    const cityList = cities.bootcampCities.map((city: ICity) => {
        let activeClass = props.currentSelectedCity.id === city.id ? 'active-city' : '';
        return <li onClick={() => props.selectCityHandler(city)} className={activeClass}>{city.cityName}</li>
    })


    console.log('cikties', cityList);

    return (
        <div className="sidebar">
            <ul>
                {cityList}
            </ul>
        </div>
    )
}
