<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
<a href="#" class="button-collapse" role="menuitem"><i class="material-icons">menu</i></a>
<menu role="menu">
	<?php wp_nav_menu(array( 'theme_location'=> 'header-menu', 'container' => '', 'menu_class' => 'nav-menu', 'menu_id' => 'header-menu' )); ?>
</menu>
<?php endif; ?>