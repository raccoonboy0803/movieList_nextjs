'use client';

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: MovieProps) {
  const router = useRouter();
  const linkToDetail = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={linkToDetail} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
