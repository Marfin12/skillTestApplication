const navigateToDetailScreen = (navigation, props) => () => {
  console.log(navigation);
  navigation.navigate('Details', {props});
};

const apolloObjectCreator = sports => ({
  length: sports.length,
  sports: sports,
});

const apolloMapCreator = () => {
  const queryStore = new Map();
  queryStore.set({
    queryId: 123,
  });

  return queryStore;
};

export {navigateToDetailScreen, apolloObjectCreator, apolloMapCreator};
