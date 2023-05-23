/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, (dev 환경에서 두번 랜더 되는거)
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'baeduo.s3.ap-northeast-2.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // 추후에 변경해야함
        port: '',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer'
      config.node = {
        __dirname: true,
      }
    }

    config.output.globalObject = 'this'
    return config
  },
}

module.exports = nextConfig
