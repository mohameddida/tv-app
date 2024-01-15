import axios from 'axios';
import {useEffect, useMemo, useState} from 'react';

const fetchMP4Url = async youTubeId => {
  try {
    const {status, data} = await axios.get(
      `https://yt2html5.com/?id=${youTubeId}`,
    );
    if (status !== 200) {
      return null;
    }

    const formats = data?.data?.player_response?.streamingData?.formats || [];

    const video = (formats || [])
      .filter(item => item.height <= 1080)
      .sort((a, b) => b.height - a.height)
      .shift();

    return video?.url || null;
  } catch {
    return null;
  }
};

export const useYouTubeMP4 = youTubeId => {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetchMP4Url(youTubeId)
      .then(setUrl)
      .finally(() => setLoading(false));
  }, [setUrl, youTubeId]);

  return useMemo(() => ({url, loading}), [url, loading]);
};
