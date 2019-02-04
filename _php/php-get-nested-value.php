<?php

function get_value( $key_path, $object ) {

    $return = null;
    $keys    = explode('/', $key_path);

    if( is_array($object) ) {
        if( array_key_exists($keys[0], $object) ) {
            $return = $object[$keys[0]];
        }
    } elseif( is_object($object) ) {
        if( property_exists($object, $keys[0]) ) {
            $return = $object->{$keys[0]};
        }
    }

    if( count($keys) > 1 ) {
        array_shift($keys);
        $return = get_value( implode('/', $keys ), $return );
    }

    return $return;

}
