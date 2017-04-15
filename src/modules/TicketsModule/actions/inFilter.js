const inFilter = (filter, value) => {
  const index = filter.get('items').indexOf(value);
  return index === -1;
};

export default inFilter;
