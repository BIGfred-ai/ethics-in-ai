// Minimal JS to count words in main content for your own check (ignores references)
(function(){
  const main = document.querySelector('main');
  if(!main) return;
  const text = main.innerText || '';
  const count = text.trim().split(/\s+/).length;
  console.log('Approximate word count (incl headings, excl nav/footer):', count);
})();