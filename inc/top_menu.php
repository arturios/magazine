<nav class="top_menu">
<div id="titulo" class="float-left max-width-12 ultrafina text-white text-stroke font-size-50 padding-title opacity-70"><?php if (is_home() || is_front_page()) { echo bloginfo('name'); } else { echo wp_title(''); } ?></div>
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
