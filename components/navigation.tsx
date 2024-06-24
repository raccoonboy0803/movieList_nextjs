'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();
  //usePathname() : 현재 url의 path를 반환함
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="about-us">About</Link> {path === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
