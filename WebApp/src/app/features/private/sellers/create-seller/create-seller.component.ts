import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import  {getErrorMessages} from '../../../../shared/validators/error-messages';
import {validaciones} from '../../../../shared/validators/error_validators/seller-validator'
import { last } from 'rxjs';
import { passwordMatchValidator } from '../../../../shared/validators/custom_validators/password-match.validator';
import {  MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { passwordPatternValidator } from '../../../../shared/validators/custom_validators/8char1may.validator';

@Component({
  selector: 'app-create-seller',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
    
  ],
  templateUrl: './create-seller.component.html',
  styleUrl: './create-seller.component.scss'
})
export class CreateSellerComponent {
  private readonly fb = inject(FormBuilder);
  getErrorMessages = getErrorMessages;
  validaciones=validaciones;
  hide1=true;
  hide2=true;
  sellerForm=this.fb.group({
    name: ['',[Validators.required,Validators.maxLength(50)]],
    lastName: ['',[Validators.required,Validators.maxLength(50)]],
    email: ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),Validators.maxLength(50)]],        
    password: ['',[Validators.required,passwordPatternValidator]],
    confirmPassword: ['',[Validators.required]]
  },
  { validators: passwordMatchValidator })

  onCreateSeller(){
    
  }
  onCancelCreate(){
    this.sellerForm.reset();
    this.sellerForm.markAsPristine();
    this.sellerForm.markAsUntouched();
    this.hide1 = true;
    this.hide2=true;
  }

}
