const express = require('express');

const bodyParser = require('body-parser');

const { graphqlExpress } = require('graphql-server-express');

const schema = require('./schema');

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

const port = 3000;
app.listen(port, () => {
  console.log(`Hackernews server running on port ${port}`);
});
