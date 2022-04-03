# College Search

The app allows you to to search for colleges by name. The results are rendered on GoogleMap with silver theme, with a tooltip over each location marker. Tooltip contain college name information

The app uses Material UI as a design library, Google Maps for map rendering and React Context API to communicate data between components. Current unit tests coverage is ~53%. Prettier and linter have been added to the app as well

## To start the app locally:

1. Clone this repo
2. Add your college scorecard and google maps API keys to `.env` file. **The app will not work properly if keys are not provided**. You should do this step before starting the app, otherwise you'll need restart the app
3. Run `yarn start` to start the app

## Other Available Scripts

In the project directory, you can run:

##### `yarn lint`

Runs the linter

##### `yarn test`

Launches the test runner in the interactive watch mode.

## App Screenshot and Unit test coverage report:

![App Screenshot](src/assets/app_screenshot.png?raw=true 'App Screenshot')

![Unit tests coverage](src/assets/unit_tests_coverage.png?raw=true 'Unit Tests Coverage')
