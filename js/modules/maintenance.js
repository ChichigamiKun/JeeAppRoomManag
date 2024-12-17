// Mock data for maintenance requests
let maintenanceRequests = [
    {
        id: 1,
        room: '101',
        issue: 'Broken AC',
        status: 'pending',
        priority: 'high',
        reportedDate: '2024-02-20',
        description: 'AC not cooling properly'
    }
];

export function initializeMaintenance() {
    displayMaintenanceRequests();
    setupMaintenanceSearch();
}

function displayMaintenanceRequests() {
    const maintenanceList = document.getElementById('maintenance-list');
    maintenanceList.innerHTML = maintenanceRequests.map(request => `
        <div class="card">
            <h3>Room ${request.room}</h3>
            <p>Issue: ${request.issue}</p>
            <p>Status: <span class="status status-${request.status}">${request.status}</span></p>
            <p>Priority: ${request.priority}</p>
            <p>Reported: ${request.reportedDate}</p>
            <p>Description: ${request.description}</p>
            <button onclick="updateMaintenanceStatus(${request.id})" class="action-btn">Update Status</button>
        </div>
    `).join('');
}

function setupMaintenanceSearch() {
    const searchInput = document.getElementById('maintenance-search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRequests = maintenanceRequests.filter(request => 
            request.room.toLowerCase().includes(searchTerm) ||
            request.issue.toLowerCase().includes(searchTerm) ||
            request.status.toLowerCase().includes(searchTerm)
        );
        displayFilteredMaintenanceRequests(filteredRequests);
    });
}

function displayFilteredMaintenanceRequests(filteredRequests) {
    const maintenanceList = document.getElementById('maintenance-list');
    maintenanceList.innerHTML = filteredRequests.map(request => `
        <div class="card">
            <h3>Room ${request.room}</h3>
            <p>Issue: ${request.issue}</p>
            <p>Status: <span class="status status-${request.status}">${request.status}</span></p>
            <p>Priority: ${request.priority}</p>
            <p>Reported: ${request.reportedDate}</p>
            <p>Description: ${request.description}</p>
            <button onclick="updateMaintenanceStatus(${request.id})" class="action-btn">Update Status</button>
        </div>
    `).join('');
}

// Add maintenance request form template
export function getMaintenanceFormTemplate(request = null) {
    return `
        <form id="maintenance-form" onsubmit="handleMaintenanceSubmit(event)">
            <div class="form-group">
                <label for="room">Room Number</label>
                <input type="text" id="room" required value="${request ? request.room : ''}">
            </div>
            <div class="form-group">
                <label for="issue">Issue</label>
                <input type="text" id="issue" required value="${request ? request.issue : ''}">
            </div>
            <div class="form-group">
                <label for="priority">Priority</label>
                <select id="priority" required>
                    <option value="low" ${request && request.priority === 'low' ? 'selected' : ''}>Low</option>
                    <option value="medium" ${request && request.priority === 'medium' ? 'selected' : ''}>Medium</option>
                    <option value="high" ${request && request.priority === 'high' ? 'selected' : ''}>High</option>
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" required>${request ? request.description : ''}</textarea>
            </div>
            <button type="submit" class="action-btn">${request ? 'Update' : 'Add'} Request</button>
        </form>
    `;
}