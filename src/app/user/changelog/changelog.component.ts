import { Component } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent {
  lstLogs = {
    "site": {
      "1.0": {
        "date": "04.09.2023",
        "title": "Initial release",
        "description": "First operational version of the site based on the services provided by the company.",
        "last": {
          "version": "1.0.15",
          "date": "11/13/2023"
        }
      },
      "1.1": {
        "date": "05.01.2023",
        "title": "Project page enabled",
        "description": "The projects page was implemented to show their information",
        "last": {
          "version": "1.1.05",
          "date": "06/25/2023"
        }
      },
      "1.2": {
        "date": "05.30.2023",
        "title": "Developer space",
        "description": "We generate a channel so that builders can contact us to evaluate their projects and expand our product portfolio",
        "last": {
          "version": "1.2.18",
          "date": "11/28/2023"
        }
      }
    },
    "dashboard": {
      "1.0": {
        "date": "04.01.2023",
        "title": "Initial release",
        "description": "First operational version of backoffice.",
        "last": {
          "version": "1.0.0",
          "date": "04/01/2023"
        }
      }
    }
  }
}
