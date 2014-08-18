<?php include (TEMPLATEPATH . '/inc/header2.php' ); ?>
<h1 class="serif font-size-900 no-padding line-height-100 text-3d"><?php bloginfo('name'); ?></h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top sans"><?php bloginfo('description'); ?>&nbsp;<span class="box right-0 bottom-0 small"><small class="padding-right"><?php the_time("F"); ?> de <?php the_time("Y"); ?></small></span></h2>
</div>
<div class="relative left-0 width-24 overflow-y z-index-10">
<?php get_template_part('loop'); ?>
</div>
</section>
<div id="fontsize">8.25</div>
<?php get_sidebar(); ?>
</article>
</div>
<?php get_footer(); ?>