import { useEffect, useState } from 'react';
import { http } from '../services/http';

export const useSearchArtist = (str: string): string[] => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!str) {
      return setData([]);
    }
    (async function() {
      const response = await http.post(
        JSON.stringify({
          query: `{getArtists(term: "${str}"){artists}}`
        })
      );
      setData(response.data.data.getArtists.artists);
    })();
  }, [str]);

  return data;
};
