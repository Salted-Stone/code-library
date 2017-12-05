/* This code will hijack the "all" "simple_list_page" template which is based off of the "listing template" */

/* Set your search input */
<div class="type-search">
    <input id="search-field" type="input" placeholder="Search" />
    <div id="search-button">Go</div>
</div>

<script>
	$.fn.enterKey = function (fnc) {
	    return this.each(function () {
	        $(this).keypress(function (ev) {
	            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
	            if (keycode == '13') {
	                fnc.call(this, ev);
	            }
	        })
	    })
	}

	var filterProp = '';
	$('#search-button').click( function() {
	    filterProp = $('#search-field').val();
	    window.location.href = "{{ company_domain }}/blog/all?search=" + filterProp;
	});
	$("#search-field").enterKey(function () {
	    filterProp = $('#search-field').val();
	    window.location.href = "{{ company_domain }}/blog/all?search=" + filterProp;
	})
</script>

/* The following is placed in the listing template */
{% set query = request.query_dict['search'] %}

{% for content in contents %}

    {% if query %}
        {% if query|lower in content.name|lower %}

		{# POST CONTENT FORMATING GOES HERE #}

		{% endif %}
    {% else %}

		{# IDENTICAL POST CONTENT FORMATING GOES HERE #}

	{% endif %}

{% endfor %}
