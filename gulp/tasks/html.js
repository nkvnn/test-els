module.exports = () =>
  $.g.task('html', () =>
    $.g.src($.path.src.html)
      .pipe($.gp.include())
      .pipe($.gp.pug({
        pretty: true}))
      .pipe($.g.dest($.path.build.html))
      .on('end', $.bs.reload))

