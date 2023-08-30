/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  async redirects() {
    return [
      {
        source: '/page',
        destination: 'https://easyapply.vercel.app/',
        permanent: true,
       
      },
    ]
  }
}

module.exports = nextConfig
