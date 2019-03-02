import { Component } from '@angular/core';
import {
  Action,
  AdvancedLayout,
  ButtonEvent,
  GalleryService,
  Image,
  ImageModalEvent,
  PlainGalleryConfig,
  PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{

  private currentLocation: any;

  imageIndex = 1;
  galleryId = 1;

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: 'assets/Images/gallery/cycling-bikes.jpg',
        description: 'Long distance ride! etc etc'
      },
      { img: 'assets/Images/gallery/thumbs/cycling-bikes.jpg' }
    ),
    new Image(1, { img: 'assets/Images/gallery/group.jpg' }, { img: 'assets/Images/gallery/thumbs/group.jpg' }),
    new Image(
      2,
      {
        img: 'assets/Images/gallery/crash.jpg',
        description: 'Test to see difference'
      },
      {
        img: 'assets/Images/gallery/thumbs/crash.jpg',
        description: 'Description 3'
      }
    ),
    new Image(
      3,
      {
        img: 'assets/Images/gallery/max.jpg',
        description: 'Description 4'
      },
      { img: 'assets/Images/gallery/thumbs/max.jpg' }
    ),
    new Image(4, { img: 'assets/Images/gallery/this.jpg' }, { img: 'assets/Images/gallery/thumbs/this.jpg' }),
    new Image(
      5,
      {
        img: 'assets/Images/gallery/another.jpg',
        description: 'Description 6'
      },
      { img: 'assets/Images/gallery/thumbs/another.jpg' }
    ),
    new Image(6, { img: 'assets/Images/gallery/road-bikes.jpg' }, { img: 'assets/Images/gallery/road-bikes.jpg' }),
    new Image(7, { img: 'assets/Images/gallery/C132.jpg' }, { img: 'assets/Images/gallery/thumbs/C132.jpg' })
  ];
  //here starts the bikes images 
  bikes: Image[] = [
    new Image(
      0,
      {
        img: 'assets/Images/gallery/cycling-bikes.jpg',
        description: 'Long distance ride! etc etc'
      },
      { img: 'assets/Images/gallery/thumbs/cycling-bikes.jpg' }
    ),
    new Image(1, { img: 'assets/Images/gallery/group.jpg' }, { img: 'assets/Images/gallery/thumbs/group.jpg' }),
    new Image(
      2,
      {
        img: 'assets/Images/gallery/crash.jpg',
        description: 'Description 3'
      },
      {
        img: 'assets/Images/gallery/thumbs/crash.jpg',
        description: 'Description 3'
      }
    ),
    new Image(
      3,
      {
        img: 'assets/Images/gallery/max.jpg',
        description: 'Description 4'
      },
      { img: 'assets/Images/gallery/thumbs/max.jpg' }
    ),
    new Image(4, { img: 'assets/Images/gallery/this.jpg' }, { img: 'assets/Images/gallery/thumbs/this.jpg' }),
    new Image(
      5,
      {
        img: 'assets/Images/gallery/another.jpg',
        description: 'Description 6'
      },
      { img: 'assets/Images/gallery/thumbs/another.jpg' }
    ),
    new Image(6, { img: 'assets/Images/gallery/road-bikes.jpg' }, { img: 'assets/Images/gallery/road-bikes.jpg' }),
    new Image(7, { img: 'assets/Images/gallery/C132.jpg' }, { img: 'assets/Images/gallery/thumbs/C132.jpg' })
  ];
  //construcor with created gallery service
  constructor(private galleryService: GalleryService) {}
  //code for opening the images
  openImageModalRowDescription(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }
  onButtonAfterHook(event: ButtonEvent) {
    console.log('onButtonAfterHook ', event);

    if (!event || !event.button) {
      return;
    }
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    console.log('onVisibleIndex action: ' + Action[event.action]);
    console.log('onVisibleIndex result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onIsFirstImage onfirst action: ' + Action[event.action]);
    console.log('onIsFirstImage onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onIsLastImage onlast action: ' + Action[event.action]);
    console.log('onIsLastImage onlast result:' + event.result);
  }

  onShowAutoCloseExample(event: ImageModalEvent, galleryId: number) {
    console.log(`onShowAutoCloseExample with id=${galleryId} action: ` + Action[event.action]);
    console.log('onShowAutoCloseExample result:' + event.result);
    console.log('Starting timeout of 3 second to close modal gallery automatically');
    setTimeout(() => {
      console.log('setTimeout end - closing gallery with id=' + galleryId);
      this.galleryService.closeGallery(galleryId);
    }, 3000);
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}
