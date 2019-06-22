import React from 'react';
import { useCampaigns } from './hooks/use-campaigns';
import { MainPage } from './components/main-page';
import { CampaignsList } from './components/campaigns-list';
import { NewCampaignForm } from './components/new-campaign-form';
import { Header } from './components/header';
import styles from './App.module.css';

function App() {
  const campaigns = useCampaigns();

  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
      <CampaignsList campaigns={campaigns} />
      <NewCampaignForm />
    </div>
  );
}

export default App;
