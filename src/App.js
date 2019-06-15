import React from 'react';
import { useCampaigns } from './hooks/use-campaigns';
// import { CampaignsTable } from './components/campaigns-table';
import { MainPage } from './components/main-page';
import { CampaignsList } from './components/campaigns-list';
import { NewCampaignForm } from './components/new-campaign-form';
import './App.css';

function App() {
  const campaigns = useCampaigns();

  return (
    <div className="App">
      <MainPage />
      <CampaignsList campaigns={campaigns} />
      <NewCampaignForm />
    </div>
  );
}

export default App;
