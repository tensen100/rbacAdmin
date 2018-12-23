import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Quote} from '../../../domain';
import * as fromRoot from '../../../reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote$: Observable<Quote>;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromRoot.State>) {
    this.quote$ = store.pipe(select(fromRoot.getQuote));
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['wang@163.com', Validators.compose([Validators.required, Validators.email, this.validate])],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(valid);
    if (!valid) {
      return;
    }
  }

  // 自定义验证器
  private validate = (c: FormControl): { [key: string]: any } => {
    if (!c.value) {
      return null;
    }
    const pattern = /^wang+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'the email must start with wang'
    };
  }
}
