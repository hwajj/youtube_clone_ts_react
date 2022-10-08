import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';
import { Video } from '../../video';

const VideoList: React.FC<{
  videos: Array<Video>;
  onVideoClick: (video: Video) => void;
  display: string;
}> = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => {
        //        console.log(video);
        return (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={props.onVideoClick.bind(video)}
            display={props.display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
