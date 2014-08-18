<?php include (TEMPLATEPATH . '/inc/header2.php' ); ?>
<h1 class="condensed font-size-600 no-padding line-height-100 text-3d">Resultados de&nbsp;</h1>
<br />
<h2 class="box bottom-0 left-0 width-24 font-size-200 text-yellow padding-top">tu búsqueda</h2>
</div>
<div class="relative left-0 width-24 overflow-y z-index-10" role="article">
<?php get_template_part('loop'); ?>
</div>
</section>
<div id="fontsize">8.25</div>
<?php get_sidebar(); ?>
</article>
<?php get_footer(); ?>