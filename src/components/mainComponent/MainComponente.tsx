import React from 'react'
import { ICity } from '../../models/ICity'


interface IMainComponenteProps {
    selectedCityObject: ICity;
}

export const MainComponente = (props: IMainComponenteProps) => {

    let cityDetails = null;
    if (Object.keys(props.selectedCityObject).length > 0) {
        cityDetails = (
            <React.Fragment>
                <h3>{props.selectedCityObject.cityName}</h3>
                <img src={`/images/${props.selectedCityObject.image.toLowerCase()}`} alt={props.selectedCityObject.cityName} />
                <p>{props.selectedCityObject.summary}</p>
            </React.Fragment>
        )
    }

    return (
        <div className="main col-8">
            {cityDetails}
        </div>
    )
}
