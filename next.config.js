module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/queues',
        permanent: true,
      },
    ]
  },
}
