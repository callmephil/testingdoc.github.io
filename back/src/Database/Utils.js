const nowForSQLite = () => new Date().toISOString().replace('T', ' ').replace('Z', '');

const joinSQLStatementKeys = (keys, values, delimiter, keyValueSeparator = '=') => {
  return keys
    .map(propName => {
      const value = values[propName];
      if (value !== null && typeof value !== "undefined") {
        return SQL ``.append(propName).append(keyValueSeparator).append(SQL `${value}`);
      }
      return false;
    })
    .filter(Boolean)
    .reduce((prev, curr) => prev.append(delimiter).append(curr));
};


export default {
  nowForSQLite,
  joinSQLStatementKeys
}