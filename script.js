const serviceDetails = {
    strategy: {
        title: "AI Strategy & Roadmap",
        content: `
            <h3>What We Offer:</h3>
            <ul>
                <li>Comprehensive AI readiness assessment</li>
                <li>Custom AI strategy development</li>
                <li>Implementation roadmap creation</li>
                <li>ROI analysis and business case development</li>
                <li>Technology stack recommendations</li>
            </ul>
            <p>Our strategic planning ensures your AI initiatives align perfectly with your business goals while maximizing return on investment.</p>
        `
    },
    training: {
        title: "AI Training",
        content: `
            <h3>Our Training Programs:</h3>
            <ul>
                <li>AI fundamentals for business leaders</li>
                <li>Technical AI training for developers</li>
                <li>Data science and ML workshops</li>
                <li>Custom curriculum development</li>
                <li>Hands-on practical sessions</li>
            </ul>
            <p>Build your team's AI capabilities with our comprehensive training programs.</p>
        `
    },
    automation: {
        title: "Automation Building",
        content: `
            <h3>Automation Solutions:</h3>
            <ul>
                <li>Process automation assessment</li>
                <li>Custom automation development</li>
                <li>Integration with existing systems</li>
                <li>RPA and AI integration</li>
                <li>Automation maintenance and support</li>
            </ul>
            <p>Transform your business processes with intelligent automation solutions.</p>
        `
    },
    transformation: {
        title: "AI Business Transformation",
        content: `
            <h3>Transformation Services:</h3>
            <ul>
                <li>Digital transformation strategy</li>
                <li>AI-driven process reengineering</li>
                <li>Change management</li>
                <li>Technology modernization</li>
                <li>Continuous improvement programs</li>
            </ul>
            <p>Complete business transformation leveraging the power of AI technologies.</p>
        `
    }
    // Add other service details similarly
};

function showServiceDetails(serviceId) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = serviceDetails[serviceId].title;
    modalContent.innerHTML = serviceDetails[serviceId].content;
    modal.style.display = 'block';
}

// Close modal when clicking the X or outside the modal
document.querySelector('.close').onclick = function() {
    document.getElementById('serviceModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
} 