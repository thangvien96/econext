'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

export default function RouteProgress() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    // 👇 Đợi frame tiếp theo sau khi route thay đổi & render xong
    const doneTimeout = requestAnimationFrame(() => {
      NProgress.done();
    });

    return () => cancelAnimationFrame(doneTimeout);
  }, [pathname]);

  return null;
}
