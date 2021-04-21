import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ArticleDetailsPageComponent } from './article-details-page.component'

describe('ArticleDetailsPageComponent', () => {
    let component: ArticleDetailsPageComponent
    let fixture: ComponentFixture<ArticleDetailsPageComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticleDetailsPageComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleDetailsPageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
