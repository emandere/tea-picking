import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaPickingComponent } from './tea-picking.component';

describe('TeaPickingComponent', () => {
  let component: TeaPickingComponent;
  let fixture: ComponentFixture<TeaPickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaPickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
