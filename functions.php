<?php

// Add RSS links to <head> section
add_theme_support( 'automatic-feed-links' );
automatic_feed_links();


if ( !is_admin() ) {

wp_register_style('style', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
wp_enqueue_style('style');
	
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
'prev_text'    => __('<i class="material-icons">chevron_left</i>'),
'next_text'    => __('<i class="material-icons">chevron_right</i>'),
'current'      => max(1, get_query_var('paged')),
'total'        => $wp_query->max_num_pages,
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
'name' => 'Left Sidebar',
'id' => 'left-sidebar',
'description' => 'Left Sidebar widgets',
'before_widget' => '<div id="%1$s" class="widget %2$s">',
'after_widget' => '</div>',
'before_title' => '<h2>',
'after_title' => '</h2>'
));

register_sidebar(array(
'name' => 'Right Sidebar',
'id' => 'right-sidebar',
'description' => 'Right Sidebar widgets',
'before_widget' => '<div id="%1$s" class="widget %2$s">',
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


function no_comment_reply_js(){
	wp_deregister_script( 'comment-reply' );
         }
add_action('init','no_comment_reply_js');

add_theme_support( 'custom-background' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption' ) );
remove_filter ('the_content',  'wpautop');
remove_filter ('comment_text', 'wpautop');
?>