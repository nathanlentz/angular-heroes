const { registerPlugin, configValidator} = require('@scullyio/scully');

const api = require("marvel-api");

function myHeroesPlugin(route, config) {
  const marvel = api.createClient({
    publicKey: "",
    privateKey: ""
  });

  return marvel.characters.findAll(100, 0).then(res => {
    return res.data.map(hero => ({ route: `/heroes/hero/${hero.id}`}));
  })
}

myHeroesPlugin[configValidator] = async config => [];

registerPlugin('router', 'myHeroesPlugin', myHeroesPlugin);

exports.config = {
  projectRoot: "./src/app",
  outFolder: './dist/static',
  routes: {
    '/heroes/hero/:id': {
      type: 'myHeroesPlugin',
    }
  }
};