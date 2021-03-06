/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class IrondbDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    id: number;
    name: string;
    type: string;
    accountId: number;
    irondbType: string;
    queryPrefix: string;
    url: any;
    apiToken: string;
    appName: string;
    supportAnnotations: boolean;
    supportMetrics: boolean;
    basicAuth: any;
    withCredentials: any;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    query(options: any): any;
    annotationQuery(options: any): void;
    metricFindQuery(query: string): any;
    testDatasource(): any;
    _irondbSimpleRequest(method: any, url: any, isCaql?: boolean, isFind?: boolean): any;
    _irondbRequest(irondbOptions: any, isCaql?: boolean): Promise<{}>;
    _buildIrondbParamsAsync(options: any): {};
    _buildIrondbParams(options: any): Promise<{}>;
    _convertIrondbDataToGrafana(data: any): {
        data: any[];
    };
    _convertIrondbCaqlDataToGrafana(data: any, name: any): {
        data: any[];
    };
    _convertIrondbCaqlDataToGrafanaHeatmap(data: any, query: any): {
        data: any[];
    };
}
