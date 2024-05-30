"use strict";(self.webpackChunkFresh_Cart=self.webpackChunkFresh_Cart||[]).push([[290],{2893:(v,m,s)=>{s.d(m,{N:()=>C});var o=s(9212),p=s(5619),d=s(553),t=s(1474);let C=(()=>{class l{constructor(n){this._HttpClient=n,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new p.X(0),this.cartNumberSignal=(0,o.tdS)(0)}addToCart(n){return this._HttpClient.post(d.N.baseUrlData+"/cart",{productId:n})}getCartUser(){return this._HttpClient.get(d.N.baseUrlData+"/cart")}removeCartItem(n){return this._HttpClient.delete(this.baseUrl+`cart/${n}`)}updateCartCount(n,u){return this._HttpClient.put(this.baseUrl+`cart/${n}`,{count:u})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(n,u){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${n}?url=https://heshamghareeb.github.io/freshcart`,{shippingAddress:u})}updateCartNumberSignal(n){this.cartNumberSignal.update(()=>n)}static#t=this.\u0275fac=function(u){return new(u||l)(o.LFG(t.eN))};static#e=this.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},5290:(v,m,s)=>{s.r(m),s.d(m,{CartComponent:()=>x});var o=s(6814),p=s(101),d=s(2618),t=s(9212),C=s(2893);function l(a,b){if(1&a){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"translate"),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"button",16,17),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.MAs(12),h=t.oxw(2);return t.KtG(h.removeItem(c.product._id,_))}),t._UZ(13,"i",18),t._uU(14),t.ALo(15,"translate"),t.qZA()(),t.TgZ(16,"div")(17,"button",19,20),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.MAs(18),h=t.MAs(23),g=t.oxw(2);return t.KtG(g.changeCount(c.count-1,c.product._id,_,h))}),t._uU(19," - "),t.qZA(),t.TgZ(20,"span"),t._uU(21),t.qZA(),t.TgZ(22,"button",19,21),t.NdJ("click",function(){const c=t.CHM(e).$implicit,_=t.MAs(18),h=t.MAs(23),g=t.oxw(2);return t.KtG(g.changeCount(c.count+1,c.product._id,_,h))}),t._uU(24," + "),t.qZA()()()()}if(2&a){const e=b.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.AsE(" ",t.lcZ(9,7,"Price"),": ",t.xi3(10,9,e.price,"EGP ")," "),t.xp6(6),t.hij(" ",t.lcZ(15,12,"Remove")," "),t.xp6(7),t.hij(" ",e.count," ")}}const A=a=>["/payment",a];function n(a,b){if(1&a){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.clear())}),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"p",6),t._uU(9),t.ALo(10,"translate"),t.ALo(11,"currency"),t.qZA(),t.YNc(12,l,25,14,"div",7),t.TgZ(13,"button",8),t._uU(14),t.ALo(15,"translate"),t._UZ(16,"img",9),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,7,"Shop Cart")),t.xp6(3),t.hij(" ",t.lcZ(7,9,"Clear Cart")," "),t.xp6(3),t.AsE(" ",t.lcZ(10,11,"Total Price"),": ",t.xi3(11,13,e.cartDetails.totalCartPrice,"EGP ")," "),t.xp6(3),t.Q6J("ngForOf",e.cartDetails.data.products),t.xp6(1),t.Q6J("routerLink",t.VKq(18,A,e.cartDetails.data._id)),t.xp6(1),t.hij(" ",t.lcZ(15,16,"Online Payment")," ")}}function u(a,b){1&a&&(t.TgZ(0,"h2",22),t._uU(1,"Your Cart Is Empty..."),t.qZA())}let x=(()=>{class a{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=!1}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{console.log(e,"test1"),this.cartDetails=e},error:e=>{this.cartDetails=!1}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:i=>{this.cartDetails=i,0==this.cartDetails.numOfCartItems&&this.clear(),this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(this.cartDetails.numOfCartItems),this._CartService.updateCartNumberSignal(this.cartDetails.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,i,c){e>=1&&(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(c,"disabled","true"),this._CartService.updateCartCount(r,e).subscribe({next:_=>{this.cartDetails=_,this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(c,"disabled")},error:_=>{this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(c,"disabled")}}))}clear(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetails=!1,this._CartService.cartNumber.next(0),this._CartService.updateCartNumberSignal(0))}})}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(C.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main","end-0"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-3",3,"routerLink"],["src","./assets/images/visa.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],["btn2",""],[1,"text-center"]],template:function(r,i){if(1&r&&t.YNc(0,n,17,20,"section",0)(1,u,2,0,"ng-template",null,1,t.W1O),2&r){const c=t.MAs(2);t.Q6J("ngIf",i.cartDetails)("ngIfElse",c)}},dependencies:[o.ez,o.sg,o.O5,o.H9,p.rH,d.aw,d.X$]})}return a})()},553:(v,m,s)=>{s.d(m,{N:()=>o});const o={baseUrlAuth:"https://ecommerce.routemisr.com/api/v1/auth",baseUrlUser:"https://ecommerce.routemisr.com/api/v1",baseUrlData:"https://ecommerce.routemisr.com/api/v1",payUrl:"https://heshamghareeb.github.io/freshcart"}}}]);