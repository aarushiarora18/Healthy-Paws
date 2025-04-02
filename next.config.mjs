/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'www.highereducationdigest.com', 
          'encrypted-tbn0.gstatic.com',
          'assets.simpleviewinc.com',
          'https://www.mycampusreview.com/' // Add this domain
        ],
      },
};

export default nextConfig;
