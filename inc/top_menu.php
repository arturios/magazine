
<div class="box bottom-0 left-0 width-24 height-2em z-index-100"><figure class="text-center width-2em nogrid"><img src="<?php echo get_template_directory_uri(); ?>/images/scroll%20down.png" class="height-24 vrt"></figure></div>

<nav class="top_menu">
<ul>
<li>
<a href="<?php echo get_site_url(); ?>" class="icon-home" title="ir a la página principal">Portada</a>
</li>
<?php if (is_single()): ?>
<li><a href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="prev icon-chevron-left">Anterior</a></li>
<li><a href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="next icon-chevron-right">Siguiente</a></li>
<?php else: ?>
<?php Revista_pagination(); ?>
<?php endif; ?>	
</ul>
</nav>