// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MARVEL_API: {
    URL: 'https://gateway.marvel.com:443',
    PUBLIC_KEY: '4e30cfb85ee4a95f95162a5c2045c392',
    PRIVATE_KEY: '0864e9dd808ef693b03659fc2c15c913a217939a',
},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
