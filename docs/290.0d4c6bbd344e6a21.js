"use strict";(self.webpackChunkFresh_Cart=self.webpackChunkFresh_Cart||[]).push([[290],{5290:(x,d,o)=>{o.r(d),o.d(d,{CartComponent:()=>v});var _=o(6814),m=o(1120),t=o(9212),C=o(2893);function b(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",10)(1,"div",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div")(5,"h3",14),t._uU(6),t.qZA(),t.TgZ(7,"p",15),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"button",16,17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.MAs(11),a=t.oxw(2);return t.KtG(a.removeItem(s.product._id,c))}),t._UZ(12,"i",18),t._uU(13," Remove "),t.qZA()(),t.TgZ(14,"div")(15,"button",19,20),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.MAs(16),a=t.MAs(21),l=t.oxw(2);return t.KtG(l.changeCount(s.count-1,s.product._id,c,a))}),t._uU(17," - "),t.qZA(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"button",19,21),t.NdJ("click",function(){const s=t.CHM(e).$implicit,c=t.MAs(16),a=t.MAs(21),l=t.oxw(2);return t.KtG(l.changeCount(s.count+1,s.product._id,c,a))}),t._uU(22," + "),t.qZA()()()()}if(2&i){const e=u.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",e.product.title),t.xp6(4),t.Oqu(e.product.title),t.xp6(2),t.hij(" Price: ",t.xi3(9,5,e.price,"EGP ")," "),t.xp6(11),t.hij(" ",e.count," ")}}const p=i=>["/payment",i];function g(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"h1",4),t._uU(3,"Shop Cart"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clear())}),t._uU(5," Clear Cart "),t.qZA()(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,b,23,8,"div",7),t.TgZ(10,"button",8),t._uU(11," Online Payment "),t._UZ(12,"img",9),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(7),t.hij(" Total Price: ",t.xi3(8,3,e.cartDetails.totalCartPrice,"EGP ")," "),t.xp6(2),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(6,p,e.cartDetails._id))}}function h(i,u){1&i&&(t.TgZ(0,"h2",22),t._uU(1,"Your Cart Is Empty..."),t.qZA())}let v=(()=>{class i{constructor(e,r){this._CartService=e,this._Renderer2=r,this.cartDetails=null}ngOnInit(){this._CartService.getCartUser().subscribe({next:e=>{console.log("getcart",e),this.cartDetails=e.data}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeCartItem(e).subscribe({next:n=>{console.log("remove",n),this.cartDetails=n.data,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNumber.next(n.numOfCartItems)},error:n=>{this._Renderer2.removeAttribute(r,"disabled")}})}changeCount(e,r,n,s){e>=1&&(this._Renderer2.setAttribute(n,"disabled","true"),this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.updateCartCount(r,e).subscribe({next:c=>{this.cartDetails=c.data,this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(s,"disabled")},error:c=>{this._Renderer2.removeAttribute(n,"disabled"),this._Renderer2.removeAttribute(s,"disabled")}}))}clear(){this._CartService.clearCart().subscribe({next:e=>{"success"===e.message&&(this.cartDetails=null,this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(C.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","w-75 mx-auto rounded shadow bg-main-light p-3 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"w-75","mx-auto","rounded","shadow","bg-main-light","p-3","mb-3"],[1,"d-flex","justify-content-between","align-items-center"],[1,"h2"],[1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-main"],["class","row border-bottom py-2",4,"ngFor","ngForOf"],[1,"main-btn","mt-3",3,"routerLink"],["src","./assets/images/visa.svg","alt","visa logo"],[1,"row","border-bottom","py-2"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","justify-content-between","align-items-center"],[1,"h6"],[1,"text-main","small","mb-0"],[1,"btn","m-0","p-0","text-main",3,"click"],["btnRemove",""],[1,"fas","fa-trash-can"],[1,"btn","btn-sm","border-success",3,"click"],["btn1",""],["btn2",""],[1,"text-center"]],template:function(r,n){if(1&r&&t.YNc(0,g,13,8,"section",0)(1,h,2,0,"ng-template",null,1,t.W1O),2&r){const s=t.MAs(2);t.Q6J("ngIf",n.cartDetails)("ngIfElse",s)}},dependencies:[_.ez,_.sg,_.O5,_.H9,m.rH]})}return i})()}}]);