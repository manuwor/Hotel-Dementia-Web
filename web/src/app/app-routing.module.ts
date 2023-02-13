import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { EsportsHomeComponent } from './components/pages/esports-home/esports-home.component';
import { BostingHomeComponent } from './components/pages/bosting-home/bosting-home.component';
import { MagazineHomeComponent } from './components/pages/magazine-home/magazine-home.component';
import { TournamentsHomeComponent } from './components/pages/tournaments-home/tournaments-home.component';
import { StreamingHomeComponent } from './components/pages/streaming-home/streaming-home.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SponsorsPageComponent } from './components/pages/sponsors-page/sponsors-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ProductsListPageOneComponent } from './components/pages/products-list-page-one/products-list-page-one.component';
import { ProductsListPageTwoComponent } from './components/pages/products-list-page-two/products-list-page-two.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { BlogGridTwoInRowPageComponent } from './components/pages/blog-grid-two-in-row-page/blog-grid-two-in-row-page.component';
import { BlogGridThreeInRowPageComponent } from './components/pages/blog-grid-three-in-row-page/blog-grid-three-in-row-page.component';
import { BlogMasonryPageComponent } from './components/pages/blog-masonry-page/blog-masonry-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { PlayerDetailsPageComponent } from './components/pages/player-details-page/player-details-page.component';
import { TeamDetailsPageComponent } from './components/pages/team-details-page/team-details-page.component';
import { MatchDetailsPageComponent } from './components/pages/match-details-page/match-details-page.component';
import { TournamentsDetailsPageComponent } from './components/pages/tournaments-details-page/tournaments-details-page.component';
import { StreamSchedulePageComponent } from './components/pages/stream-schedule-page/stream-schedule-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { NovelComponent } from './components/novel/novel.component';
import { StartNovelComponent } from './components/start-novel/start-novel.component';
import { ChooseEpComponent } from './components/choose-ep/choose-ep.component';
import { OurGuestComponent } from './components/our-guest/our-guest.component';
import { VisualNovelComponent } from './components/visual-novel/visual-novel.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';

const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'our-guest', component: OurGuestComponent},
    {path: 'our-partner', component: OurPartnerComponent},
    {path: 'choose-lang', component: StartNovelComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'choose-ep', component: ChooseEpComponent},
    {path: 'novel-ep-1', component: NovelComponent},
    {path: 'novel-ep-2', component: NovelComponent},
    {path: 'novel-ep-3', component: NovelComponent},
    {path: 'novel-ep-4', component: NovelComponent},
    {path: 'novel-ep-5', component: NovelComponent},
    {path: 'novel-ep-6', component: NovelComponent},
    {path: 'novel-ep-7', component: NovelComponent},
    {path: 'visual-novel', component: VisualNovelComponent},
    {path: 'esports', component: EsportsHomeComponent},
    {path: 'bosting', component: BostingHomeComponent},
    {path: 'magazine', component: MagazineHomeComponent},
    {path: 'tournaments', component: TournamentsHomeComponent},
    {path: 'streaming', component: StreamingHomeComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'sponsors', component: SponsorsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: 'stream-schedule', component: StreamSchedulePageComponent},
    {path: 'single-tournament', component: TournamentsDetailsPageComponent},
    {path: 'single-match', component: MatchDetailsPageComponent},
    {path: 'single-team', component: TeamDetailsPageComponent},
    {path: 'single-player', component: PlayerDetailsPageComponent},
    {path: 'products-list-1', component: ProductsListPageOneComponent},
    {path: 'products-list-2', component: ProductsListPageTwoComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    {path: 'single-products', component: ProductsDetailsPageComponent},
    {path: 'my-account', component: ProfileAuthenticationPageComponent},
    {path: 'blog-1', component: BlogGridTwoInRowPageComponent},
    {path: 'blog-2', component: BlogGridThreeInRowPageComponent},
    {path: 'blog-3', component: BlogMasonryPageComponent},
    {path: 'blog-4', component: BlogRightSidebarPageComponent},
    {path: 'blog-5', component: BlogLeftSidebarPageComponent},
    {path: 'single-blog', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }