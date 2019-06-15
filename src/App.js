import React from 'react';
import { useCampaigns } from './hooks/use-campaigns';
// import { CampaignsTable } from './components/campaigns-table';
import { CampaignsList } from './components/campaigns-list';
import { NewCampaignForm } from './components/new-campaign-form';
import './App.css';

function App() {
  const campaigns = useCampaigns();

  return (
    <div className="App">
      <header style={{ margin: '3em 0', textAlign: 'center' }}>
        <h1>Moshav Mevo Modi'im</h1>
        <h3>
          A collection of links to fund raising campaigns that were created to help our Moshav friends in their tragedy.
          Please use these links to donate.
        </h3>
      </header>
      <CampaignsList campaigns={campaigns} />
      <NewCampaignForm />
    </div>
  );
}

export default App;
