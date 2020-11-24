import firebase from 'firebase'

if (!firebase.apps.length) {
  const options = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSendId,
    appId: process.env.APP_ID
  }
  if (process.env.MEASUREMENT_ID) {
    options['measurementId'] = process.env.measurementId
  }
  if (process.server) {
    console.log(`firebase project [ ${options.projectId} ]`)
  }
  firebase.initializeApp(options)
}

export default firebase
