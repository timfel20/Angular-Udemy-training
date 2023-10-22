import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalReferencesComponent } from './local-references.component';

describe('LocalReferencesComponent', () => {
  let component: LocalReferencesComponent;
  let fixture: ComponentFixture<LocalReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
