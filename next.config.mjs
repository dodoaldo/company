// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'fwtingleandsons.co.uk',
//           pathname: '/wp-content/uploads/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'www.welshoakframe.com',
//           pathname: '/wp-content/uploads/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'th.bing.com',
//           pathname: '/th/id/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'cdn.quotesgram.com',
//           pathname: '/img/**',
//         },
//         {
//           protocol: 'https',
//           hostname: 'awsimages.detik.net.id',
//           pathname: '/community/media/visual/**',
//         },
//         {
//           protocol: 'https',
//           hostname: '3.bp.blogspot.com',
//           pathname: '/-/**',
//         },
//       ],
//     },
//   };
  
//   export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'fwtingleandsons.co.uk',
        'www.welshoakframe.com',
        'th.bing.com',
        'cdn.quotesgram.com',
        'awsimages.detik.net.id',
        '3.bp.blogspot.com',
        'oyster.ignimgs.com',
        'randomuser.me',
        'randomuser.me/api/portraits/',
        'oakframesdirect.com',
        'theoakrestaurants.com',
        'i.pinimg.com',
        'i.ytimg.com'
      ],
    },
  };
  
  export default nextConfig;
  