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
<link rel='stylesheet' href="<?php echo get_template_directory_uri(); ?>/css/ie.css">
</style>
<![endif]-->
<noscript>
<style type="text/css">
body {visibility: visible}
figure .hrt{width:150%; margin-left:-25%;height: auto}
figure .vrt{height:150%; margin-top: -25%; width: auto}
</style>
</noscript>
</head>
<body role="document">
<?php include (TEMPLATEPATH . '/inc/top_menu.php' ); ?>
