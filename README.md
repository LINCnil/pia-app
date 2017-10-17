# PIA Electron Application

## Installation

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

__First you need to build the angular application and copy the `dist` directory to the root of the PIA Electron Application.__

From your command line:

```bash
npm install -g electron
# Clone this repository
git clone https://github.com/atnos/pia-app
# Go into the repository
cd pia-app
# Install dependencies (You can use YARN instead of npm install)
npm install
# Run the app
npm start
```

## For distribution

Install electron-packager:

`npm install -g electron-packager`

Build with the command:

For MacOs users
`npm run package-mac`

For GNU/Linux users
`npm run package-linux`

For Windows users
`npm run package-win`

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
