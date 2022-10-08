import styles from './app.module.css';
import { useEffect, useState, useCallback } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import { Link } from 'react-router-dom';
import { Video } from './video';

function App({ youtube }: { youtube: any }) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const selectVideo = (video: Video) => {
    setSelectedVideo(() => video);
  };

  const search = useCallback(
    async (query: HTMLInputElement | null) => {
      const q = (query as HTMLInputElement).value;
      let videos = await youtube.search(q);
      setVideos(videos);
      setSelectedVideo(null);
    },
    [youtube]
  );

  const main = useCallback(async () => {
    let videos = await youtube.mostPopular(); //
    setVideos(videos);
    setSelectedVideo(null);
  }, [youtube]);

  useEffect(() => {
    main();
  }, [main]);

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
