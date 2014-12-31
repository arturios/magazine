<div class="menuopenclose" title="Menú"><span class="menuicon"></span></div>
<nav role="navigation">
<p class="padding">Menú</p>
<div class="menu">
<form action="<?php bloginfo('siteurl'); ?>" id="searchform" method="get" role="search">
<input type="text" name="s" placeholder="Buscar por..." class="text-input" id="s" value="" tabindex="3" />
<div class="input-icon fa-search"></div>
</form>
</div>
<div class="menu">
    <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
<?php if (is_single()): ?>
    <ul>
        <li><a href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="prev">Artículo anterior</a></li>
        <li><a href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="next">Siguiente artículo</a></li>
    </ul>
<?php else: ?>
    <?php Revista_pagination(); ?>
<?php endif; ?>

<?php include (TEMPLATEPATH . '/inc/social.php' ); ?>
</div>
</nav>
