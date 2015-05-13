<?php include (TEMPLATEPATH . '/inc/header2.php' ); ?>
<div class="box top-0 left-0 width-24 height-16 table">
	<div class="v-center text-center">
<h1 class="condensed font-size-900 text-shadow"><?php bloginfo('name'); ?></h1>
<br />
<h2 class="relative left-8 width-8 padding border border-white"><?php bloginfo('description'); ?><span class="frame nomobile blue-grey darken-3 opacity-50 z-index--10"></span></h2>
	<p class="box right-0 top-1 padding text-stroke padding-left"><?php the_time("F"); ?> de <?php the_time("Y"); ?></p>
	</div>
</div>


<?php get_template_part('loop'); ?>
</section>
<style type="text/css">article{font-size:90%}</style>
</article>
<?php get_footer(); ?>