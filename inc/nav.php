<!-- nav -->
<nav id="site-navigation" class="navigation main-navigation" role="navigation">
	<!-- Pagination -->
	<span id="pagination">
		<span><a href="<?php echo get_permalink(get_adjacent_post(false,'',true)); ?>" class="prev">&laquo; Anterior</a></span><span class="text-black"> <?php echo get_the_title(); ?> </span>
		<span><a href="<?php echo get_permalink(get_adjacent_post(false,'',false)); ?>" class="next">Siguiente &raquo;</a></span>
	</span>
	<!-- /Pagination -->
</nav>
<!-- /nav -->
