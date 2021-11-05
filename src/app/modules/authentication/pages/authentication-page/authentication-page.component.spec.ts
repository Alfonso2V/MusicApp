import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationPageComponent } from './authentication-page.component';

describe('AuthenticationPageComponent', () => {
  let component: AuthenticationPageComponent;
  let fixture: ComponentFixture<AuthenticationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        RouterTestingModule  
      ],
      declarations: [ AuthenticationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
