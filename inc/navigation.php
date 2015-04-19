<nav id="navigation" role="navigation">
	<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
	<a href="#" data-activates="mobile" class="button-collapse" role="menuitem"><i class="mdi-navigation-menu"></i></a>
	<?php endif; ?>

	<?php if (is_single()): ?>
	<a title="Artículo anterior" href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="prev page-numbers waves-effect waves-light" role="prev"><span class="mdi-navigation-chevron-left"></span></a>
	<a title="Siguiente artículo" href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="next page-numbers waves-effect waves-light" role="next"><span class="mdi-navigation-chevron-right"></span></a>
	<?php else: ?>
	<?php Revista_pagination(); ?>
	<?php endif; ?>
</nav>