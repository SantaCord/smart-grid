var gulp = 	require('gulp'),
	less	= require('gulp-less'),
	sync 	= require('browser-sync');

gulp.task('less', function() {
	return gulp.src('src/less/**/*.less')
		.pipe(less())
		.pipe(gulp.dest('src/css'));
});

gulp.task('sync', function() {
	sync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('watch', ['sync', 'less'], function() {
    gulp.watch('src/less/**/*.less', ['less']);
});