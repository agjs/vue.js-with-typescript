# Vue.js with Typescript (tslint too), babel.js and Webpack



npm i --save vue typescript 

npm i --save-dev @types/core-js ts-loader webpack babel babel-core babel-loader babel-plugin-syntax-jsx babel-plugin-transform-es2015-modules-commonjs babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props


https://github.com/wbuchwalter/tslint-loader


https://gist.github.com/SeanJM/263f9dda94ed6e9bf4323bd0b136de73
It should be noted, that even though webpack will take in the entry point and the application will compile without errors, linting the code will throw warnings about the --jsx flag missing unless the entry point is supplied in the tsconfig.json.