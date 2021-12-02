module.exports = {

  apps: [
    {
      name: 'API',
      script: 'dist/api/app.js',
      env:{'PORT': 3000},
    },
    {
      name: 'Athentication',
      script: 'dist/auth/app.js',
      env:{'PORT': 3001},
    },
    {
      name: 'CRM',
      script: 'dist/crm/app.js',
      env:{'PORT': 3002},
    },
    {
      name: 'HTTP',
      script: 'dist/http/app.js',
      env:{'PORT': 3003},
    },
    {
      name: 'Messages',
      script: 'dist/messages/app.js',
      env:{'PORT': 3004},
    },
    {
      name: 'Chat',
      script: 'dist/messages/app.js',
      env:{'PORT': 3005},
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
