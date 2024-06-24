import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface MovieDetailProp {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: MovieDetailProp) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
//동적 메타데이터

export default async function MovieDetail({ params: { id } }: MovieDetailProp) {
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  //Promise.all() : parallel requests

  // <Suspense>는 독립적으로 로딩상태를 관리, 각 컴포넌트가 로드되는 동안 특정 로딩 메시지 표시(fallback)
  // ⭐️차단 방지: 데이터 페칭이 느린 컴포넌트가 다른 컴포넌트의 렌더링을 차단하지 않도록 합니다.
  // <Suspense>없이도 각 컴포넌트는 데이터페칭을 병렬적으로 동시에 시작하지만, 각 로딩상태에 따라서 <Suspense>없이는 각 컴포넌트의 로딩상태에 따라서 다른 컴포넌트의 렌더링을 차단한다
  // 이를 방지하기 위해서 <Suspense>를 사용하는것(차단방지기능)

  return (
    <div>
      <Suspense fallback={<p>Loading MovieInfo...</p>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<p>Loading MovieVideo...</p>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
