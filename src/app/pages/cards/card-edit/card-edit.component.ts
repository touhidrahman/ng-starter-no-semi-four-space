import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { SpartanImports } from '@core/ui/spartan-imports'
import { HlmLabel } from "@spartan-ng/helm/label";
import {
    hlmH3,
} from '@spartan-ng/helm/typography'


@Component({
  selector: 'app-card-edit',
  imports: [...SpartanImports, ReactiveFormsModule, HlmLabel],
  templateUrl: './card-edit.component.html',
  styleUrl: './card-edit.component.css'
})
export class CardEditComponent {
    private fb = inject(FormBuilder);

    hlmH3 = hlmH3;

    cardForm = this.fb.group({
        cardName: [''],
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        expiryDate: [''],
        currentBalance: [''],
        monthlyDueDate: [''],
        statementDate: [''],
        creditLimit: [''],
    });
}
