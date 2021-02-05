import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ViewArticlePageComponent } from './view-article-page.component'

describe('ViewArticlePageComponent', () => {
    let component: ViewArticlePageComponent
    let fixture: ComponentFixture<ViewArticlePageComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewArticlePageComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewArticlePageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
