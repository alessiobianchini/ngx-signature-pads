import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSignaturePadsComponent } from './ngx-signature-pads.component';

describe('NgxSignaturePadsComponent', () => {
  let component: NgxSignaturePadsComponent;
  let fixture: ComponentFixture<NgxSignaturePadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSignaturePadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxSignaturePadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
