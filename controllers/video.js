var formidable = require('formidable')
var fileSystem = require('fs') 
var  { getVideoDuration}  = require('get-video-duration');
const { request } = require('http');
const Video = require('../models/Video')
const path = require('path')
const fs = require('fs')





module.exports = {

    videoupload: function (req, res) {
        function saveImage() {
            let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

            let vidUrl = `vid`;
    

            for (i = 0; i <= 6; i++) {
                vidUrl += possible.charAt(Math.floor(Math.random() * possible.length));
            }

           
            // to check if there is image with equivalent with the one been uploaded

            Video.find({
                'filename': {
                    $regex: vidUrl
                }
            }, function (err, video) {
                if (err) {
                    throw err;
                }
                if (video.length > 0) {
                    saveImage();
                } else {
                    let temPath = req.file.path; // to get the specific file
                    let ext = path.extname(req.file.originalname).toLowerCase(); // to get the specific extension
                    let targetPath = path.resolve('./public/upload/' + vidUrl + ext); // stores all the files permanently in this location

                    if (ext == '.m4p' || ext == '.m4v' || ext == '.ogg' || ext == '.mpeg' || ext == '.mp4' || ext == '.mp3') { // helps to move a file from one location to another
                        fs.rename(temPath, targetPath, function (err) {
                            if (err) {
                                throw err;
                            }

                            // to save the images to the data base 
                            // create a new instance with image model and pass an object to it

                            let video = new Video({
                                filename: vidUrl + ext,
                                title: req.body.title, /// requesting the title from the body handlebar
                                description: req.body.description,
                                filePath:targetPath,
                                user_id:req.user._id 
                                // the user has been tied to th 

                            });

                            video.save(function (err,data) {
                                if (err) {
                                    throw err;
                               
                                }else{
                                    console.log(data)
                                    User.update({_id:req.user._id},{
                                        $push:{
                                            "videos": {
                                                _id:data._id,
                                                content:req.body.description,
                                                filename:vidUrl + ext,
                                                title:req.body.title
                                            }
                                        }
                                    },function(err,success){
                                        if(err){
                                            console.log('err for push', err)
                                        }else{
                                            console.log(success)
                                            User.updateOne({email:req.user.email},{
                                                $push:{"notifications":{
                                                    message:'Your video was uploaded successfully'
                                                }},
                                                $inc:{totalnotification:1}
                                            },function(err,data){
                                                if(err){
                                                    console.log('error for increment' ,err)
                                                }else{
                                                    console.log(data)
                                                }
                                            })
                                        }
                                    })
                                    res.redirect('/logged')
                                }
                               

                            })


                        });

                    } else {
                        fs.unlink(temPath, function (err) {
                            if (err) {
                                throw err;
                            }

                            res.status(500).json({
                                error: 'Invalid image formate'
                            });
                        }); // deletes file

                    }
                }
            })






            console.log(vidUrl)


        }

        saveImage();

    }

}


    // videoupload:function(req,res){
    //     // if(req.session.user){
    //         var formData = new formidable.IncomingForm();
    //         formData.maxFileSize = 1000 * 1024 * 1024;
    //         formData.parse(request, function(error, fields, files){
            
    //            var title = fields.title;
    //             var description = fields.description;
    //             var tags = fields.title;
    //             var category = fields.category

    //             var oldPathThumbnail = files.thumbnail.path;
    //             var thumbnail = "public/thumbnails" + new Date().getTime() + "-" +files.thumbnail.name
                
    //             fileSystem.rename(oldPathThumbnail, thumbnail, function(error){


               

    //             var oldPath = files.video.path;
    //             var  newPath = "public/videos/" + new Date().getTime() + "_" + files.video.name;
    //             fileSystem.rename(oldPath, newPath,function(err){
    //                 if(err){
    //                     console.log(err)
    //                 }
    //                 getUser(req.user._id, function(user){
    //                     var CurrentTime = new Date().getTime()

    //                     getVideoDuration(newPath).then(function(duration){
    //                         var hours = Math.floor(duration / 60 /60);
    //                         var minutes = Math.floor(duration / 60) - (hours * 60);
    //                         var seconds = Math.floor(duration % 60);


    //                         var vidos = new Videos()
    //                         videos.title = req.body.title
    //                         vidos.caption = req.body.caption
    //                         vidos.filePath = newPath
    //                         videos.watch = CurrentTime
    //                         videos.seconds = seconds
    //                         videos.thumbnail = thumbnail

    //                         video.save(function(err,data){
    //                             if(err){
    //                                 console.log("video saving", err)
    //                             }else{
    //                                 User.updateOne({
    //                                     _id:req.user._id
    //                                 },{
    //                                     $push:{
    //                                         "videos":{
    //                                             _id:data._id,
    //                                             title:title,
    //                                             views:0,
    //                                             thumbnail,
    //                                             watch:currentTime
    //                                         }
    //                                     }
    //                                 })
    //                             }
    //                             // res.redirect('/')
    //                             res.writeHead(200,{'content-type':'video/audio'})
                               
    //                         })
    //                     })
    //                 })

    //             })
    //         });


    //         });
            
    //     // }else{

    //     //     res.redirect('/login')

    //     // }
    // }




