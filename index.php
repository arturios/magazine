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
<h1 class="serif font-size-900 no-padding line-height-100 text-3d"><?php bloginfo('name'); ?></h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top sans"><?php bloginfo('description'); ?>&nbsp;<span class="box right-0 bottom-0 small"><small class="padding-right"><?php setlocale(LC_ALL,"es_ES"); echo strftime("%B de %Y"); ?></small></span></h2>
</header>
<div class="relative left-0 width-24 overflow-y z-index-10">
<?php get_template_part('loop'); ?>
</div>
</section>
</article>
</div>
<?php get_footer(); ?>