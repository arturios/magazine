<div class="padding">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <div class="relative width-24">
            <?php if(!empty($post->post_excerpt)): ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="left-1 float-left width-9">
                    <h2 class="no-padding padding-top text-left text-blue font-size-150 condensed text-spacing loop"><?php the_title(); ?></h2>
                    <div class="width-20 line-height-110 padding-bottom serif">
                        <?php the_excerpt(); ?>
                    </div>
                </a>
            <?php else: ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="left-1 float-left width-11">
                    <h2 class="no-padding text-left loop font-size-250 condensed text-white sans line-height-120 padding-top"><?php the_title(); ?></h2>
                </a>
            <?php endif; ?>
            <?php the_post(); ?>
            <?php if(!empty($post->post_excerpt)): ?>
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="right-1 float-right width-9">
                <h2 class="no-padding text-right padding-top text-yellow font-size-150 condensed loop"><?php the_title(); ?></h2>
                <div class="width-20 float-right text-right line-height-110 padding-bottom">
                    <?php the_excerpt(); ?>
                </div>
            </a>
            <?php else: ?>
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="right-1 float-right width-11">
                <h2 class="no-padding text-right text-white font-size-250 condensed line-height-120 text-spacing loop padding-top"><?php the_title(); ?></h2>
            </a>
            <?php endif; ?>
        </div>
	<?php endwhile; ?>
	<?php else: ?>
	<div>
		<h2>No hay ningún resultado, lo siento.</h2>
	</div>
	<!-- /div -->
	<?php endif; ?>
</div>