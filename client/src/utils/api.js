export default {
  getProjects: (filter) => fetch(`/api/projects?${filter}`)
    .then(resp => resp.json())
    .catch(err => console.error(err.stack))
}
