module.exports = {
    mutipleMongooseToObject: function (mongoose){
        return mongoose.map(mongoose => mongoose.toOject())
    },
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toOject() : mongoose
   } 
}