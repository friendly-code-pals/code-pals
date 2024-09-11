import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for the app directory
import Link from 'next/link';

const BreadcrumbTrail = () => {
  const [pathnames, setPathnames] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.split('/').filter((x) => x);
      setPathnames(path);
    }
  }, [router]);

  return (
    <nav aria-label="breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <li key={to}>
              {value}
            </li>
          ) : (
            <li key={to}>
              <Link href={to}>{value}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadcrumbTrail;
 