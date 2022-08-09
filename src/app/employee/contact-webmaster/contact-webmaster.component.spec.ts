import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWebmasterComponent } from './contact-webmaster.component';

describe('ContactWebmasterComponent', () => {
  let component: ContactWebmasterComponent;
  let fixture: ComponentFixture<ContactWebmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactWebmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWebmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
