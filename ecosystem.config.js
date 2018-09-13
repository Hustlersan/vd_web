module.exports = {
  apps : [{
    name      : 'server',
    script    : 'server.js',
    watch: true,
    env: {
      "PORT": 8090,
      "NODE_ENV": "development"
    },
    env_production : {
      "PORT": 8080,
      "NODE_ENV": "production"
    }
  },
  {
    name      : 'dev_server',
    script    : 'server.js',
    watch: true,
    env: {
      "PORT": 8090,
      "NODE_ENV": "development"
    },
    env_production : {
      "PORT": 8080,
      "NODE_ENV": "production"
    }
  }]
};
