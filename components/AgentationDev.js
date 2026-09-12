'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const AgentationComponent = dynamic(
  () => import('agentation').then((mod) => mod.Agentation),
  { ssr: false }
);

export default function AgentationDev() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <AgentationComponent />;
}
