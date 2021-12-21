const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController{
    //get /store/courses
    storeCourses(req, res, next){
        Course.find({}).lean()
        .then(courses => res.render('me/stored-courses',{
            courses
        }))
        .catch(next);
    }

    //get /trash/courses
    trashCourses(req, res, next){
        Course.findDeleted({}).lean()
        .then(courses => res.render('me/trash-courses',{
            courses
        }))
        .catch(next);
    }

}

module.exports = new MeController();

