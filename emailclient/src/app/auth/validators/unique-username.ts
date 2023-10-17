import { HttpClient, HttpErrorResponse, HttpResponse, HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { AuthService } from "../auth.service";


@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {



  constructor(private readonly authService: AuthService) { }
  validate = async (formControl: AbstractControl): Promise<ValidationErrors | null> => {

    const username = formControl.value;

    try {
       await this.authService.usernameAvailable(username);
      return null;
    } catch (error) {
      let errorResponse: ValidationErrors = {
        usernameNotUnique: true
      }
      return errorResponse
    }

  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }




}
