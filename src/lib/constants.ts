let WEBSITE_URL = "http://localhost:3000/";

if (process.env.environment === "production") {
  WEBSITE_URL = "http://localhost:3000/";
} else {
  WEBSITE_URL = "http://localhost:3000/";
}

export { WEBSITE_URL };
