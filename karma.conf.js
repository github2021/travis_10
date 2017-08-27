module.exports = function(config) {
  config.set({
  //  browsers: ['Chrome'],
    //browsers: ['Firefox'],
    //browsers: ['PhantomJS'],
    //browsers: ['phantomjs'],
    browsers: ['Firefox'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'src/**/*.anal.js'
//      'test/**/*.spec.js'
    ]
  });
};