import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Dish} from '../shared/dish';
import {DishService} from '../services/dish.service';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseurl';
import {Observable,of} from 'rxjs';
import { MenuComponent } from '../menu/menu.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FlexLayoutModule,RouterTestingModule.withRoutes([{path:'menu',component:MenuComponent}]),
      MatGridListModule,MatProgressSpinnerModule],
      declarations: [ ContactComponent ],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
