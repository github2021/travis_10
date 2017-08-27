module.exports = function(config) {
  config.set({
  //  browsers: ['Chrome'],
    browsers: ['Firefox'],
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js',
      'src/**/*.anal.js'
//      'test/**/*.spec.js'
    ]
  });
};