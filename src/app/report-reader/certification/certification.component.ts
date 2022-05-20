import {Component, OnInit,OnDestroy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
  
})
export class CertificationComponent implements OnInit, OnDestroy {
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
		console.log("certification init started");	
		this.initCatalogos();
	}
	initCatalogos() {	
		const array = [];
		array.push({"name": "Certification_Report","id": "1"});
		this.proveedorArray = array;
	}	
	ngOnDestroy() {
		console.log("destroy certification");    
	}
	proveedor_OnSelect(response){
		console.log("proveedor_OnSelect:"+response);
		if(response!=null){
		 
		} else {
		 
		}
	}	
}