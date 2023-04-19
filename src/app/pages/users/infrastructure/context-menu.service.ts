import { FlexibleConnectedPositionStrategy, ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { User } from 'src/app/core/interfaces';

@Injectable()
export class ContextMenuService {

  private overlayRef: OverlayRef | null = null;

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly overlay: Overlay
  ) { }

  openMenu(user: User, menuTemplate: TemplateRef<any>, event: MouseEvent) {
    this.closeMenu();

    const positionStrategy = this.getPositionStrategy(event.clientX, event.clientY);

    this.overlayRef = this.overlay.create({ positionStrategy });

    const portal = new TemplatePortal(menuTemplate, this.viewContainerRef, { user });

    this.overlayRef.attach(portal);
  }


  closeMenu() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }

  getPositionStrategy(x: number, y: number): FlexibleConnectedPositionStrategy {
    const positions: ConnectedPosition[] = [
      {
        originX: 'center',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'top',
      },
    ];

    return this.overlay.position()
      .flexibleConnectedTo({ x, y })
      .withPositions(positions)
      .withPush(false)
      .withViewportMargin(8);
  }
}
