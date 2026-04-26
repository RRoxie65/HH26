# FareCity?

## Track

Staten Island-Transportation and Community

## Inspiration

Originally, we were looking at crime around MTA subways and buses, but while looking at the datasets, we noticed that a lot of crimes were misdemeanors and were not specific enough to what that crime actually was. It made us think, which of these crimes are just fare evasion?

From there, we decided to plot out fare evasion by subway lines on a map. However, this fare evasion data is based off of NYPD reports. Therefore, it brings into question: Are there more people committing fare evading this station or is there more police presence in this station? We encourage users to explore their neighborhood and their own stations to think about that question and what it means to their community.

## What it does

It is a website where the user can interact with a map, and then a station and a train associated with that station and find out details of fare evasion in that station.

## How we built it

We cleaned data using Excel and ArcGIS, and used that to create a map in R, which is then converted into a Leaflet.js map due to R's built-in function. We have a React frontend that has this map, along with other data we did some analysis on in Pandas.

## Challenges we ran into

The NYPD Fare Evasion Reports data was very messy. It had three different attributes in one column (borough/station name/line), old names for some stations, wrong lines at a station, no column with the unique station ID, and more. They also had a row with total by station name, but grouped their counts under lines, even if those lines were 1.5~ miles apart (ex. F/G Church Ave. and 2/5 Church Ave.), which didn't serve our use case. Overall, because of this we had to spend a lot of time cleaning this data and checking it with other sources.

## Accomplishments that we're proud of

Cleaning the data was one of our biggest accomplishments. We were working with a big data set and unfortunately, it was a huge mess. In order to quickly clean through the data, we all took a borough and manually went through its station data so at the end in could be merged. This process took some time, but it was very rewarding joining the data together.

## What we learned

Throughout this project I learned the importance of team building. We learned how to brainstorm together and support each other when anyone was facing a challenge. We also learned a lot about web development. In this time crunch, we did a lot of research learning how to used React as our main framework and how to make our website very presentable. This hackathon has exposed us to the meaning of teamwork and the importance of having an open mind in computer science.

## What's next for FareCity?

We hope that in the future we can access missing data from subway stations that were not present in the current data set and add it to our app.

## How to Install

`cd hunter-hacks-app`
`npm install`
`npm start`
