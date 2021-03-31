import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPrinterComponent } from './register-printer.component';

describe('RegisterPrinterComponent', () => {
  let component: RegisterPrinterComponent;
  let fixture: ComponentFixture<RegisterPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
