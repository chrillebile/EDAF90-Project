import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificInformationComponent } from './specific-information.component';

describe('SpecificInformationComponent', () => {
  let component: SpecificInformationComponent;
  let fixture: ComponentFixture<SpecificInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
