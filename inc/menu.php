<?php if ( has_nav_menu( 'header-menu' ) ) : ?>
<a href="#" class="button-collapse"><i class="material-icons">menu</i></a>
<menu role="menu">
	<ul id="header-menu" class="nav-menu">
	<?php if (is_single()): ?>
        <li><a title="Siguiente artículo" href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="prev" role="prev"><i class="material-icons font-size-150 line-height-70">chevron_left</i></a></li>
        <li><a title="Artículo anterior" href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="next" role="next"><i class="material-icons font-size-150 line-height-70">chevron_right</i></a></li>
    <?php endif; ?>
		<?php wp_nav_menu(array( 'theme_location'=> 'header-menu', 'container' => '', 'menu_class' => 'nav-menu', 'menu_id' => 'header-menu', 'items_wrap' => '%3$s')); ?>
	</ul>
</menu>
<?php endif; ?>