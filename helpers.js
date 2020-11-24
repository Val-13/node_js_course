function getCliArguments() {
  const args = process.argv.slice(2);

  return args.reduce((acc, arg) => {
    const [key, value] = arg.split('=');
    return {
      ...acc,
      [key.substring(1)]: value
    };
  }, {});
}

module.exports = {
  getCliArguments
};
