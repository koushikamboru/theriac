<script>
    document.addEventListener('DOMContentLoaded', function () {
        var path = window.location.pathname.split("/").pop();
        if (path == '') {
            path = 'index.html';
        }
        var target = document.querySelector('.nav-link[href="' + path + '"]');
        if (target) {
            target.classList.add('active');
        }
    });
</script>
