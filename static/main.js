
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', function(e) {
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			e.preventDefault();
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

// Theme toggle (light/dark)
const themeBtn = document.createElement('button');
themeBtn.textContent = '🌙';
themeBtn.className = 'theme-toggle';
document.querySelector('.navbar').appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark-theme');
	themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Optional: Add dark theme styles
const darkStyles = document.createElement('style');
darkStyles.textContent = `
	body.dark-theme {
		background: #18181b;
		color: #f3f4f6;
	}
	body.dark-theme main {
		background: #23272f;
		color: #f3f4f6;
	}
	body.dark-theme .navbar, body.dark-theme .logo {
		color: #f3f4f6;
	}
	body.dark-theme .nav-links a {
		color: #f3f4f6;
	}
	body.dark-theme .section h2 {
		color: #38bdf8;
	}
	body.dark-theme .skills-list li, body.dark-theme .project-card {
		background: #23272f;
		color: #f3f4f6;
		border-color: #38bdf8;
	}
	body.dark-theme .btn-primary {
		background: #38bdf8;
		color: #18181b;
	}
	body.dark-theme .btn-secondary {
		background: #fbbf24;
		color: #18181b;
	}
`;
document.head.appendChild(darkStyles);

// Placeholder for project filtering (future enhancement)
// document.querySelectorAll('.project-card').forEach(card => { ... });
