# Introduction

This is a just for pratise I have used the Angular2 and created few views like Formula1 drivers.


It is something similar to the AngularJS Quick Start but does the entire build with gulp.

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

```bash
git clone https://github.com/ravi-mone/angular2-F1.git
cd angular2-F1
npm install
# If you don't have gulp already installed
npm install -g gulp
# dev
gulp serve.dev
# prod
gulp serve.prod
```

# Directory Structure

```
.
├── app
│   ├── components
│   │   ├── about
│   │   │   ├── about.html
│   │   │   └── about.ts
│   │   └── home
│   │       ├── home.html
│   │       └── home.ts
│   ├── services
│   ├── typings
│   ├── app.css
│   ├── app.html
│   ├── app.ts
│   ├── index.html
│   └── init.ts
├── dist
│   ├── dev
│   └── prod
├── tsd_typings
├── gulpfile.js
├── package.json
├── tsconfig.json
└── tsd.json
```

# Configuration

Configure your app base if you serve the app from another directory than root in `gulpfile.js`.
Defaults to `var APP_BASE = '/'`

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim gulpfile.js
```
Add reference to the installed library in `PATH.src.lib`.

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
