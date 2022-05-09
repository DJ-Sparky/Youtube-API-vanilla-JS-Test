console.log('YT-API JS test');

fetch(
  'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCviavFHGYcSlJsjNK485uuQ&key=AIzaSyAQwNqMpMmb8lsBfv_6NdIoJmVE9DpSYVc'
)
  .then((result) => {
    return result.json();
  })

  .then((data) => {
    console.log(data);
    let videos = data.items;
    let videoContainer = document.querySelector('.youtube-container');
    for (video of videos) {
      // console.log(video.snippet.title);

      videoContainer.innerHTML += `<img src='${video.snippet.thumbnails.default.url}'></img> `;
    }
  });
