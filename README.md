# Vue.js with Typescript (tslint too), babel.js and Webpack

# Add testing
# Add continuous integration
# Create Yeoman configuration (e.g. create component etc)

# Typings
# Sinon
# Mocha
# Chai
# Instanbul 
# vue-ui (semantic ui) http://vueui.github.io/

# By Vue.js creator
https://github.com/AbeHaruhiko/vue-webpack-typescript


Type definitions

If you are using Typescript, I imagine you’ll need the type definitions from the libraries you’re using. I’m using TSD to manage those. I won’t get into the details, but TSD is an easy way to query, install and maintain those type definitions.

To use it, you have to install it globally using node. With tsd installed we can install the types with the commands:

tsd init
tsd install mocha chai sinon -s

https://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack/

https://gist.github.com/SeanJM/263f9dda94ed6e9bf4323bd0b136de73
It should be noted, that even though webpack will take in the entry point and the application will compile without errors, linting the code will throw warnings about the --jsx flag missing unless the entry point is supplied in the tsconfig.json.