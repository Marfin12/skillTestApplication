const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const fetch = require('node-fetch');

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/1/';
const OTHER_URL = 'https://simple-contact-crud.herokuapp.com/contact';

function fetchResponseByURL(relativeURL) {
  return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
}

function fetchSport() {
  return fetchResponseByURL('/all_sports.php/').then(json => json.sports);
}

function updateContact(args) {
  return fetch(encodeURI(`${OTHER_URL}`), {
    method: 'POST',
    body: JSON.stringify({
      firstName: args.firstName,
      lastName: args.lastName,
      age: args.age,
      photo: args.photo,
    }),
  }).then(result => result);
}

const SportType = new GraphQLObjectType({
  name: 'Sports',
  description: 'Somebody that you used to know',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: sports => sports.idSport,
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
      resolve: fetchSport,
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
