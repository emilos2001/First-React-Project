import {createRoot} from "react-dom/client";
import {HeaderApp} from "./TravelJournal/header.jsx";
 import {App, Challenge, NinjaTurtle} from './index.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <HeaderApp/>
        {/*<App/>*/}
        {/*<Challenge/>*/}
        {/*<Jokes/>*/}
        {/*{<NinjaTurtle/>}*/}
    </>
)