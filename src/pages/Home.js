export default function Home() {
    return (
    <div className="home">
        <div className="home-info">
            <div className="rankings">
                <h1>Current Rank: 17</h1>
                <h1>Previous Rank: N/A</h1>
            </div>
            <div className="schedule-info">
                <div className="schedule-info-indiv">
                    <h1>Next Event:</h1>
                    <h2>Sept. 16</h2>
                </div>
                <div className="schedule-info-indiv">
                    <h1>Next Theme:</h1>
                    <h2><span style={{ color: 'red'}}>Red</span>, White & <span style={{ color:'blue'}}>Blue</span></h2>
                </div>
            </div>
        </div>
        
        

        
        <h2>Top Scorers This Week:</h2>
        <div className="top-scorers">
            <div className="game">
                <h2>Block Party</h2>
                <div className="weekly-top">
                    <h4>Cami: </h4>
                    <p>268</p>
                </div>
                <div className="weekly-top">
                    <h4>Danny: </h4>
                    <p>180</p>
                </div>
                <div className="weekly-top">
                    <h4>Tessa: </h4>
                    <p>166</p>
                </div>   
            </div>
            
            <div className="game">
                <h2>Top Contender</h2>
                <div className="weekly-top">
                    <h4>Cami: </h4>
                    <p>75</p>
                </div>
                <div className="weekly-top">
                    <h4>Danny: </h4>
                    <p>49</p>
                </div>
                <div className="weekly-top">
                    <h4>Tessa: </h4>
                    <p>31</p>
                </div>    
            </div>
            
            <div className="game">
                <h2>Game Name</h2>
                <div className="weekly-top">
                    <h4>Danny: </h4>
                    <p>46</p>
                </div>
                <div className="weekly-top">
                    <h4>Tessa: </h4>
                    <p>37</p>
                </div>
                <div className="weekly-top">
                    <h4>Cami: </h4>
                    <p>33</p>
                </div>
            </div>
        </div>
        
    </div>

    
    )
};