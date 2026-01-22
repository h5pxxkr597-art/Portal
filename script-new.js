// Extended Timothy Syndrome variant database with comprehensive clinical data
const variants = [
    { id: 'CACNA1C-G406R', gene: 'CACNA1C', position: 'chr12:2162859', type: 'Missense', significance: 'Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Syndactyly', 'Autism', 'Immune deficiency'], qtcInterval: '550-650ms', inheritance: 'De novo', references: ['PMID: 15107499', 'PMID: 20301310'] },
    { id: 'CACNA1C-G402S', gene: 'CACNA1C', position: 'chr12:2162847', type: 'Missense', significance: 'Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Developmental delay', 'Syndactyly'], qtcInterval: '580-620ms', inheritance: 'De novo', references: ['PMID: 15107499'] },
    { id: 'CACNA1C-G406T', gene: 'CACNA1C', position: 'chr12:2162858', type: 'Missense', significance: 'Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Cardiac arrhythmia', 'Syndactyly'], qtcInterval: '560-630ms', inheritance: 'De novo', references: ['PMID: 15107499'] },
    { id: 'CACNA1D-G403D', gene: 'CACNA1D', position: 'chr3:53718815', type: 'Missense', significance: 'Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Autism', 'Seizures', 'Hypoglycemia'], qtcInterval: '520-600ms', inheritance: 'De novo', references: ['PMID: 24033266'] },
    { id: 'CACNA1C-I1166T', gene: 'CACNA1C', position: 'chr12:2645394', type: 'Missense', significance: 'Likely Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Developmental delay'], qtcInterval: '540-600ms', inheritance: 'De novo', references: ['PMID: 25524159'] },
    { id: 'CACNA1C-A1473G', gene: 'CACNA1C', position: 'chr12:2700145', type: 'Missense', significance: 'Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Syndactyly', 'Immune deficiency', 'Hypoglycemia'], qtcInterval: '570-640ms', inheritance: 'De novo', references: ['PMID: 15107499', 'PMID: 18052861'] },
    { id: 'CACNA1C-G1216A', gene: 'CACNA1C', position: 'chr12:2674821', type: 'Missense', significance: 'Likely Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Autism', 'Developmental delay'], qtcInterval: '550-610ms', inheritance: 'De novo', references: ['PMID: 25524159'] },
    { id: 'CACNA1D-S652L', gene: 'CACNA1D', position: 'chr3:53724931', type: 'Missense', significance: 'Pathogenic', frequency: '<0.0001', phenotypes: ['Long QT Syndrome', 'Seizures', 'Autism'], qtcInterval: '530-610ms', inheritance: 'De novo', references: ['PMID: 24033266'] }
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Timothy Syndrome Research Portal initialized');
    initializeAll();
});

function initializeAll() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Search on Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        searchResults.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">Enter a search term to begin</p>';
        return;
    }

    const results = variants.filter(v => 
        v.id.toLowerCase().includes(query) ||
        v.gene.toLowerCase().includes(query) ||
        v.type.toLowerCase().includes(query) ||
        v.position.toLowerCase().includes(query) ||
        v.phenotypes.some(p => p.toLowerCase().includes(query))
    );

    if (results.length === 0) {
        searchResults.innerHTML = `<div style="text-align: center; padding: 3rem;"><p style="font-size: 1.25rem; color: #7f8c8d;">No results found</p><p style="color: #95a5a6;">Try CACNA1C, G406R, or Long QT</p></div>`;
        return;
    }

    let html = `<div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem;">
        <div><strong>${results.length}</strong> result${results.length !== 1 ? 's' : ''} found</div>
        <button class="btn-small" onclick="exportResults()">📥 Export</button>
    </div><div style="display: grid; gap: 1rem;">`;

    results.forEach(v => {
        const badge = v.significance === 'Pathogenic' ? 'badge-pathogenic' : 'badge-likely-pathogenic';
        html += `<div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <div>
                    <h3 style="font-size: 1.25rem; color: #2c3e50; margin-bottom: 0.5rem;">${v.id}</h3>
                    <span class="gene-tag${v.gene === 'CACNA1D' ? ' gene-tag-alt' : ''}">${v.gene}</span>
                </div>
                <span class="badge ${badge}">${v.significance}</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; color: #7f8c8d; margin-bottom: 1rem;">
                <div><strong>Position:</strong> ${v.position}</div>
                <div><strong>Type:</strong> ${v.type}</div>
                <div><strong>QTc:</strong> ${v.qtcInterval}</div>
            </div>
            <div style="margin-bottom: 1rem;"><strong style="color: #2c3e50;">Phenotypes:</strong><div style="margin-top: 0.5rem;">
                ${v.phenotypes.map(p => `<span class="phenotype-tag">${p}</span>`).join(' ')}
            </div></div>
            <button class="btn-small" onclick='showDetails(${JSON.stringify(v).replace(/'/g, "\\'")})'>View Full Details</button>
        </div>`;
    });

    searchResults.innerHTML = html + '</div>';
}

