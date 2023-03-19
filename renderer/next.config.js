/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, (dev 환경에서 두번 랜더 되는거)
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: '',
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
