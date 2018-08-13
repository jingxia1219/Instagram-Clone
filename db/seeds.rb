# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(username: 'Harry_potter', password: '123456', email: 'Harry_potter@gmail.com', bio: 'Harry James Potter, one of the most famous wizards of modern times.')
user1 = User.create(username: 'Hermione_Granger', password: '123456', email: 'Hermione_Granger@gmail.com', bio:
'studnet at Hogwarts; bestfriends: Harry Potter, Ron Weasley.')

user2 = User.create(username:'Ron_Weasley', password: '123456', email: 'Ron_Weasley@gmail.com',
  bio:"Red hair wizard, Harry's best friend.")

post3 =  Post.create(description:"Man, spider is truly my worst nightmare!", author_id: 3 ,photoUrl: "http://cdn01.cdn.justjaredjr.com/wp-content/uploads/2011/04/hp-ron/rupert-grint-ron-weasley-03.JPG")
post4 =  Post.create(description:"I love magic!", author_id: 2 ,photoUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2017/01/Hermione-brews-Polyjuice.jpg")
post5 =  Post.create(description:"It's so beautiful here!", author_id: 1 ,photoUrl: "https://nerdist.com/wp-content/uploads/2017/01/harry-potter.jpg")
post6 =  Post.create(description:"What Hogwarts looks like at night!", author_id: 2 ,photoUrl: "http://cdn.playbuzz.com/cdn/7aa950b4-eaa0-417d-93af-3bd332dc8086/5e549d0d-aad1-4ec1-96c9-31e36f08af8c.jpg")
post7 =  Post.create(description:"On my way back to school, can't wait to see my bestfriends!", author_id: 3 ,photoUrl: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1530121145%2Fhogwarts-express-train-uk-WIZJOB0618.jpg%3Fitok%3DUSTHslhH&w=700&q=85")
post8 =  Post.create(description:"Together, we can beat the worst enemy!", author_id: 1 ,photoUrl: "https://images.pottermore.com/bxd3o8b291gf/c5C4SQYwJqiUuOEaqO0Gu/36d71e13ad9cde9f337a6117b923a694/HarryPotter_WB_F5_DumbledoresArmyGroupImage_Promo_080615_Land.jpg?w=1200")
post9 =  Post.create(description:"Pic with my bestfriends!", author_id: 1 ,photoUrl: "https://cnet2.cbsistatic.com/img/bVBJ-dQWHn0gvs5mMcY_1NgSk8o=/2017/06/26/d8396bb6-2a9a-491a-9443-43adce1072d4/harry-potter-cast.jpg")
post34 =  Post.create(description:"Big night", author_id: 1 ,photoUrl: "https://www.visitbritainshop.com/world/~/media/images/articles/harry%20potter%20filming%20locations%20guide/pi-great-hall.ashx?h=377&w=670")
post34 =  Post.create(description:"", author_id: 1 ,photoUrl: "https://images.pottermore.com/bxd3o8b291gf/5B7UYTpJMkgYQCkaiiea04/d3e0ed8952977b44f4e6c374e80e3c25/HarryPotter_WB_F3_HarryPotterInBedWithWandMaraudersMapAndHedwig_Still_100615_Land.jpg?w=1200")

post11 =  Post.create(description:"", author_id: 1 ,photoUrl: "http://www.goliath.com/wp-content/uploads/2015/09/6873361-harry-potter.jpg")
post12 =  Post.create(description:"I miss being 8...", author_id: 3 ,photoUrl: "https://media1.popsugar-assets.com/files/thumbor/RSd5EARN47GXczZOWQS1whEXd0A/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/08/24/768/n/1922283/7e7ede84_edit_img_cover_file_13839_1310694590_Ron-Weasley-ronald-weasley-30901065-1024-768/i/Ron-Weasley-Pictures-From-Harry-Potter-Movies.jpg")
post13 =  Post.create(description:"That creepy moment!", author_id: 2 ,photoUrl: "https://www.overthinkingit.com/wp-content/uploads/2009/09/aaaaaaa.jpg")
post14 =  Post.create(description:"it's my first Wand!", author_id: 1 ,photoUrl: "https://www.hbo.com/content/dam/hbodata/movies/h/harry-potter-and-the-order-of-the-phoenix/video-stills/harry-potter-theatrical-46448309_PRO35_10.jpg")
post15 =  Post.create(description:"My best game", author_id: 3 ,photoUrl: "https://cdn.vox-cdn.com/thumbor/90uUqtYCkktMhip2ZqxbdkUKk1g=/0x0:1532x1270/1200x800/filters:focal(791x198:1035x442)/cdn.vox-cdn.com/uploads/chorus_image/image/59589497/firebolt.0.png")
post16 =  Post.create(description:"Another adventure waiting for us", author_id: 2 ,photoUrl: "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2016/11/hp-and-the-prisoner-of-azkaban.jpg?itok=pMPgSSZK")
post17 =  Post.create(description:"Love my friends!", author_id: 1 ,photoUrl: "https://timedotcom.files.wordpress.com/2017/06/harry-potter-and-the-chamber-of-secrets_db0092.jpg?quality=85")

post18 =  Post.create(description:"farewell picture!", author_id: 1 ,photoUrl: "https://imgix.bustle.com/rehost/2016/9/14/9b1ce226-3f0d-4222-be55-c35a9d5d918b.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70")
post19 =  Post.create(description:"Nighttime lights at Hogwarts!", author_id: 2 ,photoUrl: "http://www.syfy.com/sites/syfy/files/styles/1200x1200/public/2018/07/the_nighttimelights_at_hogwarts_castle_hufflepuff_-_wwohp_at_ush.jpg?itok=1CQ0KQf-&timestamp=1531807595")
post20 =  Post.create(description:"When we were young", author_id: 3 ,photoUrl: "https://media1.popsugar-assets.com/files/thumbor/GQ0FOu-7E-WfFezYrqIgRH549LI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/03/817/n/1922283/67e5ea615b64a0f39da582.51811241_/i/Harry-Potter-Band-Name-Tweets.jpg")
post21 =  Post.create(description:"Love food!!", author_id: 1 ,photoUrl: "https://media1.popsugar-assets.com/files/thumbor/kgKVUAFAqo3_xYHbXFTrXMY9t0k/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/27/711/n/3019466/3ee3b8d22ac44ccc_MCDHAP2_EC221_H.JPG")
post22 =  Post.create(description:"Aww....My fanboy drew me a pic!", author_id: 2 ,photoUrl: "https://i.ytimg.com/vi/AFEcJMTG7GE/maxresdefault.jpg")
post23 =  Post.create(description:"I hope i never see them again", author_id: 3 ,photoUrl: "http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2015/04/villains.jpg")
post24 =  Post.create(description:"Look who's here", author_id: 1 ,photoUrl: "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/hp_fan_theories.jpg?itok=57kTwhlL&resize=1100x1100")
post25 =  Post.create(description:"Broke another Wand...", author_id: 3 ,photoUrl: "https://www.factinate.com/wp-content/uploads/2017/11/9-9.jpg")
post26 = Post.create(description: 'It matters not what someone is born, but what they grow to be',
  photoUrl:"https://vignette.wikia.nocookie.net/harrypotter/images/1/1a/Harry-Potter-Quotes-l.jpg/revision/latest?cb=20141218025905",
  author_id:1)
post27 =  Post.create(description:"More magic", author_id: 3 ,photoUrl: "http://s3.crackedcdn.com/phpimages/article/8/2/1/194821_v3.jpg")
post28 =  Post.create(description:"I will never forget my first game", author_id: 1 ,photoUrl: "http://www.syfy.com/sites/syfy/files/styles/764x432/public/2018/04/harryquidditch.png?itok=XXdVCRQC&timestamp=1523380107")
post29 =  Post.create(description:"I love studying", author_id: 2 ,photoUrl: "https://imgix.bustle.com/uploads/image/2017/8/4/90af04f6-32b2-43a5-8c16-103fdfd7f6f7-hermione-2.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70")

post30 =  Post.create(description:"Sweet moment", author_id: 3 ,photoUrl: "http://cdn1.clevver.com/wp-content/uploads/2016/01/harry-potter-ron-weasley-hermione-granger-hug.jpg")
post31 =  Post.create(description:"I can't...", author_id: 1 ,photoUrl: "https://imgix.bustle.com/uploads/image/2018/8/2/3b7bcf41-d577-4f8d-aa27-5901f71ed647-harry-ron-hermione-scream-1024x1024.jpg?w=945&h=574&fit=crop&crop=faces&auto=format&q=70")

post32 =  Post.create(description:"Yep, trouble always has a way to find me :/", author_id: 1 ,photoUrl: "https://stylearena.net/wp-content/uploads/2015/02/harry-potter-quotes221.jpg")
post33 =  Post.create(description:"I miss Hogwarts", author_id: 2 ,photoUrl: "https://www.slashfilm.com/wp/wp-content/images/zz311cb3da.jpg")
post10 =  Post.create(description:"throw back", author_id: 1 ,photoUrl: "https://resizing.flixster.com/9oHgsoSWpWObaRqHDley50j0I2E=/2160x1620/v1.bjszNDkwNTQ7ajsxNzc3OTsxMjAwOzIxNjA7MTYyMA")
post10 =  Post.create(description:"", author_id: 1 ,photoUrl: "https://www.hypable.com/wp-content/uploads/2018/01/expecto-patronum-harry-potter-spells.jpg")
