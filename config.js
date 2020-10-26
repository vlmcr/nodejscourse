const args = process.argv.slice(2).map((item) => {
  const [key, value] = item.slice(1).split('=');

  return { key, value }
});

const port = process.env.PORT || 3000;
const env = args.env || 'dev';

module.exports = {
  port,
  env
}
