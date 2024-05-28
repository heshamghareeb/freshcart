"use strict";(self.webpackChunkFresh_Cart=self.webpackChunkFresh_Cart||[]).push([[953],{4768:(f,m,s)=>{s.d(m,{e:()=>d});var t=s(8784),p=s(5619);const a_baseUrlAuth="https://ecommerce.routemisr.com/api/v1/auth";var u=s(9212),v=s(1474),h=s(101);let d=(()=>{class o{constructor(r,g){this._HttpClient=r,this._Router=g,this.userData=new p.X(null),this.saveUser()}saveUser(){const r=localStorage.getItem("_token");if(r)try{const g=(0,t.o)(r);g.name&&this.userData.next(g)}catch(g){g.message.includes("Invalid token")&&(localStorage.removeItem("_token"),this._Router.navigate(["/login"]))}}setRegister(r){return this._HttpClient.post(a_baseUrlAuth+"/signup",r)}setLogin(r){return this._HttpClient.post(a_baseUrlAuth+"/signin",r)}setForgotPassword(r){return this._HttpClient.post(a_baseUrlAuth+"/forgotPasswords",r)}setVerifyResetCode(r){return this._HttpClient.post(a_baseUrlAuth+"/verifyResetCode",r)}resetPassword(r){return this._HttpClient.put(a_baseUrlAuth+"/resetPassword",r)}setChangePassword(r){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",r)}static#t=this.\u0275fac=function(g){return new(g||o)(u.LFG(v.eN),u.LFG(h.F0))};static#e=this.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},2893:(f,m,s)=>{s.d(m,{N:()=>v});var t=s(9212),p=s(5619),a=s(553),u=s(1474);let v=(()=>{class h{constructor(o){this._HttpClient=o,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new p.X(0),this.cartNumberSignal=(0,t.tdS)(0)}addToCart(o){return this._HttpClient.post(a.N.baseUrlData+"/cart",{productId:o})}getCartUser(){return this._HttpClient.get(a.N.baseUrlData+"/cart")}removeCartItem(o){return this._HttpClient.delete(this.baseUrl+`cart/${o}`)}updateCartCount(o,e){return this._HttpClient.put(this.baseUrl+`cart/${o}`,{count:e})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(o,e){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${o}?url=https://heshamghareeb.github.io/freshcart`,{shippingAddress:e})}updateCartNumberSignal(o){this.cartNumberSignal.update(()=>o)}static#t=this.\u0275fac=function(e){return new(e||h)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},5491:(f,m,s)=>{s.d(m,{J:()=>h});var t=s(9212),p=s(5619),a=s(553),u=s(1474),v=s(2425);let h=(()=>{class d{constructor(e,r){this._HttpClient=e,this._ToastrService=r,this.cartNumberSignal=(0,t.tdS)(0),this.wishList=new p.X([]),this.whishNumberSignal=(0,t.tdS)(0),this.products=[]}getUserOrders(e){return this._HttpClient.get(a.N.baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:r=>{"success"===r.status&&(this._ToastrService.success(r.message),this.updateCartNumberSignal(r.numOfCartItems))}})}updateCartNumberSignal(e){this.cartNumberSignal.update(()=>e)}SetcheckOut(e,r){return this._HttpClient.post(a.N.baseUrlData+`/orders/checkout-session/${e}?url=${a.N.payUrl}`,r)}getProducts(e=1){return this._HttpClient.get(a.N.baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(a.N.baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(a.N.baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(a.N.baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(a.N.baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(a.N.baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(a.N.baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(a.N.baseUrlData+"/cart")}updatePoductCount(e,r){return this._HttpClient.put(a.N.baseUrlData+"/cart/"+e,{count:r})}deletePoductCart(e){return this._HttpClient.delete(a.N.baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(a.N.baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(a.N.baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(a.N.baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(a.N.baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(a.N.baseUrlData+"/wishlist")}updateWishlistItem(e){this.wishList.next(e)}updateWhishNumberSignal(e){this.whishNumberSignal.update(()=>e)}setAddresses(e){return this._HttpClient.post(a.N.baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(a.N.baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(a.N.baseUrlData+`/addresses/${e}`)}static#t=this.\u0275fac=function(r){return new(r||d)(t.LFG(u.eN),t.LFG(v._W))};static#e=this.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},953:(f,m,s)=>{s.d(m,{S:()=>E});var t=s(9212),p=s(6814),a=s(101),u=s(2618),v=s(4768),h=s(5491),d=s(2893);function o(l,_){if(1&l&&(t.TgZ(0,"span",34),t._uU(1),t.qZA()),2&l){const n=t.oxw();t.xp6(1),t.hij(" ",n.whishItemNumberS," ")}}function e(l,_){if(1&l){const n=t.EpF();t.TgZ(0,"li",35),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.changeLangage("en"))}),t.TgZ(1,"span",36)(2,"span"),t._uU(3,"EN"),t.qZA(),t._UZ(4,"img",37),t.qZA()()}}function r(l,_){if(1&l){const n=t.EpF();t.TgZ(0,"li",35),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.changeLangage("ar"))}),t.TgZ(1,"span",36),t._UZ(2,"img",38),t.TgZ(3,"span"),t._uU(4,"AR"),t.qZA()()()}}const g=(l,_)=>({"me-auto":l,"ms-auto":_}),U=(l,_)=>({"ms-auto":l,"me-auto":_}),N=l=>({"fa-flip-horizontal":l}),D=(l,_)=>({"end-0":l,"start-0":_});let E=(()=>{class l{constructor(n,c,i,C,b,O,L){this.translate=n,this._AuthService=c,this._Router=i,this._EcomdataService=C,this._CartService=b,this.document=O,this.translateService=L,this.pageDirAR=!1,this.whishItemNumberS=0,this.cartItemNumberS=0,this.userName="",(0,t.cEC)(()=>{this.whishItemNumberS=this._EcomdataService.whishNumberSignal()}),(0,t.cEC)(()=>{this.cartItemNumberS=this._CartService.cartNumberSignal()})}changeLangage(n){this.document.getElementsByTagName("html")[0].dir="ar"===n?"rtl":"ltr",this.translateService.setDefaultLang(n),this.translateService.use(n),this.changeCssFile(n)}changeCssFile(n){let c=this.document.getElementsByTagName("head")[0],i=this.document.getElementById("langCss"),C="ar"===n?"arabicStyle.css":"englishStyle.css";if(i)i.href=C;else{let b=this.document.createElement("link");b.rel="stylesheet",b.type="text/css",b.id="langCss",b.href=C,c.appendChild(b)}}ngOnInit(){this._AuthService.userData.subscribe({next:n=>{this.userName=null!==n&&n.name?n?.name?.slice(0,1).toUpperCase():"U"}}),this._Router.url.includes("cart")&&this._CartService.getCartUser().subscribe({next:n=>{"success"===n.status&&(this._CartService.updateCartNumberSignal(n.numOfCartItems),this.cartItemNumberS=this._CartService.cartNumberSignal())},error:n=>{}}),this._Router.url.includes("whishlist")||this._EcomdataService.getWishlist().subscribe({next:n=>{if("success"===n.status){const c=n.data.map(i=>i._id);this._EcomdataService.updateWhishNumberSignal(n.data.length),this._EcomdataService.updateWishlistItem(c),this.whishItemNumberS=this._EcomdataService.whishNumberSignal()}}})}logOut(){localStorage.removeItem("_token"),this._AuthService.userData.next(null),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(c){return new(c||l)(t.Y36(u.sK),t.Y36(v.e),t.Y36(a.F0),t.Y36(h.J),t.Y36(d.N),t.Y36(p.K0),t.Y36(u.sK))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-navbar"]],standalone:!0,features:[t.jDz],decls:51,vars:34,consts:[[1,"navbar","shadow-sm","navbar-expand-lg","fixed-top","navbar-light","bg-light","px-5"],["navbar",""],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","freshCart"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","mt-2","mt-lg-0",3,"ngClass"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],[1,"navbar-nav","mt-2","mt-lg-0","navbar-icons",3,"ngClass"],[1,"nav-item","me-3","hstack"],["routerLink","/whishlist",1,"text-main","number-item"],[1,"fas","fa-heart","fa-2x"],["class","text-white",4,"ngIf"],["routerLink","/cart",1,"nav-link","position-relative"],[1,"fas","fa-cart-shopping","fa-2xl","text-main",3,"ngClass"],[1,"badge","bg-info","position-absolute","top-0","end-0",3,"ngClass"],["ngbDropdown","",1,"nav-item","dropdown","pe-2"],["id","navbarScrollingDropdown","role","button","data-bs-toggle","dropdown","aria-expanded","false","ngbDropdownToggle","",1,"nav-link","text-main"],[1,"fa-solid","fa-bars","nav-icons"],["ngbDropdownMenu","","aria-labelledby","navbarScrollingDropdown",1,"dropdown-menu","dropstart"],["ngbDropdownItem","","class","p-2",3,"click",4,"ngIf"],["ngbDropdownItem",""],["href","https://www.facebook.com/HxBoss","target","_blank",1,"text-reset",2,"color","#4267B2 !important"],[1,"fab","fa-facebook","h4"],["target","_blank","href","https://api.whatsapp.com/send?phone=01119244463",1,"text-reset"],[1,"fab","fa-whatsapp","text-main","h4"],[1,"nav-item","ms-auto","align-content-center"],["role","button",1,"nav-link","h6",3,"click"],[1,"text-white"],["ngbDropdownItem","",1,"p-2",3,"click"],[1,""],["src","../../../assets/images/united-states.png","alt","",1,"p-1","flag-icon"],["src","../../../assets/images/flag.png","alt","",1,"p-1","flag-icon"]],template:function(c,i){1&c&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"li",9)(14,"a",11),t._uU(15),t.ALo(16,"translate"),t.qZA()(),t.TgZ(17,"li",9)(18,"a",12),t._uU(19),t.ALo(20,"translate"),t.qZA()(),t.TgZ(21,"li",9)(22,"a",13),t._uU(23),t.ALo(24,"translate"),t.qZA()()(),t.TgZ(25,"ul",14)(26,"li",15)(27,"a",16),t._UZ(28,"i",17),t.YNc(29,o,2,1,"span",18),t.qZA()(),t.TgZ(30,"li",15)(31,"a",19),t._UZ(32,"i",20),t.TgZ(33,"span",21),t._uU(34),t.qZA()()(),t.TgZ(35,"li",22)(36,"a",23),t._UZ(37,"i",24),t.qZA(),t.TgZ(38,"ul",25),t.YNc(39,e,5,0,"li",26)(40,r,5,0,"li",26),t.TgZ(41,"li",27)(42,"a",28),t._UZ(43,"i",29),t.qZA()(),t.TgZ(44,"li",27)(45,"a",30),t._UZ(46,"i",31),t.qZA()(),t.TgZ(47,"li",32)(48,"span",33),t.NdJ("click",function(){return i.logOut()}),t._uU(49),t.ALo(50,"translate"),t.qZA()()()()()()()()),2&c&&(t.xp6(8),t.Q6J("ngClass",t.WLB(23,g,"en"===i.translate.currentLang,"ar"===i.translate.currentLang)),t.xp6(3),t.Oqu(t.lcZ(12,13,"Home")),t.xp6(4),t.Oqu(t.lcZ(16,15,"Products")),t.xp6(4),t.Oqu(t.lcZ(20,17,"Brands")),t.xp6(4),t.Oqu(t.lcZ(24,19,"Categories")),t.xp6(2),t.Q6J("ngClass",t.WLB(26,U,"en"===i.translate.currentLang,"ar"===i.translate.currentLang)),t.xp6(4),t.Q6J("ngIf",i.whishItemNumberS),t.xp6(3),t.Q6J("ngClass",t.VKq(29,N,"ar"===i.translate.currentLang)),t.xp6(1),t.Q6J("ngClass",t.WLB(31,D,"en"===i.translate.currentLang,"ar"===i.translate.currentLang)),t.xp6(1),t.hij(" ",i.cartItemNumberS," "),t.xp6(5),t.Q6J("ngIf","ar"==i.translate.currentLang),t.xp6(1),t.Q6J("ngIf","en"==i.translate.currentLang),t.xp6(9),t.Oqu(t.lcZ(50,21,"SignOut")))},dependencies:[p.ez,p.mk,p.O5,a.rH,a.Od,u.aw,u.X$],styles:[".navbar[_ngcontent-%COMP%]{transition:padding 1s}.number-item[_ngcontent-%COMP%]{position:relative}.number-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:18%;left:36%;color:#343a40;z-index:10;font-weight:900}.nav-icons[_ngcontent-%COMP%]{font-size:25px}.flag-icon[_ngcontent-%COMP%]{width:25px;height:25px}.dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#055d0a!important;color:#fff!important}.dropdown-item[_ngcontent-%COMP%]{transition:1s!important;padding:4px!important;-webkit-transition:1s!important;-moz-transition:1s!important;-ms-transition:1s!important;-o-transition:1s!important}.dropdown-menu[_ngcontent-%COMP%]{padding:3px!important;text-align:center}.dropdown-menu[data-bs-popper][_ngcontent-%COMP%]{left:-124%!important}@media only screen and (min-width: 320px) and (max-width: 992px){.navbar-icons[_ngcontent-%COMP%]{flex-direction:row}}"]})}return l})()},553:(f,m,s)=>{s.d(m,{N:()=>t});const t={baseUrlAuth:"https://ecommerce.routemisr.com/api/v1/auth",baseUrlUser:"https://ecommerce.routemisr.com/api/v1",baseUrlData:"https://ecommerce.routemisr.com/api/v1",payUrl:"https://heshamghareeb.github.io/freshcart"}}}]);