import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('menu') menu!: ElementRef<HTMLUListElement>;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 200) {
      this.menu.nativeElement.classList.add('border', 'border-[#dddf00]');
      this.menu.nativeElement.classList.replace('bg-purple-950','bg-purple-950/55');
    } else {
      this.menu.nativeElement.classList.remove('border', 'border-[#dddf00]');
      this.menu.nativeElement.classList.replace('bg-purple-950/55','bg-purple-950');
    }
  }

}
