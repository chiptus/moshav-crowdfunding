import { useState, useEffect } from 'react';
import axios from 'axios';

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    (async function loadData() {
      const response = await axios.get('https://api.sheety.co/09f355f8-4bd2-4240-a82b-998c39bd3f40');
      setCampaigns(response.data);
    })();
  }, []);

  return campaigns;
}
