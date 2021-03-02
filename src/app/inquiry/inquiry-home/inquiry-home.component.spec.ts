import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryHomeComponent } from './inquiry-home.component';

describe('InquiryHomeComponent', () => {
  let component: InquiryHomeComponent;
  let fixture: ComponentFixture<InquiryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
