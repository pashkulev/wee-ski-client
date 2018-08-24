# WeSkiClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Wee-Ski Project

- [Description](#description)
- [Authorities and Access](#authorities-and-access)
  - [Anonymous](#anonymous)
  - [User](#user)
  - [Moderator](#moderator)
  - [Admin](#admin)
  - [Root Admin](#root-admin)
- [Authentication](#authentication)
- [Home Page](#home-page)
- [About Page](#about-page)
- [Courses](#courses)
  - [Courses Info](#courses-info)
  - [Disciplines](#disciplines)
- [Gatherings](#gatherings)
- [Resorts](#resorts)
- [Admin Panel](#admin-panel)
  - [Users Menu](#user-menu)
  - [Courses Menu](#courses-menu)
  - [Logs Menu](#logs-menu)
- [Last Notes](#last-notes)

## Description
The Wee-Ski project is intended to serve as a social network for
like minded skiers, mountain lovers and enthusiasts. Registered users
should be able to communicate with each other, organize gatherings,
parties and any kind of ski related events in different ski resorts 
around the world. And since I am a ski instructor, and also the developer
of this application, it also advertises the different courses I'm
planning to organize.

## Authorities and Access

#### Anonymous
Anonymous users have access to most of the functionality
at this stage of the app. This means that they are not restricted
to make GET requests and explore the content of the site.
The only thing they can not do is interact with the app 
(vote, comment, post, user profile)

For the authenticated users, the app provides 4 user roles: 
USER, MODERATOR, ADMIN, AND ROOT_ADMIN.

#### User
Users should be able to access their profile, update it,
add friends, communicate, organize gatherings and events, 
write posts, reply with comments, vote for different things etc. 
I hope I'll make it till sunday:))

#### Moderator
Moderators don't have any responsibilities and privileges at this stage.

#### Admin
The big difference comes with the admin roles. This is where I put 
most of my efforts for this project.
An admin has access to a dedicated Admin Panel which has quite a lot
of functionality. See more details in the sections about the Admin Panel.

#### Root Admin
The last role is the ROOT_ADMIN. This authority is owned by only one 
user in the app. Except for all the privileges an Admin has, 
the ROOT_ADMIN can also modify user's authorities. He can make other
users admins or remove the admin authority of existing admins.
He is not restricted to block or delete any other user. 
He is the God Object! 

## Authentication
Anonymous users can navigate to the Login and
Register forms using the buttons provided on
the right side of the main menu. There is a 
client side validation on the required fields and 
appropriate success/error messages are displayed.
Once logged in, an authenticated user may logout
by clicking in the user area at the right side of
the main menu and selecting Logout from
the dropdown menu.

## Home Page
The Home Page displays a welcome message with
simple but stylish angular animation.

## About Page
About Page displays some static basic info about the project.

## Courses
The course entity is the only one that is implemented 
with full crud operations.
Since courses are provided by the site, the admins are the only
ones who can create, edit or delete a course. 
All other users can just browse the
content and authenticated user can enroll in a course

The courses page has a side navigation bar with 5 links taking you
to different pages:

#### Courses Info
The first one is the info page. Although this page contains 
a lot of static data, this is the place where the first requests are made.
The navigation stays always in the left section, 
in the middle we have some static text with images and on the right side
are displayed the upcoming 3 courses. By clicking on them
you will be taken to the details page of the given course.

#### Disciplines
The next 4 links in the menu are taking you to a one of the 
following ski disciplines: Alpine Skiing, Free Ride, Freestyle
and Touring. They are basically the same. The request is 
filtering the results by discipline and the existing upcoming
courses are displayed.

## Gatherings
Not implemented yet

## Resorts
Not implemented yet

## Admin Panel
This panel is accessible only by admin users.

#### User Menu
An admin has a 'users' menu where
he can access all registered users. He can see
their details and the authorities they have. An admin is able to block 
users. After that these users won't be able to access the site.
He can also unblock them. An admin is also able to entirely delete 
a user. On deletion the user's email is saved in a black list table
so that he can not register with this email any more. 
It's important to note that an admin can operate
only on users with lower privileges. He can not touch other admins!

#### Courses Menu
An Admin also has a 'courses' menu. There he can see all courses,
create new courses, edit existing courses and delete courses.

The following 2 menus about 'gatherings' and 'resorts' are still
not implemented.

#### Logs Menu
And the last cool feature of the admins is the 'logs' menu.
On this page an Admin can track all the server activity. Every log contains
accessed uri, request method, response status, timestamp and the identity
of the user that made the request. The only non registered requests 
are the GET request with status 200 OK, first because they are too much 
and also because they are not that interesting. Since the logs are 
really a lot, an appropriate full featured pagination is provided.

## Last Notes
The project is divided into different modules which are imported
in the main app-module. It uses nested router outlets, reactive forms, 
angular material, bootstrap, css and some other features that 
I discovered by searching in google, stack overflow and the 
Angular official documentation. 

I hope you enjoy my project. Cheers!
