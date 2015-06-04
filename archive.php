<?php include (TEMPLATEPATH . '/inc/header2.php' ); ?>
<div class="box top-0 left-0 width-24 height-16 table">
	<div class="v-center text-center">
<?php /* If this is a category archive */ if (is_category()) { ?>
<h1 class="condensed font-size-600 text-shadow">Artículos de… &nbsp;</h1>
<br />
<h2 class="relative left-8 width-8 padding border border-white"> &#8216;<?php single_cat_title(); ?>&#8217;<span class="frame nomobile blue-grey darken-3 opacity-50 z-index--10"></span></h2>

<?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
<h1 class="condensed font-size-600 text-shadow">Artículos etiquetados&nbsp;</h1>
<br />
<h2 class="relative left-8 width-8 padding border border-white">Como &#8216;<?php single_tag_title(); ?>&#8217;<span class="frame nomobile blue-grey darken-3 opacity-50 z-index--10"></span></h2>

<?php /* If this is a daily archive */ } elseif (is_day()) { ?>
<h1 class="condensed font-size-600 text-shadow">Artículos del día</h1>
<br />
<h2 class="relative left-8 width-8 padding border border-white"><?php the_time("j"); ?> de <?php the_time("F"); ?> de <?php the_time("Y"); ?><span class="frame nomobile blue-grey darken-3 opacity-50 z-index--10"></span></h2>

<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
<h1 class="condensed font-size-600 text-shadow">Artículos del mes</h1>
<br />
<h2 class="relative left-8 width-8 padding border border-white"><?php the_time("F"); ?> de <?php the_time("Y"); ?><span class="frame nomobile blue-grey darken-3 opacity-50 z-index--10"></span></h2>

<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
<h1 class="condensed font-size-600 text-shadow">Artículos del año</h1>
<br />
<h2 class="relative left-8 width-8 padding border border-white"><?php the_time('Y'); ?><span class="frame nomobile blue-grey darken-3 opacity-50 z-index--10"></span></h2>

<?php /* If this is an author archive */ } elseif (is_author()) { ?>
<h1 class="condensed font-size-600 text-shadow">Artículos</h1>

<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>

<?php } ?>

	</div>
</div>


<?php get_template_part('loop'); ?>
</section>
</article>
<?php get_footer(); ?>