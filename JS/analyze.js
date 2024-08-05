// script.js
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseenter', function(event) {
        const tooltip = document.getElementById('tooltip');
        tooltip.textContent = this.getAttribute('data-tooltip');
        const rect = event.target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        
        // Position tooltip above the area
        tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltipRect.width / 2)}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltipRect.height - 10}px`;
        tooltip.style.display = 'block';
    });

    area.addEventListener('mouseleave', () => {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    });
});
