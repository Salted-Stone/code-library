const ajax = (options, callback = null) => {

	let xhr = new XMLHttpRequest();
	xhr.open( options.method || 'GET', options.url, true )

	if( options.headers ) {
		Object.keys(options.headers).forEach( key => {
			xhr.setRequestHeader(key, options.headers[ key ]);
		})
	}

	xhr.onreadystatechange = function() {
		if( this.readyState === XMLHttpRequest.DONE ) {
			if( typeof callback == 'function' ) {
				callback( this.responseText )
			}
		}
	}

	xhr.send( options.data || null );

}
