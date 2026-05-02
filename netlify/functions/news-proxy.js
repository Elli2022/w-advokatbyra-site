// netlify/functions/news-proxy.js
const axios = require("axios");

exports.handler = async function (event) {
  const API_KEY = process.env.NEWS_API_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify({
        status: "error",
        message: "NEWS_API_KEY saknas i Netlify-miljön.",
      }),
    };
  }

  const url = `https://newsapi.org/v2/everything?q=juridik&apiKey=${API_KEY}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
        "Cache-Control": "public, max-age=120, stale-while-revalidate=300",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    const status = error.response?.status ?? 502;
    const payload = error.response?.data ?? {
      status: "error",
      message: error.message ?? "Okänt fel vid nyhetsproxy",
    };
    return {
      statusCode: status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify(payload),
    };
  }
};
