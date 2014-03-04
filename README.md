# gulp-autowatch [![NPM version][npm-image]][npm-url] [![Dependency Status][david-image]][david-url]


## Information

<table>
<tr> 
<td>Package</td><td>gulp-autowatch</td>
</tr>
<tr>
<td>Description</td>
<td>Sugar for reusing a paths object to watch and run gulp tasks</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
</table>

## Usage

```javascript
var gulp = require('gulp');
var autowatch = require('gulp-autowatch');

// key = task name to run
// value = glob or array of globs to watch
var paths = {
  vendor: './client/vendor/**/*',
  coffee: './client/**/*.coffee',
  jsx: './client/**/*.jsx',
  stylus: './client/**/*.styl',
  html: './client/**/*.html',
  config: './server/config/*.json'
};

gulp.task('watch', function(cb) {
  autowatch(gulp, paths);
  return cb();
});

```

[npm-url]: https://npmjs.org/package/gulp-autowatch
[npm-image]: https://badge.fury.io/js/gulp-autowatch.png

[depstat-url]: https://david-dm.org/wearefractal/gulp-autowatch
[depstat-image]: https://david-dm.org/wearefractal/gulp-autowatch.png

[david-url]: https://david-dm.org/wearefractal/gulp-autowatch
[david-image]: https://david-dm.org/wearefractal/gulp-autowatch.png?theme=shields.io