
const jwt = require('jsonwebtoken');

const createToken= () =>{
        const token = jwt.sign({email:'vinay3000111@gmsil.com', password:'Vinay@1313'}, 'vinaykumarkundersongardhahaliyalalganj');
        console.log(token);
    }

    createToken();