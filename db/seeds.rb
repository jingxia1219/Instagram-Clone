# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all

demo_user = User.create(username: 'Harry_potter', password: '123456', email: 'Harry_potter@gmail.com', bio: 'Harry James Potter, one of the most famous wizards of modern times.')
user1 = User.create(username: 'Hermione_Granger', password: '123456', email: 'Hermione_Granger@gmail.com', bio:
'studnet at Hogwarts; bestfriends: Harry Potter, Ron Weasley.')

user2 = User.create(username:'Ron_Weasley', password: '123456', email: 'Ron_Weasley@gmail.com',
  bio:"Red hair wizard, Harry's best friend.")

  post3 = Post.new(description: "It's so beautiful here!",  author_id: demo_user.id)
  file = EzDownload.open("https://nerdist.com/wp-content/uploads/2017/01/harry-potter.jpg")
  post3.photo.attach(io: file, filename: 'post3')
  post3.save!
  post4 = Post.new(description: "What Hogwarts looks like at night!",  author_id: user1.id)
  file = EzDownload.open("http://cdn.playbuzz.com/cdn/7aa950b4-eaa0-417d-93af-3bd332dc8086/5e549d0d-aad1-4ec1-96c9-31e36f08af8c.jpg")
  post4.photo.attach(io: file, filename: 'post4')
  post4.save!

  post5 = Post.new(description: "Man, spider is truly my worst nightmare!",  author_id: user2.id)
  file = EzDownload.open("http://cdn01.cdn.justjaredjr.com/wp-content/uploads/2011/04/hp-ron/rupert-grint-ron-weasley-03.JPG")
  post5.photo.attach(io: file, filename: 'post5')
  post5.save!

  post6 = Post.new(description: "I love magic!",  author_id: user1.id)
  file = EzDownload.open("https://static3.srcdn.com/wordpress/wp-content/uploads/2017/01/Hermione-brews-Polyjuice.jpg")
  post6.photo.attach(io: file, filename: 'post6')
  post6.save!

  post7 = Post.new(description:"Here's the train, I can't wait to see Harry and Hermione!", author_id: user2.id)
  file = EzDownload.open("https://images.unsplash.com/photo-1475353152807-97f4e3315977?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cab931e5c305b7a6718c01d483d4be06&w=1000&q=80")
  post7.photo.attach(io: file, filename: 'post7')
  post7.save!

  post8 = Post.new(description:"On my way back to school, can't wait to see my bestfriends!", author_id: user2.id)
  file = EzDownload.open("https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1530121145%2Fhogwarts-express-train-uk-WIZJOB0618.jpg%3Fitok%3DUSTHslhH&w=700&q=85")
  post8.photo.attach(io: file, filename: 'post8')
  post8.save!

  post9 = Post.new(description:"Together, we can beat the worst enemy!", author_id: demo_user.id )
  file = EzDownload.open("https://static0.srcdn.com/wordpress/wp-content/uploads/2018/08/Harry-Potter-and-the-Deathly-Hallows.jpg")
  post9.photo.attach(io: file, filename: 'post9')
  post9.save!

  post10 = Post.new(description:"Pic with my bestfriends!", author_id: demo_user.id)
  file = EzDownload.open("https://cnet2.cbsistatic.com/img/bVBJ-dQWHn0gvs5mMcY_1NgSk8o=/2017/06/26/d8396bb6-2a9a-491a-9443-43adce1072d4/harry-potter-cast.jpg")
  post10.photo.attach(io: file, filename: 'post10')
  post10.save!

  post11 = Post.new(description:"Big night", author_id: demo_user.id)
  file = EzDownload.open("https://www.visitbritainshop.com/world/~/media/images/articles/harry%20potter%20filming%20locations%20guide/pi-great-hall.ashx?h=377&w=670")
  post11.photo.attach(io: file, filename: 'post11')
  post11.save!

  post12 = Post.new(description:"", author_id: demo_user.id)
  file = EzDownload.open("https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/a/aa/Harry-Potter-Images-harry-potter-the-boy-who-lived-and-much-more-33972874-1920-1280.jpg/revision/latest?cb=20150531191541")
  post12.photo.attach(io: file, filename: 'post12')
  post12.save!



  post13 = Post.new(description:"We can get through everything together. I'm so thankful to have my best friends!", author_id: demo_user.id)
  file = EzDownload.open("http://harrypotterpublicenlightenmentproject.com/wp-content/uploads/2017/09/FEATURED.jpg")
  post13.photo.attach(io: file, filename: 'post13')
  post13.save!

  post14 = Post.new(description:"I miss being 8...", author_id: user2.id )
  file = EzDownload.open("https://media1.popsugar-assets.com/files/thumbor/RSd5EARN47GXczZOWQS1whEXd0A/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/08/24/768/n/1922283/7e7ede84_edit_img_cover_file_13839_1310694590_Ron-Weasley-ronald-weasley-30901065-1024-768/i/Ron-Weasley-Pictures-From-Harry-Potter-Movies.jpg")
  post14.photo.attach(io: file, filename: 'post14')
  post14.save!

  post15 = Post.new(description:"That creepy moment!", author_id: user1.id )
  file = EzDownload.open("https://www.overthinkingit.com/wp-content/uploads/2009/09/aaaaaaa.jpg")
  post15.photo.attach(io: file, filename: 'post15')
  post15.save!

  post16 = Post.new(description:"it's my first Wand!", author_id: demo_user.id )
  file = EzDownload.open("https://www.hbo.com/content/dam/hbodata/movies/h/harry-potter-and-the-order-of-the-phoenix/video-stills/harry-potter-theatrical-46448309_PRO35_10.jpg")
  post16.photo.attach(io: file, filename: 'post16')
  post16.save!

  post17 = Post.new(description:"My best game", author_id: user2.id)
  file = EzDownload.open("https://cdn.vox-cdn.com/thumbor/90uUqtYCkktMhip2ZqxbdkUKk1g=/0x0:1532x1270/1200x800/filters:focal(791x198:1035x442)/cdn.vox-cdn.com/uploads/chorus_image/image/59589497/firebolt.0.png")
  post17.photo.attach(io: file, filename: 'post17')
  post17.save!

  post18 = Post.new(description:"Another adventure waiting for us", author_id: user1.id )
  file = EzDownload.open("http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2016/11/hp-and-the-prisoner-of-azkaban.jpg?itok=pMPgSSZK")
  post18.photo.attach(io: file, filename: 'post18')
  post18.save!

  post19 = Post.new(description:"Love my friends!", author_id: demo_user.id )
  file = EzDownload.open("https://timedotcom.files.wordpress.com/2017/06/harry-potter-and-the-chamber-of-secrets_db0092.jpg?quality=85")
  post19.photo.attach(io: file, filename: 'post19')
  post19.save!

  post20 = Post.new(description:"farewell picture!", author_id: demo_user.id)
  file = EzDownload.open("https://imgix.bustle.com/rehost/2016/9/14/9b1ce226-3f0d-4222-be55-c35a9d5d918b.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70")
  post20.photo.attach(io: file, filename: 'post20')
  post20.save!

  post21 = Post.new(description:"One of the most important moments of my life!", author_id: demo_user.id)
  file = EzDownload.open("https://img.buzzfeed.com/buzzfeed-static/static/2017-02/2/11/enhanced/buzzfeed-prod-fastlane-02/original-7101-1486053612-3.jpg?crop=1438:752;90,0")
  post21.photo.attach(io: file, filename: 'post21')
  post21.save!

  post22 = Post.new(description:"Night view at Hogwarts!", author_id: user1.id )
  file = EzDownload.open("http://images.fandango.com/images/fandangoblog/hogwartsschoolpotter.jpg")
  post22.photo.attach(io: file, filename: 'post22')
  post22.save!

  post23 = Post.new(description:"When we were young", author_id: user2.id )
  file = EzDownload.open("https://media1.popsugar-assets.com/files/thumbor/GQ0FOu-7E-WfFezYrqIgRH549LI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/08/03/817/n/1922283/67e5ea615b64a0f39da582.51811241_/i/Harry-Potter-Band-Name-Tweets.jpg")
  post23.photo.attach(io: file, filename: 'post23')
  post23.save!

  post24 = Post.new(description:"I Love food!!", author_id: demo_user.id )
  file = EzDownload.open("https://media1.popsugar-assets.com/files/thumbor/kgKVUAFAqo3_xYHbXFTrXMY9t0k/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/27/711/n/3019466/3ee3b8d22ac44ccc_MCDHAP2_EC221_H.JPG")
  post24.photo.attach(io: file, filename: 'post24')
  post24.save!

  post25 = Post.new(description:"Aww....My fanboy drew me a pic!", author_id: user1.id )
  file = EzDownload.open("https://i.ytimg.com/vi/AFEcJMTG7GE/maxresdefault.jpg")
  post25.photo.attach(io: file, filename: 'post25')
  post25.save!

  post26 = Post.new(description:"I hope i never see them again", author_id: user2.id )
  file = EzDownload.open("http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2015/04/villains.jpg")
  post26.photo.attach(io: file, filename: 'post26')
  post26.save!

  post27 = Post.new(description:"I miss dumbledore..", author_id: demo_user.id )
  file = EzDownload.open("https://cdn.getyourguide.com/img/tour_img-1020984-70.jpg")
  post27.photo.attach(io: file, filename: 'post27')
  post27.save!
  post28 = Post.new(description:"Look who's here", author_id: demo_user.id )
  file = EzDownload.open("http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/hp_fan_theories.jpg?itok=57kTwhlL&resize=1100x1100")
  post28.photo.attach(io: file, filename: 'post28')
  post28.save!
  post29 = Post.new(description:"Broke another Wand...", author_id: user2.id  )
  file = EzDownload.open("https://www.factinate.com/wp-content/uploads/2017/11/9-9.jpg")
  post29.photo.attach(io: file, filename: 'post29')
  post29.save!
