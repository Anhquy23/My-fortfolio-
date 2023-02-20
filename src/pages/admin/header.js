
const headerAdminPage = () => {
  return `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link pr-4 " aria-current="page" href="/admin/projects">Home</a>
        <a class="nav-link pr-4" href="/admin/projects">Dự án</a>
        <a class="nav-link pr-4" href="#">Thông Tin</a>
        <a class="nav-link pr-4" href="#">Tin tức</a>
        <a class="nav-link pr-4" href="#">Góp ý</a>
      </div>
    </div>
  </div>
</nav>
  `
}

export default headerAdminPage