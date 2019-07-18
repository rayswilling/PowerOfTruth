[![CircleCI](https://circleci.com/gh/rayswilling/PowerOfTruth.svg?style=svg)](https://circleci.com/gh/rayswilling/PowerOfTruth)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# By the Power of Truth

A mobile app that brings together different news sources from across the political spectrum in order to minimise confirmation bias.

This app has a backend server which we built and deploy using Heroku. It can be found [here](https://github.com/EdinaBMakers/PowerOfTruthServer) along with information on how to use the API.

## Setup

- Clone this repository
- Navigate into the root directory
- Run `npm install` from the command line.
- `brew install yarn`
- `yarn global add expo-cli`
- Launch the application: `yarn start`
- The brower will open. Select `Run on ios simulator`


## Testing

We use Jest to test our app. To run the full test suite,
- Run `npm test` from the project root

- To update the snapshot: `npm test -- -u`

## User Stories
```
As a user,
So that I can see varied perspectives of news,
I would like to see a list of headlines from different sources
```

```
As a user,
So that I can see how bias an article is,
I would like to see an indicator of the political bias of the news outlet
```

```
As a user,
So that I can see stories about a particular topic,
I would like to be able to search for relevant stories
```

```
As a user,
So that I can understand how the bias is determined,
I would like to see an 'about' page containing information on the bias
```

```
As a user,
So that I can see news from a particular source,
I would like to click on the source and see headlines from that source
```

```
As a user,
So that I can see news from a particular perspective,
I would like to view news by it's political Bias
```

```
As a user,
So that I can read

by the foxy-news team

Co-authored-by: lbarber729 <lbarber729@hotmail.co.uk>  
Co-authored-by: hughbric <mhughes36@live.co.uk>  
Co-authored-by: samkitchen94 <samkitchen94@gmail.com>  
Co-authored-by: EdinaBMakers <bolkeny.edina@gmail.com>  
