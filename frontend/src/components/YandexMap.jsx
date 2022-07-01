import { Map, YMaps } from "react-yandex-maps";

export default function YandexMap() {
    return (
        <YMaps>
            <div className='main-modal is-flex is-justify-content-center is-align-items-center'>
                <div className="box">
                    <Map defaultState={{
                        center: [39.768083, 64.455577], zoom: 10
                    }} />
                </div>
            </div>
        </YMaps>
    )
}