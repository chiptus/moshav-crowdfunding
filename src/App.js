import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CampaignsTable } from './components/campaigns-table';
import { NewCampaignForm } from './components/new-campaign-form';
import './App.css';

function App() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const response = await axios.get('https://api.sheety.co/09f355f8-4bd2-4240-a82b-998c39bd3f40');
      setCampaigns(response.data);
    })();
  }, []);

  return (
    <div className="App">
      <header style={{ margin: '3em 0', textAlign: 'center' }}>
        <h1>Moshav Mevo Modi'im</h1>
        <h3>
          A collection of links to fund raising campaigns that were created to help our Moshav friends in their tragedy.
          Please use these links to donate.
        </h3>
      </header>
      <CampaignsTable campaigns={campaigns} />
      <NewCampaignForm />
    </div>
  );
}

export default App;
