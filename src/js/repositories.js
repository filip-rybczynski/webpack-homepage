fetch('https://api.github.com/users/filip-rybczynski/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp => {
  for (let repo of resp) {
    const {name, html_url} = repo;
    const repositoryList = document.querySelector('.list--js');
    const myTemplate = `<li class="list">
    ${name} (<a class="list_link" href="${html_url}" title="link do repozytorium">link</a>)
    </li>`;
    repositoryList.innerHTML += myTemplate; //operator += pozwala dopisywać bez nadpisywania
  }
})
.catch(error => {
  console.log(error);
})