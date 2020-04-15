import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetGames() {
  const [data, setData] = useState({ data: [] });


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.the-odds-api.com/v3/odds/?sport=mma_mixed_martial_arts&region=us&apiKey=9dbb944b345fc3ffa3387e7745efde53',
      );
      setData(result.data);
    };
    fetchData();
  }, []);


  return (
    <div>
        <p>Upcoming Games</p>
      {data.data.map(item => (
        <div>
            {item.home_team === item.teams[0] && (
                <span><b>{item.teams[0]}</b> vs. {item.teams[1]}</span>
            )}
            {item.home_team === item.teams[1] && (
                <span>{item.teams[0]} vs. <b>{item.teams[1]}</b></span>
            )}
        </div>
      ))}
    </div>
  );
}

export default GetGames;