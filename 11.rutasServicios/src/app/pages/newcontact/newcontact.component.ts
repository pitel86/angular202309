import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaService } from 'src/app/shared/services/agenda.service';


@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent implements OnInit{
  contactForm!: FormGroup;
  submitted: boolean = false;
  constructor(private form: FormBuilder, private agendaS: AgendaService){}

  ngOnInit(): void {
    this.contactForm = this.form.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      phone: [ "", [Validators.required]],
    });
  }

  addContact(){
    this.submitted = true;
    console.log("quiero añadir contacto", this.contactForm.value);
    if(this.contactForm.valid){
      console.log("es valido");

      this.agendaS.addContacto(this.contactForm.value);
    }
  }

}
