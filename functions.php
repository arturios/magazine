<?php

// Add RSS links to <head> section
add_theme_support( 'automatic-feed-links' );
automatic_feed_links();


if ( !is_admin() ) {

wp_register_style('desktop', get_template_directory_uri() . '/style.css', array(), '1.0', 'screen and (min-width: 721px)');
wp_enqueue_style('desktop');

wp_register_style('mobile', get_template_directory_uri() . '/mobile.css', array(), '1.0', 'handheld, screen and (max-width: 720px)');
wp_enqueue_style('mobile'); // Enqueue it!

wp_register_style('print', get_template_directory_uri() . '/print.css', array(), '1.0', 'print');
wp_enqueue_style('print'); // Enqueue it!

wp_register_script('modernizr', get_template_directory_uri() . '/js/modernizr.min.js', array(), '2.6.2'); 
wp_enqueue_script('modernizr');


wp_deregister_script('jquery');

wp_register_script('jquerymin', get_template_directory_uri() . '/js/jquery.min.js', array(jquery), '1.9.1',true);
wp_enqueue_script('jquerymin');

// wp_register_script('hypher', get_template_directory_uri() . '/js/Hyphenator.js', array(), '4.1.0',true);
// wp_enqueue_script('hypher');

 wp_register_script('swipe', get_template_directory_uri() . '/js/jquery.touchSwipe.min.js', array('jquery'), '1.0.0',true); 
 wp_enqueue_script('swipe');

wp_register_script('main', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0',true); 
wp_enqueue_script('main');
}


function Revista_pagination()
{
global $wp_query;
$big = 999999999;
echo paginate_links(array(
'base'         => str_replace($big, '%#%', get_pagenum_link($big)),
'format'       => '?paged=%#%',
'show_all'     => false,
'prev_next'    => true,
'prev_text'    => __('<'),
'next_text'    => __('>'),
'current'      => max(1, get_query_var('paged')),
'type'         => 'list',
'total'        => $wp_query->max_num_pages
));
}





// Clean up the <head>
function removeHeadLinks() {
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'removeHeadLinks');
remove_action('wp_head', 'wp_generator');

if (function_exists('register_sidebar')) {

// Define Sidebar Widget Area 1
register_sidebar(array(
'name' => 'Sidebar Widgets',
'id' => 'widget-area-1',
'description' => 'Sidebar principal.',
'before_widget' => '<div id="%1$s" class="widget %2$s">',
'after_widget' => '</div>',
'before_title' => '<h2>',
'after_title' => '</h2>'
));

// Define Sidebar Widget Area 2
register_sidebar(array(
'name' => __('Widget Area 2', 'Revista'),
'description' => __('Sidebar secundario', 'Revista'),
'id' => 'widget-area-2',
'before_widget' => '<div id="%1$s" class="%2$s">',
'after_widget' => '</div>',
'before_title' => '<h2>',
'after_title' => '</h2>'
));

// Define Sidebar Widget Area 3
register_sidebar(array(
'name' => __('Widget Area 3', 'Revista'),
'description' => __('Sidebar terciario', 'Revista'),
'id' => 'widget-area-3',
'before_widget' => '<div id="%1$s" class="%2$s">',
'after_widget' => '</div>',
'before_title' => '<h2>',
'after_title' => '</h2>'
));
}

function register_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_menu' );

function Revista_custom_header_setup() {
$args = array(
'default-image' => '',

// Set height and width, with a maximum value for the width.
'height' => 720,
'width' => 1024,
'max-width' => 2000,

// Support flexible height and width.
'flex-height' => true,
'flex-width' => true,

// Callbacks for styling the header and the admin preview.
'admin-preview-callback' => 'Revista_admin_header_image',
);

add_theme_support( 'custom-header', $args );

}
add_action( 'after_setup_theme', 'Revista_custom_header_setup' );

function Revista_admin_header_image() {
?>
<div id="headimg">
<?php $header_image = get_header_image();
if ( ! empty( $header_image ) ) : ?>
<img src="<?php echo esc_url( $header_image ); ?>" class="header-image" width="<?php echo get_custom_header()->width; ?>" height="<?php echo get_custom_header()->height; ?>" alt="" />
<?php endif; ?>
</div>
<?php }

add_theme_support( 'custom-background' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'automatic-feed-links' );
?>