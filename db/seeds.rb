# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(username: 'Harry_potter', password: '123456', email: 'Harry_potter@gmail.com', bio: 'Harry James Potter, one of the most famous wizards of modern times.')
user2 = User.create(username: 'Hermione_Granger', password: '123456', email: 'Hermione_Granger@gmail.com', bio:
'studnet at Hogwarts; bestfriends: Harry Potter, Ron Weasley.')

user3 = User.create(username:'Ron_Weasley', password: '123456', email: 'Ron_Weasley@gmail.com',
  bio:"Red hair wizard, Harry's best friend.")

post4 =  Post.create(description:"farewell picture!", author_id: 1 ,photoUrl: "https://imgix.bustle.com/rehost/2016/9/14/9b1ce226-3f0d-4222-be55-c35a9d5d918b.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70")
post1 = Post.create(description: 'It matters not what someone is born, but what they grow to be',
  photoUrl:"https://vignette.wikia.nocookie.net/harrypotter/images/1/1a/Harry-Potter-Quotes-l.jpg/revision/latest?cb=20141218025905",
  author_id:1)

post2 =  Post.create(description:"Yep, trouble always has a way to find me :/", author_id: 1 ,photoUrl: "https://stylearena.net/wp-content/uploads/2015/02/harry-potter-quotes221.jpg")
post8 =  Post.create(description:"Man, spider is truly my worst nightmare!", author_id: 3 ,photoUrl: "http://cdn01.cdn.justjaredjr.com/wp-content/uploads/2011/04/hp-ron/rupert-grint-ron-weasley-03.JPG")
post11 =  Post.create(description:"I love magic!", author_id: 2 ,photoUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2017/01/Hermione-brews-Polyjuice.jpg")
post3 =  Post.create(description:"It's so beautiful here!", author_id: 1 ,photoUrl: "https://nerdist.com/wp-content/uploads/2017/01/harry-potter.jpg")
post9 =  Post.create(description:"I miss being 8...", author_id: 3 ,photoUrl: "https://media1.popsugar-assets.com/files/thumbor/RSd5EARN47GXczZOWQS1whEXd0A/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/08/24/768/n/1922283/7e7ede84_edit_img_cover_file_13839_1310694590_Ron-Weasley-ronald-weasley-30901065-1024-768/i/Ron-Weasley-Pictures-From-Harry-Potter-Movies.jpg")
post12 =  Post.create(description:"I love magic!", author_id: 2 ,photoUrl: "https://static3.srcdn.com/wordpress/wp-content/uploads/2017/01/Hermione-brews-Polyjuice.jpg")
post12 =  Post.create(description:"Aww....My fanboy drew me a pic!", author_id: 2 ,photoUrl: "https://i.ytimg.com/vi/AFEcJMTG7GE/maxresdefault.jpg")
post5 =  Post.create(description:"Another Victory!", author_id: 1 ,photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2i0WeVcqjgRWMsWWpzSuGi2Q939zuM6TFjUXL_QPILZaXl7nX")
post10 =  Post.create(description:"Who took this pic?! I hate this dress", author_id: 3 ,photoUrl: "https://images.pottermore.com/bxd3o8b291gf/7f7njYBbqg0AquIQ6Way0o/f59fb19f88e90dbb84f7ad99e94e2742/RonWeasley_WB_F4_RonAndHarryLookingAtTheirDressrobes_Still_080615_Land.jpg?w=320&q=85")
post12 =  Post.create(description:"I love you guys!", author_id: 2 ,photoUrl: "http://ichef.bbci.co.uk/news/976/cpsprodpb/1534D/production/_87316868_pa_kids.jpg")
post6 =  Post.create(description:"We all look like dope wizards!", author_id: 1 ,photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2lCv498YJC4iFgA7m1hZfOkuk5DftHWZk_ttCZj73j1Vlnz4")
post7 =  Post.create(description:"Pic with my bestfriends!", author_id: 1 ,photoUrl: "https://cnet2.cbsistatic.com/img/bVBJ-dQWHn0gvs5mMcY_1NgSk8o=/2017/06/26/d8396bb6-2a9a-491a-9443-43adce1072d4/harry-potter-cast.jpg")
