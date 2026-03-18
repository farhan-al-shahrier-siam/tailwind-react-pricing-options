import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PricingOptions from "./components/PricingOptions/PricingOptions";
import ResultChart from "./components/ResultsChart/ResultChart";
import axios from "axios";
import MarksChart from "./components/MarksChart/MarksChart";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());
// axios related kaj karbar
const marksPromise = axios.get("marksData.json");

function App() {
    return (
        <>
            <header>
                <NavBar></NavBar>
                {/* <DaisyNav></DaisyNav> */}
            </header>
            <main>
                <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
                    <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
                </Suspense>

                <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
                    <MarksChart marksPromise={marksPromise}></MarksChart>
                </Suspense>

                <ResultChart></ResultChart>
            </main>
            <footer></footer>
        </>
    );
}

export default App;
