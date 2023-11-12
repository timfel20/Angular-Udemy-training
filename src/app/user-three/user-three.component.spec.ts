import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThreeComponent } from './user-three.component';

describe('UserThreeComponent', () => {
  let component: UserThreeComponent;
  let fixture: ComponentFixture<UserThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
