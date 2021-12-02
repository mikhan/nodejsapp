let port = 4000

module.exports = {
  apps: [
    {
      name: 'API',
      script: 'dist/api/app.js',
      env: { PORT: port++ },
    },
    {
      name: 'Athentication',
      script: 'dist/auth/app.js',
      env: { PORT: port++ },
    },
    {
      name: 'CRM',
      script: 'dist/crm/app.js',
      env: { PORT: port++ },
    },
    {
      name: 'HTTP',
      script: 'dist/http/app.js',
      env: { PORT: port++ },
    },
    {
      name: 'Messages',
      script: 'dist/messages/app.js',
      env: { PORT: port++ },
    },
    {
      name: 'Chat',
      script: 'dist/messages/app.js',
      env: { PORT: port++ },
    },
  ],
  // deploy: {
  //   production: {
  //     'user': 'SSH_USERNAME',
  //     'host': 'SSH_HOSTMACHINE',
  //     'ref': 'origin/master',
  //     'repo': 'GIT_REPOSITORY',
  //     'path': 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': '',
  //   },
  // },
}
