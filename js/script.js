// Toggle navbar menu on mobile click
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// Close the navbar when user scrolls
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Video section (This might not be relevant to the boxes, so I will keep it for reference)
let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid => {
    vid.onclick = () => {
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }
});

document.querySelector('#close-vid').onclick = () => {
    mainVid.classList.remove('active');
}

// Add functionality for tick button to change box background color
document.querySelectorAll('.box').forEach(box => {
    const tickBtn = document.createElement('button');
    tickBtn.classList.add('tick-btn');
    tickBtn.innerHTML = '✔'; // Add tick mark to the button

    // Append tick button to the box (right side of 'start course' button)
    const startCourseBtn = box.querySelector('.btn');
    startCourseBtn.insertAdjacentElement('afterend', tickBtn);

    // Toggle the box color on click of tick button
    tickBtn.onclick = () => {
        box.classList.toggle('completed');
        
        // Change background color of the box when marked completed
        if (box.classList.contains('completed')) {
            box.style.backgroundColor = '#d6ffd6'; // Greenish color when marked completed
        } else {
            box.style.backgroundColor = ''; // Reset background when unmarked
        }
    };
});

// Optional: Reset background when page loads or refreshes
window.onload = () => {
    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = ''; // Reset any existing background colors
    });
};
