/** @type {import('next').NextConfig} */

require("dotenv").config();
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  basePath: process.env.GITHUB_PAGES ? process.env.REPOSITORY_NAME : "",
};

module.exports = nextConfig;
