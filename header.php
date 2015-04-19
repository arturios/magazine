<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
	<meta charset="<?php bloginfo('charset'); ?>">

	<?php if (is_search()) { ?>
	<meta name="robots" content="noindex, nofollow" />
	<?php } ?>

	<title>
		<?php if (is_home() || is_front_page()) { echo bloginfo( 'name'); } else { echo wp_title( ''); } ?>
	</title>

	<!-- Meta -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="viewport" content="user-scalable=yes,initial-scale=1.0">
	<meta name="description" content="<?php bloginfo('description'); ?>">
	<meta name="description" content="<?php if((is_home()) || (is_front_page())) {
echo bloginfo('name'); bloginfo('description');
} elseif(is_category()) {
echo category_description();
} elseif(is_tag()) {
echo 'Tag archive page for this blog - ' . single_tag_title();
} elseif(is_month()) {
echo 'Archive page for this blog - ' . the_time('F, Y');
} else {
echo get_post_meta($post->ID, 'metadescription', true);
} ?>" />
	<meta name="keywords" content="<?php
$posttags = get_the_tags();
if ($posttags) {
  foreach($posttags as $tag) {
    echo $tag->name . ', '; 
  }
}
?>magazine,revista,nudista,nudismo,naturista,naturismo">
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
	<!-- wp_head -->
	<?php wp_head(); ?>
	<!-- /wp_head -->
	<noscript>
		<style type="text/css">
			/* crea el estilo de los enlaces en las barras laterales sin js */
			/* forms */
			
			.input-field label {
				font-size: 0.8rem;
				-webkit-transform: translateY(-130%);
				-moz-transform: translateY(-130%);
				-ms-transform: translateY(-130%);
				-o-transform: translateY(-130%);
				transform: translateY(-130%);
			}
			
			body,
			#content,
			article {
				overflow: auto;
			}
		</style>
	</noscript>
</head>

<body role="document">
	<?php include (TEMPLATEPATH . '/inc/menu.php' ); ?>
	<?php include (TEMPLATEPATH . '/inc/navigation.php' ); ?>

	<!-- no sólo avisa de las cookies, sino que sirve para que el #¢∞"·% safari de iOS pinte su barra en pantalla completa pero no fastidie el menú -->
	<div class="cookies blue-grey darken-4 grey-text text-lighten-3" role="alert">Si continua navegando es que acepta el uso en esta página de cookies propias y de terceros, más información <a href="http://ene-naturismo.org/revista/politica-de-cookies/" class="orange-text">aquí</a>.</div>


	<!-- desplegadores de las barras laterales -->
	<?php if ( is_active_sidebar( 'left-sidebar' ) ) : ?>
	<a href="#" id="m-left" class="menuopenclose waves-effect" title="Enlaces" role="menuitem">
		<span class="mdi-navigation-arrow-forward"></span>
	</a>
	<?php endif; ?>
	<?php if ( is_active_sidebar( 'right-sidebar' ) ) : ?>
	<a href="#" id="m-right" class="menuopenclose waves-effect" title="Enlaces" role="menuitem">
		<span class="mdi-navigation-arrow-back"></span>
	</a>
	<?php endif; ?>
	<?php include (TEMPLATEPATH . '/inc/preloader.php' ); ?>
	<div id="content" role="main">