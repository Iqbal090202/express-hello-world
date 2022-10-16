module.exports = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  port: process.env.DB_PORT || "",
  database: process.env.DB_NAME || "db_users",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
