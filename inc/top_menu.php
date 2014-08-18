<nav role="navigation">

<?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>

<?php if (is_single()): ?>
    <ul>
        <li><a href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="prev">&lt;</a></li>
        <li><a href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="next">&gt;</a></li>
    </ul>
<?php else: ?>
    <?php Revista_pagination(); ?>
<?php endif; ?>
</nav>