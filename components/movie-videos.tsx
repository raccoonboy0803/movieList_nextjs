import styles from '../styles/movie_video.module.css';

const API_URL = process.env.API_URL;

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('something broke...');
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.slice(0, 4).map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
