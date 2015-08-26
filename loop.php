<div class="box bottom-1 left-0 width-24 z-index-10 border-top border-black padding equal">
<div class="box top-0 left-0 width-24 height-24 darkgray opacity-70 nomobile z-index--10"></div>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <?php if(!empty($post->post_excerpt)): ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="relative width-4 float-left padding-left padding waves-effect line-height-100">
                    <span class="condensed text-white text-spacing">
                        <?php the_title(); ?>
                    </span>

                    <span class="br small sans padding-bottom">
                        <?php the_excerpt(); ?>
                    </span>
                </a>
            <?php else: ?>
                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="top-0 relative width-4 float-left condensed text-white font-size-150 line-height-100 padding waves-effect">
                    <?php the_title(); ?>
                </a>
            <?php endif; ?>
    <?php endwhile; ?>
        <?php else: ?>
        <div class="box top-10 left-1 width-22">
            <h2 class="text-center">No hay ningún resultado, lo siento.</h2>
        </div>
    <?php endif; ?>
</div>
<div class="box top-23 left-0 width-24 height-2 darkgray opacity-70 nomobile"></div>


