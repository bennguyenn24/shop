/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ["res.cloudinary.com"] },
    env:{
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;

