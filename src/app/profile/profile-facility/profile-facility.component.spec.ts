import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFacilityComponent } from './profile-facility.component';

describe('ProfileFacilityComponent', () => {
  let component: ProfileFacilityComponent;
  let fixture: ComponentFixture<ProfileFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
