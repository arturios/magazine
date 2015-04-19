<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
<nav class='nav-wrapper' role="menu">
	<?php wp_nav_menu(array( 'theme_location'=> 'header-menu', 'container' => '', 'menu_class' => 'right hide-on-small-and-down', 'menu_id' => 'desktop' )); ?>
	<?php wp_nav_menu(array( 'theme_location'=> 'header-menu', 'container' => '', 'menu_class' => 'side-nav', 'menu_id' => 'mobile' )); ?>
</nav>
<?php endif; ?>