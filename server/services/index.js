const fetch = require('node-fetch');

const { BASE_URL, OTHER_URL, SPORT_PAGES } = require('../constants');

const fetchResponseByURL = async (relativeURL) => {
  const res = await fetch(`${BASE_URL}${relativeURL}`);
  return res.json();
};

const fetchAllSports = async () => {
  const res = await fetchResponseByURL(SPORT_PAGES.ALL);
  return res.sports;
};

const updateContact = async (args) => await fetch(encodeURI(`${OTHER_URL}`), {
  method: 'POST',
  body: JSON.stringify({
    firstName: args.firstName,
    lastName: args.lastName,
    age: args.age,
    photo: args.photo,
  }),
});

module.exports = {
  fetchAllSports,
  updateContact,
};
