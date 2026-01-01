import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tuomo Kankaanpää - I build Trust for Dev Tool Companies';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px 24px',
              marginBottom: '40px',
              backgroundColor: 'rgba(0, 217, 102, 0.1)',
              border: '1px solid rgba(0, 217, 102, 0.2)',
              borderRadius: '9999px',
              fontSize: '18px',
              color: '#00D966',
              fontWeight: 500,
            }}
          >
            Ghostwriting for Dev Tool Companies
          </div>

          {/* Main Heading */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '32px',
              letterSpacing: '-0.025em',
              color: '#ffffff',
            }}
          >
            I build{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #00D966, #34d399, #9333EA)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trust
            </span>{' '}
            for Dev Tool Companies.
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: '28px',
              lineHeight: 1.6,
              color: '#a1a1aa',
              maxWidth: '900px',
              marginTop: '0',
            }}
          >
            I help dev tool companies bridge the gap between complex features and user adoption while building authority and capturing more leads.
          </p>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(0, 217, 102, 0.2))',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0, 217, 102, 0.2), rgba(147, 51, 234, 0.2))',
            filter: 'blur(40px)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

