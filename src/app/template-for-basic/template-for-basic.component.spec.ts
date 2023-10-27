import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForBasicComponent } from './template-for-basic.component';

describe('TemplateForBasicComponent', () => {
  let component: TemplateForBasicComponent;
  let fixture: ComponentFixture<TemplateForBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateForBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateForBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
