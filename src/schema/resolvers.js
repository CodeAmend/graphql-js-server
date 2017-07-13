const link = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The Best Query Language'
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client'
  },
];

module.exports = {
  Query: {
    allLinks: () => link,
  },
  Mutation: {
    createLink(_, data) {
      const newLink = Object.assign({ id: link.length }, data);
      link.push(newLink);
      return newLink;
    }
  }
};
