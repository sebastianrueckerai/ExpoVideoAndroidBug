import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
// import { useFeedContext } from "../context/feed/feed.context";

const VideoCard = () => {
  const video = useRef<VideoView>(null);
  const videoUrl = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
  const player = useVideoPlayer(videoUrl, (player) => {
    player.loop = true;
  });

  return (
    <VideoView
      ref={video}
      style={styles.video}
      player={player}
      nativeControls
    ></VideoView>
  );
};
const styles = StyleSheet.create({
  video: {
    flex: 1,
    alignSelf: "stretch",
  },
});

export default VideoCard;
