module.exports = function(gulp, paths) {
  Object.keys(gulp.tasks).forEach(function(taskName){
    var glob = paths[taskName];
    if (!glob) return;
    gulp.watch(glob, [taskName]);
  });
};