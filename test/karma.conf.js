module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/es6-promise/dist/es6-promise.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/upgrade.dev.js',
        'node_modules/angular2/bundles/http.dev.js',
        'node_modules/angular2/bundles/testing.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        /**/
        'test/karma_test_shim.js',
        {pattern: 'app/js/**/*.js', included: false, watched: true},
        {pattern: 'test/unit/**/*.js', included: false, watched: true},
        {pattern: 'app/js/**/*.html', included: false, watched: true}
    ],
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/js": "/base/app/js"
    },
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};