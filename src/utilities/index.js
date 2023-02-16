import Navigo from "navigo";
const router = new Navigo("/", {linksSelector: "a"});

const render = (content, target) => {
    target.innerHTML = content();
};

export {render};