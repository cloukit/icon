import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloukitIconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: CloukitIconComponent;
  let fixture: ComponentFixture<CloukitIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
