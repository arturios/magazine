<?php get_header(); ?>
	<article class="zoomIn"role="main">    
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<?php the_content(); // Dynamic Content ?>    
 		<?php endwhile; ?>
 	 	<?php else: ?>
 		 	<section tabindex="0" class="" role="article">
   		 		<h1><?php _e( 'Vaya, no hay nada que enseñar.', 'SoyNudistaBase' ); ?></h1>
   		  	</section>
	 	<?php endif; ?> 
        <?php get_sidebar(); ?>
  	</article>
<?php get_footer(); ?>