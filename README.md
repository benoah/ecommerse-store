<img src="./.readme/noroff-light.png" width="160" align="right">
# Firstname:admin
# Lastname:admin
# email:admin@gmail.com
# password: Pass1234

# JavaScript 2 Course Assignment

## Brief

1. Create an API with Strapi.
2. Create a frontend to consume the API and render a website.

It doesn’t matter what kind of data this API serves (Choose your favourite subject: Sport, Food Recipes, Restaurants, Holiday hot spots etc). Your entity or product should have at least 3 custom properties (you can do as many as you like).

For instance, if you create a **Team content type**, each team might have a name, nickname and yearEstablished property and how many championships they won.

Choosing appropriate variable and function names will form part of your assessment, as will proper and consistent formatting of your code (I will subtract marks for unformatted untidy code use Prettier or Favourite code formatter).

This repository should be a mono repo and contain 2 folders backend and frontend

- **backend** folder: should have the strapi code and database inside it, do not edit the contents of this folder.
- **frontend** folder: should have your custom front end code.
- <img src="./.readme/classroomrepo.png" width="100%">

> **Level 1** is required. (You can get 10/10 if all L1 is completed correctly)

> Level 2 and Level 3 are optional.

## Level 1 Process

Build a frontend for your API and add the following:

### Homepage

- Make a **GET** request to fetch a list of resources from your API
- Create HTML for each item and display at least 3 properties for each
- Each item should also display a button or icon. Clicking on this button should toggle the item in and out of an array stored in **localStorage**
- There should be a text input on this page that filters the array of results on one of the properties

### Favourites page

- This page should fetch the array of items stored in localStorage and display them or display a message that there are no items.

- There should be a “Clear all” button that clears localStorage (or just a specific key in localStorage) and reloads the display. Don’t reload the page, just redraw the HTML.

## Level 2 Process

Add a login form to your frontend that will allow a logged in admin user to perform the following tasks

- Adding new resources to the API
- Updating resources through an edit form
- Deleting resources

## Level 3 Process

Add a registration form to your site and allow new users to register. These new users should not have the same permissions as the admin user from Level 2.

When a logged in user adds or removes an item from the favourites array, save the state of the array on the server via an API call.

When a logged in user navigates to the favourites page, the favourites array should be retrieved from the API rather than localStorage.

## Rules

- You may only use **plain JavaScript** for this assignment, no JavaScript libraries or frameworks.
- Moodle code and examples will help you complete this.
  - Copying and sharing of any public code will result in your assignment being given a mark of zero (do not copy chunks of code from stackoverflow and give each other chunks of code that was copied is what this means).
- You may use CSS libraries like Bootstrap.

## Submission

- Push all changes to Github Classroom Repository
- To Moodle submit PDF with a GitHub Repository URL inside of it. If Moodle forces you to put a ZIP, put the PDF inside the ZIP 👍 .
- No deployment is required, I will test everything on local dev.

## Time ⏰

40 hours

> Deadline: Sunday 11 October at 23:59.
