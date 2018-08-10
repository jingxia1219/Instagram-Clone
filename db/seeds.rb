# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create(username: 'Jing', password: '123456', email: 'jingxia1219@gmail.com', bio: 'SF Bay Area based
  software engineer, traveller, adventure and skateboarder')
user2 = User.create(username: 'Selena', password: '123456', email: 'selenaGomez@gmail.com', bio:
'American actress and pop singer')
