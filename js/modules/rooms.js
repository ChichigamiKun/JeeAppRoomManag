// Mock data for rooms
let rooms = [
    { id: 1, number: '101', floor: 1, capacity: 2, status: 'available', amenities: ['WiFi', 'AC'] },
    { id: 2, number: '102', floor: 1, capacity: 1, status: 'occupied', amenities: ['WiFi'] },
    { id: 3, number: '201', floor: 2, capacity: 2, status: 'maintenance', amenities: ['WiFi', 'AC'] }
];

export function initializeRooms() {
    displayRooms();
    setupRoomSearch();
}

function displayRooms() {
    const roomsList = document.getElementById('rooms-list');
    roomsList.innerHTML = rooms.map(room => `
        <div class="card">
            <h3>Room ${room.number}</h3>
            <p>Floor: ${room.floor}</p>
            <p>Capacity: ${room.capacity}</p>
            <p>Status: <span class="status status-${room.status}">${room.status}</span></p>
            <p>Amenities: ${room.amenities.join(', ')}</p>
            <button onclick="editRoom(${room.id})" class="action-btn">Edit</button>
        </div>
    `).join('');
}

function setupRoomSearch() {
    const searchInput = document.getElementById('room-search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRooms = rooms.filter(room => 
            room.number.toLowerCase().includes(searchTerm) ||
            room.status.toLowerCase().includes(searchTerm)
        );
        displayFilteredRooms(filteredRooms);
    });
}

function displayFilteredRooms(filteredRooms) {
    const roomsList = document.getElementById('rooms-list');
    roomsList.innerHTML = filteredRooms.map(room => `
        <div class="card">
            <h3>Room ${room.number}</h3>
            <p>Floor: ${room.floor}</p>
            <p>Capacity: ${room.capacity}</p>
            <p>Status: <span class="status status-${room.status}">${room.status}</span></p>
            <p>Amenities: ${room.amenities.join(', ')}</p>
            <button onclick="editRoom(${room.id})" class="action-btn">Edit</button>
        </div>
    `).join('');
}

// Add room form template
export function getRoomFormTemplate(room = null) {
    return `
        <form id="room-form" onsubmit="handleRoomSubmit(event)">
            <div class="form-group">
                <label for="room-number">Room Number</label>
                <input type="text" id="room-number" required value="${room ? room.number : ''}">
            </div>
            <div class="form-group">
                <label for="floor">Floor</label>
                <input type="number" id="floor" required value="${room ? room.floor : ''}">
            </div>
            <div class="form-group">
                <label for="capacity">Capacity</label>
                <input type="number" id="capacity" required value="${room ? room.capacity : ''}">
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <select id="status" required>
                    <option value="available" ${room && room.status === 'available' ? 'selected' : ''}>Available</option>
                    <option value="occupied" ${room && room.status === 'occupied' ? 'selected' : ''}>Occupied</option>
                    <option value="maintenance" ${room && room.status === 'maintenance' ? 'selected' : ''}>Maintenance</option>
                </select>
            </div>
            <button type="submit" class="action-btn">${room ? 'Update' : 'Add'} Room</button>
        </form>
    `;
}