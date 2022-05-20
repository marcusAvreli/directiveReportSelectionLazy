import {Component,  ViewChild, ComponentFactoryResolver} from '@angular/core';
import {IdentityComponent} from './identity/identity.component';
import {CertificationComponent} from './certification/certification.component';
import { AdDirective } from './ad.directive';

@Component({
	selector: 'app-report-reader',
	styleUrls: ['./report-reader.component.scss'],
	templateUrl: './report-reader.component.html' 
})

export class ReportReaderComponent /*implements OnInit */{
  
	@ViewChild(AdDirective) adHost: AdDirective;

	public components = [IdentityComponent, CertificationComponent];
	public currentComponent = null;
	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	public renderIdentity(): void {    
		const currentComponent = this.components[0];    
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent as any);
		let viewContainerRef = this.adHost.viewContainerRef;
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
	}
  
	public renderCertification(): void {
		const currentComponent = this.components[1];
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent as any);
		let viewContainerRef = this.adHost.viewContainerRef;
		viewContainerRef.clear();
		let componentRef = viewContainerRef.createComponent(componentFactory);
	}
}