import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimintoComponent } from './procediminto.component';

describe('ProcedimintoComponent', () => {
  let component: ProcedimintoComponent;
  let fixture: ComponentFixture<ProcedimintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimintoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
