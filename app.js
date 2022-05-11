//npm - global command, comes with node
//npm --version or npm -v checks the version installed

//local dependency - package only used in this particular project
//npm i <packageName> -installs specified package

//global dependency - package can be used in any project
//npm install -g <packageName>
//sudo install -g <packageName> (used on mac)

//package.json -manifest file (stores important info about our project/package)///
//There are 3 ways to create package.json//
//manual approach (creates package.json in the root, create propertis etc)
//npm init (step by step, press enter to skip)
//npm init -y(everythings default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)