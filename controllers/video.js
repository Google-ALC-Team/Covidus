var formidable = require('formidable')
var fileSystem = require('fs') 
var  { getVideoDuration}  = require('get-video-duration');
const { request } = require('http');



module.exports = {


    videoupload:function(req,res){
        if(req.session.user){
            var formData = new formidable.IncomingForm();
            formData.maxFileSize = 1000 * 1024 * 1024;
            formData.parse(request, function(error, fields, files){

                var title = fields.title;
                var description = fields.description;
                var tags = fields.title;
                var category = fields.category

                var oldPathThumbnail = files.thumbnail.path;
                var thumbnail = "public/thumbnails" + new Date().getTime() + "-" +files.thumbnail.name
                
                fileSystem.rename(oldPathThumbnail, thumbnail, function(error){


                });

                var oldPath = files.video.path;
                var  newPath = "public/videos/" + new Date().getTime() + "_" + files.video.name;
                fileSystem.rename(oldPath, newPath,function(err){
                    if(err){
                        console.log(err)
                    }
                    getUser(req.user._id, function(user){
                        var CurrentTime = new Date().getTime()

                        getVideoDuration(newPath).then(function(duration){
                            var hours = Math.floor(duration / 60 /60);
                            var minutes = Math.floor(duration)
                        })
                    })

                })


            });
            
        }else{

            res.redirect('/login')

        }
    }




}