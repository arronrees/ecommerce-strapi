module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '61561b274867749c48f0f197612e83fd'),
  },
});
