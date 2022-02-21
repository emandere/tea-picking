import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaAnalysisComponent } from './tea-analysis.component';

describe('TeaAnalysisComponent', () => {
  let component: TeaAnalysisComponent;
  let fixture: ComponentFixture<TeaAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
