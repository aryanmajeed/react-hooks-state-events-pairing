import video from "../data/video.js";
import VideoInfos from "./VideoInfos.js";
import CommentList from "./CommentList.js";
import Video from './Video'

function App() {


  return (
    <div className="App">
      <Video embedUrl={video.embedUrl} />
      <VideoInfos title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <hr
        style={{
          color: "gray",
          backgroundColor: "gray",
          height: 3,
          margin: "3em "
        }}
      />
      <CommentList comments={video.comments} />
    </div>
  );
}

export default App;
