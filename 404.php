<?php get_header(); ?>
<article <?php post_class(); ?>>
<div id="fontsize">8.25</div>
<section tabindex="0" class="white text-white text-stroke ">
<figure class="frame grid">
<img src="<?php echo get_header_image(); ?>" class="hrt full" alt="portada" />
</figure>
<div class="box bottom-0 left-0 width-12 height-4 nomobile">
<img src="<?php echo get_template_directory_uri(); ?>/images/logotipo.png" class="vrt" alt="logo" />
</div>
<header class="box top-0 left-0 z-index-10 padding-bottom">
<h1 class="condensed font-size-900 no-padding line-height-100 text-spacing">ERROR: 404</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top">Contenido no encontrado</h2>
</header>
<div id="loop" class="box top-12 left-0 width-24">
<h3 class="text-center font-size-300">Prueba a ir a la p&aacute;gina <a href="<?php echo get_site_url(); ?>">principal</a></h3>
</div>
</section>
</article>
</div>
<?php get_footer(); ?>