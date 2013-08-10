<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
<meta charset="<?php bloginfo('charset'); ?>">

<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="//www.google-analytics.com">

<?php if (is_search()) { ?>
 <meta name="robots" content="noindex, nofollow" />
<?php } ?>

<title><?php if (is_home() || is_front_page()) { echo bloginfo('name'); } else { echo wp_title(''); } ?></title>

<!-- Meta -->
<meta name="viewport" content="width=device-width,initial-scale=1.0">
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
?>magazine">
<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>
<!-- wp_head -->
<?php wp_head(); ?>
<!-- /wp_head -->
<!--[if lt IE 9]>
<link rel='stylesheet' href="<?php echo get_template_directory_uri(); ?>/style.css">
<style type="text/css">
#mainsidebar, #sidebar2 {z-index:1000}
#social a {background-color: white; color: black !important; padding: 0 4px}
</style>
<![endif]-->
<style type="text/css">
#content:before{content:'<?php bloginfo('name'); ?>'}
</style>
<noscript>
<style type="text/css">
figure .hrt{width:150%; left:-12.5%;height: auto}
figure .vrt{height:150%; top: -12.5%; width: auto}
#toggle:checked ~ #mainsidebar {top: 0}
#content,#wrapper{background-color: gray; overflow-y: auto}
section {position: relative; visibility: visible}
</style>
</noscript>
</head>
<body <?php body_class(); ?>>
<?php include (TEMPLATEPATH . '/inc/navigation.php' ); ?>
<div id="wrapper" class="site-main content-area">
