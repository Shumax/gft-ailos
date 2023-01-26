import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperatedComponent } from './cooperated.component';

describe('CooperatedComponent', () => {
  let component: CooperatedComponent;
  let fixture: ComponentFixture<CooperatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
