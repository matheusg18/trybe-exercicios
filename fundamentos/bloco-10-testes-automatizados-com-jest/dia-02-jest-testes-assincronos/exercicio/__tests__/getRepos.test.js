const getRepos = require('../getRepos');
const URL = 'https://api.github.com/orgs/tryber/repos';
const repos = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];

describe('Verifica se alguns repositórios existem no github da Trybe', () => {
  it('Testa se tem sd-01-week4-5-project-todo-list', () =>
    expect(getRepos(URL)).resolves.toContain(repos[0]));
  it('Testa se tem sd-01-week4-5-project-meme-generator', () =>
    expect(getRepos(URL)).resolves.toContain(repos[1]));
});