post30 = Post.new(description:"You will not get away, I'll fight you till I die", author_id: demo_user.id  )
file = EzDownload.open(  "https://i.ytimg.com/vi/mObK5XD8udk/maxresdefault.jpg")
post30.photo.attach(io: file, filename: 'post30')
post30.save!

post31 = Post.new(description: 'It matters not what someone is born, but what they grow to be',
 author_id: demo_user.id  )
file = EzDownload.open(  "https://vignette.wikia.nocookie.net/harrypotter/images/1/1a/Harry-Potter-Quotes-l.jpg/revision/latest?cb=20141218025905")
post31.photo.attach(io: file, filename: 'post31')
post31.save!

  post42 = Post.new(description: 'Even the dark and the unknown does not scare me',
  author_id: demo_user.id  )
  file = EzDownload.open("https://spokanesymphony.org/core/files/spokanesymphony/events/2d48fcc4174e2b45494bd1e9392eb746.jpg")
  post42.photo.attach(io: file, filename: 'post42')
  post42.save!
  post32 = Post.new(description:"More magic", author_id: user2.id )
  file = EzDownload.open("http://s3.crackedcdn.com/phpimages/article/8/2/1/194821_v3.jpg")
  post32.photo.attach(io: file, filename: 'post32')
  post32.save!

