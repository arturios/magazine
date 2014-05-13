<div class="label">
<ul>
<li class="facebook">
<a href='http://www.facebook.com/sharer.php?u=<?php the_permalink();?>&t=<?php the_title(); ?>' class="fa-facebook-square" title="Compartir en facebook" target="_blank">Facebook</a>
</li>
<li class="twitter">
<a href="http://twitter.com/home?status=Leyendo%20este%20post%20<?php the_permalink(); ?>" target="_blank" title="Enviar a Twitter" class="fa-twitter">Twitter</a>
</li>
<li class="google">
<a href="https://plus.google.com/share?url=<?php the_permalink();?>" target="_blank" title="Compartir en Google+" class="fa-google-plus">Google +</a>
</li>
<li class="tuenti">
<a href="http://www.tuenti.com/share?url=<?php the_permalink();?>" target="_blank" title="Comenta en Tuenti" class="fa-comment">Tuenti</a>
</li>
<li class="meneame">
<a href="http://www.meneame.net/submit.php?url=<?php the_permalink();?>" target="_blank" title="Enviar este artículo a Meneame" class="fa-share">Menéame</a>
</li>
<li class="rss">
<a href='<?php echo get_site_url(); ?>/feed/' title="Subscribete al rss" class="fa-rss">RSS</a>
</li>
</ul>
</div>
