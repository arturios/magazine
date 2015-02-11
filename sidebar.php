<?php if ( is_active_sidebar( 'left-sidebar' ) ) : ?>
    <a href="#" id="m-left" class="menuopenclose waves-effect" title="Enlaces">
        <span class="mdi-navigation-arrow-forward"></span>
    </a>
    <aside id="a-left" class="blue-grey lighten-5" role="complementary">
        <?php dynamic_sidebar('left-sidebar'); ?>
    </aside>
<?php endif; ?>

<?php if ( is_active_sidebar( 'right-sidebar' ) ) : ?>
    <a href="#" id="m-right" class="menuopenclose waves-effect" title="Enlaces">
        <span class="mdi-navigation-arrow-back"></span>
    </a>
    <aside id="a-right" class="blue-grey lighten-5" role="complementary">
        <?php dynamic_sidebar('right-sidebar'); ?>
    </aside>
<?php endif; ?>