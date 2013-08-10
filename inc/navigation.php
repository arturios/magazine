<!-- nav -->
<nav id="site-navigation" class="navigation main-navigation" role="navigation">
	<!-- Pagination -->
	<span id="pagination">
	<?php if (is_single()): ?>
		<span><a href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="prev icon-chevron-left"></a></span><span class="text-black"> <?php echo get_the_title(); ?> </span>
		<span><a href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="next icon-chevron-right"></a></span>
	<?php else: ?>
		<?php Revista_pagination(); ?>
	<?php endif; ?>	
	</span>
	<!-- /Pagination -->
</nav>
<!-- /nav -->