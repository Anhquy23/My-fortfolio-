import nav from "./nav";

const header = () => {
  return `
  <header class="header">
  <div class="container">
      <ul class=" pt-3">
          <button class="btn btn-info ">Đăng nhập</button>
          <button class="btn btn-info ">Đăng ký</button>
      </ul>  
      <div class="header-content">
          <h4 class="header-subtitle" >Xin Chào, Tôi là</h4>
          <h1 class="header-title">ANH QUÝ</h1>
          <h6 class="header-mono" >Lập Trình Viên Front End</h6>
      </div>
  </div>
</header>
${nav()}
  `;
}

export default header