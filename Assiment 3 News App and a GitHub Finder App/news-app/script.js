// Simple News App (vanilla JS)
// Uses NewsAPI.org (requires API key). If no key provided, shows example articles.
const API_KEY = typeof NEWS_API_KEY !== 'undefined' ? NEWS_API_KEY : '';
const resultsEl = document.getElementById('results');
const messageEl = document.getElementById('message');
document.getElementById('searchBtn').addEventListener('click', doSearch);

async function doSearch(){
  const q = document.getElementById('query').value.trim();
  const country = document.getElementById('country').value;
  resultsEl.innerHTML = '<p class="message">Loading...</p>';
  try{
    if(!API_KEY){
      // show sample data
      const sample = getSampleArticles(q);
      renderArticles(sample);
      messageEl.textContent = 'No API key set — showing sample results. Get a key from newsapi.org and put it in config.js';
      return;
    }
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${encodeURIComponent(q)}&apiKey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    if(data.status !== 'ok') throw new Error(data.message || 'API error');
    renderArticles(data.articles);
    messageEl.textContent = 'Results from NewsAPI.org';
  }catch(err){
    resultsEl.innerHTML = `<p class="message">Error: ${err.message}</p>`;
  }
}

function renderArticles(articles){
  if(!articles || articles.length === 0){
    resultsEl.innerHTML = '<p class="message">No articles found.</p>';
    return;
  }
  resultsEl.innerHTML = articles.map(a=>`
    <article class="card">
      ${a.urlToImage ? `<img src="${a.urlToImage}" alt="">` : ''}
      <h3>${escapeHtml(a.title||'No title')}</h3>
      <p>${escapeHtml(a.description||'')}</p>
      <a href="${a.url}" target="_blank" rel="noopener">Read more</a>
    </article>
  `).join('');
}

function escapeHtml(s){ return (s||'').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }

function getSampleArticles(q){
  const all = [
    {title:"Local startup raises funds", description:"A Karachi-based startup raised seed funding.", url:"#", urlToImage:"https://picsum.photos/400/200?random=1"},
    {title:"Sports: big win", description:"An exciting match ended with a close result.", url:"#", urlToImage:"https://picsum.photos/400/200?random=2"},
    {title:"Tech: JS tips", description:"Learn ES6 features with examples.", url:"#", urlToImage:"https://picsum.photos/400/200?random=3"}
  ];
  if(!q) return all;
  return all.filter(a=> (a.title + ' ' + a.description).toLowerCase().includes(q.toLowerCase()));
}