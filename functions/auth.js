const basicAuth = require("basic-auth");
const axios = require("axios");

exports.handler = async (event) => {
  try {
    const { name: email, pass: password } = basicAuth(event);
    const code = event.headers.accesscode;

    if (code !== process.env.ACCESS_CODE) {
      return {
        statusCode: 401,
        body: "Invalid access code!",
      };
    }

    const tokenResponse = await axios({
      method: "post",
      url: "https://dadbodfitnessonline.auth0.com/oauth/token",
      data: {
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        grant_type: "client_credentials",
        audience: `https://dadbodfitnessonline.auth0.com/api/v2/`,
      },
    });

    await axios({
      method: "post",
      url: "https://dadbodfitnessonline.auth0.com/api/v2/users",
      data: {
        email,
        password,
        email_verified: true,
        connection: "Username-Password-Authentication",
      },
      headers: {
        authorization: `Bearer ${tokenResponse.data.access_token}`,
      },
    });

    return {
      statusCode: 200,
      body: "Registered!",
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: `We encountered an error: ${err.message}`,
    };
  }
};
