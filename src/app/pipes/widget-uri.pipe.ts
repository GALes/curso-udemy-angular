import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'widgetUri'
})
export class WidgetUriPipe implements PipeTransform {

  constructor(
    private domSanitizer: DomSanitizer
  ) {
  }

  transform(uri: string) {
    console.log(`https://open.spotify.com/embed/track/${uri.split(':')[2]}`);
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/track/${uri.split(':')[2]}`);
  }

}
