import globe from '../assets/globe.png'
import {Component} from "./component.jsx";
import Data from "./Data.js";
import './index.css'

export function HeaderApp() {

    const entryMap = Data.map(data => {
        return (
            <Component
                key={data.id}
                {...data}
            />
        )
    })
    return (
        <>
            <header className='header'>
                <img className='globe' src={globe} alt="globe journal"/>
                <span>my travel journal</span>
            </header>
            <>
                {entryMap}
            </>

        </>
    );
}