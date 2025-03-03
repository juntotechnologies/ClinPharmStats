"use client";

import { useState, useEffect } from "react";

export default function DebugPage() {
  const [info, setInfo] = useState({
    isClient: false,
    hostname: "",
    pathname: "",
    nextData: null as any,
    origin: "",
    protocol: "",
  });

  useEffect(() => {
    setInfo({
      isClient: true,
      hostname: window.location.hostname,
      pathname: window.location.pathname,
      nextData: (window as any).__NEXT_DATA__,
      origin: window.location.origin,
      protocol: window.location.protocol,
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Debug Information</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Environment Information</h2>
        <pre className="bg-white p-4 rounded overflow-x-auto">
          {JSON.stringify(
            {
              isClient: info.isClient,
              hostname: info.hostname,
              pathname: info.pathname,
              origin: info.origin,
              protocol: info.protocol,
            },
            null,
            2
          )}
        </pre>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Next.js Data</h2>
        <pre className="bg-white p-4 rounded overflow-x-auto">
          {info.nextData ? JSON.stringify(info.nextData, null, 2) : "Loading..."}
        </pre>
      </div>
    </div>
  );
} 