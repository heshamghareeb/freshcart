import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartInterface } from 'src/app/common/interfaces/cart-interface';
import { CuttextPipe } from 'src/app/common/pipes/cuttext.pipe';
import { CartService } from 'src/app/common/services/cart.service';
import { EcomdataService } from 'src/app/common/services/ecomdata.service';

@Component({
  selector: 'app-whishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe, ToastrModule, TranslateModule],
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss'],
})
export class WhishlistComponent implements OnInit {
  constructor(
    private _EcomdataService: EcomdataService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}

  whishList: any[] = [];

  ngOnInit(): void {
    this._EcomdataService.getWishlist().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.whishList = response.data;
          this._EcomdataService.updateWhishNumberSignal(response.data.length);
        }
      },
    });
  }

  addToCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (response:CartInterface) => {
        if (response.status === 'success') {

          this._ToastrService.success(response.message);

          this._CartService.updateCartNumberSignal(response.numOfCartItems)
        }
      },
    });
  }

  removeFromWhish(id: string): void {
    this._EcomdataService.removeWishlist(id).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this._ToastrService.success(response.message, '', {
            positionClass: 'toast-bottom-right',
          });

          this.whishList = this.whishList.filter((item) =>
            response.data.includes(item._id)
          );
          this._EcomdataService.updateWishlistItem(response.data);
          this._EcomdataService.updateWhishNumberSignal(this.whishList.length);
        }
      },
    });
  }
}
