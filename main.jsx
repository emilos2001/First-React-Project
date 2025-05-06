import {createRoot} from "react-dom/client"
import {HeaderApp} from "./TravelJournal/header.jsx";

const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <HeaderApp/>
    </>
)
