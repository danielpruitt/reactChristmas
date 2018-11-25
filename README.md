## React Christmas 

This simple web app was built to assist my family in organizing our Christmas lists so everybody can access them. The first year we did this was 2018 and it has very simple functionality since there was not much time to build the app(about a week). This is a Full Stack Mern app that is hosted on Heroku and uses mLab. The link is not published since this is just a web app for the family and authentication has not been added yet. 

## Usage
The user can put in the gift they want, a description if they want, and then they select their name. The gift and the person it is for is appended to the page below. On clicking the new gift link, a page will open that will display the gift. All the data is stored in a MongoDB database in a single document per submission. This way each document in a collection includes the gift, description, and the person it is for. 

## Optimization
    The code is written so that there is full capability of CRUD actions but for the first year of usage the family does not have Update or Delete so gifts cannot be deleted. As the developer, I am handling all the Updates and Deletes in the MongoDB database. In the future, there will be Update and Delete options in the Details page for each gift. 

    There will be authentication and/or invites to be apart of this family gift giving. With this the web app can expand from just my family to any family. The names/couples in the current version are hard-coded but that will change in the future updates. 


