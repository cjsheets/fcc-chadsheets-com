# FreeCodeCamp - Project Landing Site

## Overview

This site contains projects I completed over the course of the Free Code Camp cirriculum.

![](assets/img/site-screenshot.jpg?raw=true)

The site is statically compiled using Jekyll and npm. NPM dependencies are required in production 
so either setup a hook to pull them or move the files referenced in `Gruntfile.js` and `main.css` 
from /node_modules/ to /assets/.


## Install

First ensure Jekyll and bundler are installed:

```
gem install jekyll bundler

```

Clone this repository and install ruby and npm dependencies:

```
git clone git@github.com:cjsheets/fcc.chadsheets.com.git
cd fcc.chadsheets.com
bundle install
npm install
```

## Run

Use Grunt to monitor javascript for changes:

```
grunt -v dev
```

For Jekyll development, simply run:

```
bundle exec jekyll serve
```

Navigate to `http://localhost:4000`



## Technology Stack

See linked repositories for app-specific technology stacks. Some use Angular, others React.
Some rely on Node and others are hosted on PaaS providers.

This package contains:

| Front-End | Back-End |
| ------- | ------- |
| Jekyll | Nginx |
| Bootstrap | npm |
| HTML5/SCSS | Cloudflare |
| Grunt | Formspree |
 
### To-Do:

* add libraries used in code

### License

MIT License


[![Analytics](https://cjs-beacon.appspot.com/UA-10006093-3/github/cjsheets/fcc-chadsheets-com?pixel)](https://github.com/cjsheets/fcc-chadsheets-com)
