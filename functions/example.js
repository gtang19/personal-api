exports.handler = async function (event, context) {
  try {
    console.log(event.path);
    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, "");
    const segments = path.split("/").filter((e) => e);
    console.log(segments);
    if (segments.length === 1) {
      return {
        statusCode: 200,
        body:
          "Hello. This is an example of an extremely simple API that you can interact with directly through a web browser. Most of the time, when you browse the internet, your browser makes a request to the server, and it responds with an HTML page, which is then displayed in a way that's easy for human beings to read and interact with. Servers don't have to return HTML though - in this case, it's just returning some basic text data. APIs provide a structured way of making requests to get only the data you need for your program. It is significantly more efficient to write a program that pulls data from the LinkedIn API than it is to write a program that tries to find that same data on the main LinkedIn site, designed for humans.\n\nAPIs can also return personalized data: try navigating to /example/(your_name)\nor run functions: /getRandomNumber \nor perform calculations: /multiplyByTwo/(a number)",
      };
    }
    if (segments.length > 1) {
      name = segments[1];
      return {
        statusCode: 200,
        body: JSON.stringify({
          name: name,
          numberOfCharacters: name.length,
          message: `Hi ${name}, this example just gives your name back to you, but a more complex site with a database might return more information`,
          json:
            "This output is organized as JSON (JavaScript Object Notation), a common way of returning data in APIs",
        }),
      };
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
