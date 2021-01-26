module.exports = () =>
  $.g.task('fonts', () =>
  console.log($.gp.ttf2woff()),
    $.g.src($.path.src.fonts)
      .pipe($.gp.ttf2woff())
      .pipe($.g.dest($.path.build.fonts)).on('end', $.bs.reload))


