
const routes = require('./routers/Config/config')
require('dotenv').config();
const multer = require('multer');




routes.listen(process.env.PORT, () => {
  console.log(`port is running on port ${process.env.PORT}`);
});



