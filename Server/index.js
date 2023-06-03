
const routes = require('./routers/Config/config')
require('dotenv').config();





routes.listen(process.env.PORT, () => {
  console.log(`port is running on port ${process.env.PORT}`);
});



