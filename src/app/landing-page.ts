import { Component } from '@angular/core';

/**
 * LandingPage component
 *
 * This component renders the landing page of the airport management UI.
 * It is a standalone Angular component that provides a simple layout
 * consistent with the design guidelines. The page includes a header
 * with navigation links, a hero section that introduces the application,
 * a benefits section highlighting key features, and a footer.
 */
@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  // At this time no logic is needed. Future enhancements (e.g. dynamic
  // navigation or user-specific messaging) can be added here.
}
