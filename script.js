// Extended Timothy Syndrome variant database with comprehensive clinical data
const sampleVariants = [
    { 
        id: 'CACNA1C-G406R', 
        gene: 'CACNA1C', 
        position: 'chr12:2162859', 
        type: 'Missense', 
        significance: 'Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Syndactyly', 'Autism', 'Immune deficiency'],
        qtcInterval: '550-650ms',
        inheritance: 'De novo',
        references: ['PMID: 15107499', 'PMID: 20301310']
    },
    { 
        id: 'CACNA1C-G402S', 
        gene: 'CACNA1C', 
        position: 'chr12:2162847', 
        type: 'Missense', 
        significance: 'Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Developmental delay', 'Syndactyly'],
        qtcInterval: '580-620ms',
        inheritance: 'De novo',
        references: ['PMID: 15107499']
    },
    { 
        id: 'CACNA1C-G406T', 
        gene: 'CACNA1C', 
        position: 'chr12:2162858', 
        type: 'Missense', 
        significance: 'Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Cardiac arrhythmia', 'Syndactyly'],
        qtcInterval: '560-630ms',
        inheritance: 'De novo',
        references: ['PMID: 15107499']
    },
    { 
        id: 'CACNA1D-G403D', 
        gene: 'CACNA1D', 
        position: 'chr3:53718815', 
        type: 'Missense', 
        significance: 'Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Autism', 'Seizures', 'Hypoglycemia'],
        qtcInterval: '520-600ms',
        inheritance: 'De novo',
        references: ['PMID: 24033266']
    },
    { 
        id: 'CACNA1C-I1166T', 
        gene: 'CACNA1C', 
        position: 'chr12:2645394', 
        type: 'Missense', 
        significance: 'Likely Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Developmental delay'],
        qtcInterval: '540-600ms',
        inheritance: 'De novo',
        references: ['PMID: 25524159']
    },
    { 
        id: 'CACNA1C-A1473G', 
        gene: 'CACNA1C', 
        position: 'chr12:2700145', 
        type: 'Missense', 
        significance: 'Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Syndactyly', 'Immune deficiency', 'Hypoglycemia'],
        qtcInterval: '570-640ms',
        inheritance: 'De novo',
        references: ['PMID: 15107499', 'PMID: 18052861']
    },
    { 
        id: 'CACNA1C-G1216A', 
        gene: 'CACNA1C', 
        position: 'chr12:2674821', 
        type: 'Missense', 
        significance: 'Likely Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Autism', 'Developmental delay'],
        qtcInterval: '550-610ms',
        inheritance: 'De novo',
        references: ['PMID: 25524159']
    },
    { 
        id: 'CACNA1D-S652L', 
        gene: 'CACNA1D', 
        position: 'chr3:53724931', 
        type: 'Missense', 
        significance: 'Pathogenic', 
        frequency: '<0.0001',
        phenotypes: ['Long QT Syndrome', 'Seizures', 'Autism'],
        qtcInterval: '530-610ms',
        inheritance: 'De novo',
        references: ['PMID: 24033266']
    }
];

// Current active filters
let activeFilters = {
    genes: ['CACNA1C', 'CACNA1D'],
    pathogenic: false,
    cardiac: false
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Timothy Syndrome Research Portal initialized');
    initializeFilters();
    attachButtonHandlers();
});

// Initialize filter checkboxes
function initializeFilters() {
    const filterCheckboxes = document.querySelectorAll('.search-filters input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateFilters);
    });
}

// Update active filters based on checkbox state
function updateFilters() {
    const checkboxes = document.querySelectorAll('.search-filters input[type="checkbox"]');
    activeFilters.genes = [];
    activeFilters.pathogenic = false;
    activeFilters.cardiac = false;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            const label = cb.parentElement.textContent.trim();
            if (label.includes('CACNA1C')) activeFilters.genes.push('CACNA1C');
            if (label.includes('CACNA1D')) activeFilters.genes.push('CACNA1D');
            if (label.includes('Pathogenic')) activeFilters.pathogenic = true;
            if (label.includes('Cardiac')) activeFilters.cardiac = true;
        }
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        performSearch();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        searchResults.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">Enter a search term to begin</p>';
        return;
    }

    // Filter variants based on search query
    const results = sampleVariants.filter(variant => 
        variant.id.toLowerCase().includes(query) ||
        variant.gene.toLowerCase().includes(query) ||
        variant.type.toLowerCase().includes(query) ||
        variant.position.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <p style="font-size: 1.25rem; color: #6b7280; margin-bottom: 0.5rem;">No results found</p>
                <p style="color: #9ca3af;">Try searching for CACNA1C, CACNA1D, G406R, or a position</p>
            </div>
        `;
        return;
    }

    // Display results
    let resultsHTML = `
        <div style="margin-bottom: 1rem;">
            <strong>${results.length}</strong> result${results.length !== 1 ? 's' : ''} found for "${query}"
        </div>
        <div style="display: grid; gap: 1rem;">
    `;

    results.forEach(variant => {
        const badgeClass = variant.significance === 'Pathogenic' ? 'badge-pathogenic' : 
                          variant.significance === 'Likely Pathogenic' ? 'badge-likely-pathogenic' : 
                          'badge-vus';
        
        resultsHTML += `
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: #1f2937;">${variant.id}</h3>
                        <span class="gene-tag${variant.gene === 'CACNA1D' ? ' gene-tag-alt' : ''}">${variant.gene}</span>
                    </div>
                    <span class="badge ${badgeClass}">${variant.significance}</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; color: #6b7280;">
                    <div>
                        <strong>Position:</strong> ${variant.position}
                    </div>
                    <div>
                        <strong>Type:</strong> ${variant.type}
                    </div>
                    <div>
                        <strong>Frequency:</strong> ${variant.frequency}
                    </div>
                </div>
                <div style="margin-top: 1rem;">
                    <button class="btn-small">View Details</button>
                </div>
            </div>
        `;
    });

    resultsHTML += '</div>';
    searchResults.innerHTML = resultsHTML;
}

// Allow search on Enter key
document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Tab switching functionality
function switchTab(tabName) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update table content based on tab
    const tableBody = document.getElementById('tableBody');
    
    if (tabName === 'variants') {
        // Already showing variants (default)
        return;
    } else if (tabName === 'genes') {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem; color: #6b7280;">
                    <strong style="display: block; font-size: 1.1rem; margin-bottom: 0.5rem;">Gene Browser</strong>
                    Comprehensive gene information for TSC1 and TSC2
                </td>
            </tr>
        `;
    } else if (tabName === 'phenotypes') {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem; color: #6b7280;">
                    <strong style="display: block; font-size: 1.1rem; margin-bottom: 0.5rem;">Phenotype Browser</strong>
                    Clinical phenotype data and correlations
                </td>
            </tr>
        `;
    } else if (tabName === 'studies') {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem; color: #6b7280;">
                    <strong style="display: block; font-size: 1.1rem; margin-bottom: 0.5rem;">Studies Browser</strong>
                    Research studies and publications database
                </td>
            </tr>
        `;
    }
}

// Highlight active navigation on scroll
let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Timothy Syndrome Research Portal initialized');
});
