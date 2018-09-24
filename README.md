# Welcome to InstasPic!
[Live Link](https://instapic1219.herokuapp.com/#/)

InstaPic is an instant picture sharing web application inspired by Instagram. It allows users to make posts, view his/her and others' profile page with the ability to edit his/her profile picture.
##Preview

### Signup Page
![Instapic](https://media.giphy.com/media/tsWVpfKnn1k1EFfLF2/giphy.gif)
### Uploading new post on the Dashboard Page
![Instapic](https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39339066_1785902378171635_5651612890596114432_n.jpg?_nc_cat=0&oh=61b05e63f8138634c8ac55761a04993d&oe=5C021E9E)

### User Profile Page
![Instapic](https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/39298694_1785902028171670_6933644088533057536_n.jpg?_nc_cat=0&oh=eb63028152025fd159bf1d3e3424a2ae&oe=5C04C702)


## Technology
* Ruby on Rails is the primary language used for the backend, while PostgreSQL keeps track of the backend data.
* For the frontend, I utilized React.js and Redux cycles for rendering different components.
* I chose Active Storage to store the posts in my seed file and the pictures users uploaded, which assures the safety of the post pictures and also allows for a fast posts fetch.
* Bcrypt is implemented for backend data security while using session and current user state for front end authentication.
* To protect unauthorized users from accessing off-limit page from manipulating URL, I utilized protected routes and switch/routes in ReactRouterDom, which restrict logged in/out users to certain pages.

``` Ruby 
def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  ```

* To protect unauthorized users from accessing off-limit page from manipulating URL, I utilized protected routes and switch/routes in ReactRouterDom, which restrict logged in/out users to certain pages.
``` Ruby
 <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} /> //log out
      <AuthRoute exact path='/' component={GreetingContainer} /> //log out
      <AuthRoute exact path='/signup' component={SignupFormContainer} /> //log out
      <ProtectedRoute exact path='/user/:userId' component={UserShow} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      <Redirect to='/' />
    </Switch>
```
## Key Features
* On the splash page, the sign up box features a DEMO login button, which allows users to quickly access the dashboard page, and user profile pages without signing up.

![Instapic](https://media.giphy.com/media/fdYdHqDlBM3DHHNlBe/giphy.gif)
* Logged in users and DEMO user can make new post on either the dashboard page or their profile page. Users can preview the post picture in the pop up modal before uploading it.

![Instapic](https://media.giphy.com/media/5Ys3DrqeVlxGWMaWvQ/giphy.gif)
* On the user profile page, user can click on their profile picture to edit their avatar picture. On the edit profile picture modal, user can preview the new profile picture before uploading it.

![Instapic](https://media.giphy.com/media/1AIPgDD8CmrxvE6ui5/giphy.gif)
* Users can't hack into unauthorized pages by manipulating the URL. They will be taken back to the signup page if they didn't log in or the dashboard page if they are logged in.

![Instapic](https://media.giphy.com/media/8YTizHFFcWBqxuHjIe/giphy.gif)

## Upcoming features
* Be able to follow other users
* Be able to like, comment and bookmark others' posts.


