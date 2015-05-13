<div class="box bottom-0 left-0 width-24 z-index-10 border-top border-black">
    <div class="box top-0 left-0 width-24 height-24 dark-blue opacity-70 nomobile z-index--10"></div>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div class="relative width-4 left">
			<div class="width-24 padding">
            <?php if(!empty($post->post_excerpt)): ?>
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="condensed text-spacing line-height-100 width-24">
						<?php the_title(); ?>
				</a>
                <div class="small">
                	<?php the_excerpt(); ?>
                </div>
			<?php else: ?>
        		<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="condensed text-white font-size-150 line-height-100 width-24">
					<?php the_title(); ?>
				</a>
			<?php endif; ?>
            <div class="relative left width-24 padding-double nomobile"></div>
            <div class="relative left width-24 padding-double nomobile"></div>
		</div>
	</div>
<?php endwhile; ?>
	<?php else: ?>
	<div>
		<h2>No hay ningún resultado, lo siento.</h2>
	</div>
	<!-- /div -->
	<?php endif; ?>
</div>