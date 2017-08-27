module.exports = function(config) {
  config.set({
  //  browsers: ['Chrome'],
    //browsers: ['Firefox'],
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'src/**/*.anal.js'
//      'test/**/*.spec.js'
    ]
  });
};