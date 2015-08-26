<?php include (TEMPLATEPATH . '/inc/header2.php' ); ?>
<div id="portada" class="box top-0 left-0 width-24 height-16 table">
	<div class="v-center text-center">
<h1 class="condensed text-shadow font-size-600"><?php bloginfo('name'); ?></h1>
<br />
<h2><span class="text-center border border-white padding text-shadow sans font-size-75"><?php bloginfo('description'); ?></span></h2>
	<cite class="box right-0 top-1 text-shadow text-yellow padding condensed"><?php the_time("F"); ?> de <?php the_time("Y"); ?>&nbsp;</cite>
	</div>
</div>
</figure>


<?php get_template_part('loop'); ?>
</section>
</article>
<?php get_footer(); ?>