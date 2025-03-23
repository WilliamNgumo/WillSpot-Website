import home from "./views/home.js";
import tournaments from "./views/tournaments.js";
import Support from "./views/Support.js";
import contact from "./views/contact.js";


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: home},
        { path: "/tournaments", view:tournaments },
        { path: "/support", view: Support },
        { path: "/contact", view: contact },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }


    const view = new match.route.view();


    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log( new match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});