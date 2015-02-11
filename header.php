<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
<meta charset="<?php bloginfo('charset'); ?>">

<?php if (is_search()) { ?>
 <meta name="robots" content="noindex, nofollow" />
<?php } ?>

<title><?php if (is_home() || is_front_page()) { echo bloginfo('name'); } else { echo wp_title(''); } ?></title>

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

aside ul li a{
	position: relative;
	float: left;
	clear: both;
	width: 100%;
	text-align: center;
	background-color: #03a9f4;
	display: inline-block;
	height: 36px;
	margin-bottom: 15px;
	padding: 0 2rem;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	background-clip: padding-box;
	line-height: 36px;
	text-transform: uppercase;
	border: none;
	outline: 0;
	-webkit-tap-highlight-color: transparent;	
	-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	-moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }
}

aside ul li a:hover {
	-webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
	-moz-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
	box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15); }

/* forms */

.input-field label {
	font-size: 0.8rem;
	-webkit-transform: translateY(-130%);
	-moz-transform: translateY(-130%);
	-ms-transform: translateY(-130%);
	-o-transform: translateY(-130%);
	transform: translateY(-130%);
}
@media (max-width:740px) {
	
/* imagenes sin js 
/* En el momento de escribir esto solo unos pocos navegadores soportan object-fit */

figure img.full {
	position:absolute;
	object-fit: cover;
	width: 100%;
	height: 100%;	
}

img.left {
    left: 0;
    right: auto;
	object-position: left;
}
img.top {
    top: 0;
    bottom: auto;
	object-position: top;
}
img.right {
    right: 0;
    left: auto;
	object-position: right;
}
img.bottom {
    bottom: 0;
    top:auto;
	object-position: bottom;
}
}
</style>
</noscript>
</head>
<body role="document">
<!-- no sólo avisa de las cookies, sino que sirve para que el #¢∞"·% safari de iOS pinte su barra en pantalla completa y no fastidie el menú -->
<div class="cookies blue-grey darken-4 grey-text text-lighten-3">Si continua navegando es que acepta el uso en esta página de cookies propias y de terceros, más información <a href="http://ene-naturismo.org/revista/politica-de-cookies/" class="orange-text">aquí</a>.</div>
<?php include (TEMPLATEPATH . '/inc/navigation.php' ); ?>
<?php include (TEMPLATEPATH . '/inc/menu.php' ); ?>
