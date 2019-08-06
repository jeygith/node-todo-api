const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');


var password  = '123abc!';

/*bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
       console.log(hash);
    });
});*/

var hashedPassword = '$2a$10$yvrdQ15fQUKHa5PEuR4Vi.MOgQNTTcf9RwKFcnV2t09iU84bTrenm';


bcrypt.compare(password, hashedPassword, (err, res)=>{
    console.log(res);
})


var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token)
// jwt.verify

var decoded = jwt.decode(token, '123abc');

console.log('decoded', decoded);

return;
var message = 'I am root';

var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify((data)) + 'somesecret').toString()
}

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed.');
}
