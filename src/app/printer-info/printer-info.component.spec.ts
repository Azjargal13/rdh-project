import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterInfoComponent } from './printer-info.component';

describe('PrinterInfoComponent', () => {
  let component: PrinterInfoComponent;
  let fixture: ComponentFixture<PrinterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
