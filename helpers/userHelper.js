const { ObjectId } = require('mongodb');
const user = require('../models/userModel')


module.exports={
    addUser: (body) => {
        return new Promise(async (resolve, reject) => {
          let userDetails = new user({
            name: body.name,
            username:body.mailId,
            password: body.password,
            contact:body.contact
          });
          userDetails.save();
         console.log(userDetails);
        });
      },
      findUser:(username)=>{
          return new Promise(async(resolve,reject)=>{
              let oneUserDetails = await user.findOne({
                username:username
              })
             resolve(oneUserDetails);
          })
      },
      getUserList:()=>{
        return new Promise(async(resolve,reject)=>{
            let usersList = await user.find()
            resolve(usersList)
        })
      },

      deleteUser:(id)=>{
        return new Promise(async(resolve,reject)=>{
          const state =  await user.deleteOne({
                _id:id
            })
            console.log(state);
            resolve(state)
        })
      }
}
