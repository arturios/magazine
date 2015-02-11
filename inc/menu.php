<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
	<nav id="menu" class="nav-wrapper blue-grey darken-4">
		<a href="<?php echo site_url(); ?>" class="brand-logo" id="logo-container">
		  <h2 style="color:#fff;font-size:24px;" class="site-title"><?php $blog_title = get_bloginfo('name'); echo $blog_title; ?></h2>
		</a>

		<?php wp_nav_menu(array('theme_location' => 'header-menu')); ?>
		<a class="button-collapse" href="#" data-activates="menu-header-menu"><i class="mdi-navigation-menu"></i></a>
	</nav>
<?php endif; ?>
