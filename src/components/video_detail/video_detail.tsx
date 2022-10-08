import React from 'react';
import styles from './video_detail.module.css';
import { Video } from '../../video';
const VideoDetail: React.FC<{ video: Video }> = (props) => (
  <section className={styles.detail}>
    <iframe
      title='video details'
      className={styles.video}
      id='ytplayer'
      width='100%'
      height='500px'
      src={`https://www.youtube.com/embed/${props.video.id}`}
      frameBorder='0'
      allowFullScreen
    ></iframe>

    <h2>{props.video.snippet.title}</h2>
    <h3>{props.video.snippet.channelTitle}</h3>
    <pre className={styles.description}>{props.video.snippet.description}</pre>
  </section>
);

export default VideoDetail;
