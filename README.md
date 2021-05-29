# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### cd godaddy-technical 

In order to run the below commands you will Node.JS or Yarn installed and you will need to open your terminal on your computer --Linux or windows--  and that will allow you to run the following commands. if these commands also then dont work then it is likely you dont have a system such as Node.js or Yarn and so will need to install one. 

## Available Scripts

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
There are 3 tests in this project. A test for Home which makes sure the component that generates each blog is being rendered, A test for that component to ensure that if nothing is passed to the map the project wont work so I can be sure during run time the data is being fetched, And an App.js test which makes sure repositories are displayed. 


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Libraries used

For this project only a few extra libraries have been installed and for specific reasons. 

## sass

Sass was installed to be able to use SCSS. I find Scss alot nicer and easier to use than base css as it has alot more functionality built in already without the need to add further plugins. Thisi means I could already have animations and decorators without having to keep installing additional libraries. 

## enzyme

Enzyme is a library I almost always install to help with automated testing. The Shallow command specifically allows access to: Props, State and HTML of a page meaning I can be sure certain components are being called and rendered or re-rendered. It also allows me to render a page to check for errors and be sure for example the map component shows an error when there is nothing passed to it. 

## Colour choices

I chose a rather common colour scheme of Black and white for this project because those are the colours of GitHub on there website. I thought since this was getting Github repositories a matching colour scheme would make sense. An alternative colour scheme I thought about was using GoDaddys colour scheme as it is there repositories. 

## Ommited content

If there was enough time I would of loved to have gotten an image of each repository in action so I could of placed it as the background for each individual repository in the grid. I feel this would have made a much nicer viewing experience. 