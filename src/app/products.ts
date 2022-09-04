export interface Product {
  id: number,
  name: string,
  price: number,
  shortDescription: string,
  description: string,
}

// text use is from https://lipsum.com/feed/html
export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    shortDescription: 'A large phone with one of the best screens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod bibendum diam et iaculis. Maecenas eu blandit sapien. Donec nec tellus risus. Mauris laoreet at felis eu rutrum. Quisque quis libero enim. Phasellus nec pellentesque lacus. Aenean ullamcorper nunc non nisi semper, at gravida dolor facilisis. Cras eleifend ex risus, nec congue metus faucibus nec. Fusce efficitur neque sed lorem luctus finibus. Sed lobortis sapien sapien, id consequat dui lacinia at. Nunc vel tincidunt ex.'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    shortDescription: 'A great phone with one of the best cameras',
    description : 'Duis a molestie turpis. Donec commodo sem id auctor elementum. Morbi volutpat, est quis pulvinar malesuada, ante elit lacinia neque, eget viverra turpis neque ut enim. Praesent condimentum pellentesque purus, nec placerat tellus interdum vitae. Vivamus vitae massa eget sem pulvinar feugiat. In hendrerit mi mauris, nec elementum ante posuere ut. Mauris quis lectus at justo scelerisque sollicitudin eu non lacus. Nunc vel orci vel velit imperdiet cursus. Proin sed dolor sollicitudin, convallis ipsum a, blandit magna. Morbi ornare dolor pellentesque leo efficitur feugiat ut ac lorem. Maecenas vulputate lacinia ipsum, vitae egestas ante semper at.'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    shortDescription: 'Suspendisse finibus dapibus purus. Ut pharetra porttitor felis. Donec vulputate ',
    description: 'Fusce elit magna, volutpat non pellentesque vel, consequat quis metus. Curabitur ornare tempor odio. Praesent interdum commodo ultricies. Aliquam tempus ligula ut lorem congue lobortis. Suspendisse finibus dapibus purus. Ut pharetra porttitor felis. Donec vulputate laoreet mollis. Donec eleifend nisi tincidunt, aliquam justo non, fermentum lectus.'
  }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */