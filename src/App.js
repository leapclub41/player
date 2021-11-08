import React, { Suspense } from "react";

export default function App() {
  const HSL_URL =
    "http://wowzacontrol.com:1936/stream23/stream23/chunklist_w1044127673.m3u8";

  const HLS = React.lazy(() => import("react-hls-player"));
  return (
    <section className='App'>
      <div className='heading'>
        <h1>
          <span className='tag'>LIVE</span> STREAM
        </h1>
        <h3>Channel 1</h3>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <HLS
          src={HSL_URL}
          autoPlay={true}
          controls={true}
          className='palyer_styles'
          hlsConfig={{
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            lowLatencyMode: true,
          }}
        />
      </Suspense>
    </section>
  );
}
