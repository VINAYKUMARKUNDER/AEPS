
const routes = require('./routers/Config/config')
require('dotenv').config();



routes.get('/', (req, res) => {
  const ipAddress = req.connection.remoteAddress;
  console.log(`Current IP Address: ${ipAddress}`);
  res.send('Hello, world!');
});

routes.listen(process.env.PORT, () => {
  console.log(`port is running on port ${process.env.PORT}`);
});



