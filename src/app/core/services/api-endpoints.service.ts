import { ApiUrls } from './../constants/api-url.constants';
import { Injectable } from '@angular/core';
import { QueryStringParameters } from '../models/query-string-parameters';
import { UrlBuilder } from '../models/url-builder';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor(private ApiUrls: ApiUrls) { }
  /* #region URL CREATOR */
  // URL
  private createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(isMockAPI ? this.ApiUrls.API_MOCK_ENDPOINT : this.ApiUrls.API_ENDPOINT, action);
    return urlBuilder.toString();
  }
  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(action: string, queryStringHandler?: (queryStringParameters: QueryStringParameters) => void): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.ApiUrls.API_ENDPOINT, action);
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(action: string, pathVariables: any[] = []): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.ApiUrls.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
  /* #endregion */

  public getCustomersEndoint() : string{
    return this.createUrl(this.ApiUrls.CUSTOMER);
  }

  public getCustomersEndointWithId(id:string) : string{
    return this.createUrlWithPathVariables(this.ApiUrls.CUSTOMER,[id]);
  }


}
