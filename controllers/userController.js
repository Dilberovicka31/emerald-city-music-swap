const {User} = require("../models");

module.exports = {
    getUser: async (req,res) =>{
    try {
        const user = await User.findById(req.params.id)
        
        .populate("Record")
        .exec();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
}