post33 = Post.new(description:"I will never forget my first game", author_id: demo_user.id )
file = EzDownload.open(  "https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/HarryPotterQuidditch.png")
post33.photo.attach(io: file, filename: 'post33')
post33.save!

post34 = Post.new(description:"When we found out about the dragon together", author_id: user2.id )
file = EzDownload.open(  "https://www.warnerbros.com/sites/default/files/harry_potter_order_phoenix_hero1_0.jpg")
post34.photo.attach(io: file, filename: 'post34')
post34.save!

post35 = Post.new(description:"The night I most died..what doesn't kill you make you stronger", author_id: demo_user.id)
file = EzDownload.open(  "https://www.hypable.com/wp-content/uploads/2018/01/expecto-patronum-harry-potter-spells.jpg")
post35.photo.attach(io: file, filename: 'post35')
post35.save!

post36 = Post.new(description:"Look at those silly muggles lol", author_id: user2.id)
file = EzDownload.open(  "https://cdn.londonandpartners.com/visit/general-london/areas/kings-cross-st-pancras/83983-640x360-kritt-harry-potter-platform-nine-and-three-quarters-640.jpg")
post36.photo.attach(io: file, filename: 'post36')
post36.save!
post37 = Post.new(description:"I love studying", author_id: user1.id)
file = EzDownload.open(  "https://imgix.bustle.com/uploads/image/2017/8/4/90af04f6-32b2-43a5-8c16-103fdfd7f6f7-hermione-2.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70")
post37.photo.attach(io: file, filename: 'post37')
post37.save!
post40 = Post.new(description:"dumbledore is great mentor, always so helpful and full of suprise!", author_id: demo_user.id )
file = EzDownload.open(  "https://timedotcom.files.wordpress.com/2015/07/harry-potter-dumbledore-dealthy-hallows.jpg?quality=85")
post40.photo.attach(io: file, filename: 'post40')
post40.save!
#
#
post38 = Post.new(description:"Sweet moment", author_id: user2.id)
file = EzDownload.open(  "http://cdn1.clevver.com/wp-content/uploads/2016/01/harry-potter-ron-weasley-hermione-granger-hug.jpg")
post38.photo.attach(io: file, filename: 'post38')
post38.save!
post38 = Post.new(description:"I can't...", author_id: demo_user.id)
file = EzDownload.open(  "https://imgix.bustle.com/uploads/image/2018/8/2/3b7bcf41-d577-4f8d-aa27-5901f71ed647-harry-ron-hermione-scream-1024x1024.jpg?w=945&h=574&fit=crop&crop=faces&auto=format&q=70")
post38.photo.attach(io: file, filename: 'post38')
post38.save!

