module.exports = function(config) {
  config.set({
  //  browsers: ['Chrome'],
    //browsers: ['Firefox'],
    //browsers: ['PhantomJS'],
    browsers: ['phantomjs'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'src/**/*.anal.js'
//      'test/**/*.spec.js'
    ]
  });
};