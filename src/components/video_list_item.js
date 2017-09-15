import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//VidoelistItem now has access to onVidoeSelect which originate from App 
	//then pass down to video_list then pass to video_list_item.js
 	const imageUrl = video.snippet.thumbnails.default.url;

	return (
	//the below video props is the same from up above. 
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
		 <div className="video-list media">
		  <div className="media-left">
		   <img className="media-object" src={imageUrl} />
		  </div>
		  
		  <div className="media-body">
		   <div className="media-heading">{video.snippet.title}</div>
		  </div>
		 </div> 
		</li>
	);

};

export default VideoListItem;
