<?php if ( is_active_sidebar( 'left-sidebar' ) ) : ?>
	<a href="#" id="m-left" class="menuopenclose" title="Enlaces" role="menuitem">
		<i class="material-icons">menu</i>
	</a>

    <aside id="a-left" role="complementary">
        <?php dynamic_sidebar('left-sidebar'); ?>
    </aside>
<?php endif; ?>

<?php if ( is_active_sidebar( 'right-sidebar' ) ) : ?>
	<a href="#" id="m-right" class="menuopenclose" title="Enlaces" role="menuitem">
		<i class="material-icons">menu</i>
	</a>

    <aside id="a-right" role="complementary">
        <?php dynamic_sidebar('right-sidebar'); ?>
    </aside>
<?php endif; ?>