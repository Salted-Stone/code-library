//
// Fix for Hubspot CTA links that come through broken
//
document.addEventListener('DOMContentLoaded', event => {
    // Look for and loop through all of the CTA Links for HS
    document.querySelectorAll('.uf-item-blog-content a.cta_button').forEach( e => {
        // Parseout the URL and generate a new one
        let oldURL    = new URL( e.getAttribute('href') )
        let newURL    = 'https://cta-redirect.hubspot.com/cta/redirect/'+oldURL.searchParams.get('pid')+'/'+oldURL.searchParams.get('pg')

        // Set the new URL and give it a target blank
        e.setAttribute('href', newURL )
        e.setAttribute('target', '_blank')
    })
})
