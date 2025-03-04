import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'ClinPharmStats - Biostatistics & Clinical Research Services'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #2D77E5, #074DAD)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <img
            src="https://clinpharmstats.com/logo.svg"
            alt="CPS Logo"
            width={120}
            height={120}
            style={{ marginRight: 40 }}
          />
          <h1
            style={{
              fontSize: 64,
              background: 'white',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
              fontFamily: 'Verdana',
            }}
          >
            ClinPharmStats
          </h1>
        </div>
        <h2
          style={{
            fontSize: 36,
            color: 'white',
            fontFamily: 'Verdana',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Expert Biostatistics & Clinical Research Services
        </h2>
      </div>
    ),
    {
      ...size,
    }
  )
} 