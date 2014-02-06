 <article tabindex="0" class="" id="comentarios">
 <div class="frame overflow-y">
 <div class="box top-1 left-2 width-20">
 <h1 class="condensed"><?php the_title(); ?></h1>
 <div class="relative width-24">
 <figure class="float-left width-4"><?php if ( has_post_thumbnail() ) {the_post_thumbnail('thumbnail');}?></figure>
 <div class="float-left max-width-16">
 <?php the_excerpt(); ?>
 <div class="hr-white">&nbsp;</div>
 <div class="br">&nbsp;</div>
 </div>
 <div class="relative width-24">

<?php

if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php' == basename($_SERVER['SCRIPT_FILENAME']))
die ('Por favor, no cargue esta página directamente, gracias');

if ( post_password_required() ) { ?>
Este artículo está protegido con clave. Introdúcela para ver los comentarios.
<?php
return;
}
?>

<?php if ( have_comments() ) : ?>

<h2 id="comments"><?php comments_number('Sin comentarios', 'Un comentario', '% comentarios' );?></h2>

<div class="navigation">
<div class="next-posts"><?php previous_comments_link() ?></div>
<div class="prev-posts"><?php next_comments_link() ?></div>
</div>

<ol class="commentlist">
<?php wp_list_comments(); ?>
</ol>

<div class="navigation">
<div class="next-posts"><?php previous_comments_link() ?></div>
<div class="prev-posts"><?php next_comments_link() ?></div>
</div>

<?php else : // this is displayed if there are no comments so far ?>

<?php if ( comments_open() ) : ?>
<!-- If comments are open, but there are no comments. -->

 <?php else : // comments are closed ?>
<p>Ya no se admiten más comentarios.</p>

<?php endif; ?>

<?php endif; ?>

<?php if ( comments_open() ) : ?>

<div id="respond">

<h2><?php comment_form_title( 'Dinos que te parece', 'Responde a %s' ); ?></h2>

<div class="cancel-comment-reply">
<?php cancel_comment_reply_link(); ?>
</div>

<?php if ( get_option('comment_registration') && !is_user_logged_in() ) : ?>
<p>Debes estar <a href="<?php echo wp_login_url( get_permalink() ); ?>">conectado</a> para comentar</p>
<?php else : ?>

<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform" class="relative width-12 left-3">

<?php if ( is_user_logged_in() ) : ?>

<p>Comentas como <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo wp_logout_url(get_permalink()); ?>" title="salir">salir &raquo;</a></p>

<?php else : ?>

<label for="author">Nombre <?php if ($req) echo "(obligatorio)"; ?>:</label>
<div class="input-container">
<input type="text" name="author" id="author" placeholder="tu nombre o alias" value="<?php echo esc_attr($comment_author); ?>" size="44" tabindex="1" <?php if ($req) echo "aria-required='true'"; ?> />
<span class="input-icon icon-user"></span>
</div>

<label for="email">Correo (no se publicará <?php if ($req) echo "y es obligatorio"; ?>):</label>
<div class="input-container">
<input type="text" name="email" id="email" placeholder="tu_correo@obligatorio.es" value="<?php echo esc_attr($comment_author_email); ?>" tabindex="2" <?php if ($req) echo "aria-required='true'"; ?> />
<span class="input-icon icon-envelope"></span>
</div>

<label for="url">Página:</label>
<div class="input-container">
<input type="text" name="url" placeholder="tu_pagina.com" id="url" value="<?php echo esc_attr($comment_author_url); ?>" tabindex="3" />
<span class="input-icon icon-external-link"></span>
</div>

<?php endif; ?>

<!--<p>You can use these tags: <code><?php echo allowed_tags(); ?></code></p>-->

<label for="coment">Comentario:</label>
<div class="input-container">
<textarea name="comment" id="comment" placeholder="texto del comentario" tabindex="4"></textarea>
<span class="input-icon icon-edit"></span>
</div>
<br />
<div class="input-container">
<input name="submit" type="submit" id="submit" tabindex="5" value="Envíanos el comentario" />
<?php comment_id_fields(); ?>
</div>

<?php do_action('comment_form', $post->ID); ?>

</form>

<?php endif; // If registration required and not logged in ?>

</div>

<?php endif; ?>

</div>
</div>
</div>
</div>
</article>

