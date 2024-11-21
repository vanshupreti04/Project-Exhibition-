const images = document.querySelectorAll('.slide-image');
let currentImageIndex = 0;
const slideInterval = 3000; 

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

/*Sliding Screen*/

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}
showImage(currentImageIndex);
setInterval(nextImage, slideInterval);

/*Raising the ticket and Finding a ticket*/

document.getElementById('raiseTicketButton').onclick = function() {
    window.location.href = 'raise_ticket_page.html'; // Redirect to Raise a Ticket page
};
document.getElementById('findTicketButton').onclick = function() {
    window.location.href = 'find_ticket_page.html'; // Redirect to Find a Ticket page
};

/*Features Button Functionable*/

document.getElementById('viewOrganisation').onclick = function() {
    window.location.href = 'view_organisation.html'; // Redirect to Find a Ticket page
};
document.getElementById('itemAvailable').onclick = function() {
    window.location.href = 'item_available.html'; // Redirect to Find a Ticket page
};
document.getElementById('startTracking').onclick = function() {
    window.location.href = 'start_tracking.html'; // Redirect to Find a Ticket page
};
