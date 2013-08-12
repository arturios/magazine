<?php get_header(); ?>
<article <?php post_class(); ?>>
<div id="fontsize">8.25</div>
<section tabindex="0" class="white text-white text-stroke">
<figure class="frame grid">
<img src="<?php echo get_header_image(); ?>" class="hrt full" alt="portada" />
</figure>
<div class="box bottom-0 left-0 width-12 height-4 nomobile">
<img src="<?php echo get_template_directory_uri(); ?>/images/logotipo.png" class="vrt" alt="logo" />
</div>
<header class="relative top-0 left-0 z-index-10 padding-bottom">

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

</header>

<div class="relative left-0 width-24 overflow-y z-index-10">
<?php get_template_part('loop'); ?>
</div>

</section>
</article>
</div>
<?php get_footer(); ?>
