import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignTxComponent } from './sign-tx.component';

describe('SignTxComponent', () => {
  let component: SignTxComponent;
  let fixture: ComponentFixture<SignTxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignTxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
