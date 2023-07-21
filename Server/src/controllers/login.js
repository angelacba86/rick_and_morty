const data=require('../utils/users');

const login=(req,res)=>{
    const{email, password}=req.query;

//     const verified = users.find((user) => {user.email=== email && password === user.password});

//    return verified ? res.status(200).json({access:true}): res.status(200).json({access:false})

const found= data.find((user) =>user.email=== email && user.password === password);
const access= found ? true: false;

return res.status(200).json({access})


}

module.exports=login;