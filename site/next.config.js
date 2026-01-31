/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: `${basePath}/img/logo.svg`,
    listUrl: 'https://mad-mac-jack.github.io/workspaces_registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  listUrl: `https://mad-mac-jack.github.io${basePath}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
  
  
