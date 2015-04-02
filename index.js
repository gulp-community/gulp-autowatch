function gulp4(gulp, paths) {
  Object.keys(gulp._registry._tasks).forEach(function(taskName){
    var glob = paths[taskName];
    if (!glob) return;
    gulp.watch(glob, gulp.parallel(taskName));
  });
}

function gulp3(gulp, paths) {
  Object.keys(gulp.tasks).forEach(function(taskName){
    var glob = paths[taskName];
    if (!glob) return;
    gulp.watch(glob, [taskName]);
  });
}

module.exports = function(gulp, paths) {
  var isGulp4 = !!gulp._registry;
  if (isGulp4) {
    return gulp4(gulp, paths);
  }
  return gulp3(gulp, paths);
};