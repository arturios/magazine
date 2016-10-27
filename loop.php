<div class="box bottom-0 left-0 width-24 z-index-10 border-top border-black padding">
	<div class="frame darkgray opacity-70 nomobile z-index--10"></div>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<div class="width-4 float-left padding-left padding waves-effect line-height-100 text-white small">
		<h3 class="condensed text-spacing"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a></h3>
		<?php if(!empty($post->post_excerpt)): ?>
		<h4>
			<?php the_excerpt(); ?>
		</h4>
		<?php endif; ?>
	</div>
	<?php endwhile; ?>
	<?php else: ?>
	<div class="box top-10 left-1 width-22">
		<h3 class="text-center">No hay ningún resultado, lo siento.</h3>
	</div>
	<?php endif; ?>
	<div class="clear width-24 padding nomobile">&nbsp;</div>
</div>