import styles from './app.module.css';
import { useEffect, useState } from 'react';
import VideoList from './components/video_list/video_list';
import { YOUTUBE_API_KEY } from './service/youtube.js';
import SearchHeader from './components/search_header/search_header';
function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&type=video&key=` +
        YOUTUBE_API_KEY,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=' +
        YOUTUBE_API_KEY,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))

      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}
export default App;
