<nav role="navigation">
<ul>
<li>
<a href="<?php echo get_site_url(); ?>" class="icon-home" title="ir a la portada de la revista">Portada</a>
</li>
<!-- -->
<li><a href="#" class="icon-group">Quienes somos</a></li>
<li><a href="#" class="icon-location-arrow">Principal</a></li>
<!-- -->
<?php if (is_single()): ?>
<li><a href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="prev icon-chevron-left">Anterior</a></li>
<li><a href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="next icon-chevron-right">Siguiente</a></li>
<?php else: ?>
<?php Revista_pagination(); ?>
<?php endif; ?>
</ul>
</nav>