import { Component, ViewContainerRef, HostListener, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(vcRef: ViewContainerRef) { }

  @HostBinding('class.abc')
  hasAbcClass = true;

  @HostListener('click')
  onClick() { }

  @HostListener('keydown')
  onKeydown() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void { }
  ngOnDestroy(): void { }
  ngDoCheck(): void { }
  ngAfterViewInit(): void { }
  ngAfterContentInit(): void { }
  ngAfterViewChecked(): void { }
  ngAfterContentChecked(): void { }

}
