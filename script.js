document.addEventListener("DOMContentLoaded", function() {
    
    const dashboardSection = document.getElementById("dashboard-section");
    const analyticsSection = document.getElementById("analytics-section");
    const reportsSection = document.getElementById("reports-section");
    
    const navDashboard = document.getElementById("nav-dashboard");
    const navAnalytics = document.getElementById("nav-analytics");
    const navReports = document.getElementById("nav-reports");

    function hideAllSections() {
        dashboardSection.style.display = "none";
        analyticsSection.style.display = "none";
        reportsSection.style.display = "none";
    }

    function fadeInSection(section) {
        section.style.display = "block";
        section.style.animation = "fadeInUp 0.6s ease-out forwards";
    }

    navDashboard.addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        dashboardSection.style.display = "flex"; 
    });

    navAnalytics.addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        fadeInSection(analyticsSection);
    });

    navReports.addEventListener("click", function(e) {
        e.preventDefault();
        hideAllSections();
        fadeInSection(reportsSection);
    });

    document.getElementById("start-btn").addEventListener("click", function() {
        this.innerText = "System Active";
        this.style.backgroundColor = "#1b3b22"; 
        document.getElementById("status-message").style.display = "block";
    });

    const calculateBtn = document.getElementById("calculate-btn");
    const treeInput = document.getElementById("trees");
    const flightInput = document.getElementById("flights");
    const errorMsg = document.getElementById("error-msg");
    const resultDisplay = document.getElementById("result-display");
    const co2Result = document.getElementById("co2-result");

    calculateBtn.addEventListener("click", function() {
        const trees = parseInt(treeInput.value);
        const flights = parseInt(flightInput.value);

        if (isNaN(trees) || isNaN(flights)) {
            errorMsg.innerText = "Please enter valid numbers in both fields.";
            resultDisplay.style.display = "none";
            return;
        }
        
        if (trees < 0 || flights < 0) {
            errorMsg.innerText = "Values cannot be negative.";
            resultDisplay.style.display = "none";
            return;
        }

        errorMsg.innerText = "";
        
        const treeOffset = trees * 21; 
        const flightOffset = flights * 250; 
        const totalOffset = treeOffset + flightOffset;

        co2Result.innerText = totalOffset;
        resultDisplay.style.display = "block";
        
        resultDisplay.animate([
            { transform: 'translateY(10px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ], { 
            duration: 500, 
            easing: 'ease-out' 
        });
    });
});