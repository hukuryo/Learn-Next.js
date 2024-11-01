const nextConfig = {
  experimental: {
    dynamicIO: true,
    cacheLife: {
      days: {
        stale: 3600, // 1 hour
        revalidate: 900, // 15 minutes
        expire: 86400, // 1 day
      },
    },
  },
};

module.exports = nextConfig;
