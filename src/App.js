import React from 'react';
import { useCampaigns } from './hooks/use-campaigns';
// import { CampaignsTable } from './components/campaigns-table';
import { MainPage } from './components/main-page';
import { CampaignsList } from './components/campaigns-list';
import { NewCampaignForm } from './components/new-campaign-form';
import styles from './App.module.css';

function App() {
  const campaigns = useCampaigns();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Moshav Mevo Modi'im</h1>
        <div className={styles.headerButtons}>
          {/* <a href="/about" className={styles.aboutButton}>
            ABOUT
          </a> */}
          <a href="#submit" className={styles.submitButton}>
            + SUBMIT A CAMPAIGN
          </a>
        </div>
      </header>
      <MainPage />
      <CampaignsList campaigns={campaigns} />
      <NewCampaignForm />
    </div>
  );
}

export default App;
