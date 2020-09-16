exports.handler = async function (event, context) {
  try {
    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, "");
    const segments = path.split("/").filter((e) => e);
    if (segments.length > 1) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          result: 2 * segments[1],
        }),
      };
    } else {
      throw "Please enter a whole number to multiply";
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        errorMessage: err.toString(),
      }),
    };
  }
};
