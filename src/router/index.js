import Vue from "vue"
import Router from "vue-router"

import Home from "../components/Home.vue"
import error404 from "../components/error404.vue"
import about from "../components/about.vue"
import account from "../components/account.vue"
import article from "../components/article.vue"
import blog from "../components/blog.vue"
import brands from "../components/brands.vue"
import cart from "../components/cart.vue"
import catalog from "../components/catalog.vue"
import category from "../components/category.vue"
import checkout from "../components/checkout.vue"
import compare from "../components/compare.vue"
import contacts from "../components/contacts.vue"
import delivery from "../components/delivery.vue"
import faq from "../components/faq.vue"
import favorites from "../components/favorites.vue"
import news from "../components/news.vue"
import personal from "../components/personal.vue"
import product from "../components/product.vue"
import setting from "../components/setting.vue"
import subcategory from "../components/subcategory.vue"

Vue.use(Router)


const router = new Router({
    routes: [
        { path: "/", component: Home, name: "Home" },
        { path: "/account", component: account, name: "account" },
        { path: "/faq", component: faq, name: "faq" },
        { path: "/news", component: news, name: "news" },
        { path: "/contacts", component: contacts, name: "contacts" },
        { path: "", component: error404, name: "error404" },
        { path: "/blog", component: blog, name: "blog" },
        { path: "/about", component: about, name: "about" },
        { path: "/brands", component: brands, name: "brands" },
        { path: "/subcategory", component: subcategory, name: "subcategory" },
        { path: "/compare", component: compare, name: "compare" },
        { path: "/catalog", component: catalog, name: "catalog" },
        { path: "/article", component: article, name: "article" },
        { path: "/cart", component: cart, name: "cart" },
        { path: "/category", component: category, name: "category" },
        { path: "/checkout", component: checkout, name: "checkout" },
        { path: "/delivery", component: delivery, name: "delivery" },
        { path: "/favorites", component: favorites, name: "favorites" },
        { path: "/personal", component: personal, name: "personal" },
        { path: "/product", component: product, name: "product", props: true },
        { path: "/setting", component: setting, name: "setting" },
    ]
})

export default router