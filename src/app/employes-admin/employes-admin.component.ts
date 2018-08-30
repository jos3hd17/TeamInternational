import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employes-admin',
  template:'<router-outlet></router-outlet>'
})
export class EmployesAdminComponent implements OnInit {
  
  //Se define la estructura de esta manera, por que para cada "Epica", o funcionalidad
  //Los componentes deben estar estructurados de tal forma que sea simple de mantener

  constructor(private router:Router) {
    //La lista de usuarios será la pagina principal.
    this.router.navigate(['employee/list']);
   }

  ngOnInit() {
  }

}
