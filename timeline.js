// Add this code inside the timeline.js file

document.addEventListener('DOMContentLoaded', function () {
    const timelineContainer = document.getElementById('timeline-container');
    const timelineItems = timelineContainer.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', function () {
            scrollToYear(item.getAttribute('data-year'));
        });
    });

    function scrollToYear(year) {
        const targetYear = document.querySelector(`[data-year="${year}"]`);
        if (targetYear) {
            targetYear.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
