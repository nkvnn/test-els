module.exports = () =>
  $.g.task('img', () =>
    $.g.src($.path.src.img)
      .pipe($.gp.webp())
      .pipe($.g.dest($.path.build.img)).on('end', $.bs.reload))
