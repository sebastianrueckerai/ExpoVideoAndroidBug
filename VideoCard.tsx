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
      style={styles.videoThumb}
      player={player}
      contentFit={"cover"}
      nativeControls
    ></VideoView>
  );
};
const styles = StyleSheet.create({
  videoThumb: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default VideoCard;
