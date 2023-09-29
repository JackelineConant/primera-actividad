/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["www.diariodenavarra.es","static.wikia.nocookie.net"],
        // formats: ["image/jpeg"]
    }
}
module.exports = nextConfig
