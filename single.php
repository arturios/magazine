<?php get_header(); ?>
<!--	<article id="post-<?php the_ID(); ?>" class="zoomIn" role="main"> --> 
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<?php the_content(); // Dynamic Content ?>    
			<?php comments_template(); ?>
 		<?php endwhile; ?>
 	 	<?php else: ?>
 		 	<article tabindex="0" class="">
   		 		<h1><?php _e( 'Vaya, no hay nada que enseñar.', 'SoyNudistaBase' ); ?></h1>
   		  	</article>
	 	<?php endif; ?> 
<!--  	</article> -->
<?php get_footer(); ?>