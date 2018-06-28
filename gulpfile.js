var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require('child_process');
var _ = require('lodash');
var fs = require('fs-extra');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build --incremental'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( 'jekyll' , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Jekyll build once
 */
gulp.task('jekyll-build-sync', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.execSync( 'jekyll build')
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['*.html', '_layouts/*.html', '_posts/**', 'assets/**/*.css', 'assets/**/*.scss'], ['generate-tags', 'jekyll-rebuild', 'generate-tags']);
});

gulp.task('generate-tags', function() {
    var tags = require('./_site/tags/tags.json');
    fs.mkdirSync('tags_tmp');
    fs.copyFileSync('tags/tags.json', 'tags_tmp/tags.json');
    fs.removeSync('tags');
    fs.moveSync('tags_tmp', 'tags');

    _.forEach(tags.tags, tag => {
        if (!fs.existsSync(`tags/${tag}`)) {
            fs.mkdirpSync(`tags/${tag}`);
            var stream = fs.createWriteStream(`tags/${tag}/index.md`);
            stream.once('open', function(fd) {
                stream.write('---\n');
                stream.write('layout: tag_index\n');
                stream.write(`tag: ${tag}\n`);
                stream.write('---');
                stream.end();
            });
        }
    });
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['jekyll-build-sync', 'generate-tags', 'browser-sync', 'watch', ]);