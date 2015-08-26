<section id="comentarios" tabindex="0" class="darkgray overflow-y">
    <div id="coments" class="relative top-1 left-6 width-12">
        <div class="box top-1 left-2 width-20">
            <h2 class="condensed"><?php the_title(); ?></h2>
            <div class="relative width-24">
                <?php the_excerpt(); ?>
                <div class="hr-white">&nbsp;</div>
                <div class="br">&nbsp;</div>
                <div class="relative width-24 padding-bottom">
                    <div class="fb-send" data-href="<?php echo post_permalink( $ID ); ?>"></div>
                    <div class="fb-like" data-colorscheme="dark" data-href="<?php echo post_permalink( $ID ); ?>" data-mobile="true" data-share="true"></div>
                    <div id="comments" class="comments-area">
                        <div class="fb-comments" data-href="<?php echo post_permalink( $ID ); ?>" data-numposts="10" data-colorscheme="dark" data-version="v2.3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>