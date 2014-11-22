<h3 class="condensed border-bottom">En este número:</h3>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?> 

<div class="relative width-24 padding-bottom font-size-75">
<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
<?php if ( has_post_thumbnail() ) : ?>
 <figure class="float-left width-4 square border">
     <?php the_post_thumbnail('large', array( 'class' => 'full')); ?>
 </figure>
<?php endif; ?>
<?php if(!empty($post->post_excerpt)): ?>
<div class="float-left width-16">
<h2 class="condensed no-padding"><?php the_title(); ?></h2>
<?php the_excerpt(); ?>
</div>
<?php else: ?>
<div class="float-left width-16">
<h2 class="condensed padding-top font-size-200"><?php the_title(); ?></h2>
</div>
<?php endif; ?>
</a>
</div>
<?php endwhile; ?>

<?php else: ?>

  <!-- div -->
  <div>
    <h2>No hay ningún resultado, lo siento.</h2>
  </div>
  <!-- /div -->
<?php endif; ?>