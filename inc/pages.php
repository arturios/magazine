<div class="navegator">
<?php if (is_single()): ?>
    <ul>
        <li><a title="Artículo anterior" href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="prev">&nbsp;</a></li>
        <li><a title="Siguiente artículo" href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="next">&nbsp;</a></li>
    </ul>
<?php else: ?>
    <?php Revista_Pages(); ?>
<?php endif; ?>
</div>