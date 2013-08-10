<div class="padding">
<?php global $query_string; query_posts( $query_string . '&order=ASC' ); if (have_posts()) : while (have_posts()) : the_post(); ?> 

<div class="relative width-24">


<?php if(!empty($post->post_excerpt)): ?>
  <!-- div -->
  <div class="float-left width-9">  
    <!-- Post Title -->
    <h2 class="padding-top text-left no-padding">
      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="text-blue font-size-150 condensed text-spacing loop"><?php the_title(); ?></a>
    </h2>
    <!-- /Post Title -->
    <div class="width-12 line-height-110 padding-bottom">
      <!-- Post Except -->
      <div class="serif"><?php the_excerpt(); ?></div>
      <!-- /Post Except -->
    </div>
  </div>
  <!-- /div -->
<?php else: ?>
  <!-- div -->
  <div class="float-left width-14">  
    <!-- Post Title -->
    <h2 class="padding-top text-left no-padding">
      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="loop font-size-250 condensed text-white sans line-height-120 no-padding"><?php the_title(); ?></a>
    </h2>
    <!-- /Post Title -->
  </div>
  <!-- /div -->
<?php endif; ?>



<?php the_post(); ?>


<?php if(!empty($post->post_excerpt)): ?>
  <!-- div -->
  <div class="float-right width-9">  
    <!-- Post Title -->
    <h2 class="padding-top text-right no-padding">
      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="text-yellow font-size-150 condensed loop"><?php the_title(); ?></a>
    </h2>
    <!-- /Post Title -->
    <div class="width-12 float-right text-right line-height-110 padding-bottom">
      <!-- Post Except -->
      <?php the_excerpt(); ?>
      <!-- /Post Except -->
    </div>
  </div>
  <!-- /div -->
<?php else: ?>
  <!-- div -->
  <div class="float-right width-14">  
    <!-- Post Title -->
    <h2 class="padding-top text-right no-padding">
      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="text-white font-size-250 condensed line-height-120 text-spacing no-padding loop"><?php the_title(); ?></a>
    </h2>
    <!-- /Post Title -->
  </div>
  <!-- /div -->
<?php endif; ?>

</div>

<?php endwhile; ?>

<?php else: ?>

  <!-- div -->
  <div>
    <h2>No hay ningún resultado, lo siento.</h2>
  </div>
  <!-- /div -->
<?php endif; ?>
</div>
