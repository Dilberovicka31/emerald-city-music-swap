const db = require("../models");

// Defining methods for the recordsController
module.exports = {
  findAll: function (req, res) {
    console.log();
    db.Record.find({})
      .sort({ recordDatePosted: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findbyGenre: function (req, res) {
    db.Record.findAll({
      where: {
        recordGenre: req.params.recordGenre,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log("create:", req.body);
    console.log("user", req.user)
    db.Record.create(req.body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({_id: req.user._id}, { $push: { records: _id } }, { new: true })
      )
      .then((dbModel) => {
        // console.log(dbModel)
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  // create: function (req, res) {
  //   // req.body.posterName = req.user.email
  //   console.log("create:", req.body)
  //   db.Record
  //     .create(req.body)
  //     .then(dbModel => {
  //       db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { userRecords: dbModel._id } })
  //     })
  //     .then(dbModel => {
  //       // console.log(dbModel)
  //       res.json(dbModel)
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
  update: function (req, res, next) {
    db.Record.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Update successful!");
        }
      }
    );
    // .then(dbModel => {

    //   dbModel.recordAlbumName=req.body.recordAlbumName;
    //   dbModel.recordArtist=req.body.recordArtist;
    //   dbModel.recordGenre=req.body.recordGenre;
    //   dbModel.recordCondition=req.body.recordCondition;
    //   dbModel.recordComments=req.body.recordComments;

    //   dbModel.save()
    //   .then(()=>
    //   // res.redirect("/createpost")
    //   res.json("Record Updated"))

    // })
    //   // res.json(dbModel))
    // // res.redirect("/userPage");
    // .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Record.findByIdAndDelete({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
