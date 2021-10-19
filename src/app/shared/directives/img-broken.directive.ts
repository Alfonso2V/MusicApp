import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' //Solo hacerlo funcionar con imagenes
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void{
    const elNative = this.elHost.nativeElement
    elNative.src = '../../../assets/img404.png' //Imagen de respaldo en caso de que no funcione la predetermnada
  }

  constructor(private elHost: ElementRef) {
    
  }

}
