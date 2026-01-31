/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Wenzel Medical Systems',
    description: 'Wo ich mein Zeug habe',
    icon: 'https://mad-mac-jack.github.io/regestry_christian/1.1/logo_kasm_viewer.png',
    listUrl: 'https://mad-mac-jack.github.io/regestry_christian/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  basePath: '/regestry_christian/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
  
  
