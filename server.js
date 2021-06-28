const app = require('./lib/app');

app.listen(3000, () =>
  console.log('SERVER RUNNING ENV: ', process.env)
);
