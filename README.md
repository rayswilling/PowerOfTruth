[![CircleCI](https://circleci.com/gh/rayswilling/PowerOfTruth.svg?style=svg)](https://circleci.com/gh/rayswilling/PowerOfTruth)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# By the Power of Truth

A mobile app that brings together different news sources from across the political spectrum in order to minimise confirmation bias.

This app has a backend server which we built and deploy using Heroku. It can be found [here](https://github.com/EdinaBMakers/PowerOfTruthServer) along with information on how to use the API.

## Documentation

We created a [wiki](https://github.com/rayswilling/PowerOfTruth/wiki) page which has notes from all our stand ups and retros. We used [trello](https://trello.com/b/RDFMIatH/foxy-news) to assign tasks.   

## Setup

- Clone this repository
- Navigate into the root directory
- Run `npm install` from the command line.
- `brew install yarn`
- `yarn global add expo-cli`
- Launch the application: `yarn start`
- The browser will open. Select `Run on ios simulator`


## Testing

We use Jest to test our app. To run the full test suite,
- Run `npm test` from the project root

- To update the snapshot: `npm test -- -u`

## User Stories
These were the user stories that were implemented in the timeframe given for this project. These include the user stories for the Minimum Viable Product as well as some of the additional features we managed to fit in. The 'Nice to Have' section below contains the user stories that we would have liked to fit in had we had more time.

```
As a user,
So that I can see varied perspectives of news,
I would like to see a list of headlines from different sources
```

```
As a user,
So that I can see stories about a particular topic,
I would like to be able to search by keyword for relevant stories
```

```
As a user,
So that I can see how bias an article is,
I would like to see an indicator of the political bias of the news outlet
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
So that I can learn more after seeing a headline,
I would like to touch the headline and for the full article to open
```

## Nice to Haves
```
As a user,
So that I can see how all sides of the political spectrum are reporting on a topic,
I would like to be able to click on particular news topics and see a full spectrum of that topic
```

```
As a user,
So that I can share my view,
I would like to be able to vote on whether an article is biased or factual
```

```
As a user,
So that I can see the community's opinions,
I would like to be able to see if others believe an article is biased or factual
```

```
As a user,
So that I can make an educated judgement on the authenticity of an article,
I would like to know the likelihood of an article being bias
```

For this final user story we had planned to use the SummarizeBot API, which uses machine learning to analyse individual articles to provide an estimation on how likely an article is to be biased or trustworthy.

---

#### By the foxy-news team

Co-authored-by: lbarber729 <lbarber729@hotmail.co.uk>  

Co-authored-by: hughbric <mhughes36@live.co.uk>  

Co-authored-by: samkitchen94 <samkitchen94@gmail.com>  

Co-authored-by: EdinaBMakers <bolkeny.edina@gmail.com>

Co-authored-by: LisaMcCormack <lisamccormack85@gmail.com>

Co-authored-by: rayswilling <swillingray@gmail.com>