// Show variant details in modal
function showDetails(variant) {
    const badge = variant.significance === 'Pathogenic' ? 'badge-pathogenic' : 'badge-likely-pathogenic';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()"></div>
        <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
            <div style="padding: 2rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 2rem;">
                    <div>
                        <h2 style="color: #2c3e50; margin-bottom: 0.5rem;">${variant.id}</h2>
                        <span class="gene-tag${variant.gene === 'CACNA1D' ? ' gene-tag-alt' : ''}">${variant.gene}</span>
                    </div>
                    <span class="badge ${badge}">${variant.significance}</span>
                </div>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h3 style="color: #2c3e50; margin-bottom: 1rem;">Genomic Information</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <div><strong>Position:</strong> ${variant.position}</div>
                        <div><strong>Type:</strong> ${variant.type}</div>
                        <div><strong>Frequency:</strong> ${variant.frequency}</div>
                        <div><strong>Inheritance:</strong> ${variant.inheritance}</div>
                    </div>
                </div>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h3 style="color: #2c3e50; margin-bottom: 1rem;">Clinical Information</h3>
                    <div style="margin-bottom: 1rem;"><strong>QTc Interval:</strong> ${variant.qtcInterval}</div>
                    <div><strong>Phenotypes:</strong><div style="margin-top: 0.75rem;">
                        ${variant.phenotypes.map(p => `<span class="phenotype-tag">${p}</span>`).join(' ')}
                    </div></div>
                </div>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <h3 style="color: #2c3e50; margin-bottom: 1rem;">References</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${variant.references.map(ref => `
                            <li style="margin-bottom: 0.5rem;">
                                <a href="https://pubmed.ncbi.nlm.nih.gov/${ref.split(': ')[1]}/" target="_blank" style="color: #e74c3c;">
                                    ${ref} ↗
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div style="text-align: center;">
                    <button class="btn-primary" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
}

// Export to CSV
function exportResults() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    const results = variants.filter(v => 
        v.id.toLowerCase().includes(query) || v.gene.toLowerCase().includes(query) ||
        v.type.toLowerCase().includes(query) || v.phenotypes.some(p => p.toLowerCase().includes(query))
    );
    
    const csv = [
        ['Variant ID', 'Gene', 'Position', 'Type', 'Significance', 'Frequency', 'QTc', 'Phenotypes', 'Inheritance'],
        ...results.map(v => [v.id, v.gene, v.position, v.type, v.significance, v.frequency, v.qtcInterval, v.phenotypes.join('; '), v.inheritance])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'timothy_syndrome_variants.csv';
    link.click();
    URL.revokeObjectURL(url);
}

// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const tableBody = document.getElementById('tableBody');
    
    if (tabName === 'variants') {
        tableBody.innerHTML = variants.slice(0, 5).map(v => `
            <tr>
                <td>${v.id}</td>
                <td><span class="gene-tag${v.gene === 'CACNA1D' ? ' gene-tag-alt' : ''}">${v.gene}</span></td>
                <td>${v.position}</td>
                <td>${v.type}</td>
                <td><span class="badge ${v.significance === 'Pathogenic' ? 'badge-pathogenic' : 'badge-likely-pathogenic'}">${v.significance}</span></td>
                <td>${v.frequency}</td>
                <td><button class="btn-small" onclick='showDetails(${JSON.stringify(v).replace(/'/g, "\\'")})'> View</button></td>
            </tr>
        `).join('');
    } else if (tabName === 'genes') {
        tableBody.innerHTML = `<tr><th>Gene</th><th>Chromosome</th><th>Variants</th><th>Pathogenic</th><th>Patients</th><th>Actions</th></tr>
            <tr><td><span class="gene-tag">CACNA1C</span></td><td>chr12</td><td>6</td><td>5</td><td>189</td><td><button class="btn-small">View</button></td></tr>
            <tr><td><span class="gene-tag gene-tag-alt">CACNA1D</span></td><td>chr3</td><td>2</td><td>2</td><td>49</td><td><button class="btn-small">View</button></td></tr>`;
    } else if (tabName === 'phenotypes') {
        tableBody.innerHTML = `<tr><th>Phenotype</th><th>Frequency</th><th>Severity</th><th>Management</th></tr>
            <tr><td><strong>Long QT Syndrome</strong></td><td>100%</td><td>Severe</td><td>Beta-blockers, ICD</td></tr>
            <tr><td><strong>Syndactyly</strong></td><td>70%</td><td>Mild-Moderate</td><td>Surgical correction</td></tr>
            <tr><td><strong>Autism/ASD</strong></td><td>80%</td><td>Variable</td><td>Behavioral therapy</td></tr>
            <tr><td><strong>Immune deficiency</strong></td><td>50%</td><td>Moderate</td><td>IVIG, prophylaxis</td></tr>`;
    } else if (tabName === 'studies') {
        tableBody.innerHTML = `<tr><th>Study</th><th>Status</th><th>Participants</th><th>Location</th><th>Contact</th></tr>
            <tr><td><strong>Natural History Study</strong></td><td><span class="trial-status active">Active</span></td><td>142</td><td>Multi-site</td><td><a href="mailto:research@timothysyndrome.org" style="color: #e74c3c;">research@timothysyndrome.org</a></td></tr>
            <tr><td><strong>Cardiac Treatment Response</strong></td><td><span class="trial-status active">Recruiting</span></td><td>58</td><td>USA</td><td><a href="mailto:cardiac@timothysyndrome.org" style="color: #e74c3c;">cardiac@timothysyndrome.org</a></td></tr>`;
    }
}
