<?php get_header(); ?>
<article <?php post_class(); ?>>
<div id="fontsize">8.25</div>
<section class="white text-white text-stroke ">
<figure class="frame grid">
<img src="<?php echo get_header_image(); ?>" class="hrt full" alt="portada" />
</figure>
<div class="box bottom-0 left-0 width-12 height-4 nomobile">
<img src="<?php echo get_template_directory_uri(); ?>/images/logotipo.png" class="vrt" alt="logo" />
</div>
<header class="relative top-0 left-0 z-index-10 padding-bottom">
<h1 class="condensed font-size-600 no-padding line-height-100 text-3d">Resultados de&nbsp;</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top">tu búsqueda</h2>
</header>
<div class="relative left-0 width-24 overflow-y z-index-10">
<?php get_template_part('loop'); ?>
</div>
</section>
</article>
</div>
<?php get_footer(); ?>