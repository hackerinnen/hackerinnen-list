import { config } from '@vue/test-utils'

config.global.mocks['$gapi'] = {
  getGapiClient: () => {
    return {
      "client": {
        "sheets": {
          "spreadsheets": {
            "values": {
              get: () => {
                return {body: '{"values":[]}'}
              }
            }
          }
        }
      }
    }
  }
}
