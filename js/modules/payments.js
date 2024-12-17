// Mock data for payments
let payments = [
    {
        id: 1,
        resident: 'John Doe',
        room: '101',
        amount: 500,
        date: '2024-02-01',
        status: 'paid',
        type: 'rent'
    }
];

export function initializePayments() {
    displayPayments();
    setupPaymentSearch();
}

function displayPayments() {
    const paymentsList = document.getElementById('payments-list');
    paymentsList.innerHTML = payments.map(payment => `
        <div class="card">
            <h3>${payment.resident}</h3>
            <p>Room: ${payment.room}</p>
            <p>Amount: $${payment.amount}</p>
            <p>Date: ${payment.date}</p>
            <p>Status: <span class="status status-${payment.status}">${payment.status}</span></p>
            <p>Type: ${payment.type}</p>
            <button onclick="generateReceipt(${payment.id})" class="action-btn">Generate Receipt</button>
        </div>
    `).join('');
}

function setupPaymentSearch() {
    const searchInput = document.getElementById('payment-search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPayments = payments.filter(payment => 
            payment.resident.toLowerCase().includes(searchTerm) ||
            payment.room.toLowerCase().includes(searchTerm) ||
            payment.status.toLowerCase().includes(searchTerm)
        );
        displayFilteredPayments(filteredPayments);
    });
}

function displayFilteredPayments(filteredPayments) {
    const paymentsList = document.getElementById('payments-list');
    paymentsList.innerHTML = filteredPayments.map(payment => `
        <div class="card">
            <h3>${payment.resident}</h3>
            <p>Room: ${payment.room}</p>
            <p>Amount: $${payment.amount}</p>
            <p>Date: ${payment.date}</p>
            <p>Status: <span class="status status-${payment.status}">${payment.status}</span></p>
            <p>Type: ${payment.type}</p>
            <button onclick="generateReceipt(${payment.id})" class="action-btn">Generate Receipt</button>
        </div>
    `).join('');
}

// Add payment form template
export function getPaymentFormTemplate(payment = null) {
    return `
        <form id="payment-form" onsubmit="handlePaymentSubmit(event)">
            <div class="form-group">
                <label for="resident">Resident Name</label>
                <input type="text" id="resident" required value="${payment ? payment.resident : ''}">
            </div>
            <div class="form-group">
                <label for="room">Room Number</label>
                <input type="text" id="room" required value="${payment ? payment.room : ''}">
            </div>
            <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" id="amount" required value="${payment ? payment.amount : ''}">
            </div>
            <div class="form-group">
                <label for="type">Payment Type</label>
                <select id="type" required>
                    <option value="rent" ${payment && payment.type === 'rent' ? 'selected' : ''}>Rent</option>
                    <option value="deposit" ${payment && payment.type === 'deposit' ? 'selected' : ''}>Deposit</option>
                    <option value="maintenance" ${payment && payment.type === 'maintenance' ? 'selected' : ''}>Maintenance</option>
                </select>
            </div>
            <button type="submit" class="action-btn">${payment ? 'Update' : 'Add'} Payment</button>
        </form>
    `;
}