import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForBetterComponent } from './template-for-better.component';

describe('TemplateForBetterComponent', () => {
  let component: TemplateForBetterComponent;
  let fixture: ComponentFixture<TemplateForBetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateForBetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateForBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
