import collin from "../images/collin.jpg";
import chris from "../images/chris.jpg";
import cheyenne from "../images/cheyenne.jpg";
import tessa from "../images/tessa.jpg";
import cami from "../images/cami.jpg";
import danny from "../images/danny.jpg";


export default function Players() {
    return (
        <div>
            <h1>Players</h1>

            <div className="players">
                <div className="player">
                    <img src={danny}/><h3>Danny Cuahizo</h3>
                </div>
                <div className="player">
                    <img src={cami}/><h3>Camila Garbiras</h3>
                </div>
                <div className="player">
                    <img src={tessa}/><h3>Tessa Griffin</h3>
                </div>
                <div className="player">
                    <img src={cheyenne}/><h3>Cheyenne Mercier</h3>
                </div>
                <div className="player">
                    <img src={chris}/><h3>Chris Merz</h3>
                </div>
                <div className="player">
                    <img src={collin}/><h3>Collin Statz</h3>
                </div>
                
            </div>
        </div>
    )
};
