// Mock data for residents
let residents = [
    { 
        id: 1, 
        name: 'John Doe', 
        email: 'john@example.com',
        room: '101',
        checkIn: '2024-01-01',
        checkOut: '2024-12-31'
    }
];

export function initializeResidents() {
    displayResidents();
    setupResidentSearch();
}

function displayResidents() {
    const residentsList = document.getElementById('residents-list');
    residentsList.innerHTML = residents.map(resident => `
        <div class="card">
            <h3>${resident.name}</h3>
            <p>Email: ${resident.email}</p>
            <p>Room: ${resident.room}</p>
            <p>Check-in: ${resident.checkIn}</p>
            <p>Check-out: ${resident.checkOut}</p>
            <button onclick="editResident(${resident.id})" class="action-btn">Edit</button>
        </div>
    `).join('');
}

function setupResidentSearch() {
    const searchInput = document.getElementById('resident-search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredResidents = residents.filter(resident => 
            resident.name.toLowerCase().includes(searchTerm) ||
            resident.room.toLowerCase().includes(searchTerm)
        );
        displayFilteredResidents(filteredResidents);
    });
}

function displayFilteredResidents(filteredResidents) {
    const residentsList = document.getElementById('residents-list');
    residentsList.innerHTML = filteredResidents.map(resident => `
        <div class="card">
            <h3>${resident.name}</h3>
            <p>Email: ${resident.email}</p>
            <p>Room: ${resident.room}</p>
            <p>Check-in: ${resident.checkIn}</p>
            <p>Check-out: ${resident.checkOut}</p>
            <button onclick="editResident(${resident.id})" class="action-btn">Edit</button>
        </div>
    `).join('');
}

// Add resident form template
export function getResidentFormTemplate(resident = null) {
    return `
        <form id="resident-form" onsubmit="handleResidentSubmit(event)">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" required value="${resident ? resident.name : ''}">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required value="${resident ? resident.email : ''}">
            </div>
            <div class="form-group">
                <label for="room">Room Number</label>
                <input type="text" id="room" required value="${resident ? resident.room : ''}">
            </div>
            <div class="form-group">
                <label for="check-in">Check-in Date</label>
                <input type="date" id="check-in" required value="${resident ? resident.checkIn : ''}">
            </div>
            <div class="form-group">
                <label for="check-out">Check-out Date</label>
                <input type="date" id="check-out" required value="${resident ? resident.checkOut : ''}">
            </div>
            <button type="submit" class="action-btn">${resident ? 'Update' : 'Add'} Resident</button>
        </form>
    `;
}