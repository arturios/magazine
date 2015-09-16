<nav id="navigation" role="navigation">
	<?php if (is_single()): ?>
	<a title="Artículo anterior" href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="prev page-numbers waves-effect" role="prev"><i class="material-icons">chevron_left</i></a>
	<a title="Siguiente artículo" href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="next page-numbers waves-effect" role="next"><i class="material-icons">chevron_right</i></a>
	<?php else: ?>
	<?php Revista_pagination(); ?>
	<?php endif; ?>
</nav>