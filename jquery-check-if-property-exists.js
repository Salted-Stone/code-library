<script>
function resolve(path, obj) {
    return path.split('.').reduce(function(prev, curr) {
        return prev ? prev[curr] : null
    }, obj || self)
}

resolve('properties.that.do.not.exist', {hello:'world'})
</script>
