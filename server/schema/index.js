const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const {
  fetchAllSports,
  updateContact
} = require('../services');

const SportType = new GraphQLObjectType({
  name: 'Sports',
  description: 'Somebody that you used to know',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: sports => sports.id,
    },
    name: {
      type: GraphQLString,
      resolve: sports => sports.strSport,
    },
    description: {
      type: GraphQLString,
      resolve: sports => sports.strSportDescription,
    },
    image: {
      type: GraphQLString,
      resolve: sports => sports.strSportThumb,
    },
  }),
});

const ContactType = new GraphQLObjectType({
  name: 'Contact',
  description: 'Somebody that you used to know',
  fields: () => ({
    message: {
      type: GraphQLInt,
      resolve: message => message.status,
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    sports: {
      type: new GraphQLList(SportType),
      resolve: fetchAllSports,
    },
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root of all... mutation',
  fields: {
    contact: {
      type: ContactType,
      args: {
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        age: {type: GraphQLInt},
        photo: {type: GraphQLString},
      },
      resolve(parent, args) {
        return updateContact(args);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
