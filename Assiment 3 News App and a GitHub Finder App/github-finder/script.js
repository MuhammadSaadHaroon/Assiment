// Simple GitHub Finder (no auth needed for basic searches)
const resultsEl = document.getElementById('results');
document.getElementById('searchBtn').addEventListener('click', searchUser);

async function searchUser(){
  const q = document.getElementById('username').value.trim();
  resultsEl.innerHTML = '<p class="message">Searching...</p>';
  if(!q){ resultsEl.innerHTML = '<p class="message">Type a username</p>'; return; }
  try{
    // Get user
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(q)}`);
    if(res.status === 404) { resultsEl.innerHTML = '<p class="message">User not found</p>'; return; }
    if(!res.ok) throw new Error('API error');
    const user = await res.json();
    // Get repos (first 10)
    const rres = await fetch(user.repos_url + '?per_page=10&sort=updated');
    const repos = await rres.json();
    render(user, repos);
  }catch(err){
    resultsEl.innerHTML = `<p class="message">Error: ${err.message}</p>`;
  }
}

function render(user, repos){
  resultsEl.innerHTML = `
    <div class="card">
      <div style="display:flex;gap:12px;align-items:center">
        <img src="${user.avatar_url}" style="width:80px;height:80px;border-radius:8px;object-fit:cover" />
        <div>
          <h3>${user.name||user.login}</h3>
          <p>${user.bio||''}</p>
          <p>Followers: ${user.followers} • Following: ${user.following}</p>
          <a href="${user.html_url}" target="_blank">View on GitHub</a>
        </div>
      </div>
      <hr>
      <h4>Top repos</h4>
      <ul>${repos.map(r=>`<li><a href="${r.html_url}" target="_blank">${r.name}</a> — ${r.stargazers_count} ★</li>`).join('')}</ul>
    </div>
  `;
}