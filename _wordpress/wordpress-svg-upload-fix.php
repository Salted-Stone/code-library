<?php // Place in functions
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

  global $wp_version;
  if ( $wp_version !== '4.7.1' ) {
     return $data;
  }

  $filetype = wp_check_filetype( $filename, $mimes );

  return [
      'ext'             => $filetype['ext'],
      'type'            => $filetype['type'],
      'proper_filename' => $data['proper_filename']
  ];

}, 10, 4 );

function cc_mime_types( $mimes ){
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
  echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action( 'admin_head', 'fix_svg' );

/* Alternate */
function cc_mime_types( $mimes ){
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'cc_mime_types' );

function fix_svg() {
    echo '
    <style type="text/css">
        .attachment-266x266,
        .thumbnail img,
        td.media-icon img[src$=".svg"],
        img[src$=".svg"].attachment-post-thumbnail,
        img[src$=".svg"].attachment-thumbnail {
            width: 100% !important;
            height: auto !important;
        }
    </style>
    <script>
        $(document).ready(function() {
            var thatSvgEle = $("img[src$=\'svg\'].attachment-post-thumbnail");
            if( thatSvgEle.length ) {
                thatSvgEle.each(function() {
                    $(this).parent("#set-post-thumbnail").css({"width": "100%"})
                })
            }
        })
    </script>
    ';
}
add_action( 'admin_head', 'fix_svg' );
