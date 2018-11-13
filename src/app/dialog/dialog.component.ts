import { Component, Type, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver, ComponentRef, ChangeDetectorRef} from '@angular/core';
import { InsertionDirective } from './insertion.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

    componentRef: ComponentRef<any>;

    childComponentType: Type<any>;

    @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }

    loadChildComponent(componentType: Type<any>) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

        let viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();

        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }

    onOverlayClicked(evt: MouseEvent) {
    }

    onDialogClicked(evt: MouseEvent) {
        evt.stopPropagation();
    }
}