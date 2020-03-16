import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservarcitaPage } from './reservarcita.page';

describe('ReservarcitaPage', () => {
  let component: ReservarcitaPage;
  let fixture: ComponentFixture<ReservarcitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarcitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservarcitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
