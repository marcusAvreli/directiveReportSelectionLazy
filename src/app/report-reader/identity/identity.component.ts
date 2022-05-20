import {Component, OnInit,OnDestroy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  
})
export class IdentityComponent  implements OnInit, OnDestroy {	
	proveedorArray: any[];
	facturaForm: FormGroup = new FormGroup({
		Id:new FormControl(),
		Factura: new FormControl(),
		Fecha:new FormControl(),
		Ncliente: new FormControl(),
		ClaveEmpresa:new FormControl(),
		ClaveProveedor: new FormControl()
	});
	disabled = false;
	form: FormGroup = new FormGroup({});
	constructor(private formBuilder: FormBuilder) {}
	
	ngOnInit(): void {
		console.log("identity init started identity");	
		this.initCatalogos();
	}
	initCatalogos() {	
		const array = [];
		array.push({"name": "Report_1","id": "1"});
		this.proveedorArray = array;
	}	
	ngOnDestroy() {
		console.log("destroy identity");    
	}
	proveedor_OnSelect(response){
		console.log("proveedor_OnSelect"+response);
		if(response!=null){
		 
		} else {
		 
		}
	}
}