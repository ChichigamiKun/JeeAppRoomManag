import { initializeRooms } from './modules/rooms.js';
import { initializeResidents } from './modules/residents.js';
import { initializeMaintenance } from './modules/maintenance.js';
import { initializePayments } from './modules/payments.js';
import { setupModalHandlers } from './modules/modal.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initializeRooms();
    initializeResidents();
    initializeMaintenance();
    initializePayments();
    setupModalHandlers();
});

// Global navigation function
window.showSection = (sectionId) => {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
};