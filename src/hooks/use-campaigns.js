import { useState, useEffect } from 'react';
import axios from 'axios';

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const { data } = await axios.get('https://api.sheety.co/09f355f8-4bd2-4240-a82b-998c39bd3f40');
      setCampaigns(
        data
          .filter(c => c.url)
          .map(c => ({ ...c, amountCollected: safeAmount(c.amountCollected), active: c.active === null || c.active }))
          .sort((a, b) => {
            if (a.featured) {
              return -1;
            }
            if ((!a.active && b.active) || (!a.amountCollected && b.amountCollected)) {
              return 1;
            }
            if ((a.active && !b.active) || (a.amountCollected && !b.amountCollected)) {
              return -1;
            }
            return a.amountCollected - b.amountCollected;
          })
      );
    })();
  }, []);

  return campaigns;
}

function safeAmount(amount) {
  if (!amount || amount === '--') {
    return 0;
  }
  if (Number.isFinite(amount)) {
    return amount;
  }
  return +amount.replace(',', '');
}