#
post46 = Post.new(description:"Yep, trouble always has a way to find me :/", author_id: demo_user.id )
file = EzDownload.open(  "https://stylearena.net/wp-content/uploads/2015/02/harry-potter-quotes221.jpg")
post46.photo.attach(io: file, filename: 'post46')
post46.save!
post35 = Post.new(description:"I miss Hogwarts", author_id: user1.id )
file = EzDownload.open(  "https://www.slashfilm.com/wp/wp-content/images/zz311cb3da.jpg")
post35.photo.attach(io: file, filename: 'post35')
post35.save!

post44 = Post.new(description:"throw back", author_id: demo_user.id )
file = EzDownload.open(  "https://resizing.flixster.com/9oHgsoSWpWObaRqHDley50j0I2E=/2160x1620/v1.bjszNDkwNTQ7ajsxNzc3OTsxMjAwOzIxNjA7MTYyMA")
post44.photo.attach(io: file, filename: 'post44')
post44.save!
post43 = Post.new(description:"", author_id: demo_user.id)
file = EzDownload.open(  "https://www.hypable.com/wp-content/uploads/2018/01/expecto-patronum-harry-potter-spells.jpg")
post43.photo.attach(io: file, filename: 'post43')
post43.save!
post47 = Post.new(description:"Graduation!", author_id: user1.id)
file = EzDownload.open(  "https://www.visitbritainshop.com/world/~/media/images/articles/harry%20potter%20filming%20locations%20guide/pi-great-hall.ashx?h=377&w=670")
post47.photo.attach(io: file, filename: 'post47')
post47.save!
