import styles from './app.module.css';
import { useEffect, useState, useCallback } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import { Link } from 'react-router-dom';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
    setSelectedVideo(null);
  };

  //
  const main = useCallback(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
    setSelectedVideo(null);
  }, [youtube]);

  //
  useEffect(() => {
    main();
  }, []);

  return (
    <div className={styles.app}>
      <Link to='/'>
        <SearchHeader onSearch={search} onMain={main} />
      </Link>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}
export default App;
