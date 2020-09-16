exports.handler = async function (event, context) {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        number: Math.round(Math.random() * 100),
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        errorMessage: err.toString(),
      }),
    };
  }
};
