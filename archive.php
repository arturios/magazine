<?php include (TEMPLATEPATH . '/inc/header2.php' ); ?>
<?php /* If this is a category archive */ if (is_category()) { ?>
<h1 class="condensed font-size-900 no-padding line-height-100 text-3d">Artículos de… &nbsp;</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top"> &#8216;<?php single_cat_title(); ?>&#8217;</h2>

<?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
<h1 class="condensed font-size-900 no-padding line-height-100 text-3d">Artículos etiquetados&nbsp;</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top">Como &#8216;<?php single_tag_title(); ?>&#8217;</h2>

<?php /* If this is a daily archive */ } elseif (is_day()) { ?>
<h1 class="condensed font-size-900 no-padding line-height-100 text-3d">Artículos del día</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top text-right"><?php the_time("j"); ?> de <?php the_time("F"); ?> de <?php the_time("Y"); ?></h2>

<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
<h1 class="condensed font-size-900 no-padding line-height-100 text-3d">Artículos del mes</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top text-right"><?php the_time("F"); ?> de <?php the_time("Y"); ?></h2>

<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
<h1 class="condensed font-size-900 no-padding line-height-100 text-3d">Artículos del año</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top text-right"><?php the_time('Y'); ?></h2>

<?php /* If this is an author archive */ } elseif (is_author()) { ?>
<h1 class="condensed font-size-900 no-padding line-height-100 text-3d">Artículos</h1>

<?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>

<?php } ?>

</div>

<div class="relative left-0 width-24 overflow-y z-index-10" role="article">
<?php get_template_part('loop'); ?>
</div>

</article>
<div id="fontsize">8.25</div>
<?php get_sidebar(); ?>
</section>
<?php get_footer(); ?>
