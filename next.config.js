module.exports = {
  pageExtensions: ['page.tsx', 'api.ts'],
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
  images: {
    loader: 'imgix',
    path: '/',
  },
}
